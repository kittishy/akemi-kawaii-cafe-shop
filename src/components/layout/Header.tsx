
import { useState, useEffect } from "react";
import { useTheme } from "@/context/ThemeContext";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Logo } from "./header/Logo";
import { DesktopNavigation } from "./header/DesktopNavigation";
import { MobileMenu } from "./header/MobileMenu";
import { HeaderActions } from "./header/HeaderActions";
import { motion, useScroll, useTransform } from "framer-motion";

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

  return (
    <motion.header 
      className={`sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b transition-all duration-300 ${
        isScrolled ? "border-border" : "border-transparent"
      }`}
      style={{
        boxShadow: headerShadow,
        opacity: headerOpacity
      }}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-10">
          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden relative overflow-hidden group"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
              // Vibração para feedback tátil
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
              className="absolute bottom-1.5 left-1/2 w-4 h-0.5 bg-current transform -translate-x-1/2 origin-center"
              initial={false}
              animate={isMenuOpen 
                ? { width: "60%", opacity: 1 } 
                : { width: "20%", opacity: 0.5 }
              }
              transition={{ duration: 0.2 }}
            />
          </Button>
          
          {/* Logo with animation on mobile */}
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
        <HeaderActions />
      </div>
    </motion.header>
  );
}
