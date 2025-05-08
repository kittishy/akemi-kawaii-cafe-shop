import React, { createContext, useContext, useEffect, useState } from "react";
import { Product, useCart } from "./CartContext";

interface FavoritesContextType {
  favorites: Record<string, boolean>;
  recentlyViewed: Product[];
  recommendations: Product[];
  toggleFavorite: (productId: string) => void;
  addToRecentlyViewed: (product: Product) => void;
  isFavorite: (productId: string) => boolean;
  updateRecommendations: (products: Product[], currentProductId?: string) => void;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const FavoritesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});
  const [recentlyViewed, setRecentlyViewed] = useState<Product[]>([]);
  const [recommendations, setRecommendations] = useState<Product[]>([]);

  // Carregar favoritos do localStorage
  useEffect(() => {
    const savedFavorites = localStorage.getItem("favorites");
    if (savedFavorites) {
      try {
        setFavorites(JSON.parse(savedFavorites));
      } catch (error) {
        console.error("Erro ao analisar dados de favoritos", error);
      }
    }

    const savedRecentlyViewed = localStorage.getItem("recentlyViewed");
    if (savedRecentlyViewed) {
      try {
        setRecentlyViewed(JSON.parse(savedRecentlyViewed));
      } catch (error) {
        console.error("Erro ao analisar dados de produtos visualizados recentemente", error);
      }
    }
  }, []);

  // Salvar favoritos no localStorage
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  // Salvar produtos visualizados recentemente no localStorage
  useEffect(() => {
    localStorage.setItem("recentlyViewed", JSON.stringify(recentlyViewed));
  }, [recentlyViewed]);

  const toggleFavorite = (productId: string) => {
    setFavorites(prev => {
      const newFavorites = { ...prev };
      newFavorites[productId] = !newFavorites[productId];
      
      // Se o produto não estiver mais nos favoritos, remova-o
      if (!newFavorites[productId]) {
        delete newFavorites[productId];
      }
      
      return newFavorites;
    });
  };

  const isFavorite = (productId: string): boolean => {
    return !!favorites[productId];
  };

  const addToRecentlyViewed = (product: Product) => {
    setRecentlyViewed(prev => {
      // Remover o produto se já existir na lista
      const filtered = prev.filter(item => item.id !== product.id);
      
      // Adicionar o produto no início da lista e limitar a 10 itens
      return [product, ...filtered].slice(0, 10);
    });
  };

  const updateRecommendations = (products: Product[], currentProductId?: string) => {
    // Filtrar produtos para não incluir o produto atual
    const filteredProducts = currentProductId 
      ? products.filter(p => p.id !== currentProductId)
      : products;
    
    // Lógica avançada de recomendação baseada em categoria e histórico
    if (recentlyViewed.length > 0) {
      // Obter categorias dos produtos visualizados recentemente (com peso maior para os mais recentes)
      const viewedCategories = recentlyViewed.slice(0, 3).map(p => p.category);
      
      // Calcular pontuação para cada produto baseada em similaridade com produtos visualizados
      const scoredProducts = filteredProducts.map(product => {
        let score = 0;
        
        // Pontuação baseada em categoria
        if (viewedCategories.includes(product.category)) {
          // Dar mais peso se for da mesma categoria do último produto visualizado
          if (product.category === recentlyViewed[0].category) {
            score += 5;
          } else {
            score += 3;
          }
        }
        
        // Pontuação baseada em faixa de preço similar
        const recentPrice = recentlyViewed[0].price;
        const priceDiff = Math.abs(product.price - recentPrice);
        if (priceDiff < recentPrice * 0.2) { // Dentro de 20% do preço
          score += 2;
        }
        
        // Adicionar um pouco de aleatoriedade para diversificar recomendações
        score += Math.random() * 0.5;
        
        return { product, score };
      });
      
      // Ordenar por pontuação e pegar os 4 melhores
      const sortedProducts = scoredProducts
        .sort((a, b) => b.score - a.score)
        .map(item => item.product);
      
      setRecommendations(sortedProducts.slice(0, 4));
    } else {
      // Se não houver produtos visualizados recentemente, mostrar produtos aleatórios
      setRecommendations(filteredProducts.slice(0, 4));
    }
  };
  
  // Atualizar recomendações quando o carrinho mudar
  const { items } = useCart();
  
  useEffect(() => {
    // Se houver itens no carrinho e produtos visualizados, refinar as recomendações
    if (items.length > 0 && recentlyViewed.length > 0 && recommendations.length > 0) {
      // Extrair categorias dos itens do carrinho
      const cartCategories = items.map(item => item.product.category);
      
      // Ordenar recomendações priorizando produtos das mesmas categorias do carrinho
      const sortedRecommendations = [...recommendations].sort((a, b) => {
        const aInCart = cartCategories.includes(a.category);
        const bInCart = cartCategories.includes(b.category);
        
        if (aInCart && !bInCart) return -1;
        if (!aInCart && bInCart) return 1;
        return 0;
      });
      
      setRecommendations(sortedRecommendations);
    }
  }, [items, recommendations.length]);

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        recentlyViewed,
        recommendations,
        toggleFavorite,
        addToRecentlyViewed,
        isFavorite,
        updateRecommendations,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }
  return context;
};