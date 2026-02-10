// --- IMAGENES REALES DE SUPABASE ---
const IMG_BIG_MOM = "https://xdkqkatsrvlglxehqnvo.supabase.co/storage/v1/object/public/GIB%20MOM/BIG%20MOM%20PAPAS.jpg";
const IMG_CLASICA_PREMIUM= "https://xdkqkatsrvlglxehqnvo.supabase.co/storage/v1/object/public/GIB%20MOM/CLASICA%20PREMIUM%20PAPAS.jpg";
const IMG_DOBLE_CHEESE = "https://xdkqkatsrvlglxehqnvo.supabase.co/storage/v1/object/public/GIB%20MOM/DOBLE%20CHESEE.jpg";
const IMG_GREEN = "https://xdkqkatsrvlglxehqnvo.supabase.co/storage/v1/object/public/GIB%20MOM/GREEN%20BURGER.jpg";
const IMG_SRIRACHA = "https://xdkqkatsrvlglxehqnvo.supabase.co/storage/v1/object/public/GIB%20MOM/SIRACHA%20HELL%20(PICANTE)%20.jpg";
const IMG_DUO = "https://xdkqkatsrvlglxehqnvo.supabase.co/storage/v1/object/public/GIB%20MOM/DUO%20PERFECTO.jpg";
const IMG_DUO2 = "https://xdkqkatsrvlglxehqnvo.supabase.co/storage/v1/object/public/GIB%20MOM/DUO%20O%20TRIO.jpg";
const IMG_TRIO = "https://xdkqkatsrvlglxehqnvo.supabase.co/storage/v1/object/public/GIB%20MOM/TRIO.jpg";
const IMG_CLASICA= "https://xdkqkatsrvlglxehqnvo.supabase.co/storage/v1/object/public/GIB%20MOM/CLASICA%20PAPAS.jpg";
const IMG_SINGLE = "https://xdkqkatsrvlglxehqnvo.supabase.co/storage/v1/object/public/GIB%20MOM/SINGLE%20CHEESE%20.jpg";
const IMG_PAPAS = "https://xdkqkatsrvlglxehqnvo.supabase.co/storage/v1/object/public/GIB%20MOM/papas-fritas-saludables-1080x550-1-1200x900.jpg";
const IMG_LATA = "https://xdkqkatsrvlglxehqnvo.supabase.co/storage/v1/object/public/GIB%20MOM/LATAS.jpeg";
const IMG_MOLLIE = "https://xdkqkatsrvlglxehqnvo.supabase.co/storage/v1/object/public/GIB%20MOM/MOLLIE.jpg";
const IMG_BABY = "https://xdkqkatsrvlglxehqnvo.supabase.co/storage/v1/object/public/GIB%20MOM/BABY.jpg";

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