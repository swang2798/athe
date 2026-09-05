import React from "react";
import styles from "./styles/TaiwanTrip.module.css";

const BASE =
  "https://pub-e607f1b3e5cd407c80ae57baa3c09ecc.r2.dev/assets/travel/korea/";

const landscape = [
  "DSC02372.webp",
  "DSC02379.webp",
  "IMG_0719.webp",
  "IMG_0723.webp",
  "IMG_0724.webp",
  "IMG_0752.webp",
  "IMG_0753.webp",
  "IMG_0770.webp",
  "IMG_0785.webp",
  "IMG_0789.webp",
  "IMG_0930.webp",
];

const portrait = [
  "IMG_0669.webp",
  "IMG_0693.webp",
  "IMG_0695.webp",
  "IMG_0701.webp",
  "IMG_0705.webp",
  "IMG_0729.webp",
  "IMG_0734.webp",
  "IMG_0737.webp",
  "IMG_0743.webp",
  "IMG_0749.webp",
  "IMG_0760.webp",
  "IMG_0767.webp",
  "IMG_0783.webp",
  "IMG_0791.webp",
  "IMG_0839.webp",
  "IMG_0840.webp",
  "IMG_0862.webp",
  "IMG_0867.webp",
  "IMG_0960.webp",
  "IMG_0962.webp",
  "IMG_0971.webp",
];

const chunk = <T,>(arr: T[], size: number): T[][] => {
  const chunks: T[][] = [];
  for (let i = 0; i < arr.length; i += size)
    chunks.push(arr.slice(i, i + size));
  return chunks;
};

const KoreaTrip: React.FC = () => (
  <div className={styles.page}>
    <h1 className={styles.title}>South Korea</h1>
    <p className={styles.overview}>January 2025</p>
    {chunk(landscape, 9).map((grid, gi) => (
      <div key={`l-${gi}`} className={styles.grid}>
        {grid.map((file, i) => (
          <img
            key={i}
            src={`${BASE}${file}`}
            alt={`South Korea ${gi * 9 + i + 1}`}
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
            alt={`South Korea portrait ${gi * 9 + i + 1}`}
            className={`${styles.img} ${styles.portrait}`}
          />
        ))}
      </div>
    ))}
  </div>
);

export default KoreaTrip;
