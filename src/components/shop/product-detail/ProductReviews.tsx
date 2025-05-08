
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useTheme } from "@/context/ThemeContext";

interface Review {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  date: string;
  comment: string;
}

interface ProductReviewsProps {
  rating: number;
  totalReviews: number;
  reviews: Review[];
}

export function ProductReviews({ rating, totalReviews, reviews }: ProductReviewsProps) {
  const { language } = useTheme();
  
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="mb-20"
    >
      <h2 className="font-display text-3xl font-bold mb-8">
        {language === "pt-BR" ? "Avaliações" : "Reviews"}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
          <div className="flex items-center gap-4 mb-4">
            <div className="text-5xl font-bold">{rating}</div>
            <div>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(rating)
                        ? "fill-yellow-500 text-yellow-500"
                        : "text-muted-foreground"
                    }`}
                  />
                ))}
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                {language === "pt-BR" ? "Baseado em" : "Based on"} {totalReviews} {language === "pt-BR" ? "avaliações" : "reviews"}
              </div>
            </div>
          </div>
          
          <div className="space-y-3 mt-6">
            {[5, 4, 3, 2, 1].map((ratingValue) => (
              <div key={ratingValue} className="flex items-center gap-2">
                <span className="text-sm">{ratingValue} {language === "pt-BR" ? "estrelas" : "stars"}</span>
                <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-yellow-500"
                    style={{
                      width: `${ratingValue === Math.floor(rating) ? "70%" : 
                              ratingValue === Math.floor(rating) + 1 ? "20%" : 
                              ratingValue === Math.floor(rating) - 1 ? "10%" : "0%"}`
                    }}
                  ></div>
                </div>
                <span className="text-sm text-muted-foreground">
                  {ratingValue === Math.floor(rating) ? "70%" : 
                   ratingValue === Math.floor(rating) + 1 ? "20%" : 
                   ratingValue === Math.floor(rating) - 1 ? "10%" : "0%"}
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
  );
}
