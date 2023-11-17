import React from 'react'

const JobCard = () => {
  return (
    <>
    <div className="flex item-center justify-center mt-6">
        <div className=" box-border w-[1100px] h-auto [background:linear-gradient(180deg,_#FBFBFB,_#E3FFDE)] overflow-hidden flex flex-row items-start justify-center py-[20px] pr-[145px] pl-[26px] gap-[152px] text-left text-[24px] text-black font-poppins border-[2px] border-solid border-gray-200 rounded-[15px]">
          <div className="flex flex-col items-start justify-center text-gray-700">
            <p className='font-bold '>
              Manual Labour
            </p>
            <p className="mt-0 font-bold text-gray-500 text-lg">
              ministary Of rural devlopment
            </p>
            <div className=" top-[43px] left-[0px] flex flex-row items-start justify-start gap-[10px] ">
              <div className="tag-element hover:bg-green-100 hover:text-green-400">
                <p className="font-semibold text-xs">$200</p>
              </div>
              <div className="tag-element hover:bg-green-100 hover:text-green-400">
                <p className="font-semibold text-xs">on field</p>
              </div>
              <div className="tag-element hover:bg-green-100 hover:text-green-400">
                <p className="font-semibold text-xs">Amritsar</p>
              </div>
              <div className="tag-element hover:bg-green-100 hover:text-green-400">
                <p className="font-semibold text-xs">4 Weeks</p>
              </div>
              <div className="tag-element hover:bg-green-100 hover:text-green-400">
                <p className="font-semibold text-xs">412 Vacancies</p>
              </div>
            </div>
            <p className="text-base font-semibold text-zinc-600 mt-2">
            This is a manual job which requires some minor skills. Equipments will be provided and this is a on-field job. Pays will be done by the end of the day and their are many options to choose from. Hired people will have to work for 6 days a week for at le... Show More
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
            <div className='flex flex-row gap-3 mt-[90%]'>  
              <button
                type="button"
                class="text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none  font-medium text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                ApplyNow
              </button>
              <button
                type="button"
                class="bg-white text-green-500 border-2 border-green-500  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                Details
              </button>
            
			  
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default JobCard