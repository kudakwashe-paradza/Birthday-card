import { useState, useEffect } from 'react';
import { galleryPhotos } from '../Contents';

export default function GallerySection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Preload all gallery images in memory so transitions never stall or lag
  useEffect(() => {
    galleryPhotos.forEach((photo) => {
      const img = new Image();
      img.src = photo.src;
    });
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? galleryPhotos.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === galleryPhotos.length - 1 ? 0 : prev + 1));
  };

  if (!galleryPhotos.length) return null;

  return (
    <section id="gallery" className="py-20 px-4 text-white max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-extrabold tracking-tight flex items-center justify-center gap-2">
          <span>🖼️</span> 
        </h2>
      </div>

      <div className="relative bg-gray-900/60 backdrop-blur-md rounded-2xl p-4 border border-gray-800 shadow-2xl">
        {/* Main Image Viewport */}
        <div className="relative h-[480px] md:h-[560px] w-full rounded-xl overflow-hidden bg-black/50 flex items-center justify-center">
          
          {/* Render all photos stacked and toggle opacity so they stay loaded instantly */}
          {galleryPhotos.map((photo, index) => {
            const isActive = index === currentIndex;
            return (
              <div
                key={photo.src + index}
                className={`absolute inset-0 w-full h-full flex items-center justify-center transition-opacity duration-300 ease-in-out ${
                  isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                }`}
              >
                {/* Blurred Background Image for depth */}
                <img
                  src={photo.src}
                  alt=""
                  loading="eager"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover blur-xl opacity-30 scale-110 pointer-events-none"
                />

                {/* Uncropped Main Photo */}
                <img
                  src={photo.src}
                  alt={photo.caption}
                  loading="eager"
                  decoding="async"
                  className="relative z-10 max-h-full max-w-full object-contain rounded-lg shadow-2xl"
                />
              </div>
            );
          })}

          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-3 z-20 p-3 rounded-full bg-black/60 text-white hover:bg-black/90 transition-all cursor-pointer backdrop-blur-sm border border-white/10"
            aria-label="Previous photo"
          >
            ‹
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-3 z-20 p-3 rounded-full bg-black/60 text-white hover:bg-black/90 transition-all cursor-pointer backdrop-blur-sm border border-white/10"
            aria-label="Next photo"
          >
            ›
          </button>

          {/* Caption Overlay */}
          <div className="absolute bottom-4 inset-x-0 z-20 text-center px-4">
            <span className="inline-block bg-black/75 backdrop-blur-md text-white text-xs md:text-sm font-medium px-4 py-1.5 rounded-full border border-white/10 shadow-lg">
              {galleryPhotos[currentIndex]?.caption}
            </span>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center gap-2 mt-4 flex-wrap">
          {galleryPhotos.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                index === currentIndex ? 'w-6 bg-yellow-400' : 'w-2 bg-gray-600 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}