import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import barrachata from '../../../assets/barra chata.jpg' 
import PerfisLaminados from '../../../assets/perfis laminados.jpg';
import PerfisUSimples from '../../../assets/perfil u simples.jpg';
import PerfisUEnrijecidos from '../../../assets/perfil u enrijecido.jpg';
import VigasdeAco from '../../../assets/vigas de aço.jpg';
import FerroRedondo from  '../../../assets/ferro redondo.jpg';
import PerfisDobradosSobMedida from '../../../assets/perfis dobrados sob medida.jpg';
import Cantoneiras from '../../../assets/cantoneiras.jpg';
import tubodeaco from '../../../assets/tubos de aço.jpg';

import type { Swiper as SwiperClass } from 'swiper/types';
import { useRef} from "react";

import 'swiper/css';
import 'swiper/css/pagination';
import  'swiper/css/navigation';

const MOCK_IMAGES = [
  { id: 0, url: Cantoneiras, title: 'Cantoneira', descricao:'Perfis amplamente utilizados em estruturas metálicas, reforços, suportes e diversos tipos de construções e montagens industriais.'},
  { id: 0, url: PerfisLaminados, title: 'Perfis Laminados', descricao:'Perfis produzidos por processo de laminação que garantem alta resistência e precisão dimensional para aplicações estruturais e industriais.'},
  { id: 1, url: barrachata, title: 'Barra chata ', descricao:'Material versátil utilizado em serralheria, estruturas metálicas, fabricação de peças e diversos projetos industriais.'},
  { id: 2, url: PerfisUSimples, title: 'Perfis U Simples', descricao:'Indicados para aplicações estruturais, fabricação de equipamentos, estruturas metálicas e reforços em projetos industriais.'},
  { id: 3, url: PerfisUEnrijecidos, title: 'Perfis U Enrijecidos', descricao:'Perfis com maior resistência estrutural, ideais para aplicações que exigem maior capacidade de carga e rigidez.'},
  { id: 4, url: VigasdeAco, title: 'Vigas de Aço', descricao:'Elementos estruturais essenciais para obras e construções que necessitam de alta resistência e estabilidade.'},
  { id: 5, url: FerroRedondo, title: 'Ferro Redondo', descricao:'Aplicado em fabricação de peças, estruturas metálicas, grades, portões e diversos projetos industriais e metalúrgicos.'},
  { id: 6, url: PerfisDobradosSobMedida, title: 'Perfis Dobrados Sob Medida', descricao:'A GranPerfil também desenvolve perfis dobrados de acordo com o projeto e necessidade de cada cliente. Trabalhamos com fabricação personalizada, permitindo produzir perfis específicos conforme desenho técnico ou especificações do projeto.'},
  { id: 6, url: tubodeaco, title: 'Tubos de aço', descricao:'Utilizados em estruturas, construção civil, serralheria e aplicações industriais que exigem resistência e durabilidade.'}

];
export default function Footer() {

 const swiperRef = useRef<SwiperClass | null>(null);
  

  return (
    <div className="relative ">

      
      <button
        onClick={() => swiperRef.current?.slidePrev()}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-red text-white p-2 rounded-full w-12"
      >◀
      </button>

      
      <button
        onClick={() => swiperRef.current?.slideNext()}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-red text-white p-2 rounded-full w-12"
      >▶
      </button>

      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        modules={[Navigation, Pagination]}
        slidesPerView={4}
        spaceBetween={0}
        loop={true}
      >
        
        {MOCK_IMAGES.map((img) => (
          <SwiperSlide key={img.id}>
            <div className='mx-auto cursor-pointer rounded-md shadow-xl p-3 w-52 flex flex-col items-center justify-center hover:scale-105 transition duration-300'>
            <img
              src={img.url}
              alt={img.title}
              className=" w-full h-32 object-cover rounded-xl shadow-xl "
            />
            <span className='mt-2 text-sm font-semibold'>
                {img.title}
            </span>
            <span className='mt-2 text-sm font-sl'>
                {img.descricao}
            </span>
            </div>
            
          </SwiperSlide>
        ))}
        
      </Swiper>

    </div>
  );
}


