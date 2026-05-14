import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
}

const galleryImages: GalleryImage[] = [
  { id: 1, src: '/gallery/1.webp', alt: 'Kim Anh & Xuân Tụy - Ảnh 1' },
  { id: 2, src: '/gallery/2.webp', alt: 'Kim Anh & Xuân Tụy - Ảnh 2' },
  { id: 3, src: '/gallery/3.jpg', alt: 'Kim Anh & Xuân Tụy - Ảnh 3' },
  { id: 4, src: '/gallery/4.jpg', alt: 'Kim Anh & Xuân Tụy - Ảnh 4' },
  // Thêm ảnh 5 và 6 khi đã có file
  { id: 5, src: '/gallery/5.jpg', alt: 'Kim Anh & Xuân Tụy - Ảnh 5' },
  { id: 6, src: '/gallery/6.jpg', alt: 'Kim Anh & Xuân Tụy - Ảnh 6' },
];

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (!selectedImage) return;
    const currentIndex = galleryImages.findIndex((img) => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % galleryImages.length;
    setSelectedImage(galleryImages[nextIndex]);
  };

  const prevImage = () => {
    if (!selectedImage) return;
    const currentIndex = galleryImages.findIndex((img) => img.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setSelectedImage(galleryImages[prevIndex]);
  };

  return (
    <section id="gallery" className="section-container bg-white">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="heading-secondary">Bộ sưu tập ảnh</h2>
        <p className="text-elegant max-w-2xl mx-auto">
          Những khoảnh khắc đẹp nhất của tụi mình, lưu giữ mãi trong ký ức. Mong rằng bạn cũng sẽ có mặt, để cùng tụi mình viết nên ký ức đó.
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-blush-400 to-champagne-400 mx-auto mt-6" />
      </motion.div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryImages.map((image, index) => (
          <motion.div
            key={image.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group cursor-pointer"
            onClick={() => openLightbox(image)}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="aspect-square bg-gradient-to-br from-blush-100 to-champagne-100 rounded-xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-shadow duration-300">
              <div className="w-full h-full relative">
                {/* Real Image */}
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to placeholder if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const placeholder = target.nextElementSibling as HTMLElement;
                    if (placeholder) placeholder.style.display = 'flex';
                  }}
                />
                {/* Fallback Placeholder (hidden by default) */}
                <div className="absolute inset-0 items-center justify-center text-center hidden">
                  <div className="text-6xl mb-2">
                    {['📸', '💐', '💑', '🎉', '💒', '🌸'][index]}
                  </div>
                  <p className="text-gray-400 text-sm">Ảnh {image.id}</p>
                </div>
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-4xl">🔍</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white text-4xl hover:text-blush-400 transition-colors z-50"
            aria-label="Đóng"
          >
            ✕
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-4 text-white text-4xl hover:text-blush-400 transition-colors z-50"
            aria-label="Ảnh trước"
          >
            ‹
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 text-white text-4xl hover:text-blush-400 transition-colors z-50"
            aria-label="Ảnh sau"
          >
            ›
          </button>

          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="max-w-4xl max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl"
            />
            <div className="text-center mt-4">
              <p className="text-white text-lg font-medium">{selectedImage.alt}</p>
              <p className="text-blush-300 text-sm mt-1">
                Ảnh {selectedImage.id} / {galleryImages.length}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Gallery;
