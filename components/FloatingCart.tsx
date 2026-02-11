import React from 'react';
import { BURGERS, PROMOS_COMPARTIR, PROMOS_INDIVIDUALES } from '../constants';

export const FloatingCart = ({ cart }: { cart: { [key: string]: number } }) => {
  const allProducts = [...BURGERS, ...PROMOS_COMPARTIR, ...PROMOS_INDIVIDUALES];
  
  const cartItems = Object.keys(cart).map(id => {
    const product = allProducts.find(p => p.id === id);
    return { ...product, quantity: cart[id] };
  }).filter(item => item.id !== undefined);

  const total = cartItems.reduce((acc, item) => acc + (item.price * (item.quantity || 0)), 0);

  if (cartItems.length === 0) return null;

  const handleSendOrder = () => {
    const base = "https://wa.me/56952167890?text=";
    let message = "¡Hola Demon's Burger! 🔥\nRealizo el siguiente pedido:\n\n";
    
    cartItems.forEach(item => {
      message += `• ${item.quantity}x ${item.name} ($${(item.price * (item.quantity || 0)).toLocaleString()})\n`;
    });
    
    message += `\n💰 *TOTAL: $${total.toLocaleString()}*`;
    message += "\n\n¿Me confirman el tiempo de espera? 🍔";
    
    window.open(base + encodeURIComponent(message), '_blank');
  };

  return (
    <div className="fixed bottom-8 left-0 w-full px-4 z-[100] flex justify-center">
      <button 
        onClick={handleSendOrder}
        className="bg-red-600 text-white px-8 py-5 rounded-2xl font-black text-lg shadow-[0_0_50px_rgba(220,38,38,0.5)] hover:scale-105 active:scale-95 transition-all flex items-center gap-6 border-2 border-white/10"
      >
        <span>🛒 PEDIR {cartItems.reduce((a, b) => a + b.quantity, 0)} ITEMS</span>
        <div className="h-8 w-[2px] bg-white/20" />
        <span>${total.toLocaleString()}</span>
      </button>
    </div>
  );
};
