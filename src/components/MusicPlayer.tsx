import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { getMusicMutedPreference, saveMusicMutedPreference } from '../lib/storage';

const MusicPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    // Load preference
    const mutedPref = getMusicMutedPreference();

    // Set up audio element
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
      audioRef.current.loop = true;
    }

    // Try to autoplay after user interaction
    const tryAutoplay = async () => {
      if (!hasInteracted && audioRef.current && !mutedPref) {
        try {
          await audioRef.current.play();
          setIsPlaying(true);
          setHasInteracted(true);
        } catch (error) {
          console.log('Autoplay prevented, waiting for user interaction');
        }
      }
    };

    // Listen for any user interaction
    const handleInteraction = () => {
      if (!hasInteracted) {
        setHasInteracted(true);
        tryAutoplay();
      }
    };

    // Add listeners for various interaction events
    window.addEventListener('click', handleInteraction, { once: true });
    window.addEventListener('scroll', handleInteraction, { once: true });
    window.addEventListener('touchstart', handleInteraction, { once: true });

    // Try immediate autoplay (might work on some browsers)
    tryAutoplay();

    return () => {
      window.removeEventListener('click', handleInteraction);
      window.removeEventListener('scroll', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
    };
  }, [hasInteracted]);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
      saveMusicMutedPreference(true);
    } else {
      audioRef.current.play().catch((error) => {
        console.log('Autoplay prevented:', error);
      });
      setIsPlaying(true);
      saveMusicMutedPreference(false);
    }
  };

  const handleAudioPlay = () => {
    setIsPlaying(true);
  };

  const handleAudioPause = () => {
    setIsPlaying(false);
  };

  return (
    <div className="fixed bottom-8 left-8 z-40">
      <motion.button
        onClick={togglePlay}
        className="w-14 h-14 bg-blush-500 hover:bg-blush-600 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        aria-label={isPlaying ? 'Tạm dừng nhạc' : 'Phát nhạc'}
        title={isPlaying ? 'Tạm dừng nhạc' : 'Phát nhạc'}
      >
        <span className="text-2xl">
          {isPlaying ? '🔊' : '🔇'}
        </span>
      </motion.button>

      <audio
        ref={audioRef}
        onPlay={handleAudioPlay}
        onPause={handleAudioPause}
        preload="metadata"
      >
        {/* Placeholder - replace with actual music file */}
        <source src="/music/wedding-bgm.mp3" type="audio/mpeg" />
        Trình duyệt của bạn không hỗ trợ phát nhạc.
      </audio>

      {/* Tooltip */}
      {!isPlaying && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute left-full ml-4 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap pointer-events-none"
        >
          Nhấn để phát nhạc nền 🎵
          <div className="absolute right-full top-1/2 -translate-y-1/2 border-8 border-transparent border-r-gray-800" />
        </motion.div>
      )}
    </div>
  );
};

export default MusicPlayer;
