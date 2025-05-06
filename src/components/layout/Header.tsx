
import { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "@/context/ThemeContext";
import { useCart } from "@/context/CartContext";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { SwitchLocale } from "@/components/ui/switch-locale";
import { Button } from "@/components/ui/button";
import { Search, Menu, ShoppingCart, X, Headphones } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function Header() {
  const { t } = useTheme();
  const { totalItems, items, totalPrice, updateQuantity, removeItem } = useCart();
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
          {/* Mobile Menu */}
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
          <Link to="/" className="flex items-center gap-2">
            <img 
              src="/lovable-uploads/lisa-cafe-logo.png" 
              alt="Lisa's Cafe" 
              className="h-12 w-auto object-contain" 
            />
            <span className="font-display font-bold text-lg md:text-xl text-primary">
              Lisa's<span className="text-accent">Cafe</span>
            </span>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.title}
            </Link>
          ))}
          <a 
            href="https://t.me/lisascafebot" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1 font-medium text-accent hover:text-accent-foreground transition-colors"
          >
            <Headphones className="h-4 w-4" />
            <span>Suporte</span>
          </a>
        </nav>

        {/* Mobile Navigation */}
        <div className={`
          md:hidden fixed inset-0 top-16 z-40 bg-background border-r border-border transition-all duration-300 ease-in-out transform shadow-lg
          ${isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0 pointer-events-none'}
        `}>
          <nav className="flex flex-col gap-6 p-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="font-medium text-lg text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.title}
              </Link>
            ))}
            <a 
              href="https://t.me/lisascafebot" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-medium text-accent hover:text-accent-foreground transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <Headphones className="h-5 w-5" />
              <span>Suporte via Telegram</span>
            </a>
          </nav>
        </div>
        
        {/* Actions */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>
          
          <ThemeToggle />
          
          <SwitchLocale />
          
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
                <span className="sr-only">Shopping cart</span>
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>{t("cart.title")}</SheetTitle>
              </SheetHeader>
              
              {totalItems === 0 ? (
                <div className="flex flex-col items-center justify-center h-[70vh] text-muted-foreground">
                  <ShoppingCart className="h-12 w-12 mb-2 opacity-20" />
                  <p>{t("cart.empty")}</p>
                </div>
              ) : (
                <div className="flex flex-col gap-4 mt-4 h-[70vh]">
                  {/* Cart items */}
                  <div className="flex-1 overflow-y-auto pr-2">
                    {items.map(({ product, quantity }) => (
                      <div key={product.id} className="flex items-center gap-4 border-b py-2 group">
                        <img 
                          src={product.image}
                          alt={product.title}
                          className="w-16 h-16 object-cover rounded-md border"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium truncate" title={product.title}>{product.title}</h4>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-sm text-muted-foreground">R${product.price.toFixed(2)}</span>
                            <span className="text-xs text-muted-foreground">x</span>
                            <div className="flex items-center gap-1">
                              <button
                                className="px-2 py-0.5 rounded bg-muted hover:bg-accent text-lg"
                                onClick={() => updateQuantity(product.id, quantity - 1)}
                                aria-label="Diminuir quantidade"
                              >-</button>
                              <span className="px-2 text-base font-medium">{quantity}</span>
                              <button
                                className="px-2 py-0.5 rounded bg-muted hover:bg-accent text-lg"
                                onClick={() => updateQuantity(product.id, quantity + 1)}
                                aria-label="Aumentar quantidade"
                              >+</button>
                            </div>
                          </div>
                          <span className="text-xs text-muted-foreground block mt-1">Subtotal: <span className="font-semibold">R${(product.price * quantity).toFixed(2)}</span></span>
                        </div>
                        <button
                          className="ml-2 text-destructive hover:text-red-700 transition-colors"
                          onClick={() => removeItem(product.id)}
                          aria-label="Remover do carrinho"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                      </div>
                    ))}
                  </div>
                  <div className="mt-auto">
                    <div className="flex justify-between py-4">
                      <span className="font-medium">Total</span>
                      <span className="font-bold">R${totalPrice.toFixed(2)}</span>
                    </div>
                    <Button className="w-full">
                      {t("cart.checkout")}
                    </Button>
                  </div>
                </div>
              )}
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
