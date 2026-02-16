import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Footer from './components/Footer';
import { FloatingCart } from './components/FloatingCart';

function App() {
  // Aquí se guarda el pedido: { "id": cantidad }
  const [cart, setCart] = useState<{ [key: string]: number }>({});

  const addToCart = (id: string) => {
    setCart(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const removeFromCart = (id: string) => {
    setCart(prev => {
      const newCart = { ...prev };
      if (newCart[id] > 1) newCart[id] -= 1;
      else delete newCart[id];
      return newCart;
    });
  };

  return (
    <div className="bg-transparent min-h-screen">
      <Navbar />
      <Hero />
      <Menu cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} />
      <Footer /> 
      {/* El botón flotante que resume todo el pedido */}
      <FloatingCart cart={cart} />
    </div>
  );
}

export default App;
