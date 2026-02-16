import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Clock, Flame, Bike, MessageSquarePlus } from 'lucide-react';
import BackgroundVideo from './BackgroundVideo';
import GradientButton from './GradientButton';
import { WHATSAPP_LINK, REVIEW_LINK } from '../constants';

const Hero: React.FC = () => {

  const handleWhatsapp = () => window.open(WHATSAPP_LINK, '_blank');

  return (
    <div className="relative h-screen w-full overflow-hidden flex items-end justify-center pb-12 md:pb-20">
      <BackgroundVideo />
      
      {/* TEXTO SUPERIOR (Solo móvil) */}
      <div className="absolute top-[5%] left-0 w-full flex flex-col items-center justify-center z-10 md:hidden">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center"
        >
          <span className="block text-red-600 font-bold tracking-[0.3em] text-xs uppercase mb-1 drop-shadow-[0_0_10px_rgba(220,38,38,0.8)]">
            Dark Kitchen & Delivery
          </span>
          <h2 className="text-4xl font-black text-white italic tracking-tighter uppercase leading-none drop-shadow-xl">
            SABOR <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400">
              BRUTAL
            </span>
          </h2>
          <div className="w-16 h-1 bg-red-600 mx-auto mt-4 rounded-full shadow-[0_0_15px_rgba(220,38,38,1)]" />
        </motion.div>
      </div>

      {/* CONTENIDO PRINCIPAL */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center w-full max-w-lg mx-auto mb-10">
            
            {/* Botón 1: PEDIR AHORA (Rojo) */}
            <GradientButton 
              onClick={handleWhatsapp}
              width="240px"
              className="brightness-110 shadow-[0_0_25px_rgba(220,38,38,0.7)] hover:scale-105 transition-transform"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              PEDIR AHORA
            </GradientButton>

            {/* Botón 2: DANOS TU OPINIÓN (Naranja) */}
            <GradientButton
              onClick={() => window.open(REVIEW_LINK, '_blank')}
              width="240px"
              className="hue-rotate-[40deg] brightness-110 hover:scale-105 transition-transform"
            >
              <MessageSquarePlus className="w-5 h-5 mr-2" /> 
              DANOS TU OPINIÓN
            </GradientButton>

          </div>

          {/* BARRA DE ICONOS */}
          <div className="grid grid-cols-3 gap-2 w-full max-w-md mx-auto border-t border-white/10 pt-6">
            <div className="flex flex-col items-center justify-center gap-1">
              <Clock className="w-5 h-5 text-red-500" />
              <span className="text-white/60 text-[10px] uppercase font-bold tracking-wider">30-45 Min</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-1 border-x border-white/10">
              <Bike className="w-5 h-5 text-red-500" />
              <span className="text-white/60 text-[10px] uppercase font-bold tracking-wider">Delivery</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-1">
              <Flame className="w-5 h-5 text-red-500" />
              <span className="text-white/60 text-[10px] uppercase font-bold tracking-wider">Caliente</span>
            </div>
          </div>

        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
