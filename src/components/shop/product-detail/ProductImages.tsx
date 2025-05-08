
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface ProductImagesProps {
  images: string[];
  title: string;
}

export function ProductImages({ images, title }: ProductImagesProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-lg overflow-hidden"
    >
      <Carousel className="w-full">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="aspect-square relative overflow-hidden rounded-2xl bg-muted">
                <img
                  src={image}
                  alt={`${title} - ${index + 1}`}
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
        {images.map((image, index) => (
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
  );
}
