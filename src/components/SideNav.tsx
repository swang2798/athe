import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const SideNav: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <nav className={`side-nav ${collapsed ? 'collapsed' : ''}`}>
      <button className="side-nav-toggle" onClick={() => setCollapsed(!collapsed)}>
        {collapsed ? '→' : '←'}
      </button>
      {!collapsed && (
        <ul className="side-nav-links">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/cafe">Cafe</NavLink></li>
          <li><NavLink to="/cooking">Cooking</NavLink></li>
          <li><NavLink to="/travel">Travel</NavLink></li>
          <li><NavLink to="/fashion">Fashion</NavLink></li>
        </ul>
      )}
    </nav>
  );
};

export default SideNav;
