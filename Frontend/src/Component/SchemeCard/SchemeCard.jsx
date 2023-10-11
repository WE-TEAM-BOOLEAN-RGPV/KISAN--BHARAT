import React from "react";

const SchemeCard = () => {
  return (
    <>
      <div className="flex item-center justify-center mt-12">
        <div className=" box-border w-[1100px] h-[300px] [background:linear-gradient(180deg,_#FBFBFB,_#E3FFDE)] overflow-hidden flex flex-row items-start justify-center py-[33px] pr-[145px] pl-[26px] gap-[152px] text-left text-[24px] text-black font-poppins border-[2px] border-solid border-gray-200 rounded-[15px]">
          <div className="flex flex-col items-start justify-center ">
            <p className="top-[0px] font-semibold">
            Kisan Kalyan Yojna
            </p>
            <div className=" top-[43px] left-[0px] flex flex-row items-start justify-start gap-[10px] ">
              <div className="rounded-[5px] bg-[#DCDCDC] h-[25px] overflow-hidden flex flex-row items-center justify-center py-1 px-2 box-border cursor-pointer hover:bg-green-100 hover:text-green-400">
                <p className="font-semibold text-xs">State Goverment</p>
              </div>
              <div className="rounded-[5px] bg-[#DCDCDC] h-[25px] overflow-hidden flex flex-row items-center justify-center py-1 px-2 box-border cursor-pointer hover:bg-green-100 hover:text-green-400">
                <p className="font-semibold text-xs">FPO</p>
              </div>
              <div className="rounded-[5px] bg-[#DCDCDC] h-[25px] overflow-hidden flex flex-row items-center justify-center py-1 px-2 box-border cursor-pointer hover:bg-green-100 hover:text-green-400">
                <p className="font-semibold text-xs">Farm</p>
              </div>
              <div className="rounded-[5px] bg-[#DCDCDC] h-[25px] overflow-hidden flex flex-row items-center justify-center py-1 px-2 box-border cursor-pointer hover:bg-green-100 hover:text-green-400">
                <p className="font-semibold text-xs">Forestry</p>
              </div>
              <div className="rounded-[5px] bg-[#DCDCDC] h-[25px] overflow-hidden flex flex-row items-center justify-center py-1 px-2 box-border cursor-pointer hover:bg-green-100 hover:text-green-400">
                <p className="font-semibold text-xs">Kisan</p>
              </div>
              <div className="rounded-[5px] bg-[#DCDCDC] h-[25px] overflow-hidden flex flex-row items-center justify-center py-1 px-2 box-border cursor-pointer hover:bg-green-100 hover:text-green-400">
                <p className="font-semibold text-xs">Madhya Pradesh</p>
              </div>
              <div className="rounded-[5px] bg-[#DCDCDC] h-[25px] overflow-hidden flex flex-row items-center justify-center py-1 px-2 box-border cursor-pointer hover:bg-green-100 hover:text-green-400">
                <p className="font-semibold text-xs">Pmksy</p>
              </div>
            </div>
            <p className="text-base font-semibold text-zinc-600 mt-2 ">
            The main objective of this Madhya Pradesh Kisan Anudan Yojana is to provide grant money to the farmers of the state to buy good equipment for farming, ao that the farmers of MP can produce good yield and become self-sufficient. The income of the farmers will also increase through this scheme. Farmers of Madhya Pradesh can do farming with new technology by getting subsidies under this scheme.
            </p>
            <div className="flex flex-row justify-start item-center gap-[4px] mt-[20px]">
              <div className="text-base font-semibold text-zinc-600">
                3 oct 2023
              </div>
              <div className="rounded-[50%] bg-gray w-1 h-1" />
              <div className="text-base font-semibold text-zinc-600">
                9:16 AM
              </div>
            </div>
          </div>
          <div className="flex flex-row item-center justify-center mt-[80px]">
            <button
              type="button"
              class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              ApplyNow
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SchemeCard;
