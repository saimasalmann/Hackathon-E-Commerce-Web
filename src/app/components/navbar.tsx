import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Heart, Menu, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import CartIcon from "./cartIcon";

function Navbar() {
  return (
    <nav className=" w-full bg-white text-[#111111] top-0 fixed md:top-12 ">
      <div className="w-full container mx-auto bg-white flex items-center justify-between px-3 py-3  ">
        {/* Logo */}
        <Image
          src="/Vector (1).png"
          alt="logo"
          width={300}
          height={300}
          className="w-[58.85px] h-[20.54px] "
        />

        {/* Navigation Links */}
        <div className=" hidden  md:flex items-center justify-center md:gap-1 text-[12px] lg:text-[14px] lg:gap-4">
          <Link href="#" className="px-2 py-1  hover:text-gray-500">
            New and Featured
          </Link>
          <Link href="#" className="px-2 py-1  hover:text-gray-500">
            Men
          </Link>
          <Link href="#" className="px-2 py-1  hover:text-gray-500">
            Women
          </Link>
          <Link href="#" className="px-2 py-1  hover:text-gray-500">
            Kids
          </Link>
          <Link href="#" className="px-2 py-1  hover:text-gray-500">
            Sale
          </Link>
          <Link href="#" className="px-2 py-1  hover:text-gray-500">
            SNKRS
          </Link>
        </div>
      
      
      
        {/*main div  Search Bar heart and lock  */}
        <div className=" flex gap-2 md:gap-4 items-center justify-between ">
         
         {/* search and input */}
          <div className="relative flex gap-2">
            <Search className="absolute top-2 left-2 text-gray-600" />
            <Input
              placeholder="Search"
              className="h-9 rounded-full  bg-[#F5F5F5] text-gray-400 border-none pl-10  text-[12px] md:text-[14px]"
            />
          </div>

          {/* Icons (Heart and cart) */}
          <div className="flex items-center justify-between gap-2 md:gap-3 ">
            <Link href="/wishList" className=" hover:text-gray-500">
              <Heart className="size-5 md:size-6" />
            </Link>
            <Link href="/shoppingCart">
              <CartIcon />
            </Link>
          </div>
        </div>

        <Sheet>
          <SheetTrigger className="flex md:hidden">
            <Menu />
          </SheetTrigger>
          <SheetContent className="bg-white">
            <SheetHeader>
              <SheetTitle>
                <Image
                  src="/Frame.png"
                  alt="logo"
                  width={300}
                  height={300}
                  className="w-8 h-8"
                />
              </SheetTitle>
            </SheetHeader>
            <div className="  flex flex-col  items-start justify-center gap-4 mt-4">
            <Link href="/" className="px-2 py-1  hover:text-gray-500">
                Home
              </Link>
              <Link href="/signUp" className="px-2 py-1  hover:text-gray-500">
                Sign In
              </Link>
              <Link href="/store" className="px-2  py-1  hover:text-gray-500">
                Find a Store
              </Link>
              <Link   href="/contactUs"
                className="px-2 py-1  hover:text-gray-500"
              
              >
                Help
              </Link>
              <Link href="/joinUs" className="px-2  py-1  hover:text-gray-500" >
                Join Us
              </Link>

              <Link href="#" className="px-2 py-1  hover:text-gray-500">
                New and Featured
              </Link>
              <Link href="#" className="px-2 py-1  hover:text-gray-500">
                Men
              </Link>
              <Link href="#" className="px-2 py-1  hover:text-gray-500">
                Women
              </Link>
              <Link href="#" className="px-2 py-1  hover:text-gray-500">
                Kids
              </Link>
              <Link href="#" className="px-2 py-1  hover:text-gray-500">
                Sale
              </Link>
              <Link href="#" className="px-2 py-1  hover:text-gray-500">
                SNKRS
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}

export default Navbar;
