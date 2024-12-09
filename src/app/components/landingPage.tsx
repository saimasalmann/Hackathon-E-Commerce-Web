import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";

function LandingPage() {
  return (
    <div className="bg-white text-black">
     <div className="bg-[#F5F5F5]">
      <div className="max-w-[1440px] h-[58px] text-center py-4 bg-[#F5F5F5] ">
        <p className="font-medium text-[15px]">Hello Nike App</p>
        <p className="font-normal text-[11px]">
          Download the app to access everything Nike. Get Your Great
        </p>
      </div>
      </div>
      {/* product shoes image */}
      <div className="max-w-[1440px] mx-auto bg-white">
        <Image
          src="/mainShoe.png"
          alt="Nike Air Max Pulse"
          width={500}
          height={400}
          className="w-[1440px] "
        />

        {/* bottomDiv  */}

        <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto space-y-3">
            <div className="text-center">
              <p className="text-[15px] font-medium">First Look</p>
              <h2 className="text-5xl font-bold text-gray-900 sm:text-4xl">
                NIKE AIR MAX PULSE
              </h2>
              <p className="mt-3 text-[15px] font-normal text-gray-500 sm:mt-4">
                Extreme comfort. Hyper durable. Max volume. Introducing the Air
                Max Pulse - designed to push you past your limits and help you
                go to the max.
              </p>
            </div>
            <div className="mt-10 flex justify-center">
              <Button
                variant="secondary"
                className="mr-4 bg-black text-white rounded-full"
              >
                {" "}
                Notify Me
              </Button>
              <Button
                variant="secondary"
                className=" bg-black text-white rounded-full"
              >
                Shop Air Max
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
// import Image from "next/image";
// import React from "react";
// import { Button } from "@/components/ui/button";

// function LandingPage() {
//   return (
//     <div className="bg-white text-black">
//       {/* Top bar */}
//       <div className="bg-[#F5F5F5]">
//         <div className="max-w-[1440px] mx-auto text-center py-4 px-4 sm:px-6 lg:px-8">
//           <p className="font-medium text-sm sm:text-base">Hello Nike App</p>
//           <p className="font-normal text-xs sm:text-sm">
//             Download the app to access everything Nike. Get Your Great
//           </p>
//         </div>
//       </div>

//       {/* Product shoes image */}
//       <div className="bg-white">
//         <div className="relative w-full h-48 sm:h-72 md:h-96 lg:h-[500px] ">
//           <Image
//             src="/mainShoe.png"
//             alt="Nike Air Max Pulse"
//             layout="fill"
//             objectFit="cover"
//             className="w-full"
//           />
//         </div>

//         {/* Bottom content */}
//         <div className="bg-white py-8 px-4 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
//           <div className="max-w-2xl mx-auto space-y-6 text-center">
//             <p className="text-sm font-medium sm:text-base lg:text-lg">
//               First Look
//             </p>
//             <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl lg:text-5xl">
//               NIKE AIR MAX PULSE
//             </h2>
//             <p className="mt-2 text-sm font-normal text-gray-500 sm:text-base lg:text-lg">
//               Extreme comfort. Hyper durable. Max volume. Introducing the Air
//               Max Pulse - designed to push you past your limits and help you go
//               to the max.
//             </p>
//             <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
//               <Button
//                 variant="secondary"
//                 className="bg-black text-white rounded-full px-6 py-2 text-sm sm:text-base lg:text-lg"
//               >
//                 Notify Me
//               </Button>
//               <Button
//                 variant="secondary"
//                 className="bg-black text-white rounded-full px-6 py-2 text-sm sm:text-base lg:text-lg"
//               >
//                 Shop Air Max
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default LandingPage;
