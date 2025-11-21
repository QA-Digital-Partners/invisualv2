import React, { useMemo, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Keyboard, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

export default function CarouselWithThumbDots({
  imagesLarge = [],
  imagesThumbs = [], // opcional: miniaturas para los dots
  autoMs = 3000,
}) {
  const len = Math.min(
    imagesLarge.length,
    imagesThumbs.length > 0 ? imagesThumbs.length : imagesLarge.length
  );

  const safeLarge = useMemo(() => imagesLarge.slice(0, len), [imagesLarge, len]);
  const safeThumbs = useMemo(
    () => (imagesThumbs.length ? imagesThumbs.slice(0, len) : safeLarge),
    [imagesThumbs, safeLarge, len]
  );

  const mainRef = useRef(null);
  const paginationRef = useRef(null);

  if (len === 0) {
    return (
      <div className="w-full rounded-lg border border-gray-200 p-6 text-center text-gray-500">
        Sin imágenes para mostrar.
      </div>
    );
  }

  const handleMouseEnter = () => {
    if (mainRef.current?.swiper?.autoplay) mainRef.current.swiper.autoplay.stop();
  };
  const handleMouseLeave = () => {
    if (mainRef.current?.swiper?.autoplay) mainRef.current.swiper.autoplay.start();
  };

  return (
    <div
      className="mx-auto w-full max-w-5xl select-none"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      aria-roledescription="carousel"
    >
      {/* Carrusel principal */}
      <div className="relative w-full overflow-hidden rounded-xl">
        <Swiper
          ref={mainRef}
          modules={[Pagination, Autoplay, Keyboard, A11y]}
          className="h-[48vh] md:h-[56vh]"
          slidesPerView={1}
          loop={len > 1}
          keyboard={{ enabled: true, onlyInViewport: true }}
          autoplay={{
            delay: autoMs,
            disableOnInteraction: false,
            pauseOnMouseEnter: false, // pausamos con el contenedor
          }}
          speed={400}
          a11y={{ enabled: true }}
          pagination={{
            el: paginationRef.current,
            clickable: true,
            dynamicBullets: true,
            renderBullet: (index, className) => {
              const src = safeThumbs[index] || "";
              const bgi = src ? `background-image:url('${encodeURI(src)}')` : "";
              // Botón con background-image y estilos inline básicos
              return `
                <button
                  class="${className} my-bullet-thumb"
                  aria-label="Ir al slide ${index + 1}"
                  title="Slide ${index + 1}"
                  style="${bgi}; background-size:cover; background-position:center;"
                ></button>`;
            },
          }}
          onBeforeInit={(swiper) => {
            // asegura el contenedor de paginación antes del init
            swiper.params.pagination.el = paginationRef.current;
          }}
          observer
          observeParents
        >
          {safeLarge.map((src, i) => (
            <SwiperSlide key={`lg-${i}`} className="rounded-xl">
              <img
                src={src}
                alt={`Imagen grande ${i + 1} de ${len}`}
                className="h-full w-full object-cover"
                draggable={false}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Dots con miniaturas */}
      <div className="mt-4 flex justify-center">
        <div
          ref={paginationRef}
          className="flex items-center gap-2 rounded-full bg-black/5 px-3 py-2"
        />
      </div>

    </div>
  );
}




{/************************************************************************************************* 

export default function CarouselCorrelativo({ 
  imagesLarge = [], 
  imagesThumbs = [], 
  autoMs = 3000, 
  thumbWidth = 120, // ancho de cada miniatura
 }) { 
  const len = Math.max(0, Math.min(imagesLarge.length, imagesThumbs.length)); 
  const [index, setIndex] = useState(0); 
  const hoverRef = useRef(false); 
  const safeLarge = useMemo(() => imagesLarge.slice(0, len), [imagesLarge, len]); 
  const safeThumbs = useMemo(() => imagesThumbs.slice(0, len), [imagesThumbs, len]); 
  
  const extendedThumbs = useMemo(() => { if (len === 0) return []; return [safeThumbs[len - 1], ...safeThumbs, safeThumbs[0]]; }, [safeThumbs, len]); 
  
  useEffect(() => { 
    if (len === 0) return; 
    const id = setInterval(() => { 
      if (!hoverRef.current) { 
        setIndex((i) => (i + 1) % len);
       } 
      }, autoMs); 
      return () => clearInterval(id); 
    }, [autoMs, len]); 
    // viewport: 3 miniaturas + media a cada lado = 4 * thumbWidth 
    
    const railViewportW = thumbWidth * 4; 
    const activeInExtended = index + 1; 
    const translateX = -(activeInExtended - 1.5) * thumbWidth; 
    const goTo = (i) => { 
      if (len === 0) 
        return; 
      const n = ((i % len) + len) % len; 
      setIndex(n); }; 
      if (len === 0) 
      { return ( 
      <div className="w-full rounded-lg border border-gray-200 p-6 text-center text-gray-500"> Sin imágenes para mostrar. </div> 
      );
    } 
  return ( 
  <div className="flex mx-auto w-full max-w-5xl select-none" 
    onMouseEnter={() => (hoverRef.current = true)} 
    onMouseLeave={() => (hoverRef.current = false)} 
    aria-roledescription="carousel" 
  > 

  {/* Imagen grande  
  <div className="relative w-full overflow-hidden rounded-xl"> 
    <img 
      key={index} 
      src={safeLarge[index]} 
      alt={`Imagen grande ${index + 1} de ${len}`} 
      className="h-[48vh] w-full object-cover transition-opacity duration-300 md:h-[56vh]" />
  </div> 
  
  {/* Miniaturas horizontales  

  <div className="relative mx-auto mt-4 overflow-hidden rounded-xl border" style={{ width: railViewportW }} >


  {/* Gradientes laterales 
     <div className="pointer-events-none absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-[#1d1d1d] to-transparent z-90" />
     <div className="pointer-events-none absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-[#1d1d1d] to-transparent z-90" />
     
     <ul 
      className="flex will-change-transform" 
      style={{ 
        transform: `translateX(${translateX}px)`, 
        transition: "transform 400ms ease" 
        }} 
      >
      {extendedThumbs.map((src, i) => { 
        let real = i - 1; 
        if (real < 0) real = len - 1; 
        if (real >= len) real = 0; 
        const isActive = real === index; 
        
        return ( 
        <li key={`${src}-${i}`} className="flex items-center justify-center" style={{ width: thumbWidth }}> 
          <button 
          type="button" 
          onClick={() => goTo(real)} 
          className={ "group relative block h-[calc(100%-8px)] w-[calc(100%-16px)] overflow-hidden rounded-lg border transition " + 
            (isActive ? "border-black/60 ring-2 ring-black/20" : "border-gray-200 hover:border-gray-300") } > 
            
            <img src={src} alt={`Miniatura ${real + 1}`} className={ "h-full w-full object-cover transition " + 
            (isActive ? "scale-[1.02]" : "opacity-80 group-hover:opacity-100") } /> 
            
            {!isActive && <span className="pointer-events-none absolute inset-0 bg-black/0 transition group-hover:bg-black/5" />} 
          </button>
        </li> ); })}
      </ul> 
    </div> 
  </div> 
  ); }

  */}