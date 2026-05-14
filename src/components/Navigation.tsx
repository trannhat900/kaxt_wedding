import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ['home', 'love-story', 'wedding-details', 'countdown', 'invitation', 'gallery', 'wishes', 'thank-you'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Trang chủ' },
    { id: 'love-story', label: 'Câu chuyện' },
    { id: 'wedding-details', label: 'Tiệc cưới' },
    { id: 'countdown', label: 'Đếm ngược' },
    { id: 'invitation', label: 'Thư mời' },
    { id: 'gallery', label: 'Bộ sưu tập' },
    { id: 'wishes', label: 'Lời chúc' },
    { id: 'thank-you', label: 'Cảm ơn' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-2 font-script text-xl md:text-2xl text-blush-600 cursor-pointer"
            onClick={() => scrollToSection('home')}
            whileHover={{ scale: 1.05 }}
          >
            <span>💕</span>
            <span>Kim Anh & Xuân Tụy</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? 'bg-blush-500 text-white'
                    : 'text-gray-700 hover:bg-blush-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <MobileMenu navItems={navItems} activeSection={activeSection} scrollToSection={scrollToSection} />
        </div>
      </div>
    </motion.nav>
  );
};

const MobileMenu = ({
  navItems,
  activeSection,
  scrollToSection,
}: {
  navItems: Array<{ id: string; label: string }>;
  activeSection: string;
  scrollToSection: (id: string) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-gray-700"
        aria-label="Menu"
      >
        <div className="w-6 h-0.5 bg-current mb-1.5" />
        <div className="w-6 h-0.5 bg-current mb-1.5" />
        <div className="w-6 h-0.5 bg-current" />
      </button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-full left-0 right-0 bg-white shadow-lg"
        >
          <div className="container mx-auto px-4 py-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  scrollToSection(item.id);
                  setIsOpen(false);
                }}
                className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? 'bg-blush-500 text-white'
                    : 'text-gray-700 hover:bg-blush-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Navigation;
