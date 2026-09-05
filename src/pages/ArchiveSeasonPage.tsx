import React from "react";
import { useParams } from "react-router-dom";
import SeasonView from "../components/home/SeasonView";
import { archivedHomeSeasons } from "../data/homeSeasons";
import NotFoundPage from "./NotFoundPage";

const ArchiveSeasonPage: React.FC = () => {
  const { seasonId } = useParams();
  const season = archivedHomeSeasons.find(
    (archivedSeason) => archivedSeason.id === seasonId?.toLowerCase(),
  );

  return season ? <SeasonView season={season} /> : <NotFoundPage />;
};

export default ArchiveSeasonPage;
