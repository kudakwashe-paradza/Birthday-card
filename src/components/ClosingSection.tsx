import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Heart } from 'lucide-react';
import { closingMessage } from '../Contents';
import Confetti from './Confetti';

export default function ClosingSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      id="closing"
      ref={ref}
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#0f1c33] px-6 py-24 text-center"
    >
      {inView && <Confetti count={120} />}

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,162,39,0.2),transparent_60%)]" />

      <motion.div
        initial={{ scale: 0, rotate: -30 }}
        animate={inView ? { scale: 1, rotate: 0 } : {}}
        transition={{ duration: 0.8, ease: 'backOut' }}
        className="relative z-10 mb-8 flex h-16 w-16 items-center justify-center rounded-full border border-[#B33A3A]/40 bg-[#B33A3A]/10"
      >
        <motion.span
          animate={{ scale: [1, 1.15, 1, 1.15, 1] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Heart className="h-7 w-7 fill-[#B33A3A] text-[#B33A3A]" />
        </motion.span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="relative z-10 font-[Dancing_Script] text-5xl font-bold text-[#E8B931] sm:text-6xl"
      >
        {closingMessage.title}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="relative z-10 mt-6 max-w-xl font-[Cormorant_Garamond] text-xl leading-relaxed text-[#F4EDE4]/90 sm:text-2xl"
      >
        {closingMessage.body}
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 1.1, duration: 1 }}
        className="relative z-10 mt-8 h-px w-32 bg-gradient-to-r from-transparent via-[#C9A227] to-transparent"
      />

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 1.3, duration: 0.8 }}
        className="relative z-10 mt-6 font-[Dancing_Script] text-2xl text-[#C9A227]"
      >
        {closingMessage.signoff}
      </motion.p>
    </section>
  );
}
