import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { trips, Spot } from '../data/trips';
import styles from './TripPage.module.css';

const SpotGrid: React.FC<{ spots: Spot[] }> = ({ spots }) => (
  <div className={styles.spotGrid}>
    {spots.map((spot, i) => (
      <div key={i} className={styles.spot}>
        {spot.src && <img src={spot.src} alt={spot.name} className={styles.spotImage} />}
        <p className={styles.spotName}>{spot.name}</p>
        {spot.area && <p className={styles.spotArea}>{spot.area}</p>}
        {spot.note && <p className={styles.spotNote}>{spot.note}</p>}
      </div>
    ))}
  </div>
);

const TripPage: React.FC = () => {
  const { id } = useParams();
  const trip = trips.find(t => t.id === id);

  if (!trip) return <Navigate to="/404" replace />;

  return (
    <div>
      <h1 className={styles.title}>{trip.name}</h1>
      {trip.overview && <p className={styles.overview}>{trip.overview}</p>}

      {trip.food && trip.food.length > 0 && (
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Food</h2>
          <SpotGrid spots={trip.food} />
        </div>
      )}

      {trip.attractions && trip.attractions.length > 0 && (
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Attractions</h2>
          <SpotGrid spots={trip.attractions} />
        </div>
      )}

      {trip.stays && trip.stays.length > 0 && (
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Stays</h2>
          <SpotGrid spots={trip.stays} />
        </div>
      )}

      {trip.tips && trip.tips.length > 0 && (
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Tips</h2>
          <ul className={styles.tips}>
            {trip.tips.map((tip, i) => (
              <li key={i} className={styles.tip}>{tip}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TripPage;
