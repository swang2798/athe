import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { dishes } from '../data/dishes';

const allTags = Array.from(new Set(dishes.flatMap(d => d.tags || [])));

const CookingPage: React.FC = () => {
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const filtered = activeTag ? dishes.filter(d => d.tags?.includes(activeTag)) : dishes;

  return (
    <div className="container-wide">
      <div className="tags filter-tags">
        {allTags.map(tag => (
          <button key={tag} className={`tag ${activeTag === tag ? 'active' : ''}`} onClick={() => setActiveTag(activeTag === tag ? null : tag)}>{tag}</button>
        ))}
      </div>
      <div className="image-grid">
        {filtered.map((dish) => (
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
};

export default CookingPage;
