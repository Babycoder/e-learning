import React from "react";
import { achievement } from "../assets/index";
const Achievement = () => {
  return (
    <>
      <div className="w-full bg-white py-32">
        <div className="max-w-[1480px] m-auto grid md:grid-cols-2">
          <div className="md:my-16">
            <h1 className="md:text-4xl text-3xl font-medium">
              Our <span className="text-[#20B486]">Achievement</span>
            </h1>
            <p className="py-4 text-[#6D737A]">
              Various versions have evolved over the years, sometimes by
              accident,
            </p>
            <div className="">
            
            </div>
          </div>
          <img src={achievement} className="md:m-auto m-auto mt-5" alt="achievement picture" />
        </div>
      </div>
    </>
  );
};

export default Achievement;
