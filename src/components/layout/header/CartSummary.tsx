
import React from "react";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";

interface CartSummaryProps {
  totalPrice: number;
  checkoutText: string;
}

export function CartSummary({ totalPrice, checkoutText }: CartSummaryProps) {
  return (
    <div className="mt-auto border-t border-border pt-4">
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-muted-foreground">Subtotal</span>
          <span className="font-medium">R$ {totalPrice.toFixed(2)}</span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-muted-foreground">Entrega</span>
          <span className="font-medium">Grátis</span>
        </div>
        
        <div className="flex justify-between items-center py-2 border-t border-dashed border-border">
          <span className="font-semibold text-lg">Total</span>
          <motion.span 
            className="font-bold text-lg"
            key={totalPrice}
            initial={{ scale: 0.8, opacity: 0.7 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            R$ {totalPrice.toFixed(2)}
          </motion.span>
        </div>
      </div>
      
      <motion.div 
        className="mt-4"
        whileTap={{ scale: 0.98 }}
      >
        <Button className="w-full h-12 rounded-xl text-base font-medium">
          <ShoppingBag className="h-5 w-5 mr-2 flex-shrink-0" />
          {checkoutText}
        </Button>
      </motion.div>
      
      <div className="mt-3 text-xs text-center text-muted-foreground">
        <p>Pagamento seguro via PIX, cartão ou boleto</p>
      </div>
    </div>
  );
}
