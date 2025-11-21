// components/BannerServices.js
"use client";
import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import CanvasEraser from "./CanvasEraser";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function BannerServices({ title, subtitle, imageUrl }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [activeOption, setActiveOption] = useState("image2");
  const swiperRef = useRef(null);

  const slidesData = [
    {
      id: 1,
      imagebase:
        "/images/vehicle-wrapping-services/banner/full-wrap-svu-base.webp",
      image1: "/images/vehicle-wrapping-services/banner/full-wrap-suv-1.webp",
      image2: "/images/vehicle-wrapping-services/banner/full-wrap-suv-2.webp",
      image3: "/images/vehicle-wrapping-services/banner/full-wrap-suv-3.webp",
      imageSelectOption1:
        "/images/vehicle-wrapping-services/banner/full-wrap-option-suv-1.webp",
      imageSelectOption2:
        "/images/vehicle-wrapping-services/banner/full-wrap-option-suv-2.webp",
      imageSelectOption3:
        "/images/vehicle-wrapping-services/banner/full-wrap-option-suv-3.webp",
      dotImage:
        "/images/vehicle-wrapping-services/banner/full-wrap-option-suv-3.webp",
      dot_width: "177px",
      dot_height: "93px",
      title: "Sedan",
      name_wrapper1: "Spot graphics",
      name_wrapper2: "Full Wrap",
      name_wrapper3: "Full Wrap",
    },
    {
      id: 2,
      imagebase:
        "/images/vehicle-wrapping-services/banner/full-wrap-van-base.webp",
      image1: "/images/vehicle-wrapping-services/banner/full-wrap-van-1.webp",
      image2: "/images/vehicle-wrapping-services/banner/full-wrap-van-2.webp",
      image3: "/images/vehicle-wrapping-services/banner/full-wrap-van-3.webp",
      imageSelectOption1:
        "/images/vehicle-wrapping-services/banner/full-wrap-option-van-1.webp",
      imageSelectOption2:
        "/images/vehicle-wrapping-services/banner/full-wrap-option-van-2.webp",
      imageSelectOption3:
        "/images/vehicle-wrapping-services/banner/full-wrap-option-van-3.webp",
      dotImage:
        "/images/vehicle-wrapping-services/banner/full-wrap-dot-pick-up-truck.webp",
      dot_width: "168.89px",
      dot_height: "87px",
      title: "Pick-Up Trucks",
      name_wrapper1: "Spot graphics",
      name_wrapper2: "Full Wrap",
      name_wrapper3: "Full Wrap",
    },
    {
      id: 3,
      imagebase:
        "/images/vehicle-wrapping-services/banner/full-wrap-van-base.webp",
      image1: "/images/vehicle-wrapping-services/banner/full-wrap-van-1.webp",
      image2: "/images/vehicle-wrapping-services/banner/full-wrap-van-2.webp",
      image3: "/images/vehicle-wrapping-services/banner/full-wrap-van-3.webp",
      imageSelectOption1:
        "/images/vehicle-wrapping-services/banner/full-wrap-option-van-1.webp",
      imageSelectOption2:
        "/images/vehicle-wrapping-services/banner/full-wrap-option-van-2.webp",
      imageSelectOption3:
        "/images/vehicle-wrapping-services/banner/full-wrap-option-van-3.webp",
      dotImage:
        "/images/vehicle-wrapping-services/banner/full-wrap-dot-van.webp",
      dot_width: "152.663px",
      dot_height: "96.885px",
      title: "VAN",
      name_wrapper1: "Spot graphics",
      name_wrapper2: "Full Wrap",
      name_wrapper3: "Full Wrap",
    },
    {
      id: 4,
      imagebase:
        "/images/vehicle-wrapping-services/banner/full-wrap-van-base.webp",
      image1: "/images/vehicle-wrapping-services/banner/full-wrap-van-1.webp",
      image2: "/images/vehicle-wrapping-services/banner/full-wrap-van-2.webp",
      image3: "/images/vehicle-wrapping-services/banner/full-wrap-van-3.webp",
      imageSelectOption1:
        "/images/vehicle-wrapping-services/banner/full-wrap-option-van-1.webp",
      imageSelectOption2:
        "/images/vehicle-wrapping-services/banner/full-wrap-option-van-2.webp",
      imageSelectOption3:
        "/images/vehicle-wrapping-services/banner/full-wrap-option-van-3.webp",
      dotImage:
        "/images/vehicle-wrapping-services/banner/full-wrap-dot-box-trucks.webp",
      dot_width: "146px",
      dot_height: "108.986px",
      title: "Box Trucks",
      name_wrapper1: "Spot graphics",
      name_wrapper2: "Full Wrap",
      name_wrapper3: "Full Wrap",
    },
    {
      id: 5,
      imagebase:
        "/images/vehicle-wrapping-services/banner/full-wrap-van-base.webp",
      image1: "/images/vehicle-wrapping-services/banner/full-wrap-van-1.webp",
      image2: "/images/vehicle-wrapping-services/banner/full-wrap-van-2.webp",
      image3: "/images/vehicle-wrapping-services/banner/full-wrap-van-3.webp",
      imageSelectOption1:
        "/images/vehicle-wrapping-services/banner/full-wrap-option-van-1.webp",
      imageSelectOption2:
        "/images/vehicle-wrapping-services/banner/full-wrap-option-van-2.webp",
      imageSelectOption3:
        "/images/vehicle-wrapping-services/banner/full-wrap-option-van-3.webp",
      dotImage:
        "/images/vehicle-wrapping-services/banner/full-wrap-dot-food-truc.webp",
      dot_width: "173px",
      dot_height: "93.794px",
      title: "Food Trucks",
      name_wrapper1: "Spot graphics",
      name_wrapper2: "Full Wrap",
      name_wrapper3: "Full Wrap",
    },
    
  ];

  const [selectedImage, setSelectedImage] = useState(null);
  const [resetId, setResetId] = useState(0);
  const [isInitialized, setIsInitialized] = useState(false);
  const [imagesPreloaded, setImagesPreloaded] = useState(false);

  // Ocultar botones de navegación por defecto de forma específica
  useEffect(() => {
    if (!swiperRef.current) return;

    const hideDefaultButtons = () => {
      const swiperContainer = swiperRef.current;
      if (!swiperContainer) return;

      // Buscar solo dentro de este componente específico
      const prevBtn = swiperContainer.querySelector('.swiper-button-prev');
      const nextBtn = swiperContainer.querySelector('.swiper-button-next');
      
      if (prevBtn) {
        prevBtn.style.display = 'none';
      }
      if (nextBtn) {
        nextBtn.style.display = 'none';
      }
    };

    // Ejecutar inmediatamente y después de un pequeño delay por si Swiper los crea después
    hideDefaultButtons();
    const timer = setTimeout(hideDefaultButtons, 100);

    return () => clearTimeout(timer);
  }, []);

  // Funciones para los botones custom
  const handlePrev = () => {
    if (isLoading || !swiperRef.current?.swiper) return;
    
    const swiper = swiperRef.current.swiper;
    swiper.slidePrev();
    
    // Reset a image2 cuando cambia de slide
    const newIndex = swiper.activeIndex;
    const slide = slidesData[newIndex];
    if (slide && slide.image2) {
      setSelectedImage(slide.image2);
      setActiveOption("image2");
    }
  };

  const handleNext = () => {
    if (isLoading || !swiperRef.current?.swiper) return;
    
    const swiper = swiperRef.current.swiper;
    swiper.slideNext();
    
    // Reset a image2 cuando cambia de slide
    const newIndex = swiper.activeIndex;
    const slide = slidesData[newIndex];
    if (slide && slide.image2) {
      setSelectedImage(slide.image2);
      setActiveOption("image2");
    }
  };

  useEffect(() => {
    const preloadImages = async () => {
      const imageUrls = [];

      slidesData.forEach((slide) => {
        if (slide.imagebase) imageUrls.push(slide.imagebase);
        if (slide.image1) imageUrls.push(slide.image1);
        if (slide.image2) imageUrls.push(slide.image2);
        if (slide.image3) imageUrls.push(slide.image3);
        if (slide.imageSelectOption1) imageUrls.push(slide.imageSelectOption1);
        if (slide.imageSelectOption2) imageUrls.push(slide.imageSelectOption2);
        if (slide.imageSelectOption3) imageUrls.push(slide.imageSelectOption3);
        if (slide.dotImage) imageUrls.push(slide.dotImage);
      });

      try {
        await Promise.all(
          imageUrls.map((url) => {
            return new Promise((resolve, reject) => {
              const img = new Image();
              img.src = url;
              img.onload = resolve;
              img.onerror = resolve;
            });
          })
        );

        setImagesPreloaded(true);
      } catch (error) {
        console.error("Error preloading images:", error);
        setImagesPreloaded(true);
      }
    };

    preloadImages();
  }, []);

  useEffect(() => {
    if (imagesPreloaded) {
      const timer = setTimeout(() => {
        setIsInitialized(true);
        const s = slidesData[activeIndex];
        if (s && s.image2) {
          setSelectedImage(s.image2);
        }
        setIsLoading(false);
      }, 200);

      return () => clearTimeout(timer);
    }
  }, [imagesPreloaded]);

  useEffect(() => {
    const s = slidesData[activeIndex];
    if (s && s.image2 && isInitialized) {
      setSelectedImage(s.image2);
      setActiveOption("image2");
    }
    setResetId((id) => id + 1);
  }, [activeIndex, isInitialized]);

  const selectImage = (img) => {
    setSelectedImage(img);
    const currentSlide = slidesData[activeIndex];
    if (currentSlide) {
      if (img === currentSlide.image1) setActiveOption("image1");
      else if (img === currentSlide.image2) setActiveOption("image2");
      else if (img === currentSlide.image3) setActiveOption("image3");
    }
  };

  const handleSlideChange = (index) => {
    if (isLoading || !swiperRef.current?.swiper) return;
    
    const swiper = swiperRef.current.swiper;
    swiper.slideTo(index);
    
    const slide = slidesData[index];
    if (slide && slide.image2) {
      setSelectedImage(slide.image2);
      setActiveOption("image2");
    }
  };

  return (
    <div className="w-full max-w-[1200px] mx-auto flex select-none">
      <div className="w-[calc(100%-307px)] lg:w-[74.42%] relative">
        <p className="text-[14px] max-w-[299px] mb-[-40px] z-15 relative">
          Watch your vehicle go from bare to bold with our full wrap
          transformation tool that brings your brand to life.
        </p>
        <div className="relative min-h-[500px]">
          {isLoading && (
            <div className="absolute inset-0 bg-[#1D1D1D] flex items-center justify-center z-14">
              <div className="w-12 h-12 border-4 border-gray-300 border-t-red-600 rounded-full animate-spin"></div>
            </div>
          )}
          <div
            className={
              isLoading
                ? "opacity-0"
                : "opacity-100 transition-opacity duration-300"
            }
          >
            <Swiper
              ref={swiperRef}
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={0}
              slidesPerView={1}
              navigation={true}
              autoplay={false}
              allowTouchMove={false}
              onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
              className="min-h-[500px] h-full"
            >
              {slidesData.map((slide, index) => (
                <SwiperSlide key={slide.id}>
                  <div className="w-full h-full flex">
                    <div className="w-3/12 h-full flex flex-col gap-[20px] justify-start items-center mt-[76px]">
                      {/* Opción 1 */}
                      <div
                        className={`flex flex-col items-center justify-center gap-[17px] cursor-pointer transition-all duration-300 ${
                          activeOption === "image1"
                            ? "opacity-100 scale-105"
                            : "opacity-40 hover:opacity-70"
                        }`}
                        onClick={() => selectImage(slide.image1)}
                      >
                        <img
                          src={slide.imageSelectOption1}
                          alt={slide.name_wrapper1}
                          width="198px"
                          className="transition-all duration-300"
                        />
                        <p className="text-[18px] capitalize center transition-all duration-300">
                          {slide.name_wrapper1}
                        </p>
                      </div>

                      {/* Opción 2 */}
                      <div
                        className={`flex flex-col items-center justify-center gap-[17px] cursor-pointer transition-all duration-300 ${
                          activeOption === "image2"
                            ? "opacity-100 scale-105"
                            : "opacity-40 hover:opacity-70"
                        }`}
                        onClick={() => selectImage(slide.image2)}
                      >
                        <img
                          src={slide.imageSelectOption2}
                          alt={slide.name_wrapper2}
                          width="198px"
                          className="transition-all duration-300"
                        />
                        <p className="text-[18px] capitalize center transition-all duration-300">
                          {slide.name_wrapper2}
                        </p>
                      </div>

                      {/* Opción 3 */}
                      <div
                        className={`flex flex-col items-center justify-center gap-[17px] cursor-pointer transition-all duration-300 ${
                          activeOption === "image3"
                            ? "opacity-100 scale-105"
                            : "opacity-40 hover:opacity-70"
                        }`}
                        onClick={() => selectImage(slide.image3)}
                      >
                        <img
                          src={slide.imageSelectOption3}
                          alt={slide.name_wrapper3}
                          width="198px"
                          className="transition-all duration-300"
                        />
                        <p className="text-[18px] capitalize center transition-all duration-300">
                          {slide.name_wrapper3}
                        </p>
                      </div>
                    </div>

                    <div className="w-9/12 h-full flex items-center justify-center self-center">
                      <div className="relative w-full">
                        {activeIndex === index ? (
                          <CanvasEraser
                            key={`eraser-${slide.id}-${resetId}`}
                            baseSrc={selectedImage || slide.imagebase}
                            topSrc={slide.imagebase}
                            brush={60}
                            resetKey={`${resetId}-${selectedImage || ""}-${
                              slide.id
                            }`}
                          />
                        ) : (
                          <div className="relative w-full">
                            {selectedImage && (
                              <img
                                src={selectedImage}
                                alt=""
                                className="w-full absolute inset-0 z-0"
                              />
                            )}
                            <img
                              src={slide.imagebase}
                              alt=""
                              className="w-full relative z-10"
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className="flex gap-x-[58px] justify-center md:justify-start pt-4 md:pt-5 lg:pt-6 absolute bottom-[10%] right-[34%] z-12">
          <button
            className="cursor-pointer transition-opacity duration-300 hover:opacity-80 disabled:opacity-30"
            onClick={handlePrev}
            disabled={isLoading}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="30"
              viewBox="0 0 40 30"
              fill="none"
            >
              <g clipPath="url(#clip0_4603_124)">
                <path
                  d="M32.9254 29.9385L0.0612068 29.9385L6.53039 0.0619793L39.3945 0.0619812L32.9254 29.9385Z"
                  fill="#D92630"
                />
                <path
                  d="M21.9405 7.6669L23.708 9.43315L17.958 15.1831L23.708 20.9244L21.9405 22.6919L14.4268 15.1794L21.9405 7.6669Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_4603_124">
                  <rect
                    width="30"
                    height="40"
                    fill="white"
                    transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 40 30)"
                  />
                </clipPath>
              </defs>
            </svg>
          </button>

          <button 
            className="cursor-pointer transition-opacity duration-300 hover:opacity-80 disabled:opacity-30"
            onClick={handleNext}
            disabled={isLoading}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="41"
              height="30"
              viewBox="0 0 41 30"
              fill="none"
            >
              <g clipPath="url(#clip0_4603_121)">
                <path
                  d="M7.49848 0.0615234L40.3626 0.0615252L33.8934 29.938L1.0293 29.938L7.49848 0.0615234Z"
                  fill="#D92630"
                />
                <path
                  d="M18.4833 22.3331L16.7158 20.5669L22.4658 14.8169L16.7158 9.07561L18.4833 7.30811L25.9971 14.8206L18.4833 22.3331Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_4603_121">
                  <rect
                    width="30"
                    height="40"
                    fill="white"
                    transform="matrix(-4.37114e-08 1 1 4.37114e-08 0.423828 0)"
                  />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
      </div>

      <div className="w-[307px] lg:w-[25.58%] flex flex-col">
        <div className="space-y-[20px]">
          {slidesData.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => handleSlideChange(index)}
              className={`w-full flex items-center justify-end relative h-[87px] cursor-pointer ${
                isLoading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              <div
                className="absolute left-0 object-contain"
                style={{
                  width: slide.dot_width,
                  height: slide.dot_height,
                }}
              >
                <img
                  src={slide.dotImage}
                  alt={slide.title}
                  className="w-full h-full object-contain"
                />
              </div>

              <div
                className={`w-[233px] h-[59px] ps-[120px] flex items-center transition-all duration-300 ${
                  activeIndex === index ? "bg-[#D92630]" : "bg-white/10"
                }`}
              >
                <span
                  className={`text-[16px] italic uppercase font-normal text-left transition-all duration-300`}
                >
                  {slide.title}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}