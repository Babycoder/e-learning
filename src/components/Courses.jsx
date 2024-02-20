import React from "react";
import Card from "./Card";
import Slider from "react-slick";
import { courses } from "../data/Courses";
import { slickSettings } from "./index";

const Courses = () => {
  const settings = { ...slickSettings };

  return (
    <>
      <div className="w-ful bg-green-50 py-24">
        <div className="md:max-w-[1480px] max-w-[600px] m-auto">
          <h1 className="text-4xl font-semibold leading-[72px]">
            Most Popular <span className="text-[#20B486]">Courses</span>
          </h1>
          <p className="text-[#6D737A] py-2">
            Various versions have evolved over the years, sometimes by accident,
          </p>

          <Slider {...settings}>
            {courses.map((course) => {
              return <Card key={course.id} course={course} />;
            })}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Courses;
