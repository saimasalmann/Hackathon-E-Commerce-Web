import React from "react";
import Image from "next/image";
export default function ContactPage() {
  return (
    <div className="max-w-[1428] min-h-screen bg-white text-black flex flex-col gap-6 items-center justify-center mx-auto">
        <div className="flex h-[132px] flex-col items-center justify-center">
      {/* Header */}
      <h1 className="text-3xl font-bold text-center mb-6">GET HELP</h1>
      
      <div className="flex-grow lg:flex-grow-0 lg:w-[457.33px] h-[56px] flex justify-between items-center border-gray-500 border-[1px]  rounded-xl gap-4 px-4 w-full lg:max-w-sm">
              <input
                type="search"
                placeholder="What can we help you with? "
                className="text-[15px]  py-2 outline-none  leading-4 font-medium  "
              />
              <Image
                src="/search.png"
                alt="search-icon"
                width={16}
                height={16}
                className="w-5 h-5 text-gray-100"
              />
            </div>
            </div>
   
      {/* <div className="text-center w-[939px]  mx-auto"> */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[939px]">
        {/* Help Section */}
        <section className="md:col-span-2">
          <h2 className="text-2xl font-semibold mb-4">
            WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?
          </h2>
          <p className="mb-4">
            We want to make buying your favorite Nike shoes and gear fast and
            easy, and we accept the following payment options:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>VISA, Mastercard, Diners Club, Discover, American Express, RuPay, Maestro, UPI</li>
          </ul>
          <p className="mb-6">
            You can use PayPal to checkout or choose Cash on Delivery where
            available. Please note that PayPal is not available for order edits.
          </p>
          <div className="flex gap-4 mb-8">
            <button className="bg-black text-white px-6 py-2 rounded-full">
              JOIN US
            </button>
            <button className="bg-black text-white px-6 py-2 rounded-full ">
              SHOP NIKE
            </button>
          </div>
          <h3 className="text-xl font-semibold mb-4">FAQs</h3>
          <ul className="space-y-4">
            <li>
              <strong>Do you accept international purchases?</strong>
              <p>
                Wea are unable to accept forms of payment for international
                purchases on our portal. You will be notified at checkout if
                your payment is restricted.
              </p>
            </li>
            <li>
              <strong>Why do not I see PayPal as an option?</strong>
              <p>
                PayPal might not be available for your specific delivery
                address. Make sure you are using a compatible region during
                checkout.
              </p>
            </li>
          </ul>
        </section>

        {/* Contact Us Section */}
        <aside className=" px-4 rounded max-w-[313px]  border-l-[1px] border-grey-100 mb-2 ">
      <h2 className="text-center text-2xl font-bold mb-8">CONTACT US</h2>
      
      <div className="flex flex-col items-center space-y-6 text-[16px] leading-[28px] font-normal ">
        {/* Phone Section */}
        <div className="flex flex-col items-center text-center justify-center">
        <Image 
      src="/Image (1).png" 
      alt="mobile-pic"
      width={200}
      height={200}
      className="w-16 h-16 mb-3"
      />
          
          <p>000 800 919 0566</p>
          <p>Products & Orders: 24 hours a day,</p>
          <p>7 days a week</p>
          <p>Company Info & Enquiries: 07:30 - 16:30, Monday - Friday</p>
        </div>

        {/* Chat Section */}
        <div className="flex flex-col items-center justify-center">
        <Image 
      src="/Image (2).png" 
      alt="mobile-pic"
      width={200}
      height={200}
      className="w-16 h-16 mb-3"
      /> 
       <p>24 hours a day</p>
          <p>7 days a week</p>
        </div>

        {/* Email Section */}
        <div className="flex flex-col items-center justify-center">
        <Image 
      src="/Image (3).png" 
      alt="mobile-pic"
      width={200}
      height={200}
      className="w-16 h-16 mb-3"
      />  
          
          <p>We will reply within</p>
          <p>five business days</p>
        </div>

        {/* Store Locator Section */}
        <div className="flex flex-col items-center justify-center">
        <Image 
      src="/Image (4).png" 
      alt="mobile-pic"
      width={200}
      height={200}
      className="w-16 h-16 mb-6"
      /> 
          <p>STORE LOCATOR</p>
          <p>Find Nike retail stores near you</p>
        </div>
      </div>
        </aside>
      </div>
      {/* </div> */}
    </div>
  );
}
