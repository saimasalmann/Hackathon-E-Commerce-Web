import Image from "next/image";
import Link from "next/link";
import React from "react";

const Checkout = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="container mx-auto bg-white p-6 shadow-md">
        

        {/* Main Content */}
        <main className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          {/* Left Section */}
          <div className="lg:col-span-2 space-y-8">
            {/* Delivery Option */}
            <div>
              <h2 className="text-xl font-semibold">
                How would you like to get your order?
              </h2>
              <p className="text-gray-500">
                Customs regulation for India require a copy of the recipient&apos;s
                KYC. The address on the KYC needs to match the shipping address.
                Our courier will contact you via SMS/email to obtain a copy of
                your KYC. The KYC will be stored securely and used solely for
                the purpose of clearing customs (including sharing it with
                customs officials) for all orders and returns. If your KYC does
                not match your shipping address, please click the link for more
                information.{" "}
                <Link href="" className="underline hover:text-blue-700">
                  Learn More
                </Link>
              </p>
              <div className="mt-4 flex flex-col space-y-4">
                <label className="flex items-center border border-gray-300 p-4 rounded-lg cursor-pointer hover:border-black">
                  <input type="radio" name="deliveryOption" className="mr-4" />
                  Delivery
                </label>
              </div>
            </div>

            {/* Address Form */}
            <div>
              <h2 className="text-xl font-semibold">
                Enter your name and address
              </h2>
              <form className="space-y-4 mt-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full border border-gray-300 p-3 rounded-lg"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full border border-gray-300 p-3 rounded-lg"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Address Line 1"
                  className="w-full border border-gray-300 p-3 rounded-lg"
                />
                <input
                  type="text"
                  placeholder="Address Line 2"
                  className="w-full border border-gray-300 p-3 rounded-lg"
                />
                <input
                  type="text"
                  placeholder="Address Line 3"
                  className="w-full border border-gray-300 p-3 rounded-lg"
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Postal Code"
                    className="w-full border border-gray-300 p-3 rounded-lg"
                  />
                  <input
                    type="text"
                    placeholder="City/Locality"
                    className="w-full border border-gray-300 p-3 rounded-lg"
                  />
                </div>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Save this address to my profile
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Make this my preferred address
                </label>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-xl font-semibold">
                What is your contact information?
              </h2>
              <form className="space-y-4 mt-4">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full border border-gray-300 p-3 rounded-lg"
                />
                <p className="text-gray-400 ml-3 text-sm ">
                  {" "}
                  A confirmation email will be sent after checkout.
                </p>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full border border-gray-300 p-3 rounded-lg"
                />
                <p className="text-gray-400 ml-3 text-sm ">
                  {" "}
                  A carrier might contact you to confirm delivery.
                </p>
                <h1 className="text-3xl  mb-4">What&apos;s your PAN?</h1>

                {/* PAN Input Field */}

                <input
                  type="text"
                  id="pan"
                  name="pan"
                  placeholder="PAN"
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <p className="text-sm text-gray-600 mt-2">
                  Enter your PAN to enable payment with UPI, Net Banking or
                  local card methods.
                </p>
                <label className="flex items-start space-x-5 ">
                  <input
                    type="checkbox"
                    className="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-700">
                    Save PAN details to Nike Profile
                  </span>
                </label>
                <div>
                  <label className=" flex items-start space-x-5 mt-20">
                    <input
                      type="checkbox"
                      className="h-7 w-7 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-700">
                      I have read and consent to eShopWorld processing my
                      information in accordance with the{" "}
                      <Link
                        href="#"
                        className="text-blue-600 hover:text-blue-400 underline"
                      >
                        Privacy Statement
                      </Link>
                      and
                      <Link
                        href="#"
                        className="text-blue-600  hover:text-blue-400 underline"
                      >
                        Cookie Policy
                      </Link>
                      . eShopWorld is a trusted Nike partner.
                    </span>
                  </label>
                </div>
              </form>
            </div>

            {/* Continue Button */}
            <button
              type="button"
              className="w-full bg-gray-300 text-gray-700 font-semibold py-3 rounded-full hover:bg-gray-200"
            >
              Continue
            </button>
            {/* Footer */}
            <div className=" mt-10 text-lg   text-gray-600">
              <div className="border-t-2 py-4 text-gray-700 hover:text-black">
                {" "}
                Delivery
              </div>
              <div className="border-t-2 py-4  text-gray-700 hover:text-black">
                Shipping
              </div>
              <div className="border-t-2 py-4  text-gray-700 hover:text-black">
                Billing{" "}
              </div>
              <div className="border-t-2 py-4  text-gray-700 hover:text-black">
                Payment
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div>
            <div className="border border-gray-300 rounded-lg p-6 space-y-6">
              <h2 className="text-lg font-semibold">Order Summary</h2>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <p>Subtotal</p>
                  <p>$100.00</p>
                </div>
                <div className="flex justify-between text-sm">
                  <p>Delivery/Shipping</p>
                  <p>$5.00</p>
                </div>
                <div className="flex justify-between text-sm py-5 font-semibold border-t-2 border-b-2">
                  <p>Total</p>
                  <p>$105.00</p>
                </div>
                <p className="text-[.6rem]">
                  (The total reflects the price of your order, including all
                  duties and taxes)
                </p>
              </div>

              {/* Item List */}
              <div className="space-y-4">
                <p className="font-bold">Arrives Mon, 27 Mar - Wed, 12 Apr</p>
                <div className="flex items-center justify-between">
                  <Image
                  width={300}
                  height={300}

                    src="/gear-1.png"
                    alt="Shirt"
                    className="h-16 w-16 rounded-md"
                  />
                  <div className="flex-1 ml-4">
                    <p className="font-medium text-black">
                      Nike Dri-FIT ADV TechKnit Ultra Men`&apos;`s Short-Sleeve Running
                      Top
                    </p>
                    <p className="text-sm  text-gray-500">Qty 1</p>
                    <p className=" text-gray-500 text-sm">Size L</p>
                  <p className="text-sm text-gray-500">$25.00</p>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <Image
                  width={300}
                  height={300}
                    src="/shoe-3.png"
                    alt="Shoes"
                    className="h-16 w-16 rounded-md"
                  />
                  <div className="flex-1 ml-4">
                    <p className="font-medium text-black">
                      Nike Air Max 97 SE Men&apos;s Shoes
                    </p>
                    <p className="text-sm text-gray-500">Qty 1</p>
                    <p className="text-sm text-gray-500">Size UK 8</p>
                  <p className=" text-gray-500 text-sm">$75.00</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Checkout;
