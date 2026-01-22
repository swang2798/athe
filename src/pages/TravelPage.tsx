import React from 'react';
import { Link } from 'react-router-dom';
import { trips } from '../data/trips';

const TravelPage: React.FC = () => (
  <div className="container-wide">
    <div className="image-grid">
      {trips.map((trip) => (
        <Link key={trip.id} to={`/travel/${trip.id}`} className="image-card">
          <div className="image-card-thumb">
            <img src={trip.src} alt={trip.name} />
          </div>
          <p>{trip.name}</p>
        </Link>
      ))}
    </div>
  </div>
);

export default TravelPage;
