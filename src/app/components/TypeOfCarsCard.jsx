import Image from "next/image";
import React from "react"

const CarTypeCard = ({title, src, alt, bgData, className, ...props}) => {
  return (
    <>
    <div className="justify-center flex flex-wrap" key={title}>
      <p className="text-center font-black italic text-[50px]">{title}</p>
      <div className="flex">
        {bgData.map((data, index) => {
          return(
            <Image           
              src={`/images/${data.src}`}
              alt={data.alt}
              sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
              srcSet={`/images/${data.src} 768w, /images/${data.src} 1024w`}
              width={277}
              height={425}
              className={` ${data.className}`}/>
          )
        })}
      </div>
      <Image 
        src={`/images/${src}`}
        alt={alt}
        sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
        srcSet={`/images/${src} 768w, /images/${src} 1024w`}
        width={748}
        height={622}
        className={`${className}`} 
        />

    </div>
    </>
  )
};

export default CarTypeCard;
