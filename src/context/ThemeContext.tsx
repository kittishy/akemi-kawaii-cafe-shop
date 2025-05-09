
import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";
type Language = "pt-BR" | "en-US";

interface ThemeContextType {
  theme: Theme;
  language: Language;
  toggleTheme: () => void;
  setLanguage: (language: Language) => void;
  translations: Record<string, Record<Language, string>>;
  t: (key: string) => string;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: React.ReactNode;
}

// Traduções completas do sistema
const translations = {
  // Navegação
  "nav.home": {
    "pt-BR": "Início",
    "en-US": "Home"
  },
  "nav.shop": {
    "pt-BR": "Loja",
    "en-US": "Shop"
  },
  "nav.about": {
    "pt-BR": "Sobre",
    "en-US": "About"
  },
  "nav.blog": {
    "pt-BR": "Blog",
    "en-US": "Blog"
  },
  "nav.contact": {
    "pt-BR": "Contato",
    "en-US": "Contact"
  },
  
  // Carrinho
  "cart.title": {
    "pt-BR": "Carrinho",
    "en-US": "Cart"
  },
  "cart.empty": {
    "pt-BR": "Seu carrinho está vazio",
    "en-US": "Your cart is empty"
  },
  "cart.checkout": {
    "pt-BR": "Finalizar Compra",
    "en-US": "Checkout"
  },
  "cart.item.added": {
    "pt-BR": "Item adicionado ao carrinho",
    "en-US": "Item added to cart"
  },
  "cart.item.updated": {
    "pt-BR": "quantidade atualizada para",
    "en-US": "quantity updated to"
  },
  "cart.item.added.desc": {
    "pt-BR": "adicionado ao carrinho",
    "en-US": "added to cart"
  },
  "cart.item.removed": {
    "pt-BR": "Item removido",
    "en-US": "Item removed"
  },
  "cart.item.removed.desc": {
    "pt-BR": "Item removido do carrinho",
    "en-US": "Item removed from cart"
  },
  "cart.cleared": {
    "pt-BR": "Carrinho esvaziado",
    "en-US": "Cart cleared"
  },
  "cart.cleared.desc": {
    "pt-BR": "Todos os itens foram removidos do carrinho",
    "en-US": "All items have been removed from cart"
  },
  
  // Hero Section
  "hero.title": {
    "pt-BR": "O melhor café com gatinhos",
    "en-US": "The Best Cat-themed Coffee"
  },
  "hero.subtitle": {
    "pt-BR": "Prepare-se para uma experiência café encantadora",
    "en-US": "Get ready for a wonderful coffee experience"
  },
  "hero.cta": {
    "pt-BR": "Comprar agora",
    "en-US": "Shop now"
  },
  "hero.badge": {
    "pt-BR": "✨ Café Temático de Gatinhos",
    "en-US": "✨ Cat Themed Café"
  },
  "hero.about": {
    "pt-BR": "Conheça a Lisa",
    "en-US": "Meet Lisa"
  },
  "hero.customers": {
    "pt-BR": "clientes satisfeitos",
    "en-US": "satisfied customers"
  },
  "hero.welcome": {
    "pt-BR": "Bem-vindo ao Lisa's Café!",
    "en-US": "Welcome to Lisa's Café!"
  },
  "hero.free.delivery": {
    "pt-BR": "Entrega grátis",
    "en-US": "Free delivery"
  },
  "hero.scroll": {
    "pt-BR": "Role para ver mais",
    "en-US": "Scroll to see more"
  },
  
  // Produtos
  "products.trending": {
    "pt-BR": "Mais Vendidos",
    "en-US": "Top Categories"
  },
  "products.explore": {
    "pt-BR": "Explore nossos produtos mais populares",
    "en-US": "Explore our most popular products"
  },
  "products.category.coffee": {
    "pt-BR": "Café",
    "en-US": "Coffee"
  },
  "products.category.tea": {
    "pt-BR": "Chá",
    "en-US": "Tea"
  },
  "products.category.milkshake": {
    "pt-BR": "Milkshake",
    "en-US": "Milkshake"
  },
  "products.category.products": {
    "pt-BR": "Produtos",
    "en-US": "Products"
  },
  "products.category.merchandise": {
    "pt-BR": "Produtos",
    "en-US": "Merchandise"
  },
  "products.view.more": {
    "pt-BR": "Ver mais produtos",
    "en-US": "View more products"
  },
  "products.add": {
    "pt-BR": "Adicionar",
    "en-US": "Add"
  },
  
  // Footer
  "footer.products": {
    "pt-BR": "Produtos",
    "en-US": "Products"
  },
  "footer.company": {
    "pt-BR": "Empresa",
    "en-US": "Company"
  },
  "footer.about": {
    "pt-BR": "Sobre nós",
    "en-US": "About us"
  },
  "footer.faq": {
    "pt-BR": "Perguntas Frequentes",
    "en-US": "FAQ"
  },
  "footer.privacy": {
    "pt-BR": "Política de Privacidade",
    "en-US": "Privacy Policy"
  },
  "footer.terms": {
    "pt-BR": "Termos de Uso",
    "en-US": "Terms of Use"
  },
  "footer.rights": {
    "pt-BR": "Todos os direitos reservados",
    "en-US": "All rights reserved"
  },
  "footer.follow": {
    "pt-BR": "Siga-nos",
    "en-US": "Follow us"
  },
  "footer.telegram.support": {
    "pt-BR": "Suporte via Telegram: @lisascafe_bot",
    "en-US": "Telegram support: @lisascafe_bot"
  },
  "footer.telegram.chat": {
    "pt-BR": "Converse com a Lisa no Telegram",
    "en-US": "Chat with Lisa on Telegram"
  },
  "footer.description": {
    "pt-BR": "Seu refúgio para cafés especiais e guloseimas inspiradas pela cultura pop japonesa. Produtos exclusivos com um tema fofo e encantador!",
    "en-US": "Your refuge for special coffees and treats inspired by Japanese pop culture. Exclusive products with a cute and charming theme!"
  },
  
  // Detalhes do Produto
  "product.not.found": {
    "pt-BR": "Produto não encontrado",
    "en-US": "Product not found"
  },
  "product.not.found.desc": {
    "pt-BR": "O produto que você está procurando não existe ou foi removido.",
    "en-US": "The product you are looking for does not exist or has been removed."
  },
  "product.back.to.shop": {
    "pt-BR": "Voltar para a loja",
    "en-US": "Back to shop"
  },
  "product.description": {
    "pt-BR": "Descrição",
    "en-US": "Description"
  },
  "product.description.extra": {
    "pt-BR": "Aproveite este produto especial do Lisa's Café, feito com ingredientes cuidadosamente selecionados para proporcionar uma experiência única de sabor e aroma.",
    "en-US": "Enjoy this special product from Lisa's Café, made with carefully selected ingredients to provide a unique experience of flavor and aroma."
  },
  "product.availability": {
    "pt-BR": "Disponibilidade",
    "en-US": "Availability"
  },
  "product.in.stock": {
    "pt-BR": "Em estoque",
    "en-US": "In stock"
  },
  "product.units": {
    "pt-BR": "unidades",
    "en-US": "units"
  },
  "product.out.of.stock": {
    "pt-BR": "Fora de estoque",
    "en-US": "Out of stock"
  },
  "product.quantity": {
    "pt-BR": "Quantidade",
    "en-US": "Quantity"
  },
  "product.add.to.cart": {
    "pt-BR": "Adicionar ao Carrinho",
    "en-US": "Add to Cart"
  },
  "product.reviews": {
    "pt-BR": "Avaliações",
    "en-US": "Reviews"
  },
  "product.related": {
    "pt-BR": "Produtos Relacionados",
    "en-US": "Related Products"
  },
  "product.ratings": {
    "pt-BR": "avaliações",
    "en-US": "reviews"
  },
  "product.stars": {
    "pt-BR": "estrelas",
    "en-US": "stars"
  },
  "product.based.on": {
    "pt-BR": "Baseado em",
    "en-US": "Based on"
  },
  "product.rate": {
    "pt-BR": "Avaliar este produto",
    "en-US": "Rate this product"
  },
  
  // Milkshakes Section
  "milkshakes.title": {
    "pt-BR": "Milkshakes Especiais",
    "en-US": "Special Milkshakes"
  },
  "milkshakes.description": {
    "pt-BR": "Feitos com muito carinho e decorações fofas",
    "en-US": "Made with love and cute decorations"
  },
  "milkshakes.buy": {
    "pt-BR": "Comprar agora",
    "en-US": "Buy now"
  },
  "milkshakes.likes": {
    "pt-BR": "likes",
    "en-US": "likes"
  },
  
  // Blog Section
  "blog.description": {
    "pt-BR": "Descubra dicas, receitas e curiosidades sobre o mundo do café",
    "en-US": "Discover tips, recipes and curiosities about the coffee world"
  },
  "blog.view.all": {
    "pt-BR": "Ver todos os artigos",
    "en-US": "View all articles"
  },
  
  // Support
  "support.telegram": {
    "pt-BR": "Suporte via Telegram",
    "en-US": "Telegram Support"
  },
  
  // Shop
  "shop.title": {
    "pt-BR": "Nossa Loja de Café",
    "en-US": "Our Coffee Shop"
  },
  "shop.description": {
    "pt-BR": "Explore nossa coleção de cafés e produtos especiais inspirados em gatinhos",
    "en-US": "Explore our collection of coffee and special cat-inspired products"
  },
  
  // Loading
  "loading": {
    "pt-BR": "Carregando...",
    "en-US": "Loading..."
  },
  
  // About Page
  "about.title": {
    "pt-BR": "Conheça a Lisa",
    "en-US": "Meet Lisa"
  },
  "about.subtitle": {
    "pt-BR": "A mascote mais fofa do mundo dos cafés temáticos, com personalidade única e cheio de curiosidades para compartilhar.",
    "en-US": "The cutest mascot in the world of themed cafes, with a unique personality and full of curiosities to share."
  },
  "about.button.talk": {
    "pt-BR": "Fale com a Lisa",
    "en-US": "Talk to Lisa"
  },
  "about.history.title": {
    "pt-BR": "A História da Lisa",
    "en-US": "Lisa's Story"
  },
  "about.history.p1": {
    "pt-BR": "Lisa é uma gatinha com pelagem branca e detalhes em tons pastel, que nasceu com um talento especial para os aromas e sabores de café.",
    "en-US": "Lisa is a white-furred kitten with pastel details, born with a special talent for coffee aromas and flavors."
  },
  "about.history.p2": {
    "pt-BR": "Desde pequena, Lisa sempre foi encantada com o ritual de preparo do café. Com sua curiosidade felina natural, observava atentamente os baristas trabalhando e aprendeu todos os segredos de como fazer o café perfeito.",
    "en-US": "Since she was little, Lisa has always been enchanted with the coffee preparation ritual. With her natural feline curiosity, she carefully observed baristas working and learned all the secrets of making the perfect coffee."
  },
  "about.history.p3": {
    "pt-BR": "Um dia, decidiu abrir seu próprio café temático, onde poderia compartilhar seu amor por bebidas deliciosas em um ambiente acolhedor e cheio de personalidade felina.",
    "en-US": "One day, she decided to open her own themed café, where she could share her love for delicious drinks in a cozy environment full of feline personality."
  },
  "about.history.p4": {
    "pt-BR": "Hoje, Lisa é a anfitriã oficial do Lisa's Cafe, onde recebe seus clientes com muito carinho e presenteia cada um com uma experiência sensorial única.",
    "en-US": "Today, Lisa is the official host of Lisa's Cafe, where she welcomes her customers with great affection and gifts each one with a unique sensory experience."
  },
  "about.facts.title": {
    "pt-BR": "Curiosidades",
    "en-US": "Fun Facts"
  },
  "about.facts.age.title": {
    "pt-BR": "Idade",
    "en-US": "Age"
  },
  "about.facts.age.description": {
    "pt-BR": "Lisa tem 4 anos em idade felina, o que equivale a uma jovem barista cheia de energia e criatividade.",
    "en-US": "Lisa is 4 years old in feline age, equivalent to a young barista full of energy and creativity."
  },
  "about.facts.drink.title": {
    "pt-BR": "Bebida Favorita",
    "en-US": "Favorite Drink"
  },
  "about.facts.drink.description": {
    "pt-BR": "Seu cappuccino especial com canela e arte latte em formato de patinha.",
    "en-US": "Her special cappuccino with cinnamon and paw-shaped latte art."
  },
  "about.facts.music.title": {
    "pt-BR": "Música",
    "en-US": "Music"
  },
  "about.facts.music.description": {
    "pt-BR": "Lisa adora lo-fi beats enquanto prepara o café da manhã para seus clientes.",
    "en-US": "Lisa loves lo-fi beats while preparing breakfast for her customers."
  },
  "about.facts.hobby.title": {
    "pt-BR": "Hobby",
    "en-US": "Hobby"
  },
  "about.facts.hobby.description": {
    "pt-BR": "Colecionar xícaras vintage e tirar sonecas estratégicas entre um preparo e outro.",
    "en-US": "Collecting vintage cups and taking strategic naps between preparations."
  },
  "about.gallery.title": {
    "pt-BR": "Galeria da Lisa",
    "en-US": "Lisa's Gallery"
  },
  "about.gallery.image1.title": {
    "pt-BR": "Lisa preparando café",
    "en-US": "Lisa preparing coffee"
  },
  "about.gallery.image1.description": {
    "pt-BR": "Lisa em ação no seu café favorito.",
    "en-US": "Lisa in action at her favorite café."
  },
  "about.gallery.image2.title": {
    "pt-BR": "Lisa sorridente",
    "en-US": "Smiling Lisa"
  },
  "about.gallery.image2.description": {
    "pt-BR": "Um sorriso que ilumina o dia de todos os clientes.",
    "en-US": "A smile that brightens the day of all customers."
  },
  "about.gallery.image3.title": {
    "pt-BR": "Lisa de corpo inteiro",
    "en-US": "Full-body Lisa"
  },
  "about.gallery.image3.description": {
    "pt-BR": "A mascote completa com todos os detalhes fofos.",
    "en-US": "The complete mascot with all the cute details."
  },
  "about.cta.title": {
    "pt-BR": "Venha tomar um café com a Lisa!",
    "en-US": "Come have coffee with Lisa!"
  },
  "about.cta.description": {
    "pt-BR": "Conheça nossas bebidas especiais, produtos temáticos e entre para o nosso clube de amigos da Lisa.",
    "en-US": "Discover our special drinks, themed products, and join our Lisa's friends club."
  },
  "about.cta.products": {
    "pt-BR": "Ver produtos",
    "en-US": "View products"
  },
  "about.cta.fanclub": {
    "pt-BR": "Clube de fãs",
    "en-US": "Fan club"
  }
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem("theme") as Theme;
    return savedTheme || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  });
  
  const [language, setLanguage] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem("language") as Language;
    return savedLanguage || (navigator.language.startsWith("pt") ? "pt-BR" : "en-US");
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <ThemeContext.Provider value={{ 
      theme, 
      language, 
      toggleTheme, 
      setLanguage, 
      translations,
      t
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
