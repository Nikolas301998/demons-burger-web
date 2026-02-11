import React, { useState, useEffect } from 'react';

export const ValentineModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState<string | null>(null);

    useEffect(() => {
        const timer = setTimeout(() => setIsOpen(true), 1200);
        return () => clearTimeout(timer);
    }, []);

    const getWhatsAppLink = () => {
        const base = "https://wa.me/56952167890?text="; 
        
        let mensaje = "";
        
        if (selected === 'infernal') {
            mensaje = "Hola Demons Burger! 🔥 Quiero pedir la promo AMOR INFERNAL de $21.990 ❤️";
        } else if (selected === 'anticupido') {
            mensaje = "Hola Demons Burger! 🔥 Quiero pedir la promo ANTI-CUPIDO (3x2) de $16.990 🤘";
        }
        
        // encodeURIComponent se encarga de que internet entienda el mensaje
        // pero WhatsApp lo mostrará limpio al cliente.
        return base + encodeURIComponent(mensaje);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-700">
            
            {/* Contenedor con brillo neón rojo */}
            <div className="relative w-full max-w-md bg-[#050505] border-2 border-red-600 rounded-[2.5rem] overflow-hidden shadow-[0_0_80px_-15px_rgba(220,38,38,1)]">
                
                {/* Resplandor de llamas animado */}
                <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-red-600/20 via-red-600/5 to-transparent animate-pulse pointer-events-none"></div>

                <div className="relative z-10">
                    {/* Título */}
                    <div className="pt-12 pb-6 text-center">
                        <h2 className="text-3xl font-black italic tracking-tighter text-white uppercase drop-shadow-[0_0_10px_rgba(220,38,38,1)]">
                            ESPECIAL 14 DE FEBRERO
                        </h2>
                        <div className="flex justify-center items-center gap-2 mt-2">
                            <span className="text-red-500 animate-bounce">🔥</span>
                            <p className="text-red-500 font-bold text-[10px] tracking-[0.4em] uppercase">
                                ELIGE TU DESTINO
                            </p>
                            <span className="text-red-500 animate-bounce">🔥</span>
                        </div>
                    </div>

                    <div className="px-6 pb-6 space-y-4">
                        
                        {/* PROMO 1: AMOR INFERNAL */}
                        <div 
                            onClick={() => setSelected('infernal')}
                            className={`relative p-5 rounded-2xl border-2 transition-all cursor-pointer ${
                                selected === 'infernal' 
                                ? 'bg-red-950/40 border-red-500 shadow-[0_0_20px_rgba(220,38,38,0.4)]' 
                                : 'bg-white/5 border-white/10 hover:border-red-500/50'
                            }`}
                        >
                            <div className="flex justify-between items-center">
                                <div className="flex-1">
                                    <h3 className="text-xl font-black text-white italic">AMOR INFERNAL ❤️</h3>
                                    <p className="text-slate-400 text-[11px] mt-1 uppercase tracking-wider font-bold">
                                        2 Dobles + Papas Gde. + 2 Bebidas
                                    </p>
                                </div>
                                <span className="text-xl font-black text-red-500">$21.990</span>
                            </div>
                        </div>

                        {/* PROMO 2: ANTI-CUPIDO */}
                        <div 
                            onClick={() => setSelected('anticupido')}
                            className={`relative p-5 rounded-2xl border-2 transition-all cursor-pointer ${
                                selected === 'anticupido' 
                                ? 'bg-orange-950/40 border-orange-500 shadow-[0_0_20px_rgba(249,115,22,0.4)]' 
                                : 'bg-white/5 border-white/10 hover:border-orange-500/50'
                            }`}
                        >
                            <div className="flex justify-between items-center">
                                <div className="flex-1">
                                    <h3 className="text-xl font-black text-white italic">ANTI-CUPIDO 🤘</h3>
                                    <p className="text-slate-400 text-[11px] mt-1 uppercase tracking-wider font-bold">
                                        3 Hamburguesas Clasicas (Pagan 2, comen 3)
                                    </p>
                                </div>
                                <span className="text-xl font-black text-orange-500">$16.990</span>
                            </div>
                        </div>

                        {/* Botones */}
                        <div className="pt-2 space-y-3">
                            <a 
                                href={selected ? getWhatsAppLink() : '#'}
                                target={selected ? "_blank" : "_self"}
                                rel="noopener noreferrer"
                                className={`block w-full text-center py-5 rounded-2xl font-black text-lg transition-all active:scale-95 uppercase ${
                                    selected 
                                    ? 'bg-red-600 text-white shadow-[0_0_25px_rgba(220,38,38,0.6)]' 
                                    : 'bg-slate-800 text-slate-500 grayscale cursor-not-allowed text-sm'
                                }`}
                            >
                                {selected ? '¡LO QUIERO YA! 🍔' : 'SELECCIONA TU PROMO'}
                            </a>

                            <button 
                                onClick={() => setIsOpen(false)}
                                className="block w-full text-center py-3 text-slate-500 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors"
                            >
                                Elegir otra opción de la carta
                            </button>
                        </div>
                    </div>
                </div>

                {/* Brillo inferior */}
                <div className="h-1 w-full bg-gradient-to-r from-transparent via-red-600 to-transparent shadow-[0_-5px_20px_rgba(220,38,38,0.8)]"></div>
            </div>
        </div>
    );
};
