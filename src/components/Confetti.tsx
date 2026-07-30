import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

type Piece = {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
  color: string;
  rotate: number;
  shape: 'rect' | 'circle';
};

const COLORS = ['#C9A227', '#1B2A4E', '#B33A3A', '#F4EDE4', '#E8B931', '#8E1B1B'];

// Lightweight CSS confetti burst — no canvas, no deps.
// `count` pieces fall once on mount; pass `key` to re-trigger.
export default function Confetti({ count = 80 }: { count?: number }) {
  const [pieces, setPieces] = useState<Piece[]>([]);

  useEffect(() => {
    const next: Piece[] = Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 0.6,
      duration: 2.4 + Math.random() * 2.2,
      size: 6 + Math.random() * 8,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      rotate: Math.random() * 360,
      shape: Math.random() > 0.5 ? 'rect' : 'circle',
    }));
    setPieces(next);
  }, [count]);

  return (
    <div className="pointer-events-none fixed inset-0 z-40 overflow-hidden">
      {pieces.map((p) => (
        <motion.div
          key={p.id}
          initial={{ y: -40, x: 0, opacity: 1, rotate: p.rotate }}
          animate={{ y: '110vh', rotate: p.rotate + 540, opacity: [1, 1, 0.9, 0] }}
          transition={{ duration: p.duration, delay: p.delay, ease: 'easeIn' }}
          style={{
            position: 'absolute',
            left: `${p.left}%`,
            width: p.size,
            height: p.shape === 'rect' ? p.size * 0.5 : p.size,
            backgroundColor: p.color,
            borderRadius: p.shape === 'circle' ? '50%' : '2px',
          }}
        />
      ))}
    </div>
  );
}
