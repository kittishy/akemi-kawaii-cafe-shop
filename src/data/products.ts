
import { Product } from "@/context/CartContext";

// Centralized product data
export const products: Product[] = [
  {
    id: "1",
    title: "Café Mocha Lisa",
    price: 18.90,
    image: "/lovable-uploads/lisa-mocha-coffee.png",
    description: "Nosso café mocha especial com chantilly em formato de pata de gato",
    category: "coffee",
    rating: 4.9,
    likes: 30,
    stock: 15
  },
  {
    id: "2",
    title: "Expresso Lisa",
    price: 12.50,
    image: "/lovable-uploads/lisa-espresso.png",
    description: "Expresso forte com um toque de canela e arte latte em forma de gatinho",
    category: "coffee",
    rating: 4.8,
    likes: 25,
    stock: 20
  },
  {
    id: "3",
    title: "Cappuccino Kawaii",
    price: 16.90,
    image: "/lovable-uploads/lisa-cappuccino.png",
    description: "Cappuccino cremoso com chocolate em pó e marshmallows coloridos",
    category: "coffee",
    rating: 4.7,
    likes: 28,
    stock: 12
  },
  {
    id: "4",
    title: "Milkshake de Morango",
    price: 22.90,
    image: "/lovable-uploads/lisa-milkshake-morango.png",
    description: "Delicioso milkshake de morango com chantilly e orelhas de gato",
    category: "milkshake",
    rating: 4.9,
    likes: 35,
    stock: 10
  },
  {
    id: "5",
    title: "Milkshake de Lavanda",
    price: 23.90,
    image: "/lovable-uploads/lisa-milkshake-lavanda.png",
    description: "Milkshake com sabor suave de lavanda e cobertura especial",
    category: "milkshake",
    rating: 4.5,
    likes: 27,
    stock: 8
  },
  {
    id: "6",
    title: "Milkshake de Caramelo",
    price: 21.90,
    image: "/lovable-uploads/lisa-milkshake-caramelo.png",
    description: "Milkshake com calda de caramelo caseiro e chantilly",
    category: "milkshake",
    rating: 4.6,
    likes: 22,
    stock: 14
  },
  {
    id: "7",
    title: "Chá Verde com Sakura",
    price: 15.90,
    image: "/lovable-uploads/lisa-cha-sakura.png",
    description: "Chá verde japonês com essência de flor de cerejeira",
    category: "tea",
    rating: 4.7,
    likes: 19,
    stock: 18
  },
  {
    id: "8",
    title: "Chá de Lavanda",
    price: 14.90,
    image: "/lovable-uploads/lisa-cha-lavanda.png",
    description: "Chá relaxante de lavanda com um toque de mel",
    category: "tea",
    rating: 4.5,
    likes: 15,
    stock: 20
  },
  {
    id: "9",
    title: "Caneca Lisa",
    price: 34.90,
    image: "/lovable-uploads/lisa-caneca.png",
    description: "Caneca de cerâmica com estampa da Lisa",
    category: "merchandise",
    rating: 4.8,
    likes: 42,
    stock: 7
  }
];

export const featuredProducts = products.slice(0, 3);
export const milkshakes = products.filter(product => product.category === "milkshake");
