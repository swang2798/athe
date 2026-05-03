import React, { useState, useCallback } from "react";
import { useParams, Navigate } from "react-router-dom";
import { trips, Spot } from "../data/trips";
import styles from "./TripPage.module.css";

const isVideo = (src: string) => /\.(mp4|webm|mov)$/i.test(src);

const Media: React.FC<{ src: string; alt: string; className?: string; onClick?: () => void }> = ({ src, alt, className, onClick }) =>
  isVideo(src) ? (
    <video src={src} className={className} loop muted autoPlay playsInline onClick={onClick} />
  ) : (
    <img src={src} alt={alt} className={className} onClick={onClick} />
  );

const Lightbox: React.FC<{ spot: Spot | null; onClose: () => void }> = ({ spot, onClose }) => {
  if (!spot?.src) return null;

  return (
    <div className={styles.lightboxBackdrop} onClick={onClose}>
      <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
        {isVideo(spot.src) ? (
          <video src={spot.src} className={styles.lightboxVideo} loop muted autoPlay playsInline />
        ) : (
          <img src={spot.src} alt={spot.name} className={styles.lightboxMedia} />
        )}
        <div className={styles.lightboxInfoMobile}>
          <p className={styles.lightboxName}>{spot.name}</p>
          {spot.area && <p className={styles.lightboxArea}>{spot.area}</p>}
          {spot.note && <p className={styles.lightboxNote}>{spot.note}</p>}
        </div>
      </div>
    </div>
  );
};

const SpotGrid: React.FC<{ spots: Spot[]; onSpotClick: (spot: Spot) => void }> = ({ spots, onSpotClick }) => {
  const cols: Spot[][] = [[], [], []];
  spots.forEach((spot, i) => cols[i % 3].push(spot));

  return (
    <>
      {/* Desktop: 3-column masonry */}
      <div className={styles.spotGrid}>
        {cols.map((col, ci) => (
          <div key={ci} className={styles.spotColumn}>
            {col.map((spot, i) => (
              <div key={i} className={styles.spot}>
                {spot.src && (
                  <Media
                    src={spot.src}
                    alt={spot.name}
                    className={`${styles.spotImage} ${spot.orientation === "landscape" ? styles.landscape : styles.portrait} ${styles.clickable}`}
                    onClick={() => onSpotClick(spot)}
                  />
                )}
                <div className={`${styles.spotText} ${!spot.src ? styles.spotNoMedia : ''}`}>
                  <p className={styles.spotName}>{spot.name}</p>
                  {spot.area && <p className={styles.spotArea}>{spot.area}</p>}
                  {spot.note && <p className={styles.spotNote}>{spot.note}</p>}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Mobile: Pinterest-style masonry */}
      <div className={styles.spotMasonry}>
        <div className={styles.spotMasonryCol}>
          {spots.filter((_, i) => i % 2 === 0).map((spot, i) => (
            <div key={i} className={styles.spotCard}>
              {spot.src && (
                <Media
                  src={spot.src}
                  alt={spot.name}
                  className={`${styles.spotCardImage} ${spot.orientation !== "landscape" ? styles.spotCardPortrait : ''} ${styles.clickable}`}
                  onClick={() => onSpotClick(spot)}
                />
              )}
              <div className={`${styles.spotText} ${!spot.src ? styles.spotNoMedia : ''}`}>
                <p className={styles.spotName}>{spot.name}</p>
                {spot.area && <p className={styles.spotArea}>{spot.area}</p>}
                {spot.note && <p className={styles.spotNote}>{spot.note}</p>}
              </div>
            </div>
          ))}
        </div>
        <div className={styles.spotMasonryCol}>
          {spots.filter((_, i) => i % 2 === 1).map((spot, i) => (
            <div key={i} className={styles.spotCard}>
              {spot.src && (
                <Media
                  src={spot.src}
                  alt={spot.name}
                  className={`${styles.spotCardImage} ${spot.orientation !== "landscape" ? styles.spotCardPortrait : ''} ${styles.clickable}`}
                  onClick={() => onSpotClick(spot)}
                />
              )}
              <div className={`${styles.spotText} ${!spot.src ? styles.spotNoMedia : ''}`}>
                <p className={styles.spotName}>{spot.name}</p>
                {spot.area && <p className={styles.spotArea}>{spot.area}</p>}
                {spot.note && <p className={styles.spotNote}>{spot.note}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const TripPage: React.FC = () => {
  const { id } = useParams();
  const trip = trips.find((t) => t.id === id);
  const [activeSpot, setActiveSpot] = useState<Spot | null>(null);

  const handleClose = useCallback(() => setActiveSpot(null), []);

  if (!trip) return <Navigate to="/404" replace />;

  return (
    <div>
      <h1 className={styles.title}>{trip.name}</h1>
      {trip.overview && <p className={styles.overview}>{trip.overview}</p>}

      {trip.food && trip.food.length > 0 && (
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Food</h2>
          <SpotGrid spots={trip.food} onSpotClick={setActiveSpot} />
        </div>
      )}

      {trip.attractions && trip.attractions.length > 0 && (
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Attractions</h2>
          <SpotGrid spots={trip.attractions} onSpotClick={setActiveSpot} />
        </div>
      )}

      {trip.places && trip.places.length > 0 && (
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Places</h2>
          <SpotGrid spots={trip.places} onSpotClick={setActiveSpot} />
        </div>
      )}

      {trip.stays && trip.stays.length > 0 && (
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Stays</h2>
          <SpotGrid spots={trip.stays} onSpotClick={setActiveSpot} />
        </div>
      )}

      <Lightbox spot={activeSpot} onClose={handleClose} />
    </div>
  );
};

export default TripPage;
