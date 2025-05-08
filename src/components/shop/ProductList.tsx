
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
import { ProductGrid } from "./product-list/ProductGrid";
import { ProductSorting } from "./product-list/ProductSorting";
import { ProductPagination } from "./product-list/ProductPagination";
import { EmptyProductState } from "./product-list/EmptyProductState";

interface ProductListProps {
  products: Product[];
}

export function ProductList({ products }: ProductListProps) {
  const [likedProducts, setLikedProducts] = useState<Record<string, boolean>>({});
  const [sortOption, setSortOption] = useState<string>("featured");
  
  const toggleLike = (productId: string) => {
    setLikedProducts(prev => ({
      ...prev,
      [productId]: !prev[productId]
    }));
  };

  const handleSortChange = (value: string) => {
    setSortOption(value);
  };
  
  return (
    <div className="lg:w-3/4">
      <ProductSorting 
        productCount={products.length} 
        sortOption={sortOption} 
        onSortChange={handleSortChange} 
      />
      
      {products.length === 0 ? (
        <EmptyProductState />
      ) : (
        <ProductGrid 
          products={products} 
          likedProducts={likedProducts} 
          onToggleLike={toggleLike} 
        />
      )}
      
      <ProductPagination />
    </div>
  );
}
