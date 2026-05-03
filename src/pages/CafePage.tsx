import React from 'react';
import Calendar from '../components/Calendar';
import styles from './CafePage.module.css';

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

const food: MenuItem[] = [
  { name: 'Breakfast Sandwich', price: '3' },
];

const maxRows = Math.max(drinks.length, food.length);

const MenuSection: React.FC<{ title: string; items: MenuItem[] }> = ({ title, items }) => (
  <div className={styles.menuSection}>
    <h2 className={styles.sectionHeading}>{title}</h2>
    {items.map((item, i) => (
      <div key={i} className={styles.sectionRow}>
        <div className={styles.item}>
          <span className={styles.name}>{item.name}</span>
          <span className={styles.price}>{item.price}</span>
        </div>
      </div>
    ))}
  </div>
);

const CafePage: React.FC = () => (
  <>
    <Calendar />
    <section>
      {/* Desktop: side-by-side table */}
      <table className={styles.menuTable}>
        <thead>
          <tr>
            <th className={styles.heading}>Drinks</th>
            <th className={styles.heading}>Food</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: maxRows }).map((_, i) => (
            <tr key={i} className={styles.row}>
              <td className={styles.cell}>
                {drinks[i] && (
                  <div className={styles.item}>
                    <span className={styles.name}>{drinks[i].name}</span>
                    <span className={styles.price}>{drinks[i].price}</span>
                  </div>
                )}
              </td>
              <td className={styles.cell}>
                {food[i] && (
                  <div className={styles.item}>
                    <span className={styles.name}>{food[i].name}</span>
                    <span className={styles.price}>{food[i].price}</span>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Mobile: stacked sections */}
      <div className={styles.menuStacked}>
        <MenuSection title="Drinks" items={drinks} />
        <MenuSection title="Food" items={food} />
      </div>
    </section>
  </>
);

export default CafePage;
