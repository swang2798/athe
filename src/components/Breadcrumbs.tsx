import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Breadcrumbs.module.css';

const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  const paths = location.pathname.split('/').filter(Boolean);

  if (paths.length === 0) return null;

  return (
    <nav className={styles.breadcrumbs}>
      <Link to="/">Home</Link>
      {paths.map((path, i) => (
        <span key={path}>
          <span className={styles.sep}>/</span>
          {i === paths.length - 1 ? (
            <span>{path.replace(/-/g, ' ')}</span>
          ) : (
            <Link to={`/${paths.slice(0, i + 1).join('/')}`}>{path}</Link>
          )}
        </span>
      ))}
    </nav>
  );
};

export default Breadcrumbs;
