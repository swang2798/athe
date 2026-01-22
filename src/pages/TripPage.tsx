import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { trips } from '../data/trips';

const TripPage: React.FC = () => {
  const { id } = useParams();
  const trip = trips.find(t => t.id === id);

  if (!trip) return <Navigate to="/404" replace />;

  return (
    <div className="lookbook">
      <div className="lookbook-content">
        <h1 className="lookbook-title">{trip.name}</h1>
        <div className="lookbook-recipe">
          <p>Coming soon...</p>
        </div>
      </div>
    </div>
  );
};

export default TripPage;
