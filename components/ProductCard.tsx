import React from 'react';
import { motion } from 'framer-motion';

interface ProductCardProps {
  product: any;
  index: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, index }) => {
  const handleOrder = () => {
    const base = "https://wa.me/56952167890?text=";
    const message = `¡Hola Demon's Burger! 🔥 Quiero pedir la: ${product.name}`;
    window.open(base + encodeURIComponent(message), '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-[#0a0a0a] border border-white/5 rounded-[2.5rem] overflow-hidden group flex flex-col h-full shadow-2xl"
    >
      {/* IMAGEN ESTILO PORTRAIT CON PRECIO ENCIMA */}
      <div className="relative aspect-[3/4] overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        
        {/* Cartel Dorado */}
        <div className="absolute top-5 left-5">
          <span className="bg-[#f2bc1b] text-black text-[11px] font-black px-4 py-2 rounded-xl uppercase tracking-tighter">
            Mejor Valorado
          </span>
        </div>

        {/* Precio sobre la foto */}
        <div className="absolute bottom-5 left-5 bg-black/70 backdrop-blur-2xl p-4 rounded-[1.5rem] border border-white/10">
          <span className="text-white text-2xl font-black tracking-tighter">
            ${product.price.toLocaleString()}
          </span>
        </div>
      </div>

      {/* TEXTOS Y BOTÓN */}
      <div className="p-7 flex flex-col flex-grow">
        <h3 className="text-2xl font-black text-white mb-3 italic uppercase tracking-tighter leading-none">
          {product.name}
        </h3>
        <p className="text-gray-500 text-xs mb-8 leading-relaxed line-clamp-2 flex-grow">
          {product.description}
        </p>

        <button 
          onClick={handleOrder}
          className="w-full bg-white text-black font-black py-4 rounded-2xl hover:bg-red-600 hover:text-white transition-all uppercase italic tracking-widest text-[11px]"
        >
          Pedir Ahora
        </button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
