
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Minus, Plus, ShoppingCart, Heart, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function ProductDetail() {
  const { productId } = useParams();
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [isLiked, setIsLiked] = useState(false);

  // Find the product with the matching ID
  const product = products.find((p) => p.id === productId);

  // If product not found, display an error
  if (!product) {
    return (
      <div className="container py-16 text-center">
        <h2 className="font-display text-2xl font-bold mb-4">Produto não encontrado</h2>
        <p className="text-muted-foreground mb-6">
          O produto que você está procurando não existe ou foi removido.
        </p>
        <Button asChild>
          <Link to="/shop">Voltar para a loja</Link>
        </Button>
      </div>
    );
  }

  // Array of product images (normally would come from product data)
  const productImages = [
    product.image,
    "/lovable-uploads/lisa-mascot.png", // additional image
    "/lovable-uploads/lisa-full.png", // additional image
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
      comment: "Já comprei várias vezes e sempre com a mesma qualidade. A Lisa acertou na formulação!",
    },
  ];

  return (
    <div className="container py-10">
      {/* Breadcrumb */}
      <div className="mb-6 text-sm">
        <Link to="/" className="text-muted-foreground hover:text-foreground">Home</Link>
        <span className="mx-2">/</span>
        <Link to="/shop" className="text-muted-foreground hover:text-foreground">Loja</Link>
        <span className="mx-2">/</span>
        <Link to={`/shop?category=${product.category}`} className="text-muted-foreground hover:text-foreground">
          {product.category === "coffee" ? "Café" : 
           product.category === "tea" ? "Chá" :
           product.category === "milkshake" ? "Milkshake" : "Produtos"}
        </Link>
        <span className="mx-2">/</span>
        <span>{product.title}</span>
      </div>

      {/* Product detail */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
        {/* Product images carousel */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-md">
          <Carousel className="w-full">
            <CarouselContent>
              {productImages.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="aspect-square relative overflow-hidden rounded-2xl bg-muted">
                    <img
                      src={image}
                      alt={`${product.title} - imagem ${index + 1}`}
                      className="w-full h-full object-cover transition-transform hover:scale-110 duration-500"
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
        </div>

        {/* Product information */}
        <div className="space-y-6">
          <div>
            <Badge variant="secondary" className="mb-2">
              {product.category === "coffee" ? "Café" : 
               product.category === "tea" ? "Chá" :
               product.category === "milkshake" ? "Milkshake" : "Produto"}
            </Badge>
            <h1 className="font-display text-3xl font-bold">{product.title}</h1>
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
                {product.rating} ({product.likes} avaliações)
              </span>
            </div>
          </div>

          <div className="text-2xl font-bold">
            R$ {product.price.toFixed(2)}
          </div>

          <div>
            <h3 className="font-medium mb-2">Descrição</h3>
            <p className="text-muted-foreground">
              {product.description}
            </p>
            <p className="text-muted-foreground mt-2">
              Aproveite este produto especial do Lisa's Cafe, feito com ingredientes cuidadosamente selecionados para proporcionar uma experiência única de sabor e aroma.
            </p>
          </div>

          <div>
            <h3 className="font-medium mb-2">Disponibilidade</h3>
            <p className={`${product.stock > 0 ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}`}>
              {product.stock > 0 
                ? `Em estoque (${product.stock} unidades)` 
                : "Fora de estoque"}
            </p>
          </div>

          <div className="pt-4">
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center border rounded-full">
                <button
                  onClick={() => handleQuantityChange(-1)}
                  disabled={quantity <= 1}
                  className="px-3 py-2 text-muted-foreground hover:text-foreground disabled:opacity-50"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="px-4 font-medium">{quantity}</span>
                <button
                  onClick={() => handleQuantityChange(1)}
                  disabled={quantity >= product.stock}
                  className="px-3 py-2 text-muted-foreground hover:text-foreground disabled:opacity-50"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              
              <Button
                variant="outline"
                size="icon"
                onClick={() => setIsLiked(!isLiked)}
                className="rounded-full"
              >
                <Heart className={`h-5 w-5 ${isLiked ? "fill-red-500 text-red-500" : ""}`} />
              </Button>
            </div>

            <Button
              onClick={handleAddToCart}
              className="w-full rounded-full"
              size="lg"
              disabled={product.stock <= 0}
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
              Adicionar ao carrinho
            </Button>
          </div>
        </div>
      </div>

      {/* Product reviews */}
      <section className="mb-16">
        <h2 className="font-display text-2xl font-bold mb-6">Avaliações de Clientes</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md">
            <div className="flex items-center gap-4 mb-2">
              <div className="text-4xl font-bold">{product.rating}</div>
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
                  Baseado em {product.likes} avaliações
                </div>
              </div>
            </div>
            
            <div className="space-y-2 mt-4">
              {[5, 4, 3, 2, 1].map((rating) => (
                <div key={rating} className="flex items-center gap-2">
                  <span className="text-sm">{rating} estrelas</span>
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
            
            <Button className="w-full mt-6 rounded-full">
              Avaliar este produto
            </Button>
          </div>
          
          <div className="space-y-4">
            {reviews.map((review) => (
              <div key={review.id} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md">
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related products */}
      <section>
        <h2 className="font-display text-2xl font-bold mb-6">Produtos relacionados</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {relatedProducts.map((product) => (
            <div key={product.id} className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md transition-all hover:shadow-lg">
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium">{product.title}</h3>
                <div className="flex justify-between items-center mt-2">
                  <span className="font-bold">R$ {product.price.toFixed(2)}</span>
                  <Button asChild size="sm" variant="outline">
                    <Link to={`/product/${product.id}`}>
                      Ver detalhes
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
