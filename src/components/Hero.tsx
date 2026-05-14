import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [petals, setPetals] = useState<Array<{ id: number; left: string; delay: number }>>([]);

  useEffect(() => {
    // Generate random petals
    const newPetals = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 8,
    }));
    setPetals(newPetals);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blush-50 via-ivory-50 to-champagne-50">
      {/* Animated Petals */}
      <div className="absolute inset-0 pointer-events-none">
        {petals.map((petal) => (
          <div
            key={petal.id}
            className="petal animate-petal-fall"
            style={{
              left: petal.left,
              animationDelay: `${petal.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Names */}
          <motion.h1
            className="font-script text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-blush-500 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            Kim Anh <span className="inline-block animate-pulse-slow">💖</span> Xuân Tụy
          </motion.h1>

          {/* Date */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <p className="text-2xl sm:text-3xl md:text-4xl font-serif text-gray-700 mb-2">
              21.11.2025
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-blush-400 to-transparent mx-auto" />
          </motion.div>

          {/* Location */}
          <motion.p
            className="text-xl sm:text-2xl text-gray-600 font-serif mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            Thôn 3B – Ea Wy – Đắk Lắk
          </motion.p>

          {/* CTA Button */}
          <motion.button
            onClick={() => scrollToSection('wedding-details')}
            className="btn-primary"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Xem thông tin tiệc cưới
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 1.5,
            repeat: Infinity,
            repeatType: 'reverse',
            repeatDelay: 0.5,
          }}
        >
          <div className="w-6 h-10 border-2 border-blush-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-blush-400 rounded-full mt-2 animate-bounce" />
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 opacity-20">
        <motion.div
          className="w-32 h-32 border-4 border-blush-300 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />
      </div>
      <div className="absolute bottom-10 right-10 opacity-20">
        <motion.div
          className="w-24 h-24 border-4 border-champagne-300 rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        />
      </div>
    </section>
  );
};

export default Hero;
