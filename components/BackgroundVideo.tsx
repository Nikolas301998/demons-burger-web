import React from 'react';

const BackgroundVideo: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-0 overflow-hidden bg-black">
      <img
        src="/images/products/bg-burger.jpeg"
        alt="Fondo Demons Burger"
        /* brightness-110 y contrast-125 hacen que la imagen "explote" visualmente */
        className="w-full h-full object-cover object-center opacity-90 brightness-110 contrast-125 transition-all duration-700"
      />
      
      {/* Capa de sombra suavizada para que no apague la imagen */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/40 via-transparent to-black/80" />
    </div>
  );
};

export default BackgroundVideo;

