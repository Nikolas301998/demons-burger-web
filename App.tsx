import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Footer from './components/Footer';
import { ValentineModal } from './components/ValentineModal';
import { FloatingCart } from './components/FloatingCart';

function App() {
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
      <ValentineModal /> 
      <Navbar />
      <Hero />
      <Menu cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} />
      <Footer /> 
      <FloatingCart cart={cart} />
    </div>
  );
}

export default App;
