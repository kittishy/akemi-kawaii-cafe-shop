import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Minus, Plus, ShoppingCart, Heart, Star, Check, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Product } from "@/context/CartContext";
import { useTheme } from "@/context/ThemeContext";
import { useFavorites } from "@/context/FavoritesContext";
import { SocialShare } from "./SocialShare";
import { toast } from "@/components/ui/sonner";
import { ProductInfoSkeleton } from "./ProductInfoSkeleton";
import { Separator } from "@/components/ui/separator";

interface ProductInfoProps {
  product: Product;
  onAddToCart: (quantity: number) => void;
  isLoading?: boolean;
  allProducts?: Product[];
}

export function ProductInfo({ product, onAddToCart, isLoading = false, allProducts = [] }: ProductInfoProps) {
  const { t, language } = useTheme();
  const { toggleFavorite, isFavorite, addToRecentlyViewed, recentlyViewed, updateRecommendations, recommendations } = useFavorites();
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);
  
  // Registrar visualização do produto
  useEffect(() => {
    if (product && !isLoading) {
      addToRecentlyViewed(product);
      
      // Atualizar recomendações baseadas no produto atual
      if (allProducts.length > 0) {
        updateRecommendations(allProducts, product.id);
      }
    }
  }, [product?.id, isLoading]);

  const handleQuantityChange = (amount: number) => {
    const newQuantity = quantity + amount;
    if (newQuantity >= 1 && newQuantity <= product.stock) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    setIsAdding(true);
    onAddToCart(quantity);
    
    // Mostrar feedback visual
    toast.success(
      language === "pt-BR" 
        ? `${quantity} ${quantity > 1 ? 'itens adicionados' : 'item adicionado'} ao carrinho` 
        : `${quantity} ${quantity > 1 ? 'items' : 'item'} added to cart`
    );
    
    // Resetar estado após animação
    setTimeout(() => {
      setIsAdding(false);
    }, 1000);
  };

  if (isLoading) {
    return <ProductInfoSkeleton />;
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="space-y-6"
    >
      <div>
        <Badge variant="secondary" className="mb-2">
          {t(`products.category.${product.category}`)}
        </Badge>
        <h1 className="font-display text-4xl font-bold">{product.title}</h1>
        <div className="flex items-center gap-2 mt-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(product.rating)
                    ? "fill-yellow-500 text-yellow-500"
                    : "text-muted-foreground"
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">
            {product.rating} ({product.likes} {language === "pt-BR" ? "avaliações" : "reviews"})
          </span>
        </div>
      </div>

      <div className="text-3xl font-bold">
        {language === "pt-BR" ? "R$" : "$"} {product.price.toFixed(2)}
      </div>

      <div className="border-t border-b py-6 my-6">
        <h3 className="font-medium mb-2">{t("product.description")}</h3>
        <p className="text-muted-foreground">
          {product.description}
        </p>
        <p className="text-muted-foreground mt-2">
          {t("product.description.extra")}
        </p>
      </div>

      <div>
        <h3 className="font-medium mb-2">{t("product.availability")}</h3>
        <p className={`${product.stock > 0 ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}`}>
          {product.stock > 0 
            ? `${t("product.in.stock")} (${product.stock} ${t("product.units")})` 
            : t("product.out.of.stock")}
        </p>
      </div>

      <div className="pt-4">
        <div className="flex items-center gap-4 mb-6">
          <span className="text-sm font-medium">{t("product.quantity")}:</span>
          <div className="flex items-center border rounded-full bg-background shadow-sm">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => handleQuantityChange(-1)}
              disabled={quantity <= 1}
              className="px-3 py-2 text-muted-foreground hover:text-foreground disabled:opacity-50 transition-colors"
            >
              <Minus className="h-4 w-4" />
            </motion.button>
            <span className="px-4 font-medium">{quantity}</span>
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => handleQuantityChange(1)}
              disabled={quantity >= product.stock}
              className="px-3 py-2 text-muted-foreground hover:text-foreground disabled:opacity-50 transition-colors"
            >
              <Plus className="h-4 w-4" />
            </motion.button>
          </div>
          
          <motion.div whileTap={{ scale: 0.9 }}>
            <Button
              variant="outline"
              size="icon"
              onClick={() => toggleFavorite(product.id)}
              className="rounded-full"
            >
              <Heart className={`h-5 w-5 ${isFavorite(product.id) ? "fill-red-500 text-red-500" : ""}`} />
            </Button>
          </motion.div>
        </div>

        <div className="flex gap-3 mt-4">
          <Button 
            size="lg" 
            className="flex-1 gap-2 relative overflow-hidden" 
            onClick={handleAddToCart}
            disabled={product.stock <= 0 || isAdding}
          >
            <AnimatePresence mode="wait">
              {isAdding ? (
                <motion.div
                  key="adding"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="absolute inset-0 flex items-center justify-center bg-primary"
                >
                  <Check className="h-5 w-5" />
                </motion.div>
              ) : (
                <motion.div 
                  key="normal"
                  className="flex items-center gap-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <ShoppingCart className="h-5 w-5" />
                  {t("product.add.to.cart")}
                </motion.div>
              )}
            </AnimatePresence>
          </Button>
          <Button 
            size="icon" 
            variant="outline" 
            className="h-12 w-12 rounded-full" 
            onClick={() => toggleFavorite(product.id)}
          >
            <Heart className={`h-5 w-5 ${isFavorite(product.id) ? "fill-red-500 text-red-500" : ""}`} />
          </Button>
        </div>
        
        {/* Componente de compartilhamento social */}
        <SocialShare 
          url={window.location.href} 
          title={product.title} 
          image={product.images && product.images.length > 0 ? product.images[0] : undefined} 
        />
      </div>

      {/* Produtos visualizados recentemente */}
      {recentlyViewed.length > 1 && (
        <div className="mt-8">
          <Separator className="my-4" />
          <div className="flex items-center gap-2 mb-4">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <h3 className="font-medium">{t("product.recently.viewed") || "Visualizados recentemente"}</h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {recentlyViewed
              .filter(item => item.id !== product.id)
              .slice(0, 4)
              .map(item => (
                <motion.a 
                  key={item.id}
                  href={`/product/${item.id}`}
                  className="block group"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
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
                    {language === "pt-BR" ? "R$" : "$"} {item.price.toFixed(2)}
                  </p>
                </motion.a>
              ))}
          </div>
        </div>
      )}

      {/* Recomendações de produtos */}
      {recommendations.length > 0 && (
        <div className="mt-8">
          <Separator className="my-4" />
          <h3 className="font-medium mb-4">{t("product.recommendations") || "Você pode gostar também"}</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {recommendations.slice(0, 4).map(item => (
              <motion.a 
                key={item.id}
                href={`/product/${item.id}`}
                className="block group"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
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
                  {language === "pt-BR" ? "R$" : "$"} {item.price.toFixed(2)}
                </p>
              </motion.a>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
}
