import React, { useState } from "react";
import AdminReservations from "../components/AdminReservations";
import styles from "./styles/AdminPage.module.css";

const API_BASE = process.env.REACT_APP_API_BASE || "";

const AdminPage: React.FC = () => {
  const [password, setPassword] = useState("");
  const [authed, setAuthed] = useState(false);
  const [authError, setAuthError] = useState("");

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    try {
      const res = await fetch(`${API_BASE}/api/admin/reservations`, {
        headers: { "x-admin-password": password },
      });
      if (res.status === 401) {
        setAuthError("Wrong password.");
        return;
      }
      setAuthed(true);
      setAuthError("");
    } catch {
      setAuthError("Network error.");
    }
  }

  if (!authed) {
    return (
      <section className={styles.container}>
        <h2 className={styles.title}>Admin</h2>
        <form onSubmit={handleLogin} className={styles.loginForm}>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className={styles.input}
          />
          <button type="submit" className={styles.loginBtn}>
            Log in
          </button>
        </form>
        {authError && <p className={styles.error}>{authError}</p>}
      </section>
    );
  }

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Admin</h2>
      <AdminReservations password={password} />
    </section>
  );
};

export default AdminPage;
