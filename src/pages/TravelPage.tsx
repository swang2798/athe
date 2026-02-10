import React from 'react';
import { Link } from 'react-router-dom';
import { trips } from '../data/trips';
import styles from './CookingPage.module.css';

const TravelPage: React.FC = () => (
  <div className={styles.grid}>
    {trips.map((trip) => (
      <Link key={trip.id} to={`/travel/${trip.id}`} className={styles.card}>
        <div className={styles.thumb}>
          <img src={trip.src} alt={trip.name} />
        </div>
        <p>{trip.name}</p>
      </Link>
    ))}
  </div>
);

export default TravelPage;
