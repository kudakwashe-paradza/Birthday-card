import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { twentyTwoThings } from '../Contents';

export default function ThingsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section
      id="things"
      ref={ref}
      className="relative min-h-screen bg-[#F4EDE4] px-6 py-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(27,42,78,0.06),transparent_70%)]" />

      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="mb-12 flex flex-col items-center text-center">
          <Sparkles className="mb-3 h-6 w-6 text-[#C9A227]" />
          <h2 className="font-[Cormorant_Garamond] text-3xl font-semibold tracking-wide text-[#1B2A4E] sm:text-4xl">
            22 Things About You
          </h2>
          <p className="mt-3 max-w-md font-[Inter] text-sm text-[#1B2A4E]/60">
            One for every year — the small, specific reasons you matter.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {twentyTwoThings.map((thing, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, rotateX: -8 }}
              animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ delay: 0.05 * (i % 6), duration: 0.6, ease: 'easeOut' }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group relative overflow-hidden rounded-xl border border-[#C9A227]/30 bg-white p-6 shadow-[0_10px_30px_-20px_rgba(27,42,78,0.3)]"
            >
              <div className="mb-3 flex items-center justify-between">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1B2A4E] font-[Cormorant_Garamond] text-sm font-semibold text-[#E8B931]">
                  {i + 1}
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-[#B33A3A]/40 transition-colors group-hover:bg-[#B33A3A]" />
              </div>
              <p className="font-[Cormorant_Garamond] text-lg leading-relaxed text-[#1B2A4E]">
                {thing}
              </p>
              <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-[#C9A227]/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
