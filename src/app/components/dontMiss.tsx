import Image from "next/image";
import React from "react";

const DontMiss = () => {
  return (
    <div className="container mx-auto px-3">
      <div className="mt-10 mb-10  text-xl font-semibold ">
          Don&apos;t Miss
      </div>

      <div className="flex justify-center ">
        <Image
          className=""
          src={"/bg-2.png"}
          alt="shoes banner"
          width={1200}
          height={600}
        />
      </div>

      <div className="text-center text-black mt-16">
        <span className=" text-3xl lg:text-5xl font-semibold uppercase ">
          flight essentials
        </span>
        <br />
        <br />
 
        <span>
          Your built-to-last, all-week wears—but with style only Jordan Brand
          can deliver.
        </span>
        <br />
 
        <button >Shop</button>
      </div>
    </div>
  );
};

export default DontMiss;
