// --- IMAGENES REALES DE SUPABASE ---
const IMG_BIG_MOM = "/images/products/big-mom-papas.jpg";
const IMG_CLASICA_PREMIUM= "/images/products/clasica-premium.jpg";
const IMG_DOBLE_CHEESE = "/images/products/doble-chesee.jpg";
const IMG_GREEN = "/images/products/green.jpg";
const IMG_SRIRACHA = "/images/products/picante.jpg";
const IMG_DUO = "/images/products/duo.jpg";
const IMG_DUO2 = "/images/products/duo-perfecto.jpg";
const IMG_TRIO = "/images/products/tri.jpg";
const IMG_CLASICA= "/images/products/clasica-papas.jpg";
const IMG_SINGLE = "/images/products/chese-simple.jpg";
const IMG_PAPAS = "/images/products/papas-fritas.jpg";
const IMG_LATA = "/images/products/lata.jpeg";
const IMG_MOLLIE = "/images/products/molie.jpg";
const IMG_BABY = "/images/products/babyy.jpg";

export const NAV_ITEMS = [
  { label: 'Inicio', href: '#' },
  { label: 'Carta', href: '#menu-section' },
  { label: 'Nosotros', href: '#about' },
  { label: 'Contacto', href: '#footer' },
];

// 1. PROMOS PARA COMPARTIR
export const PROMOS_COMPARTIR = [
  {
    id: 201,
    title: "PACK PAREJA (Para 2)",
    price: "$16.990", // 🔥 BAJÓ (Antes 18.990)
    oldPrice: "$22.500",
    description: "1 Double Cheese + 1 Clásica Premium + 2 papas + 2 Bebidas.",
    image: IMG_DUO,
    category: "PACK COMPARTIR",
    badgeText: "MEJOR VALORADO"
  },
  {
    id: 203,
    title: "PACK DUO PERFECTO",
    price: "$19.990", // 🔥 BAJÓ (Antes 23.990 - ¡GANCHO!)
    oldPrice: "$28.000",
    description: "2 Hamburguesas Dobles + 2 Papas Fritas + 2 Bebidas.",
    image: IMG_DUO2,
    category: "PACK AHORRO"
  },
  {
    id: 204,
    title: "TRIO SALVADOR",
    price: "$24.990", // 🔥 BAJÓ (Antes 25.990)
    oldPrice: "$31.000",
    description: "3 Cheese Burgers + 3 papas + 3 Bebidas.",
    image: IMG_TRIO,
    category: "PACK GRUPAL"
  }
];

// 2. PROMOS INDIVIDUALES
export const PROMOS_INDIVIDUALES = [
  {
    id: 2,
    title: "COMBO EL JEFE (BIG MOM)",
    price: "$10.990", // 🔥 BAJÓ (Antes 11.490)
    oldPrice: "$13.500",
    description: "Doble carne, doble sabor, queso cheddar y tocino + Papas Fritas + BEBIDA.",
    image: IMG_BIG_MOM,
    category: "Best Seller",
    badgeText: "#1 FAVORITA"
  },
  {
    id: 1,
    title: "COMBO SIRACHA INFIERNO",
    price: "$9.990", // 🔥 BAJÓ (Antes 10.490)
    oldPrice: "$12.500",
    description: "Doble Carne, Doble Queso, Tocino, Jalapeños y Salsa Siracha Picante + Papas + BEBIDA.",
    image: IMG_SRIRACHA, 
    category: "Premium Spicy",
    badgeText: "RECOMENDADO"
  }
];

