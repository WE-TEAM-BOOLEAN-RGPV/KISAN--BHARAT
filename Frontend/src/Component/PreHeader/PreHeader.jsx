import React from "react";
import Input from "../Input";

const PreHeader = () => {
  return (
    <>
      <div className="w-full h-[70px] bg-[#f5f5f5] mt-0 flex px-[5%] justify-between border-b-2 border-gray-200">
        <div className="py-3">
          <h2 className="bold-text">Logo</h2>
        </div>
        <div className="w-[70%] py-3 flex justify-between gap-3">
          <input
            type="text"
            placeholder="Search Product..."
            className="h-[50px] w-[70%] px-2  border-[2px] border-gray-300 rounded-md outline-none focus:bg-gray-50 duration-200 text-xl font-Roboto"
          />
             <button
                type="submit"
                className="w-[150px] px-6 py-3 h-[50px]  font-semibold text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none"
              >
              Buy
              </button>
              <button
                type="submit"
                className="w-[150px] px-6 py-3 h-[50px] font-semibold bg-white text-green-500 border-2 border-green-500 rounded-md hover:bg-green-600 hover:text-white focus:outline-none"
              >
               Rent
              </button>

        </div>
        <div className="flex flex-row gap-3 py-2">
        <button
                type="submit"
                className="w-[150px] px-6 py-3  font-semibold bg-white text-green-500 border-2 border-green-500 rounded-md hover:bg-green-600 hover:text-white focus:outline-none"
              >
              Join as Fpo
              </button>
       
        </div>
      </div>
    </>
  );
};

export default PreHeader;
