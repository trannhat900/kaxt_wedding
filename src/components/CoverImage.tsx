import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const CoverImage = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate opacity based on scroll position (fade out as user scrolls)
  const opacity = Math.max(0, 1 - scrollY / 300);
  const isHidden = scrollY > 400;

  if (isHidden) return null;

  return (
    <div
      className="fixed inset-0 z-40 pointer-events-none"
      style={{ opacity }}
    >
      {/* Cover Image */}
      <div className="relative w-full h-screen">
        <img
          src="/gallery/og-cover.jpg"
          alt="Kim Anh & Xuân Tụy - Wedding Cover"
          className="w-full h-full object-cover"
        />
        
        {/* Gradient Overlay for better visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
        
        {/* Names Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="space-y-4"
          >
            <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold text-white drop-shadow-2xl">
              Kim Anh & Xuân Tụy
            </h1>
            <p className="font-playfair text-2xl md:text-3xl text-white/90 drop-shadow-lg">
              21.11.2025
            </p>
          </motion.div>
        </div>
        
        {/* Scroll Down Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 0.5 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-center"
        >
          <p className="text-white text-base font-medium mb-3 drop-shadow-lg tracking-wider">
            LƯỚT XUỐNG
          </p>
          <div className="text-white text-4xl">
            ↓
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CoverImage;
