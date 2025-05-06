
import { Product } from "@/context/CartContext";

// Centralized product data
export const products: Product[] = [
  {
    id: "1",
    title: "Café Mocha Lisa",
    price: 18.90,
    image: "/lovable-uploads/lisa-mocha-coffee.png",
    description: "Nosso café mocha especial com chantilly em formato de pata de gato. Uma combinação perfeita de café, chocolate e leite vaporizado que vai alegrar seu dia.",
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
    description: "Expresso forte com um toque de canela e arte latte em forma de gatinho. Grãos selecionados, torrados e moídos na hora para garantir o melhor sabor.",
    category: "coffee",
    rating: 4.8,
    likes: 25,
    stock: 20
  },
  {
    id: "3",
    title: "Cappuccino",
    price: 16.90,
    image: "/lovable-uploads/lisa-cappuccino.png",
    description: "Cappuccino cremoso com chocolate em pó e marshmallows coloridos. Uma bebida equilibrada e reconfortante, decorada com a carinha da Lisa.",
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
    description: "Delicioso milkshake de morango com chantilly e orelhas de gato. Feito com morangos frescos e sorvete artesanal, é refrescante e irresistível.",
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
    description: "Milkshake com sabor suave de lavanda e cobertura especial. Uma experiência sensorial única com notas florais delicadas e calda de mel artesanal.",
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
    description: "Milkshake com calda de caramelo caseiro e chantilly. A combinação perfeita de doçura e cremosidade, decorado com biscoitos em formato de patinhas.",
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
    description: "Chá verde japonês com essência de flor de cerejeira. Refrescante e delicado, é servido em uma xícara temática com a Lisa, ideal para momentos de relaxamento.",
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
    description: "Chá relaxante de lavanda com um toque de mel. Perfeito para acalmar a mente e preparar para uma boa noite de sono, com propriedades calmantes naturais.",
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
    description: "Caneca de cerâmica com estampa da Lisa. Perfeita para seus momentos de café ou chá em casa, trazendo a fofura do Lisa's Cafe para seu dia a dia.",
    category: "merchandise",
    rating: 4.8,
    likes: 42,
    stock: 7
  }
];

export const featuredProducts = products.slice(0, 3);
export const milkshakes = products.filter(product => product.category === "milkshake");
