export interface Trip {
  id: string;
  name: string;
  src: string;
}

export const trips: Trip[] = [
  {
    id: "japan",
    src: "https://pub-e607f1b3e5cd407c80ae57baa3c09ecc.r2.dev/assets/travel/japan/thumb.jpg",
    name: "Japan",
  },
  {
    id: "taiwan",
    src: "https://pub-e607f1b3e5cd407c80ae57baa3c09ecc.r2.dev/assets/travel/taiwan/thumb.jpg",
    name: "Taiwan",
  },
  {
    id: "korea",
    src: "https://pub-e607f1b3e5cd407c80ae57baa3c09ecc.r2.dev/assets/travel/korea/thumb.jpg",
    name: "South Korea",
  },
  {
    id: "nyc",
    src: "https://pub-e607f1b3e5cd407c80ae57baa3c09ecc.r2.dev/assets/travel/nyc/IMG_2219.jpg",
    name: "New York City",
  },
];
