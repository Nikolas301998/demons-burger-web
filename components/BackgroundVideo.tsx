import React from 'react';

const BackgroundVideo: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-0 overflow-hidden bg-black">
      <img
        src="/images/products/bg-burger.jpeg"
        alt="Fondo Demons Burger"
        /* HECHO: Cambiamos a scale-[0.8] para reducirla al 80% en móvil.
           Mantenemos md:scale-105 en PC porque ahí se veía bien.
        */
        className="w-full h-full object-cover object-center brightness-110 contrast-125 opacity-90 scale-[0.8] md:scale-105 transition-transform duration-700"
      />
      
      {/* Mantenemos la sombra */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/50 via-transparent to-black/90" />
    </div>
  );
};

export default BackgroundVideo;




