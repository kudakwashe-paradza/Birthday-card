import { useState } from 'react';

interface NavProps {
  musicOn: boolean;
  onToggleMusic: () => void;
}

export default function Nav({ musicOn, onToggleMusic }: NavProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-4 inset-x-0 z-50 px-4 flex flex-col items-center pointer-events-none">
      {/* Floating Rounded Pill Bar */}
      <nav className="pointer-events-auto w-full max-w-2xl bg-gray-900/80 backdrop-blur-md border border-gray-700/50 rounded-full px-5 py-2.5 shadow-2xl flex justify-between items-center text-white">
        {/* Title / Logo */}
        <span className="font-extrabold text-sm tracking-wider text-yellow-400 pl-1">
          LEVEL 22
        </span>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-6 text-xs font-bold tracking-widest text-gray-300">
          <a href="#letter" className="hover:text-yellow-400 transition-colors">LETTER</a>
          <a href="#gallery" className="hover:text-yellow-400 transition-colors">GALLERY</a>
          <a href="#quiz" className="hover:text-yellow-400 transition-colors">QUIZ</a>

          <button
            onClick={onToggleMusic}
            className="flex items-center gap-1.5 bg-yellow-500/10 text-yellow-400 border border-yellow-500/30 px-3 py-1 rounded-full hover:bg-yellow-500/20 transition-all cursor-pointer text-xs font-bold"
          >
            {musicOn ? '🔊 Music On' : '🔇 Music Off'}
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={onToggleMusic}
            className="text-xs font-bold text-yellow-400 bg-yellow-500/10 border border-yellow-500/30 px-2.5 py-1 rounded-full"
          >
            {musicOn ? '🔊' : '🔇'}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-300 hover:text-white p-1 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Floating Mobile Dropdown Menu */}
      {isOpen && (
        <div className="pointer-events-auto mt-2 w-full max-w-2xl bg-gray-900/95 backdrop-blur-md border border-gray-700/50 rounded-2xl px-6 py-4 space-y-3 text-xs font-bold tracking-widest text-gray-300 md:hidden shadow-2xl text-center">
          <a href="#letter" onClick={() => setIsOpen(false)} className="block hover:text-yellow-400 py-1.5 border-b border-gray-800">
            LETTER
          </a>
          <a href="#gallery" onClick={() => setIsOpen(false)} className="block hover:text-yellow-400 py-1.5 border-b border-gray-800">
            GALLERY
          </a>
          <a href="#quiz" onClick={() => setIsOpen(false)} className="block hover:text-yellow-400 py-1.5">
            QUIZ
          </a>
        </div>
      )}
    </header>
  );
}