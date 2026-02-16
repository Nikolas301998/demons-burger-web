import React from 'react';

const BackgroundVideo: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-0 overflow-hidden bg-black">
      <img
        src="/images/products/bg-burger.jpeg"
        alt="Fondo Demons Burger"
        /*
           Volvemos a object-cover para que llene la pantalla.
           Usamos object-center para intentar centrar el nombre.
           Mantenemos el brillo y contraste que te gustó.
        */
        className="w-full h-full object-cover object-center brightness-110 contrast-125 opacity-90 transition-all duration-700"
      />
      
      {/* Sombra sutil */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/30 via-transparent to-black/80" />
    </div>
  );
};

export default BackgroundVideo;


