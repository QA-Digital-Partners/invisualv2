import React from "react"
import ContactForm from "./ContactForm";
import Image from "next/image";
import ButtonLaid from "./button";

const Footer = (props) => {
  const leftOptions =[
    {
      text: 'Home',
      link: '/'
    },
    {
      text: 'Marketing Solutions',
      link: '/'
    },
    {
      text: 'About Us',
      link: '/'
    },
    {
      text: 'Vehicle Wraps',
      link: '/'
    },
    {
      text: 'Additional Services',
      link: '/'
    },
    {
      text: 'Gallery',
      link: '/'
    },
  ]
  return (
    <>
      <div className="lg:pb-4">

          <Image 
          src="/images/footer-lines.webp"
          alt="decorative lines"
          sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
          srcSet="/images/footer-lines.webp 768w, /images/footer-lines.webp 1024w"
          width={1500}
          height={228}
          className="w-full"
          />

        <div className="container mx-auto lg:max-w-[1200px] flex flex-wrap px-6 lg:px-0 ">
          <div className="w-full justify-center flex flex-wrap order-0 lg:pb-16 pb-6">
            <a href="/">
              <Image 
              src="/images/logo-en-blanco-color.svg"
              alt="decorative lines"
              sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
              srcSet="/images/logo-en-blanco-color.svg 768w, /images/logo-en-blanco-color.svg 1024w"
              width={461}
              height={147}
              className="w-full max-w-[312px] lg:max-w-[461px]"
              />
            </a>
          </div>

          <div className="lg:w-7/12 w-full lg:pe-8 lg:ps-0 lg:order-1 order-3 pb-6 lg:pb-0">
            <p className="text-[18px] font-bold pb-2">Site Map</p>
            <img 
            src="/images/red-line.svg"
            alt="red-line"
            className="max-w-[121px] pb-4"/>

            <div className="grid lg:grid-cols-3 grid-cols-2 lg:gap-2 gap-y-4 lg:pt-4 lg:pe-8">
              {leftOptions.map((option) => {
                return(
                  <a key={option.text} href={option.link} className="flex">
                    <img 
                      src="/images/icon-list-footer.svg"
                      alt="Decoración"
                      className="w-full lg:max-w-[19px] max-w-[24px]"/>
                    <span className="ps-2">{option.text}</span>
                  </a>
                )
              })}
            </div>

          </div>

          <div className="lg:w-7/12 w-full lg:order-3 order-2 lg:mt-[-60px] pb-10 lg:pb-0">
            <div className=" lg:pe-12 lg:pt-8 ">
              <ContactForm />
            </div>
          </div>

          <div className="lg:w-5/12 w-full lg:order-2 order-1 pb-6 lg:pb-0">
            <div className="justify-center w-full flex">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3108.5621658501927!2d-76.7422713!3d38.8195844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7bfa6d377bfa5%3A0x183318280d905bf9!2sVehicle%20Wraps%20Maryland%20-%20Invisual%20signs!5e0!3m2!1ses-419!2sco!4v1757365736268!5m2!1ses-419!2sco" 
                width="520" 
                height="190" 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="lg:max-w-[510px] max-w-[314px]" />
            </div>
          </div>

          <div className="lg:w-5/12 order-4 flex flex-wrap content-start">
            <p className="text-[18px] font-bold lg:pt-6 pb-2 w-full">Contact Us</p>
            <img 
            src="/images/red-line.svg"
            alt="red-line"
            className="max-w-[121px] pb-4 w-full"/>

            <ul className="flex flex-wrap lg:gap-2 gap-y-4 lg:pt-0">
              <li className="lg:w-5/12 w-full">
                <a href="+12406641629" className="flex">
                  <img 
                    src="/images/icon-list-footer.svg"
                    alt="Decoración"
                    className="w-full lg:max-w-[19px] max-w-[24px]"/>
                  <span className="ps-2">240-664-1629</span>
                </a>
              </li>

              <li className="lg:w-5/12 w-full">
                <a href="+12406814372" className="flex">
                  <img 
                    src="/images/icon-list-footer.svg"
                    alt="Decoración"
                    className="w-full lg:max-w-[19px] max-w-[24px]"/>
                  <span className="ps-2">240-681-4372</span>
                </a>
              </li>

              <li className="w-12/12">
                <a href="https://maps.app.goo.gl/cGBxngkKE8UqmGTt8" target="_blank" className="flex">
                  <img 
                    src="/images/icon-list-footer.svg"
                    alt="Decoración"
                    className="w-full lg:max-w-[19px] max-w-[24px]"/>
                  <span className="ps-2">15129-B Marlboro Pike  Upper Marlboro, MD 20772</span>
                </a>
              </li>
            </ul>

            <div className="flex flex-wrap pt-6 lg:gap-x-2">
              <ButtonLaid buttonText={'IN VISUAL SIGNS'} width={164} type="youtube"/>
              <ButtonLaid buttonText={'@invisualsigns'} width={164} type="instagram"/>
            </div>
          </div>
        </div>

        <div className="container mx-auto max-w-[657px] min-h-[3px] degradadoline lg:mt-16 mt-12 mb-4 lg:mb-0"></div>

        <div className="container mx-auto flex justify-center lg:pt-8 pb-8 items-center flex-wrap">
          <p className="lg:pe-4 py-4 lg:order-0 order-1">All Rights Reserved | Copyright © 2025 Invisual Signs</p>
          <a href='https://qadigitalads.com/en/home' target="_blank">
            <Image 
              src="/images/logo-qa.svg"
              alt="Logo QA"
              sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
              srcSet="/images/logo-qa.svg 768w, /images/logo-qa.svg 1024w"
              width={39}
              height={39}
              className="mt-[-45px] lg:mt-0 bg-[#1d1d1d] p-2 lg:p-0 min-w-[60px] lg:min-w-[40px]"/>
          </a>
        </div>
      </div>
    </>
  )
};

export default Footer;
