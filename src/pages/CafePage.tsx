import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles/CafePage.module.css";

interface MenuItem {
  name: string;
  price: string;
  ingredients: string;
}

const drinks: MenuItem[] = [
  {
    name: "Muscovado Latte",
    price: "2",
    ingredients: "Espresso, muscovado sugar, steamed milk",
  },
  {
    name: "Blood Orange Latte",
    price: "2",
    ingredients: "Espresso, blood orange syrup, steamed milk",
  },
  {
    name: "Rose Latte",
    price: "2",
    ingredients: "Espresso, rose syrup, steamed milk",
  },
  {
    name: "Iced Matcha Latte",
    price: "2",
    ingredients: "Ceremonial grade matcha, oat milk, syrup",
  },
];


const MenuSection: React.FC<{ title: string; items: MenuItem[] }> = ({
  title,
  items,
}) => (
  <div className={styles.menuSection}>
    <h2 className={styles.sectionHeading}>{title}</h2>
    {items.map((item, i) => (
      <div key={i} className={styles.sectionRow}>
        <div className={styles.item}>
          <span className={styles.name}>{item.name}</span>
          <span className={styles.price}>{item.price}</span>
        </div>
        <p className={styles.ingredients}>{item.ingredients}</p>
      </div>
    ))}
  </div>
);

const CafePage: React.FC = () => (
  <>
    <section>
      <MenuSection title="Drinks" items={drinks} />
      <p className={styles.footnote}>All milk is lactose free.</p>
      <p className={styles.reserveLink}>
        <Link to="/cafe/reserve">Reserve a slot →</Link>
      </p>
    </section>
  </>
);

export default CafePage;
