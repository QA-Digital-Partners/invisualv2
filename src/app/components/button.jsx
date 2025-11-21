"use client"
import React, { useEffect, useState, useRef } from 'react';

const ButtonLaid = ({ width, height = 30, buttonText, onClick, disabled = false, link = '#', type = "button", formId, accept = "image/*", buttonColor = '#D92630', textColor = '#fff'}) => {

  const handleClick = (e) => {
    if (disabled) {
      e.preventDefault();
      return;
    }

    if (type === "submit" && formId) {
      e.preventDefault();
      const form = document.getElementById(formId);
      if (form) form.requestSubmit();
    } else if (type === "file") {
      e.preventDefault();
      fileInputRef.current?.click(); // abre el selector
    } else if (onClick) {
      e.preventDefault();
      onClick(e);
    }
  };

  const fileInputRef = useRef();

  const fullWidth = width + 20;

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
      <svg width="0" height="0">
        <defs>
          <clipPath id={clipPathId} clipPathUnits="objectBoundingBox">
            <path d={pathData} />
          </clipPath>
        </defs>
      </svg>
      <div className='flex' style={{
        width: `${fullWidth}px`, 
      }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="30" viewBox="0 0 14 30" fill="none">
          <path d="M6.49592 0L14 1.78814e-06L7.50407 30L0 30L6.49592 0Z" fill={buttonColor}/>
        </svg>
        <a
        role="button"
        onClick={handleClick}
        style={{
            width: `${width}px`,
            height: `${height}px`,
            clipPath: `url(#${clipPathId})`,
            color: `${textColor}`,
            background: `${buttonColor}`
            }} 
        className="flex justify-center items-center font-bold"
        href={link}>
          {type === 'file' && (
            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="22" viewBox="0 0 11 22" fill="none" className='me-2'>
              <g clipPath="url(#clip0_5562_224)">
                <path d="M9.5 5V16.5C9.5 18.71 7.71 20.5 5.5 20.5C3.29 20.5 1.5 18.71 1.5 16.5V4C1.5 2.62 2.62 1.5 4 1.5C5.38 1.5 6.5 2.62 6.5 4V14.5C6.5 15.05 6.05 15.5 5.5 15.5C4.95 15.5 4.5 15.05 4.5 14.5V5H3V14.5C3 15.88 4.12 17 5.5 17C6.88 17 8 15.88 8 14.5V4C8 1.79 6.21 0 4 0C1.79 0 0 1.79 0 4V16.5C0 19.54 2.46 22 5.5 22C8.54 22 11 19.54 11 16.5V5H9.5Z" fill="white"/>
              </g>
              <defs>
                <clipPath id="clip0_5562_224">
                  <rect width="11" height="22" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          )}
          {type === 'instagram' && (
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none" className='me-2'>
              <path d="M7.15803 14.3447C5.2015 14.3447 4.97085 14.3343 4.20733 14.3009C3.61192 14.2814 3.02421 14.1603 2.46952 13.943C1.5098 13.5695 0.750909 12.8104 0.377785 11.8505C0.168855 11.2938 0.0561649 10.7056 0.0445388 10.1111C0 9.34918 0 9.09944 0 7.15803C0 5.19593 0.0103394 4.96687 0.0445388 4.20733C0.0564193 3.61363 0.169105 3.02626 0.377785 2.47031C0.750504 1.50917 1.51062 0.749344 2.4719 0.376989C3.02756 0.167182 3.61508 0.0541976 4.20892 0.0429482C4.96847 0 5.2182 0 7.15803 0C9.13046 0 9.35713 0.0103394 10.1087 0.0429482C10.7041 0.0542949 11.2932 0.167267 11.8505 0.376989C12.8115 0.749766 13.5715 1.50945 13.9446 2.47031C14.1571 3.03436 14.2704 3.63091 14.2795 4.23357C14.324 4.99551 14.324 5.24445 14.324 7.18507C14.324 9.12569 14.3129 9.38019 14.2795 10.1334C14.2676 10.7284 14.1547 11.3172 13.9454 11.8744C13.5713 12.8349 12.8113 13.5943 11.8505 13.9677C11.294 14.1762 10.7061 14.2889 10.1119 14.3009C9.35236 14.3447 9.10342 14.3447 7.15803 14.3447ZM7.13098 1.25902C5.18559 1.25902 4.98358 1.26856 4.22403 1.30276C3.77068 1.30877 3.32171 1.39243 2.89661 1.55011C2.2689 1.79031 1.77219 2.28499 1.52943 2.91173C1.37053 3.34144 1.28686 3.79533 1.28208 4.25346C1.23993 5.02414 1.23993 5.22615 1.23993 7.15803C1.23993 9.06683 1.24709 9.29828 1.28208 10.0642C1.2892 10.5177 1.37283 10.9667 1.52943 11.3924C1.77255 12.0187 2.26917 12.513 2.89661 12.7532C3.32142 12.9119 3.77057 12.9956 4.22403 13.0006C4.99392 13.0451 5.19673 13.0451 7.13098 13.0451C9.08194 13.0451 9.28396 13.0356 10.0371 13.0006C10.4908 12.995 10.9401 12.9114 11.3654 12.7532C11.9893 12.5109 12.4827 12.0178 12.7254 11.394C12.884 10.9639 12.9676 10.5098 12.9727 10.0515H12.9815C13.0157 9.29112 13.0157 9.08831 13.0157 7.1453C13.0157 5.20229 13.0069 4.99789 12.9727 4.23835C12.9656 3.78536 12.882 3.33684 12.7254 2.91173C12.4833 2.28705 11.9897 1.79292 11.3654 1.55011C10.9402 1.39163 10.4908 1.30795 10.0371 1.30276C9.26805 1.25902 9.06683 1.25902 7.13098 1.25902ZM7.15803 10.8317C5.67074 10.8326 4.32935 9.93751 3.75944 8.56375C3.18954 7.18998 3.50338 5.60818 4.5546 4.55605C5.60581 3.50393 7.18734 3.18872 8.5616 3.75743C9.93586 4.32615 10.8322 5.66676 10.8325 7.15405C10.8303 9.183 9.18698 10.8277 7.15803 10.8317ZM7.15803 4.76645C5.84027 4.76645 4.77202 5.8347 4.77202 7.15246C4.77202 8.47021 5.84027 9.53847 7.15803 9.53847C8.47578 9.53847 9.54403 8.47021 9.54403 7.15246C9.54097 5.83597 8.47451 4.76951 7.15803 4.76645ZM10.9756 4.19938C10.5028 4.19762 10.1206 3.81331 10.1214 3.34042C10.1223 2.86753 10.5059 2.48464 10.9788 2.48464C11.4517 2.48464 11.8353 2.86752 11.8362 3.34041C11.8364 3.56856 11.7458 3.78741 11.5843 3.94859C11.4228 4.10977 11.2038 4.20001 10.9756 4.19938Z" fill="white"/>
            </svg>
          )}
          {type === 'youtube' && (
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="12" viewBox="0 0 15 12" fill="none" className='me-2'>
              <path d="M10.667 11.3337H4.00033C2.00033 11.3337 0.666992 10.0003 0.666992 8.00033V4.00033C0.666992 2.00033 2.00033 0.666992 4.00033 0.666992H10.667C12.667 0.666992 14.0003 2.00033 14.0003 4.00033V8.00033C14.0003 10.0003 12.667 11.3337 10.667 11.3337Z" stroke="white" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6.9334 4.33321L8.60006 5.33321C9.20006 5.73321 9.20006 6.33321 8.60006 6.73321L6.9334 7.73321C6.26673 8.13321 5.7334 7.79988 5.7334 7.06654V5.06654C5.7334 4.19988 6.26673 3.93321 6.9334 4.33321Z" stroke="white" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
            {buttonText}
        </a>
        {type === "file" && (
        <input
          type="file"
          name="user_file"
          accept={accept}
          ref={fileInputRef}
          hidden
        />
      )}
      </div>
    </>
  )
};

export default ButtonLaid;

