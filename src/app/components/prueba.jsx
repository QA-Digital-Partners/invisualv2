'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';



export default function Carousel3D({slides}) {
  const [current, setCurrent] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const prev = () =>
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  const next = () =>
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

  const handleDragEnd = (event, info) => {
    if (info.offset.x < -100) next();
    else if (info.offset.x > 100) prev();
    setIsDragging(false);
  };

/*  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 3000);
    return () => clearInterval(interval);
  }, [current]); */

  const getSlideStyle = (index) => {
    const offset = (index - current + slides.length) % slides.length;

    const baseStyle =
      'absolute transition-all duration-500 ease-in-out w-[704px] h-[365px] text-white';

    switch (offset) {
      case 0:
        return `${baseStyle} z-40 scale-100 rotate-y-0 translate-x-0`;
      case 1:
        return `${baseStyle} z-30 scale-80 rotate-y-50 translate-x-[510px] grayscale`;
      case 2:
        return `${baseStyle} z-20 scale-40 rotate-y-120 translate-x-[335px] grayscale`;
      case 5:
        return `${baseStyle} z-30 scale-80 -rotate-y-50 -translate-x-[510px] grayscale`;
      case 4:
        return `${baseStyle} z-20 scale-40 -rotate-y-120 -translate-x-[335px] grayscale`;
      case 3:
        return `${baseStyle} z-10 scale-50 blur-sm translate-z-[-300px] grayscale`;
      default:
        return 'hidden';
    }
  };

    const getContentStyle = (index) => {
    const offset = (index - current + slides.length) % slides.length;

    const baseStyle =
      'relative z-10 lg:pt-36 lg:pb-6 lg:pe-30 lg:ps-12 lg:w-[704.5px] lg:h-[365.5px] bg-degradado transition-all duration-500 ease-in-out';

    switch (offset) {
      case 0:
        return `${baseStyle} z-40 scale-100 rotate-y-0 translate-x-0 opacity-100`;

      default:
        return 'opacity-0';
    }
  };

  return (
    <div className="relative h-[400px] flex items-center justify-center overflow-hidden">
      <button
        className="absolute left-4 z-50 text-white text-4xl"
        onClick={prev}
      >
        ‹
      </button>

      <div className="relative h-full flex items-center justify-center perspective-[1500px]">
        {/* Slides */}
        {slides.map((slide, index) => (
          <motion.div key={index} className={getSlideStyle(index)}>
            <Image
              src={slide.src}
              alt={slide.title}
              layout="fill"
              objectFit="cover"
              className="absolute"
            />
            <div className={getContentStyle(index)}>
              <h2 className="text-2xl font-bold">{slide.title}</h2>
              <p className="text-sm mt-2">{slide.description}</p>
              <a
                href="#"
                className="inline-block mt-4 font-bold underline"
                onClick={(e) => {
                  if (isDragging) e.preventDefault();
                }}
              >
                Learn More
              </a>
            </div>
          </motion.div>
        ))}

        {/* Gesture Handler */}
        <motion.div
          className="absolute z-50 w-full h-full top-0 left-0 cursor-grab active:cursor-grabbing"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={handleDragEnd}
        />
      </div>

      <button
        className="absolute right-4 z-50 text-white text-4xl"
        onClick={next}
      >
        ›
      </button>
    </div>
  );
}
