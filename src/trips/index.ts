import React from "react";
import JapanTrip from "./JapanTrip";
import TaiwanTrip from "./TaiwanTrip";
import NYCTrip from "./NYCTrip";

const tripLayouts: Record<string, React.FC> = {
  japan: JapanTrip,
  taiwan: TaiwanTrip,
  nyc: NYCTrip,
};

export default tripLayouts;
