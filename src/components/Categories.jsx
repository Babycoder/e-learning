import React from "react";

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
          <div className="mt-8 grid grid-cols md:grid-cols-4 md:grid-rows-3 gap-8">
            <div className="bg-white rounded-md p-4 flex justify-between">
              <div className=" flex gap-4">
                <p>hello</p>
                <h1>Design</h1>
              </div>
              <p>arrow</p>
            </div>
            <div>Box 1</div>
            <div>Box 1</div>
            <div>Box 1</div>
            <div>Box 1</div>
            <div>Box 1</div>
            <div>Box 1</div>
            <div>Box 1</div>
            <div>Box 1</div>
            <div>Box 1</div>
            <div>Box 1</div>
            <div>Box 1</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
