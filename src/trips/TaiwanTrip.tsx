import React from "react";
import styles from "./styles/TaiwanTrip.module.css";

const BASE = "https://pub-e607f1b3e5cd407c80ae57baa3c09ecc.r2.dev/assets/travel/taiwan/";

const landscape = [
  "IMG_0280.png", "IMG_0283.png", "IMG_0296.png",
  "IMG_0365.png", "IMG_0367.png", "IMG_0373.png",
  "IMG_0479.png", "IMG_0489.png", "IMG_0490.png",
  "IMG_0502.png", "IMG_0511.png", "IMG_0523.png",
  "IMG_0544.png", "IMG_0598.png", "IMG_0666.png",
];

const portrait = [
  "IMG_0295.png", "IMG_0298.png", "IMG_0313.png",
  "IMG_0328.png", "IMG_0449.png", "IMG_0493.png",
  "IMG_0620.png", "IMG_0683.jpg", "IMG_0871.png",
  "IMG_0883.png", "IMG_0889.png", "IMG_0898.png",
  "IMG_4172.png", "IMG_0348.png", "IMG_0354.png",
  "IMG_0397.png", "IMG_0351.jpg",
];

const chunk = <T, >(arr: T[], size: number): T[][] => {
  const chunks: T[][] = [];
  for (let i = 0; i < arr.length; i += size) chunks.push(arr.slice(i, i + size));
  return chunks;
};

const TaiwanTrip: React.FC = () => (
  <div className={styles.page}>
    <h1 className={styles.title}>Taiwan</h1>
    <p className={styles.overview}>January 2025</p>
    {chunk(landscape, 9).map((grid, gi) => (
      <div key={`l-${gi}`} className={styles.grid}>
        {grid.map((file, i) => (
          <img key={i} src={`${BASE}${file}`} alt={`Taiwan ${gi * 9 + i + 1}`}
               className={`${styles.img} ${styles.landscape}`}/>
        ))}
      </div>
    ))}
    {chunk(portrait, 9).map((grid, gi) => (
      <div key={`p-${gi}`} className={styles.gridPortrait}>
        {grid.map((file, i) => (
          <img key={i} src={`${BASE}${file}`} alt={`Taiwan portrait ${gi * 9 + i + 1}`}
               className={`${styles.img} ${styles.portrait}`}/>
        ))}
      </div>
    ))}
  </div>
);

export default TaiwanTrip;
