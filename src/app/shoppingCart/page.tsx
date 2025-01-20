
import React from 'react';
import { Trash2, Heart } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const ShoppingCart = () => {
  const cartItems = [
    {
      id: 1,
      name: "Sport Tech Running Top",
      category: "Men's Short-Sleeve Running Top",
      color: "Slate/Blue",
      size: "L",
      quantity: 1,
      price: 3895.00,
      mrp: 3895.00,
      image: "/gear-1.png",
    },
    {
      id: 2,
      name: "Air Performance SE",
      category: "Men's Shoes",
      color: "Light Grey/White",
      size: "8",
      quantity: 1,
      price: 16995.00,
      mrp: 16995.00,
      image:"/gear-2.png"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      

      {/* Main Content */}
      <main className="max-w-7xl flex  mx-auto px-4 sm:px-6 lg:px-8 py-8">

        <div className="flex flex-col w-[60%]">
        {/* Free Delivery Banner */}
        <div className="bg-gray-50 p-4 rounded-lg mb-8">
          <p className="text-sm">Free Delivery</p>
          <p className="text-xs text-gray-600">Applies to orders of ₹ 14,000.00 or more.</p>
        </div>
          {/* Cart Items */}
          <div className="">
            <h2 className="text-2xl font-bold mb-6">Bag</h2>
            <div className="space-y-6">
              {cartItems.map((item) => (
                <div key={item.id} className="flex space-x-4 border-b border-gray-200 pb-6">
                  <div className="w-24 h-24 bg-gray-100 rounded-md">
                    <Image width={300} height={300} src={item.image} alt={item.name} className="w-full h-full object-cover rounded-md" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-gray-600 text-sm">{item.category}</p>
                    <p className="text-gray-600 text-sm">{item.color}</p>
                    <div className="flex items-center mt-2">
                      <p className="text-sm">Size: {item.size}</p>
                      <p className="text-sm ml-4">Quantity: {item.quantity}</p>
                    </div>
                    <p className="mt-2">₹ {item.price.toLocaleString('en-IN')}</p>
                    <div className="flex space-x-4 mt-2">
                      <button className="text-gray-600 hover:text-gray-900">
                        <Heart className="w-4 h-4" />
                      </button>
                      <button className="text-gray-600 hover:text-gray-900">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
          {/* Summary */}
          <div className="w-[40%]">
            <div className=" px-6 rounded-lg">
              <h2 className="text-xl font-bold mb-4">Summary</h2>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <p>Subtotal</p>
                  <p>₹ {cartItems.reduce((sum, item) => sum + item.price, 0).toLocaleString('en-IN')}</p>
                </div>
                <div className="flex justify-between">
                  <p>Estimated Delivery & Handling</p>
                  <p>Free</p>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between font-bold">
                    <p>Total</p>
                    <p>₹ {cartItems.reduce((sum, item) => sum + item.price, 0).toLocaleString('en-IN')}</p>
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
    </div>
  );
};

export default ShoppingCart;