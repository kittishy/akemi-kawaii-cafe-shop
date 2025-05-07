
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { useTheme } from "@/context/ThemeContext";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { CartItem } from "./CartItem";
import { CartSummary } from "./CartSummary";
import { EmptyCart } from "./EmptyCart";
import { motion, AnimatePresence } from "framer-motion";

export function CartSheet() {
  const { t } = useTheme();
  const { totalItems, items, totalPrice, updateQuantity, removeItem } = useCart();
  const isMobile = useIsMobile();
  
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <ShoppingCart className="h-5 w-5" />
          <AnimatePresence>
            {totalItems > 0 && (
              <motion.span 
                className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs rounded-full flex items-center justify-center"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1, width: totalItems > 9 ? "1.25rem" : "1.1rem", height: totalItems > 9 ? "1.25rem" : "1.1rem" }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 25 }}
              >
                {totalItems}
              </motion.span>
            )}
          </AnimatePresence>
          <span className="sr-only">Carrinho de compras</span>
        </Button>
      </SheetTrigger>
      <SheetContent className={isMobile ? "w-full sm:max-w-full" : "w-96"}>
        <SheetHeader className="space-y-3 pb-2">
          <SheetTitle className="flex items-center gap-2 text-xl">
            <ShoppingCart className="h-5 w-5" />
            {t("cart.title")} {totalItems > 0 && `(${totalItems})`}
          </SheetTitle>
          {/* Barra decorativa animada */}
          {totalItems > 0 && (
            <motion.div
              className="h-1 bg-primary/20 rounded-full overflow-hidden"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="h-full bg-primary rounded-full"
                animate={{ 
                  x: ["0%", "100%", "0%"],
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop"
                }}
                style={{ width: "30%" }}
              />
            </motion.div>
          )}
        </SheetHeader>
        
        <AnimatePresence mode="wait">
          {totalItems === 0 ? (
            <motion.div
              key="empty-cart"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <EmptyCart emptyCartText={t("cart.empty")} />
            </motion.div>
          ) : (
            <motion.div
              key="cart-items"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col gap-4 mt-4 h-[70vh]"
            >
              {/* Cart items */}
              <motion.div 
                className="flex-1 overflow-y-auto pr-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                {items.map(({ product, quantity }, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <CartItem 
                      product={product}
                      quantity={quantity}
                      updateQuantity={updateQuantity}
                      removeItem={removeItem}
                    />
                  </motion.div>
                ))}
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <CartSummary 
                  totalPrice={totalPrice} 
                  checkoutText={t("cart.checkout")} 
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Elementos decorativos */}
        <motion.div 
          className="absolute bottom-8 right-8 text-2xl opacity-10 rotate-12"
          animate={{ 
            rotate: [12, 8, 12],
            scale: [1, 1.05, 1]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          🐾
        </motion.div>
      </SheetContent>
    </Sheet>
  );
}
