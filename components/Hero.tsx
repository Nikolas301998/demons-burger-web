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
      
      {/* BLOQUE SUPERIOR: Bajamos los títulos (top-10%) */}
      <div className="absolute top-[10%] left-0 w-full z-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="block text-red-600 font-bold tracking-[0.3em] text-[11px] md:text-xs uppercase mb-2 drop-shadow-[0_0_10px_rgba(220,38,38,0.5)]">
            Dark Kitchen & Delivery
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-white italic tracking-tighter uppercase leading-none drop-shadow-2xl">
            SABOR <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500">BRUTAL</span>
          </h2>
        </motion.div>
      </div>

      {/* BLOQUE INFERIOR: Botones e iconos pegados abajo (bottom-8%) */}
      <div className="absolute bottom-[8%] left-0 w-full z-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="container mx-auto text-center"
        >
          {/* Botones adaptables */}
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center w-full max-w-[300px] md:max-w-xl mx-auto mb-8">
            <GradientButton 
              onClick={handleWhatsapp}
              width="100%"
              className="shadow-[0_0_30px_rgba(220,38,38,0.4)] hover:scale-105 transition-transform"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              PEDIR AHORA
            </GradientButton>

            <GradientButton
              onClick={() => window.open(REVIEW_LINK, '_blank')}
              width="100%"
              className="hue-rotate-[40deg] hover:scale-105 transition-transform"
            >
              <MessageSquarePlus className="w-5 h-5 mr-2" /> 
              DANOS TU OPINIÓN
            </GradientButton>
          </div>

          {/* Iconos de servicio */}
          <div className="grid grid-cols-3 gap-2 w-full max-w-xs md:max-w-md mx-auto border-t border-white/10 pt-6">
            <div className="flex flex-col items-center gap-1">
              <Clock className="w-5 h-5 text-red-500" />
              <span className="text-white/60 text-[10px] uppercase font-bold tracking-widest">30-45 Min</span>
            </div>
            <div className="flex flex-col items-center gap-1 border-x border-white/10">
              <Bike className="w-5 h-5 text-red-500" />
              <span className="text-white/60 text-[10px] uppercase font-bold tracking-widest">Delivery</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Flame className="w-5 h-5 text-red-500" />
              <span className="text-white/60 text-[10px] uppercase font-bold tracking-widest">Caliente</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
