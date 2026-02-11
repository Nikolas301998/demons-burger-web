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
      className="bg-[#0a0a0a] border border-white/5 rounded-[2rem] overflow-hidden hover:border-red-600/30 transition-all group flex flex-col h-full"
    >
      {/* Contenedor de Imagen con Estilo Premium */}
      <div className="relative aspect-[4/5] overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        
        {/* Cartel Dorado Arriba (Solo si es destacado) */}
        <div className="absolute top-4 left-4">
          <span className="bg-[#f2bc1b] text-black text-[10px] font-black px-3 py-1.5 rounded-lg uppercase tracking-tighter shadow-lg">
            Mejor Valorado
          </span>
        </div>

        {/* Bloque de Precio Abajo a la Izquierda (Estilo Foto) */}
        <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-xl p-3 rounded-2xl border border-white/10 shadow-2xl">
          <div className="flex flex-col">
            <span className="text-red-500 text-[10px] font-bold leading-none mb-1">
              Antes: ${(product.price * 1.2).toLocaleString()}
            </span>
            <span className="text-white text-2xl font-black leading-none tracking-tighter">
              ${product.price.toLocaleString()}
            </span>
          </div>
        </div>
      </div>

      {/* Textos y Botón */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-black text-white mb-2 italic uppercase tracking-tighter">
          {product.name}
        </h3>
        <p className="text-gray-500 text-xs mb-6 leading-relaxed line-clamp-2 flex-grow font-medium">
          {product.description}
        </p>

        <div className="mt-auto">
          {quantity === 0 ? (
            <button 
              onClick={onAdd}
              className="w-full bg-[#111111] text-white border border-white/10 font-black py-4 rounded-2xl hover:bg-red-600 hover:border-red-600 transition-all uppercase italic tracking-widest text-[10px]"
            >
              Agregar al pedido
            </button>
          ) : (
            <div className="flex items-center justify-between w-full bg-red-600 rounded-2xl overflow-hidden shadow-[0_10px_20px_rgba(220,38,38,0.3)]">
              <button onClick={onRemove} className="px-6 py-4 text-white hover:bg-black/20 font-black text-2xl transition-colors">-</button>
              <span className="text-white font-black text-xl tabular-nums">{quantity}</span>
              <button onClick={onAdd} className="px-6 py-4 text-white hover:bg-black/20 font-black text-2xl transition-colors">+</button>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
