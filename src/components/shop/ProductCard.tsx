
import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, ShoppingCart, Eye } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { Product, useCart } from "@/context/CartContext";
import { motion } from "framer-motion";

interface ProductCardProps {
  product: Product;
  likedProducts: Record<string, boolean>;
  onToggleLike: (productId: string) => void;
}

export function ProductCard({ product, likedProducts, onToggleLike }: ProductCardProps) {
  const { addItem } = useCart();
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const categoryLabels: Record<string, string> = {
    "coffee": "Café",
    "tea": "Chá",
    "milkshake": "Milkshake",
    "merchandise": "Produtos"
  };

  const addToCart = () => {
    // Vibração para feedback tátil em dispositivos móveis
    if (navigator.vibrate) {
      navigator.vibrate(50);
    }
    addItem(product);
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -5 }}
    >
      <Card 
        key={product.id} 
        className="overflow-hidden group hover:shadow-lg transition-all rounded-2xl border border-border/50"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="aspect-square relative overflow-hidden">
          <Badge 
            variant="secondary" 
            className="absolute top-3 left-3 z-10 rounded-full px-3 py-1 text-xs font-medium bg-background/80 backdrop-blur-sm border border-border/50"
          >
            {categoryLabels[product.category] || product.category}
          </Badge>
          
          <motion.button
            className="absolute top-3 right-3 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background/95 border border-border/50 transition-colors"
            onClick={() => {
              // Vibração para feedback tátil em dispositivos móveis
              if (navigator.vibrate) {
                navigator.vibrate(50);
              }
              onToggleLike(product.id);
            }}
            whileTap={{ scale: 0.9 }}
          >
            <Heart 
              className={`h-5 w-5 transition-colors duration-300 ${likedProducts[product.id] ? "fill-red-500 text-red-500" : "text-muted-foreground"}`} 
            />
            
            {/* Animação quando o usuário curte um produto */}
            {likedProducts[product.id] && (
              <motion.div
                initial={{ scale: 0, opacity: 1 }}
                animate={{ scale: 1.5, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <Heart className="h-5 w-5 text-red-500" />
              </motion.div>
            )}
          </motion.button>
          
          <Link to={`/product/${product.id}`} className="block absolute inset-0 z-0">
            {!imageLoaded && (
              <Skeleton className="absolute inset-0 w-full h-full" />
            )}
            <motion.img 
              src={product.image}
              alt={product.title}
              className={`w-full h-full object-cover transition-all duration-500 ${
                !imageLoaded ? 'opacity-0' : 'opacity-100'
              }`}
              animate={{
                scale: isHovered ? 1.1 : 1
              }}
              transition={{ duration: 0.4 }}
              onLoad={handleImageLoad}
            />
            <motion.div 
              className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <Button size="sm" variant="secondary" className="rounded-full">
                <Eye className="h-4 w-4 mr-2" />
                Ver detalhes
              </Button>
            </motion.div>
          </Link>
          
          {/* Elemento decorativo de pata */}
          <motion.div 
            className="absolute -bottom-4 -right-4 text-xl text-primary opacity-0 rotate-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 0.2 : 0 }}
            transition={{ duration: 0.3 }}
          >
            🐾
          </motion.div>
        </div>
        
        <CardContent className="p-4 space-y-3">
          <div className="flex justify-between items-start">
            <Link to={`/product/${product.id}`} className="group-hover:text-primary transition-colors">
              <h3 className="font-medium text-base sm:text-lg">{product.title}</h3>
            </Link>
            <span className="font-bold text-base sm:text-lg">R$ {product.price.toFixed(2)}</span>
          </div>
          
          <p className="text-sm text-muted-foreground line-clamp-2">{product.description}</p>
          
          <div className="flex items-center justify-between pt-1">
            <div className="flex items-center gap-1">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={`text-sm ${
                      i < Math.floor(product.rating)
                        ? "text-yellow-500"
                        : "text-gray-300"
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>
              <span className="text-xs text-muted-foreground ml-1">({product.likes})</span>
            </div>
            
            <motion.div whileTap={{ scale: 0.95 }}>
              <Button 
                size="sm" 
                onClick={addToCart}
                className="rounded-full transition-all duration-300 hover:shadow-md"
              >
                <ShoppingCart className="h-4 w-4 mr-1.5" />
                Adicionar
              </Button>
            </motion.div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
