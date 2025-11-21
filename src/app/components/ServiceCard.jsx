import React from "react"

const ServiceCard = ({data, ...props}) => {
  return (
    <>
    <div
      className="w-full h-[400px] bg-cover bg-center flex items-end p-6"
      style={{
        backgroundImage: `url(${data.bgImage})`,
        paddingTop: '150px'
      }}
    >
      <div className="text-left text-white">
        <p style={{ fontSize: '14px' }}>{data.desc}</p>
      </div>
    </div>
    </>
  )
};

export default ServiceCard;
