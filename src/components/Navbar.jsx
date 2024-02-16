import React, { useState } from "react";
import { logo, lock, hamburgerMenu, close } from "../assets";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <div className="w-full h-[80px] border-b">
        <div className="md:max-w-[1480px] max-w-[600px] w-full h-full m-auto flex justify-between items-center border border-black">
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
          <div className="hidden md:flex ">
            <button className="flex items-center bg-transparent gap-2 px-6">
              <img src={lock} alt="lock image" />
              <span className="text-gray-600">Login</span>
            </button>
            <button className="text-white font-bold px-8 py-4 rounded-md bg-[#20B486]">
              Sign Up For Free
            </button>
          </div>

          <div className="md:hidden" onClick={handleClick}>
            <img src={toggle ? close : hamburgerMenu} alt="menu logo" />
          </div>
        
        
        </div>
        
      </div>
    </>
  );
};

export default Navbar;
