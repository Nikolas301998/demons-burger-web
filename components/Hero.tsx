import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Clock, Flame, Bike, MessageSquarePlus } from 'lucide-react';
import BackgroundVideo from './BackgroundVideo';
import GradientButton from './GradientButton';
import { WHATSAPP_LINK, REVIEW_LINK } from '../constants';

const Hero: React.FC = () => {
  const handleWhatsapp = () => window.open(WHATSAPP_LINK, '_blank');

  return (
    <div className="relative h-screen w-full overflow-hidden bg-transparent">
      <BackgroundVideo />
      
      {/* TÍTULOS: Los enviamos al tope de la pantalla */}
      <div className="absolute top-[5%] md:top-[8%] left-0 w-full z-20 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="block text-red-600 font-bold tracking-[0.3em] text-[10px] md:text-xs uppercase mb-1">
            Dark Kitchen & Delivery
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-white italic tracking-tighter uppercase leading-none drop-shadow-2xl">
            SABOR <span className="text-gray-400">BRUTAL</span>
          </h2>
          <div className="w-16 h-1 bg-red-600 mx-auto mt-4 rounded-full md:hidden" />
        </motion.div>
      </div>

      {/* BOTONES E ICONOS: Los enviamos al fondo de la pantalla */}
      <div className="absolute bottom-[8%] md:bottom-[10%] left-0 w-full z-20 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center w-full max-w-[280px] md:max-w-xl mx-auto mb-8">
            <GradientButton onClick={handleWhatsapp} width="100%" className="shadow-[0_0_20px_rgba(220,38,38,0.4)]">
              <MessageCircle className="w-5 h-5 mr-2" />
              PEDIR AHORA
            </GradientButton>

            <GradientButton onClick={() => window.open(REVIEW_LINK, '_blank')} width="100%" className="hue-rotate-[40deg]">
              <MessageSquarePlus className="w-5 h-5 mr-2" /> 
              DANOS TU OPINIÓN
            </GradientButton>
          </div>

          <div className="grid grid-cols-3 gap-2 w-full max-w-xs md:max-w-md mx-auto border-t border-white/10 pt-6">
            <div className="flex flex-col items-center gap-1">
              <Clock className="w-4 h-4 text-red-500" />
              <span className="text-white/60 text-[9px] uppercase font-bold">30-45 Min</span>
            </div>
            <div className="flex flex-col items-center border-x border-white/10 gap-1">
              <Bike className="w-4 h-4 text-red-500" />
              <span className="text-white/60 text-[9px] uppercase font-bold">Delivery</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Flame className="w-4 h-4 text-red-500" />
              <span className="text-white/60 text-[9px] uppercase font-bold">Caliente</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
