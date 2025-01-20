import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const BestOfAirMax = () => {
  return (
    <div className="container mx-auto px-3 py-6">
          <div className=" text-xl font-semibold mb-5">Best of Air Max</div>

        <div className="flex items-center justify-center">
          <p className="text-sm md:text-lg">shop</p>
          <div className="p-2 bg-gray-100 text-zinc-400 rounded-full hover:bg-gray-200 hover:text-zinc-800 mx-3">
            <ChevronLeft />
          </div>
          <div className="p-2 bg-gray-100 text-zinc-400 rounded-full hover:bg-gray-200 hover:text-zinc-800">
            <ChevronRight />
          </div>
        </div>

      <div className="w-full mx-auto flex flex-wrap items-center justify-center gap-6 mt-10">
        <div>
          <div className="w-72 h-72 mb-6 overflow-hidden">
            <Image
              className="hover:scale-105 duration-300"
              src="/shoe-1.png"
              alt="pic"
              width={300}
              height={300}
            />
            
          </div>
         
         
          <div className="flex justify-between items-center px-2 pt-2">
            <p className="text-base">Nike Air Max Pulse</p>
            <p className="text">₹ 13 995</p>
          </div>

          
            <span className="text-sm text-gray-700 px-2 ">
              {`Women's`} Shoes
            </span>
          
        </div>

        <div>
          <div className="w-72 h-72 mb-6 overflow-hidden">
            <Image
              className="hover:scale-105 duration-300"
              src="/shoe-2.png"
              alt="pic"
              width={300}
              height={300}
            />
          
          </div>
          <div className="flex justify-between items-center px-2 pt-2">
            <div className="text-base">Nike Air Max Pulse</div>
            <div className="text">₹ 13 995</div>
          </div>

          <div>
            <span className="text-sm text-gray-700 px-2 ">{`Men's`} Shoes</span>
          </div>
        </div>

        <div>
          <div className="w-72 h-72 mb-6 overflow-hidden">
            <Image
              className="hover:scale-105 duration-300"
              src="/shoe-3.png"
              alt="pic"
              width={300}
              height={300}
            />
            
          </div>
          <div className="flex justify-between items-center px-2 pt-2">
            <div className="text-base">Nike Air Max Pulse</div>
            <div className="text">₹ 16 996</div>
          </div>

          <div>
            <span className="text-sm text-gray-700 px-2 ">
              {`Women's`} Shoes
            </span>
          </div>
        </div>

        <div>
          <div className="w-72 h-72 mb-6 overflow-hidden">
            <Image
              className="hover:scale-105 duration-300"
              src="/Rectangle (2).png"
              alt="pic"
              width={300}
              height={300}
            />
            
          </div>
          <div className="flex justify-between px-2 pt-2">
            <div className="text-base">Nike Air Max Pulse</div>
            <div className="text">₹ 16 996</div>
          </div>

          <div>
            <span className="text-sm text-gray-700 px-2 ">{`Men's`} Shoes</span>
          </div>
        </div>
      </div>
</div>
)
};

export default BestOfAirMax;
