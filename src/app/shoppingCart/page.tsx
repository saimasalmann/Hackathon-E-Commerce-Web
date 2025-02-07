"use client";

import React, { useState, useEffect } from "react";
import { Trash2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useCart } from "../context/page"; // Import useCart

const ShoppingCart = () => {
  const { cart, removeFromCart, incrementQuantity, decrementQuantity } =
    useCart();
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (cart.length === 0) {
      setShowPopup(true);
    } else {
      setShowPopup(false);
    }
  }, [cart]);

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="min-h-screen  bg-white">
      {/* Popup when cart is empty */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-lg font-bold">Your cart is empty!</h2>
            <p className="text-gray-600 mt-2">
              Looks like you haven&apos;t added anything yet.
            </p>
            <button
              className="mt-4 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800"
              onClick={() => setShowPopup(false)}
            >
              Continue Shopping
            </button>
          </div>
        </div>
      )}

      {cart.length === 0 ? (
        <div className=" h-96 flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold">Your Cart is Empty</h2>
          <p className="text-gray-500">
            Browse products and add them to your cart.
          </p>
          <Link href="/productPage">
            <Button className="mt-4 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800">
              Go to Shop
            </Button>
          </Link>
        </div>
      ) : (
        <main className="max-w-7xl flex  flex-col md:flex-row mx-auto px-4 sm:px-6 lg:px-8 justify-center  py-20">
          <div className="flex flex-col md:w-[60%] w-full">
            <h2 className="text-2xl font-bold mb-6">Your Cart</h2>
            <div className="space-y-6">
              {cart.map((item) => (
                <div
                  key={item._id}
                  className="flex flex-col sm:flex-row gap-6 border-b border-gray-200 pb-6"
                >
                  <div className="w-24 h-24 bg-gray-100 rounded-md">
                    <Image
                      width={300}
                      height={300}
                      src={item.image}
                      alt={item.productName}
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>
                  <div className="">
                    <h3 className="font-medium">{item.productName}</h3>
                    <p className="text-gray-600 text-sm">{item.category}</p>
                    <p className="text-gray-600 text-sm">{item.colors}</p>
                    <p className="mt-2">
                      ₹ {item.price.toLocaleString("en-IN")}
                    </p>
                    <p>Quantity: {item.quantity}</p>
                    <div className="flex space-x-4 mt-2">
                      <Button
                        onClick={() => incrementQuantity(item._id)}
                        className="text-lg bg-gray-200 text-gray-600 rounded-full hover:bg-gray-300"
                      >
                        +
                      </Button>
                      <Button
                        onClick={() => decrementQuantity(item._id)}
                        className="text-2xl bg-gray-200 text-gray-600 rounded-full hover:bg-gray-300"
                      >
                        -
                      </Button>
                      <Button
                        onClick={() => removeFromCart(item._id)}
                        className="bg-gray-200 rounded-full text-bold text-red-700 hover:bg-gray-300"
                      >
                        <Trash2 className="w-6 h-6" />
                        <span>Remove Item</span>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full md:w-[40%]">
            <div className="px-6 rounded-lg">
              <h2 className="text-xl font-bold mb-4">Summary</h2>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <p>Subtotal</p>
                  <p>₹ {calculateTotal().toLocaleString("en-IN")}</p>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between font-bold">
                    <p>Total</p>
                    <p>₹ {calculateTotal().toLocaleString("en-IN")}</p>
                  </div>
                </div>
                <Link href="/checkOut">
                  <button className="w-full bg-black text-white py-3 rounded-full hover:bg-gray-800 mt-5">
                    Member Checkout
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </main>
      )}
    </div>
  );
};

export default ShoppingCart;
