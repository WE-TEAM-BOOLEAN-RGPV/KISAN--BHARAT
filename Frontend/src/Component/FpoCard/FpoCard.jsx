import React from "react";

const FpoCard = () => {
  return (
    <>
      <div className="flex item-center justify-center mt-12">
        <div className=" box-border w-[1100px] h-[300px] [background:linear-gradient(180deg,_#FBFBFB,_#E3FFDE)] overflow-hidden flex flex-row items-start justify-center py-[33px] pr-[145px] pl-[26px] gap-[152px] text-left text-[24px] text-black font-poppins border-[2px] border-solid border-gray-200 rounded-[15px]">
          <div className="flex flex-col items-start justify-center ">
            <p className="top-[0px] font-semibold">
              Jagriti Dalhan Producer Company Ltd.
            </p>
            <div className=" top-[43px] left-[0px] flex flex-row items-start justify-start gap-[10px] ">
              <div className="rounded-[5px] bg-[#DCDCDC] h-[25px] overflow-hidden flex flex-row items-center justify-center py-1 px-2 box-border cursor-pointer hover:bg-green-100 hover:text-green-400">
                <p className="font-semibold text-xs">Sagar</p>
              </div>
              <div className="rounded-[5px] bg-[#DCDCDC] h-[25px] overflow-hidden flex flex-row items-center justify-center py-1 px-2 box-border cursor-pointer hover:bg-green-100 hover:text-green-400">
                <p className="font-semibold text-xs">Pulses Programme</p>
              </div>
              <div className="rounded-[5px] bg-[#DCDCDC] h-[25px] overflow-hidden flex flex-row items-center justify-center py-1 px-2 box-border cursor-pointer hover:bg-green-100 hover:text-green-400">
                <p className="font-semibold text-xs">Farm</p>
              </div>
              <div className="rounded-[5px] bg-[#DCDCDC] h-[25px] overflow-hidden flex flex-row items-center justify-center py-1 px-2 box-border cursor-pointer hover:bg-green-100 hover:text-green-400">
                <p className="font-semibold text-xs">Forestry</p>
              </div>
              <div className="rounded-[5px] bg-[#DCDCDC] h-[25px] overflow-hidden flex flex-row items-center justify-center py-1 px-2 box-border cursor-pointer hover:bg-green-100 hover:text-green-400">
                <p className="font-semibold text-xs">76 Members</p>
              </div>
            </div>
            <p className="text-base font-semibold text-zinc-600 mt-2">
              Jagrati Dalhan Producer Company Limited is a Non-govt company,
              incorporated on 18 Mar, 2013. It's a private unlisted company and
              is classified as'company limited by shares'.Company's authorized
              capital stands at Rs 1.0 lakhs and has 100.0% paid-up capital
              .Company is registered in Gwalior (Madhya Pradesh) Registrar
              Office. Jagrati Dalhan Producer Company Limited registered address
              is BR BRANCH KE SAMNE GRAM-PARSORIYA SAGAR Sagar MP 470001 IN
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
          <div>
            <div>
              <img src="../../assets/image 9.png" alt="" />
            </div>
            <div>
              <button
                type="button"
                class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                ApplyNow
              </button>
			  
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FpoCard;
