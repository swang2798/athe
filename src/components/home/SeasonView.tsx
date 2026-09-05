import React from "react";
import { HomeSeason, HomeSeasonId } from "../../data/homeSeasons";
import styles from "../../pages/styles/HomePage.module.css";
import AW26Season from "./AW26Season";
import SS26Season from "./SS26Season";

type SeasonComponentProps = {
  label: string;
};

type SeasonViewProps = {
  season: HomeSeason;
};

const seasonComponents: Record<
  HomeSeasonId,
  React.ComponentType<SeasonComponentProps>
> = {
  ss26: SS26Season,
  aw26: AW26Season,
};

const SeasonView: React.FC<SeasonViewProps> = ({ season }) => {
  const SeasonComponent = seasonComponents[season.id];

  return (
    <div className={styles.home}>
      <h1 className={styles.visuallyHidden}>athe {season.label}</h1>
      <header className={styles.seasonNav}>
        <p>
          {season.edition}.{season.label}
        </p>
      </header>

      <div className={styles.seasonContent}>
        <SeasonComponent label={season.label} />
      </div>
    </div>
  );
};

export default SeasonView;
