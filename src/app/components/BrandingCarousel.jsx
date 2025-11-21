// MyCarousel.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Importa los estilos básicos de Swiper
import 'swiper/css/navigation'; // Estilos para la navegación
import 'swiper/css/pagination'; // Estilos para la paginación
import 'swiper/css/free-mode'; // Estilos para free mode

// Importar los módulos que usaremos (Autoplay, Pagination, Navigation)
import { Autoplay, Pagination, Navigation, FreeMode } from 'swiper/modules';
import { LogosHome } from '../data';

const BrandingCarousel = ({reverse}) => {

  return (
    <Swiper
      spaceBetween={20}
      loop={true}
      freeMode={true}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      speed={8000}
      modules={[Autoplay, Pagination, Navigation, FreeMode]} // Habilita los módulos necesarios
      className="swiper-container linear-ease"

      // Configurar los breakpoints
      breakpoints={{
        // Pantallas pequeñas (sm)
        320: {
          slidesPerView: 3, // Muestra 2 slides
          spaceBetween: 15,
        },
        // Pantallas medianas (md)
        768: {
          slidesPerView: 4, // Muestra 3 slides
          spaceBetween: 25,
        },
        // Pantallas grandes (lg)
        1024: {
          slidesPerView: 6.5, // Muestra 6 slides
          spaceBetween: 25,
        },
        1500: {
          slidesPerView: 6.5, // Muestra 6 slides
          spaceBetween: 25,
        },
      }}
    >
      {LogosHome.map((slide, index) => (
        <SwiperSlide key={index} id={index} style={{width: 'auto !important'}} className='linear-ease lh:py-4 py-2 w-auto mx-auto justify-items-center self-center max-h-[108px] h-[80px]'>
          <img src={slide.img} alt={slide.alt} className='image-shadow' loading='lazy' />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default BrandingCarousel;
