'use client';

import { useState, useEffect, useRef } from 'react';
import { reviews } from '../data';

export default function Reviews() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [currentExpanded, setCurrentExpanded] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (activeIndex !== null) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }

    intervalRef.current = setInterval(() => {
      setCurrentExpanded((prev) => (prev + 1) % 3);
    }, 3000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [activeIndex]);

  const handleClick = (index) => {
    setActiveIndex(index);
    setCurrentExpanded(index);
  };

  return (
    <div className="flex flex-row gap-6 w-full">
      {reviews.map((review, i) => (
        <div
          key={i}
          onClick={() => handleClick(i)}
          className={`h-full transition-all duration-700 cursor-pointer flex relative ${
            currentExpanded === i ? 'w-6/12' : 'w-3/12'
          }`}
        >
            <p className={`text-[20px] font-bold absolute z-90 lg:w-[10rem] left-[30px] transition-all duration-700 leading-[24px] ${currentExpanded === i ? 'text-[#1b1b1b] bottom-[197px]' : 'text-white bottom-[30px]'}`}>{review.title}</p>
            <div className='relative z-0 left-0 bg-white w-full min-h-[550px] p-6 content-end'>
                <div className='lg:max-w-[15rem] relative'>
                    <p className='text-[#1b1b1b] text-[14px]' >{review.text}</p>
                </div>
            </div>
            <div className='absolute z-10 right-0 w-full lg:max-w-[315px] min-h-[550px] w-[50%]' style={{
                backgroundImage: `url(${review.img})`,
                backgroundSize: 'cover'
            }}>

            </div>

        </div>
      ))}
    </div>
  );
}
