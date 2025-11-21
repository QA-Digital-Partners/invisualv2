"use client";
import AnimatedLine from "../components/animatedLine";
import ScrollSpyMenu from "../components/asideMenu";
import ReactCompareImage from "react-compare-image";
import Image from "next/image";
import BrandingCarousel from "../components/BrandingCarousel";
import React, { useRef, useState } from "react";
import { AccordionItem } from "../components/faqs";
import {
  AditionalServicesData,
  BenefitsImages,
  FaqsHome,
  GraphicDesignExamplesImages,
  GraphicDesignExamplesText,
  GraphicDesignServices,
  ServiceSlidesHome,
  TypeImagesLast,
  TypesOfWrapImages,
  TypesOfWrapText,
} from "../data";
import ButtonLaid from "../components/button";
import BasicSlider from "../components/BasicCarousel";
import GrowNumber from "../components/GrowNumber";
import ContactForm from "../components/ContactForm";
import CarTypeCard from "../components/TypeOfCarsCard";
import Carousel3Dv2 from "../components/prueba2";
import AditionalServicesHome from "../components/AditionalServicesHome";
import HomeReviews from "../components/HomeReviews";
import SliderHomeWhyChose from "../components/SliderHomeWhyChose";

const CustomHandle = () => (
  <div
    style={{
      width: "60px",
      height: "60px",
      borderRadius: "50%",
      backgroundColor: "#ffffffB3",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      cursor: "ew-resize",
      boxShadow: "0 0 5px rgba(0,0,0,0.4)",
    }}
  >
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
      }}
    >
      <img
        src="/icons/arrow-left.svg"
        alt="Left Arrow"
        width={13}
        height={20}
      />
      <img
        src="/icons/arrow-right.svg"
        alt="Right Arrow"
        width={13}
        height={20}
      />
    </div>
  </div>
);

const GraphicSlideText = ({ data }) => {
  return (
    <>
      <Image
        src={`/images/${data.src}`}
        alt={data.alt}
        sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
        srcSet={`/images/${data.src} 768w, /images/${data.src} 1024w`}
        width={336}
        height={84}
        className="z-20 relative lg:pb-6"
      />

      <p>{data.desc}</p>
    </>
  );
};

const CompareComponent = ({ data }) => {
  return (
    <>
      <ReactCompareImage
        leftImage={`/images/${data.beforeSrc}`}
        rightImage={`/images/${data.afterSrc}`}
        sliderLineWidth="1"
        handle={<CustomHandle />}
      />
    </>
  );
};

const TypeOfWrapComponent = ({ data }) => {
  return (
    <>
      <p className="text-[25px] font-bold text-center lg:pb-10">{data.title}</p>
      <p className="text-[14px] text-center leading-[20px] lg:px-6">
        {data.desc}
      </p>
    </>
  );
};

