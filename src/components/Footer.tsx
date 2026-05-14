import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h3 className="font-script text-4xl text-blush-400 mb-4">
              Kim Anh & Xuân Tụy
            </h3>
            <p className="text-gray-400 text-lg mb-2">
              21.11.2025
            </p>
            <p className="text-gray-400">
              Thôn 3B – Ea Wy – Đắk Lắk
            </p>
          </motion.div>

          {/* Divider */}
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-blush-400 to-transparent mx-auto mb-8" />

          {/* Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-6 mb-8 text-sm"
          >
            <a href="#home" className="text-gray-400 hover:text-blush-400 transition-colors">
              Trang chủ
            </a>
            <a href="#love-story" className="text-gray-400 hover:text-blush-400 transition-colors">
              Câu chuyện
            </a>
            <a href="#wedding-details" className="text-gray-400 hover:text-blush-400 transition-colors">
              Tiệc cưới
            </a>
            <a href="#gallery" className="text-gray-400 hover:text-blush-400 transition-colors">
              Bộ sưu tập
            </a>
            <a href="#wishes" className="text-gray-400 hover:text-blush-400 transition-colors">
              Lời chúc
            </a>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-gray-500 text-sm"
          >
            <p className="mb-2">
              © {currentYear} Kim Anh & Xuân Tụy. Bản quyền thuộc về gia đình chúng tôi.
            </p>
            <p className="flex items-center justify-center gap-2">
              <span>Made with</span>
              <span className="text-blush-400 animate-pulse">💖</span>
              <span>in Vietnam</span>
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
