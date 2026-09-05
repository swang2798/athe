import React, { useRef, useState } from "react";
import styles from "../../pages/styles/HomePage.module.css";

type SS26SeasonProps = {
  label: string;
};

const images = [
  "https://pub-e607f1b3e5cd407c80ae57baa3c09ecc.r2.dev/assets/home/ss26/athe-poster.webp",
  "https://pub-e607f1b3e5cd407c80ae57baa3c09ecc.r2.dev/assets/home/ss26/img-0111.webp",
  "https://pub-e607f1b3e5cd407c80ae57baa3c09ecc.r2.dev/assets/home/ss26/img-0115.webp",
  "https://pub-e607f1b3e5cd407c80ae57baa3c09ecc.r2.dev/assets/home/ss26/untitled-artwork-5.webp",
] as const;

const initialLayout = [
  { xPct: 18, yPct: 12, rotate: -7 },
  { xPct: 37, yPct: 43, rotate: 4 },
  { xPct: 53, yPct: 9, rotate: 6 },
  { xPct: 68, yPct: 44, rotate: -5 },
];

const initialPositions = images.map((_, index) => ({
  ...initialLayout[index % initialLayout.length],
}));

const SS26Season: React.FC<SS26SeasonProps> = ({ label }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [positions, setPositions] = useState(initialPositions);
  const [dragging, setDragging] = useState<number | null>(null);
  const [zIndices, setZIndices] = useState(() =>
    images.map((_, index) => index),
  );
  const maxZRef = useRef(images.length);
  const offsetRef = useRef({ x: 0, y: 0 });

  const handlePointerDown = (
    index: number,
    event: React.PointerEvent<HTMLImageElement>,
  ) => {
    const container = containerRef.current;
    if (!container) return;

    event.currentTarget.setPointerCapture(event.pointerId);
    const rect = container.getBoundingClientRect();
    const positionX = (positions[index].xPct / 100) * rect.width;
    const positionY = (positions[index].yPct / 100) * rect.height;
    offsetRef.current = {
      x: event.clientX - rect.left - positionX,
      y: event.clientY - rect.top - positionY,
    };
    setDragging(index);
    maxZRef.current += 1;
    setZIndices((current) =>
      current.map((value, itemIndex) =>
        itemIndex === index ? maxZRef.current : value,
      ),
    );
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const container = containerRef.current;
    if (!container || dragging === null) return;

    const rect = container.getBoundingClientRect();
    setPositions((current) =>
      current.map((position, index) =>
        index === dragging
          ? {
              ...position,
              xPct:
                ((event.clientX - rect.left - offsetRef.current.x) /
                  rect.width) *
                100,
              yPct:
                ((event.clientY - rect.top - offsetRef.current.y) /
                  rect.height) *
                100,
            }
          : position,
      ),
    );
  };

  return (
    <section className={styles.seasonPanel} aria-label={label}>
      <div
        ref={containerRef}
        className={styles.scatter}
        onPointerMove={handlePointerMove}
        onPointerUp={() => setDragging(null)}
        onPointerCancel={() => setDragging(null)}
      >
        {images.map((src, index) => (
          <img
            key={src}
            src={src}
            alt={`${label} scanned study ${index + 1}`}
            draggable={false}
            onPointerDown={(event) => handlePointerDown(index, event)}
            style={{
              left: `${positions[index].xPct}%`,
              top: `${positions[index].yPct}%`,
              transform: `rotate(${positions[index].rotate}deg)`,
              zIndex: zIndices[index],
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default SS26Season;
