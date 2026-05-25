import React from "react";
import JapanTrip from "./JapanTrip";
import TaiwanTrip from "./TaiwanTrip";

const tripLayouts: Record<string, React.FC> = {
  japan: JapanTrip,
  taiwan: TaiwanTrip,
};

export default tripLayouts;
