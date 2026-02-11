import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Plus, Minus } from 'lucide-react';

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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative bg-[#0a0a0a] overflow-hidden rounded-xl border border-white/5 flex flex-col h-full hover:border-red-600/30 transition-all"
    >
      <div className="relative overflow-hidden aspect-square">
        <img 
          src={product.image} 
          alt={product.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
        
        {product.badgeText && (
          <div className="absolute top-3 left-3 z-20 bg-yellow-500 text-black text-[11px] font-black px-3 py-1.5 rounded-full shadow-[0_0_15px_rgba(234,179,8,0.6)] flex items-center gap-1 tracking-wide uppercase">
             {product.badgeText.includes('PEDIDO') && <Flame className="w-3 h-3 fill-black" />}
             {product.badgeText}
          </div>
        )}
        
        <div className="absolute bottom-4 left-4 flex flex-col items-start bg-black/60 backdrop-blur-md px-3 py-2 rounded-lg border border-white/10">
          {product.oldPrice && (
            <span className="text-xs text-red-500 font-bold line-through mb-0.5 opacity-80">
              App: {product.oldPrice}
            </span>
          )}
          <span className="text-2xl font-black text-white leading-none shadow-black drop-shadow-md">
            {product.price}
          </span>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-red-500 transition-colors uppercase leading-tight">
          {product.title}
        </h3>
        <p className="text-white/60 text-sm flex-grow leading-relaxed mb-6">
          {product.description}
        </p>

        <div className="mt-auto">
          {quantity === 0 ? (
            <button 
              onClick={onAdd}
              className="w-full bg-white text-black font-black py-3 rounded-lg hover:bg-red-600 hover:text-white transition-all uppercase text-xs tracking-widest italic"
            >
              Agregar al pedido
            </button>
          ) : (
            <div className="flex items-center justify-between w-full bg-zinc-900 border border-red-600/50 rounded-lg overflow-hidden">
              <button onClick={onRemove} className="p-3 text-red-500 hover:bg-red-600/10 transition-colors">
                <Minus className="w-5 h-5" />
              </button>
              <span className="text-white font-black text-lg">{quantity}</span>
              <button onClick={onAdd} className="p-3 text-red-500 hover:bg-red-600/10 transition-colors">
                <Plus className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
