
import { useTheme } from "@/context/ThemeContext";
import { motion } from "framer-motion";

export function ShopHero() {
  const { t } = useTheme();
  
  return (
    <motion.div 
      className="k-cafe-bg py-16 relative overflow-hidden"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Elementos decorativos */}
      <motion.div 
        className="absolute top-10 left-10 text-3xl opacity-10"
        animate={{
          y: [0, -10, 0],
          rotate: [0, -5, 0]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        ☕
      </motion.div>
      <motion.div 
        className="absolute bottom-10 right-10 text-3xl opacity-10"
        animate={{
          y: [0, 10, 0],
          rotate: [0, 5, 0]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        🍵
      </motion.div>
      
      <div className="container text-center">
        <motion.h1 
          className="font-display text-4xl md:text-5xl font-bold mb-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {t("shop.title")}
        </motion.h1>
        <motion.p 
          className="text-muted-foreground max-w-lg mx-auto text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {t("shop.description")}
        </motion.p>
        
        <motion.div 
          className="mt-8 text-4xl opacity-30 flex justify-center space-x-4"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.3 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <span>🐱</span>
          <span>☕</span>
          <span>🍰</span>
        </motion.div>
      </div>
    </motion.div>
  );
}
