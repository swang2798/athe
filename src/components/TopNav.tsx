import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const TopNav: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="top-nav">
      <NavLink to="/" className="nav-logo">a•th•eh</NavLink>
      <ul className="nav-links-desktop">
        <li><NavLink to="/cafe">Cafe</NavLink></li>
        <li><NavLink to="/cooking">Cooking</NavLink></li>
        <li><NavLink to="/travel">Travel</NavLink></li>
        <li><NavLink to="/fashion">Fashion</NavLink></li>
        <li><NavLink to="/music">Music</NavLink></li>
      </ul>
      <button className="nav-toggle" onClick={() => setOpen(!open)}>
        ☰
      </button>
      {open && (
        <>
          <div className="nav-backdrop" onClick={() => setOpen(false)}/>
          <div className="nav-overlay">
            <ul className="nav-links">
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
