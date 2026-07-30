import { motion } from 'framer-motion';

// A pulsing ECG/heartbeat line — a subtle nod to medicine.
export default function Heartbeat({ className = '' }: { className?: string }) {
  const path =
    'M0 40 L60 40 L75 40 L82 20 L90 60 L98 10 L106 55 L113 40 L180 40 L195 40 L202 25 L210 58 L218 15 L226 50 L233 40 L300 40';

  return (
    <motion.svg
      viewBox="0 0 300 80"
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.path
        d={path}
        fill="none"
        stroke="#B33A3A"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 2.2, ease: 'easeInOut', delay: 0.4 }}
      />
      <motion.circle
        cx="218"
        cy="15"
        r="4"
        fill="#B33A3A"
        animate={{ scale: [1, 1.6, 1, 1.6, 1], opacity: [1, 0.5, 1, 0.5, 1] }}
        transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
      />
    </motion.svg>
  );
}
