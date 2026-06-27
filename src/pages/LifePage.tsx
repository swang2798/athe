import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles/LifePage.module.css";

const categories = [
  { id: "cooking", name: "Cooking" },
  { id: "travel", name: "Travel" },
  { id: "fashion", name: "Fashion" },
  { id: "music", name: "Music" },
];

const LifePage: React.FC = () => (
  <ul className={styles.list}>
    {categories.map((cat) => (
      <li key={cat.id}>
        <Link to={`/life/${cat.id}`} className={styles.link}>
          {cat.name}
        </Link>
      </li>
    ))}
  </ul>
);

export default LifePage;
