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
      className="bg-zinc-900/50 border border-white/10 rounded-3xl overflow-hidden hover:border-red-600/50 transition-all group"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x300?text=Cargando+Burger...';
          }}
        />
        <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md px-3 py-1 rounded-full border border-red-600/50">
          <span className="text-red-500 font-black">${product.price.toLocaleString()}</span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 italic uppercase tracking-tighter">{product.name}</h3>
        <p className="text-gray-400 text-sm mb-6 line-clamp-2 leading-relaxed">{product.description}</p>

        {quantity === 0 ? (
          <button 
            onClick={onAdd}
            className="w-full bg-white text-black font-black py-4 rounded-xl hover:bg-red-600 hover:text-white transition-all uppercase italic tracking-widest text-sm"
          >
            Agregar al pedido
          </button>
        ) : (
          <div className="flex items-center justify-between w-full bg-red-600 rounded-xl overflow-hidden shadow-lg shadow-red-900/20">
            <button onClick={onRemove} className="px-6 py-4 text-white hover:bg-black/20 font-black text-2xl transition-colors">-</button>
            <span className="text-white font-black text-xl">{quantity}</span>
            <button onClick={onAdd} className="px-6 py-4 text-white hover:bg-black/20 font-black text-2xl transition-colors">+</button>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ProductCard;
