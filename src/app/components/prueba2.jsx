
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useSwipeable } from "react-swipeable"; // Importa react-swipeable

const Carousel3Dv2 = ({ slides }) => {
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4, 5]);

  const handleNext = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 1) % 6
      );
      return updatedIndexes;
    });
  };

  const handleBack = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 5) % 6
      );
      return updatedIndexes;
    });
  };

  const positions = ["center", "left1", "left", "back", "right", "right1"];

  const imageVariants = {
    center: { x: "0%", scale: 1, zIndex: 5, rotateY: "0deg" },
    left1: { x: "-73%", scale: 0.80, zIndex: 3, rotateY: "-50deg" },
    left: { x: "-50%", scale: 0.5, zIndex: 2, rotateY: "-120deg" },
    back: { x: "0%", scale: 0.5, zIndex: 0, rotateY: "-180deg" },
    right: { x: "50%", scale: 0.5, zIndex: 2, rotateY: "120deg" },
    right1: { x: "73%", scale: 0.85, zIndex: 3, rotateY: "50deg" },
  };

  // Configura el manejador de gestos de swipe
  const handlers = useSwipeable({
    onSwipedLeft: () => handleNext(), // Cambiar a la siguiente diapositiva
    onSwipedRight: () => handleBack(), // Volver a la diapositiva anterior
    preventDefaultTouchmoveEvent: true, // Evitar que se haga el desplazamiento estándar
    trackMouse: true, // Habilitar seguimiento del ratón en escritorio
  });

  return (
    <div
      {...handlers} // Agrega los handlers de swipe al contenedor
      className="cursor-grab select-none active:cursor-grabbing flex items-center flex-col justify-center relative perspective-[1500px] lg:min-h-[400px]"
    >
      {slides.map((slide, index) => {
        const isCenter = positions[positionIndexes[index]] === "center"; // Verifica si la imagen está centrada
        return(
        <motion.div
          key={index}
          className="rounded-[12px] bg-cover bg-center relative lg:w-[654px] rounded-2xl lg:h-[350px] p-6 "
          style={{
            position: "absolute",
          }}
          initial={index === 0 ? "center" : positions[positionIndexes[index]]}
          animate={positions[positionIndexes[index]]}
          variants={imageVariants}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <Image
            src={slide.src}
            alt={slide.title}
            layout="fill"
            objectFit="cover"
            className={`absolute z-0 pointer-events-none  ${isCenter ? "grayscale-0" : "grayscale"}`}
          />
          <div className={`w-full h-full left-0 top-0 z-10 absolute transition-all ease-in-out ${isCenter ? 'opacity-100' : 'opacity-0'}`} style={{ background: "linear-gradient(177deg, rgba(0, 0, 0, 0.25) 20.93%, #1B1B1B 97.35%)"}}></div>
          <div className={`z-10 relative mt-24 transition-all ease-in-out ${ isCenter ? 'opacity-100' : 'opacity-0'}`}>
            <div className="lg:min-h-[160px]">
                <h2 className="text-2xl font-bold pointer-events-none select-none">{slide.title}</h2>
                <p className="text-sm mt-2 pointer-events-none select-none">{slide.description}</p>
            </div>
            <a href="#" className="inline-block mt-4 font-bold underline">
              Learn More
            </a>
          </div>
        </motion.div>
        )
})}
      <div className="flex flex-row gap-3 hidden">
        <button
          className="text-white mt-[400px] bg-indigo-400 rounded-md py-2 px-4"
          onClick={handleBack}
        >
          Back
        </button>
        <button
          className="text-white mt-[400px] bg-indigo-400 rounded-md py-2 px-4"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Carousel3Dv2;
