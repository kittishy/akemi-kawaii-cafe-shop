
import { useState, useEffect } from "react";
import { Product } from "@/context/CartContext";
import { ProductCard } from "./ProductCard";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ProductGrid } from "./product-list/ProductGrid";
import { ProductSorting } from "./product-list/ProductSorting";
import { ProductPagination } from "./product-list/ProductPagination";
import { EmptyProductState } from "./product-list/EmptyProductState";
import { useFavorites } from "@/context/FavoritesContext";
import { ProductSkeleton } from "./product-list/ProductSkeleton";
import { Separator } from "@/components/ui/separator";
import { Clock, ThumbsUp } from "lucide-react";

interface ProductListProps {
  products: Product[];
  isLoading?: boolean;
}

export function ProductList({ products, isLoading = false }: ProductListProps) {
  const [sortOption, setSortOption] = useState<string>("featured");
  const { favorites, toggleFavorite, recentlyViewed, recommendations, updateRecommendations } = useFavorites();
  const [sortedProducts, setSortedProducts] = useState<Product[]>(products);

  // Atualizar recomendações baseadas nos produtos disponíveis
  useEffect(() => {
    if (products.length > 0) {
      updateRecommendations(products);
    }
  }, [products]);

  // Ordenar produtos quando a opção de ordenação ou a lista de produtos mudar
  useEffect(() => {
    if (isLoading) return;
    
    const sorted = [...products];
    
    switch (sortOption) {
      case "price-asc":
        sorted.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        sorted.sort((a, b) => b.price - a.price);
        break;
      case "newest":
        sorted.sort((a, b) => new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime());
        break;
      // Caso padrão (featured) mantém a ordem original
    }
    
    setSortedProducts(sorted);
  }, [sortOption, products, isLoading]);

  const handleSortChange = (value: string) => {
    setSortOption(value);
  };
  
  return (
    <div className="lg:w-3/4 space-y-8">
      <ProductSorting 
        productCount={products.length} 
        sortOption={sortOption} 
        onSortChange={handleSortChange} 
      />
      
      {isLoading ? (
        <ProductSkeleton count={6} />
      ) : products.length === 0 ? (
        <EmptyProductState />
      ) : (
        <>
          <ProductGrid 
            products={sortedProducts}
            likedProducts={favorites}
            onToggleLike={toggleFavorite}
          />
          
          <ProductPagination />
          
          {/* Produtos visualizados recentemente */}
          {recentlyViewed.length > 1 && (
            <div className="mt-8">
              <Separator className="my-4" />
              <div className="flex items-center gap-2 mb-4">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <h3 className="font-medium">Visualizados recentemente</h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {recentlyViewed
                  .slice(0, 4)
                  .map(item => (
                    <a 
                      key={item.id}
                      href={`/product/${item.id}`}
                      className="block group"
                    >
                      <div className="aspect-square rounded-lg overflow-hidden mb-2">
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="w-full h-full object-cover transition-transform group-hover:scale-110" 
                        />
                      </div>
                      <h4 className="text-sm font-medium truncate">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        R$ {item.price.toFixed(2)}
                      </p>
                    </a>
                  ))}
              </div>
            </div>
          )}
          
          {/* Recomendações de produtos */}
          {recommendations.length > 0 && (
            <div className="mt-8">
              <Separator className="my-4" />
              <div className="flex items-center gap-2 mb-4">
                <ThumbsUp className="h-4 w-4 text-muted-foreground" />
                <h3 className="font-medium">Recomendados para você</h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {recommendations.slice(0, 4).map(item => (
                  <a 
                    key={item.id}
                    href={`/product/${item.id}`}
                    className="block group"
                  >
                    <div className="aspect-square rounded-lg overflow-hidden mb-2">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover transition-transform group-hover:scale-110" 
                      />
                    </div>
                    <h4 className="text-sm font-medium truncate">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      R$ {item.price.toFixed(2)}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
