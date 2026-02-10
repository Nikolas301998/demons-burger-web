
export interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  category: 'COMBO' | 'BURGER';
  featured?: boolean;
}

export interface NavItem {
  label: string;
  href: string;
}
