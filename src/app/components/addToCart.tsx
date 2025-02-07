
"use client";

import { Product } from "../../../types/product";
import { useCart } from "../context/page";
import { Button } from "@/components/ui/button";

export default function AddToCart({ product }: { product: Product }) {
  const { addToCart } = useCart();

  return (
    <Button
      onClick={() => {
        addToCart(product);
        // Optional: Add a toast notification here
        alert('Added to cart!');
      }}
      className="w-min hover:bg-gray-800 bg-black text-white  rounded-full  "
    >
      Add To Cart
    </Button>
  );
}