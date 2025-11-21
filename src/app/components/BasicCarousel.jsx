"use client";
import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  EffectFlip,
  Autoplay,
  EffectFade,
  EffectCube,
  EffectCoverflow,
  Controller,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-flip";
import "swiper/css/effect-fade";
import "swiper/css/effect-cube";
import "swiper/css/effect-coverflow";

function ImageSlide({ data }) {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <img
        src={data.src}
        alt={data.alt}
        className="w-full h-full object-cover"
      />
    </div>
  );
}

export default function BasicSlider({
  info = [],
  prevRef,
  nextRef,
  SlideComponent = ImageSlide,
  newDirection = "horizontal",
  effect = "slide",
  height = "250px",
  allowSwipe = true,
  setSwiperInstance = null,
}) {
  const effectModules = {
    flip: EffectFlip,
    fade: EffectFade,
    cube: EffectCube,
    coverflow: EffectCoverflow,
    slide: null,
  };

  const safeEffect =
    newDirection === "vertical" && !["slide", "fade"].includes(effect)
      ? "slide"
      : effect;

  const activeModules = [Navigation, Autoplay, Controller];
  if (safeEffect !== "slide" && effectModules[safeEffect]) {
    activeModules.push(effectModules[safeEffect]);
  }

  const swiperRef = useRef(null);

/*  useEffect(() => {
    if (!swiperRef.current) return;
    const swiper = swiperRef.current.swiper;

    if (setSwiperInstance) {
      setSwiperInstance(swiper);
    }

    if (swiper && prevRef?.current && nextRef?.current) {
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, [prevRef, nextRef, setSwiperInstance]);*/

  return (
    <Swiper
      ref={swiperRef}
      modules={activeModules}
      spaceBetween={0}
      slidesPerView={1}
      direction={newDirection}
      loop={true}
      effect={safeEffect}
      speed={800}
      autoplay={{
        delay: 3000,
        disableOnInteraction: true,
        pauseOnMouseEnter: true,
      }}
      allowTouchMove={allowSwipe}
      style={{ height }}
      onBeforeInit={(swiper) => {
        if (prevRef?.current && nextRef?.current) {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }
      }}
      onSwiper={(swiper) => {
        if (setSwiperInstance) setSwiperInstance(swiper);
      }}
    >
      {info.map((datos, index) => (
        <SwiperSlide key={index}>
          <SlideComponent data={datos} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
