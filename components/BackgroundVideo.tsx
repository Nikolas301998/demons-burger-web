import React from 'react';

const BackgroundVideo: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-0 overflow-hidden bg-black">
      <img
        src="/images/products/bg-burger.jpeg"
        alt="Fondo Demons Burger"
        className="w-full h-full object-cover object-center opacity-60 md:opacity-100 transition-opacity duration-700"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/70 via-transparent to-black/90" />
    </div>
  );
};

export default BackgroundVideo;

