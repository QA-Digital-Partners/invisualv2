"use client";

import React from "react"
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const About = (props) => {

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === ref1.current) setVisible1(true);
            if (entry.target === ref2.current) setVisible2(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (ref1.current) observer.observe(ref1.current);
    if (ref2.current) observer.observe(ref2.current);

    return () => observer.disconnect();
  }, []);


  return (
    <>
      {/************************************************** Banner */}
      <section className="about-banner lg:mt-[-110px] relative">
        <div className="container mx-auto lg:max-w-[1200px] lg:pt-64 pt-24 z-50 relative lg:pb-64 pb-64 px-6 lg:px-0">
          <h1 className="lg:text-[70px] text-[45px] font-black lg:max-w-[850px] tofinowide uppercase lg:leading-[70px] leading-[48px]">Vehicle Wrapping Dynamic Visual Stories</h1>
          <p className="text-[14px] lg:max-w-[23rem] lg:pt-10 pt-4">InVisual Signs, we are at the forefront of mobile advertising. We have creative experience and provide strategic solutions to redefine brand communication. Specializing in vehicle wraps, we create vibrant visual stories, creating a powerful resonance with diverse audiences.</p>
          <p className="text-[14px] lg:max-w-[15.5rem] font-bold lg:pt-6 pt-4 pb-12 leading-[22px]">Our passion and experience in generating viral and disruptive content highlight our commitment to helping brands connect more effectively with their communities.</p>
        </div>
        <Image 
          src="/images/busses.webp"
          alt="Vehicle Wrapping Dynamic Visual Stories"
          sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
          srcSet="/images/busses.webp 768w, /images/busses.webp 1024w"
          width={1270}
          height={622}
          className="lg:max-w-[1270px] w-full absolute lg:right-[-40px] right-[-40px] lg:top-[38%] -bottom-5 z-0"/>
      </section>


      {/************************************************ Our Mission */}
      <section className="our-mission lg:mt-[100px] mt-[60px]">
        <div className="container mx-auto lg:max-w-[1200px] flex flex-wrap lg:flex-wrap lg:pt-8 px-6 lg:px-0">
          <div className="lg:w-8/12 pt-16 lg:pt-0">
            <Image 
            src="/images/ritas-1.webp"
            alt="Commercial fleet wrap in Glen Burnie"
            sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
            srcSet="/images/ritas-1.webp 768w, /images/ritas-1.webp 1024w"
            width={787}
            height={379}
            className=" lg:mb-[-110px] lg:ms-[-70px]"
            />
            <h2 className="lg:text-[100px] text-[40px] font-black italic lg:leading-[110px] leading-[43px] lg:pb-4">OUR <span className="text-stroke block">MISSION</span></h2>
          </div>

          <div className="lg:w-4/12 lg:ms-[-20px] content-end lg:pb-6">
            <p className="text-[14px] lg:max-w-[26.2rem] lg:pt-10 lg:me-[-20px] pt-6">At InVisual Signs, we are spearheading a revolution in the vehicle wrapping industry. Our mission is to foster stronger, lasting connections between clients and their audiences through standout vehicle wrapping solutions.
              <br /><br />
              We are impassioned dedicated to transforming your commercial fleet into potent visual advertising assets, ensuring your brand RECEIVES continuous and effective exposure on the road.</p>
          </div>
        </div>
      </section>


      {/************************************************* Vission  */}
      <section className="our-vission relative lg:mt-[100px] mt-[60px]">
        <div className="container mx-auto lg:max-w-[1200px] relative flex flex-wrap lg:min-h-[812px] min-h-[552px] px-6 lg:px-0 lg:content-normal content-end">
          <Image 
          ref={ref1}
          src="/images/vision-truck.webp"
          alt="Commercial fleet wrap in Glen Burnie"
          sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
          srcSet="/images/vision-truck.webp 768w, /images/vision-truck.webp 1024w"
          width={967}
          height={812}
          className={`lg:mb-[-110px] lg:ms-[-70px] absolute top-0 right-0 ${visible1 ? `face-in-left` : ``}`}
        />
        <Image 
          ref={ref2}
          src="/images/vision-red-chevron.svg"
          alt="Commercial fleet wrap in Glen Burnie"
          sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
          srcSet="/images/vision-red-chevron.svg 768w, /images/vision-red-chevron.svg 1024w"
          width={748}
          height={722}
          className={`lg:mb-[-110px] lg:ms-[-70px] absolute top-[45px] right-[-50px] w-[280px] lg:w-[748px] ${visible1 ? `face-in-left-delay-500` : ``}`}
        />
        <div className="lg:w-1/2 lg:order-1 z-90 content-center lg:ps-24">
          <h2 className="lg:text-[100px] text-[40px] font-black italic lg:leading-[110px] leading-[45px] pb-4">OUR <span className="text-stroke block">VISION</span></h2>
        </div>
        <div className="lg:w-1/2 lg:order-0 z-90 content-end lg:pb-[130px]">
          <p className="text-[14px] lg:max-w-[26.2rem] lg:me-[-20px]">We aim to be recognized leaders in the vehicle wrapping sector, persistently leading in creativity and innovation. In each endeavor, our goal is not merely to meet but to surpass our client expectations, establishing fresh benchmarks in the industry and continually expanding the realm of the possible.</p>
        </div>
        </div>
      </section>

      {/*********************************************** */}
      <section className="relative min-h-screen lg:mt-[100px] lg:pb-44">
        <Image
          src="/images/our-value-top-lines.webp"
          alt="Commercial fleet wrap in Glen Burnie"
          sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
          srcSet="/images/our-value-top-lines.webp 768w, /images/our-value-top-lines.webp 1024w"
          width={1500}
          height={400}
          className={`absolute top-0 right-0 min-w-[680px]`}
        />
        <div className="container mx-auto lg:max-w-[1200px] px-6 lg:px-0">
          <div className="flex flex-wrap">
            <div className="lg:w-5/12 mb-8 lg:mb-0">
              <div>
                <h2 className="lg:text-[100px] text-[52px] font-black italic leading-[110px] lg:pb-4 lg:text-start text-center pt-16 lg:pt-0 pb-12 lg:pb-0">OUR <span className="text-stroke lg:block">VALUE</span></h2>
                <div className="lg:min-h-[290px] min-h-[354px] lg:pb-4 passion-v lg:max-w-[486px] content-end ps-6 pe-6 pb-8">
                  <p className="text-[30px] font-black">Passion</p>
                  <p className="text-[14px] lg:max-w-[377px]">More than a service provider, we are passionate enthusiasts of our craft. This fervor is reflected in every innovative design and successful vehicle wrapping campaign we orchestrate.</p>
                </div>
              </div>
            </div>
            <div className="lg:w-7/12 content-end lg:ps-4 mb-8 lg:mb-0">
              <div className="lg:min-h-[441px] min-h-[354px] lg:pb-4 pb-6 experience-v lg:max-w-[343px] content-end ps-6">
                <p className="text-[30px] font-black">Experience</p>
                <p className="text-[14px] lg:max-w-[261px]">With several years steering the industry, our experience stands as a testimony, offering invaluable insights and solutions that are finely tuned to the current market dynamics.</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap lg:mt-6 mb-8 lg:mb-0">
            <div className="lg:w-4/12 mb-8 lg:mb-0">
              <div className="lg:min-h-[441px] min-h-[354px] lg:pb-16 pb-6 resp-v lg:max-w-[384px] content-end ps-6">
                <p className="text-[30px] font-black">Responsibility</p>
                <p className="text-[14px] lg:max-w-[291px]">We embrace each project with a profound sense of commitment, guaranteeing the fulfillment of all expectations and agreements established with our clients.</p>
              </div>
            </div>

            <div className="lg:w-8/12 lg:ps-4 flex flex-wrap">
              <div className="flex flex-wrap lg:flex-nowrap order-1 lg:order-0 mb-8 lg:mb-0">
                <div className="lg:min-h-[313px] min-h-[354px] lg:pb-4 collab-v lg:max-w-[298px] w-full content-end ps-6 mb-8 lg:mb-0">
                  <p className="text-[30px] font-black">Collaboration</p>
                  <p className="text-[14px] lg:max-w-[251px]">Our team of audiovisual professionals is prepared to work alongside you, offering personalized and dedicated assistance throughout the entire content creation journey.</p>
                </div>
                <div className="lg:w-7/12 w-full lg:ps-8">
                  <p className="lg:text-[64px] text-[54px] font-black italic leading-[70px] lg:pb-4 text-center">PERFECTION <span className="block lg:text-[89px] text-[75px] lg:me-[-20px]">IN EVERY</span> <span className="text-stroke block lg:text-[120px] text-[105px] leading-[120px]">DETAIL</span></p>
                </div>
              </div>
              <div className="flex lg:pt-6 order-0 lg:order-1 mb-8 lg:mb-0">
                <div className="lg:min-h-[307px] min-h-[354px] lg:pb-8 creative-v lg:max-w-[690px] content-end ps-6 w-full">
                  <p className="text-[30px] font-black">Creative Innovation</p>
                  <p className="text-[14px] lg:max-w-[385px]"> Our creativity transcends conventional boundaries; we specialize in formulating disruptive strategies that uniquely position our clients in the market, fostering significant and enduring brand recognition through vehicle wrapping.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Image
          src="/images/our-value-bottom-lines.webp"
          alt="Commercial fleet wrap in Glen Burnie"
          sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
          srcSet="/images/our-value-bottom-lines.webp 768w, /images/our-value-bottom-lines.webp 1024w"
          width={1500}
          height={400}
          className={`absolute bottom-0 left-0 min-w-[680px]`}
        />
      </section>
    </>
  )
};

export default About;
