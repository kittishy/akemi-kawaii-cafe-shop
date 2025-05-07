
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

interface DesktopNavigationProps {
  navLinks: Array<{ title: string; href: string }>;
}

export function DesktopNavigation({ navLinks }: DesktopNavigationProps) {
  const location = useLocation();
  
  return (
    <nav className="hidden md:flex items-center gap-1">
      {navLinks.map((link) => {
        const isActive = location.pathname === link.href;
        
        return (
          <Link
            key={link.href}
            to={link.href}
            className="relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
          >
            <span className="relative z-10">{link.title}</span>
            
            {/* Animação de underline para o item ativo */}
            {isActive && (
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                layoutId="activeNavIndicator"
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.2 }}
              />
            )}
            
            {/* Animação de hover com scaling e decorative paw */}
            <motion.div
              className="absolute -inset-1 rounded-md z-0"
              initial={false}
              whileHover={{ 
                backgroundColor: "rgba(var(--primary), 0.1)",
                scale: 1.03
              }}
              transition={{ duration: 0.2 }}
            />
            
            {/* Pequena pata decorativa no hover */}
            <motion.span 
              className="absolute -right-1 -bottom-1 text-xs opacity-0 text-primary/70"
              initial={false}
              whileHover={{ opacity: 1, y: -2, x: -2 }}
              transition={{ duration: 0.2 }}
            >
              🐾
            </motion.span>
          </Link>
        );
      })}
    </nav>
  );
}
