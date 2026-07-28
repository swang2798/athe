import React, { useEffect, useState } from "react";
import styles from "../pages/styles/AdminPage.module.css";

const API_BASE = process.env.REACT_APP_API_BASE || "";

interface Reservation {
  code: string;
  event_date: string;
  slot_hour: number;
  name: string;
  party_size: number;
  created_at: string;
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

const AdminReservations: React.FC<{ password: string }> = ({ password }) => {
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [loading, setLoading] = useState(true);

  async function fetchReservations() {
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/api/admin/reservations`, {
        headers: { "x-admin-password": password },
      });
      const data = await res.json();
      setReservations(data.reservations || []);
    } catch {}
    setLoading(false);
  }

  useEffect(() => {
    fetchReservations();
  }, []);

  async function handleDelete(code: string) {
    if (!window.confirm(`Delete reservation ${code}?`)) return;
    try {
      await fetch(`${API_BASE}/api/admin/reservation?code=${code}`, {
        method: "DELETE",
        headers: { "x-admin-password": password },
      });
      fetchReservations();
    } catch {}
  }

  const grouped = new Map<string, Reservation[]>();
  for (const r of reservations) {
    const key = `${r.event_date}|${r.slot_hour}`;
    if (!grouped.has(key)) grouped.set(key, []);
    grouped.get(key)!.push(r);
  }

  return (
    <div>
      <h3 className={styles.sectionTitle}>Reservations</h3>
      {loading && <p className={styles.loading}>Loading...</p>}
      {!loading && reservations.length === 0 && (
        <p className={styles.empty}>No reservations yet.</p>
      )}
      {!loading &&
        Array.from(grouped.entries()).map(([key, group]) => {
          const [date, hourStr] = key.split("|");
          const hour = Number(hourStr);
          const total = group.reduce((sum, r) => sum + r.party_size, 0);

          return (
            <div key={key} className={styles.slotGroup}>
              <h4 className={styles.slotHeader}>
                {date} &middot; {formatSlot(hour)}{" "}
                <span className={styles.slotTotal}>({total} guest{total !== 1 ? "s" : ""})</span>
              </h4>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Party</th>
                    <th>Code</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {group.map((r) => (
                    <tr key={r.code}>
                      <td>{r.name}</td>
                      <td>{r.party_size}</td>
                      <td><code>{r.code}</code></td>
                      <td>
                        <button
                          className={styles.deleteBtn}
                          onClick={() => handleDelete(r.code)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        })}
      <button
        className={styles.refreshBtn}
        onClick={fetchReservations}
      >
        Refresh
      </button>
    </div>
  );
};

export default AdminReservations;
