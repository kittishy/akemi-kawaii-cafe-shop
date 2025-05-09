
import { useTheme } from "@/context/ThemeContext";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Coffee, ArrowRight, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

export function HeroSection() {
  const { t } = useTheme();
  const isMobile = useIsMobile();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };
  
  return (
    <section className="relative overflow-hidden">
      {/* Background com efeito de onda */}
      <div className="absolute inset-0 bg-gradient-to-br from-lisa-cream via-white to-lisa-baby-blue/20 dark:from-lisa-dark-blue/30 dark:via-gray-900 dark:to-gray-900 -z-10">
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-background" 
             style={{ clipPath: "ellipse(70% 100% at 50% 100%)" }}></div>
        
        {/* Elementos decorativos flutuantes */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl opacity-40 dark:opacity-20"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl opacity-40 dark:opacity-20"></div>
        
        {/* Padrão de patas sutis */}
        <div className="absolute inset-0 bg-repeat opacity-5" 
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8.5 22a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zm13-7a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm14 7a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-32 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM28 28a3 3 0 1 0 0-6 3 3 0 0 0 0 6z' fill='currentColor' fill-rule='evenodd'/%3E%3C/svg%3E")` }}
        ></div>
      </div>
      
      <motion.div 
        className="container pt-10 lg:pt-16 pb-24 lg:pb-32"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6">
            <motion.div variants={itemVariants}>
              <span className="inline-block px-4 py-1.5 rounded-full bg-lisa-lavender dark:bg-lisa-dark-lavender/40 text-sm font-medium mb-3">
                <div className="flex items-center gap-2">
                  <Coffee className="h-4 w-4" />
                  <span>{t("hero.badge")}</span>
                </div>
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold">
                {t("hero.title")}
                <motion.div 
                  className="h-1.5 w-24 bg-primary rounded-full mt-4 mb-4"
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: 96, opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                />
              </h1>
            </motion.div>
            
            <motion.p 
              className="text-lg text-muted-foreground md:text-xl max-w-lg"
              variants={itemVariants}
            >
              {t("hero.subtitle")}
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 pt-2"
              variants={itemVariants}
            >
              <Button asChild size="lg" className="rounded-full px-8 h-12 text-base">
                <Link to="/shop" className="group">
                  <ShoppingBag className="h-5 w-5 mr-2 transition-transform group-hover:scale-110" />
                  {t("hero.cta")}
                  <motion.span 
                    className="absolute right-3 opacity-0"
                    initial={false}
                    whileHover={{ 
                      x: [0, 5, 0],
                      opacity: [0, 1, 0],
                      transition: { 
                        repeat: Infinity,
                        duration: 1.5
                      }
                    }}
                  >
                    <ArrowRight className="h-5 w-5" />
                  </motion.span>
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8 h-12 text-base">
                <Link to="/about">
                  <Coffee className="h-5 w-5 mr-2" />
                  {t("hero.about")}
                </Link>
              </Button>
            </motion.div>
            
            <motion.div
              className="flex items-center gap-4 pt-4"
              variants={itemVariants}
            >
              <div className="flex -space-x-3">
                {['#ffb6c1', '#add8e6', '#fdfd96'].map((color, index) => (
                  <motion.div 
                    key={index}
                    className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800 flex items-center justify-center text-base"
                    style={{ backgroundColor: color, zIndex: 3 - index }}
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    {index === 0 ? '😺' : index === 1 ? '🐱' : '😸'}
                  </motion.div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                <span className="font-medium">500+</span> {t("hero.customers")}
              </p>
            </motion.div>
          </div>
          
          <motion.div 
            className="relative order-first md:order-last"
            variants={itemVariants}
          >
            {/* Efeitos de luz */}
            <motion.div 
              className="absolute -top-10 -left-10 w-40 h-40 bg-primary/20 rounded-full filter blur-3xl"
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
            <motion.div 
              className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent/20 rounded-full filter blur-3xl"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
            
            {/* Conteúdo principal da imagem */}
            <motion.div 
              className="relative bg-white dark:bg-gray-800 rounded-3xl p-4 shadow-xl"
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <img 
                src="/lovable-uploads/77e34000-1c92-4c67-877d-b08f50e4a2ce.png" 
                alt="Lisa Mascote" 
                className="w-full h-auto rounded-2xl"
              />
              
              {/* Elementos decorativos animados */}
              <motion.div 
                className="absolute -bottom-5 -right-5 bg-white dark:bg-gray-700 rounded-full p-3 shadow-lg"
                animate={{ 
                  rotate: [-5, 5, -5],
                  y: [-2, 2, -2],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                <span className="text-2xl">🐾</span>
              </motion.div>
              
              {/* Bolhas de fala / pensamento */}
              <motion.div
                className="absolute -top-8 left-1/2 bg-white dark:bg-gray-700 px-4 py-2 rounded-xl shadow-md transform -translate-x-1/2 max-w-[180px]"
                initial={{ opacity: 0, y: 10, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 1 }}
              >
                <p className="text-sm text-center font-medium">
                  Bem-vindo ao Lisa's Café! 😺
                </p>
                <div className="absolute h-4 w-4 bg-white dark:bg-gray-700 transform rotate-45 -bottom-2 left-1/2 -translate-x-1/2"></div>
              </motion.div>
            </motion.div>
            
            {/* Badge flutuante */}
            {!isMobile && (
              <motion.div
                className="absolute top-5 -right-10 bg-accent/10 backdrop-blur-sm text-accent-foreground px-4 py-2 rounded-full shadow border border-accent/30"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.5 }}
              >
                <div className="flex items-center gap-2">
                  <span className="text-lg">🌟</span>
                  <span className="text-sm font-medium">Entrega grátis</span>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
        
        {/* Elemento decorativo de rolagem */}
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7, y: [0, 10, 0] }}
          transition={{ 
            opacity: { delay: 2, duration: 1 },
            y: { 
              delay: 2, 
              duration: 2, 
              repeat: Infinity,
              repeatType: "reverse" 
            }
          }}
        >
          <span className="text-sm text-muted-foreground mb-2">Role para ver mais</span>
          <div className="w-6 h-9 rounded-full border-2 border-muted-foreground flex items-start justify-center p-1">
            <motion.div 
              className="w-1.5 h-2 bg-muted-foreground rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop"
              }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
