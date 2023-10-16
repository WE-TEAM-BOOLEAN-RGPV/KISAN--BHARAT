import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = () => {
  const navigate=useNavigate();
  return (
    <div className="flex justify-center items-center mt-10">
      <div class="w-full max-w-xs bg-white border border-gray-200 rounded-lg shadow flex flex-col gap-5 p-4 ">
        <div >
          <a href="#">
            <img
              class=" w-[198px] m-auto"
              src="https://5.imimg.com/data5/ANDROID/Default/2023/8/332227349/RD/OX/XJ/34981957/product-jpeg-500x500.jpg"
              alt="product image"
            />
          </a>
        </div>
        <div className="flex flex-col gap-2 ">
          <div className="flex flex-row justify-between">
            <h2 className="text-gray-500 text-xl font-bold ">
              Brown Wheat Grain
            </h2>
            <h2 className="text-[#219653] text-xl font-bold ">₹27/Kg</h2>
          </div>
          <div>
            <p className="text-gray-700 text-sm font-bold">
              Jagriti Dalhan Producer Company Ltd.
            </p>
          </div>
          <div>
            <p className="text-gray-500 text-xs font-bold">
              Aurangabad, Maharastra
            </p>
          </div>
          <div className="flex flex-row justify-between px-8">
            <button className="flex min-w-24 h-10 justify-center items-center bg-[#219653] text-white rounded-md hover:bg-[#219653]/90 transition-all duration-300 ease-in-out cursor-pointer py-3 px-5">
              Contact
            </button>
            <button className="flex min-w-24 h-10 justify-center items-center bg-white text-[#219653] rounded-md border-2 border-[#219653] hover:bg-[#219653]/90  hover:text-white transition-all duration-300 ease-in-out cursor-pointer ml-5 py-3 px-5"
            onClick={() => navigate("/Product/:id")}
            >
              Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
