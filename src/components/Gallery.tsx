import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<any>(null);

  const images = [
    {
      url: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Conférence principale 2024'
    },
    {
      url: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Workshop développement'
    },
    {
      url: 'https://images.pexels.com/photos/1181715/pexels-photo-1181715.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Session networking'
    },
    {
      url: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Panel d\'experts'
    },
    {
      url: 'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Démonstration technologique'
    },
    {
      url: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Espace d\'exposition'
    }
  ];

  useEffect(() => {
    if (selectedImage) return; // Pause automatic carousel when modal is open
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length, selectedImage]);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const openModal = (image: any, index: number) => {
    setSelectedImage({ ...image, index });
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const nextModalImage = () => {
    if (selectedImage) {
      const newIndex = (selectedImage.index + 1) % images.length;
      setSelectedImage({ ...images[newIndex], index: newIndex });
    }
  };

  const prevModalImage = () => {
    if (selectedImage) {
      const newIndex = (selectedImage.index - 1 + images.length) % images.length;
      setSelectedImage({ ...images[newIndex], index: newIndex });
    }
  };

  return (
    <section id="galerie" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-5xl sm:text-7xl font-black text-gray-900 mb-6 uppercase tracking-tight relative inline-block">
            Galerie
            <svg className="absolute -bottom-4 left-0 w-full h-8 text-blue-500 -z-10" viewBox="0 0 100 20" preserveAspectRatio="none" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round">
              <path d="M 0 10 L 100 10" />
            </svg>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
            Ce que les photos ne capturent pas vraiment — mais on essaie quand même. Retour sur les éditions précédentes de TechFest.
          </p>
        </div>

        {/* Main Carousel */}
        <div className="relative mb-12">
          <div className="overflow-hidden rounded-none border-4 border-gray-900 shadow-[12px_12px_0_0_#111827]">
            <div className="relative aspect-[16/9] bg-gray-900">
              <img
                src={images[currentIndex].url}
                alt={images[currentIndex].title}
                className="w-full h-full object-cover transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent">
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-white text-2xl font-bold">
                    {images[currentIndex].title}
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-green-400 rounded-none border-4 border-gray-900 p-3 shadow-[6px_6px_0_0_#111827] transition-all duration-200 hover:-translate-y-1 hover:translate-x-[-2px] hover:shadow-[8px_8px_0_0_#111827]"
          >
            <ChevronLeft className="w-6 h-6 text-gray-900 stroke-[3]" />
          </button>
          
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-green-400 rounded-none border-4 border-gray-900 p-3 shadow-[6px_6px_0_0_#111827] transition-all duration-200 hover:-translate-y-1 hover:translate-x-[2px] hover:shadow-[8px_8px_0_0_#111827]"
          >
            <ChevronRight className="w-6 h-6 text-gray-900 stroke-[3]" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-4 transition-all duration-200 rounded-none border-2 border-gray-900 ${
                  index === currentIndex
                    ? 'bg-blue-500 w-12 shadow-[2px_2px_0_0_#111827]'
                    : 'bg-white w-4'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Thumbnail Marquee */}
        <div className="relative w-full overflow-hidden mt-16 group/marquee mask-image-fade">
          <div className="flex w-max animate-marquee hover:[animation-play-state:paused] gap-4">
            {[...images, ...images, ...images].map((image, index) => (
              <div
                key={index}
                className="relative group cursor-pointer overflow-hidden rounded-none border-4 border-gray-900 shadow-[6px_6px_0_0_#111827] hover:shadow-none hover:translate-y-1 hover:translate-x-1 transition-all duration-300 w-48 md:w-64 shrink-0"
                onClick={() => openModal(image, index % images.length)}
              >
                <div className="aspect-[4/3]">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                  <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-medium text-center px-4">
                    {image.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedImage && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 p-2 rounded-none border-2 border-white bg-transparent hover:bg-white hover:text-black transition-colors duration-200 z-10 text-white"
            >
              <X className="w-6 h-6" />
            </button>
            
            <button
              onClick={prevModalImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-none border-2 border-white bg-transparent hover:bg-white hover:text-black transition-colors duration-200 z-10 text-white"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={nextModalImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-none border-2 border-white bg-transparent hover:bg-white hover:text-black transition-colors duration-200 z-10 text-white"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div className="aspect-[4/3] bg-gray-900 border-4 border-white rounded-none overflow-hidden">
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="w-full h-full object-contain"
              />
            </div>
            
            <div className="text-center mt-4">
              <h3 className="text-white text-xl font-bold">{selectedImage.title}</h3>
              <p className="text-gray-300 mt-2">
                {selectedImage.index + 1} / {images.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;