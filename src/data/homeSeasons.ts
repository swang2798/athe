export const homeSeasons = [
  {
    id: "ss26",
    label: "SS26",
    edition: "01",
  },
  {
    id: "aw26",
    label: "AW26",
    edition: "02",
  },
] as const;

export type HomeSeasonId = (typeof homeSeasons)[number]["id"];
