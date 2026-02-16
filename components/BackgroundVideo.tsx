import React from 'react';

const BackgroundVideo: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-0 overflow-hidden bg-black flex items-center justify-center">
      <img
        src="/images/products/bg-burger.jpeg"
        alt="Fondo Demons Burger"
        /* - En móvil: tu configuración ganadora (contain, scale 1.5, 70% 38%).
           - En PC (md:): Cubre toda la pantalla y se centra perfectamente.
        */
        className="w-full h-full object-contain object-[70%_38%] scale-[1.5] md:object-cover md:object-center md:scale-100 opacity-90 brightness-110 contrast-125 transition-all duration-700"
      />
      
      {/* Sombra para que el texto superior e inferior se lea perfecto */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/60 via-transparent to-black/80" />
    </div>
  );
};

export default BackgroundVideo;




