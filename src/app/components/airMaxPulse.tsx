

import Image from "next/image";
import React from "react";

function AirMaxPulse() {
  return (
    <div className="bg-white text-black ">
     <div className="w-full bg-[#F5F5F5]">
      <div className="container mx-auto w-full  flex flex-col justify-center items-center py-6 px-3 bg-[#F5F5F5] ">
        <p className="font-bold text-[15px]">Hello Nike App</p>
        <p className="font-normal text-[11px]">
          Download the app to access everything Nike.  <span>  <a className="underline font-bold hover:text-gray-500">    Get Your Great</a></span>
        </p>
      </div>
      </div>


<div className="w-full mx-auto px-5">
      {/* product shoes image */}
        <Image
          src="/mainShoe.png"
          alt="Nike Air Max Pulse"
          width={500}
          height={400}
          className="w-full h-full"
        />
</div>
        {/* bottomDiv  */}

        <div className="bg-white py-8 px-2 text-center space-y-2">
              <p className="text-[15px] font-semibold text-gray-800">First Look</p>
              <h2 className="text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
                NIKE AIR MAX PULSE
              </h2>
              <p className="mt-3 text-[15px] font-normal text-black sm:mt-4">
                Extreme comfort. Hyper durable. Max volume. Introducing the Air
                Max Pulse</p>
                 <p className="mt-3 text-[15px] font-normal text-black sm:mt-4">
                   - designed to push you past your limits and help you
                go to the max.
              </p>
          {/* button div */}
            <div className="mt-2 flex gap-2 justify-center">
                <button className="bg-black text-white rounded-full px-2 py-1"> Notify Me </button>

             <button className="bg-black text-white rounded-full px-2 py-1"> Shop Air Max </button>
            </div>
            </div>
        
          </div>
  );
}

export default AirMaxPulse;
