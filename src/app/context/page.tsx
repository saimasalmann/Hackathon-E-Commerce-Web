"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { Product } from "../../../types/product";

interface CartContextType {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: string) => void;
  incrementQuantity: (id: string) => void;
  decrementQuantity: (id: string) => void;
  clearCart: () => void; // Add clearCart function to the context type
  cartCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<Product[]>([]);

  // ✅ Load cart from localStorage on first render
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(storedCart);
  }, []);

  // ✅ Save cart to localStorage whenever it changes
  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  // ✅ Calculate cartCount correctly
  const cartCount = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);

  // ✅ Add product or increase quantity
  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item._id === product._id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item._id === product._id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // ✅ Remove product from cart
  const removeFromCart = (id: string) => {
    setCart((prevCart) => prevCart.filter((item) => item._id !== id));
  };

  // ✅ Increase quantity
  const incrementQuantity = (id: string) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((item) =>
        item._id === id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
      );
      localStorage.setItem("cart", JSON.stringify(updatedCart)); // ✅ Ensure localStorage updates
      return updatedCart;
    });
  };

  // ✅ Decrease quantity
  const decrementQuantity = (id: string) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((item) =>
        item._id === id
          ? { ...item, quantity: Math.max(1, (item.quantity || 1) - 1) }
          : item
      );
      localStorage.setItem("cart", JSON.stringify(updatedCart)); // ✅ Ensure localStorage updates
      return updatedCart;
    });
  };

  // ✅ Clear the entire cart
  const clearCart = () => {
    setCart([]); // Clears the cart from state
    localStorage.removeItem("cart"); // Also clears it from localStorage
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        cartCount,
        clearCart,
        addToCart,
        removeFromCart,
        incrementQuantity,
        decrementQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
