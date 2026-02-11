
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
  const sections = [
    { title: "Promos para Compartir", data: PROMOS_COMPARTIR },
    { title: "Promos Individuales", data: PROMOS_INDIVIDUALES, icon: "🔥" },
    { title: "Burgers", data: BURGERS, icon: "🍔" }
  ];

  return (
    <section id="menu-section" className="py-20 bg-black min-h-screen relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {sections.map((section, sIdx) => (
          <div key={sIdx} className="mb-20">
            <motion.div className="text-center mb-10 uppercase italic font-black">
              <h2 className="text-4xl md:text-6xl text-white tracking-tighter drop-shadow-lg">
                {section.title} <span className="text-red-600">{section.icon}</span>
              </h2>
            </motion.div>
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
