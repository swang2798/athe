import React from "react";
import SeasonView from "../components/home/SeasonView";
import { latestHomeSeason } from "../data/homeSeasons";

const HomePage: React.FC = () => <SeasonView season={latestHomeSeason} />;

export default HomePage;
