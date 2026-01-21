import React from 'react';
import { Link } from 'react-router-dom';
import { dishes } from '../data/dishes';

const CookingPage: React.FC = () => (
  <div className="container-wide">
    <h1>Cooking</h1>
    <div className="image-grid">
      {dishes.map((dish) => (
        <Link key={dish.id} to={`/cooking/${dish.id}`} className="image-card">
          <img src={dish.src} alt={dish.name}/>
          <p>{dish.name}</p>
        </Link>
      ))}
    </div>
  </div>
);

export default CookingPage;
