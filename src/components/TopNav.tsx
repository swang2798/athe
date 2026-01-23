import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const TopNav: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button className="nav-toggle" onClick={() => setOpen(!open)}>
        a•th•eh
      </button>
      {open && (
        <>
          <div className="nav-backdrop" onClick={() => setOpen(false)} />
          <nav className="nav-overlay">
          <ul className="nav-links">
            <li><NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink></li>
            <li><NavLink to="/cafe" onClick={() => setOpen(false)}>Cafe</NavLink></li>
            <li><NavLink to="/cooking" onClick={() => setOpen(false)}>Cooking</NavLink></li>
            <li><NavLink to="/travel" onClick={() => setOpen(false)}>Travel</NavLink></li>
            <li><NavLink to="/fashion" onClick={() => setOpen(false)}>Fashion</NavLink></li>
          </ul>
        </nav>
        </>
      )}
    </>
  );
};

export default TopNav;
