import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface Milestone {
  id: number;
  title: string;
  description: string;
  date: string;
  image?: string;
}

const milestones: Milestone[] = [
  {
    id: 1,
    title: 'Lần đầu gặp nhau',
    description: 'Một buổi chiều mùa xuân, hai trái tim đã tìm thấy nhau trong ánh nắng dịu dàng. Đó là khởi đầu của một câu chuyện tình yêu đẹp như mơ.',
    date: 'Mùa Xuân 2020',
    image: '/love-story/1.jpg',
  },
  {
    id: 2,
    title: 'Buổi hẹn hò đầu tiên',
    description: 'Cà phê nhỏ bên góc phố cũ, những câu chuyện chưa bao giờ có hồi kết. Chúng tôi đã nói chuyện suốt cả ngày mà không biết chán.',
    date: 'Tháng 5, 2020',
    image: '/love-story/2.jpg',
  },
  {
    id: 3,
    title: 'Lời cầu hôn lãng mạn',
    description: 'Dưới bầu trời đầy sao, anh đã quỳ gối và hỏi em một câu hỏi quan trọng nhất đời anh. Và em đã gật đầu với đôi mắt ngấn lệ hạnh phúc.',
    date: 'Tháng 1, 2025',
    image: '/love-story/3.jpg',
  },
  {
    id: 4,
    title: 'Cùng nhau đến mãi mãi',
    description: 'Hôm nay, chúng tôi sẽ bước vào giai đoạn mới của cuộc đời. Cùng nhau xây dựng tổ ấm, cùng nhau vượt qua mọi khó khăn, và yêu thương nhau mỗi ngày.',
    date: '21.11.2025',
    image: '/love-story/4.jpg',
  },
];

const TimelineItem = ({ milestone, index }: { milestone: Milestone; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -50 : 50 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className={`flex flex-col md:flex-row gap-8 mb-16 ${isEven ? 'md:flex-row-reverse' : ''}`}
    >
      {/* Content */}
      <div className={`flex-1 ${isEven ? 'md:text-right' : 'md:text-left'}`}>
        <motion.div
          className="card"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <span className="inline-block px-4 py-1 bg-blush-100 text-blush-600 rounded-full text-sm font-medium mb-3">
            {milestone.date}
          </span>
          <h3 className="text-2xl md:text-3xl font-serif font-semibold text-gray-800 mb-3">
            {milestone.title}
          </h3>
          <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
        </motion.div>
      </div>

      {/* Timeline Dot */}
      <div className="flex flex-col items-center">
        <motion.div
          className="w-6 h-6 bg-blush-500 rounded-full shadow-lg z-10"
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="w-full h-full rounded-full bg-blush-500 animate-ping opacity-75" />
        </motion.div>
        {index < milestones.length - 1 && (
          <div className="w-1 flex-1 bg-gradient-to-b from-blush-300 to-transparent mt-2" />
        )}
      </div>

      {/* Image Placeholder */}
      <div className="flex-1">
        <motion.div
          className="aspect-square max-w-sm mx-auto bg-gradient-to-br from-blush-100 to-champagne-100 rounded-2xl shadow-lg overflow-hidden"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {milestone.image ? (
            <img
              src={milestone.image}
              alt={milestone.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                // Fallback to emoji if image fails to load
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const placeholder = target.nextElementSibling as HTMLElement;
                if (placeholder) placeholder.style.display = 'flex';
              }}
            />
          ) : null}
          <div className={`w-full h-full flex items-center justify-center ${milestone.image ? 'hidden' : ''}`}>
            <div className="text-center p-8">
              <div className="text-6xl mb-4">
                {['💑', '☕', '💍', '💒'][index]}
              </div>
              <p className="text-gray-400 text-sm">Hình ảnh kỷ niệm</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const LoveStoryTimeline = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <section id="love-story" className="section-container bg-white">
      <motion.div
        ref={headerRef}
        initial={{ opacity: 0, y: 30 }}
        animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="heading-secondary">Câu chuyện tình yêu</h2>
        <p className="text-elegant max-w-2xl mx-auto">
          Mỗi tình yêu đều có một câu chuyện riêng. Đây là câu chuyện của hai tụi mình, một hành trình
          từ hai người xa lạ trở thành tri kỷ và bạn đời.
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-blush-400 to-champagne-400 mx-auto mt-6" />
      </motion.div>

      <div className="max-w-6xl mx-auto">
        {milestones.map((milestone, index) => (
          <TimelineItem key={milestone.id} milestone={milestone} index={index} />
        ))}
      </div>
    </section>
  );
};

export default LoveStoryTimeline;
