import React from 'react';
import { NavLink } from 'react-router-dom';

const TopNav: React.FC = () => (
  <nav className="top-nav">
    <ul className="top-nav-links">
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/cafe">Cafe</NavLink></li>
      <li><NavLink to="/cooking">Cooking</NavLink></li>
      <li><NavLink to="/travel">Travel</NavLink></li>
      <li><NavLink to="/fashion">Fashion</NavLink></li>
    </ul>
  </nav>
);

export default TopNav;
