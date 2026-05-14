import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Invitation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="invitation" className="section-container bg-gradient-to-br from-blush-50 to-ivory-50 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-64 h-64 bg-blush-300 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-champagne-300 rounded-full blur-3xl" />
      </div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="card text-center bg-white/80 backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {/* Decorative Header */}
            <div className="mb-8">
              <div className="flex justify-center items-center gap-4 mb-6">
                <div className="w-16 h-px bg-gradient-to-r from-transparent to-blush-400" />
                <span className="text-4xl">💌</span>
                <div className="w-16 h-px bg-gradient-to-l from-transparent to-blush-400" />
              </div>
              <h2 className="heading-secondary">Thư mời</h2>
            </div>

           {/* Invitation Text - Friendly version */}
<motion.div
  initial={{ opacity: 0 }}
  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
  transition={{ duration: 1, delay: 0.6 }}
  className="space-y-6"
>
  <p className="text-xl md:text-2xl font-serif text-gray-700 leading-relaxed italic">
    “Tình yêu là hành trình hai trái tim cùng tìm thấy một nhịp đập chung.”
  </p>

  <div className="w-24 h-1 bg-gradient-to-r from-blush-400 to-champagne-400 mx-auto" />

  <div className="text-elegant space-y-4 px-4 md:px-8">
    <p>Gửi đến những người thân yêu,</p>

    <p>
      Sau quãng thời gian bên nhau với thật nhiều kỷ niệm và yêu thương,
      <strong className="text-blush-600"> Kim Anh </strong> và
      <strong className="text-blush-600"> Xuân Tụy </strong> đã quyết định cùng nhau
      bước sang một hành trình mới – hành trình của gia đình nhỏ mang tên “chúng mình”.
    </p>

    <p>
      Trong niềm hạnh phúc và hồi hộp ấy, tụi mình rất mong được đón bạn đến chung vui
      trong ngày trọng đại này – nơi chúng ta cùng nâng ly, cùng cười, cùng ghi lại
      những khoảnh khắc đáng nhớ của tình yêu và tình bạn.
    </p>

    <p>
      Sự hiện diện của bạn sẽ khiến ngày vui của tụi mình trở nên trọn vẹn hơn bao giờ hết.  
      Mong được gặp bạn thật sớm để cùng sẻ chia niềm hạnh phúc này! 💕
    </p>

    <p className="font-semibold text-gray-800">
      Hẹn gặp lại bạn trong ngày đặc biệt của tụi mình nhé!
    </p>
  </div>

  <div className="mt-8 pt-8 border-t border-gray-200">
    <p className="text-lg font-serif text-gray-700">Thương mến,</p>
    <p className="text-xl font-script text-blush-600 mt-2">
      Kim Anh & Xuân Tụy
    </p>
  </div>
</motion.div>


            {/* Decorative Footer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
              className="mt-8 flex justify-center items-center gap-4"
            >
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-champagne-400" />
              <span className="text-2xl">💐</span>
              <span className="text-2xl">💍</span>
              <span className="text-2xl">💒</span>
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-champagne-400" />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Invitation;
