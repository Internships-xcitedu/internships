import React, { useState } from "react";
// import "../../index.css";
import { useNavigate } from "react-router-dom";

const Content = () => {
  const [jobDesc, setJobDesc] = useState();
  const [rolenRes, setRolenRes] = useState();
  const [qual, setQual] = useState();
  const [skills, setSkills] = useState();

  const handleJobDecChange = (e) => {
    setJobDesc(e.target.value);
    console.log(e.target.value);
  };
  const handleRolenRes = (e) => {
    setRolenRes(e.target.value);
    console.log(e.target.value);
  };
  const handleQualification = (e) => {
    setQual(e.target.value);
    console.log(e.target.value);
  };
  const handleSkills = (e) => {
    setSkills(e.target.value);
    console.log(e.target.value);
  };

  const navigate = useNavigate();
  return (
    <>
      <div
        className="absolute mobileMd:pt-8  desktopMd:pt-14 laptopMd:pt-14 mobileMd:left-10 
      mobileLg:left-16 tablet:left-56 laptopMd:left-[350px]  desktopMd:left-[510px]"
      >
        <p className="font-semibold not-italic leading-10 text-left mobileMd:text-sm tablet:text-base laptopMd:text-2xl desktopMd:text-3xl">
          Add a few more details
        </p>
        <div className="box-border desktopMd:w-[600px] mobileMd:w-[300px] tablet:w-[450px] laptopMd:w-[600px] desktopMd:h-[580px] mobileMd:h-[330px] tablet:h-[450px] laptopMd:h-[580px] bg-gray-100 text-left mt-6 rounded-2xl pt-3">
          <div className="flex flex-col items-center tablet:pt-4">
            <div>
              <p className="mobileMd:text-sm laptopMd:text-2xl desktopMd:text-xl not-italic font-semibold leading-7 mobileMd:pt-3">
                Job Description
              </p>
              <div className="">
                <textarea
                  value={jobDesc}
                  onChange={handleJobDecChange}
                  name=""
                  id=""
                  cols="50"
                  rows="4"
                  className=" pt-1 desktopMd:w-96 mobileMd:w-60 tablet:w-80 laptopMd:w-480 desktopMd:h-20 mobileMd:h-7 tablet:h-14 laptopMd:h-20 border-solid border-2  border-gray-300 rounded-lg pl-2 bg-gray-100"
                ></textarea>
              </div>
              <p className="mobileMd:text-sm laptopMd:text-2xl desktopMd:text-xl not-italic font-semibold leading-7 pt-2">
                Roles and responsibilities
              </p>
              <div className="con3">
                <textarea
                  value={rolenRes}
                  onChange={handleRolenRes}
                  name=""
                  id=""
                  cols="50"
                  rows="4"
                  className=" pt-1 desktopMd:w-96 mobileMd:w-60 tablet:w-80 laptopMd:w-480 desktopMd:h-20 mobileMd:h-7
                   tablet:h-14 laptopMd:h-20 border-solid border-2  border-gray-300 rounded-lg pl-2 bg-gray-100"
                ></textarea>
              </div>
              <p className="mobileMd:text-sm laptopMd:text-2xl desktopMd:text-xl not-italic font-semibold leading-7 pt-2">
                Qualifications
              </p>
              <div className="con3">
                <textarea
                  value={qual}
                  onChange={handleQualification}
                  name=""
                  id=""
                  cols="50"
                  rows="4"
                  className=" pt-1 desktopMd:w-96 mobileMd:w-60 tablet:w-80 laptopMd:w-480 desktopMd:h-20 mobileMd:h-7 
                  tablet:h-14 laptopMd:h-20 border-solid border-2  border-gray-300 rounded-lg pl-2 bg-gray-100"
                ></textarea>
              </div>
              <p className="mobileMd:text-sm laptopMd:text-2xl desktopMd:text-xl not-italic font-semibold leading-7 pt-2">
                Add skills/interest tags
              </p>
              <input
                value={skills}
                onChange={handleSkills}
                type="text"
                placeholder="Search skills"
                className="desktopMd:w-96 mobileMd:w-60 tablet:w-80 laptopMd:w-480 h-7 border-solid border-2
                  border-gray-300 rounded-lg pl-2 bg-gray-100"
              />
            </div>
            <div className="my-3">
            <button className=" border-solid border-2 border-gray-300 rounded-2xl bg-gray-200 p-1 px-3 mt-4 
            mr-4 mobileMd:text-xs mobileMd:px-2 tablet:text-sm tablet:px-3 laptopMd:text-base">
              Figma
            </button>
            <button className=" border-solid border-2 border-gray-300 rounded-2xl bg-gray-200 p-1  px-3 mt-4 
            mobileMd:text-xs mobileMd:px-2 tablet:text-sm tablet:px-3 laptopMd:text-base">
              UI Design
            </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
            <button
             onClick={() => navigate("/question")}
            className="border-solid border-2 mobileMd:text-xs mobileMd:px-2 tablet:text-lg laptopMd:text-xl desktopMd:text-2xl rounded-3xl leading-9 border-orange-400 font-semibold text-orange-400 px-4 mt-4 ">
              Next
            </button>
          </div>
      </div>
    </>
  );
};
export default Content;
