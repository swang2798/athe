import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { dishes } from '../data/dishes';

const DishPage: React.FC = () => {
  const {id} = useParams();
  const dish = dishes.find(d => d.id === id);

  if (!dish) return <Navigate to="/404" replace/>;

  return (
    <div className="container">
      <h1>{dish.name}</h1>
    </div>
  );
};

export default DishPage;
