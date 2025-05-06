
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { useTheme } from "@/context/ThemeContext";
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

export function CartSheet() {
  const { t } = useTheme();
  const { totalItems, items, totalPrice, updateQuantity, removeItem } = useCart();

  return (
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
          <EmptyCart emptyCartText={t("cart.empty")} />
        ) : (
          <div className="flex flex-col gap-4 mt-4 h-[70vh]">
            {/* Cart items */}
            <div className="flex-1 overflow-y-auto pr-2">
              {items.map(({ product, quantity }) => (
                <CartItem 
                  key={product.id}
                  product={product}
                  quantity={quantity}
                  updateQuantity={updateQuantity}
                  removeItem={removeItem}
                />
              ))}
            </div>
            <CartSummary 
              totalPrice={totalPrice} 
              checkoutText={t("cart.checkout")} 
            />
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
