import React from 'react';
import { Instagram } from 'lucide-react'; // Cambiamos el icono a Instagram
import GradientButton from './GradientButton';
import { INSTAGRAM_LINK } from '../constants'; // Importamos el link desde tus constantes

const Footer: React.FC = () => {
  
  const handleInstagram = () => {
    window.open(INSTAGRAM_LINK, '_blank');
  };

  return (
    <footer className="relative bg-black pt-24 pb-12 border-t border-white/5 overflow-hidden">
      
      {/* Efecto de fondo (Brasas rojas) */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[150%] h-64 bg-red-900/20 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
        
        {/* TITULO */}
        <h2 className="text-4xl md:text-7xl font-black italic uppercase text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600 tracking-tighter mb-4">
          ¿FUE <span className="text-red-600 drop-shadow-[0_0_15px_rgba(220,38,38,0.5)]">BRUTAL?</span>
        </h2>

        {/* Subtítulo ajustado para Instagram */}
        <p className="text-gray-400 text-sm md:text-lg max-w-md mx-auto mb-10 font-medium">
          Etiquetanos en tus historias <br/>
          y sumate a la comunidad más picante.
        </p>

        {/* BOTÓN DE INSTAGRAM */}
        <GradientButton 
          onClick={handleInstagram}
          width="320px"
          height="70px"
          // Mantenemos el resplandor rojo que queda increíble
          className="shadow-[0_0_40px_rgba(220,38,38,0.4)] brightness-110 hover:scale-105 transition-transform"
        >
          <Instagram className="w-6 h-6 mr-2" />
          SEGUINOS EN INSTAGRAM
        </GradientButton>

        {/* COPYRIGHT */}
        <div className="mt-16 pt-8 border-t border-white/10 w-full flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-700 font-bold uppercase tracking-widest">
          <span>© {new Date().getFullYear()} Demon's Burger</span>
          <span>Dark Kitchen & Delivery</span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;