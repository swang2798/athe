import React from "react";
import { Link } from "react-router-dom";
import { archivedHomeSeasons } from "../data/homeSeasons";
import styles from "./styles/ArchivePage.module.css";

const ArchivePage: React.FC = () => (
  <section className={styles.page}>
    <h1 className={styles.visuallyHidden}>Archived seasons</h1>
    <ul className={styles.list}>
      {archivedHomeSeasons.map((season) => (
        <li key={season.id}>
          <Link to={`/archive/${season.id}`} className={styles.link}>
            {season.edition}.{season.label}
          </Link>
        </li>
      ))}
    </ul>
  </section>
);

export default ArchivePage;
