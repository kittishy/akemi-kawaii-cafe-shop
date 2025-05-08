
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselApi,
} from "@/components/ui/carousel";
import { ZoomableImage } from "./ZoomableImage";

interface ProductImagesProps {
  images: string[];
  title: string;
}

export function ProductImages({ images, title }: ProductImagesProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [api, setApi] = useState<CarouselApi>();

  // Referência para o carrossel
  const carouselRef = useRef<HTMLDivElement>(null);

  // Configurar o listener para mudanças no carrossel
  const onSelect = () => {
    if (!api) return;
    setCurrentIndex(api.selectedScrollSnap());
  };

  // Atualizar o índice quando o carrossel mudar
  useEffect(() => {
    if (!api) return;
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  // Função para selecionar uma imagem específica
  const selectImage = (index: number) => {
    if (api) {
      api.scrollTo(index);
    }
    setCurrentIndex(index);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-lg overflow-hidden"
    >
      <Carousel 
        className="w-full" 
        setApi={setApi}
        ref={carouselRef}
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="aspect-square relative overflow-hidden rounded-2xl bg-muted">
                <ZoomableImage
                  src={image}
                  alt={`${title} - ${index + 1}`}
                  magnification={2.5}
                  showLens={true}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2" />
        <CarouselNext className="right-2" />
      </Carousel>
      <div className="mt-4 flex justify-center gap-2 flex-wrap">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => selectImage(index)}
            className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${currentIndex === index ? 'border-primary scale-105 shadow-md' : 'border-transparent hover:border-primary/50'}`}
            aria-label={`Ver imagem ${index + 1} de ${images.length}`}
          >
            <img
              src={image}
              alt={`Miniatura ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </motion.div>
  );
}
