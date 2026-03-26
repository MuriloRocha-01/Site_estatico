import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

import { ChevronRight } from 'lucide-react';
import { ChevronLeft } from 'lucide-react';

import type { Swiper as SwiperClass } from 'swiper/types';
import { useRef} from "react";
// @ts-ignore
import 'swiper/css';
// @ts-ignore
import 'swiper/css/pagination';
// @ts-ignore
import 'swiper/css/navigation';

import {useMenu} from '../../../components/Menu/hooks/useMenu'

import { MOCK_PRODUCTS } from '../../../shared/products_mock';

export default function CardProdutos() {

 const swiperRef = useRef<SwiperClass | null>(null);
  
 const {goToProdutoEspecifico} = useMenu();

  return (
    <div className="relative md:px-0 xl:px-[5%] mx-4 md:mx-20 pb-20 md:pb-0">

      
      <button
      onClick={() => swiperRef.current?.slidePrev()}
      className="absolute left-20 md:left-6 xl:left-[10%] md:bottom-auto bottom-5 md:top-1/2 md:-translate-y-1/2 
              text-white p-3 md:p-2 rounded-full md:w-10 w-11 flex items-center justify-center hover:scale-105 transition-all duration-300 ease-in-out bg-red"
      >
        <ChevronLeft size={32}/> 
      </button>

      <button
        onClick={() => swiperRef.current?.slideNext()}
        className="absolute right-20 md:right-6 xl:right-[10%] md:bottom-auto bottom-5 md:top-1/2 md:-translate-y-1/2 text-white p-3 md:p-2 rounded-full md:w-10 w-11 0 flex items-center justify-center hover:scale-105 transition-all duration-300 ease-in-out bg-red"
      >
      <ChevronRight size={32}/>
      </button>

      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        spaceBetween={10}
        loop={false}
        className={`h-full w-[90%] md:w-[80%] !p-4 !pb-6 md:!pb-12 ${window.innerWidth < 768 
        ? '!overflow-visible' : 'overflow-hidden'}`}
        breakpoints={{
        550: { slidesPerView: 2, spaceBetween: 30 },
        1140: { slidesPerView: 3, spaceBetween: 40 },
      }}
      >
        
        {MOCK_PRODUCTS.map((img) => (
          <SwiperSlide key={img.id} className='px-3'>
            <div className='min-h-[310px] shadow-xl rounded-xl p-3 cursor-pointer flex flex-col items-center hover:scale-105 transition duration-300'
            onClick={()=> goToProdutoEspecifico(img.id)}
            >
            <img
              src={img.url}
              alt={img.title}
              className="w-full max-2-[250px] shadow-xl h-32 object-cover rounded-xl"
            />
            <span className='mt-2 text-sm font-semibold'>
                {img.title}
            </span>
            <span className='mt-2 text-sm font-sl '>
                {img.descricao}
            </span>
            </div>
            
          </SwiperSlide>
        ))}
        
      </Swiper>

    </div>
  );
}


