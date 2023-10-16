import React from 'react'
import {Link } from 'react-router-dom'
import { useState } from 'react';


const Header = () => {
  const [active, setActive] = useState(false);
  window.addEventListener("scroll", () => {
    if (window.scrollY > 70) {
      setActive(true);
    } else {
      setActive(false);
    }
  });
  return (
    <div className={`${
      active === true ? "shadow-sm fixed top-0 left-0 z-10" : null
    } w-full h-[70px] bg-[#d8f5de] mt-0 px-[5%]  border-b-2 border-gray-300 flex justify-between items-center`}>
        <div className='h-[60px] mt-[10px] w-[270px] '> 
          <button className='h-[100%] w-full flex justify-between items-center pl-10 bg-[#f5f5f5] font-Roboto text-lg font-[700] select-none rounded-t-lg border-2  border-gray-300'>
          ALL Categories
          </button>
        </div>
        <div className=' w-[40%]'>
            <ul className='flex justify-between items-center'>
               <Link to="/" className='bold-text-sm'>
               Home
               </Link>
               <Link to="/product" className='bold-text-sm'>
               Product
               </Link>
               <Link to="/AddProduct" className='bold-text-sm'>
              Add Product
               </Link>
               <Link to="/Job" className='bold-text-sm'>
              Job
               </Link>
               <Link to="/Loan" className='bold-text-sm'>
               Loan
               </Link>
               <Link to="/Scheme" className='bold-text-sm'>
               Scheme
               </Link>
               
            </ul>
        </div>
        <div>
        <button
                type="submit"
                className="w-full px-6 py-3  font-semibold text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none"
              >
              Become a Seller
              </button>
        </div>
    </div>
  )
}

export default Header