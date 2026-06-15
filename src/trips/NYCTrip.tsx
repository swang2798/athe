import React from "react";
import styles from "./styles/TaiwanTrip.module.css";

const BASE = "https://pub-e607f1b3e5cd407c80ae57baa3c09ecc.r2.dev/assets/travel/nyc/";

const landscape = [
  "IMG_1899.jpg", "IMG_1900.jpg", "IMG_1945.jpg",
  "IMG_1972.jpg", "IMG_2072.jpg", "IMG_2079.jpg",
  "IMG_2087.jpg", "IMG_2089.jpg", "IMG_2093.jpg",
  "IMG_2140.jpg", "IMG_7001.jpg", "IMG_7133.jpg",
  "IMG_7336.jpg",
];

const portrait = [
  "IMG_0076.jpg", "IMG_1866.jpg", "IMG_1884.jpg",
  "IMG_1888.jpg", "IMG_1892.jpg", "IMG_1907.jpg",
  "IMG_1920.jpg", "IMG_1922.jpg", "IMG_1928.jpg",
  "IMG_1932.jpg", "IMG_1936.jpg", "IMG_1961.jpg",
  "IMG_1965.jpg", "IMG_1977.jpg", "IMG_1987.jpg",
  "IMG_1991.jpg", "IMG_1996.jpg", "IMG_1997.jpg",
  "IMG_2004.jpg", "IMG_2007.jpg", "IMG_2022.jpg",
  "IMG_2025.jpg", "IMG_2034.jpg", "IMG_2041.jpg",
  "IMG_2044.jpg", "IMG_2069.jpg", "IMG_2096.jpg",
  "IMG_2101.jpg", "IMG_2109.jpg", "IMG_2132.jpg",
  "IMG_2147.jpg", "IMG_2149.jpg", "IMG_2151.jpg",
  "IMG_2157.jpg", "IMG_2167.jpg", "IMG_2176.jpg",
  "IMG_2184.jpg", "IMG_2185.jpg", "IMG_2186.jpg",
  "IMG_2187.jpg", "IMG_2194.jpg", "IMG_2205.jpg",
  "IMG_2209.jpg", "IMG_2219.jpg", "IMG_6777.jpg",
  "IMG_6784.jpg", "IMG_6790.jpg", "IMG_6824.jpg",
  "IMG_6857.jpg", "IMG_6879.jpg", "IMG_6893.jpg",
  "IMG_7029.jpg", "IMG_7032.jpg", "IMG_7066.jpg",
  "IMG_7075.jpg", "IMG_7102.jpg", "IMG_7186.jpg",
  "IMG_7195.jpg", "IMG_7227.jpg", "IMG_7347.jpg",
];

const chunk = <T, >(arr: T[], size: number): T[][] => {
  const chunks: T[][] = [];
  for (let i = 0; i < arr.length; i += size) chunks.push(arr.slice(i, i + size));
  return chunks;
};

const NYCTrip: React.FC = () => (
  <div className={styles.page}>
    <h1 className={styles.title}>New York City</h1>
    {chunk(landscape, 9).map((grid, gi) => (
      <div key={`l-${gi}`} className={styles.grid}>
        {grid.map((file, i) => (
          <img key={i} src={`${BASE}${file}`} alt={`New York City ${gi * 9 + i + 1}`}
               className={`${styles.img} ${styles.landscape}`}/>
        ))}
      </div>
    ))}
    {chunk(portrait, 9).map((grid, gi) => (
      <div key={`p-${gi}`} className={styles.gridPortrait}>
        {grid.map((file, i) => (
          <img key={i} src={`${BASE}${file}`} alt={`New York City portrait ${gi * 9 + i + 1}`}
               className={`${styles.img} ${styles.portrait}`}/>
        ))}
      </div>
    ))}
  </div>
);

export default NYCTrip;
