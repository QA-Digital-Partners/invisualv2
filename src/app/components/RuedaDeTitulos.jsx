
import React, { useState } from "react";

const RuedaDeTitulos = ({ activeIndex }) => {
  const titulos = [
    "Window vinil",
    "Floor Vinil",
    "Banners",
    "Custom Signs",
    "Wall Wraps",
  ];

  const radio = 200;
  const rotation = activeIndex * (360 / titulos.length);

  return (
    <div style={{ width: 500, margin: "0 auto" }}>
      <div
        style={{
          width: 500,
          height: 180,
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <div
          style={{
            width: 500,
            height: 500,
            transition: "transform 0.6s ease",
            transform: `rotate(${rotation}deg)`,
            transformOrigin: "center center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <svg
            viewBox="0 0 500 500"
            xmlns="http://www.w3.org/2000/svg"
            width="500"
            height="500"
          >
            {titulos.map((titulo, index) => {
              const angle = (index * 360) / titulos.length;
              const id = `path-${index}`;
              const startAngle = angle - 36;
              const endAngle = angle + 36;
              const largeArcFlag = endAngle - startAngle <= 180 ? 0 : 1;

              const startX =
                250 + radio * Math.cos(((startAngle - 90) * Math.PI) / 180);
              const startY =
                250 + radio * Math.sin(((startAngle - 90) * Math.PI) / 180);
              const endX =
                250 + radio * Math.cos(((endAngle - 90) * Math.PI) / 180);
              const endY =
                250 + radio * Math.sin(((endAngle - 90) * Math.PI) / 180);

              const d = `M${startX},${startY} A${radio},${radio} 0 ${largeArcFlag},1 ${endX},${endY}`;

              return (
                <React.Fragment key={index}>
                  <path id={id} d={d} fill="none" stroke="none" />
                  <text
                    fill="#000"
                    fontSize="18"
                    fontWeight="500"
                    textAnchor="middle"
                    style={{ pointerEvents: "none" }}
                  >
                    <textPath href={`#${id}`} startOffset="50%" className="titulo-texto">
                      {titulo.trim()}
                    </textPath>
                  </text>
                </React.Fragment>
              );
            })}
          </svg>
        </div>
      </div>
    </div>
  );
};

export default RuedaDeTitulos;




