
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { useTheme } from "@/context/ThemeContext";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Minus, Plus, ShoppingCart, Heart, Star, ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";

export function ProductDetail() {
  const { productId } = useParams();
  const { addItem } = useCart();
  const { t, language } = useTheme();
  const [quantity, setQuantity] = useState(1);
  const [isLiked, setIsLiked] = useState(false);

  // Find the product with the matching ID
  const product = products.find((p) => p.id === productId);

  // If product not found, display an error
  if (!product) {
    return (
      <div className="container py-16 text-center">
        <h2 className="font-display text-2xl font-bold mb-4">{t("product.not.found")}</h2>
        <p className="text-muted-foreground mb-6">
          {t("product.not.found.desc")}
        </p>
        <Button asChild>
          <Link to="/shop">{t("product.back.to.shop")}</Link>
        </Button>
      </div>
    );
  }

  // Array of product images (normally would come from product data)
  const productImages = [
    product.image,
    "/lovable-uploads/akemi-mascot.png", // additional image
    "/lovable-uploads/akemi-full.png", // additional image
  ];

  const handleQuantityChange = (amount: number) => {
    const newQuantity = quantity + amount;
    if (newQuantity >= 1 && newQuantity <= product.stock) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    addItem(product, quantity);
  };

  // Simulate related products
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  // Simulated reviews
  const reviews = [
    {
      id: 1,
      name: "Maria Silva",
      avatar: "/placeholder.svg",
      rating: 5,
      date: "12/04/2023",
      comment: "Simplesmente delicioso! O sabor é perfeito e a embalagem super fofa. Recomendo muito!",
    },
    {
      id: 2,
      name: "João Pereira",
      avatar: "/placeholder.svg",
      rating: 4,
      date: "28/03/2023",
      comment: "Excelente produto, só achei um pouco caro. Mas vale cada centavo pela qualidade.",
    },
    {
      id: 3,
      name: "Ana Costa",
      avatar: "/placeholder.svg",
      rating: 5,
      date: "15/02/2023",
      comment: "Já comprei várias vezes e sempre com a mesma qualidade. A Akemi acertou na formulação!",
    },
  ];

  return (
    <div className="container py-10">
      {/* Breadcrumb */}
      <div className="mb-8 text-sm flex items-center">
        <Button variant="ghost" size="sm" className="mr-2" asChild>
          <Link to="/shop">
            <ArrowLeft className="h-4 w-4 mr-1" />
            {t("nav.shop")}
          </Link>
        </Button>
        <div className="flex items-center text-muted-foreground">
          <Link to="/" className="hover:text-foreground transition-colors">{t("nav.home")}</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-foreground transition-colors">{t("nav.shop")}</Link>
          <span className="mx-2">/</span>
          <Link to={`/shop?category=${product.category}`} className="hover:text-foreground transition-colors">
            {t(`products.category.${product.category}`)}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">{product.title}</span>
        </div>
      </div>

      {/* Product detail */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
        {/* Product images carousel */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-lg overflow-hidden"
        >
          <Carousel className="w-full">
            <CarouselContent>
              {productImages.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="aspect-square relative overflow-hidden rounded-2xl bg-muted">
                    <img
                      src={image}
                      alt={`${product.title} - ${index + 1}`}
                      className="w-full h-full object-cover transition-transform hover:scale-110 duration-700"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
          <div className="mt-4 flex justify-center gap-2">
            {productImages.map((image, index) => (
              <button
                key={index}
                className="w-16 h-16 rounded-lg overflow-hidden border-2 border-transparent hover:border-primary transition-all"
              >
                <img
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </motion.div>

        {/* Product information */}
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
      </div>

      {/* Product reviews */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mb-20"
      >
        <h2 className="font-display text-3xl font-bold mb-8">{t("product.reviews")}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
            <div className="flex items-center gap-4 mb-4">
              <div className="text-5xl font-bold">{product.rating}</div>
              <div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating)
                          ? "fill-yellow-500 text-yellow-500"
                          : "text-muted-foreground"
                      }`}
                    />
                  ))}
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  {language === "pt-BR" ? "Baseado em" : "Based on"} {product.likes} {language === "pt-BR" ? "avaliações" : "reviews"}
                </div>
              </div>
            </div>
            
            <div className="space-y-3 mt-6">
              {[5, 4, 3, 2, 1].map((rating) => (
                <div key={rating} className="flex items-center gap-2">
                  <span className="text-sm">{rating} {language === "pt-BR" ? "estrelas" : "stars"}</span>
                  <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-yellow-500"
                      style={{
                        width: `${rating === Math.floor(product.rating) ? "70%" : 
                                rating === Math.floor(product.rating) + 1 ? "20%" : 
                                rating === Math.floor(product.rating) - 1 ? "10%" : "0%"}`
                      }}
                    ></div>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {rating === Math.floor(product.rating) ? "70%" : 
                     rating === Math.floor(product.rating) + 1 ? "20%" : 
                     rating === Math.floor(product.rating) - 1 ? "10%" : "0%"}
                  </span>
                </div>
              ))}
            </div>
            
            <Button className="w-full mt-8 rounded-full">
              {language === "pt-BR" ? "Avaliar este produto" : "Rate this product"}
            </Button>
          </div>
          
          <div className="space-y-4">
            {reviews.map((review) => (
              <motion.div 
                key={review.id} 
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={review.avatar} alt={review.name} />
                      <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-medium">{review.name}</h4>
                      <div className="flex items-center gap-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-3 w-3 ${
                                i < review.rating
                                  ? "fill-yellow-500 text-yellow-500"
                                  : "text-muted-foreground"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-xs text-muted-foreground">
                          {review.date}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm">{review.comment}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Related products */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <h2 className="font-display text-3xl font-bold mb-8">{t("product.related")}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {relatedProducts.map((product) => (
            <motion.div 
              key={product.id} 
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg transition-all"
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <h3 className="font-medium text-lg">{product.title}</h3>
                <div className="flex justify-between items-center mt-4">
                  <span className="font-bold text-xl">{language === "pt-BR" ? "R$" : "$"} {product.price.toFixed(2)}</span>
                  <Button asChild size="sm" variant="outline" className="rounded-full">
                    <Link to={`/product/${product.id}`}>
                      {language === "pt-BR" ? "Ver detalhes" : "View details"}
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
