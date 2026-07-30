import { useState, useRef, useCallback } from 'react';
import Nav from './components/Nav';
import IntroSection from './components/IntroSection';
import LetterSection from './components/LetterSection';
import GallerySection from './components/GallerySection';
import QuizSection from './components/QuizSection';
import ThingsSection from './components/Thingssection';
import ClosingSection from './components/ClosingSection';

export default function App() {
  const [entered, setEntered] = useState(false);
  const [musicOn, setMusicOn] = useState(false);
  
  // HTML Audio element reference for your actual MP3 file
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleMusic = useCallback(() => {
    // 1. Initialize audio if it hasn't been created yet
    if (!audioRef.current) {
      const audio = new Audio('/music.mp3'); // Make sure your file is in public/music.mp3
      audio.loop = true;
      audioRef.current = audio;
    }

    const audio = audioRef.current;

    // 2. Play or Pause depending on current state
    if (!audio.paused) {
      audio.pause();
      setMusicOn(false);
    } else {
      audio.play()
        .then(() => setMusicOn(true))
        .catch((e) => console.log('Audio playback issue:', e));
    }
  }, []);

  const handleEnter = useCallback(() => {
    setEntered(true);

    // Safely start audio on the "Enter" button click gesture
    if (!audioRef.current) {
      const audio = new Audio('/music.mp3');
      audio.loop = true;
      audioRef.current = audio;
    }

    audioRef.current.play()
      .then(() => setMusicOn(true))
      .catch((e) => console.log('Autoplay error:', e));

    setTimeout(() => {
      document.getElementById('letter')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0f1c33]">
      <Nav musicOn={musicOn} onToggleMusic={toggleMusic} />

      <IntroSection onEnter={handleEnter} />

      {entered && (
        <>
          <LetterSection />
          <GallerySection />
          <QuizSection />
          <ThingsSection />
          <ClosingSection />
        </>
      )}
    </div>
  );
}