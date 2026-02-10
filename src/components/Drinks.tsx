import React from 'react';
import styles from './Menu.module.css';

interface MenuItem {
  name: string;
  price: string;
}

const drinks: MenuItem[] = [
  { name: 'Iced Matcha Latte', price: '2' },
  { name: 'Iced Hojicha Latte', price: '2' },
  { name: 'Maple Oat Latte', price: '1' },
  { name: 'Espresso Tonic', price: '1' },
];

const Drinks: React.FC = () => (
  <div className={styles.column}>
    <h2>Drinks</h2>
    <div className={styles.list}>
      {drinks.map((item, index) => (
        <div key={index} className={styles.item}>
          <span className={styles.name}>{item.name}</span>
          <span className={styles.price}>{item.price}</span>
        </div>
      ))}
    </div>
  </div>
);

export default Drinks;
