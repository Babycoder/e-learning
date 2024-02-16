import React from "react";
import { logo, lock } from "../assets";

const Navbar = () => {
  return (
    <>
      <div className="w-full h-[80px] border-b">
        <div className="max-w-[1480px] w-full h-full m-auto flex justify-between items-center border border-black">
          <img src={logo} alt="logo image" className="h-[25px]" />
          <div className="">
            <ul className="hidden md:flex gap-4">
              <li>Home</li>
              <li>About</li>
              <li>Support</li>
              <li>Platform</li>
              <li>Pricing</li>
            </ul>
          </div>
          <div className=" flex ">
            <button className="flex items-center bg-transparent gap-2 px-6">
              <img src={lock} alt="lock image" />
              <span className="text-gray-600">Login</span>
            </button>
            <button className="text-white font-bold px-8 py-4 rounded-md bg-[#20B486]">
              Sign Up For Free
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
