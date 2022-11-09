import React from 'react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
const Education = () => {
  return (
    <div className="container mx-auto">
      <div className="mt-7">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#F97316"
          viewBox="0 0 24 24"
          strokeWidth={3}
          className="border rounded-full text-white w-12 h-12 mb-6 cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
        <div className="w-full">
          <h3 className="text-4xl font-normal font-['Segoe UI'] text-[#2F2E41] mb-12">Add your educational details</h3>
          <form className="flex flex-col text-gray font-sans font-semibold  justify-between">
            <div className="">
              <div>
                <label className="block text-2xl font-normal font-['Segoe UI'] text-[#2F2E41] mb-2">Course / Degree</label>
                <input type="text" className="border w-4/12 rounded-[15px] py-2 px-4 focus:outline-none" />
              </div>
              <div className="my-8">
                <label className="block text-2xl font-normal font-['Segoe UI'] text-[#2F2E41] mb-2">Name of school / college</label>
                <input type="text" className="border w-5/12 rounded-[15px] py-2 px-4 focus:outline-none" />
              </div>
              <div>
                <label className="block text-2xl font-normal font-['Segoe UI'] text-[#2F2E41] mb-2">Year of passing</label>
                <input type="text" className="border w-3/12 rounded-[15px] py-2 px-4 focus:outline-none" />
              </div>
              <div className="flex mt-10">
              <Icon icon="carbon:add" className="text-[#F97316] w-9 h-9 font-bold" />
              <Link className="text-2xl font-normal font-['Segoe UI'] text-[#F97316] border-b-[1px] border-[#F97316]">ADD SCHOOL</Link>
              </div>
            </div>
            <div className="w-10/12 font-bold flex justify-end">
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

export default Education;