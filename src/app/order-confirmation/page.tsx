"use client";

import React from "react";
import Link from "next/link";

const OrderConfirmationPage = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-bold mb-4">Order Confirmed!</h1>
      <p className="text-gray-600 mb-8">Thank you for your purchase.</p>
      <Link href="/">
        <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800">
          Continue Shopping
        </button>
      </Link>
    </div>
  );
};

export default OrderConfirmationPage;
