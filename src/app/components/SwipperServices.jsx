'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow } from 'swiper/modules';

// Carga dinámica para evitar problemas de SSR en Next.js
//const Swiper = dynamic(() => import('swiper/react').then(m => m.Swiper), { ssr: false });
//const SwiperSlide = dynamic(() => import('swiper/react').then(m => m.SwiperSlide), { ssr: false });

// Estilos base de Swiper
import 'swiper/css';
import 'swiper/css/effect-coverflow';

// Ajusta la ruta según dónde tengas tu componente
import ServiceCard from './ServiceCard';


export default function ServicesSwiper({ items, className }) {
  return (
    <div className={className}>
      <Swiper
        modules={[EffectCoverflow, Autoplay]}
        slidesPerView={1}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        loop={true}
        effect="coverflow"
        coverflowEffect={{
          rotate: 60,
          depth: 250,
          modifier: -0.5,
          stretch: 0,
          slideShadows: true,
        }}
        autoplay={{
          delay: 1500,
          pauseOnMouseEnter: true,
          disableOnInteraction: true,
        }}
        breakpoints={{
          0: { slidesPerView: 1.1, spaceBetween: 16, centeredSlides: true },
          640: { slidesPerView: 2, spaceBetween: 24, centeredSlides: true },
          1024: { slidesPerView: 3, spaceBetween: 30, centeredSlides: true },
        }}
        watchOverflow={true}
        slideToClickedSlide={true}
      >
        {items.map((item, idx) => (
        <SwiperSlide key={idx} className="flex items-center justify-center perspective-[1200px]">
            <div className=" swiper-slide-content ">
            <ServiceCard data={item} />
            </div>
        </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
