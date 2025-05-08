
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Product } from "@/context/CartContext";
import { useTheme } from "@/context/ThemeContext";

interface RelatedProductsProps {
  products: Product[];
}

export function RelatedProducts({ products }: RelatedProductsProps) {
  const { language } = useTheme();

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      <h2 className="font-display text-3xl font-bold mb-8">
        {language === "pt-BR" ? "Produtos Relacionados" : "Related Products"}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product) => (
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
  );
}
