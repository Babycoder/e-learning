import React from "react";
import Card from "./Card";
import Slider from "react-slick";
import { courses } from "../data/Courses";
import { slickSettings } from "./index";
import FeedbackCard from "./FeedbackCard";
import { avatar, quotationMark } from "../assets";

const Feedback = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 400,
    slidesToShow: 2,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
    ],
  };

  return (
    <>
      <div className="w-ful bg-white py-24">
        <div className="md:max-w-[1480px] max-w-[600px] m-auto">
          <div>
            <h1 className="text-4xl font-semibold leading-[72px]">
              Student <span className="text-[#20B486]">Feedback</span>
            </h1>
            <p className="text-[#6D737A] py-2">
              Various versions have evolved over the years, sometimes by
              accident,
            </p>
          </div>
          <div className="mt-8">
            <Slider {...settings}>
              <FeedbackCard
                avatar={avatar}
                info={{ name: "Jenny Wilson", position: "UI-UX Designer" }}
              />
              <FeedbackCard
                avatar={avatar}
                info={{ name: "Jenny Wilson", position: "UI-UX Designer" }}
              />
              <FeedbackCard
                avatar={avatar}
                info={{ name: "Jenny Wilson", position: "UI-UX Designer" }}
              />
              <FeedbackCard
                avatar={avatar}
                info={{ name: "Jenny Wilson", position: "UI-UX Designer" }}
              />
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feedback;
