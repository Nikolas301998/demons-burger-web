import React from 'react';

const BackgroundVideo: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-0 overflow-hidden bg-black">
      
      {/* IMAGEN DE FONDO LOCAL */}
      <img
        // Usamos la ruta local que ya verificamos en tu GitHub
        src="/images/products/bg-burger.jpeg"
        alt="Fondo Demons Burger"
        // Cambiamos object-contain por object-cover para que llene toda la pantalla
        className="w-full h-full object-cover object-center opacity-60 md:opacity-100 transition-opacity duration-700"
      />
      
      {/* Capa de sombra para mejorar la lectura de los textos */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/70 via-transparent to-black/90" />
      
    </div>
  );
};

export default BackgroundVideo;

export default BackgroundVideo;
