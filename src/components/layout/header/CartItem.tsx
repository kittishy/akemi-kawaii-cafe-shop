
import React from "react";
import { Product } from "@/context/CartContext";

interface CartItemProps {
  product: Product;
  quantity: number;
  updateQuantity: (productId: string, quantity: number) => void;
  removeItem: (productId: string) => void;
}

export function CartItem({ product, quantity, updateQuantity, removeItem }: CartItemProps) {
  return (
    <div className="flex items-center gap-4 border-b py-2 group">
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
        <span className="text-xs text-muted-foreground block mt-1">
          Subtotal: <span className="font-semibold">R${(product.price * quantity).toFixed(2)}</span>
        </span>
      </div>
      <button
        className="ml-2 text-destructive hover:text-red-700 transition-colors"
        onClick={() => removeItem(product.id)}
        aria-label="Remover do carrinho"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}
