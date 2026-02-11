
import React from 'react';
import { motion } from 'framer-motion';
import ProductCard from './ProductCard';
import { PROMOS_COMPARTIR, PROMOS_INDIVIDUALES, BURGERS } from '../constants';

interface MenuProps {
  cart: { [key: string]: number };
  addToCart: (id: string) => void;
  removeFromCart: (id: string) => void;
}

const Menu: React.FC<MenuProps> = ({ cart, addToCart, removeFromCart }) => {
  return (
    <section id="menu-section" className="py-20 bg-black min-h-screen relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-900/10 via-black to-black pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {[
          { title: "PROMOS PARA COMPARTIR", data: PROMOS_COMPARTIR },
          { title: "PROMOS INDIVIDUALES 🔥", data: PROMOS_INDIVIDUALES },
          { title: "BURGERS 🍔", data: BURGERS }
        ].map((section, idx) => (
          <div key={idx} className="mb-20">
            <motion.h2 className="text-3xl md:text-5xl font-black text-white italic uppercase text-center mb-10 tracking-tighter drop-shadow-lg">
              {section.title}
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {section.data.map((product, index) => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  index={index}
                  quantity={cart[product.id] || 0}
                  onAdd={() => addToCart(product.id)}
                  onRemove={() => removeFromCart(product.id)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
