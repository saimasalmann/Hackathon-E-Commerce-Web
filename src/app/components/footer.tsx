import React from "react";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className="w-full bg-black text-white py-8 ">
      <div className="container mx-auto px-3 ">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
          {/* First Column */}
          <div>
            <p className="text-{12px] font-normal mb-4">FIND A STORE</p>
            <ul className="space-y-2 text-gray-400 text-[10px]">
              <li className="hover:text-white cursor-pointer">
                BECOME A MEMBER
              </li>
              <li className="hover:text-white cursor-pointer">
                SIGN UP FOR EMAIL
              </li>
              <li className="hover:text-white cursor-pointer">
                Send Us Feedback
              </li>
              <li className="hover:text-white cursor-pointer">
                STUDENT DISCOUNTS
              </li>
            </ul>
          </div>

          {/* Second Column */}
          <div>
            <p className="text-{12px] font-normal mb-4">GET HELP</p>
            <ul className="space-y-2 text-gray-400 text-[10px]">
              <li className="hover:text-white cursor-pointer">Order Status</li>
              <li className="hover:text-white cursor-pointer">Delivery</li>
              <li className="hover:text-white cursor-pointer">Returns</li>
              <li className="hover:text-white cursor-pointer">
                Payment Options
              </li>
              <li className="hover:text-white cursor-pointer">
                Contact Us On Nike.com Inquiries
              </li>
              <li className="hover:text-white cursor-pointer">
                Contact Us On All Other Inquiries
              </li>
            </ul>
          </div>

          {/* Third Column */}
          <div>
            <p className="text-{10px] font-normal mb-4">ABOUT NIKE</p>
            <ul className="space-y-2 text-gray-400 text-[10px]">
              <li className="hover:text-white cursor-pointer">News</li>
              <li className="hover:text-white cursor-pointer">Careers</li>
              <li className="hover:text-white cursor-pointer">Investors</li>
              <li className="hover:text-white cursor-pointer">
                Sustainability
              </li>
            </ul>
          </div>
          {/* 4th coloumn */}
          <div className="flex justify-end space-x-4 mt-6 sm:mt-0">
            {/* Twitter */}
            <Image
              src="/twitter.png"
              alt="twitter logo"
              width={16}
              height={16}
              className="w-[30px] h-[30px]"
            />
            {/* Facebook */}
            <Image
              src="/facebook.png"
              alt="facebook logo"
              width={16}
              height={16}
              className="w-[30px] h-[30px]"
            />

            {/* YouTube */}
            <Image
              src="/youTube.png"
              alt="youTube logo"
              width={16}
              height={16}
              className="w-[30px] h-[30px]"
            />
            {/* Instagram */}
            <Image
              src="/twitter.png"
              alt="twitter logo"
              width={16}
              height={16}
              className="w-[30px] h-[30px]"
            />
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-6"></div>

        {/* Bottom Section */}
        <div className="text-[11px] flex flex-col sm:flex-row justify-between items-center text-gray-400 text-sm">
          <div className=" flex items-center mb-4 sm:mb-0 mr-3">
            <span>
              {" "}
              <Image
                src="/map icon.png"
                alt="map icon"
                width={16}
                height={16}
                className="w-[15px] h-[15px]"
              />
            </span>
            <span className="font-normal text-white mr-5">India</span> © 2023
            Nike, Inc. All Rights Reserved
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white">
              Guides
            </a>
            <a href="#" className="hover:text-white">
              Terms of Sale
            </a>
            <a href="#" className="hover:text-white">
              Terms of Use
            </a>
            <a href="#" className="hover:text-white">
              Nike Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
