
import { Link } from "react-router-dom";
import { Coffee, Home, ShoppingBag, Newspaper, Phone, HeadphonesIcon } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { motion } from "framer-motion";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: Array<{ title: string; href: string }>;
}

// Função auxiliar para obter o ícone correspondente ao link
const getNavIcon = (href: string) => {
  switch (href) {
    case "/":
      return <Home className="h-5 w-5" />;
    case "/shop":
      return <ShoppingBag className="h-5 w-5" />;
    case "/about":
      return <Coffee className="h-5 w-5" />;
    case "/blog":
      return <Newspaper className="h-5 w-5" />;
    case "/contact":
      return <Phone className="h-5 w-5" />;
    default:
      return <Coffee className="h-5 w-5" />;
  }
};

export function MobileMenu({ isOpen, onClose, navLinks }: MobileMenuProps) {
  const { t } = useTheme();
  
  // Variantes de animação para o container
  const containerVariants = {
    closed: {
      opacity: 0,
      x: "-100%",
      transition: {
        type: "tween",
        duration: 0.3,
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: "tween",
        duration: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.05,
        staggerDirection: 1
      }
    }
  };

  // Variantes de animação para os itens do menu
  const itemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 }
  };

  return (
    <motion.div 
      className={`
        md:hidden fixed inset-0 top-16 z-40 bg-background/95 backdrop-blur-md transition-all duration-300 ease-in-out transform overflow-hidden
        ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}
      `}
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      variants={containerVariants}
    >
      <div className="relative h-full w-full overflow-x-hidden">
        {/* Elementos decorativos */}
        <div className="absolute top-12 left-4 w-24 h-24 rounded-full bg-primary/10 blur-xl"></div>
        <div className="absolute bottom-24 right-8 w-32 h-32 rounded-full bg-accent/10 blur-xl"></div>
        
        {/* Pegadas decorativas */}
        <div className="absolute top-20 right-8 text-3xl opacity-10 rotate-12">🐾</div>
        <div className="absolute bottom-40 left-12 text-2xl opacity-10 -rotate-12">🐾</div>
        
        <nav className="flex flex-col gap-5 p-8 h-full">
          <div className="mb-4">
            <motion.div 
              className="w-20 h-20 mx-auto mb-4"
              initial={{ rotate: -10, scale: 0.8 }}
              animate={{ rotate: 10, scale: 1 }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                repeatType: "reverse" 
              }}
            >
              <img
                src="/lovable-uploads/lisa-mascot.png"
                alt="Lisa mascote"
                className="w-full h-full object-contain"
              />
            </motion.div>
            <h2 className="text-xl font-display font-bold text-center">Menu</h2>
          </div>
          
          <div className="flex-1">
            {navLinks.map((link) => (
              <motion.div 
                key={link.href}
                variants={itemVariants}
                className="mb-3"
              >
                <Link
                  to={link.href}
                  onClick={(e) => {
                    // Adicionar vibração (se suportada pelo dispositivo)
                    if (navigator.vibrate) {
                      navigator.vibrate(50);
                    }
                    onClose();
                  }}
                  className="flex items-center gap-3 p-4 rounded-xl font-medium text-lg bg-background/80 hover:bg-primary/10 active:bg-primary/20 transition-all border border-border"
                >
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                    {getNavIcon(link.href)}
                  </span>
                  <span>{link.title}</span>
                </Link>
              </motion.div>
            ))}
          </div>
          
          <motion.div variants={itemVariants}>
            <a 
              href="https://t.me/lisascafebot" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-xl font-medium text-lg bg-accent/10 hover:bg-accent/20 active:bg-accent/30 transition-all"
              onClick={() => {
                if (navigator.vibrate) {
                  navigator.vibrate(50);
                }
                onClose();
              }}
            >
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/20 text-accent-foreground">
                <HeadphonesIcon className="h-5 w-5" />
              </span>
              <span>{t("support.telegram")}</span>
            </a>
          </motion.div>
        </nav>
      </div>
    </motion.div>
  );
}
