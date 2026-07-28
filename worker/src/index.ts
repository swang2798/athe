export interface Env {
  DB: D1Database;
  ADMIN_PASSWORD: string;
}

interface CafeEvent {
  date: string;
  startHour: number;
  endHour: number;
  seatsPerHour: number;
  timezone: string;
}

const cafeEvents: CafeEvent[] = [
  {
    date: "2026-08-02",
    startHour: 10,
    endHour: 14,
    seatsPerHour: 4,
    timezone: "PST",
  },
];

function findEvent(date: string): CafeEvent | undefined {
  return cafeEvents.find((e) => e.date === date);
}

function generateCode(): string {
  const bytes = new Uint8Array(3);
  crypto.getRandomValues(bytes);
  return Array.from(bytes)
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

function corsHeaders(origin: string | null): Record<string, string> {
  const allowed = ["https://everydayathe.com", "http://localhost:3000"];
  const o = origin && allowed.includes(origin) ? origin : allowed[0];
  return {
    "Access-Control-Allow-Origin": o,
    "Access-Control-Allow-Methods": "GET, POST, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, x-admin-password",
  };
}

function json(data: unknown, status: number, origin: string | null): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json", ...corsHeaders(origin) },
  });
}

async function handleAvailability(
  url: URL,
  env: Env,
  origin: string | null
): Promise<Response> {
  const date = url.searchParams.get("date");
  if (!date) return json({ error: "date required" }, 400, origin);

  const event = findEvent(date);
  if (!event) return json({ error: "unknown event date" }, 404, origin);

  const rows = await env.DB.prepare(
    "SELECT slot_hour, SUM(party_size) as taken FROM reservations WHERE event_date = ? GROUP BY slot_hour"
  )
    .bind(date)
    .all<{ slot_hour: number; taken: number }>();

  const takenMap = new Map(rows.results.map((r) => [r.slot_hour, r.taken]));

  const slots = [];
  for (let hour = event.startHour; hour < event.endHour; hour++) {
    slots.push({
      hour,
      seatsLeft: event.seatsPerHour - (takenMap.get(hour) || 0),
    });
  }

  return json({ date, slots }, 200, origin);
}

async function handleReserve(
  request: Request,
  env: Env,
  origin: string | null
): Promise<Response> {
  const body = await request.json<{
    date?: string;
    hour?: number;
    name?: string;
    partySize?: number;
  }>();

  const { date, hour, name, partySize } = body;

  if (!date || hour === undefined || !name || !partySize) {
    return json({ error: "date, hour, name, partySize required" }, 400, origin);
  }

  if (typeof name !== "string" || name.trim().length === 0) {
    return json({ error: "name must be non-empty" }, 400, origin);
  }

  if (!Number.isInteger(partySize) || partySize < 1 || partySize > 4) {
    return json({ error: "partySize must be 1-4" }, 400, origin);
  }

  const event = findEvent(date);
  if (!event) return json({ error: "unknown event date" }, 404, origin);

  if (!Number.isInteger(hour) || hour < event.startHour || hour >= event.endHour) {
    return json({ error: "invalid hour for this event" }, 400, origin);
  }

  // Check availability and insert atomically via D1 batch
  const taken = await env.DB.prepare(
    "SELECT COALESCE(SUM(party_size), 0) as taken FROM reservations WHERE event_date = ? AND slot_hour = ?"
  )
    .bind(date, hour)
    .first<{ taken: number }>();

  const currentTaken = taken?.taken || 0;
  if (currentTaken + partySize > event.seatsPerHour) {
    return json(
      {
        error: "slot full",
        seatsLeft: event.seatsPerHour - currentTaken,
      },
      409,
      origin
    );
  }

  const code = generateCode();
  const createdAt = new Date().toISOString();

  await env.DB.prepare(
    "INSERT INTO reservations (code, event_date, slot_hour, name, party_size, created_at) VALUES (?, ?, ?, ?, ?, ?)"
  )
    .bind(code, date, hour, name.trim(), partySize, createdAt)
    .run();

  return json({ code, name: name.trim(), partySize, date, hour }, 200, origin);
}

async function handleBooking(
  url: URL,
  env: Env,
  origin: string | null
): Promise<Response> {
  const code = url.searchParams.get("code");
  if (!code) return json({ error: "code required" }, 400, origin);

  const row = await env.DB.prepare(
    "SELECT code, name, party_size, event_date, slot_hour FROM reservations WHERE code = ?"
  )
    .bind(code.toLowerCase())
    .first<{
      code: string;
      name: string;
      party_size: number;
      event_date: string;
      slot_hour: number;
    }>();

  if (!row) return json({ error: "not found" }, 404, origin);

  return json(
    {
      code: row.code,
      name: row.name,
      partySize: row.party_size,
      date: row.event_date,
      hour: row.slot_hour,
    },
    200,
    origin
  );
}

async function handleAdminList(
  request: Request,
  env: Env,
  origin: string | null
): Promise<Response> {
  const password = request.headers.get("x-admin-password");
  if (password !== env.ADMIN_PASSWORD) {
    return json({ error: "unauthorized" }, 401, origin);
  }

  const rows = await env.DB.prepare(
    "SELECT code, event_date, slot_hour, name, party_size, created_at FROM reservations ORDER BY event_date, slot_hour, created_at"
  ).all<{
    code: string;
    event_date: string;
    slot_hour: number;
    name: string;
    party_size: number;
    created_at: string;
  }>();

  return json({ reservations: rows.results }, 200, origin);
}

async function handleAdminDelete(
  request: Request,
  url: URL,
  env: Env,
  origin: string | null
): Promise<Response> {
  const password = request.headers.get("x-admin-password");
  if (password !== env.ADMIN_PASSWORD) {
    return json({ error: "unauthorized" }, 401, origin);
  }

  const code = url.searchParams.get("code");
  if (!code) return json({ error: "code required" }, 400, origin);

  const result = await env.DB.prepare(
    "DELETE FROM reservations WHERE code = ?"
  )
    .bind(code.toLowerCase())
    .run();

  if (result.meta.changes === 0) {
    return json({ error: "not found" }, 404, origin);
  }

  return json({ deleted: true }, 200, origin);
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const origin = request.headers.get("Origin");

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: corsHeaders(origin) });
    }

    const path = url.pathname;

    if (request.method === "GET" && path === "/api/availability") {
      return handleAvailability(url, env, origin);
    }

    if (request.method === "POST" && path === "/api/reserve") {
      return handleReserve(request, env, origin);
    }

    if (request.method === "GET" && path === "/api/booking") {
      return handleBooking(url, env, origin);
    }

    if (request.method === "GET" && path === "/api/admin/reservations") {
      return handleAdminList(request, env, origin);
    }

    if (request.method === "DELETE" && path === "/api/admin/reservation") {
      return handleAdminDelete(request, url, env, origin);
    }

    return json({ error: "not found" }, 404, origin);
  },
};
