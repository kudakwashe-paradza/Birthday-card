import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail } from 'lucide-react';
import { letterParagraphs } from '../Contents';

export default function LetterSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      id="letter"
      ref={ref}
      className="relative flex min-h-screen items-center justify-center bg-[#F4EDE4] px-6 py-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,162,39,0.08),transparent_70%)]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="relative w-full max-w-2xl"
      >
        <div className="mb-8 flex items-center justify-center gap-3 text-[#1B2A4E]">
          <Mail className="h-5 w-5 text-[#B33A3A]" />
          <h2 className="font-[Cormorant_Garamond] text-3xl font-semibold tracking-wide sm:text-4xl">
            A Letter For You
          </h2>
        </div>

        <div className="relative rounded-sm border border-[#C9A227]/30 bg-white/70 p-8 shadow-[0_20px_60px_-30px_rgba(27,42,78,0.4)] sm:p-12">
          <div className="absolute left-0 top-0 h-16 w-16 border-l-2 border-t-2 border-[#C9A227]/40 rounded-tl-sm" />
          <div className="absolute bottom-0 right-0 h-16 w-16 border-b-2 border-r-2 border-[#C9A227]/40 rounded-br-sm" />

          <div className="space-y-6">
            {letterParagraphs.map((para, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.5, duration: 0.8, ease: 'easeOut' }}
                className={`font-[Cormorant_Garamond] leading-[1.7] ${
                  i === letterParagraphs.length - 1
                    ? 'text-right text-xl italic text-[#B33A3A]'
                    : 'text-lg text-[#1B2A4E] sm:text-xl'
                }`}
              >
                {para}
              </motion.p>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
