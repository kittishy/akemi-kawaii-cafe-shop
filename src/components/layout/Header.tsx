
import { useState, useEffect } from "react";
import { useTheme } from "@/context/ThemeContext";
import { Button } from "@/components/ui/button";
import { Menu, X, Headphones } from "lucide-react";
import { Logo } from "./header/Logo";
import { DesktopNavigation } from "./header/DesktopNavigation";
import { MobileMenu } from "./header/MobileMenu";
import { HeaderActions } from "./header/HeaderActions";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

export function Header() {
  const { t } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Animation for header based on scroll
  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 50], [0.8, 1]);
  const headerShadow = useTransform(
    scrollY, 
    [0, 50], 
    ["0 0 0 rgba(0,0,0,0)", "0 4px 20px rgba(0,0,0,0.1)"]
  );

  const navLinks = [
    { title: t("nav.home"), href: "/" },
    { title: t("nav.shop"), href: "/shop" },
    { title: t("nav.about"), href: "/about" },
    { title: t("nav.blog"), href: "/blog" },
    { title: t("nav.contact"), href: "/contact" },
  ];
  
  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle support button click
  const handleSupportClick = () => {
    // Link to Lisa's CaféShop Discord server
    window.open("https://discord.gg/akemi-kawaii-cafe", "_blank"); // Ellen: Replace with the real Discord link.
    // Vibration feedback for mobile
    if (navigator.vibrate) {
      navigator.vibrate(50);
    }
  };

  return (
    <motion.header 
      className={`sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b transition-all duration-300 ${
        isScrolled ? "border-border py-1" : "border-transparent py-2"
      }`}
      style={{
        boxShadow: headerShadow,
        opacity: headerOpacity
      }}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-10">
          {/* Mobile Menu Button */}
          <AnimatePresence>
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden relative overflow-hidden group"
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
                // Vibration for tactile feedback
                if (navigator.vibrate) {
                  navigator.vibrate(50);
                }
              }}
            >
              <span className="sr-only">Toggle menu</span>
              <div className="relative w-6 h-6">
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  initial={false}
                  animate={isMenuOpen ? { opacity: 1, rotate: 0 } : { opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-6 w-6" />
                </motion.div>
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  initial={false}
                  animate={isMenuOpen ? { opacity: 0, rotate: 90 } : { opacity: 1, rotate: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-6 w-6" />
                </motion.div>
              </div>
              <motion.div
                className="absolute bottom-1.5 left-1/2 h-0.5 bg-current transform -translate-x-1/2 origin-center"
                initial={false}
                animate={isMenuOpen 
                  ? { width: "60%", opacity: 1 } 
                  : { width: "20%", opacity: 0.5 }
                }
                transition={{ duration: 0.2 }}
              />
            </Button>
          </AnimatePresence>
          
          {/* Logo with animation */}
          <Logo isScrolled={isScrolled} />
        </div>
        
        {/* Desktop Navigation */}
        <DesktopNavigation navLinks={navLinks} />

        {/* Mobile Navigation */}
        <MobileMenu 
          isOpen={isMenuOpen} 
          onClose={() => setIsMenuOpen(false)} 
          navLinks={navLinks} 
        />
        
        {/* Actions */}
        <div className="flex items-center gap-2">
          {/* Support Button */}
          <Button 
            variant="ghost" 
            size="icon"
            className="relative overflow-hidden"
            onClick={handleSupportClick}
          >
            <Headphones className="h-5 w-5" />
            <span className="sr-only">Akemi Support</span>
          </Button>
          
          <HeaderActions />
        </div>
      </div>
      
      {/* Decorative paw prints that appear when scrolled */}
      <AnimatePresence>
        {isScrolled && (
          <>
            <motion.div 
              className="absolute -left-4 top-1/2 text-primary/20 hidden md:block pointer-events-none"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              🐾
            </motion.div>
            <motion.div 
              className="absolute -right-4 top-1/2 text-primary/20 hidden md:block pointer-events-none"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
            >
              🐾
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
