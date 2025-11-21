"use client";
import { useState } from "react";

export const AccordionItem = ({number, title, ans }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">

        {/* 🔹 SVG que aparece arriba cuando está abierto */}
      {open && (
        <img
          src="/images/border-up-faqs.webp"
          alt="Decoración"
          className="absolute -top-6 left-1/2 -translate-x-1/2 w-[560px]"
        />
      )}

      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center py-3 px-4 text-left text-lg hover:bg-gray-100 transition group cursor-pointer"
      >
        <span className={`tofinowide text-[50px] group-hover:text-[#D92630] ${open ? 'text-[#D92630]' : ''}`}>{number}</span>
        <span className="capitalize text-[25px] font-bold group-hover:text-black">{title}</span> 
        {open ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="36" viewBox="0 0 48 36" fill="none">
            <g clipPath="url(#clip0_5555_1170)">
                <path d="M8.33337 0.0727539L47.0462 0.072756L39.4257 35.2663L0.712891 35.2663L8.33337 0.0727539Z" fill="#D92630"/>
                <path d="M32.5075 20.8427L30.427 22.9248L23.6536 16.1515L16.8906 22.9248L14.8086 20.8427L23.6581 11.9918L32.5075 20.8427Z" fill="white"/>
            </g>
            <defs>
                <clipPath id="clip0_5555_1170">
                <rect width="35.339" height="47.1186" fill="white" transform="matrix(-4.37114e-08 1 1 4.37114e-08 0 0)"/>
                </clipPath>
            </defs>
            </svg>          
        ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="36" viewBox="0 0 48 36" fill="none">
            <g clipPath="url(#clip0_5555_1175)">
                <path d="M14.6106 14.4961L16.6912 12.4141L23.4645 19.1874L30.2275 12.4141L32.3096 14.4961L23.4601 23.3471L14.6106 14.4961Z" fill="white"/>
            </g>
            <defs>
                <clipPath id="clip0_5555_1175">
                <rect width="35.339" height="47.1186" fill="white" transform="matrix(0 -1 -1 0 47.1182 35.3389)"/>
                </clipPath>
            </defs>
            </svg>
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pb-4 text-white">{ans}</div>
      </div>
      {open && (
        <img
          src="/images/border-up-faqs.webp"
          alt="Decoración"
          className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[560px]"
        />
      )}
    </div>
  );
};

