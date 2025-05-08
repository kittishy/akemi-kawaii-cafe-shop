
import { Product } from "@/context/CartContext";
import { ProductCard } from "../ProductCard";
import { motion } from "framer-motion";

interface ProductGridProps {
  products: Product[];
  likedProducts: Record<string, boolean>;
  onToggleLike: (productId: string) => void;
}

export function ProductGrid({ products, likedProducts, onToggleLike }: ProductGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product, index) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
        >
          <ProductCard 
            product={product}
          />
        </motion.div>
      ))}
    </div>
  );
}
