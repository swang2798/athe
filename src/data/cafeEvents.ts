export interface CafeEvent {
  date: string; // "2026-08-02"
  startHour: number; // 10
  endHour: number; // 14 (exclusive; last slot is 13–14)
  seatsPerHour: number; // 4
  timezone: string; // "PST" (display label only)
}

export interface CafeSlot {
  hour: number; // start hour, 24h
}

export const cafeEvents: CafeEvent[] = [
  {
    date: "2026-08-02",
    startHour: 10,
    endHour: 14,
    seatsPerHour: 4,
    timezone: "PST",
  },
];

// Hourly slots for an event: startHour up to (but not including) endHour.
export function slotsForEvent(event: CafeEvent): CafeSlot[] {
  const slots: CafeSlot[] = [];
  for (let hour = event.startHour; hour < event.endHour; hour++) {
    slots.push({ hour });
  }
  return slots;
}

export function findEvent(date: string): CafeEvent | undefined {
  return cafeEvents.find((e) => e.date === date);
}

// The next event whose date is today or later, relative to a YYYY-MM-DD string.
// Returns undefined if none are upcoming.
export function nextUpcomingEvent(today: string): CafeEvent | undefined {
  return cafeEvents
    .filter((e) => e.date >= today)
    .sort((a, b) => a.date.localeCompare(b.date))[0];
}
