import React from 'react';

const BackgroundVideo: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-0 overflow-hidden bg-black flex items-center justify-center">
      <img
        src="/images/products/bg-burger.jpeg"
        alt="Fondo Demons Burger"
        /* En móvil (contain) se ajusta al ancho; en PC (cover) llena todo */
        className="w-full h-auto max-h-full object-contain md:object-cover md:h-full brightness-110 contrast-125 opacity-90 transition-all duration-700"
      />
      
      {/* Capa de sombra más sutil para que luzca la marca */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/30 via-transparent to-black/80" />
    </div>
  );
};

export default BackgroundVideo;

