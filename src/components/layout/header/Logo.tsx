
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface LogoProps {
  isScrolled?: boolean;
}

export function Logo({ isScrolled = false }: LogoProps) {
  return (
    <Link to="/" className="flex items-center space-x-2">
      <motion.div 
        className={`relative overflow-hidden rounded-full ${isScrolled ? "w-10 h-10" : "w-12 h-12"}`}
        initial={{ rotate: 0 }}
        whileHover={{ 
          rotate: [0, -5, 5, 0], 
          scale: 1.05,
          transition: { duration: 0.6 } 
        }}
        transition={{ duration: 0.2 }}
      >
        <img
          src="/lovable-uploads/7eda1067-8586-41ec-8b78-50ec5763e70a.png"
          alt="Akemi Kawaii Cafe Shop"
          className="w-full h-full object-contain"
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
        className="hidden sm:inline-flex"
        animate={{ opacity: isScrolled ? 0.9 : 1, scale: isScrolled ? 0.95 : 1 }}
        transition={{ duration: 0.2 }}
      >
        <span className="font-display font-bold text-xl">Akemi Cafe</span>
      </motion.div>
    </Link>
  );
}
