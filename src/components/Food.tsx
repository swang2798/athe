import React from 'react';
import styles from './Menu.module.css';

interface MenuItem {
  name: string;
  price: string;
}

const food: MenuItem[] = [
  { name: 'Breakfast Sandwich', price: '3' },
];

const Food: React.FC = () => (
  <div className={styles.column}>
    <h2>Food</h2>
    <div className={styles.list}>
      {food.map((item, index) => (
        <div key={index} className={styles.item}>
          <span className={styles.name}>{item.name}</span>
          <span className={styles.price}>{item.price}</span>
        </div>
      ))}
    </div>
  </div>
);

export default Food;
