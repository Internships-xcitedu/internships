import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import DateRangePicker from 'flowbite-datepicker/DateRangePicker';

const Exprience = () => {
  const [jobTitle, setJobTitle] = useState();
  const [name, setName] = useState();
  const [location, setLocation] = useState();
  const [start, setStart] = useState();
  const [end, setEnd] = useState();

  const handleJobTitle = (e) => {
    setJobTitle(e.target.value);
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
    <div className="mt-20 mx-6 flex justify-center">
      <div>
      <i className="mr-4 mb-4 fa-solid fa-circle-chevron-left mobileMd:text-[30px] tablet:text-[35px] laptopMd:text-[45px] desktopMd:text-[55px]"></i>
      </div>
      <div>

      
      <h3 className="mobileMd:text-[22px] mobileMd:mb-8 tablet:text-2xl laptopMd:text-4xl desktopMd:text-4xl font-normal font-['Segoe UI'] text-[#2F2E41]  mb-16">
        Add your skills and interests
      </h3>
      <div className="mb-6 mobileMd:mb-3">
        <h1 className="mobileMd:text-lg font-normal tablet:text-xl desktopMd:text-2xl leading-8 text-[#374151] my-1">
          Job Title
        </h1>
        <input
          value={jobTitle}
          onChange={handleJobTitle}
          type="text"
          className=" mobileMd:w-60 mobileMd:h-10 tablet:w-[240px] tablet:h-[45px] desktopMd:w-[240px] desktopMd:h-[50px]  appearance-none border border-solid border-[#8F8C8C] focus:outline-none py-4 px-3 rounded-2xl"
        />
      </div>
      <div className="mb-6 mobileMd:mb-3">
        <h1 className="mobileMd:text-lg font-normal tablet:text-xl  desktopMd:text-2xl leading-8 text-[#374151] my-1">
          Name of the organisation
        </h1>
        <input
          value={name}
          onChange={handleName}
          type="text"
          className=" mobileMd:w-60 mobileMd:h-10 tablet:w-[400px] tablet:h-[45px] desktopMd:w-[450px] desktopMd:h-[50px] appearance-none border border-solid border-[#8F8C8C] focus:outline-none py-4 px-3 rounded-2xl "
        />
      </div>
      <div className="mb-6 mobileMd:mb-3">
        <h1 className="mobileMd:text-lg font-normal tablet:text-xl desktopMd:text-2xl leading-8 text-[#374151] my-1">
          Location
        </h1>
        <input
          value={location}
          onChange={handleLocation}
          type="text"
          className= "mobileMd:w-60 mobileMd:h-10 tablet:w-[240px] tablet:h-[45px] desktopMd:w-[240px] desktopMd:h-[50px] appearance-none border border-solid border-[#8F8C8C] focus:outline-none py-4 px-3 rounded-2xl "
        />
      </div>
      <div className="flex flex-row  mobileMd:gap-3">
        <div className="mb-6 mobileMd:mb-3">
          <h1 className="mobileMd:text-lg font-normal tablet:text-xl desktopMd:text-2xl leading-8 text-[#374151] my-1">
            Start Date
          </h1>
          <input
            value={start}
            onChange={handleStart}
            type="text"
            className=" mobileMd:w-28 mobileMd:h-10 tablet:w-[240px] tablet:h-[45px] desktopMd:w-[240px] desktopMd:h-[50px] appearance-none border border-solid border-[#8F8C8C] focus:outline-none py-4 px-3 rounded-2xl "
          />
        </div>
        <div className="mb-6 mobileMd:mb-3">
          <h1 className="mobileMd:text-lg font-normal tablet:text-xl desktopMd:text-2xl leading-8 text-[#374151] my-1">
            End Date
          </h1>
          <input
            onChange={handleEnd}
            value={end}
            type="text"
            className="mobileMd:w-28 mobileMd:h-10 tablet:w-[240px] tablet:h-[45px] desktopMd:w-[240px] desktopMd:h-[50px] appearance-none border border-solid border-[#8F8C8C] focus:outline-none py-4 px-3 rounded-2xl"
          />
        </div>
      </div>
      <h2 className="mobileMd:text-base mobileMd:mt-3 tablet:text-lg font-normal desktopMd:text-2xl leading-8 text-[#F97316] mt-10">
        +ADD EXPERIENCE
      </h2>
      <button
        onClick={() => navigate("/slider/certificate")}
        className="mobileMd:text-base mobileMd:ml-[210px] tablet:text-xl tablet:ml-[400px] border-solid border-2 laptopMd:ml-[500px] desktopMd:ml-[600px] desktopMd:text-2xl rounded-3xl leading-9 border-orange-400 font-semibold text-orange-400 px-4 mt-5 mb-10 "
      >
        Next
      </button>
     </div>
    </div>
  );
};

export default Exprience;
