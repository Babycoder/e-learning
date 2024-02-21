import React from "react";
import { quotationMark } from "../assets";
const FeedbackCard = ({ avatar, info }) => {
  return (
    <>
      <div className="p-8 m-4 border border-transparent rounded shadow-xl">
        <div className="flex justify-between">
          <div className="flex gap-4 items-center">
            <img src={avatar} alt="avatar image" />
            <div>
              <h1 className="text-xl font-semibold pb-2">{info.name}</h1>
              <h3 className="text-base">{info.position}</h3>
            </div>
          </div>
          <img
            className="mt-2 w-[44px] h-[33.7px]"
            src={quotationMark}
            alt="quotationMark image"
          />
        </div>
        <div className="pt-8">
          <p className="pb-4 text-[#363A3D]">
            Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra.
            Nam sed imperdiet turpis. In hac habitasse platea dictumst. Praesent
            nulla massa, hendrerit vestibulum gravida in, feugiat auctor felis.
          </p>
          <p className="text-[#363A3D]">
            Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra.
            Nam sed imperdiet turpis. In hac habitasse platea dictumst.
          </p>
        </div>
      </div>
    </>
  );
};

export default FeedbackCard;
