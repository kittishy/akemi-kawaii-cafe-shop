
import { Product } from "@/context/CartContext";
import { ProductCard } from "../ProductCard";

interface ProductGridProps {
  products: Product[];
  likedProducts: Record<string, boolean>;
  onToggleLike: (productId: string) => void;
}

export function ProductGrid({ products, likedProducts, onToggleLike }: ProductGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard 
          key={product.id}
          product={product}
          likedProducts={likedProducts}
          onToggleLike={onToggleLike}
        />
      ))}
    </div>
  );
}
