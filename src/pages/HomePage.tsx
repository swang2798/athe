import React, { useState, useMemo, useRef, useCallback } from 'react';
import styles from './HomePage.module.css';

const images = [
  'https://res.cloudinary.com/dlenbkeui/image/upload/v1769138292/Scanned_Document-1_mopo3y.png',
  'https://res.cloudinary.com/dlenbkeui/image/upload/v1769138298/Scanned_Document-6_y9ldfp.png',
  'https://res.cloudinary.com/dlenbkeui/image/upload/v1769138296/Scanned_Document-4_wdprlh.png',
  'https://res.cloudinary.com/dlenbkeui/image/upload/v1769138294/Scanned_Document-3_coyybw.png',
];

const HomePage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const initialPositions = useMemo(() => {
    const count = images.length;
    const cols = Math.ceil(Math.sqrt(count));
    const rows = Math.ceil(count / cols);
    const cellW = 60 / cols, cellH = 60 / rows;
    return images.map((_, i) => ({
      xPct: 10 + (i % cols) * cellW + Math.random() * (cellW - 15),
      yPct: 5 + Math.floor(i / cols) * cellH + Math.random() * (cellH - 15),
      rotate: Math.random() * 20 - 10,
    }));
  }, []);

  const [positions, setPositions] = useState(initialPositions);
  const [dragging, setDragging] = useState<number | null>(null);
  const offsetRef = useRef({ x: 0, y: 0 });
  const [zIndices, setZIndices] = useState(() => images.map((_, i) => i));
  const [maxZ, setMaxZ] = useState(images.length);

  const toLocal = useCallback((clientX: number, clientY: number) => {
    const rect = containerRef.current!.getBoundingClientRect();
    return { x: clientX - rect.left, y: clientY - rect.top };
  }, []);

  const handleMouseDown = (i: number, e: React.MouseEvent) => {
    const rect = containerRef.current!.getBoundingClientRect();
    const localX = e.clientX - rect.left;
    const localY = e.clientY - rect.top;
    const posX = positions[i].xPct / 100 * rect.width;
    const posY = positions[i].yPct / 100 * rect.height;
    offsetRef.current = { x: localX - posX, y: localY - posY };
    setDragging(i);
    const newZ = maxZ + 1;
    setMaxZ(newZ);
    setZIndices(z => z.map((val, idx) => idx === i ? newZ : val));
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (dragging === null) return;
    const rect = containerRef.current!.getBoundingClientRect();
    const local = toLocal(e.clientX, e.clientY);
    setPositions(pos => pos.map((p, i) =>
      i === dragging ? {
        ...p,
        xPct: (local.x - offsetRef.current.x) / rect.width * 100,
        yPct: (local.y - offsetRef.current.y) / rect.height * 100,
      } : p
    ));
  };

  const handleMouseUp = () => setDragging(null);

  return (
    <div ref={containerRef} className={styles.scatter} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp} onMouseLeave={handleMouseUp}>
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt=""
          draggable={false}
          onMouseDown={(e) => handleMouseDown(i, e)}
          style={{
            left: `${positions[i].xPct}%`,
            top: `${positions[i].yPct}%`,
            transform: `rotate(${positions[i].rotate}deg)`,
            cursor: 'grab',
            zIndex: zIndices[i],
          }}
        />
      ))}
    </div>
  );
};

export default HomePage;
