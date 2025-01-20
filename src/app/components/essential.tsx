
import Image from "next/image";
import React from "react";

const Essentials = () => {
  return ( 
    <div className="w-full container mx-auto px-3 ">
      {/* Heading */}
      <div className="mt-10 mb-10  ">
        <span className="text-xl font-semibold">The Essentials</span>
      </div>

      {/* Image Grid */}
      <div className="w-full flex flex-wrap mx-auto justify-center items-center gap-8 mb-16 md:mb-28">
        {/* Image 1 */}
        <div className="w-72 sm:w-80 md:w-96 h-[300px] md:h-[400px] overflow-hidden">
          <Image
            className="hover:scale-105 duration-300 w-full h-full object-cover"
            src="/essen1.png"
            alt="pic"
            width={350}
            height={550}
          />
        </div>

        {/* Image 2 */}
        <div className="w-72 sm:w-80 md:w-96 h-[300px] md:h-[400px] overflow-hidden">
          <Image
            className="hover:scale-105 duration-300 w-full h-full object-cover"
            src="/essen2.png"
            alt="pic"
            width={350}
            height={550}
          />
        </div>

        {/* Image 3 */}
        <div className="w-72 sm:w-80 md:w-96 h-[300px] md:h-[400px] overflow-hidden">
          <Image
            className="hover:scale-105 duration-300 w-full h-full object-cover"
            src="/essen3.png"
            alt="pic"
            width={350}
            height={550}
          />
        </div>
      </div>

      {/* List Section */}
      <div className="flex flex-wrap justify-center gap-8 px-4 pb-20">
        {/* Icons */}
        <div className="w-40 text-center">
          <span className="font-semibold">Icons</span>
          <ul className="ess-ul mt-4 space-y-2">
            <li>Air Force 1</li>
            <li>Huarache</li>
            <li>Air Max 90</li>
            <li>Air Max 95</li>
          </ul>
        </div>

        {/* Shoes */}
        <div className="w-40 text-center">
          <span className="font-semibold">Shoes</span>
          <ul className="ess-ul mt-4 space-y-2">
            <li>All Shoes</li>
            <li>Custom Shoes</li>
            <li>Jordan Shoes</li>
            <li>Running Shoes</li>
          </ul>
        </div>

        {/* Clothing */}
        <div className="w-40 text-center">
          <span className="font-semibold">Clothing</span>
          <ul className="ess-ul mt-4 space-y-2">
            <li>All Clothing</li>
            <li>Modest Clothing</li>
            <li>Hoodies & Pullovers</li>
            <li>Shirts & Tops</li>
          </ul>
        </div>

        {/* Kids */}
        <div className="w-40 text-center">
          <span className="font-semibold">{`Kids'`}</span>
          <ul className="ess-ul mt-4 space-y-2">
            <li>Infant & Toddler Shoes</li>
            <li>{`Kids' Shoes`}</li>
            <li>{`Kids' Jordan Shoes`}</li>
            <li>{`Kids' Basketball Shoes`}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Essentials;
