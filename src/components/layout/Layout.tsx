
import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Decorative paw print patterns */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <motion.div 
          className="absolute top-20 left-5 text-lg text-primary/5 dark:text-primary/10"
          animate={{ 
            y: [0, 10, 0],
            rotate: [0, 5, 0],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{ 
            duration: 8, 
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          🐾
        </motion.div>
        <motion.div 
          className="absolute bottom-40 right-10 text-xl text-primary/5 dark:text-primary/10"
          animate={{ 
            y: [0, -10, 0],
            rotate: [0, -10, 0],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ 
            duration: 10, 
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          🐾
        </motion.div>
        <motion.div 
          className="absolute top-1/3 right-1/4 text-sm text-primary/5 dark:text-primary/10"
          animate={{ 
            y: [0, 5, 0],
            rotate: [0, 15, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ 
            duration: 12, 
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          🐾
        </motion.div>
      </div>
      
      <Header />
      <ScrollArea className="flex-1 relative z-10">
        <main className="flex-1">
          {children}
        </main>
        {/* Back to top button */}
        <BackToTop />
      </ScrollArea>
      <Footer />
    </div>
  );
}

// Back to Top Button Component
function BackToTop() {
  const [visible, setVisible] = React.useState(false);
  
  React.useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    
    // Vibration feedback
    if (navigator.vibrate) {
      navigator.vibrate([15, 30, 15]);
    }
  };
  
  return (
    <motion.button
      className={`fixed bottom-6 right-6 p-3 rounded-full bg-primary/80 text-primary-foreground shadow-lg z-50 ${
        visible ? 'flex' : 'hidden'
      } items-center justify-center`}
      onClick={scrollToTop}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 20 }}
      transition={{ duration: 0.2 }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m18 15-6-6-6 6"/>
      </svg>
      <span className="absolute -top-1 -right-1 text-xs">🐾</span>
    </motion.button>
  );
}
