
import React, { createContext, useContext, useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";

export interface Product {
  id: string;
  title: string;
  price: number;
  image: string;
  description: string;
  category: string;
  rating?: number;
  likes?: number;
  stock?: number;
}

interface CartItem {
  product: Product;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const { toast } = useToast();

  // Load cart from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      try {
        setItems(JSON.parse(savedCart));
      } catch (error) {
        console.error("Error parsing cart data", error);
      }
    }
  }, []);

  // Save cart to localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(items));
  }, [items]);

  const addItem = (product: Product, quantity = 1) => {
    setItems(currentItems => {
      const existingItemIndex = currentItems.findIndex(item => item.product.id === product.id);
      
      if (existingItemIndex > -1) {
        const newItems = [...currentItems];
        newItems[existingItemIndex].quantity += quantity;
        toast({
          title: "Item adicionado ao carrinho",
          description: `${product.title} quantidade atualizada para ${newItems[existingItemIndex].quantity}`,
        });
        return newItems;
      } else {
        toast({
          title: "Item adicionado ao carrinho",
          description: `${product.title} adicionado ao carrinho`,
        });
        return [...currentItems, { product, quantity }];
      }
    });
  };

  const removeItem = (productId: string) => {
    setItems(currentItems => {
      const newItems = currentItems.filter(item => item.product.id !== productId);
      if (newItems.length < currentItems.length) {
        toast({
          title: "Item removido",
          description: "Item removido do carrinho",
        });
      }
      return newItems;
    });
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(productId);
      return;
    }

    setItems(currentItems => 
      currentItems.map(item => 
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
    toast({
      title: "Carrinho esvaziado",
      description: "Todos os itens foram removidos do carrinho",
    });
  };

  const totalItems = items.reduce((total, item) => total + item.quantity, 0);
  
  const totalPrice = items.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
