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

// Traduções básicas
const translations = {
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
  "hero.title": {
    "pt-BR": "O melhor café de gatinho",
    "en-US": "The Best Kitty Coffee"
  },
  "hero.subtitle": {
    "pt-BR": "Prepare-se para uma experiência café com miados",
    "en-US": "Get ready for a meowgnificent coffee experience"
  },
  "hero.cta": {
    "pt-BR": "Comprar agora",
    "en-US": "Shop now"
  },
  "hero.badge": {
    "pt-BR": "✨ Café Temático de Gatinhos",
    "en-US": "✨ Kitty Themed Café"
  },
  "hero.about": {
    "pt-BR": "Conheça a Lisa",
    "en-US": "Meet Lisa"
  },
  "hero.customers": {
    "pt-BR": "clientes satisfeitos",
    "en-US": "satisfied customers"
  },
  "products.trending": {
    "pt-BR": "Mais Vendidos",
    "en-US": "Top Categories"
  },
  "products.explore": {
    "pt-BR": "Explore nossos produtos mais populares",
    "en-US": "Explore our most popular products"
  },
  "footer.rights": {
    "pt-BR": "Todos os direitos reservados",
    "en-US": "All rights reserved"
  },
  "footer.follow": {
    "pt-BR": "Siga-nos",
    "en-US": "Follow us"
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
