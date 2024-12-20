import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const images = [
  {
    url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1',
    title: 'Graduation Ceremony 2023',
    batch: '2023'
  },
  {
    url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f',
    title: 'Alumni Meet 2023',
    batch: '2020'
  },
  {
    url: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846',
    title: 'Campus Life',
    batch: '2022'
  },
  {
    url: 'https://images.unsplash.com/photo-1523580494658-7e93b28c8c4f',
    title: 'Research Symposium',
    batch: '2021'
  }
];

const GallerySlider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      breakpoints={{
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 }
      }}
      className="w-full"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <div className="relative group overflow-hidden rounded-lg">
            <img
              src={`${image.url}?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80`}
              alt={image.title}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <h3 className="text-white font-semibold">{image.title}</h3>
              <p className="text-gray-200 text-sm">Batch: {image.batch}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default GallerySlider;