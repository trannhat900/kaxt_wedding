import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, FormEvent } from 'react';
import { saveWish } from '../lib/storage';
import emailjs from '@emailjs/browser';

interface WishesProps {
  onOpenGiftModal: () => void;
}

const Wishes = ({ onOpenGiftModal }: WishesProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [attendance, setAttendance] = useState<'yes' | 'no' | ''>('');
  const [showConfetti, setShowConfetti] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim() || !attendance) {
      alert('Vui lòng điền đầy đủ thông tin và xác nhận tham dự!');
      return;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Email không hợp lệ!');
      return;
    }

    setIsSending(true);

    try {
      // Save wish locally (không hiển thị công khai)
      saveWish(name.trim(), message.trim());

      // Send email to bride
      const attendanceText = attendance === 'yes' 
        ? '✅ Mình sẽ tham gia, hẹn gặp vợ chồng ở buổi lễ' 
        : '❌ Tiếc quá mình có việc bận rồi :(';

      const templateParams = {
        guest_name: name.trim(),
        guest_email: email.trim(),
        guest_message: message.trim(),
        attendance_status: attendanceText,
        timestamp: new Date().toLocaleString('vi-VN'),
      };

      // EmailJS configuration
      await emailjs.send(
        'service_0cvglka',
        'template_04ufu7p',
        templateParams,
        'l4ebKHTIHQSnK9M-3'
      );

      // Send confirmation email to guest
      const guestTemplateParams = {
        to_email: email.trim(),
        guest_name: name.trim(),
        attendance_status: attendanceText,
        bride_name: 'Kim Anh & Xuân Tụy',
        wedding_date: '21 tháng 11, 2025',
        wedding_time: '11:00 AM',
        wedding_location: 'Thôn 3B – Ea Wy – Đắk Lắk',
      };

      // Send confirmation to guest (sử dụng template khác)
      await emailjs.send(
        'service_0cvglka',
        'template_ywjoyuo', 
        guestTemplateParams,
        'l4ebKHTIHQSnK9M-3'
      );

      // Reset form
      setName('');
      setEmail('');
      setMessage('');
      setAttendance('');
      
      // Show confetti animation
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 3000);

      alert('Cảm ơn bạn! Lời chúc đã được gửi đến cô dâu và chú rể. 💝');
    } catch (error) {
      console.error('Error:', error);
      alert('Có lỗi xảy ra khi gửi. Vui lòng thử lại!');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="wishes" className="section-container bg-gradient-to-br from-ivory-50 to-champagne-50 relative overflow-hidden">
      {/* Confetti */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none z-50">
          {Array.from({ length: 50 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: '-10px',
                backgroundColor: ['#f5b3c1', '#ddd2b0', '#fff39d'][Math.floor(Math.random() * 3)],
              }}
              initial={{ y: -10, opacity: 1 }}
              animate={{ y: '100vh', opacity: 0, rotate: Math.random() * 360 }}
              transition={{ duration: 2 + Math.random() * 2, ease: 'easeOut' }}
            />
          ))}
        </div>
      )}

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="heading-secondary">Lời chúc</h2>
        <p className="text-elegant max-w-2xl mx-auto">
          Gửi những lời chúc tốt đẹp nhất đến đôi uyên ương trong ngày trọng đại.
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-blush-400 to-champagne-400 mx-auto mt-6" />
      </motion.div>

      <div className="max-w-4xl mx-auto">
        {/* Wish Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="card mb-12"
        >
          <h3 className="text-2xl font-serif font-semibold text-gray-800 mb-6 text-center">
            Gửi lời chúc của bạn
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                Tên của bạn <span className="text-blush-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input-field"
                placeholder="Nguyễn Văn A"
                required
                maxLength={100}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Email của bạn <span className="text-blush-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-field"
                placeholder="email@example.com"
                required
              />
              <p className="text-xs text-gray-500 mt-1">
                💌 Email để nhận thư xác nhận từ cô dâu chú rể
              </p>
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                Lời chúc <span className="text-blush-500">*</span>
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="input-field resize-none"
                placeholder="Chúc hai bạn trăm năm hạnh phúc, bên nhau suốt đời..."
                rows={4}
                required
                maxLength={500}
              />
              <p className="text-sm text-gray-500 mt-1 text-right">
                {message.length}/500 ký tự
              </p>
            </div>

            {/* Attendance Confirmation */}
            <div>
              <label className="block text-gray-700 font-medium mb-3">
                Xác nhận tham dự <span className="text-blush-500">*</span>
              </label>
              <div className="space-y-3">
                <motion.label
                  className={`flex items-center gap-3 p-4 border-2 rounded-xl cursor-pointer transition-all ${
                    attendance === 'yes'
                      ? 'border-green-500 bg-green-50'
                      : 'border-gray-200 hover:border-green-300'
                  }`}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <input
                    type="radio"
                    name="attendance"
                    value="yes"
                    checked={attendance === 'yes'}
                    onChange={(e) => setAttendance(e.target.value as 'yes')}
                    className="w-5 h-5 text-green-500"
                  />
                  <div className="flex-1">
                    <span className="text-lg">✅ Tham gia, hẹn gặp vợ chồng ở buổi lễ</span>
                  </div>
                </motion.label>

                <motion.label
                  className={`flex items-center gap-3 p-4 border-2 rounded-xl cursor-pointer transition-all ${
                    attendance === 'no'
                      ? 'border-amber-500 bg-amber-50'
                      : 'border-gray-200 hover:border-amber-300'
                  }`}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <input
                    type="radio"
                    name="attendance"
                    value="no"
                    checked={attendance === 'no'}
                    onChange={(e) => setAttendance(e.target.value as 'no')}
                    className="w-5 h-5 text-amber-500"
                  />
                  <div className="flex-1">
                    <span className="text-lg">😢 Tiếc quá mình có việc bận rồi</span>
                  </div>
                </motion.label>
              </div>
            </div>

            <motion.button
              type="submit"
              className="btn-primary w-full"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={!name.trim() || !message.trim() || !attendance || isSending}
            >
              {isSending ? '⏳ Đang gửi...' : 'Gửi lời chúc 💝'}
            </motion.button>
            
            {/* Gift Button */}
            <motion.button
              type="button"
              onClick={onOpenGiftModal}
              className="w-full mt-3 px-6 py-3 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              💰 Gửi mừng cưới
            </motion.button>
          </form>
        </motion.div>

        {/* Thank You Note */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-blush-200">
            <div className="text-5xl mb-4">💝</div>
            <p className="text-gray-700 leading-relaxed">
              Lời chúc của bạn rất quan trọng với chúng tôi!<br />
              Sau khi gửi, bạn sẽ nhận được email xác nhận từ cô dâu chú rể.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              ⚠️ Lưu ý: Lời chúc sẽ <strong>không hiển thị công khai</strong> trên website.<br />
              Chỉ cô dâu chú rể mới có thể đọc được lời chúc của bạn. 🙏
            </p>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default Wishes;
