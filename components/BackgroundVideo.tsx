import React from 'react';

const BackgroundVideo: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-0 overflow-hidden bg-black">
      <img
        src="/images/products/bg-burger.jpeg"
        alt="Fondo Demons Burger"
        /* scale-125 en móvil lo hace ver más grande. 
           md:scale-110 en PC para que también resalte.
        */
        className="w-full h-full object-cover object-center brightness-110 contrast-125 opacity-90 scale-125 md:scale-110 transition-transform duration-700"
      />
      
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/50 via-transparent to-black/90" />
    </div>
  );
};

export default BackgroundVideo;


