import React from "react";
import styles from "./styles/TaiwanTrip.module.css";

const BASE = "https://pub-e607f1b3e5cd407c80ae57baa3c09ecc.r2.dev/assets/travel/korea/";

const landscape = [
  "DSC02372.jpg", "DSC02375.jpg", "DSC02379.jpg",
  "IMG_0719.jpg", "IMG_0724.jpg", "IMG_0752.jpg",
  "IMG_0753.jpg", "IMG_0770.jpg", "IMG_0785.jpg",
  "IMG_0789.jpg", "IMG_0930.jpg",
];

const portrait = [
  "IMG_0669.jpg", "IMG_0693.jpg", "IMG_0695.jpg",
  "IMG_0705.jpg", "IMG_0729.jpg", "IMG_0734.jpg",
  "IMG_0737.jpg", "IMG_0743.jpg", "IMG_0749.jpg",
  "IMG_0760.jpg", "IMG_0767.jpg", "IMG_0791.jpg",
  "IMG_0839.jpg", "IMG_0840.jpg", "IMG_0862.jpg",
  "IMG_0867.jpg", "IMG_0962.jpg", "IMG_0971.jpg",
];

const chunk = <T, >(arr: T[], size: number): T[][] => {
  const chunks: T[][] = [];
  for (let i = 0; i < arr.length; i += size) chunks.push(arr.slice(i, i + size));
  return chunks;
};

const KoreaTrip: React.FC = () => (
  <div className={styles.page}>
    <h1 className={styles.title}>South Korea</h1>
    {chunk(landscape, 9).map((grid, gi) => (
      <div key={`l-${gi}`} className={styles.grid}>
        {grid.map((file, i) => (
          <img key={i} src={`${BASE}${file}`} alt={`South Korea ${gi * 9 + i + 1}`}
               className={`${styles.img} ${styles.landscape}`}/>
        ))}
      </div>
    ))}
    {chunk(portrait, 9).map((grid, gi) => (
      <div key={`p-${gi}`} className={styles.gridPortrait}>
        {grid.map((file, i) => (
          <img key={i} src={`${BASE}${file}`} alt={`South Korea portrait ${gi * 9 + i + 1}`}
               className={`${styles.img} ${styles.portrait}`}/>
        ))}
      </div>
    ))}
  </div>
);

export default KoreaTrip;
