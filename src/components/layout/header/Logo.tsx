
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

interface LogoProps {
  isScrolled?: boolean;
}

export function Logo({ isScrolled = false }: LogoProps) {
  const { language } = useTheme();
  
  return (
    <Link to="/" className="flex items-center space-x-3">
      <motion.div 
        className={`relative overflow-hidden rounded-full bg-white/90 shadow-md ${isScrolled ? "w-10 h-10" : "w-12 h-12"}`}
        initial={{ rotate: 0 }}
        whileHover={{ 
          rotate: [0, -5, 5, 0], 
          scale: 1.05,
          transition: { duration: 0.6, type: "spring" } 
        }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
      >
        <img
          src="/lovable-uploads/7eda1067-8586-41ec-8b78-50ec5763e70a.png"
          alt="Akemi Kawaii Cafe Shop"
          className="w-full h-full object-contain p-1"
        />
        
        {/* Elemento decorativo de pata que aparece no hover */}
        <motion.div 
          className="absolute -bottom-6 -right-6 text-2xl opacity-0"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1, y: -5, x: -5, rotate: 15 }}
        >
          🐾
        </motion.div>
      </motion.div>
      
      <motion.div 
        className="hidden sm:inline-flex flex-col justify-center"
        animate={{ opacity: isScrolled ? 0.9 : 1, scale: isScrolled ? 0.95 : 1 }}
        transition={{ duration: 0.2 }}
      >
        <span className="font-display font-bold text-xl leading-tight">Akemi</span>
        <span className="text-xs text-muted-foreground leading-tight">
          {language === "pt-BR" ? "Café & Doces" : "Café & Sweets"}
        </span>
      </motion.div>
    </Link>
  );

}
