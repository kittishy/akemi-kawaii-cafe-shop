import { useState } from "react";
import { motion } from "framer-motion";
import { Minus, Plus, ShoppingCart, Heart, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Product } from "@/context/CartContext";
import { useTheme } from "@/context/ThemeContext";

interface ProductInfoProps {
  product: Product;
  onAddToCart: (quantity: number) => void;
}

export function ProductInfo({ product, onAddToCart }: ProductInfoProps) {
  const { t, language } = useTheme();
  const [quantity, setQuantity] = useState(1);
  const [isLiked, setIsLiked] = useState(false);

  const handleQuantityChange = (amount: number) => {
    const newQuantity = quantity + amount;
    if (newQuantity >= 1 && newQuantity <= product.stock) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    onAddToCart(quantity);
  };

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
              onClick={() => setIsLiked(!isLiked)}
              className="rounded-full"
            >
              <Heart className={`h-5 w-5 ${isLiked ? "fill-red-500 text-red-500" : ""}`} />
            </Button>
          </motion.div>
        </div>

        <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 400 }}>
          <Button
            onClick={handleAddToCart}
            className="w-full rounded-full py-6 text-base"
            size="lg"
            disabled={product.stock <= 0}
          >
            <ShoppingCart className="mr-2 h-5 w-5" />
            {t("product.add.to.cart")}
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
}
