import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Clock, Flame, Bike, MessageSquarePlus } from 'lucide-react';
import BackgroundVideo from './BackgroundVideo';
import GradientButton from './GradientButton';
import { WHATSAPP_LINK, REVIEW_LINK } from '../constants';

const Hero: React.FC = () => {
  const handleWhatsapp = () => window.open(WHATSAPP_LINK, '_blank');

  return (
    <div className="relative h-screen w-full overflow-hidden flex items-end justify-center pb-6 md:pb-16 bg-transparent">
      <BackgroundVideo />
      
      {/* TEXTO SUPERIOR */}
      <div className="absolute top-[3%] left-0 w-full flex flex-col items-center justify-center z-10 md:hidden">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="block text-red-600 font-bold tracking-[0.2em] text-[10px] uppercase mb-1 drop-shadow-lg">
            Dark Kitchen & Delivery
          </span>
          <h2 className="text-3xl font-black text-white italic tracking-tighter uppercase leading-none">
            SABOR <span className="text-gray-400">BRUTAL</span>
          </h2>
        </motion.div>
      </div>

      {/* CONTENIDO PRINCIPAL (Botones y Iconos) */}
      <div className="relative z-10 container mx-auto px-4 text-center mb-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Contenedor de botones: los bajamos para no tapar el centro */}
          <div className="flex flex-col gap-3 justify-center items-center w-full max-w-[280px] mx-auto mb-6 md:flex-row md:max-w-lg md:gap-6">
            <GradientButton 
              onClick={handleWhatsapp}
              width="100%"
              className="shadow-[0_0_20px_rgba(220,38,38,0.5)] active:scale-95"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              PEDIR AHORA
            </GradientButton>

            <GradientButton
              onClick={() => window.open(REVIEW_LINK, '_blank')}
              width="100%"
              className="hue-rotate-[40deg] active:scale-95"
            >
              <MessageSquarePlus className="w-5 h-5 mr-2" /> 
              DANOS TU OPINIÓN
            </GradientButton>
          </div>

          {/* BARRA DE ICONOS */}
          <div className="grid grid-cols-3 gap-1 w-full max-w-xs mx-auto border-t border-white/10 pt-4">
            <div className="flex flex-col items-center">
              <Clock className="w-4 h-4 text-red-500 mb-1" />
              <span className="text-white/70 text-[9px] uppercase font-bold">30-45 Min</span>
            </div>
            <div className="flex flex-col items-center border-x border-white/10">
              <Bike className="w-4 h-4 text-red-500 mb-1" />
              <span className="text-white/70 text-[9px] uppercase font-bold">Delivery</span>
            </div>
            <div className="flex flex-col items-center">
              <Flame className="w-4 h-4 text-red-500 mb-1" />
              <span className="text-white/70 text-[9px] uppercase font-bold">Caliente</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
