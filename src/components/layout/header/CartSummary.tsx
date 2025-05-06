
import React from "react";
import { Button } from "@/components/ui/button";

interface CartSummaryProps {
  totalPrice: number;
  checkoutText: string;
}

export function CartSummary({ totalPrice, checkoutText }: CartSummaryProps) {
  return (
    <div className="mt-auto">
      <div className="flex justify-between py-4">
        <span className="font-medium">Total</span>
        <span className="font-bold">R${totalPrice.toFixed(2)}</span>
      </div>
      <Button className="w-full">
        {checkoutText}
      </Button>
    </div>
  );
}
