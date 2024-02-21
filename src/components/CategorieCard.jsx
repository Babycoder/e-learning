import React from "react";
import { BsArrowUpRight } from "react-icons/bs";

const CategorieCard = ({ icon, title }) => {
  return (
    <>
      <div className="category-card group/box bg-white p-4 shadow-lg hover:shadow-xl hover:cursor-default rounded-md  flex justify-between items-center border border-transparent hover:border-[#20B486]">
        <div className=" flex items-center gap-4">
          {icon}
          <h1 className="text-xl">{title}</h1>
        </div>
        <div className="group-hover/box:bg-[#20B486] p-2 rounded">
          <BsArrowUpRight size={25} color="#20B486" className="arrow-icon" />
        </div>
      </div>
    </>
  );
};

export default CategorieCard;
