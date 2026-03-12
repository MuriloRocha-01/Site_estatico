import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import type { Swiper as SwiperClass } from 'swiper/types';

import 'swiper/css';
import 'swiper/css/pagination';
import  'swiper/css/navigation';


import img from '../assets/image.jpg';
import img2 from '../assets/image02.jpg';
import img3 from '../assets/image03.jpg';
const MOCK_IMAGES = [
  { id: 0, url: img, title: 'imagem 1' },
  { id: 1, url: img2, title: 'imagem 2 ' },
  { id: 2, url:img3, title: 'imagem 3'}
];

const Carousel = () => {

  const swiperRef = useRef<SwiperClass | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">

      <Swiper
        className="w-full h-full"
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        modules={[Autoplay, Navigation, Pagination]}
        slidesPerView={1}
        speed={1000}
        loop={false}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
      >

        {MOCK_IMAGES.map((img) => (
          <SwiperSlide key={img.id}>
            <img
              src={img.url}
              alt={img.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
          </SwiperSlide>
        ))}

      </Swiper>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex gap-4">
        {MOCK_IMAGES.map((img, index) => (
          <button
            key={img.id}
            onClick={() => swiperRef.current?.slideTo(index)}
            className={`transition-all duration-300 h-3 rounded-full ${
              activeIndex === index
                ? "w-12 bg-red-600"
                : "w-3 bg-white/50 hover:bg-white"
            }`}
          />
        ))}
      </div>

    </div>
  );
};

export default Carousel;