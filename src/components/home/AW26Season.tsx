import React, { useCallback, useEffect, useRef, useState } from "react";
import styles from "../../pages/styles/HomePage.module.css";

type AW26SeasonProps = {
  label: string;
};

type Point = {
  startX: number;
  startY: number;
  targetX: number;
  targetY: number;
  phase: number;
  phaseY: number;
  size: number;
  speedX: number;
  speedY: number;
  tremorX: number;
  tremorY: number;
  vibrationStrength: number;
};

const TAU = Math.PI * 2;
const DOT_SCALE = 1;

const seededRandom = (seed: number) => {
  const value = Math.sin(seed * 12.9898) * 43758.5453;
  return value - Math.floor(value);
};

const shuffle = <T,>(items: T[]) => {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i -= 1) {
    const j = Math.floor(seededRandom(i + 31) * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
};

const createPoints = (width: number, height: number): Point[] => {
  const isSmall = width < 700;
  const fieldWidth = Math.min(width * (isSmall ? 0.88 : 0.8), 980);
  const fieldHeight = Math.min(height * 0.56, isSmall ? 300 : 420);
  const gap = (isSmall ? 11 : 12) * DOT_SCALE;
  const columns = Math.max(24, Math.floor(fieldWidth / gap));
  const rows = Math.max(18, Math.floor(fieldHeight / gap));
  const count = columns * rows;
  const left = (width - fieldWidth) / 2;
  const top = (height - fieldHeight) / 2;

  const starts = Array.from({ length: count }, (_, index) => {
    const column = index % columns;
    const row = Math.floor(index / columns);
    const x = left + (column / Math.max(columns - 1, 1)) * fieldWidth;
    const y = top + (row / Math.max(rows - 1, 1)) * fieldHeight;
    const nx = column / Math.max(columns - 1, 1);
    const ny = row / Math.max(rows - 1, 1);
    const chladni =
      Math.sin(nx * Math.PI * 5) * Math.sin(ny * Math.PI * 4) +
      Math.sin(nx * Math.PI * 3) * Math.sin(ny * Math.PI * 7);

    return {
      x: x + chladni * 2.8 + (seededRandom(index + 2) - 0.5) * 2,
      y: y + chladni * 2.8 + (seededRandom(index + 9) - 0.5) * 2,
    };
  });

  const mask = document.createElement("canvas");
  mask.width = Math.max(1, Math.floor(width));
  mask.height = Math.max(1, Math.floor(height));
  const maskContext = mask.getContext("2d", { willReadFrequently: true });

  if (!maskContext) return [];

  const fontSize = Math.min(width * (isSmall ? 0.28 : 0.22), height * 0.6, 260);
  maskContext.fillStyle = "#000";
  maskContext.font = `500 ${fontSize}px Inter, Arial, sans-serif`;
  maskContext.textAlign = "center";
  maskContext.textBaseline = "alphabetic";

  const word = "athe";
  const metrics = maskContext.measureText(word);
  const textX =
    width / 2 +
    (metrics.actualBoundingBoxLeft - metrics.actualBoundingBoxRight) / 2;
  const textY =
    height / 2 +
    (metrics.actualBoundingBoxAscent - metrics.actualBoundingBoxDescent) / 2;
  maskContext.fillText(word, textX, textY);

  const pixels = maskContext.getImageData(0, 0, mask.width, mask.height).data;
  const sampleGap = isSmall ? 4 : 3;
  const candidates: Array<{ x: number; y: number }> = [];

  for (let y = 0; y < mask.height; y += sampleGap) {
    for (let x = 0; x < mask.width; x += sampleGap) {
      if (pixels[(y * mask.width + x) * 4 + 3] > 100) {
        candidates.push({ x, y });
      }
    }
  }

  const evenlySampledTargets =
    candidates.length > count
      ? Array.from(
          { length: count },
          (_, index) =>
            candidates[Math.floor((index * candidates.length) / count)],
        )
      : candidates;
  const targets = shuffle(evenlySampledTargets);

  return starts.map((start, index) => {
    const target = targets[index % Math.max(targets.length, 1)] || {
      x: width / 2,
      y: height / 2,
    };

    return {
      startX: start.x,
      startY: start.y,
      targetX: target.x,
      targetY: target.y,
      phase: seededRandom(index + 18) * TAU,
      phaseY: seededRandom(index + 29) * TAU,
      size: (0.75 + seededRandom(index + 44) * 1.15) * DOT_SCALE,
      speedX: 0.0028 + seededRandom(index + 91) * 0.0027,
      speedY: 0.0032 + seededRandom(index + 139) * 0.0025,
      tremorX: 0.006 + seededRandom(index + 117) * 0.002,
      tremorY: 0.0065 + seededRandom(index + 163) * 0.0022,
      vibrationStrength: 0.75 + seededRandom(index + 73) * 0.5,
    };
  });
};

const AW26Season: React.FC<AW26SeasonProps> = ({ label }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef<number>();
  const activeRef = useRef(false);
  const pointerRef = useRef({ x: 0.5, y: 0.5 });
  const [active, setActive] = useState(false);

  const setInteraction = useCallback((nextActive: boolean) => {
    activeRef.current = nextActive;
    setActive(nextActive);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const context = canvas.getContext("2d");
    if (!context) return undefined;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    let points: Point[] = [];
    let width = 0;
    let height = 0;
    let progress = 0;
    let lastTime = performance.now();

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      points = createPoints(width, height);
    };

    const draw = (time: number) => {
      const elapsed = Math.min((time - lastTime) / 1000, 0.05);
      lastTime = time;
      const destination = activeRef.current ? 1 : 0;
      progress +=
        (destination - progress) *
        (reducedMotion ? 1 : 1 - Math.exp(-elapsed * 2.8));
      const eased =
        progress < 0.5
          ? 4 * progress * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 3) / 2;

      context.clearRect(0, 0, width, height);
      context.fillStyle = "#4f6b3a";

      points.forEach((point, index) => {
        const nx = point.startX / Math.max(width, 1);
        const ny = point.startY / Math.max(height, 1);
        const resonance =
          Math.sin(nx * Math.PI * 5 + time * 0.00045) *
          Math.sin(ny * Math.PI * 4 - time * 0.00035);
        const crossWave =
          Math.sin(nx * Math.PI * 3 - time * 0.0003) *
          Math.sin(ny * Math.PI * 7 + time * 0.00025);
        const wave = (resonance + crossWave) * (1 - eased);
        const pointerDistance = Math.hypot(
          nx - pointerRef.current.x,
          ny - pointerRef.current.y,
        );
        const pointerRipple =
          Math.sin(pointerDistance * 38 - time * 0.004) *
          Math.max(0, 1 - pointerDistance * 3.2) *
          (1 - eased);
        const vibrationAmount = (1.9 - eased * 0.65) * point.vibrationStrength;
        const vibrationX =
          Math.sin(time * point.speedX + point.phase) * vibrationAmount +
          Math.sin(time * point.tremorX - point.phase * 0.7) *
            vibrationAmount *
            0.35;
        const vibrationY =
          Math.cos(time * point.speedY + point.phaseY) * vibrationAmount +
          Math.sin(time * point.tremorY + point.phaseY * 0.43) *
            vibrationAmount *
            0.35;

        const x =
          point.startX +
          (point.targetX - point.startX) * eased +
          wave * 3.8 +
          pointerRipple * 3 +
          vibrationX;
        const y =
          point.startY +
          (point.targetY - point.startY) * eased +
          wave * 5.2 +
          pointerRipple * 3 +
          vibrationY;
        const shimmer =
          0.78 + Math.sin(time * 0.0018 + point.phase + index * 0.01) * 0.22;
        const radius = point.size * (0.9 + eased * 0.25) * shimmer;

        context.beginPath();
        context.arc(x, y, radius, 0, TAU);
        context.fill();
      });

      frameRef.current = window.requestAnimationFrame(draw);
    };

    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
    resize();
    frameRef.current = window.requestAnimationFrame(draw);

    return () => {
      observer.disconnect();
      if (frameRef.current) window.cancelAnimationFrame(frameRef.current);
    };
  }, []);

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;

    pointerRef.current = {
      x: (event.clientX - rect.left) / rect.width,
      y: (event.clientY - rect.top) / rect.height,
    };
  };

  return (
    <section
      className={`${styles.seasonPanel} ${styles.dotSeason}`}
      aria-label={label}
    >
      <div className={`${styles.resonance} ${active ? styles.isActive : ""}`}>
        <canvas ref={canvasRef} className={styles.canvas} aria-hidden="true" />
        <div
          className={styles.interactionZone}
          role="button"
          tabIndex={0}
          aria-label="A field of dots that forms the word athe"
          aria-pressed={active}
          onPointerEnter={(event) => {
            if (event.pointerType === "mouse") setInteraction(true);
          }}
          onPointerLeave={(event) => {
            if (event.pointerType === "mouse") setInteraction(false);
          }}
          onPointerMove={handlePointerMove}
          onBlur={() => setInteraction(false)}
          onPointerUp={(event) => {
            if (event.pointerType !== "mouse") {
              setInteraction(!activeRef.current);
            }
          }}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              setInteraction(!activeRef.current);
            }
          }}
        />
      </div>
    </section>
  );
};

export default AW26Season;
