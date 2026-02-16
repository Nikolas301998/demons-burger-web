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
      
      {/* TÍTULOS: Bajamos la posición a top-[15%] para que respiren */}
      <div className="absolute top-[15%] left-0 w-full z-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="block text-red-600 font-bold tracking-[0.3em] text-[10px] uppercase mb-2">
            Dark Kitchen & Delivery
          </span>
          <h2 className="text-4xl font-black text-white italic tracking-tighter uppercase leading-none drop-shadow-2xl">
            SABOR <span className="text-gray-400">BRUTAL</span>
          </h2>
        </motion.div>
      </div>

      {/* BOTONES: Se mantienen en la parte inferior */}
      <div className="absolute bottom-[10%] left-0 w-full z-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="container mx-auto text-center"
        >
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center w-full max-w-[280px] md:max-w-xl mx-auto mb-8">
            <GradientButton onClick={handleWhatsapp} width="100%">
              <MessageCircle className="w-5 h-5 mr-2" />
              PEDIR AHORA
            </GradientButton>

            <GradientButton onClick={() => window.open(REVIEW_LINK, '_blank')} width="100%" className="hue-rotate-[40deg]">
              <MessageSquarePlus className="w-5 h-5 mr-2" /> 
              DANOS TU OPINIÓN
            </GradientButton>
          </div>

          <div className="grid grid-cols-3 gap-2 w-full max-w-xs mx-auto border-t border-white/10 pt-6">
            <div className="flex flex-col items-center gap-1">
              <Clock className="w-4 h-4 text-red-500" />
              <span className="text-white/60 text-[9px] uppercase font-bold">30-45 Min</span>
            </div>
            <div className="flex flex-col items-center gap-1 border-x border-white/10">
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
