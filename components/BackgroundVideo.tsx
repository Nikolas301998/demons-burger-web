import React from 'react';

const BackgroundVideo: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-0 overflow-hidden bg-black">
      <img
        src="/images/products/bg-burger.jpeg"
        alt="Fondo Demons Burger"
        /* Bajamos el scale de 125 a 110 para achicarla un poco más en móvil */
        /* En PC lo dejamos en 105 para mantener la armonía */
        className="w-full h-full object-cover object-center brightness-110 contrast-125 opacity-90 scale-110 md:scale-105 transition-transform duration-700"
      />
      
      {/* Mantenemos el degradado para que los textos sigan siendo legibles */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/50 via-transparent to-black/90" />
    </div>
  );
};

export default BackgroundVideo;



