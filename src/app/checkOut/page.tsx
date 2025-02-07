"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useCart } from "../context/page";
import { useRouter } from "next/navigation";

const Checkout: React.FC = () => {
  const { cart, clearCart } = useCart();

  const [formData, setFormData] = useState({
    customerName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const route = useRouter();
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.customerName ||
      !formData.email ||
      !formData.phone ||
      !formData.address ||
      !formData.city ||
      !formData.postalCode
    ) {
      setError("Please fill in all the fields.");
      return;
    }

    const orderData = {
      ...formData,
      items: cart,
      totalAmount: calculateTotal(),
    };

    setIsLoading(true);
    setError(null);
    setSuccessMessage(null); // Reset success message

    try {
      const response = await fetch("/api/orders", {
        // ✅ Fix API route
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });

      const data = await response.json();

      if (response.ok) {
        // ✅ Fix response handling
        setSuccessMessage("Order Sent Successfully!");
        clearCart(); // ✅ Clear cart after successful order
        route.push("/order-confirmation");
      } else {
        setError(data.message || "Failed to process checkout.");
      }
    } catch (error) {
      console.error("Error during checkout:", error);
      setError("An error occurred. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="container mx-auto bg-white p-6 shadow-md">
        <main className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-xl font-semibold">
                How would you like to get your order?
              </h2>
              <p className="text-gray-500">
                Customs regulation for India require a copy of the
                recipient&apos;s KYC...
                <Link href="" className="underline hover:text-blue-700">
                  Learn More
                </Link>
              </p>
              <div className="mt-4 flex flex-col space-y-4">
                <label className="flex items-center border border-gray-300 p-4 rounded-lg cursor-pointer hover:border-black">
                  <input type="radio" name="deliveryOption" className="mr-4" />{" "}
                  Delivery
                </label>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Enter your Details</h2>
              <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                <input
                  type="text"
                  name="customerName"
                  value={formData.customerName}
                  onChange={handleInputChange}
                  placeholder="Full Name"
                  className="w-full border border-gray-300 p-3 rounded-lg"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email Address"
                  className="w-full border border-gray-300 p-3 rounded-lg"
                />
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Phone Number"
                  className="w-full border border-gray-300 p-3 rounded-lg"
                />
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="Shipping Address"
                  className="w-full border border-gray-300 p-3 rounded-lg"
                />
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  placeholder="City"
                  className="w-full border border-gray-300 p-3 rounded-lg"
                />
                <input
                  type="text"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleInputChange}
                  placeholder="Postal Code"
                  className="w-full border border-gray-300 p-3 rounded-lg"
                />
                {error && <p className="text-red-500">{error}</p>}
                {successMessage && (
                  <p className="text-green-500">{successMessage}</p>
                )}
                <button
                  type="submit"
                  className={`w-full bg-gray-300 text-gray-700 font-semibold py-3 rounded-full hover:bg-gray-200 ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
                  disabled={isLoading}
                >
                  {isLoading ? "Placing Order..." : "Submit Order"}
                </button>
              </form>
            </div>
          </div>

          <div>
            <div className="border border-gray-300 rounded-lg p-6 space-y-6">
              <h2 className="text-lg font-semibold">Order Summary</h2>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <p>Subtotal</p>
                  <p>₹ {calculateTotal().toLocaleString("en-IN")}</p>
                </div>
                <div className="border-t-2 border-b-2 pt-4 pb-4 font-semibold flex justify-between">
                  <p>Total</p>
                  <p>₹ {calculateTotal().toLocaleString("en-IN")}</p>
                </div>
              </div>
              <div className="space-y-4">
                {cart.map((item) => (
                  <div
                    key={item._id}
                    className="flex items-center justify-between"
                  >
                    <Image
                      width={60}
                      height={60}
                      src={item.image}
                      alt={item.productName}
                      className="h-16 w-16 rounded-md"
                    />
                    <div className="flex-1 ml-4">
                      <p className="font-medium text-black">
                        {item.productName}
                      </p>
                      <p className="text-sm text-gray-500">
                        Qty {item.quantity}
                      </p>
                      <p className="text-sm text-gray-500">
                        ₹ {item.price.toLocaleString("en-IN")}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Checkout;
