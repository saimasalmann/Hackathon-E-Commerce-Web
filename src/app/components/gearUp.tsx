import React from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Gear = () => {
  return (
    <div className="container mx-auto px-3 py-6">
      <div className=" text-xl font-semibold  py-4 ">Gear Up</div>

      {/* main div */}

      <div className="flex gap-8 px-4 flex-wrap items-center justify-center">
        {/* sub div men's */}
        <div className="flex flex-col items-center justify-center">
          {/* Arrow div */}

          <div className="flex items-center mb-5 ">
            <span>Shop Men&apos;s</span>
            <div className="p-2 bg-gray-100 text-zinc-400 rounded-full hover:bg-gray-200 hover:text-zinc-800 mx-3">
              <ChevronLeft />
            </div>
            <div className="p-2 bg-gray-100 text-zinc-400 rounded-full hover:bg-gray-200 hover:text-zinc-800">
              <ChevronRight />
            </div>
          </div>
          <div className="flex flex-wrap gap-8 items-center justify-center">
            <div>
              <Image
                src={"/gear-1.png"}
                alt="man dress"
                width={280}
                height={250}
              />

              {/* name and price div */}
              <div className="flex justify-between items-center px-2 pt-3  ">
                <p className="text-xs font-bold pr-2">
                  Nike Dri-FIT ADV TechKnit Ultra
                </p>
                <p className="text-sm">₹ 3 895</p>
              </div>
              {/* category div */}
              <div className="flex flex-col">
                <span className="text-sm text-gray-700 px-2 ">
                  {`Men's`} Short-Sleeve
                </span>
                <span className="text-sm text-gray-700 px-2 ">Running Top</span>
              </div>
            </div>

            <div>
              <Image
                src={"/gear-2.png"}
                alt="Men dress"
                width={280}
                height={250}
              />

              <div className="flex justify-between items-center  px-2 pt-3">
                <p className="text-xs font-bold pr-2">
                  Nike Dri-FIT Challenger
                </p>

                <p className="text-sm">₹ 3 895</p>
              </div>

              <div className="flex flex-col">
                <span className="text-sm text-gray-700 px-2 ">
                  {`Men's`} 18cm (approx.) 2
                </span>
                <span className="text-sm text-gray-700 px-2 ">
                  -in-1 Versatile Shorts{" "}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ================================================== */}

        {/* sub div Women's */}

        <div className="flex flex-col items-center justify-center">
        
          {/* Arrow div */}

          <div className="flex items-center mb-5 ">
            <span>Shop Women&apos;s</span>
            <div className="p-2 bg-gray-100 text-zinc-400 rounded-full hover:bg-gray-200 hover:text-zinc-800 mx-3">
              <ChevronLeft />
            </div>
            <div className="p-2 bg-gray-100 text-zinc-400 rounded-full hover:bg-gray-200 hover:text-zinc-800">
              <ChevronRight />
            </div>
          </div>

          <div className="flex flex-wrap gap-8 items-center justify-center">
            <div>
              <Image
                src={"/gear-3.png"}
                alt="women dress"
                width={280}
                height={250}
              />

              <div className="flex justify-between items-center  px-2 pt-3">
                <p className="text-xs font-bold pr-2">  Nike Dri-FIT ADV Run Division </p>
                <p className="text-sm">₹ 2 495</p>
              </div>

              <div className="flex flex-col">
                <span className="text-sm text-gray-700 px-2 ">{`Women's`} Long-Sleeve </span>
                <span className="text-sm text-gray-700 px-2 ">Running Top</span>
              </div>
           
          </div>

            <div>
            <Image
              src={"/gear-4.png"}
              alt="Women dress"
              width={280}
              height={250}
            />
            <div className="flex justify-between items-center px-2 pt-2">
              <p className="text-sm font-bold pr-2">Nike Fast</p>
              <p className="text-sm">₹ 3 795</p>
            </div>

            <div className="flex flex-col">
              <span className="text-sm text-gray-700 px-2 ">
                {`Women's`} Mid-Rise 7/8 Running</span>
              <span className="text-sm text-gray-700 px-2 "> Leggings with Pockets </span>
            </div>
        
        
          </div>

        </div>
      </div>
    </div>
    </div>
  );
};

export default Gear;
