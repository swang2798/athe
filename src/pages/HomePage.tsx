import React, { useState, useMemo } from 'react';

const images = [
  'https://res.cloudinary.com/dlenbkeui/image/upload/v1769138292/Scanned_Document-1_mopo3y.png',
  'https://res.cloudinary.com/dlenbkeui/image/upload/v1769138298/Scanned_Document-6_y9ldfp.png',
  'https://res.cloudinary.com/dlenbkeui/image/upload/v1769138296/Scanned_Document-4_wdprlh.png',
  'https://res.cloudinary.com/dlenbkeui/image/upload/v1769138294/Scanned_Document-3_coyybw.png',
];

const HomePage: React.FC = () => {
  const initialPositions = useMemo(() => {
    const count = images.length;
    const cols = Math.ceil(Math.sqrt(count));
    const rows = Math.ceil(count / cols);
    const cellW = 60 / cols, cellH = 60 / rows;
    return images.map((_, i) => ({
      x: (20 + (i % cols) * cellW + Math.random() * (cellW - 15)) * window.innerWidth / 100,
      y: (15 + Math.floor(i / cols) * cellH + Math.random() * (cellH - 15)) * window.innerHeight / 100,
      rotate: Math.random() * 20 - 10,
    }));
  }, []);

  const [positions, setPositions] = useState(initialPositions);
  const [dragging, setDragging] = useState<number | null>(null);
  const [offset, setOffset] = useState({x: 0, y: 0});
  const [zIndices, setZIndices] = useState(() => images.map((_, i) => i));
  const [maxZ, setMaxZ] = useState(images.length);

  const handleMouseDown = (i: number, e: React.MouseEvent) => {
    setDragging(i);
    setOffset({x: e.clientX - positions[i].x, y: e.clientY - positions[i].y});
    const newZ = maxZ + 1;
    setMaxZ(newZ);
    setZIndices(z => z.map((val, idx) => idx === i ? newZ : val));
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (dragging === null) return;
    setPositions(pos => pos.map((p, i) =>
      i === dragging ? {...p, x: e.clientX - offset.x, y: e.clientY - offset.y} : p
    ));
  };

  const handleMouseUp = () => setDragging(null);

  return (
    <div className="home-scatter" onMouseMove={handleMouseMove} onMouseUp={handleMouseUp} onMouseLeave={handleMouseUp}>
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt=""
          draggable={false}
          onMouseDown={(e) => handleMouseDown(i, e)}
          style={{
            left: positions[i].x,
            top: positions[i].y,
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
