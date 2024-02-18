import React, { useState } from "react";
import { heroImg } from "../assets";
import { AiOutlineSearch } from "react-icons/ai";

const Hero = () => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    const val = event.target.value;
    setValue(val);
  };
  const handleClick = (e) => {
    e.preventDefault();
    setValue("");
  };

  return (
    <div className="w-full bg-white py-24">
      <div className="max-w-[1480px] m-auto grid md:grid-cols-2">
        <div>
          <p className="py-8 text-2xl text-[#20B486] font-semibold">
            START TO SUCCESS
          </p>
          <h1 className="md:text-6xl text-3xl font-medium">
            Access To <span className="text-[#20B486]">5000+</span> Courses from{" "}
            <span className="text-[#20B486]">300</span> Instructors &
            Institutions
          </h1>
          <p className="py-4 text-[#6D737A]">
            Various versions have evolved over the years, sometimes by accident,
          </p>
          <form className="max-w-[700px] p-6 shadow-lg rounded-md flex justify-between">
            <input
              className=" w-[50%] bg-white"
              type="text"
              placeholder="What do you want to learn ?"
              onChange={handleChange}
              value={value}
            />
            <button className="" onClick={handleClick}>
              <AiOutlineSearch
                size={25}
                className="icon"
                style={{ color: "#000" }}
              />
            </button>
          </form>
        </div>
        <img
          className="md:order-last order-first"
          src={heroImg}
          alt="Hero section image"
        />
      </div>
    </div>
  );
};

export default Hero;
