
import React from "react";
import { Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Product } from "@/context/CartContext";
import { motion } from "framer-motion";

interface CartItemProps {
  product: Product;
  quantity: number;
  updateQuantity: (productId: string, newQuantity: number) => void;
  removeItem: (productId: string) => void;
}

export function CartItem({ product, quantity, updateQuantity, removeItem }: CartItemProps) {
  const handleUpdateQuantity = (amount: number) => {
    const newQuantity = quantity + amount;
    if (newQuantity > 0) {
      updateQuantity(product.id, newQuantity);
      // Vibração para feedback tátil em dispositivos móveis
      if (navigator.vibrate) {
        navigator.vibrate(25);
      }
    }
  };

  const handleRemove = () => {
    // Vibração para feedback tátil em dispositivos móveis
    if (navigator.vibrate) {
      navigator.vibrate([25, 50, 25]);
    }
    removeItem(product.id);
  };

  return (
    <motion.div 
      className="flex items-start gap-3 py-3 border-b border-border last:border-none"
      whileHover={{ backgroundColor: "rgba(0,0,0,0.02)" }}
    >
      <motion.div 
        className="w-16 h-16 rounded-xl overflow-hidden bg-muted flex-shrink-0"
        whileHover={{ scale: 1.05 }}
      >
        <img 
          src={product.image} 
          alt={product.title}
          className="w-full h-full object-cover"
        />
      </motion.div>
      
      <div className="flex-1 min-w-0">
        <div className="flex justify-between">
          <h4 className="font-medium truncate">{product.title}</h4>
          <motion.button
            className="text-muted-foreground hover:text-destructive p-1 -mr-1 rounded-md"
            onClick={handleRemove}
            whileTap={{ scale: 0.9 }}
            whileHover={{ backgroundColor: "rgba(0,0,0,0.05)" }}
          >
            <Trash2 className="h-4 w-4" />
            <span className="sr-only">Remover item</span>
          </motion.button>
        </div>
        
        <p className="text-sm text-muted-foreground truncate mb-2">
          {product.description?.substring(0, 30)}...
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center border rounded-full h-8 overflow-hidden">
            <Button 
              variant="ghost" 
              size="icon"
              className="h-8 w-8 rounded-full p-0"
              onClick={() => handleUpdateQuantity(-1)}
              disabled={quantity <= 1}
            >
              <Minus className="h-3 w-3" />
              <span className="sr-only">Reduzir quantidade</span>
            </Button>
            
            <span className="w-8 text-center text-sm font-medium">{quantity}</span>
            
            <Button 
              variant="ghost" 
              size="icon"
              className="h-8 w-8 rounded-full p-0"
              onClick={() => handleUpdateQuantity(1)}
            >
              <Plus className="h-3 w-3" />
              <span className="sr-only">Aumentar quantidade</span>
            </Button>
          </div>
          
          <div className="font-semibold">
            R$ {(product.price * quantity).toFixed(2)}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
