/*'use client';

import { useState, useEffect, useRef } from 'react';
import { reviews } from '../data';

export default function ReviewsHome() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [currentExpanded, setCurrentExpanded] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (activeIndex !== null) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }

    intervalRef.current = setInterval(() => {
      setCurrentExpanded((prev) => (prev + 1) % 3);
    }, 3000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [activeIndex]);

  const handleClick = (index) => {
    setActiveIndex(index);
    setCurrentExpanded(index);
  };

  return (
    <div className="flex flex-row gap-6 w-full">
      {reviews.map((review, i) => (
        <div
          key={i}
          onClick={() => handleClick(i)}
          className={`h-full transition-all duration-700 cursor-pointer flex relative ${
            currentExpanded === i ? 'w-6/12' : 'w-3/12'
          }`}
        >
            <p className={`text-[20px] font-bold absolute z-90 lg:w-[10rem] left-[30px] transition-all duration-700 leading-[24px] ${currentExpanded === i ? 'text-[#1b1b1b] bottom-[197px]' : 'text-white bottom-[30px]'}`}>{review.title}</p>
            <div className='relative z-0 left-0 bg-white w-full min-h-[550px] p-6 content-end'>
                <div className='lg:max-w-[15rem] relative'>
                    <p className='text-[#1b1b1b] text-[14px]' >{review.text}</p>
                </div>
            </div>
            <div className='absolute z-10 right-0 w-full lg:max-w-[315px] min-h-[550px] w-[50%]' style={{
                backgroundImage: `url(${review.img})`,
                backgroundSize: 'cover'
            }}>

            </div>

        </div>
      ))}
    </div>
  );
}

'use client';

import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { reviews } from '../data';

export default function ReviewsHome() {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={20}
      slidesPerView={1}
      loop
      autoplay={{
        delay: 8000,
        disableOnInteraction: false,
      }}
      onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
      className="w-full"
    >
      {reviews.map((review, index) => (
        <SwiperSlide key={index}>
          <SingleReview review={review} isActive={activeSlide === index} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

function SingleReview({ review, isActive }) {
  // expanded = true solo cuando el slide está activo; por defecto false
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    // Mantener collapsed mientras no es activo
    if (!isActive) {
      setExpanded(false);
      return;
    }

    // Cuando se vuelve activo, pasar a expanded = true
    // Si quieres un pequeño delay para la animación, cambia 0 por 50-100 ms
    const t = setTimeout(() => setExpanded(true), 0);

    return () => clearTimeout(t);
  }, [isActive]);

  return (
    <div className="flex flex-row gap-6 w-full">
      <div
        className={`h-full transition-all duration-700 cursor-pointer flex relative ${
          expanded ? 'w-6/12' : 'w-3/12'
        }`}
      >
        <p
          className={`text-[20px] font-bold absolute z-90 lg:w-[10rem] left-[30px] transition-all duration-700 leading-[24px] ${
            expanded ? 'text-[#1b1b1b] bottom-[197px]' : 'text-white bottom-[30px]'
          }`}
        >
          {review.title}
        </p>

        <div className="relative z-0 left-0 bg-white w-full min-h-[550px] p-6 content-end">
          <div className="lg:max-w-[15rem] relative">
            <p className="text-[#1b1b1b] text-[14px]">{review.text}</p>
          </div>
        </div>

        <div
          className="absolute z-10 right-0 w-full lg:max-w-[315px] min-h-[550px] w-[50%]"
          style={{
            backgroundImage: `url(${review.img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </div>
    </div>
  );
} */

  'use client';

import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { reviews } from '../data';

export default function ReviewsHome() {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={20}
      slidesPerView={1.5} // 👈 muestra un slide y medio (segundo slide parcialmente visible)
      centeredSlides={true} // 👈 el slide activo queda en el centro
      loop
      autoplay={{
        delay: 8000,
        disableOnInteraction: false,
      }}
      onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
      className="w-full"
    >
      {reviews.map((review, index) => (
        <SwiperSlide key={index}>
          <SingleReview review={review} isActive={activeSlide === index} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

function SingleReview({ review, isActive }) {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    if (!isActive) {
      setExpanded(false);
      return;
    }
    const t = setTimeout(() => setExpanded(true), 50);
    return () => clearTimeout(t);
  }, [isActive]);

  return (
    <div
      className={`flex flex-row gap-6 w-full transition-all duration-700 ${
        expanded ? 'opacity-100 scale-100' : 'opacity-70 scale-90'
      }`}
    >
      <div
        className={`h-full transition-all duration-700 flex relative rounded-2xl overflow-hidden ${
          expanded ? 'w-9/12' : 'w-6/12'
        }`}
      >
        <p
          className={`text-[20px] font-bold absolute z-90 lg:w-[10rem] left-[30px] transition-all duration-700 leading-[24px] ${
            expanded
              ? 'text-[#1b1b1b] bottom-[197px]'
              : 'text-white bottom-[30px]'
          }`}
        >
          {review.title}
        </p>

        <div className="relative z-0 left-0 bg-white w-full min-h-[550px] p-6 content-end">
          <div className="lg:max-w-[15rem] relative">
            <p className="text-[#1b1b1b] text-[14px]">{review.text}</p>
          </div>
        </div>

        <div
          className="absolute z-10 right-0 w-full lg:max-w-[315px] min-h-[550px] w-[50%]"
          style={{
            backgroundImage: `url(${review.img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </div>
    </div>
  );
}

