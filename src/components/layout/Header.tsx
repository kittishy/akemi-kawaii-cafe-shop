
import { useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Logo } from "./header/Logo";
import { DesktopNavigation } from "./header/DesktopNavigation";
import { MobileMenu } from "./header/MobileMenu";
import { HeaderActions } from "./header/HeaderActions";

export function Header() {
  const { t } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { title: t("nav.home"), href: "/" },
    { title: t("nav.shop"), href: "/shop" },
    { title: t("nav.about"), href: "/about" },
    { title: t("nav.blog"), href: "/blog" },
    { title: t("nav.contact"), href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-10">
          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
          
          {/* Logo */}
          <Logo />
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
    </header>
  );
}
