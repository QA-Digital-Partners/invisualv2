import React, { useState } from "react";

export default function AditionalServicesServices() {
  const [activeService, setActiveService] = useState(1);
  const [closingService, setClosingService] = useState(null);
  const defaultServices = [
    {
      id: 1,
      title: "Custom Signs",
      description:`Your building sign is often the first impression your business makes. We create custom signs that reflect your brand identity while ensuring visibility, professionalism, and lasting impact.\n\nFrom bold storefront lettering to dimensional signs and illuminated options, our team handles everything from design to installation. Whether you want to attract foot traffic, improve wayfinding, or enhance curb appeal, we build signage that commands attention and reinforces your presence.`,
      aditionalInfoTitle1: "Banners",
      aditionalInfoText1:
        "Grab attention with vibrant and professionally designed banners, perfect for events and promotions.",
      aditionalInfoTitle2: "Laser Cutting",
      aditionalInfoText2:
        "We implement modern technologies for scalable production and quality control, customizing your design with precision, speed, and minimal waste.",
      img1: "/images/vehicle-wrapping-services/aditional-services-img1.webp",
      img1_m: "/images/vehicle-wrapping-services/aditional-services-img1-m.webp",
      img2: "/images/vehicle-wrapping-services/aditional-services-img2.webp",
      img3: "/images/vehicle-wrapping-services/aditional-services-img3.webp",
    },
    {
      id: 2,
      title: "Wall Wraps",
      description:
        "Your building sign is often the first impression your business makes. We create custom signs that reflect your brand identity while ensuring visibility, professionalism, and lasting impact. From bold storefront lettering to dimensional signs and illuminated options, our team handles everything from design to installation. Whether you want to attract foot traffic, improve wayfinding, or enhance curb appeal, we build signage that commands attention and reinforces your presence.",
      aditionalInfoTitle1: "Banners",
      aditionalInfoText1:
        "Grab attention with vibrant and professionally designed banners, perfect for events and promotions.",
      aditionalInfoTitle2: "Laser Cutting",
      aditionalInfoText2:
        "We implement modern technologies for scalable production and quality control, customizing your design with precision, speed, and minimal waste.",
      img1: "/images/vehicle-wrapping-services/aditional-services-img6.webp",
      img1_m: "/images/vehicle-wrapping-services/aditional-services-img6-m.webp",
      img2: "/images/vehicle-wrapping-services/aditional-services-img2.webp",
      img3: "/images/vehicle-wrapping-services/aditional-services-img3.webp",
    },
    {
      id: 3,
      title: "Decals & Stickers",
      description:
        "Your building sign is often the first impression your business makes. We create custom signs that reflect your brand identity while ensuring visibility, professionalism, and lasting impact. From bold storefront lettering to dimensional signs and illuminated options, our team handles everything from design to installation. Whether you want to attract foot traffic, improve wayfinding, or enhance curb appeal, we build signage that commands attention and reinforces your presence.",
      aditionalInfoTitle1: "Banners",
      aditionalInfoText1:
        "Grab attention with vibrant and professionally designed banners, perfect for events and promotions.",
      aditionalInfoTitle2: "Laser Cutting",
      aditionalInfoText2:
        "We implement modern technologies for scalable production and quality control, customizing your design with precision, speed, and minimal waste.",
      img1: "/images/vehicle-wrapping-services/aditional-services-img7.webp",
      img1_m: "/images/vehicle-wrapping-services/aditional-services-img7-m.webp",
      img2: "/images/vehicle-wrapping-services/aditional-services-img2.webp",
      img3: "/images/vehicle-wrapping-services/aditional-services-img3.webp",
    },
    {
      id: 4,
      title: "window wrap",
      description:
        "Your building sign is often the first impression your business makes. We create custom signs that reflect your brand identity while ensuring visibility, professionalism, and lasting impact. From bold storefront lettering to dimensional signs and illuminated options, our team handles everything from design to installation. Whether you want to attract foot traffic, improve wayfinding, or enhance curb appeal, we build signage that commands attention and reinforces your presence.",
      aditionalInfoTitle1: "Banners",
      aditionalInfoText1:
        "Grab attention with vibrant and professionally designed banners, perfect for events and promotions.",
      aditionalInfoTitle2: "Laser Cutting",
      aditionalInfoText2:
        "We implement modern technologies for scalable production and quality control, customizing your design with precision, speed, and minimal waste.",
      img1: "/images/vehicle-wrapping-services/aditional-services-img4.webp",
      img1_m: "/images/vehicle-wrapping-services/aditional-services-img4-m.webp",
      img2: "/images/vehicle-wrapping-services/aditional-services-img2.webp",
      img3: "/images/vehicle-wrapping-services/aditional-services-img3.webp",
    },
  ];

  const toggleService = (id) => {
    if (activeService === id) {
      setClosingService(id);
      setTimeout(() => {
        setActiveService(null);
        setClosingService(null);
      }, 300);
    } else {
      setActiveService(id);
      setClosingService(null);
    }
  };

  return (
    <div>
      {defaultServices.map((service) => {
        const isActive = activeService === service.id;
        const isClosing = closingService === service.id;

        return service.id % 2 !== 0 ? (
          <div
            key={service.id}
            className={`w-full flex flex-col md:flex-row text-center transition-all duration-500 overflow-hidden ${
              isActive ? "max-h-[2000px]" : "max-h-[400px] md:max-h-[248px]"
            }`}
          >
            <div
              className="w-12/12 md:w-5/12 h-[287px] md:h-auto cursor-pointer"
              onClick={() => toggleService(service.id)}
            >
              <img
                src={service.img1}
                alt={service.title}
                className={`w-full h-full object-cover transition-all duration-500 ${
                  isActive ? "grayscale-0" : "grayscale"
                }`}
              />
            </div>
            <div
              className="w-12/12 md:w-7/12 bg-white/10 shadow-[200.994px_-200.994px_200.994px_0_rgba(194,194,194,0.10)_inset,_-200.994px_200.994px_200.994px_0_rgba(255,255,255,0.10)_inset] backdrop-blur-[200.994px] flex flex-wrap cursor-pointer"
              onClick={() => toggleService(service.id)}
            >
              <div
                className={`w-full px-[24px] pt-[30px] pb-[33px] lg:pb-0 lg:pt-[75px] lg:ps-[125px] lg:pe-[50px] flex flex-col justify-start  ${
                  isActive ? "max-h-[388px]" : "max-h-[248px]"
                }`}
              >
                <h3 className="text-[25px] md:text-[40px] lg:text-[50px] font-bold italic uppercase md:text-left leading-[40px] lg:leading-[50px]">
                  {service.title}
                </h3>
                <p
                  className={`text-[16px] text-left transition-all duration-300 whitespace-pre-line max-w-[541px] ${
                    isActive && !isClosing
                      ? "opacity-100 max-h-[500px] mt-4"
                      : "opacity-0 max-h-0 overflow-hidden"
                  }`}
                >
                  {service.description}
                </p>
              </div>
              <div
                className={`w-full md:w-6/12 min-h-[254px] md:min-h-[242px] bg-cover bg-center flex flex-col justify-center items-center px-[60px] transition-all duration-300 ${
                  isActive && !isClosing
                    ? "pt-[89px] pb-[84px] opacity-100 translate-y-0"
                    : "pt-0 pb-0 opacity-0 translate-y-4 h-0 overflow-hidden"
                }`}
                style={{ backgroundImage: `url(${service.img2})` }}
              >
                <h3>{service.aditionalInfoTitle1}</h3>
                <p className="text-[9.082px]">{service.aditionalInfoText1}</p>
              </div>
              <div
                className={`w-full md:w-6/12 min-h-[254px] md:min-h-[242px] bg-cover bg-center flex flex-col justify-center items-center px-[60px] transition-all duration-300 ${
                  isActive && !isClosing
                    ? "pt-[89px] pb-[84px] opacity-100 translate-y-0"
                    : "pt-0 pb-0 opacity-0 translate-y-4 h-0 overflow-hidden"
                }`}
                style={{ backgroundImage: `url(${service.img3})` }}
              >
                <h3>{service.aditionalInfoTitle2}</h3>
                <p className="text-[9.082px]">{service.aditionalInfoText2}</p>
              </div>
            </div>
          </div>
        ) : (
          <div
            key={service.id}
            className={`w-full flex flex-col md:flex-row text-center transition-all duration-500 overflow-hidden ${
              isActive ? "max-h-[2000px]" : "max-h-[400px] md:max-h-[248px]"
            }`}
          >
            <div
              className="w-12/12 md:w-6/12 bg-white/10 shadow-[200.994px_-200.994px_200.994px_0_rgba(194,194,194,0.10)_inset,_-200.994px_200.994px_200.994px_0_rgba(255,255,255,0.10)_inset] backdrop-blur-[200.994px] flex flex-wrap cursor-pointer order-2 md:order-1"
              onClick={() => toggleService(service.id)}
            >
              <div
                className={`w-full px-[24px] pt-[30px] pb-[33px] lg:pb-0 lg:pt-[75px] lg:ps-[72px] lg:pe-[30px] flex flex-col justify-start ${
                  isActive ? "max-h-[388px]" : "max-h-[248px]"
                }`}
              >
                <h3 className="text-[25px] md:text-[40px] lg:text-[50px] font-bold italic uppercase md:text-left leading-[40px] lg:leading-[50px]">
                  {service.title}
                </h3>
                <p
                  className={`text-[16px] text-left transition-all duration-300 ${
                    isActive && !isClosing
                      ? "opacity-100 max-h-[500px] mt-4"
                      : "opacity-0 max-h-0 overflow-hidden"
                  }`}
                >
                  {service.description}
                </p>
              </div>
              <div
                className={`w-full md:w-6/12 min-h-[254px] md:min-h-[242px] bg-cover bg-center flex flex-col justify-center items-center px-[60px] transition-all duration-300 ${
                  isActive && !isClosing
                    ? "pt-[89px] pb-[84px] opacity-100 translate-y-0"
                    : "pt-0 pb-0 opacity-0 translate-y-4 h-0 overflow-hidden"
                }`}
                style={{ backgroundImage: `url(${service.img2})` }}
              >
                <h3>{service.aditionalInfoTitle1}</h3>
                <p className="text-[9.082px]">{service.aditionalInfoText1}</p>
              </div>
              <div
                className={`w-full md:w-6/12 min-h-[254px] md:min-h-[242px] bg-cover bg-center flex flex-col justify-center items-center px-[60px] transition-all duration-300 ${
                  isActive && !isClosing
                    ? "pt-[89px] pb-[84px] opacity-100 translate-y-0"
                    : "pt-0 pb-0 opacity-0 translate-y-4 h-0 overflow-hidden"
                }`}
                style={{ backgroundImage: `url(${service.img3})` }}
              >
                <h3>{service.aditionalInfoTitle2}</h3>
                <p className="text-[9.082px]">{service.aditionalInfoText2}</p>
              </div>
            </div>
            <div
              className="w-12/12 md:w-6/12 h-[287px] md:h-auto cursor-pointer order-1 md:order-2"
              onClick={() => toggleService(service.id)}
            >
              <img
                src={service.img1}
                alt={service.title}
                className={`w-full h-full object-cover transition-all duration-500 ${
                  isActive ? "grayscale-0" : "grayscale"
                }`}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}