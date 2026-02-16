import React from 'react';

const BackgroundVideo: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-0 overflow-hidden bg-black flex items-center justify-center">
      <img
        src="/images/products/bg-burger.jpeg"
        alt="Fondo Demons Burger"
        /* MÓVIL: Se mantiene tu configuración perfecta. 
           PC (md:): Ajustamos escala a 0.7 para que respire en el centro. */
        className="w-full h-full object-contain object-[70%_38%] scale-[1.5] md:object-contain md:object-center md:scale-[0.7] opacity-90 brightness-110 contrast-125 transition-all duration-700"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/60 via-transparent to-black/80" />
    </div>
  );
};

export default BackgroundVideo;





