import React from 'react'
import Input from"../Input";
import Button from '../Button/Button';

const Login = () => {
  return (
    <div>
       <div className="bg-gray-50 w-full ">
      <section className="flex justify-center items-center h-full mx-auto mt-10 ">
        <div className=" bg-white rounded-lg shadow-md p-8 ">
          <h1 className="text-xl font-bold mb-4 text-gray-900">
            Fill this form to join A Fpo
          </h1>
          <form action="#">
            <div className="flex flex-col gap-4">
             
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
          
                <Input
                  label="Phone No"
                  type="tel"
                  placeholder="Enter your Mobile No"
                  
                />
          
                <Input
                  label="Phone No"
                  type="tel"
                  placeholder="Enter your Mobile No"
                 
                />
          
              
              
            
             
            </div>
            
             <Button
                type="submit"
                className="w-full mt-5"
              >
                Submit
              </Button>
            
            
          </form>
        </div>
      </section>
    </div>
    </div>
  )
}

export default Login