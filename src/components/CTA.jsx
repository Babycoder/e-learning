import React from "react";
import { cta } from "../assets";

const CTA = () => {
  return (
    <>
      <div className="w-full bg-[#E9F8F3B2] py-24">
        <div className="max-w-[1200px] m-auto grid md:grid-cols-2 md:gap-14 gap-y-16 ">
          <div className="m-auto">
            <img src={cta} alt="cta image" />
          </div>
          <div className="m-auto p-8 ">
            <h1 className="text-4xl pb-6">
              Join <span className="text-[#20B486]">World's largest </span>
              learning platform today
            </h1>
            <p className="text-[#06241B] text-xl pb-12">
              Start learning by registering for free
            </p>
            <button className="w-[168px] text-white font-semibold text-base py-3 rounded-md bg-[#20B486]">
              Sign Up For Free
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CTA;
