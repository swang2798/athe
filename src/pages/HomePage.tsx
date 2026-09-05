import React from "react";
import AW26Season from "../components/home/AW26Season";
import SS26Season from "../components/home/SS26Season";
import { homeSeasons, HomeSeasonId } from "../data/homeSeasons";
import styles from "./styles/HomePage.module.css";

type SeasonComponentProps = {
  label: string;
};

const seasonComponents: Record<
  HomeSeasonId,
  React.ComponentType<SeasonComponentProps>
> = {
  ss26: SS26Season,
  aw26: AW26Season,
};

const HomePage: React.FC = () => {
  const latestSeason = homeSeasons[homeSeasons.length - 1];
  const LatestSeason = seasonComponents[latestSeason.id];

  return (
    <div className={styles.home}>
      <h1 className={styles.visuallyHidden}>athe</h1>
      <header className={styles.seasonNav}>
        <p>
          {latestSeason.edition}.{latestSeason.label}
        </p>
      </header>

      <div className={styles.seasonContent}>
        <LatestSeason label={latestSeason.label} />
      </div>
    </div>
  );
};

export default HomePage;
