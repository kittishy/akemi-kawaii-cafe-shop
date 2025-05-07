
import { useTheme } from "@/context/ThemeContext";
import { Button } from "@/components/ui/button";
import { Moon, Sun, MoonStar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  // We need to make sure component is mounted before showing the toggle
  // to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) {
    return null;
  }
  
  return (
    <Button 
      variant="ghost" 
      size="icon" 
      onClick={() => {
        // Vibração para feedback tátil em dispositivos móveis
        if (navigator.vibrate) {
          navigator.vibrate([15, 30, 15]);
        }
        toggleTheme();
      }}
      className="relative h-10 w-10 overflow-hidden rounded-full"
    >
      <div className="w-6 h-6 relative">
        <AnimatePresence mode="wait" initial={false}>
          {theme === "light" ? (
            <motion.div
              key="sun"
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 30, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <Sun className="h-5 w-5" />
              
              {/* Raios de sol animados */}
              <motion.div 
                className="absolute inset-0 opacity-40"
                animate={{ 
                  scale: [1, 1.2, 1], 
                  opacity: [0.4, 0.6, 0.4] 
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  repeatType: "reverse" 
                }}
              >
                <span className="absolute top-0 left-1/2 w-0.5 h-1 bg-current -translate-x-1/2 -translate-y-1"></span>
                <span className="absolute bottom-0 left-1/2 w-0.5 h-1 bg-current -translate-x-1/2 translate-y-1"></span>
                <span className="absolute left-0 top-1/2 h-0.5 w-1 bg-current -translate-y-1/2 -translate-x-1"></span>
                <span className="absolute right-0 top-1/2 h-0.5 w-1 bg-current -translate-y-1/2 translate-x-1"></span>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="moon"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <MoonStar className="h-5 w-5" />
              
              {/* Estrelas animadas */}
              <motion.div 
                className="absolute inset-0 opacity-30"
                initial={{ opacity: 0.3 }}
                animate={{ 
                  opacity: [0.3, 0.7, 0.3] 
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  repeatType: "reverse" 
                }}
              >
                <span className="absolute top-0 right-0 text-[6px]">✦</span>
                <span className="absolute bottom-1 right-1 text-[4px]">✦</span>
                <span className="absolute bottom-0 left-0 text-[5px]">✦</span>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
