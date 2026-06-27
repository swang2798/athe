import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./TopNav.module.css";

const TopNav: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.topNav}>
      <ul className={styles.linksDesktop}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/cafe">Cafe</NavLink>
        </li>
        <li>
          <NavLink to="/life">Life</NavLink>
        </li>
      </ul>
      <button className={styles.toggle} onClick={() => setOpen(!open)}>
        ☰
      </button>
      {open && (
        <>
          <div className={styles.backdrop} onClick={() => setOpen(false)} />
          <div className={styles.overlay}>
            <ul className={styles.links}>
              <li>
                <NavLink to="/" onClick={() => setOpen(false)}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/cafe" onClick={() => setOpen(false)}>
                  Cafe
                </NavLink>
              </li>
              <li>
                <NavLink to="/life" onClick={() => setOpen(false)}>
                  Life
                </NavLink>
              </li>
            </ul>
          </div>
        </>
      )}
    </nav>
  );
};

export default TopNav;
