import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
const Skills = () => {
  return (
    <div className="container mx-auto">
      <div className="mt-10">
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
        <div className="w-full text-1xl">
          <h3 className="text-4xl font-normal font-['Segoe UI'] text-[#2F2E41] mb-16">Add your skills and interests</h3>
          <form className="flex flex-col text-gray font-sans font-semibold  justify-between">
            <div className="relative mb-16">
              <input
                placeholder='eg.  Python'
                type="name"
                className="appearance-none border border-solid border-[#8F8C8C] focus:outline-none py-4 px-6 rounded-2xl w-9/12 mb-16"
              />
              <Icon icon="fa:search" className="absolute top-[7%] right-[28%] h-6 w-6 text-[#F97316]" />
              <div className="w-10/12 flex justify-start">
                <div className="grid grid-cols-3 gap-x-2 gap-y-5">
                  <button className="text-xl font-normal font-['Segoe UI'] text-[#2F2E41] not-italic bg-[#EEEEEE] rounded-3xl px-8 py-4">Web Development</button>
                  <button className="text-xl font-normal font-['Segoe UI'] text-[#2F2E41] not-italic bg-[#EEEEEE] rounded-3xl px-8 py-4">Javascript</button>
                  <button className="text-xl font-normal font-['Segoe UI'] text-[#2F2E41] not-italic bg-[#EEEEEE] rounded-3xl px-8 py-4">Front-End</button>
                  <button className="text-xl font-normal font-['Segoe UI'] text-[#2F2E41] not-italic bg-[#EEEEEE] rounded-3xl px-8 py-4">HTML</button>
                  <button className="text-xl font-normal font-['Segoe UI'] text-[#2F2E41] not-italic bg-[#EEEEEE] rounded-3xl px-8 py-4">CSS</button>
                </div>
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

export default Skills;