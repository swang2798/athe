CREATE TABLE IF NOT EXISTS reservations (
  code       TEXT PRIMARY KEY,
  event_date TEXT NOT NULL,
  slot_hour  INTEGER NOT NULL,
  name       TEXT NOT NULL,
  party_size INTEGER NOT NULL,
  created_at TEXT NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_event_slot ON reservations (event_date, slot_hour);
