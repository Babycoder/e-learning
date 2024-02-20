import React, { useState } from "react";
import { logo, lock, hamburgerMenu, close } from "../assets";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <div className="w-full h-[80px] border-b ">
        <div className="md:max-w-[1480px] max-w-[600px] w-full h-full m-auto flex justify-between items-center">
          <img src={logo} alt="logo image" className="h-[25px]" />
          <div className="">
            <ul className="hidden md:flex gap-10 text-gray-500 font-medium">
              <li>Home</li>
              <li>About</li>
              <li>Support</li>
              <li>Platform</li>
              <li>Pricing</li>
            </ul>
          </div>
          <div className="hidden md:flex">
            <button className="flex items-center bg-transparent gap-2 px-6">
              <img src={lock} alt="lock image" />
              <span className="text-gray-600">Login</span>
            </button>
            <button className="text-white font-bold px-6 py-2 rounded-md bg-[#20B486]">
              Sign Up For Free
            </button>
          </div>

          <div className="md:hidden" onClick={handleClick}>
            <img src={toggle ? close : hamburgerMenu} alt="menu logo" />
          </div>
        </div>

        <div
          className={
            toggle ? "absolute z-10 p-4 w-full h-screen bg-white md:hidden" : "hidden"
          }
        >
          <ul className="text-gray-500 font-medium">
            <li className="p-4 hover:bg-gray-100">Home</li>
            <li className="p-4 hover:bg-gray-100">About</li>
            <li className="p-4 hover:bg-gray-100">Support</li>
            <li className="p-4 hover:bg-gray-100">Platform</li>
            <li className="p-4 hover:bg-gray-100">Pricing</li>
          </ul>
          <div className="flex flex-col gap-4 my-4">
            <button className="flex justify-center border rounded-md py-3 bg-gray-100 gap-2 px-6">
              <img src={lock} alt="lock image" />
              <span className="text-gray-600">Login</span>
            </button>
            <button className="text-white font-bold px-8 py-3 rounded-md bg-[#20B486]">
              Sign Up For Free
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
