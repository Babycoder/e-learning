import React from "react";
import Card from "./Card";

const Courses = () => {
  return (
    <>
      <div className="w-ful bg-green-50 py-24">
        <div className="max-w-[1480px] m-auto">
          <h1 className="text-4xl font-semibold leading-[72px]">
            Most Popular <span className="text-[#20B486]">Courses</span>
          </h1>
          <p className="text-[#6D737A] py-2">
            Various versions have evolved over the years, sometimes by accident,
          </p>
          <Card />
        </div>
      </div>
    </>
  );
};

export default Courses;
