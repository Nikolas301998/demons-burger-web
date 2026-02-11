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
      className="bg-[#0a0a0a] border border-white/5 rounded-[2.5rem] overflow-hidden hover:border-red-600/20 transition-all group flex flex-col h-full shadow-2xl"
    >
      {/* Contenedor de Imagen Estilo Portrait (Vertical como en la foto) */}
      <div className="relative aspect-[3/4] overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        
        {/* Cartel Dorado Arriba (Estilo image_484760.jpg) */}
        <div className="absolute top-5 left-5">
          <span className="bg-[#f2bc1b] text-black text-[11px] font-black px-4 py-2 rounded-xl uppercase tracking-tighter shadow-[0_4px_15px_rgba(242,188,27,0.3)]">
            Mejor Valorado
          </span>
        </div>

        {/* Bloque de Precio Flotante (Limpio, sin doble $) */}
        <div className="absolute bottom-5 left-5 bg-black/70 backdrop-blur-2xl p-4 rounded-[1.5rem] border border-white/10 shadow-2xl">
          <div className="flex flex-col gap-0.5">
            <span className="text-red-500 text-[10px] font-bold uppercase tracking-widest opacity-80">
              Oferta
            </span>
            <span className="text-white text-2xl font-black tracking-tighter tabular-nums">
              ${product.price.toLocaleString()}
            </span>
          </div>
        </div>
      </div>

      {/* Información y Botón */}
      <div className="p-7 flex flex-col flex-grow">
        <h3 className="text-2xl font-black text-white mb-3 italic uppercase tracking-tighter leading-none">
          {product.name}
        </h3>
        <p className="text-gray-500 text-xs mb-8 leading-relaxed line-clamp-2 flex-grow font-medium">
          {product.description}
        </p>

        <div className="mt-auto">
          {quantity === 0 ? (
            <button 
              onClick={onAdd}
              className="w-full bg-white text-black font-black py-4 rounded-2xl hover:bg-red-600 hover:text-white transition-all uppercase italic tracking-widest text-[11px] shadow-lg active:scale-95"
            >
              Agregar al pedido
            </button>
          ) : (
            <div className="flex items-center justify-between w-full bg-red-600 rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(220,38,38,0.3)] border border-red-500">
              <button 
                onClick={onRemove} 
                className="px-6 py-4 text-white hover:bg-black/20 font-black text-2xl transition-all"
              >
                -
              </button>
              <span className="text-white font-black text-xl tabular-nums">
                {quantity}
              </span>
              <button 
                onClick={onAdd} 
                className="px-6 py-4 text-white hover:bg-black/20 font-black text-2xl transition-all"
              >
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
