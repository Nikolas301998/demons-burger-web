import React from 'react';

const BackgroundVideo: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-0 overflow-hidden bg-black">
      
      {/* IMAGEN DE FONDO */}
      <img
        // 👇 AQUÍ ESTÁ LA NUEVA URL
        src="https://xdkqkatsrvlglxehqnvo.supabase.co/storage/v1/object/public/comprimidas/This_is_the_2k_202601182008.jpeg"
        alt="Fondo Demons Burger"
        // Mantenemos la posición anterior por ahora.
        // object-[70%_55%] scale-[1.5] en celular.
        className="w-full h-full object-contain object-[70%_38%] scale-[1.5] md:scale-100 md:object-cover md:object-center opacity-100 transition-transform duration-700"
      />
      
      {/* Capa de sombra */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/20 via-transparent to-black/60" />
      
    </div>
  );
};

export default BackgroundVideo;