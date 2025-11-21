
"use client"
import React, { useEffect, useState } from 'react';
import ButtonLaid from './button';

const Header = (props) => {

  const width = 539;
  const height = 54;

   const fullWidth = 539;
  
    const [clipPathId] = useState(`clip-${Math.random().toString(36).substr(2, 9)}`);
    const [pathData, setPathData] = useState('');
  
    useEffect(() => {
      const angleDeg = -12.5; // ← Ángulo negativo
      const angleRad = (Math.abs(angleDeg) * Math.PI) / 180;
      const offsetX = Math.tan(angleRad) * height;
  
      const xOffsetNormalized = offsetX / width;
  
      const path = `
        M ${xOffsetNormalized} 0
        L 0 1
        L ${1 - xOffsetNormalized} 1
        L 1 0
        Z
      `;
      setPathData(path.trim());
    }, [width, height]);
  
  return (
    <>
    <div className="lg:flex container mx-auto lg:max-w-[1200px] lg:pt-12 justify-between z-90 relative hidden">
      <a href='/'>
        <img
          src="/images/LOGOS_INVISUALSIGNS.svg"
          alt="Decoración"
          className="w-[218px]" />
      </a>

      <div className='flex' style={{
        width: `${fullWidth}px`, 
      }}>
        <svg width="0" height="0">
        <defs>
          <clipPath id={clipPathId} clipPathUnits="objectBoundingBox">
            <path d={pathData} />
          </clipPath>
        </defs>
        </svg>
      <div className="bg-[#ffffff4d] content-center "
      style={{
            width: `${width}px`,
            height: `${height}px`,
            clipPath: `url(#${clipPathId})`,
            color: 'white',
            }} >
              <ul className='flex gap-8 justify-center'>
                <li><a href='/'>Home</a></li>
                <li><a href='/vehicle-wrapping-services'>Services</a></li>
                <li><a href='/blog'>Blog</a></li>
                <li><a href='/about'>About Us</a></li>
                <li>Shop</li>
              </ul>
      </div>

    </div>
    <div className='flex items-center gap-1'>
      <img
        src="/images/map-icon.svg"
        alt="Decoración"
        className="w-[41px] inline-block" 
      />
      <ButtonLaid buttonText={'240-664-1629'} link={'tel:2406641629'} width={150} />
    </div>
  </div>
  </>
  )
};

export default Header;
