import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Stethoscope, Check, X, RotateCcw, Trophy } from 'lucide-react';
import { quizQuestions } from '../Contents';

export default function QuizSection() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [done, setDone] = useState(false);

  const q = quizQuestions[current];
  const total = quizQuestions.length;

  const choose = (i: number) => {
    if (revealed) return;
    setSelected(i);
    setRevealed(true);
    if (i === q.correctIndex) setScore((s) => s + 1);
  };

  const next = () => {
    if (current + 1 >= total) {
      setDone(true);
    } else {
      setCurrent((c) => c + 1);
      setSelected(null);
      setRevealed(false);
    }
  };

  const restart = () => {
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setRevealed(false);
    setDone(false);
  };

  return (
    <section
      id="quiz"
      className="relative flex min-h-screen flex-col items-center justify-center bg-[#0f1c33] px-6 py-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(179,58,58,0.12),transparent_65%)]" />

      <div className="relative z-10 mb-8 flex items-center gap-3 text-[#F4EDE4]">
        <Stethoscope className="h-5 w-5 text-[#B33A3A]" />
        <h2 className="font-[Cormorant_Garamond] text-3xl font-semibold tracking-wide sm:text-4xl">
          How Well Do You Know Yourself?
        </h2>
      </div>
      <p className="relative z-10 mb-8 font-[Inter] text-sm text-[#F4EDE4]/50">
        A memory jogger — let's see how you do.
      </p>

      <div className="relative z-10 w-full max-w-xl">
        <AnimatePresence mode="wait">
          {!done ? (
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl border border-[#C9A227]/20 bg-white/5 p-6 backdrop-blur-sm sm:p-8"
            >
              <div className="mb-4 flex items-center justify-between font-[Inter] text-xs uppercase tracking-[0.2em] text-[#C9A227]">
                <span>Question {current + 1} / {total}</span>
                <span>Score: {score}</span>
              </div>

              <h3 className="mb-6 font-[Cormorant_Garamond] text-xl font-medium text-[#F4EDE4] sm:text-2xl">
                {q.question}
              </h3>

              <div className="space-y-3">
                {q.options.map((opt, i) => {
                  const isCorrect = i === q.correctIndex;
                  const isSelected = i === selected;
                  let style = 'border-white/15 bg-white/5 text-[#F4EDE4]/80 hover:border-[#C9A227]/50 hover:bg-white/10';
                  if (revealed && isCorrect) style = 'border-[#E8B931] bg-[#E8B931]/15 text-[#F4EDE4]';
                  else if (revealed && isSelected && !isCorrect) style = 'border-[#B33A3A] bg-[#B33A3A]/15 text-[#F4EDE4]/70';
                  else if (revealed) style = 'border-white/10 bg-white/5 text-[#F4EDE4]/40';

                  return (
                    <button
                      key={i}
                      onClick={() => choose(i)}
                      disabled={revealed}
                      className={`flex w-full items-center justify-between rounded-xl border px-4 py-3 text-left font-[Inter] text-sm transition-all ${style}`}
                    >
                      <span>{opt}</span>
                      {revealed && isCorrect && <Check className="h-4 w-4 text-[#E8B931]" />}
                      {revealed && isSelected && !isCorrect && <X className="h-4 w-4 text-[#B33A3A]" />}
                    </button>
                  );
                })}
              </div>

              <AnimatePresence>
                {revealed && (
                  <motion.button
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    onClick={next}
                    className="mt-6 w-full rounded-xl bg-[#C9A227] py-3 font-[Inter] text-sm font-semibold uppercase tracking-[0.2em] text-[#0f1c33] transition hover:bg-[#E8B931]"
                  >
                    {current + 1 >= total ? 'See Results' : 'Next Question'}
                  </motion.button>
                )}
              </AnimatePresence>
            </motion.div>
          ) : (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: 'backOut' }}
              className="rounded-2xl border border-[#C9A227]/30 bg-white/5 p-8 text-center backdrop-blur-sm"
            >
              <Trophy className="mx-auto mb-4 h-12 w-12 text-[#E8B931]" />
              <p className="font-[Cormorant_Garamond] text-4xl font-semibold text-[#F4EDE4]">
                {score} / {total}
              </p>
              <p className="mt-3 font-[Inter] text-sm text-[#F4EDE4]/60">
                {score === total
                  ? "Perfect — you know yourself better than anyone. Future doctor diagnostic skills: confirmed."
                  : score >= total / 2
                    ? "Not bad! You clearly know yourself well — and you're honest about it."
                    : "Hey, even doctors miss a few. The important thing is you showed up."}
              </p>
              <button
                onClick={restart}
                className="mx-auto mt-6 flex items-center gap-2 rounded-xl border border-[#C9A227]/40 px-5 py-2.5 font-[Inter] text-xs uppercase tracking-[0.2em] text-[#C9A227] transition hover:bg-[#C9A227]/10"
              >
                <RotateCcw className="h-4 w-4" /> Try Again
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
