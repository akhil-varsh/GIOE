import React from 'react';
import GallerySlider from '../components/gallery/GallerySlider';

const Gallery = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Alumni Gallery</h1>
        
        {/* Featured Gallery */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Featured Moments</h2>
          <GallerySlider />
        </section>

        {/* Photo Grid */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Photo Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="relative group overflow-hidden rounded-lg">
                <img
                  src={`https://images.unsplash.com/photo-${item % 2 === 0 ? '1523050854058-8df90110c9f1' : '1523580494658-7e93b28c8c4f'}?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80`}
                  alt={`Gallery ${item}`}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-lg font-semibold">View Image</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Gallery;