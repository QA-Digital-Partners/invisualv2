'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const slides = [
  {
    src: '/B.webp',
    title: 'Commercial Wraps',
    description:
      'Turn your vehicles into moving billboards with bold, high-impact commercial wraps...',
  },
  {
    src: '/C.webp',
    title: 'Trailer Wraps',
    description:
      'Wraps perfect for trailers on the road, showing your brand loud and clear...',
  },
  {
    src: '/C.webp',
    title: 'Van Wraps',
    description:
      'Ideal for delivery vans and service vehicles looking to stand out in traffic...',
  },
  {
    src: '/C.webp',
    title: 'Box Truck Wraps',
    description:
      'Large format box truck wraps make your fleet unforgettable...',
  },
  {
    src: '/B.webp',
    title: 'Food Truck Wraps',
    description:
      'Make your food truck pop with a flavorful design that draws crowds...',
  },
  {
    src: '/C.webp',
    title: 'Fleet Branding',
    description:
      'Consistent branding across all your vehicles for a professional image...',
  },
];

export default function Carousel3D({slides}) {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  const next = () =>
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

    const handleDragEnd = (event, info) => {
    if (info.offset.x < -100) next();
    else if (info.offset.x > 100) prev();
    };

  const getSlideStyle = (index) => {
    const offset = (index - current + slides.length) % slides.length;

    const baseStyle =
      'absolute transition-all duration-500 ease-in-out w-[500px] h-[350px] bg-black text-white p-6 rounded-xl shadow-xl';

    // Define position and style per offset
    switch (offset) {
      case 0:
        return `${baseStyle} z-40 scale-100 rotate-y-0 translate-x-0`;
      case 1:
        return `${baseStyle} z-30 scale-80 rotate-y-35 translate-x-[420px] opacity-80`;
      case 2:
        return `${baseStyle} z-20 scale-60 rotate-y-120 translate-x-[335px] opacity-60`;
      case 5:
        return `${baseStyle} z-30 scale-80 -rotate-y-35 -translate-x-[420px] opacity-80`;
      case 4:
        return `${baseStyle} z-20 scale-60 -rotate-y-120 -translate-x-[335px] opacity-60`;
      case 3:
        return `${baseStyle} z-10 scale-50 blur-sm opacity-30 translate-z-[-300px]`;
      default:
        return 'hidden';
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

      <div className="relative w-[90%] h-full flex items-center justify-center perspective-[1200px]">
        {/* Slides */}
        {slides.map((slide, index) => (
          <motion.div key={index} className={getSlideStyle(index)}>
            <Image
              src={slide.src}
              alt={slide.title}
              layout="fill"
              objectFit="cover"
              className="absolute inset-0 rounded-xl opacity-60"
            />
            <div className="relative z-10 mt-20 pointer-events-auto">
              <h2 className="text-2xl font-bold">{slide.title}</h2>
              <p className="text-sm mt-2">{slide.description}</p>
              <a
                href="#"
                className="inline-block mt-4 font-bold underline"
                onClick={(e) => {
                  if (isDragging) e.preventDefault(); // evita click durante drag
                }}
              >
                Learn More
              </a>
            </div>
          </motion.div>
        ))}

        {/* Gesture Handler */}
        <motion.div
          className="absolute z-50 w-full h-full top-0 left-0 cursor-grab active:cursor-grabbing pointer-events-none"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onPointerDown={() => setIsDragging(false)}
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
