
import { useState, useEffect } from "react";
import { useTheme } from "@/context/ThemeContext";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, ShoppingCart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { featuredProducts } from "@/data/products";
import { Skeleton } from "@/components/ui/skeleton";
import { Link } from "react-router-dom";

export function FeaturedProducts(){
  const { t } = useTheme();
  const { addItem } = useCart();
  const [likedProducts, setLikedProducts] = useState<Record<string, boolean>>({});
  const [loadingImages, setLoadingImages] = useState<Record<string, boolean>>({});
  
  const toggleLike = (productId: string) => {
    setLikedProducts(prev => ({
      ...prev,
      [productId]: !prev[productId]
    }));
  };

  const handleImageLoad = (productId: string) => {
    setLoadingImages(prev => ({
      ...prev,
      [productId]: false
    }));
  };

  useEffect(() => {
    // Reset loading state for images when the component mounts or re-renders
    const initialLoadingState: Record<string, boolean> = {};
    featuredProducts.forEach((product) => (initialLoadingState[product.id] = true));
    setLoadingImages(initialLoadingState);
  }, []);

  return (
    <section className="py-16 bg-muted">
      <div className="container ">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-display text-3xl font-bold">{t("specials.title")}</h2>
          <p className="text-muted-foreground mt-2">
            {t("specials.description")}
          </p>

        
          <p className="text-muted-foreground mt-2">{t("products.explore")}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map((product) => (
            <Card key={product.id} className="overflow-hidden group hover:shadow-lg transition-all">
              <div className="aspect-square relative">
              <Badge variant="secondary" className="absolute top-2 left-2 z-10">
                {product.category === "coffee" ? "Coffee" : "Milkshake"}
              </Badge>
              <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 right-2 z-10 bg-background/50 backdrop-blur-sm hover:bg-background/80"
                  onClick={() => toggleLike(product.id)}
                >
                  <Heart 
                    className={`h-5 w-5 ${likedProducts[product.id] ? "fill-red-500 text-red-500" : "text-muted-foreground"}`} 
                  />
                </Button>
                {loadingImages[product.id] !== false && (
                  <Skeleton className="absolute inset-0 w-full h-full" />
                )}
                <img 
                  src={product.image}
                  alt={product.title}
                  className={`w-full h-full object-cover transition-transform group-hover:scale-105 ${loadingImages[product.id] !== false ? 'opacity-0' : 'opacity-100'}`}
                  onLoad={() => handleImageLoad(product.id)}
                />
              </div>
              <CardContent className="p-4 space-y-2">
                <div className="flex justify-between">
                  <h3 className="font-medium">{product.title}</h3>
                  <span className="font-bold">R$ {product.price.toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                    <span className="text-yellow-500">★</span>
                    <span className="text-sm text-muted-foreground">{product.rating}
                      ({product.likes} likes)
                    </span>
                </div>
                <Button size="sm" variant="outline" onClick={() => addItem(product)}>
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Adicionar
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
        <Button asChild variant="outline" className="rounded-full px-8">
          <Link to="/shop">Explore Our Menu</Link>
        </Button>
        </div>
      </div>
    </section>
);
}
