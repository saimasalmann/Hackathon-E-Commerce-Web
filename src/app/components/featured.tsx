import Image from "next/image";
import React from "react";

const Featured = () => {
  return (
    <div className="bg-white text-black w-full container mx-auto px-3  py-6">
      <div className="text-xl font-semibold py-4">Featured</div>

      <div>
        <Image
          src={"/bg-1.png"}
          alt=""
          width={1200}
          height={600}
          className="w-full h-full"
        />
      </div>

      <div className="space-y-5 text-center text-black  ">
        <p className="mt-16 text-3xl lg:text-5xl font-semibold uppercase">
          {" "}
          step into what feels good
        </p>

        <p>
          {" "}
          Cause everyone should know the feeling of running in that perfect
          pair.
        </p>
        <button className="bg-black text-white rounded-full px-4 py-2 text-sm lg:text-lg">
          Find Your Shoe
        </button>
      </div>
    </div>
  );
};

export default Featured;
