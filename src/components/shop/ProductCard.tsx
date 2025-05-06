
import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, ShoppingCart, Eye } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { Product, useCart } from "@/context/CartContext";

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
  
  return (
    <Card 
      key={product.id} 
      className="overflow-hidden group hover:shadow-lg transition-all"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-square relative">
        <Badge variant="secondary" className="absolute top-2 left-2 z-10">
          {categoryLabels[product.category] || product.category}
        </Badge>
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 z-10 bg-background/50 backdrop-blur-sm hover:bg-background/80"
          onClick={() => onToggleLike(product.id)}
        >
          <Heart 
            className={`h-5 w-5 transition-colors duration-300 ${likedProducts[product.id] ? "fill-red-500 text-red-500" : "text-muted-foreground"}`} 
          />
        </Button>
        <Link to={`/product/${product.id}`} className="block absolute inset-0 z-0">
          {!imageLoaded && (
            <Skeleton className="absolute inset-0 w-full h-full" />
          )}
          <img 
            src={product.image}
            alt={product.title}
            className={`w-full h-full object-cover transition-all duration-500 ${
              isHovered ? 'scale-110' : 'scale-100'
            } ${!imageLoaded ? 'opacity-0' : 'opacity-100'}`}
            onLoad={handleImageLoad}
          />
          <div className={`absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}>
            <Button size="sm" variant="secondary" className="rounded-full">
              <Eye className="h-4 w-4 mr-2" />
              Ver detalhes
            </Button>
          </div>
        </Link>
      </div>
      <CardContent className="p-4 space-y-2">
        <div className="flex justify-between">
          <Link to={`/product/${product.id}`} className="hover:text-primary transition-colors">
            <h3 className="font-medium">{product.title}</h3>
          </Link>
          <span className="font-bold">R$ {product.price.toFixed(2)}</span>
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2">{product.description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <span className="text-yellow-500">★</span>
            <span className="text-sm text-muted-foreground">{product.rating} ({product.likes} likes)</span>
          </div>
          <Button 
            size="sm" 
            onClick={() => addItem(product)}
            className="transition-all duration-300 hover:scale-105"
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Adicionar
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
