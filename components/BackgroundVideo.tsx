import React from 'react';

const BackgroundVideo: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-0 overflow-hidden bg-black flex items-center justify-center">
      <img
        src="/images/products/bg-burger.jpeg"
        alt="Fondo Demons Burger"
        /* Recuperamos tu configuración "buena":
           - object-contain: para que no se corte.
           - object-[70%_38%]: para centrar el logo del fondo.
           - scale-[0.65]: un tamaño que deja ver el nombre sin tapar botones.
        */
        className="w-full h-full object-contain object-[70%_38%] scale-[0.65] md:scale-100 md:object-cover md:object-center opacity-90 brightness-110 contrast-125 transition-transform duration-700"
      />
      
      {/* Capa de sombra para que resalten los textos blancos */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/40 via-transparent to-black/80" />
    </div>
  );
};

export default BackgroundVideo;




