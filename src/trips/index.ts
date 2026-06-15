import React from "react";
import JapanTrip from "./JapanTrip";
import TaiwanTrip from "./TaiwanTrip";
import NYCTrip from "./NYCTrip";
import KoreaTrip from "./KoreaTrip";

const tripLayouts: Record<string, React.FC> = {
  japan: JapanTrip,
  taiwan: TaiwanTrip,
  nyc: NYCTrip,
  korea: KoreaTrip,
};

export default tripLayouts;
