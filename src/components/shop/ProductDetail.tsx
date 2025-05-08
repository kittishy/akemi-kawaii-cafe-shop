
import { Link, useParams } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { useTheme } from "@/context/ThemeContext";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { ProductImages } from "./product-detail/ProductImages";
import { ProductInfo } from "./product-detail/ProductInfo";
import { ProductReviews } from "./product-detail/ProductReviews";
import { RelatedProducts } from "./product-detail/RelatedProducts";
import { ProductBreadcrumb } from "./product-detail/ProductBreadcrumb";

export function ProductDetail() {
  const { productId } = useParams();
  const { addItem } = useCart();
  const { t } = useTheme();

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

  const handleAddToCart = (quantity: number) => {
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
      <ProductBreadcrumb category={product.category} title={product.title} />

      {/* Product detail */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
        {/* Product images carousel */}
        <ProductImages images={productImages} title={product.title} />

        {/* Product information */}
        <ProductInfo product={product} onAddToCart={handleAddToCart} />
      </div>

      {/* Product reviews */}
      <ProductReviews rating={product.rating} totalReviews={product.likes} reviews={reviews} />

      {/* Related products */}
      <RelatedProducts products={relatedProducts} />
    </div>
  );
}
