import React from 'react';
import { motion } from 'framer-motion';

interface ProductCardProps {
  product: any;
  index: number;
  quantity: number;
  onAdd: () => void;
  onRemove: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, index, quantity, onAdd, onRemove }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-zinc-900/50 border border-white/10 rounded-3xl overflow-hidden hover:border-red-600/50 transition-all group flex flex-col h-full"
    >
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 bg-black/90 backdrop-blur-md px-4 py-1.5 rounded-full border border-red-600/50 shadow-xl">
          <span className="text-red-500 font-black text-lg">${product.price.toLocaleString()}</span>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-black text-white mb-2 italic uppercase tracking-tighter">{product.name}</h3>
        <p className="text-gray-400 text-sm mb-6 line-clamp-3 leading-relaxed flex-grow">{product.description}</p>

        <div className="mt-auto">
          {quantity === 0 ? (
            <button 
              onClick={onAdd}
              className="w-full bg-white text-black font-extrabold py-4 rounded-2xl hover:bg-red-600 hover:text-white transition-all uppercase italic tracking-widest text-xs"
            >
              Agregar al pedido
            </button>
          ) : (
            <div className="flex items-center justify-between w-full bg-red-600 rounded-2xl overflow-hidden shadow-lg shadow-red-900/40">
              <button onClick={onRemove} className="px-6 py-4 text-white hover:bg-black/20 font-black text-2xl transition-colors">-</button>
              <span className="text-white font-black text-xl">{quantity}</span>
              <button onClick={onAdd} className="px-6 py-4 text-white hover:bg-black/20 font-black text-2xl transition-colors">+</button>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
