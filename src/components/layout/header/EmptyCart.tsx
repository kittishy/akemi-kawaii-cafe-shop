
import React from "react";
import { ShoppingCart } from "lucide-react";

interface EmptyCartProps {
  emptyCartText: string;
}

export function EmptyCart({ emptyCartText }: EmptyCartProps) {
  return (
    <div className="flex flex-col items-center justify-center h-[70vh] text-muted-foreground">
      <ShoppingCart className="h-12 w-12 mb-2 opacity-20" />
      <p>{emptyCartText}</p>
    </div>
  );
}
