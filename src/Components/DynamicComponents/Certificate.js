import React from 'react';
import { Link } from 'react-router-dom';
const Certificate = () => {
  return (
    <div className="container mx-auto">
      <div className="lg:w-10/12 w-full mx-auto md:mt-12 mt-6 lg:px-0 px-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#F97316"
          viewBox="0 0 24 24"
          strokeWidth={3}
          className="border rounded-full text-white w-12 h-12 mb-5 cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
        <div className="w-full">
          <h3 className="text-4xl font-normal font-['Segoe UI'] text-[#2F2E41] mb-10">Add your certifications / awards</h3>
          <form className="flex flex-col text-gray font-sans font-semibold  justify-between">
            <div className="my-4">
              <div className="mb-6">
                <label className="block text-xl font-normal font-['Segoe UI'] text-[#2F2E41] mb-2">Name of school / college</label>
                <input type="text" className="border md:w-6/12 w-full rounded-[15px] py-2 px-4 focus:outline-none" />
              </div>
              <div className="mb-6">
                <label className="block text-xl font-normal font-['Segoe UI'] text-[#2F2E41] mb-2">Name of course / accomplishment</label>
                <input type="text" className="border md:w-6/12 w-full rounded-[15px] py-2 px-4 focus:outline-none" />
              </div>
              <div className="md:flex mb-6">
                <div className="md:mr-11 mb-4">
                  <label className="block text-xl font-normal font-['Segoe UI'] text-[#2F2E41] mb-2">Start date</label>
                  <input type="date" className="border  md:w-6/12 w-full rounded-[15px] py-2 sm:px-8 px-4 focus:outline-none" />
                </div>
                <div>
                  <label className="block text-xl font-normal font-['Segoe UI'] text-[#2F2E41] mb-2">End date</label>
                  <input type="date" className="border  md:w-6/12 w-full rounded-[15px] py-2 sm:px-8 px-4 focus:outline-none" />
                </div>
              </div>
              <div className="">
                <label className="block text-xl font-normal font-['Segoe UI'] text-[#2F2E41] mb-2 ">Certificate link</label>
                <input type="text" className="border  md:w-6/12 w-full rounded-[15px] py-2 px-4 focus:outline-none" />
              </div>
            </div>
            <div className="md:w-10/12 w-full font-bold flex justify-end">
              <Link
                to="#"
                className="ml-auto font-semibold text-2xl font-['Segoe UI'] border-[#F97316] border text-[#F97316] rounded-3xl px-8 py-1">
                next
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Certificate;