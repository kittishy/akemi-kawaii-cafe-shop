
import React from "react";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface EmptyCartProps {
  emptyCartText: string;
}

export function EmptyCart({ emptyCartText }: EmptyCartProps) {
  return (
    <div className="flex flex-col items-center justify-center h-[70vh] text-muted-foreground">
      <motion.div 
        className="relative"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ 
          type: "spring",
          stiffness: 300,
          damping: 20
        }}
      >
        <ShoppingCart className="h-16 w-16 mb-3 opacity-20" />
        
        {/* Círculo decorativo pulsante */}
        <motion.div
          className="absolute inset-0 bg-primary/10 rounded-full -z-10"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        
        {/* Pata decorativa */}
        <motion.div
          className="absolute -bottom-4 -right-4 text-lg opacity-20"
          initial={{ rotate: 0 }}
          animate={{ rotate: [0, -15, 15, 0] }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          🐾
        </motion.div>
      </motion.div>
      
      <motion.p
        className="mb-6 text-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        {emptyCartText}
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <Button asChild className="rounded-full">
          <Link to="/shop">
            Explorar produtos
          </Link>
        </Button>
      </motion.div>
    </div>
  );
}