export default function HomePage() {
  const benefits = [
    "Mobile Advertising",
    "Branding and Identity",
    "Protection for Vehicle's Paint",
    "Customizable Designs",
    "Cost-Effective Marketing",
  ];
  const prevBenefitsRef = useRef(null);
  const nextBenefitsRef = useRef(null);

  const prevBARef = useRef(null);
  const nextBARef = useRef(null);

  const prevTVRef = useRef(null);
  const nextTVRef = useRef(null);

  const [gdTextSwiper, setGdTextSwiper] = useState(null);
  const [gdImageSwiper, setGdImageSwiper] = useState(null);

  const [tvTextSwiper, setTvTextSwiper] = useState(null);
  const [tvImageSwiper, setTvImageSwiper] = useState(null);

  return (
    <main>
      {/*************************************** Hero Banner ***********************/}
      <section id="home-hero-banner mb-16" className="">
        {/*******  Red line top */}
        <div className="absolute max-h-[65px] h-[65px] rotate-[165deg] overflow-hidden translate-x-[-100px] translate-y-[70px] shadow-[5px_10px_10px_0px_rgba(0,0,0,1)] z-10">
          <div
            className={`lg:w-[1600px] w-full h-[100px] degradado float-up-down`}
          />
        </div>

        {/*******  Inner secion */}
        <div className="container lg:max-w-[1200px] mx-auto pt-50 pb-8 relative">
          <h1 className="text-[22px] font-bold relative">
            Maryland, Virginia, & D.C
            <span className="italic font-black lg:text-[65px] block uppercase lg:leading-[70px] tofinowide relative">
              Commercial Vehicle{" "}
              <span className="block relative z-50">Wraps Services</span>
            </span>
          </h1>

          <div className="flex gap-2 pt-8 w-[41.5%]">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="43"
                height="71"
                viewBox="0 0 43 71"
                fill="none"
              >
                <g filter="url(#filter0_d_4963_404)">
                  <path
                    d="M28.1998 3.45453L38.4617 3.45453L25.3518 64.0001L15.0898 64.0001L28.1998 3.45453Z"
                    fill="#D92630"
                  />
                </g>
                <g filter="url(#filter1_d_4963_404)">
                  <path
                    d="M18.11 3.00012L23.1637 3.00012L10.0537 63.5457L5 63.5457L18.11 3.00012Z"
                    fill="#D92630"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_4963_404"
                    x="11.0535"
                    y="1.43634"
                    width="31.4448"
                    height="68.6183"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="2.01819" />
                    <feGaussianBlur stdDeviation="2.01819" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_4963_404"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_4963_404"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter1_d_4963_404"
                    x="0.963629"
                    y="0.981936"
                    width="26.2368"
                    height="68.6183"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="2.01819" />
                    <feGaussianBlur stdDeviation="2.01819" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_4963_404"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_4963_404"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
            <p className="text-[14px]">
              Turn your vehicles and fleets into rolling billboards. We deliver
              custom vehicle wraps that drive nonstop brand exposure with expert
              design, premium materials, and trusted professional installation.
            </p>
          </div>

          <div className="flex justify-end relative">
            <Image
              src="/images/invisual-car-banner-home.webp"
              alt="Commercial fleet wrap in Glen Burnie"
              sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
              srcSet="/images/commercial-fleet-wrap.webp 768w, /images/commercial-fleet-wrap.webp 1024w"
              width={860}
              height={343}
              className="z-20 relative lg:w-[860px] lg:min-w-[400px] me-[-130px] mt-[-210px]"
            />
          </div>
        </div>
        <div className="relative z-50">
          <BrandingCarousel />
        </div>
        {/*******  Red line bottom */}
        <div className="absolute lg:bottom-[290px] right-0 max-h-[65px] h-[65px] rotate-[165deg] overflow-hidden translate-x-[150px] translate-y-[70px] shadow-[-20px_-15px_20px_-12px_rgba(0,0,0,0.5)] z-10">
          <div
            className={`lg:w-[1300px] w-full h-[100px] degradado-inverse `}
          />
        </div>
      </section>

      {/*************************************** Services **************************/}
      <section id="services" className="text-white relative">
        <AnimatedLine />
        <div className="absolute z-0 max-h-[600px] h-[400px] rotate-[-163.5deg] overflow-hidden translate-x-[-300px] translate-y-[-30px] shadow-[5px_10px_16px_0px_rgba(0,0,0,0.7)] z-0 bg-[#1A1A1A]">
          <div className={`lg:w-[2500px] w-full h-[100px] bg-[#1A1A1A]`} />
        </div>
        <div className="container mx-auto lg:max-w-[1200px] relative z-20">
          <h2 className="lg:text-[100px] font-black italic lg:pb-8 lg:ps-20">
            OUR <span className="text-stroke">SERVICES</span>
          </h2>
          <Carousel3Dv2 slides={ServiceSlidesHome} />
        </div>

        <div className="absolute z-0 lg:bottom-[150px] max-h-[400px] h-[400px] rotate-[-163.5deg] overflow-hidden translate-x-[-300px] translate-y-[-30px] shadow-[-20px_-15px_20px_-12px_rgba(0,0,0,1)] z-0 bg-[#1A1A1A]">
          <div className={`lg:w-[2500px] w-full h-[100px] bg-[#1A1A1A]`} />
        </div>

        <AnimatedLine classes={"justify-self-end -rotate-180 mt-20"} />
      </section>

      {/*************************************** Customer Satisfaction ***********************/}
      <section
        id="satisfaction"
        className="min-h-screen text-white satisfaction lg:mt-[-120px]"
      >
        <div className="container mx-auto lg:max-w-[1200px] lg:pt-24 px-[24px] xl:px-0">
          <h2 className="lg:text-[90px] font-black italic lg:pb-8 lg:leading-[95px] ">
            CUSTOMER{" "}
            <span className="text-stroke block lg:text-[110px]">
              SATISFACTION
            </span>
          </h2>
          <div className="w-full flex justify-end">
            <div className="lg:w-4/12 flex flex-wrap content-end lg:pt-[67px]">
              <p className="text-[22px] font-bold relative ml-4">Follow Us</p>
              <div className="flex flex-wrap lg:pt-4 lg:gap-x-2">
                <ButtonLaid
                  buttonText={"IN VISUAL SIGNS"}
                  width={164}
                  type="youtube"
                />
                <ButtonLaid
                  buttonText={"@invisualsigns"}
                  width={164}
                  type="instagram"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="lg:mt-[44px] container mx-auto lg:max-w-[1200px] lg:pb-24">
          <HomeReviews />
        </div>
      </section>

      {/*************************************** Why choose ***********************/}
      <section id="why" className="min-h-screen text-white px-20 home">
        <div className="container lg:max-w-[1200px] mx-auto">
          <h2 className="lg:text-[100px] font-black italic lg:pb-20 lg:pt-8 leading-[110px] text-center">
            <span className="text-stroke block">WHY CHOOSE</span> INVISUAL
            SINGS?
          </h2>
          <p className="text-[14px] lg:w-[31rem] lg:pb-12">
            At InVisual Signs, we're more than just a wrap provider, we're your
            branding partner. With years of experience in commercial vehicle
            wrapping and custom brand design, we help businesses across
            industries stand out and connect with their audience through
            powerful visual impact.
          </p>
          <div className="pb-4">
            <ButtonLaid
              buttonText={"240-664-1629"}
              link={"tel:2406641629"}
              width={150}
            />
          </div>
          <div className="flex flex-wrap">
            <SliderHomeWhyChose />
          </div>

          <div className="w-full lg:pb-[260px]">
            <p className="text-center tofinowide text-[40px] uppercase lg:pb-8">
              What Sets Us Apart
            </p>
            <div className="flex lg:flex-nowrap w-full">
              <div className="grid grid-cols-2 gap-6">
                {FaqsHome.map((datos) => {
                  return <AccordionItem key={datos.title} {...datos} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*************************************** Benefits ***********************/}
      <section
        id="benefits"
        className="min-h-screen text-white home lg:mt-[-120px]"
      >
        <div className="container mx-auto lg:max-w-[1200px] lg:pb-64">
          <h2 className="lg:text-[100px] font-black italic lg:pb-20 lg:pt-8 leading-[110px] lg:max-w-[60rem]">
            <span className="text-stroke block">BENEFITS OF</span> COMMERCIAL
            VEHICLE WRAPS <span className="text-stroke block">SERVICES</span>
          </h2>
          <p className="text-[14px] lg:w-[39rem] lg:pb-12">
            Vehicle wraps don’t just look great, they work around the clock to
            promote your business. With bold, custom-designed graphics, your
            vehicles become mobile billboards that grab attention wherever they
            go.
            <br />
            <br />
            Unlike traditional ads, wraps deliver non-stop exposure, even when
            parked. It's one of the most cost-effective ways to boost
            visibility, build trust, and stay top-of-mind.
          </p>

          <div className="flex">
            <div className="lg:w-[26%] lg:pt-8">
              {benefits.map((option, index) => {
                return (
                  <div key={index} className="flex lg:pb-4">
                    <img
                      src="/images/list-icon.svg"
                      alt="Decoración"
                      className="w-full lg:max-w-[19px] max-w-[24px]"
                    />
                    <span className="ps-2 text-[20px] font-bold">{option}</span>
                  </div>
                );
              })}
              <div className="flex gap-x-2 lg:pt-6">
                <ButtonLaid buttonText={"Learn More"} width={145} />
                <a ref={prevBenefitsRef} className="cursor-pointer">
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
                </a>
                <a ref={nextBenefitsRef} className="cursor-pointer">
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
                </a>
              </div>
            </div>

            <div className="lg:w-[80%] lg:mt-[-30px] lg:me-[-90px] benefit-slider-bg">
              <BasicSlider
                info={BenefitsImages}
                prevRef={prevBenefitsRef}
                nextRef={nextBenefitsRef}
                height="544px"
              />
            </div>
          </div>
        </div>
      </section>

      {/*************************************** Graphic Design ***********************/}
      <section
        id="graphic"
        className="min-h-screen text-white home lg:mt-[-100px]"
      >
        <div className="container mx-auto lg:max-w-[1200px] flex flex-wrap">
          <div className="w-full">
            <h2 className="lg:text-[110px] font-black italic lg:pt-8 leading-[110px] text-center lg:pb-12">
              <span className="text-stroke">GRAPHIC</span> DESIGN
            </h2>
            <p className="text-[45px] text-center font-bold">
              Branding & Consultation Services
            </p>
          </div>
          <div className="w-full grid lg:grid-cols-2 grid-cols-1 lg:pt-20 lg:gap-16 lg:pb-32">
            {GraphicDesignServices.map((data, index) => {
              return (
                <div key={index}>
                  <Image
                    src="/images/red-line-top-GD.png"
                    alt="Commercial fleet wrap in Glen Burnie"
                    sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
                    srcSet="/images/red-line-top-GD.png 768w, /images/red-line-top-GD.png 1024w"
                    width={588}
                    height={6}
                    className="z-20 relative lg:pb-6"
                  />
                  <div className="lg:min-h-[130px]">
                    <p className="lg:text-[25px] font-bold pb-4">
                      {data.title}
                    </p>
                    <p className="text-[14px] lg:pe-8">{data.desc}</p>
                  </div>
                  <Image
                    src="/images/red-line-bottom-GD.png"
                    alt="Commercial fleet wrap in Glen Burnie"
                    sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
                    srcSet="/images/red-line-top-GD.png 768w, /images/red-line-top-GD.png 1024w"
                    width={588}
                    height={6}
                    className="z-20 relative lg:pt-6"
                  />
                </div>
              );
            })}
          </div>

          <div className="lg:w-3/12 w-full">
            <BasicSlider
              SlideComponent={GraphicSlideText}
              info={GraphicDesignExamplesText}
              prevRef={prevBARef}
              nextRef={nextBARef}
              setSwiperInstance={setGdTextSwiper}
              allowSwipe={true}
            />

            <div className="flex gap-x-6 lg:pt-6">
              <a ref={prevBARef} className="cursor-pointer">
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
              </a>
              <a ref={nextBARef} className="cursor-pointer">
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
              </a>
            </div>
          </div>
          <div className="lg:w-9/12 w-full py-12 lg:py-0">
            <BasicSlider
              SlideComponent={CompareComponent}
              info={GraphicDesignExamplesImages}
              prevRef={prevBARef}
              nextRef={nextBARef}
              height="466px"
              allowSwipe={false}
              setSwiperInstance={setGdImageSwiper}
            />
          </div>
        </div>
      </section>

      {/*************************************** Aditional Services ***********************/}
      <section className="mt-[170px] relative pb-[160px]" id="aditional">
        <div className="w-full z-2">
          <h2 className="lg:text-[110px] font-black italic lg:pt-8 leading-[110px] text-center lg:pb-12">
            <span className="text-stroke me-[350px]">ADITIONAL</span> <br/><span className="ms-[350px]">SERVICES</span>
          </h2>
        </div>
        <AditionalServicesHome slides={AditionalServicesData} />
        <img src="/images/aditional-services-home-bg.webp" alt="" className="absolute w-full z-1 bottom-0 select-none"/>
      </section>

      {/*************************************** Aditional Services ***********************/}
      {/* <section id="aditional" className="min-h-screen text-white p-20">
        Types of Vehicles
      </section> */}

      {/*************************************** CTA Contact form ***********************/}
      <section id="cta" className="mt-[70px]  home">
        <div className="container mx-auto lg:max-w-[1200px] flex flex-wrap items-start">
          <div className="lg:w-8/12 lg:pt-48">
            <h2 className="lg:text-[110px] font-black italic lg:pt-8 leading-[110px] lg:pb-12">
              <span className="text-stroke">READY TO</span>{" "}
              <span className="lg:ps-6">STAND OUT?</span>
            </h2>
          </div>
          <div className="lg:w-5/12 flex flex-wrap lg:ms-[-120px] justify-center">
            <div className="w-full justify-center flex lg:pe-16">
              <div className="border border-[#ffffff] -rotate-15 w-fit">
                <div className="rotate-15 flex lg:px-4 lg:py-14">
                  <GrowNumber
                    endValue={10}
                    duration={2000}
                    classname={
                      "text-[80px] font-bold text-effect leading-[80px] lg:pe-2"
                    }
                  />
                  <p>
                    <span className="text-[40px] font-bold text-effect block leading-[30px] ">
                      +
                    </span>
                    <span className="block">Years</span> of experience
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full justify-center flex lg:ps-58 lg:mt-[-60px]">
              <div className="border border-[#ffffff] -rotate-15">
                <div className="rotate-15 flex lg:ps-2 lg:pe-8 lg:py-14">
                  <GrowNumber
                    endValue={80}
                    duration={2000}
                    classname={
                      "text-[80px] font-bold text-effect leading-[80px] lg:pe-2"
                    }
                  />
                  <p>
                    <span className="text-[40px] font-bold text-effect block leading-[30px] ">
                      +
                    </span>
                    <span className="block">Satisfied</span> Clients
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full justify-center flex">
              <div className="border border-[#ffffff] -rotate-15">
                <div className="rotate-15 flex lg:px-2 lg:py-16">
                  <GrowNumber
                    endValue={100}
                    duration={2000}
                    classname={
                      "text-[80px] font-bold text-effect leading-[80px] lg:pe-2"
                    }
                  />
                  <p>
                    <span className="text-[40px] font-bold text-effect block leading-[30px] ">
                      +
                    </span>
                    <span className="block">Projects</span>Completed
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-6/12 lg:mt-[-50px] lg:px-16 lg:pb-24">
            <ContactForm />
          </div>

          <div className="lg:w-6/12 lg:ps-8 lg:pt-20">
            <p className="font-bold text-[20px]">
              Turn your vehicles into 24/7 mobile advertising.
            </p>
            <p className="">
              Grab attention, build trust, and grow your brand with bold, custom
              graphics. Reach out today and make sure your business gets
              noticed!
            </p>
          </div>
        </div>
      </section>

      {/*************************************** Types of Vehicle Wrap ***********************/}
      <section id="types" className="home">
        <div className="container mx-auto lg:max-w-[1200px] flex flex-wrap">
          <div className="lg:w-[47%] lg:pt-40">
            <h2 className="lg:text-[110px] font-black italic leading-[110px] lg:pb-8">
              <span className="text-stroke block">TYPES OF</span>{" "}
              <span className="">VEHICLE WRAP</span>
            </h2>
            <ButtonLaid
              width={145}
              buttonText={"240-664-1629"}
              link="tel:+12406641629"
            />
          </div>

          <div className="lg:w-[53%] flex flex-wrap lg:pt-20">
            <div className="flex w-full justify-center">
              <div className="w-[40px] content-end lg:pb-12">
                <a ref={prevTVRef} className="cursor-pointer">
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
                </a>
              </div>

              <div className="lg:w-[540px]">
                <BasicSlider
                  info={TypesOfWrapImages}
                  prevRef={prevTVRef}
                  nextRef={nextTVRef}
                  allowSwipe={true}
                  height="340px"
                  setSwiperInstance={setTvImageSwiper}
                />
              </div>

              <div className="w-[40px] content-end lg:pb-12">
                <a ref={nextTVRef} className="cursor-pointer">
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
                </a>
              </div>
            </div>

            <div className="w-full">
              <BasicSlider
                SlideComponent={TypeOfWrapComponent}
                info={TypesOfWrapText}
                prevRef={prevTVRef}
                nextRef={nextTVRef}
                allowSwipe={false}
                setSwiperInstance={setTvTextSwiper}
                height="170px"
              />
            </div>
          </div>
        </div>
      </section>

      {/*************************************** VEHICLES THAT CAN BE WRAPPE ***********************/}

      <section id="types2" className="home">
        <div className="container mx-auto lg:max-w-[1200px] lg:pt-40 flex flex-wrap">
          <h2 className="lg:text-[110px] font-black italic leading-[110px] lg:pb-8 text-end lg:ps-[35%] w-full">
            <span className="text-stroke block">VEHICLES THAT CAN</span>{" "}
            <span className="">BE WRAPPED</span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-y-12">
            {TypeImagesLast.map((data, index) => {
              return <CarTypeCard {...data} key={index} />;
            })}
          </div>
        </div>
      </section>

      {/*************************************** Scroll Spy Menu ***********************/}
      <ScrollSpyMenu />
    </main>
  );
}
