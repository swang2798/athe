import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles/CafePage.module.css";

const menuImage =
  "https://pub-e607f1b3e5cd407c80ae57baa3c09ecc.r2.dev/assets/cafe/athe-drink-menu.webp";

const CafePage: React.FC = () => (
  <section className={styles.cafePage}>
    <figure className={styles.menu}>
      <img
        src={menuImage}
        alt="Athe drink menu featuring kinako iced latte, muscovado latte, rose latte, iced matcha latte, and iced hojicha latte. All drinks are lactose free; cream tops contain dairy."
      />
    </figure>
    <p className={styles.reserveLink}>
      <Link to="/cafe/reserve">Reserve a slot →</Link>
    </p>
  </section>
);

export default CafePage;
