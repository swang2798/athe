import React, { useEffect, useState } from "react";
import { nextUpcomingEvent, slotsForEvent, CafeEvent } from "../data/cafeEvents";
import styles from "./styles/ReservePage.module.css";

const API_BASE = process.env.REACT_APP_API_BASE || "";

interface SlotAvailability {
  hour: number;
  seatsLeft: number;
}

interface Booking {
  code: string;
  name: string;
  partySize: number;
  date: string;
  hour: number;
}

function formatHour(hour: number): string {
  if (hour === 0) return "12am";
  if (hour < 12) return `${hour}am`;
  if (hour === 12) return "12pm";
  return `${hour - 12}pm`;
}

function formatSlot(hour: number): string {
  return `${formatHour(hour)} – ${formatHour(hour + 1)}`;
}

function formatDate(dateStr: string): string {
  const [y, m, d] = dateStr.split("-").map(Number);
  const date = new Date(y, m - 1, d);
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function getToday(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

const ReservePage: React.FC = () => {
  const event = nextUpcomingEvent(getToday());
  const [slots, setSlots] = useState<SlotAvailability[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Booking form
  const [selectedHour, setSelectedHour] = useState<number | null>(null);
  const [name, setName] = useState("");
  const [partySize, setPartySize] = useState(1);
  const [submitting, setSubmitting] = useState(false);

  // Confirmation / lookup
  const [booking, setBooking] = useState<Booking | null>(null);
  const [lookupCode, setLookupCode] = useState("");
  const [lookupError, setLookupError] = useState("");

  useEffect(() => {
    if (event) fetchAvailability(event);
  }, [event?.date]);

  async function fetchAvailability(ev: CafeEvent) {
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/api/availability?date=${ev.date}`);
      const data = await res.json();
      if (data.slots) {
        setSlots(data.slots);
      }
    } catch {
      setError("Could not load availability.");
    } finally {
      setLoading(false);
    }
  }

  async function handleReserve(e: React.FormEvent) {
    e.preventDefault();
    if (!event || selectedHour === null) return;

    setSubmitting(true);
    setError("");

    try {
      const res = await fetch(`${API_BASE}/api/reserve`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          date: event.date,
          hour: selectedHour,
          name: name.trim(),
          partySize,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setBooking(data);
        setSelectedHour(null);
        setName("");
        setPartySize(1);
        fetchAvailability(event);
      } else if (res.status === 409) {
        setError(`That slot just filled up! Only ${data.seatsLeft} seat(s) left.`);
        fetchAvailability(event);
      } else {
        setError(data.error || "Something went wrong.");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  async function handleLookup(e: React.FormEvent) {
    e.preventDefault();
    setLookupError("");
    const code = lookupCode.trim().toLowerCase();
    if (!code) return;

    try {
      const res = await fetch(`${API_BASE}/api/booking?code=${code}`);
      if (res.ok) {
        const data = await res.json();
        setBooking(data);
      } else {
        setLookupError("Booking not found.");
      }
    } catch {
      setLookupError("Network error.");
    }
  }

  if (!event) {
    return (
      <section className={styles.container}>
        <h2 className={styles.title}>Reserve a Slot</h2>
        <p className={styles.noEvent}>No cafe scheduled right now. Check back later!</p>
      </section>
    );
  }

  const eventSlots = slotsForEvent(event);

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Reserve a Slot</h2>
      <p className={styles.subtitle}>
        {formatDate(event.date)} &middot; {formatHour(event.startHour)}–{formatHour(event.endHour)} {event.timezone}
      </p>
      <p className={styles.note}>Max {event.seatsPerHour} guests per hour. Bring friends!</p>

      {booking && (
        <div className={styles.confirmation}>
          <h3>You're booked!</h3>
          <p><strong>{booking.name}</strong>, party of {booking.partySize}</p>
          <p>{formatSlot(booking.hour)} on {formatDate(booking.date)}</p>
          <p className={styles.code}>Booking code: <code>{booking.code}</code></p>
          <p className={styles.codeHint}>Save this code to view your reservation later.</p>
        </div>
      )}

      {!booking && (
        <>
          {loading ? (
            <p className={styles.loading}>Loading availability...</p>
          ) : (
            <form onSubmit={handleReserve} className={styles.form}>
              <div className={styles.slots}>
                {eventSlots.map((slot) => {
                  const avail = slots.find((s) => s.hour === slot.hour);
                  const seatsLeft = avail?.seatsLeft ?? event.seatsPerHour;
                  const disabled = seatsLeft === 0 || seatsLeft < partySize;
                  const selected = selectedHour === slot.hour;

                  return (
                    <button
                      key={slot.hour}
                      type="button"
                      className={`${styles.slot} ${selected ? styles.slotSelected : ""} ${disabled ? styles.slotDisabled : ""}`}
                      disabled={disabled}
                      onClick={() => setSelectedHour(slot.hour)}
                    >
                      <span className={styles.slotTime}>{formatSlot(slot.hour)}</span>
                      <span className={styles.slotSeats}>
                        {seatsLeft === 0 ? "Full" : `${seatsLeft} seat${seatsLeft !== 1 ? "s" : ""} left`}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className={styles.fields}>
                <label className={styles.label}>
                  Name
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className={styles.input}
                    placeholder="Your name"
                  />
                </label>

                <label className={styles.label}>
                  Party size
                  <select
                    value={partySize}
                    onChange={(e) => setPartySize(Number(e.target.value))}
                    className={styles.select}
                  >
                    {[1, 2, 3, 4].map((n) => (
                      <option key={n} value={n}>
                        {n} {n === 1 ? "person" : "people"}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              {error && <p className={styles.error}>{error}</p>}

              <button
                type="submit"
                className={styles.submit}
                disabled={selectedHour === null || !name.trim() || submitting}
              >
                {submitting ? "Reserving..." : "Reserve"}
              </button>
            </form>
          )}

          <div className={styles.lookup}>
            <h3>Already booked?</h3>
            <form onSubmit={handleLookup} className={styles.lookupForm}>
              <input
                type="text"
                value={lookupCode}
                onChange={(e) => setLookupCode(e.target.value)}
                placeholder="Enter booking code"
                className={styles.input}
              />
              <button type="submit" className={styles.lookupBtn}>
                Look up
              </button>
            </form>
            {lookupError && <p className={styles.error}>{lookupError}</p>}
          </div>
        </>
      )}
    </section>
  );
};

export default ReservePage;
