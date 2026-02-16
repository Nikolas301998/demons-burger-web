import React from 'react';

const BackgroundVideo: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-0 overflow-hidden bg-black flex items-center justify-center">
      <img
        src="/images/products/bg-burger.jpeg"
        alt="Fondo Demons Burger"
        /* MÓVIL: Mantenemos tu configuración exacta (70% 38% y scale 1.5).
           PC (md:): Usamos object-center y scale-[0.8] para que el logo se vea 
           más chico y elegante en el centro de la pantalla.
        */
        className="w-full h-full object-contain object-[70%_38%] scale-[1.5] md:object-contain md:object-center md:scale-[0.8] opacity-90 brightness-110 contrast-125 transition-all duration-700"
      />
      
      {/* Sombra para mejorar legibilidad */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/60 via-transparent to-black/80" />
    </div>
  );
};

export default BackgroundVideo;






