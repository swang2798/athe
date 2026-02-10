import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './TopNav.module.css';

const TopNav: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.topNav}>
      <NavLink to="/" className={styles.logo}>a•th•eh</NavLink>
      <ul className={styles.linksDesktop}>
        <li><NavLink to="/cafe">Cafe</NavLink></li>
        <li><NavLink to="/cooking">Cooking</NavLink></li>
        <li><NavLink to="/travel">Travel</NavLink></li>
        <li><NavLink to="/fashion">Fashion</NavLink></li>
        <li><NavLink to="/music">Music</NavLink></li>
      </ul>
      <button className={styles.toggle} onClick={() => setOpen(!open)}>
        ☰
      </button>
      {open && (
        <>
          <div className={styles.backdrop} onClick={() => setOpen(false)}/>
          <div className={styles.overlay}>
            <ul className={styles.links}>
              <li><NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink></li>
              <li><NavLink to="/cafe" onClick={() => setOpen(false)}>Cafe</NavLink></li>
              <li><NavLink to="/cooking" onClick={() => setOpen(false)}>Cooking</NavLink></li>
              <li><NavLink to="/travel" onClick={() => setOpen(false)}>Travel</NavLink></li>
              <li><NavLink to="/fashion" onClick={() => setOpen(false)}>Fashion</NavLink></li>
              <li><NavLink to="/music" onClick={() => setOpen(false)}>Music</NavLink></li>
            </ul>
          </div>
        </>
      )}
    </nav>
  );
};

export default TopNav;
