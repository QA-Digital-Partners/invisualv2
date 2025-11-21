"use client"
import Container from "@/components/Container";
import { useLayoutEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const Header = () => {
    return (
        <header className="flex justify-center">
            <h2 className="uppercase font-bold text-white  text-[90px] leading-none">
                How
                <span
                    className="text-transparent"
                    style={{
                        WebkitTextStroke: "1px white"
                    }}
                > it works</span>
            </h2>
        </header>
    )
}

const images = [
    "/howItWork/1.webp",
    "/howItWork/2.webp",
    "/howItWork/3.webp",
]

const Content = () => {

    const swiperRef = useRef(null)
    const [currentSlide, setCurrentSlide] = useState({
        idx: 0,
        direction: "next"
    })


    const getImages = (direction = "next", count = 2) => {
        const result = [];
        const len = images.length;
        for (let i = 1; i <= count; i++) {
            if (direction === "next") {
                result.push(images[(currentSlide.idx + i) % len]);
            } else {
                result.push(images[(currentSlide.idx - i + len) % len]);
            }
        }
        if (direction == "next") {
            return result.reverse()
        } else {
            return result
        }
    }

    const currentImages = getImages(currentSlide.direction)

    const next = () => {
        const cIdx = currentSlide.idx == images.length - 1 ? 0 : currentSlide.idx + 1
        setCurrentSlide({
            idx: cIdx,
            direction: "next"
        })
        swiperRef.current?.slideTo(cIdx)
    }
    const prev = () => {
        const cIdx = currentSlide.idx == 0 ? images.length - 1 : currentSlide.idx - 1
        setCurrentSlide({
            idx: cIdx,
            direction: "prev"
        })
        swiperRef.current?.slideTo(cIdx)
    }

    return (
        <div className="flex w-full gap-8">
            <div className="flex flex-col justify-between w-[60%] gap-4">
                <div className="space-y-12">
                    <div>
                        <h3 className="text-[35px] font-bold">Consultation & Quote</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                    <div className="flex ml-1 gap-6">
                        <button
                            className="bg-[#D92630] h-[40px] w-[40px] -skew-x-12 text-white"
                            onClick={prev}
                        >
                            {"<"}
                        </button>
                        <button
                            className="bg-[#D92630] h-[40px] w-[40px] -skew-x-12 text-white"
                            onClick={next}
                        >
                            {">"}
                        </button>
                    </div>
                </div>
                <div className="flex gap-8 justify-end overflow-hidden">
                    {currentImages.map((image, index) => (
                        <img
                            key={index}
                            alt=""
                            src={image}
                            loading="lazy"
                            className={`h-[250px] w-full object-cover`}
                        />
                    ))}
                </div>
            </div>
            <div className="w-[40%]">
                <Swiper
                    slidesPerView={1}
                    centeredSlides
                    allowTouchMove={false}
                    fadeEffect={{ crossFade: true }}
                    effect="fade"
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                >
                    {images.map((image, index) => (
                        <SwiperSlide key={index}>
                            <img
                                alt=""
                                src={image}
                                loading="lazy"
                                className="max-w-full h-[500px] object-cover"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default function HowItWorks() {
    return (
        <section className="flex text-white px-8 min-h-[75dvh]">
            <Container className="space-y-12">
                <Header />
                <Content />
            </Container>
        </section>
    )
}   