import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { getFormattedWeddingDate, getWeddingTime } from '../lib/time';

const WeddingDetails = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

 
  const mapUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1942.0765564573012!2d108.06161748947797!3d13.21570210603259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x316e0a8f20b3e223%3A0x2d4aba10a7de3fc!2zVGnhu4djIEPGsOG7m2kgVGjDuXkgVMOtbg!5e0!3m2!1sen!2s!4v1761297444369!5m2!1sen!2s';

  return (
    <section id="wedding-details" className="section-container bg-gradient-to-br from-champagne-50 to-ivory-50">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="heading-secondary">Thông tin tiệc cưới</h2>
        <p className="text-elegant max-w-2xl mx-auto">
        Gia đình Kim Anh & Xuân Tụy vô cùng hân hoan được đón các anh chị, bạn bè và người thân đến chung vui trong ngày hạnh phúc của đôi trẻ. 💐
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-blush-400 to-champagne-400 mx-auto mt-6" />
      </motion.div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Date & Time Card */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="card text-center"
        >
          <div className="text-6xl mb-4">📅</div>
          <h3 className="text-2xl font-serif font-semibold text-gray-800 mb-3">Ngày & Giờ</h3>
          <p className="text-lg text-gray-700 mb-2">{getFormattedWeddingDate()}</p>
          <p className="text-xl font-semibold text-blush-600">
            Tiệc trưa bắt đầu lúc {getWeddingTime()}
          </p>
          <div className="mt-4 pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-500">Múi giờ: Asia/Ho_Chi_Minh (GMT+7)</p>
          </div>
        </motion.div>

        {/* Location Card */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="card text-center"
        >
          <div className="text-6xl mb-4">📍</div>
          <h3 className="text-2xl font-serif font-semibold text-gray-800 mb-3">Địa điểm</h3>
          <p className="text-lg text-gray-700 mb-2 font-medium">Thôn 3B – Ea Wy</p>
          <p className="text-gray-600">Đắk Lắk, Việt Nam</p>
          <motion.a
            href="https://maps.app.goo.gl/tQ6wwrJsdq5KcGec7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 px-6 py-2 bg-blush-500 hover:bg-blush-600 text-white rounded-full transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Xem bản đồ 🗺️
          </motion.a>
        </motion.div>
      </div>

      {/* Transportation Info */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="max-w-5xl mx-auto mt-8"
      >
        <div className="card bg-gradient-to-br from-blue-50 to-cyan-50">
          <h3 className="text-xl font-serif font-semibold text-gray-800 mb-4 text-center">
            🚌 Thông tin xe đi từ TP. Hồ Chí Minh đến Đắk Lắk
          </h3>
          <p className="text-center text-gray-600 mb-6">
            Để bạn thuận tiện sắp xếp chuyến đi:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Bến xe Miền Đông */}
            <div className="bg-white rounded-xl p-5 shadow-sm">
              <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <span className="text-2xl">🏢</span>
                <span>Bến xe Miền Đông</span>
              </h4>
              <div className="space-y-3">
                <div className="pl-8">
                  <p className="font-medium text-gray-700 mb-1">• Nhà xe Hưng Phát Đỏ</p>
                  <div className="flex flex-col gap-1 text-sm">
                    <a href="tel:0961293939" className="text-blue-600 hover:text-blue-700 transition-colors">
                      📞 0961 293 939
                    </a>
                    <a href="tel:0971293939" className="text-blue-600 hover:text-blue-700 transition-colors">
                      📞 0971 293 939
                    </a>
                  </div>
                </div>
                
                <div className="pl-8">
                  <p className="font-medium text-gray-700 mb-1">• Nhà xe Bảy Ánh</p>
                  <div className="flex flex-col gap-1 text-sm">
                    <a href="tel:0977245245" className="text-blue-600 hover:text-blue-700 transition-colors">
                      📞 0977 245 245
                    </a>
                    <a href="tel:0948349349" className="text-blue-600 hover:text-blue-700 transition-colors">
                      📞 0948 349 349
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Bến xe An Sương */}
            <div className="bg-white rounded-xl p-5 shadow-sm">
              <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <span className="text-2xl">🏢</span>
                <span>Bến xe An Sương</span>
              </h4>
              <div className="space-y-3">
                <div className="pl-8">
                  <p className="font-medium text-gray-700 mb-1">• Nhà xe Tân Quý</p>
                  <div className="flex flex-col gap-1 text-sm">
                    <a href="tel:0961755755" className="text-blue-600 hover:text-blue-700 transition-colors">
                      📞 0961 755 755
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-blue-200 text-center">
            <p className="text-sm text-gray-600">
              💡 <strong>Lưu ý:</strong> Nên đặt vé trước 2 - 3 ngày để có chỗ ngồi tốt nhất!
            </p>
          </div>
        </div>
      </motion.div>

      {/* Map Preview */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="max-w-5xl mx-auto mt-12"
      >
        <div className="card overflow-hidden">
          <div className="aspect-video bg-gradient-to-br from-blush-100 to-champagne-100 rounded-lg overflow-hidden">
            <iframe
              src={mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Bản đồ địa điểm tổ chức tiệc cưới"
              className="w-full h-full"
            />
          </div>
        </div>
      </motion.div>

      {/* Additional Info */}
      <motion.div
  initial={{ opacity: 0 }}
  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
  transition={{ duration: 0.8, delay: 0.8 }}
  className="max-w-3xl mx-auto mt-12 text-center"
>
  <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-champagne-200">
    <h4 className="text-xl font-serif font-semibold text-gray-800 mb-4">
      Một vài điều nhỏ xinh 💕
    </h4>
    <ul className="space-y-2 text-gray-700">
      <li className="flex items-center justify-center gap-2">
        <span className="text-blush-500">🌸</span>
        <span>
          Hãy đến sớm một chút để cùng chúng mình lưu giữ những khoảnh khắc thật đẹp nhé ✨
        </span>
      </li>
      <li className="flex items-center justify-center gap-2">
        <span className="text-blush-500">👗</span>
        <span>
          Trang phục gợi ý: thanh lịch, nhẹ nhàng – để ai cũng thật rạng rỡ trong ngày vui 💖
        </span>
      </li>
      <li className="flex items-center justify-center gap-2">
        <span className="text-blush-500">🚗</span>
        <span>
          Yên tâm nhé, gia đình cô dâu và chú rể đã chuẩn bị sẵn bãi đỗ xe thuận tiện 🌿
        </span>
      </li>
    </ul>
  </div>
</motion.div>

    </section>
  );
};

export default WeddingDetails;
