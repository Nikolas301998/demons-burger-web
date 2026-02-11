
import React from 'react';
import { motion } from 'framer-motion';
import ProductCard from './ProductCard';
import { PROMOS_COMPARTIR, PROMOS_INDIVIDUALES, BURGERS } from '../constants';

const Menu: React.FC = () => {
  return (
    <section id="menu-section" className="py-20 bg-black min-h-screen relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        
        {/* SECCIÓN BURGERS */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-6xl font-black text-white italic uppercase tracking-tighter">
              NUESTRAS <span className="text-red-600">BURGERS</span> 🍔
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {BURGERS.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>

        {/* Puedes repetir el mismo bloque para PROMOS_COMPARTIR y PROMOS_INDIVIDUALES si quieres mostrarlos todos */}
      </div>
    </section>
  );
};

export default Menu;
