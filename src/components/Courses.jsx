import React from "react";
import Card from "./Card";
import Slider from "react-slick";

const Courses = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true
        }
      }]
  };

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
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Courses;
