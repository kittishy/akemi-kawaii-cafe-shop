
import { useState } from "react";
import { Product } from "@/context/CartContext";
import { ProductCard } from "./ProductCard";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

interface ProductListProps {
  products: Product[];
}

export function ProductList({ products }: ProductListProps) {
  const [likedProducts, setLikedProducts] = useState<Record<string, boolean>>({});
  
  const toggleLike = (productId: string) => {
    setLikedProducts(prev => ({
      ...prev,
      [productId]: !prev[productId]
    }));
  };
  
  return (
    <div className="lg:w-3/4">
      <div className="flex justify-between items-center mb-6">
        <p className="text-muted-foreground">
          {products.length} produtos encontrados
        </p>
        <Select defaultValue="featured">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Ordernar por" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="featured">Em destaque</SelectItem>
            <SelectItem value="price-asc">Menor preço</SelectItem>
            <SelectItem value="price-desc">Maior preço</SelectItem>
            <SelectItem value="newest">Mais recentes</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      {products.length === 0 ? (
        <div className="text-center py-12">
          <h3 className="text-lg font-medium mb-2">Nenhum produto encontrado</h3>
          <p className="text-muted-foreground">
            Tente ajustar seus filtros para encontrar o que procura.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard 
              key={product.id}
              product={product}
              likedProducts={likedProducts}
              onToggleLike={toggleLike}
            />
          ))}
        </div>
      )}
      
      {/* Pagination */}
      <div className="flex justify-center mt-10">
        <div className="flex gap-1">
          <Button variant="outline" size="icon" disabled>
            &lt;
          </Button>
          <Button variant="default" size="icon">
            1
          </Button>
          <Button variant="outline" size="icon">
            2
          </Button>
          <Button variant="outline" size="icon">
            3
          </Button>
          <Button variant="outline" size="icon">
            &gt;
          </Button>
        </div>
      </div>
    </div>
  );
}
