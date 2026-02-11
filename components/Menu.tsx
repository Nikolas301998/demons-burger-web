
import React from 'react';
import { motion } from 'framer-motion';
import ProductCard from './ProductCard';
import { PROMOS_COMPARTIR, PROMOS_INDIVIDUALES, BURGERS } from '../constants';

const Menu: React.FC = () => {
  return (
    <section id="menu-section" className="py-20 bg-black min-h-screen relative overflow-hidden">
      
      {/* Fondo decorativo sutil */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-900/10 via-black to-black pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">

        {/* =========================================
            SECCIÓN 1: PROMOS PARA COMPARTIR
           ========================================= */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-5xl font-black text-white italic uppercase tracking-tighter drop-shadow-lg">
              PROMOS PARA <span className="text-red-600">COMPARTIR</span> 
            </h2>
            <div className="w-16 h-1 bg-red-600 mx-auto mt-4 rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {PROMOS_COMPARTIR.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>

        {/* =========================================
            SECCIÓN 2: PROMOS INDIVIDUALES
           ========================================= */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-5xl font-black text-white italic uppercase tracking-tighter drop-shadow-lg">
              PROMOS <span className="text-red-600">INDIVIDUALES</span> 🔥
            </h2>
            <p className="text-gray-400 mt-2 font-medium uppercase tracking-widest text-sm">
              Para cuando el hambre es solo tuya
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PROMOS_INDIVIDUALES.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>


        {/* =========================================
            SECCIÓN 3: BURGERS
           ========================================= */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-4xl md:text-6xl font-black text-white italic uppercase tracking-tighter drop-shadow-lg">
              BURGERS <span className="text-red-600">🍔</span>
            </h2>
            <div className="w-24 h-1 bg-white/20 mx-auto mt-4 rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {BURGERS.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Menu;