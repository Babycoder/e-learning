import React from "react";
import {
  companyLogo1,
  companyLogo2,
  companyLogo3,
  companyLogo4,
} from "../assets";
const Companies = () => {
  return (
    <>
      <div className="w-ful bg-white py-24">
        <div className="max-w-[950px] m-auto ">
          <h1 className="text-[#536E96] text-center md:text-3xl text-2xl leading-10 font-semibold font-inter">
            Trusted by over 25,000 teams around the world.
          </h1>
          <p className="text-[#536E96] text-center text-xl py-4 word-spacing-4">
            Leading companies use the same courses to help employees keep their
            skills fresh.
          </p>
          <div className="flex flex-wrap  justify-center py-8 gap-2">
            <img src={companyLogo1} alt="companyLogo 1" />
            <img src={companyLogo2} alt="companyLogo 2" />
            <img src={companyLogo3} alt="companyLogo 3" />
            <img src={companyLogo4} alt="companyLogo 4" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Companies;
