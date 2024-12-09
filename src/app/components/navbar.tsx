
import React from "react";
import Image from "next/image";
import Link from "next/link";

function Navbar() {
  return (
    <header className="bg-[#F5F5F5] text-[#111111]">
      {/* Top Navbar */}
      <div className="max-w-[1440px] mx-auto bg-[#F5F5F5] flex flex-wrap justify-between items-center py-3 px-4 sm:px-6">
        <Image
          src="/Frame.png"
          alt="logo"
          width={300}
          height={300}
          className="w-[24px] h-[24px]"
        />
        <nav className="flex flex-wrap justify-center items-center text-black font-Helvetica text-[11px] font-medium gap-2 mt-2 sm:mt-0">
          <Link href="/Store" className="px-2 py-1">
            Find a Store
          </Link>
          <span className="hidden sm:inline">|</span>
          <Link href="/ContactUs" className="px-2 py-1">
            Help
          </Link>
          <span className="hidden sm:inline">|</span>
          <Link href="/JoinUs" className="px-2 py-1">
            Join Us
          </Link>
          <span className="hidden sm:inline">|</span>
          <Link href="/SignUp" className="px-2 py-1">
            Sign In
          </Link>
        </nav>
      </div>

      {/* Bottom Navbar */}
      <div className="bg-white">
        <div className="max-w-[1440px] mx-auto bg-white flex flex-wrap justify-between items-center py-3 px-4 sm:px-6">
          {/* Logo */}
          <Image
            src="/Vector (1).png"
            alt="logo"
            width={300}
            height={300}
            className="w-[58.85px] h-[20.54px]"
          />

          {/* Links and Search */}
          <div className="flex flex-wrap items-center justify-between w-full lg:w-auto gap-4 mt-3 lg:mt-0">
            {/* Navigation Links */}
            <div className="hidden lg:flex gap-4">
              <Link href="#" className="px-2 py-1">
                New and Featured
              </Link>
              <Link href="#" className="px-2 py-1">
                Men
              </Link>
              <Link href="#" className="px-2 py-1">
                Women
              </Link>
              <Link href="#" className="px-2 py-1">
                Kids
              </Link>
              <Link href="#" className="px-2 py-1">
                Sale
              </Link>
              <Link href="#" className="px-2 py-1">
                SNKRS
              </Link>
            </div>

            {/* Search Bar */}
            <div className="flex-grow lg:flex-grow-0 lg:w-auto flex items-center rounded-full gap-4 px-4 bg-[#F5F5F5] w-full lg:max-w-sm">
              <Image
                src="/search.png"
                alt="search-icon"
                width={16}
                height={16}
                className="w-6 h-6"
              />
              <input
                type="search"
                placeholder="Search"
                className="text-[15px] py-2 outline-none bg-[#F5F5F5] leading-4 font-medium text-[#CCCCCC] w-full"
              />
            </div>
          </div>

          {/* Icons (Heart and Lock) */}
          <div className="hidden lg:flex items-center justify-between gap-5 mt-3 lg:mt-0">
            <Image
              src="/heart-icon.png"
              alt="heart-icon"
              width={16}
              height={16}
              className="w-6 h-6"
            />
            <Image
              src="/lock-icon.png"
              alt="lock-icon"
              width={16}
              height={16}
              className="w-6 h-6"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
