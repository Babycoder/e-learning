import React from "react";
import { PiPenNibThin } from "react-icons/pi";
import { PiFileHtmlThin } from "react-icons/pi";
import { PiMicrophoneStageThin } from "react-icons/pi";
import { PiBagThin } from "react-icons/pi";
import { PiSunHorizonThin } from "react-icons/pi";
import { PiCameraThin } from "react-icons/pi";
import { PiMusicNoteThin } from "react-icons/pi";
import { PiDatabaseThin } from "react-icons/pi";
import { PiLightbulbThin } from "react-icons/pi";
import { PiHeartbeatThin } from "react-icons/pi";
import { PiGraphThin } from "react-icons/pi";
import { PiDetectiveThin } from "react-icons/pi";



import CategorieCard from "./CategorieCard";

const Categories = () => {
  return (
    <>
      <div className="w-ful bg-green-50 py-24">
        <div className="md:max-w-[1480px] max-w-[600px] m-auto">
          <h1 className="text-4xl font-semibold leading-[72px]">
            Most Popular <span className="text-[#20B486]">Categories</span>
          </h1>
          <p className="text-[#6D737A] py-2">
            Various versions have evolved over the years, sometimes by accident,
          </p>
          <div className=" mt-8 grid grid-cols-2 md:grid-cols-4 md:grid-rows-3 gap-10">
            <CategorieCard icon={<PiPenNibThin size={30} />} title="Design" />
            <CategorieCard icon={<PiFileHtmlThin size={30} />} title="Development" />
            <CategorieCard icon={<PiMicrophoneStageThin size={30} />} title="Marketing" />
            <CategorieCard icon={<PiBagThin size={30} />} title="Business" />
            <CategorieCard icon={<PiSunHorizonThin size={30} />} title="Lifestyle" />
            <CategorieCard icon={<PiCameraThin size={30} />} title="Photography" />
            <CategorieCard icon={<PiMusicNoteThin size={30} />} title="Music" />
            <CategorieCard icon={<PiDatabaseThin size={30} />} title="Data Science" />
            <CategorieCard icon={<PiLightbulbThin size={30} />} title="Personal Dev" />
            <CategorieCard icon={<PiHeartbeatThin size={30} />} title="Health & Fitness" />
            <CategorieCard icon={<PiGraphThin size={30} />} title="Finance" />
            <CategorieCard icon={<PiDetectiveThin size={30} />} title="Teaching" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
