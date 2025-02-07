import Image from "next/image";
import Link from "next/link";
import React from "react";

function AirMaxPulse() {
  return (
    <div className="bg-white text-black">
      {/* Centered Hello Nike App Section */}
      <div className="w-full flex justify-center items-center h-[150px] bg-[#F5F5F5] ">
        <div className="container mx-auto w-full flex flex-col items-center justify-center  px-3 mt-10">
          <p className="font-bold text-[15px]">Hello Nike App</p>
          <p className="font-normal text-[11px] text-center">
            Download the app to access everything Nike.{" "}
            <Link href="/productPage" className="underline text-14 font-bold hover:text-gray-500">
              Get Your Great
            </Link>
          </p>
        </div>
      </div>

      {/* Product Image */}
      <div className="w-full max-w-7xl mx-auto px-5">
        <Image
          src="/mainShoe.png"
          alt="Nike Air Max Pulse"
          width={500}
          height={400}
          className="w-full h-full"
        />
      </div>

      {/* Bottom Section */}
      <div className="bg-white py-8 px-2 text-center space-y-2">
        <p className="text-[15px] font-semibold text-gray-800">First Look</p>
        <h2 className="text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
          NIKE AIR MAX PULSE
        </h2>
        <p className="mt-3 text-[15px] font-normal text-black sm:mt-4">
          Extreme comfort. Hyper durable. Max volume. Introducing the Air Max
          Pulse
        </p>
        <p className="mt-3 text-[15px] font-normal text-black sm:mt-4">
          - designed to push you past your limits and help you go to the max.
        </p>

        {/* Buttons */}
        <div className="mt-2 flex gap-2 justify-center">
          <Link href="" className="bg-black text-white rounded-full px-2 py-1">
            Notify Me
          </Link>
          <Link href="/productPage" className="bg-black text-white rounded-full px-2 py-1">
            Shop Air Max
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AirMaxPulse;
