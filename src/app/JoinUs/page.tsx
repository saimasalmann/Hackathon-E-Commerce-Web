import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Join = () => {
  return (
    <div className="max-w-5xl min-h-screen mx-auto px-4 py-10">
      <div className="flex justify-center mb-4">
        <Image
          className=""
          src={"/signin.png"}
          alt="shoes banner"
          width={450}
          height={200}
        />
      </div>

      <div className="w-full  items-center  flex flex-col px-2 ">
        <input
          className="w-80 sm:w-96 px-3  py-2 my-2 border-[1px] border-grey-300"
          type="text"
          placeholder="Email Address"
        />

        <input
          className="w-80 sm:w-96 px-3  py-2 my-2 border-[1px] border-grey-300"
          type="text"
          placeholder="Password"
        />

        <input
          className="w-80 sm:w-96 px-3  py-2 my-2 border-[1px] border-grey-300"
          type="text"
          placeholder="First Name"
        />

        <input
          className="w-80 sm:w-96 px-3  py-2 my-2 border-[1px] border-grey-300"
          type="text"
          placeholder="Last Name"
        />

        <input
          className="w-80 sm:w-96 px-3  py-2 my-2 border-[1px] border-grey-300"
          type="text"
          placeholder="Date of Birth"
        />

        <span className="w-80 sm:w-96 text-sm text-gray-500 pl-2">
          Get a Nike Member Reward ever year on your Birthday.
        </span>
        <div className="relative">
          <input
            className=" w-80 sm:w-96 px-5  py-2 my-2 "
            type="text"
            placeholder="India"
          />

          <div className="absolute top-4 right-2 text-gray-500">
            <ChevronDown />
          </div>
        </div>
        <div className="flex flex-col  w-80 sm:w-96 justify-between">
          <input
            className="  px-2 py-2 my-2 border-[1px] border-grey-300 "
            type="text"
            placeholder="Male"
          />
          <input
            className="  px-2  py-2 my-2 border-[1px] border-grey-300"
            type="text"
            placeholder="Female"
          />
        </div>
        <div>
          <div className="w-80 sm:w-96 items-start flex py-4">
            <input className=" relative top-[6px]" type="checkbox" />
            <span className="text-gray-500 px-2">
              Sign up for emails to get updates from Nike on products, offers
              and your Member benefits
            </span>
          </div>
        </div>
        <div className="w-80 sm:w-96 flex justify-center">
          <p className="text-gray-600 text-center text-[13px] pl-1">
            By Creating an Account, you agree to {`Nike's`}
            <span className="text-gray-500 underline">
              Privacy Policy and Terms of Use.
            </span>
          </p>
        </div>
        <div className="flex justify-center">
          <button className="w-80 sm:w-96 bg-black text-white py-3 text-xl rounded-lg mt-6 mb-3">
            Join Us
          </button>
          <br />
          <br />
        </div>
        <div className="flex justify-center items-center pb-5">
          <span className="text-gray-500">
            Already a member?
            <Link href={"/signUp"}>
              <span className="text-black underline pl-1"> Sign In.</span>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Join;
