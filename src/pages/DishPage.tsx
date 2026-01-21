import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { dishes } from '../data/dishes';

const DishPage: React.FC = () => {
  const { id } = useParams();
  const dish = dishes.find(d => d.id === id);

  if (!dish) return <Navigate to="/404" replace />;

  return (
    <div className="lookbook">
      <div className="lookbook-content">
        <h1 className="lookbook-title">{dish.name}</h1>
        <div className="lookbook-recipe">
          {dish.ingredients && (
            <>
              <h2>Ingredients</h2>
              <ul>
                {dish.ingredients.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </>
          )}
          {dish.instructions && (
            <>
              <h2>Instructions</h2>
              <p>{dish.instructions}</p>
            </>
          )}
        </div>
      </div>
      <div className="lookbook-media">
        {dish.images?.map((src, i) => (
          <img key={i} src={src} alt={`${dish.name} ${i + 1}`} />
        ))}
        {dish.video && (
          <video 
            src={`https://res.cloudinary.com/dlenbkeui/video/upload/q_auto:best/${dish.video}`}
            loop
            muted
            autoPlay
            playsInline
          />
        )}
      </div>
    </div>
  );
};

export default DishPage;
