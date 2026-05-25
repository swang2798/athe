import React from "react";
import styles from "../pages/styles/TripPage.module.css";

export interface Spot {
  name: string;
  area?: string;
  note?: string;
  src?: string;
  orientation?: "portrait" | "landscape";
}

const isVideo = (src: string) => /\.(mp4|webm|mov)$/i.test(src);

export const Media: React.FC<{
  src: string;
  alt: string;
  className?: string;
}> = ({ src, alt, className }) =>
  isVideo(src) ? (
    <video src={src} className={className} loop muted autoPlay playsInline />
  ) : (
    <img src={src} alt={alt} className={className} />
  );

export const SpotGrid: React.FC<{ spots: Spot[] }> = ({ spots }) => {
  const cols: Spot[][] = [[], []];
  const heights = [0, 0];
  spots.forEach((spot) => {
    const h = spot.orientation === "landscape" ? 3 : 4;
    const shorter = heights[0] <= heights[1] ? 0 : 1;
    cols[shorter].push(spot);
    heights[shorter] += h;
  });

  return (
    <div className={styles.spotGrid}>
      {cols.map((col, ci) => (
        <div key={ci} className={styles.spotColumn}>
          {col.map((spot, i) => (
            <div key={i} className={styles.spot}>
              {spot.src && (
                <div className={styles.spotMediaWrap}>
                  <Media
                    src={spot.src}
                    alt={spot.name}
                    className={`${styles.spotImage} ${spot.orientation === "landscape" ? styles.landscape : styles.portrait}`}
                  />
                  <div className={styles.spotOverlay}>
                    <p className={styles.spotName}>{spot.name}</p>
                    {spot.area && (
                      <p className={styles.spotArea}>{spot.area}</p>
                    )}
                    {spot.note && (
                      <p className={styles.spotNote}>{spot.note}</p>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export const Section: React.FC<{
  title: string;
  blurb?: string;
  children: React.ReactNode;
}> = ({ title, blurb, children }) => (
  <div className={styles.section}>
    <h2 className={styles.sectionTitle}>{title}</h2>
    {blurb && <p className={styles.sectionBlurb}>{blurb}</p>}
    {children}
  </div>
);
