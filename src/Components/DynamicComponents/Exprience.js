import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
