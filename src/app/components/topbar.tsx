import React from "react";
import Image from "next/image";
import Link from "next/link";
function TopBar() {
  return (
    <nav className="hidden md:block w-full bg-[#F5F5F5] text-black items-center sticky top-0 z-50">
      <div className=" w-full container mx-auto flex  items-center justify-between bg-[#F5F5F5] px-3  py-3  ">
        <Image
          src="/Frame.png"
          alt="logo"
          width={300}
          height={300}
          className="w-[24px] h-[24px]"
        />
        <div className="min-w-fit flex justify-center items-center font-Helvetica text-black text-[11px] font-medium gap-2  ">
          <Link
            href="/store"
            className="px-2  border-gray-500 border-r-[1px] hover:text-blue-600 hover:underline line "
          >
            Find a Store
          </Link>
          <Link
            href="/ContactUs"
            className="px-2 border-gray-500 border-r-[1px]  hover:text-blue-600 hover:underline line"
          >
            Help
          </Link>
          <Link
            href="/joinUs"
            className="px-2  border-gray-500 border-r-[1px]  hover:text-blue-600 hover:underline line"
          >
            Join Us
          </Link>
          <Link
            href="/signUp"
            className="px-2 hover:text-blue-600 hover:underline line"
          >
            Sign In
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default TopBar;
