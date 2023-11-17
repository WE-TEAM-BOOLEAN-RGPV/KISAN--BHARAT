import React from "react";
import ProductCard from "../ProductCard/ProductCard";

const ProductDetails = () => {
  return (
    <div>
    <div
      className="w-[1200px] h-[500px] m-auto 
    border-2 border-gray-200 rounded-lg shadow flex flex-row  p-5 font-Roboto mt-10"
    >
      <div className="w-[500px] flex flex-row gap-4 font-Roboto">
        <div className="w-[100px] flex flex-col gap-3 justify-start ">
          <img
            src="https://5.imimg.com/data5/SELLER/Default/2023/6/313275363/FK/FI/CN/66857433/khapli-wheat-250x250.webp"
            alt=""
            className="w-[100px] cursor-pointer"
          />
          <img
            src="https://5.imimg.com/data5/SELLER/Default/2023/6/313275363/FK/FI/CN/66857433/khapli-wheat-250x250.webp"
            alt=""
            className="w-[100px] cursor-pointer"
          />
          <img
            src="https://5.imimg.com/data5/SELLER/Default/2023/6/313275363/FK/FI/CN/66857433/khapli-wheat-250x250.webp"
            alt=""
            className="w-[100px]"
          />
          <img
            src="https://5.imimg.com/data5/SELLER/Default/2023/6/313275363/FK/FI/CN/66857433/khapli-wheat-250x250.webp"
            alt=""
            className="w-[100px] cursor-pointer"
          />
        </div>
        <div className="w-[350px]  cursor-pointer ">
          <img
            src="https://5.imimg.com/data5/SELLER/Default/2023/6/313275363/FK/FI/CN/66857433/khapli-wheat-250x250.webp"
            alt="product image"
            className="w-[350px] h-[435px] cursor-pointer"
          />
        </div>
      </div>
      <div className="w-[650px]">
        <div className="flex flex-row justify-between">
          <h2 className="text-gray-500 text-xl font-bold ">
            Brown Wheat Grain High in Protein
          </h2>
          <h2 className="text-[#219653] text-xl font-bold ">₹27/Kg</h2>
        </div>
        <div>
          <p className="text-gray-700 text-sm font-bold">
            Jagriti Dalhan Producer Company Ltd.
          </p>
        </div>
        <div className="flex flex-col mt-6">
          <div className="Product-details-table-element bg-white">
            <p className="">Cuisine</p>
            <p className="">Indian</p>
          </div>
          <div className="Product-details-table-element bg-gray-100">
            <p>Brand</p>
            <p className="">Jagriti Dalhan</p>
          </div>
          <div className="Product-details-table-element bg-white">
            <p>min quantity</p>
            <p className="">50Kg</p>
          </div>
          <div className="Product-details-table-element bg-gray-100">
            <p>Total Stock</p>
            <p className="">10 quiental</p>
          </div>
          <div className="Product-details-table-element bg-white">
            <p>burggain possible</p>
            <p className="">yes</p>
          </div>
          <div className="Product-details-table-element bg-gray-100">
            <p>Colour</p>
            <p className="">brown</p>
          </div>
        </div>
        <div className="mt-6 ">
          <p className="text-grey-700 text-xl font-bold">Product Description</p>
          <p className="text-gray-700 text-sm font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            iusto aliquid voluptas quam. Reiciendis aut qui veritatis aspernatur
            doloremque nemo, quam et architecto aliquam assumenda quaerat, ex
            debitis fugit perspiciatis!
          </p>
        </div>
        <div className="flex flex-row w-full mt-4 justify-evenly">
          <button
            type="submit"
            class="big-primary-button hover:bg-green-700  focus:outline-none  "
          >
            Buy Now
          </button>
          <button
            type="submit"
            class="w-[40%] text-green-600 font-bold bg-white hover:bg-green-700 hover:text-white focus:outline-none  border-green-600 border-2 rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Call Now
          </button>
        </div>
      </div>
    </div>
    <div className='px-[5%] mt-10'>
      <h2 className="bold-text">Related Product</h2>
      <div className='grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-4 xl:gap-[30px] mb-12 border-0'>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
       
        </div>  
    </div>
    </div>
  );
};

export default ProductDetails;
