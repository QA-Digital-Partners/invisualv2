"use client";

import { useEffect, useRef, useState } from "react";

export default function GrowNumber({endValue = 10, duration = 2000, classname, ...props}) {
  const [number, setNumber] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          animateCount(0, endValue, duration);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [endValue, duration]);

  const animateCount = (start, end, duration) => {
    let startTime = null;

    // 👇 función de suavizado
    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easedProgress = easeOutCubic(progress); // usar easing
      const value = Math.floor(easedProgress * (end - start) + start);
      setNumber(value);

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  };

  return (
    <div
      ref={ref}
      className={`flex justify-center items-center ${classname}`}
    >
      {number}
    </div>
  );
}
