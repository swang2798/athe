import React from "react";
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

const food: MenuItem[] = [
  {
    name: "Fuzhou Fish Balls",
    price: "3",
    ingredients: "White fish, groud pork, fried shallot, oyster sauce",
  },
  {
    name: "Fuzhou Peanut Noodles",
    price: "3",
    ingredients: "Wonton noodles, peanut butter, soy sauce, sesame oil, scallions",
  },
  {
    name: "Fuzhou Wontons",
    price: "3",
    ingredients: "Ground pork, napa cabbage, oyster sauce, ginger",
  },
];

const maxRows = Math.max(drinks.length, food.length);

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
                  <>
                    <div className={styles.item}>
                      <span className={styles.name}>{drinks[i].name}</span>
                      <span className={styles.price}>{drinks[i].price}</span>
                    </div>
                    <p className={styles.ingredients}>
                      {drinks[i].ingredients}
                    </p>
                  </>
                )}
              </td>
              <td className={styles.cell}>
                {food[i] && (
                  <>
                    <div className={styles.item}>
                      <span className={styles.name}>{food[i].name}</span>
                      <span className={styles.price}>{food[i].price}</span>
                    </div>
                    <p className={styles.ingredients}>{food[i].ingredients}</p>
                  </>
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

      <p className={styles.footnote}>All milk is lactose free.</p>
    </section>
  </>
);

export default CafePage;
