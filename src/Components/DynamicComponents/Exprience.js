import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DateRangePicker from 'flowbite-datepicker/DateRangePicker';

const Exprience = () => {
  const [jobTitle, setJobTitle] = useState();
  const [name, setName] = useState();
  const [location, setLocation] = useState();
  const [start, setStart] = useState();
  const [end, setEnd] = useState();

  const handleJobTitle = (e) => {
    setJobTitle(e.target.value);
    // console.log(e.target.value);
  };
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleLocation = (e) => {
    setLocation(e.target.value);
  };
  const handleStart = (e) => {
    setStart(e.target.value);
  };
  const handleEnd = (e) => {
    setEnd(e.target.value);
  };

  const navigate = useNavigate();
  return (
    <div className="mt-20">
      {/* <FontAwesomeIcon icon="fa-solid fa-circle-chevron-left" /> */}
      {/* <i class="fa-solid fa-circle-chevron-left"></i> */}
      <h3 className="text-4xl font-normal font-['Segoe UI'] text-[#2F2E41] mb-16">
        Add your skills and interests
      </h3>
      <div className="mb-6">
        <h1 className="font-normal text-2xl leading-8 text-[#374151] my-1">
          Job Title
        </h1>
        <input
          value={jobTitle}
          onChange={handleJobTitle}
          type="text"
          className="appearance-none border border-solid border-[#8F8C8C] focus:outline-none py-4 px-3 rounded-2xl w-[240px] h-[50px] "
        />
      </div>
      <div className="mb-6">
        <h1 className="font-normal text-2xl leading-8 text-[#374151] my-1">
          Name of the organisation
        </h1>
        <input
          value={name}
          onChange={handleName}
          type="text"
          className="appearance-none border border-solid border-[#8F8C8C] focus:outline-none py-4 px-3 rounded-2xl w-[464px] h-[50px] "
        />
      </div>
      <div className="mb-6">
        <h1 className="font-normal text-2xl leading-8 text-[#374151] my-1">
          Location
        </h1>
        <input
          value={location}
          onChange={handleLocation}
          type="text"
          className="appearance-none border border-solid border-[#8F8C8C] focus:outline-none py-4 px-3 rounded-2xl w-[240px] h-[50px] "
        />
      </div>
       {/* <div date-rangepicker class="flex items-center">
        <div class="relative">
          <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <h1 className="font-normal text-2xl leading-8 text-[#374151] my-1">
            Start Date
          </h1>
          <input
            name="start"
            type="text"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Select date start"
          />
        </div>
        <span class="mx-4 text-gray-500">to</span>
        <div class="relative">
          <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <h1 className="font-normal text-2xl leading-8 text-[#374151] my-1">
            End Date
          </h1>
          <input
            name="end"
            type="text"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Select date end"
          />
        </div>
      </div> */}
      <div className="flex flex-row">
        <div className="mb-6 pr-14">
          <h1 className="font-normal text-2xl leading-8 text-[#374151] my-1">
            Start Date
          </h1>
          <input
            value={start}
            onChange={handleStart}
            type="text"
            className="appearance-none border border-solid border-[#8F8C8C] focus:outline-none py-4 px-3 rounded-2xl w-[240px] h-[50px] "
          />
        </div>
        <div className="mb-6">
          <h1 className="font-normal text-2xl leading-8 text-[#374151] my-1">
            End Date
          </h1>
          <input
            onChange={handleEnd}
            value={end}
            type="text"
            className="appearance-none border border-solid border-[#8F8C8C] focus:outline-none py-4 px-3 rounded-2xl w-[240px] h-[50px] "
          />
        </div>
      </div>
      <h2 className="font-normal text-2xl leading-8 text-[#F97316] mt-10">
        +ADD EXPERIENCE
      </h2>
      <button
        onClick={() => navigate("/slider/certificate")}
        className="border-solid border-2 text-2xl rounded-3xl leading-9 border-orange-400 font-semibold text-orange-400 px-4 mt-5 mb-10 ml-[600px]"
      >
        Next
      </button>
     
    </div>
  );
};

export default Exprience;
