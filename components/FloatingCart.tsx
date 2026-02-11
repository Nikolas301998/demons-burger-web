import React from 'react';
import { BURGERS, PROMOS_COMPARTIR, PROMOS_INDIVIDUALES } from '../constants';

interface FloatingCartProps {
  cart: { [key: string]: number };
}

export const FloatingCart: React.FC<FloatingCartProps> = ({ cart }) => {
  const allProducts = [...BURGERS, ...PROMOS_COMPARTIR, ...PROMOS_INDIVIDUALES];
  
  const cartItems = Object.keys(cart).map(id => {
    const product = allProducts.find(p => String(p.id) === String(id));
    if (!product) return null;
    return { ...product, quantity: cart[id] };
  }).filter(item => item !== null) as any[];

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const totalPrice = cartItems.reduce((acc, item) => {
    const priceNum = parseInt(String(item.price).replace(/[^0-9]/g, '')) || 0;
    return acc + (priceNum * item.quantity);
  }, 0);

  if (totalItems === 0) return null;

  const handleSendOrder = () => {
    const phoneNumber = "56952167890";
    
    // USAMOS SOLO TEXTO SEGURO (SIN EMOJIS POR AHORA)
    let message = "Hola Demons Burger!\n";
    message += "Realizo el siguiente pedido:\n\n";
    
    cartItems.forEach(item => {
      // Usamos un guion simple "-" en lugar de puntos especiales
      message += `- ${item.quantity}x ${item.title || item.name} (${item.price})\n`;
    });
    
    message += `\n*TOTAL: $${totalPrice.toLocaleString('es-CL')}*`;
    message += "\n\nMe confirman el pedido? Gracias!";
    
    // Codificación forzada
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-8 left-0 w-full px-4 z-[100] flex justify-center">
      <button 
        onClick={handleSendOrder}
        className="bg-red-600 text-white px-8 py-4 rounded-2xl font-black text-lg shadow-[0_10px_40px_rgba(220,38,38,0.5)] hover:scale-105 active:scale-95 transition-all flex items-center gap-6 border-2 border-white/10"
      >
        <div className="flex items-center gap-3">
          <span className="text-sm italic uppercase tracking-tighter">Hacer Pedido ({totalItems})</span>
        </div>
        <div className="h-8 w-[1px] bg-white/20" />
        <span className="text-xl tabular-nums">$ {totalPrice.toLocaleString('es-CL')}</span>
      </button>
    </div>
  );
};
