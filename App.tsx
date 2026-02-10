import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Footer from './components/Footer';
import { ValentineModal } from './components/ValentineModal'; // <--- IMPORTANTE

function App() {
  return (
    <div className="bg-black min-h-screen">
      <ValentineModal /> 
      <Navbar />
      <Hero />
      <Menu />
      <Footer /> 
    </div>
  );
}

export default App;