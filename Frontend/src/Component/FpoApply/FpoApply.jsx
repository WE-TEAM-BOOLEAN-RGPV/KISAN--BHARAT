import React from "react";

import Input from "../input";

const FpoApply = () => {
  return (
    <div className="bg-gray-50 w-full ">
      <section className="flex justify-center items-center h-full mx-auto mt-10">
        <div className="w-[70%] bg-white rounded-lg shadow-md p-8 ">
          <h1 className="text-xl font-bold mb-4 text-gray-900">
            Fill this form to join A Fpo
          </h1>
          <form action="#">
            <div className="flex flex-col gap-4">
              <div className=" flex flex-row gap-4">
                <Input
                  label="Name*"
                  type="Text"
                  placeholder="Enter your Name"
                  required
                />
                <Input
                  label="Phone No"
                  type="tel"
                  placeholder="Enter your Mobile No"
                  required
                />
              </div>
              <div className=" flex flex-row gap-4">
                <Input
                  label="Your DOB"
                  type="date"
                  placeholder="Enter your Date Of Birth"
                  required
                />
                <Input
                  label="Crops Name 1"
                  type="Text"
                  placeholder="Enter Crops You Clutivate"
                  required
                />
              </div>
              <div className=" flex flex-row gap-4">
                <Input
                  label="Crops Name 2"
                  type="Text"
                  placeholder="Enter Crops You Clutivate"
                  required
                />
                <Input
                  label="Crops Name 3"
                  type="Text"
                  placeholder="Enter Crops You Clutivate"
                  required
                />
              </div>
              <div className=" flex flex-row gap-4">
                <Input
                  label="Monthly Income"
                  type="Text"
                  placeholder="Enter your Monthly Income"
                  required
                />
                <Input
                  label="Land Owned"
                  type="email"
                  placeholder="Enter how much land you owned"
                  required
                />
              </div>
              
            
             
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="w-[20%] px-6 py-3 mt-4 font-semibold text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none"
              >
                Join Now
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default FpoApply;
