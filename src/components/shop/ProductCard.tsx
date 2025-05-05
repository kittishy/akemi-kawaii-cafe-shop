
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, ShoppingCart } from "lucide-react";
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
    <Card key={product.id} className="overflow-hidden group hover:shadow-lg transition-all">
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
            className={`h-5 w-5 ${likedProducts[product.id] ? "fill-red-500 text-red-500" : "text-muted-foreground"}`} 
          />
        </Button>
        {!imageLoaded && (
          <Skeleton className="absolute inset-0 w-full h-full" />
        )}
        <img 
          src={product.image}
          alt={product.title}
          className={`w-full h-full object-cover transition-all duration-300 group-hover:scale-110 ${!imageLoaded ? 'opacity-0' : 'opacity-100'}`}
          onLoad={handleImageLoad}
        />
      </div>
      <CardContent className="p-4 space-y-2">
        <div className="flex justify-between">
          <h3 className="font-medium">{product.title}</h3>
          <span className="font-bold">R$ {product.price.toFixed(2)}</span>
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2">{product.description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <span className="text-yellow-500">★</span>
            <span className="text-sm text-muted-foreground">{product.rating} ({product.likes} likes)</span>
          </div>
          <Button size="sm" onClick={() => addItem(product)}>
            <ShoppingCart className="h-4 w-4 mr-2" />
            Adicionar
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
