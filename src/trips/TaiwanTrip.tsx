import React from "react";
import styles from "./styles/TaiwanTrip.module.css";

const BASE =
  "https://pub-e607f1b3e5cd407c80ae57baa3c09ecc.r2.dev/assets/travel/taiwan/";

const landscape = [
  "IMG_0280.webp",
  "IMG_0283.webp",
  "IMG_0296.webp",
  "IMG_0365.webp",
  "IMG_0367.webp",
  "IMG_0373.webp",
  "IMG_0479.webp",
  "IMG_0489.webp",
  "IMG_0490.webp",
  "IMG_0502.webp",
  "IMG_0511.webp",
  "IMG_0523.webp",
  "IMG_0544.webp",
  "IMG_0598.webp",
  "IMG_0666.webp",
];

const portrait = [
  "IMG_0295.webp",
  "IMG_0298.webp",
  "IMG_0313.webp",
  "IMG_0328.webp",
  "IMG_0449.webp",
  "IMG_0493.webp",
  "IMG_0620.webp",
  "IMG_0683.webp",
  "IMG_0871.webp",
  "IMG_0883.webp",
  "IMG_0889.webp",
  "IMG_0898.webp",
  "IMG_4172.webp",
  "IMG_0348.webp",
  "IMG_0354.webp",
  "IMG_0397.webp",
  "IMG_0351.webp",
];

const chunk = <T,>(arr: T[], size: number): T[][] => {
  const chunks: T[][] = [];
  for (let i = 0; i < arr.length; i += size)
    chunks.push(arr.slice(i, i + size));
  return chunks;
};

const TaiwanTrip: React.FC = () => (
  <div className={styles.page}>
    <h1 className={styles.title}>Taiwan</h1>
    <p className={styles.overview}>January 2025</p>
    {chunk(landscape, 9).map((grid, gi) => (
      <div key={`l-${gi}`} className={styles.grid}>
        {grid.map((file, i) => (
          <img
            key={i}
            src={`${BASE}${file}`}
            alt={`Taiwan ${gi * 9 + i + 1}`}
            className={`${styles.img} ${styles.landscape}`}
          />
        ))}
      </div>
    ))}
    {chunk(portrait, 9).map((grid, gi) => (
      <div key={`p-${gi}`} className={styles.gridPortrait}>
        {grid.map((file, i) => (
          <img
            key={i}
            src={`${BASE}${file}`}
            alt={`Taiwan portrait ${gi * 9 + i + 1}`}
            className={`${styles.img} ${styles.portrait}`}
          />
        ))}
      </div>
    ))}
  </div>
);

export default TaiwanTrip;
