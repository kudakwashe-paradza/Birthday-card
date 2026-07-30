import { motion } from 'framer-motion';
import { Cake, Stethoscope, ChevronDown } from 'lucide-react';
import { birthdayPerson } from '../Contents';
import Heartbeat from './HeartBeat';
import Confetti from './Confetti';

export default function IntroSection({ onEnter }: { onEnter: () => void }) {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#0f1c33] px-6 text-center">
      <Confetti count={90} />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,162,39,0.18),transparent_60%)]" />

      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'backOut' }}
        className="relative z-10 mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-[#C9A227]/40 bg-[#C9A227]/10"
      >
        <Cake className="h-9 w-9 text-[#E8B931]" />
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="relative z-10 font-[Inter] text-sm uppercase tracking-[0.35em] text-[#C9A227]"
      >
        Happy Birthday
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.9, ease: 'easeOut' }}
        className="relative z-10 mt-3 font-[Dancing_Script] text-6xl font-bold text-[#F4EDE4] sm:text-7xl md:text-8xl"
      >
        {birthdayPerson.name}
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
        className="relative z-10 my-6 h-px w-40 bg-gradient-to-r from-transparent via-[#C9A227] to-transparent"
      />

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="relative z-10 flex items-center gap-3 font-[Cormorant_Garamond] text-2xl italic text-[#F4EDE4]/90 sm:text-3xl"
      >
        <Stethoscope className="h-6 w-6 text-[#B33A3A]" />
        <span>Turning {birthdayPerson.age}</span>
        <Stethoscope className="h-6 w-6 text-[#B33A3A]" />
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="relative z-10 mt-4 max-w-md font-[Inter] text-sm text-[#F4EDE4]/60"
      >
        {birthdayPerson.tagline}
      </motion.p>

      <div className="relative z-10 mt-8 w-full max-w-xs">
        <Heartbeat className="h-12 w-full" />
      </div>

      <motion.button
        onClick={onEnter}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.2, duration: 0.8 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.96 }}
        className="relative z-10 mt-10 flex flex-col items-center gap-2 font-[Inter] text-xs uppercase tracking-[0.3em] text-[#C9A227] transition-colors hover:text-[#E8B931]"
      >
        Open Up
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="h-5 w-5" />
        </motion.span>
      </motion.button>
    </section>
  );
}
