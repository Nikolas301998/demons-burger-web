import React from 'react';

const BackgroundVideo: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-0 overflow-hidden bg-black">
      
      {/* IMAGEN DE FONDO RESTAURADA */}
      <img
        src="/images/products/bg-burger.jpeg"
        alt="Fondo Demons Burger"
        /* Restauramos tu configuración original:
           - object-contain para no perder calidad.
           - Posición 70% 38% para centrar el nombre.
           - scale 1.5 para que llene bien el espacio.
        */
        className="w-full h-full object-contain object-[70%_38%] scale-[1.5] md:scale-100 md:object-cover md:object-center opacity-100 transition-transform duration-700"
      />
      
      {/* Capa de sombra original */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/20 via-transparent to-black/60" />
      
    </div>
  );
};

export default BackgroundVideo;




