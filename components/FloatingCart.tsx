import React from 'react';
import { BURGERS, PROMOS_COMPARTIR, PROMOS_INDIVIDUALES } from '../constants';

interface FloatingCartProps {
  cart: { [key: string]: number };
}

export const FloatingCart: React.FC<FloatingCartProps> = ({ cart }) => {
  const allProducts = [...BURGERS, ...PROMOS_COMPARTIR, ...PROMOS_INDIVIDUALES];
  
  const cartItems = Object.keys(cart).map(id => {
    const product = allProducts.find(p => p.id === id);
    return { ...product, quantity: cart[id] };
  }).filter(item => item.id !== undefined);

  const total = cartItems.reduce((acc, item) => acc + (Number(item.price) * (item.quantity || 0)), 0);

  if (cartItems.length === 0) return null;

  const handleSendOrder = () => {
    const base = "https://wa.me/56952167890?text=";
    let message = "¡Hola Demon's Burger! 🔥\nRealizo el siguiente pedido:\n\n";
    
    cartItems.forEach(item => {
      message += `• ${item.quantity}x ${item.name} ($${(Number(item.price) * (item.quantity || 0)).toLocaleString()})\n`;
    });
    
    message += `\n💰 *TOTAL: $${total.toLocaleString()}*`;
    message += `\n\n¿Me confirman el tiempo de espera? 🍔`;
    
    window.open(base + encodeURIComponent(message), '_blank');
  };

  return (
    <div className="fixed bottom-8 left-0 w-full px-4 z-[100] flex justify-center animate-in slide-in-from-bottom-10 duration-500">
      <button 
        onClick={handleSendOrder}
        className="bg-red-600 text-white px-8 py-5 rounded-2xl font-black text-lg shadow-[0_0_50px_rgba(220,38,38,0.5)] hover:scale-105 active:scale-95 transition-all flex items-center gap-6 border-2 border-white/10"
      >
        <div className="flex items-center gap-3">
          <span className="text-2xl animate-pulse">🛒</span>
          <span className="tracking-tighter">PEDIR {cartItems.reduce((a, b) => a + b.quantity, 0)} ITEMS</span>
        </div>
        <div className="h-8 w-[2px] bg-white/20" />
        <span className="text-white font-black text-xl tabular-nums">${total.toLocaleString()}</span>
      </button>
    </div>
  );
};
