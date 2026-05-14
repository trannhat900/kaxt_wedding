import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { calculateTimeRemaining, hasWeddingPassed, padNumber } from '../lib/time';

const Countdown = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());
  const [isPast, setIsPast] = useState(hasWeddingPassed());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
      setIsPast(hasWeddingPassed());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="countdown" className="section-container bg-gradient-to-br from-blush-50 via-ivory-50 to-champagne-50">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h2 className="heading-secondary mb-6">
          {isPast ? 'Ngày trọng đại đã đến!' : 'Đếm ngược đến ngày trọng đại'}
        </h2>
        <p className="text-elegant max-w-2xl mx-auto mb-12">
          {isPast
            ? 'Cảm ơn mọi người đã đến chung vui và tạo nên thật nhiều kỷ niệm tuyệt vời cùng tụi mình! 💕'
            : 'Thời gian đang đếm ngược đến khoảnh khắc trọng đại của tụi mình ✨'}
        </p>

        {!isPast && (
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {/* Days */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="card text-center bg-white"
            >
              <div className="text-5xl md:text-6xl font-bold text-blush-600 mb-2">
                {padNumber(timeRemaining.days)}
              </div>
              <div className="text-gray-600 font-medium">Ngày</div>
            </motion.div>

            {/* Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="card text-center bg-white"
            >
              <div className="text-5xl md:text-6xl font-bold text-blush-600 mb-2">
                {padNumber(timeRemaining.hours)}
              </div>
              <div className="text-gray-600 font-medium">Giờ</div>
            </motion.div>

            {/* Minutes */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="card text-center bg-white"
            >
              <div className="text-5xl md:text-6xl font-bold text-blush-600 mb-2">
                {padNumber(timeRemaining.minutes)}
              </div>
              <div className="text-gray-600 font-medium">Phút</div>
            </motion.div>

            {/* Seconds */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="card text-center bg-white"
            >
              <div className="text-5xl md:text-6xl font-bold text-blush-600 mb-2">
                {padNumber(timeRemaining.seconds)}
              </div>
              <div className="text-gray-600 font-medium">Giây</div>
            </motion.div>
          </div>
        )}

        {isPast && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-8xl"
          >
            🎉💑💒
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};

export default Countdown;
