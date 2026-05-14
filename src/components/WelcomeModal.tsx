import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { hasWelcomeBeenShown, markWelcomeAsShown } from '../lib/storage';

const WelcomeModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const shown = hasWelcomeBeenShown();
    if (!shown) {
      setTimeout(() => setIsOpen(true), 1000);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    markWelcomeAsShown();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={handleClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="bg-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header with Heart Animation */}
            <div className="bg-gradient-to-br from-blush-100 to-champagne-100 p-8 text-center relative overflow-hidden">
              <motion.div
                className="text-6xl mb-4"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
              >
                💖
              </motion.div>
              <h2 className="font-script text-4xl text-blush-600 mb-2">
                Kim Anh & Xuân Tụy
              </h2>
              <p className="text-gray-600 font-serif text-lg">21.11.2025</p>
              
              {/* Floating hearts */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute text-2xl"
                    initial={{
                      x: Math.random() * 100 - 50,
                      y: 100,
                      opacity: 0,
                    }}
                    animate={{
                      y: -100,
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 3,
                      delay: i * 0.5,
                      repeat: Infinity,
                    }}
                    style={{
                      left: `${20 + i * 15}%`,
                    }}
                  >
                    {['💕', '💗', '💝'][i % 3]}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Content */}
<div className="p-8">
  <h3 className="text-2xl font-serif font-semibold text-gray-800 mb-4 text-center">
    Lời nhắn từ Kim Anh & Xuân Tụy 💌
  </h3>

  <div className="text-gray-700 leading-relaxed space-y-3 text-center">
    <p>
      Gửi đến những người thân thương của tụi mình! 🌸
    </p>
    <p>
      Tụi mình thật sự hạnh phúc khi được chia sẻ niềm vui lớn này cùng mọi người — 
      những người đã luôn ở bên, đồng hành và sẻ chia trong suốt chặng đường vừa qua.
    </p>
    <p>
      Hãy cùng tụi mình đếm ngược đến khoảnh khắc đáng nhớ,
      khi hai trái tim chính thức chung một nhịp. 💍
    </p>
    <p className="font-medium text-blush-600">
      Sự hiện diện của mọi người chính là món quà ý nghĩa nhất mà tụi mình có thể nhận được! 💖
    </p>
  </div>

  {/* Close Button */}
  <motion.button
    onClick={handleClose}
    className="mt-8 w-full btn-primary"
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
  >
    Mở thiệp mời ✨
  </motion.button>
</div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomeModal;
