import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { dishes } from '../data/dishes';
import styles from './CookingPage.module.css';

const allTags = Array.from(new Set(dishes.flatMap(d => d.tags || [])));

const CookingPage: React.FC = () => {
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const filtered = activeTag ? dishes.filter(d => d.tags?.includes(activeTag)) : dishes;

  return (
    <>
      <div className={styles.filterTags}>
        {allTags.map(tag => (
          <button key={tag} className={`${styles.filterTag} ${activeTag === tag ? styles.filterTagActive : ''}`} onClick={() => setActiveTag(activeTag === tag ? null : tag)}>{tag}</button>
        ))}
      </div>
      <div className={styles.grid}>
        {filtered.map((dish) => (
          <Link key={dish.id} to={`/cooking/${dish.id}`} className={styles.card}>
            <div className={styles.thumb}>
              <img src={dish.src} alt={dish.name}/>
            </div>
            <p>{dish.name}</p>
          </Link>
        ))}
      </div>
    </>
  );
};

export default CookingPage;
