import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const ThankYou = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const shareOnFacebook = () => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
  };

  const shareOnZalo = () => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://zalo.me/share?url=${url}`, '_blank');
  };

  return (
    <section id="thank-you" className="section-container bg-gradient-to-br from-blush-50 to-champagne-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blush-300 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-champagne-300 rounded-full blur-3xl" />
      </div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center relative z-10"
      >
        {/* Main Content */}
        <motion.div
          className="card bg-white/80 backdrop-blur-sm"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="text-6xl mb-6">💝</div>

<h2 className="heading-secondary mb-6">Cảm ơn đại gia đình thân yêu</h2>

<div className="text-elegant space-y-4 mb-8">
  <p>
    Sự có mặt của mỗi người đều chính là món quà ý nghĩa và quý giá nhất đối với tụi mình trong ngày đặc biệt này. 💖
  </p>
  <p>
    Tụi mình thật sự trân trọng từng lời chúc, từng nụ cười và từng cái ôm ấm áp mà mọi người đã gửi đến
    <strong className="text-blush-600"> Kim Anh </strong> và
    <strong className="text-blush-600"> Xuân Tụy</strong>.
  </p>
  <p>
    Mong rằng những khoảnh khắc hạnh phúc này sẽ luôn được lưu giữ - và tụi mình hy vọng sẽ có bạn trong những kỷ niệm ấy. ✨
  </p>
  <p>
    Hẹn gặp lại mọi người trong buổi tiệc cưới thật vui và tràn đầy tiếng cười nhé! 🎊
  </p>
</div>

<div className="flex justify-center items-center gap-4 mb-8">
  <div className="w-16 h-px bg-gradient-to-r from-transparent to-blush-400" />
  <span className="text-4xl">💕</span>
  <div className="w-16 h-px bg-gradient-to-l from-transparent to-blush-400" />
</div>

<p className="text-2xl font-script text-blush-600 mb-8">
  Thương mến,
  <br />
  Kim Anh & Xuân Tụy
</p>


          {/* Share Buttons */}
          <div className="space-y-4">
            <p className="text-gray-600 font-medium">Chia sẻ thiệp mời:</p>
            <div className="flex justify-center gap-4">
              <motion.button
                onClick={shareOnFacebook}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all duration-300 flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>📘</span>
                <span>Facebook</span>
              </motion.button>
              <motion.button
                onClick={shareOnZalo}
                className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full font-medium transition-all duration-300 flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>💬</span>
                <span>Zalo</span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ThankYou;
