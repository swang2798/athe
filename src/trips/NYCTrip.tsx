import React from "react";
import styles from "./styles/TaiwanTrip.module.css";

const BASE =
  "https://pub-e607f1b3e5cd407c80ae57baa3c09ecc.r2.dev/assets/travel/nyc/";

const landscape = [
  "IMG_1899.webp",
  "IMG_1900.webp",
  "IMG_1945.webp",
  "IMG_1972.webp",
  "IMG_2072.webp",
  "IMG_2079.webp",
  "IMG_2087.webp",
  "IMG_2089.webp",
  "IMG_2093.webp",
  "IMG_2140.webp",
  "IMG_7001.webp",
  "IMG_7133.webp",
  "IMG_7336.webp",
];

const portrait = [
  "IMG_0076.webp",
  "IMG_1866.webp",
  "IMG_1884.webp",
  "IMG_1888.webp",
  "IMG_1892.webp",
  "IMG_1907.webp",
  "IMG_1920.webp",
  "IMG_1922.webp",
  "IMG_1928.webp",
  "IMG_1932.webp",
  "IMG_1936.webp",
  "IMG_1961.webp",
  "IMG_1965.webp",
  "IMG_1977.webp",
  "IMG_1987.webp",
  "IMG_1991.webp",
  "IMG_1996.webp",
  "IMG_1997.webp",
  "IMG_2004.webp",
  "IMG_2007.webp",
  "IMG_2022.webp",
  "IMG_2025.webp",
  "IMG_2034.webp",
  "IMG_2041.webp",
  "IMG_2044.webp",
  "IMG_2069.webp",
  "IMG_2096.webp",
  "IMG_2101.webp",
  "IMG_2109.webp",
  "IMG_2132.webp",
  "IMG_2147.webp",
  "IMG_2149.webp",
  "IMG_2151.webp",
  "IMG_2157.webp",
  "IMG_2167.webp",
  "IMG_2176.webp",
  "IMG_2185.webp",
  "IMG_2194.webp",
  "IMG_2205.webp",
  "IMG_2209.webp",
  "IMG_2219.webp",
  "IMG_6777.webp",
  "IMG_6784.webp",
  "IMG_6790.webp",
  "IMG_6824.webp",
  "IMG_6857.webp",
  "IMG_6879.webp",
  "IMG_6893.webp",
  "IMG_7029.webp",
  "IMG_7032.webp",
  "IMG_7066.webp",
  "IMG_7075.webp",
  "IMG_7102.webp",
  "IMG_7186.webp",
  "IMG_7195.webp",
  "IMG_7227.webp",
  "IMG_7347.webp",
];

const chunk = <T,>(arr: T[], size: number): T[][] => {
  const chunks: T[][] = [];
  for (let i = 0; i < arr.length; i += size)
    chunks.push(arr.slice(i, i + size));
  return chunks;
};

const NYCTrip: React.FC = () => (
  <div className={styles.page}>
    <h1 className={styles.title}>New York City</h1>
    <p className={styles.overview}>March 2026</p>
    {chunk(landscape, 9).map((grid, gi) => (
      <div key={`l-${gi}`} className={styles.grid}>
        {grid.map((file, i) => (
          <img
            key={i}
            src={`${BASE}${file}`}
            alt={`New York City ${gi * 9 + i + 1}`}
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
            alt={`New York City portrait ${gi * 9 + i + 1}`}
            className={`${styles.img} ${styles.portrait}`}
          />
        ))}
      </div>
    ))}
  </div>
);

export default NYCTrip;
