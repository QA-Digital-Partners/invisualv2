import { useEffect, useRef, useState } from 'react';

export default function AnimatedLine({classes, children}) {

 const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // para que solo se dispare una vez
        }
      },
      {
        threshold: 0.4, // 20% visible
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
<div className={`relative z-20 lg:w-[681px] h-[332px] overflow-hidden flex flex-wrap ${classes}`}>
  {/* Fondo negro */}
  <div className="absolute inset-0" />

  {/* Wrapper que rota el div */}
  <div
    className="absolute w-full h-full flex items-center justify-center"
    style={{
      transform: 'rotate(16deg)'
    }}
  >
      <svg xmlns="http://www.w3.org/2000/svg" width="560" height="212" viewBox="0 0 560 212" fill="none" style={{transform: 'rotate(-15.3deg)'}} className="mt-[05px] lg:ms-[-150px] ms-[-380px] w-[360px] lg:w-full">
          <path d="M-199.088 0.543211C-135.746 17.5921 -72.4615 34.828 -9.22652 52.2495C54.0219 69.6317 117.22 87.1833 180.409 104.766C243.585 122.405 306.748 140.083 369.866 157.929C432.994 175.733 496.069 193.726 559.092 211.909C495.752 194.866 432.461 177.632 369.228 160.207C305.98 142.824 242.782 125.273 179.592 107.684C116.418 90.0412 53.2553 72.3634 -9.86298 54.5177C-72.9908 36.7135 -136.066 18.7199 -199.092 0.540868L-199.088 0.543211Z" fill="red"/>
      </svg>
    {/* Capa animada que se moverá en la dirección del eje rotado */}
    <div ref={ref} className={`absolute lg:w-[1200px] w-full h-[60px] translate-x-[-200px] ${isVisible ? 'animate-diagonal' : ''}`}
        style={{
          background: 'radial-gradient(27.01% 35.67% at 52.65% 97.17%, #F00 0%, rgba(0,0,0,0) 100%)',
          backgroundBlendMode: 'screen',
          mixBlendMode: 'screen',
        }}
      />
      <svg xmlns="http://www.w3.org/2000/svg" width="560" height="212" viewBox="0 0 560 212" fill="none" style={{transform: 'rotate(-15.3deg)'}} className="mt-[-80px] lg:ms-[-600px] ms-[-380px] w-[360px] lg:w-full">
          <path d="M-199.088 0.543211C-135.746 17.5921 -72.4615 34.828 -9.22652 52.2495C54.0219 69.6317 117.22 87.1833 180.409 104.766C243.585 122.405 306.748 140.083 369.866 157.929C432.994 175.733 496.069 193.726 559.092 211.909C495.752 194.866 432.461 177.632 369.228 160.207C305.98 142.824 242.782 125.273 179.592 107.684C116.418 90.0412 53.2553 72.3634 -9.86298 54.5177C-72.9908 36.7135 -136.066 18.7199 -199.092 0.540868L-199.088 0.543211Z" fill="white"/>
      </svg>
{/*    <div className={`absolute lg:w-[400px] w-full h-[10px] z-10 lg:ms-[-340px] lg:mt-[50px]`}
          style={{
            background: 'linear-gradient(3deg, #F00 -57%, rgba(255, 0, 0, 0.00) 72.14%);',
            backgroundBlendMode: 'screen',
            mixBlendMode: 'screen',
          }}
        /> */} 
  </div>
</div>
  );
}