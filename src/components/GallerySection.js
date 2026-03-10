import React, { useState } from 'react';
import { GALLERY_IMAGES } from '../data/portfolioData';
import { Camera, Award, Users, BookOpen, X, ChevronLeft, ChevronRight } from 'lucide-react';

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index) => {
    setSelectedImage(GALLERY_IMAGES[index]);
    setCurrentImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    let newIndex;
    if (direction === 'next') {
      newIndex = (currentImageIndex + 1) % GALLERY_IMAGES.length;
    } else {
      newIndex = currentImageIndex === 0 ? GALLERY_IMAGES.length - 1 : currentImageIndex - 1;
    }
    setCurrentImageIndex(newIndex);
    setSelectedImage(GALLERY_IMAGES[newIndex]);
  };

  const getIconForImage = (title) => {
    if (title.toLowerCase().includes('award') || title.toLowerCase().includes('achievement')) {
      return <Award className="text-white" size={24} />;
    } else if (title.toLowerCase().includes('social') || title.toLowerCase().includes('community')) {
      return <Users className="text-white" size={24} />;
    } else if (title.toLowerCase().includes('training') || title.toLowerCase().includes('workshop')) {
      return <BookOpen className="text-white" size={24} />;
    } else {
      return <Camera className="text-white" size={24} />;
    }
  };

  return (
    <section id="gallery" className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Achievements & <span className="text-gradient">Gallery</span>
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            A collection of professional achievements, social work initiatives, and memorable moments from my career journey.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_IMAGES.map((image, index) => (
            <div
              key={image.id}
              onClick={() => openLightbox(index)}
              className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="aspect-w-16 aspect-h-12 bg-gray-200">
                <img
                  src={`https://picsum.photos/seed/${image.title}/400/300.jpg`}
                  alt={image.alt}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <div className="flex items-center space-x-2 mb-2">
                    {getIconForImage(image.title)}
                    <h3 className="text-lg font-semibold">{image.title}</h3>
                  </div>
                  <p className="text-sm opacity-90">{image.alt}</p>
                </div>
              </div>
              
              {/* View indicator */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Camera className="text-gray-700" size={16} />
              </div>
            </div>
          ))}
        </div>

        {/* Gallery Categories */}
        <div className="mt-12 grid md:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="text-primary-600" size={24} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Awards</h3>
            <p className="text-gray-600 text-sm">Professional recognition and achievements</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="text-primary-600" size={24} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Social Work</h3>
            <p className="text-gray-600 text-sm">Community service and social initiatives</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="text-primary-600" size={24} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Training</h3>
            <p className="text-gray-600 text-sm">Educational programs and workshops</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Camera className="text-primary-600" size={24} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Events</h3>
            <p className="text-gray-600 text-sm">Conferences and professional events</p>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
          >
            <X size={32} />
          </button>
          
          <button
            onClick={() => navigateImage('prev')}
            className="absolute left-4 text-white hover:text-gray-300 transition-colors"
          >
            <ChevronLeft size={32} />
          </button>
          
          <button
            onClick={() => navigateImage('next')}
            className="absolute right-4 text-white hover:text-gray-300 transition-colors"
          >
            <ChevronRight size={32} />
          </button>
          
          <div className="max-w-4xl max-h-full">
            <img
              src={`https://picsum.photos/seed/${selectedImage.title}/800/600.jpg`}
              alt={selectedImage.alt}
              className="max-w-full max-h-full rounded-lg"
            />
            <div className="text-center mt-4">
              <h3 className="text-xl font-semibold text-white mb-2">{selectedImage.title}</h3>
              <p className="text-gray-300">{selectedImage.alt}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
