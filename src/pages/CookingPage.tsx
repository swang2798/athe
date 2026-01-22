import React from 'react';
import { Link } from 'react-router-dom';
import { dishes } from '../data/dishes';

const CookingPage: React.FC = () => (
  <div className="container-wide">
    <div className="image-grid">
      {dishes.map((dish) => (
        <Link key={dish.id} to={`/cooking/${dish.id}`} className="image-card">
          <div className="image-card-thumb">
            <img src={dish.src} alt={dish.name}/>
          </div>
          <p>{dish.name}</p>
        </Link>
      ))}
    </div>
  </div>
);

export default CookingPage;
