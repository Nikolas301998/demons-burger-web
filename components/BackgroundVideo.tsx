import React from 'react';

const BackgroundVideo: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-0 overflow-hidden bg-black">
      
      {/* IMAGEN DE FONDO MULTIDISPOSITIVO */}
      <img
        src="/images/products/bg-burger.jpeg"
        alt="Fondo Demons Burger"
        /* EXPLICACIÓN DE LOS CAMBIOS:
           - Móvil (default): Se mantiene igual (contain, 70% 38%, scale 1.5).
           - PC/Tablet (md:): 
             * md:object-cover: Llena toda la pantalla ancha.
             * md:object-[70%_38%]: Usa LA MISMA posición de enfoque que el móvil.
             * md:scale-110: Un ligero zoom para dar impacto sin pasarse.
        */
        className="w-full h-full object-contain object-[70%_38%] scale-[1.5] md:object-cover md:object-[70%_38%] md:scale-110 opacity-100 transition-transform duration-700"
      />
      
      {/* Capa de sombra */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/20 via-transparent to-black/60" />
      
    </div>
  );
};

export default BackgroundVideo;