// 3. BURGERS
export const BURGERS = [
  {
    id: 1,
    title: "LA BIG MOM",
    price: "$9.990", // 🔥 BAJÓ (Antes 10.990)
    oldPrice: "$12.500",
    description: "Doble carne de 120 gm, doble cheddar, doble tocino y salsa Demon's.",
    image: IMG_BIG_MOM,
    category: "Burger",
    badgeText: "LA JEFA"
  },
  {
    id: 11,
    title: "DOBLE CHEESE",
    price: "$7.990", // 🔥 BAJÓ (Antes 8.500)
    oldPrice: "$9.500",
    description: "Doble carne, doble queso cheddar y salsa Demon's.",
    image: IMG_DOBLE_CHEESE,
    category: "Burger"
  },
  {
    id: 5,
    title: "GREEN DEMON",
    price: "$8.990", // 🔥 BAJÓ (Antes 9.500)
    oldPrice: "$10.900",
    description: "Hamburguesa de 125g, lechuga, tomates, palta en dip y salsa Demon's.",
    image: IMG_GREEN,
    category: "Burger"
  },
  {
    id: 3,
    title: "MOLLIE",
    price: "$7.500", // 🔥 BAJÓ (Antes 8.500)
    oldPrice: "$9.500",
    description: "Doble carne, cebolla caramelizada, aros de cebolla, doble cheddar y BBQ.",
    image: IMG_MOLLIE, 
    category: "Burger"
  },
  {
    id: 2,
    title: "SRIRACHA HELL",
    price: "$7.500", // 🔥 BAJÓ (Antes 8.200)
    oldPrice: "$9.200",
    description: "Hamburguesa 125g, aros de cebolla, salsa Demon's y salsa siracha.",
    image: IMG_SRIRACHA, 
    category: "Burger",
    badgeText: "PICANTE"
  },
  {
    id: 4,
    title: "BABY QUEEN",
    price: "$7.500", // 🔥 BAJÓ (Antes 8.200)
    oldPrice: "$9.200",
    description: "Carne 120g, cheddar, cebolla crispy, pepinillos y salsa BBQ.",
    image: IMG_BABY,
    category: "Burger"
  },
  {
    id: 6,
    title: "CLÁSICA PREMIUM",
    price: "$6.990", // 🔥 BAJÓ (Antes 7.990)
    oldPrice: "$8.500",
    description: "Carne 120gm, tocino, cebolla caramelizada, pepinillo y lechuga.",
    image: IMG_CLASICA_PREMIUM, 
    category: "Burger"
  },
  {
    id: 10,
    title: "CLASICA (SIMPLE)",
    price: "$5.990", // 🔥 BAJÓ (Antes 6.990 - ¡PRECIO GANCHO!)
    oldPrice: "$7.500",
    description: "Carne 120gm, lechuga, tomate, cebolla, ketchup y mostaza.",
    image: IMG_CLASICA,
    category: "Burger"
  },
  {
    id: 7,
    title: "SINGLE CHEESE",
    price: "$5.500", // 🔥 BAJÓ (Antes 6.490)
    oldPrice: "$6.900",
    description: "Carne 120gm, queso cheddar y salsa Demon's.",
    image: IMG_SINGLE,
    category: "Burger"
  },
  {
    id: 8,
    title: "PAPAS FRITAS INDIV.",
    price: "$2.500",
    oldPrice: "$3.000",
    description: "Porción de papas fritas crujientes.",
    image: IMG_PAPAS,
    category: "Acompañamiento"
  },
  {
    id: 9,
    title: "BEBIDA LATA 350CC",
    price: "$1.990",
    oldPrice: "$2.500",
    description: "Coca-Cola, Fanta, Sprite.",
    image: IMG_LATA,
    category: "Bebidas"
  }
];

// --- WHATSAPP Y ENLACES ---
export const WHATSAPP_NUMBER = "56952167890";
const MESSAGE = encodeURIComponent("¡Hola Demon's Burger! 🔥 Vi la carta en la web y me gustaría hacer un pedido.");
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${MESSAGE}`;

export const REVIEW_LINK = "https://docs.google.com/forms/d/e/1FAIpQLSd8NdEJnF-3UnDZDuUCPWGRHENXqFeC3iNapV6C7VeKY7IEpA/viewform?usp=header";
export const INSTAGRAM_LINK = "https://www.instagram.com/demons_burger.cl?igsh=MWQ3Nnd6enE3ZTJ6OA%3D%3D";
