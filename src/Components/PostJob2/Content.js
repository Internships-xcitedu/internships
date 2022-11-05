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
      <div className="absolute left-[500px] pt-14 max-lg:left-[55px] ">
        <p className="text-3xl font-semibold not-italic leading-10 text-left">
          Add a few more details
        </p>
        <div className="box-border w-600 h-608 bg-gray-100 text-left mt-6 rounded-2xl">
          <div className="pl-28 pt-6">
            <div>
              <p className="text-xl not-italic font-semibold leading-7 pt-5">
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
                  className="w-96 h-20 border-solid border-2  border-gray-300 rounded-lg  bg-gray-100"
                ></textarea>
              </div>
              <p className="text-xl not-italic font-semibold leading-7 pt-5">
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
                  className="w-96 h-20 border-solid border-2  border-gray-300 rounded-lg  bg-gray-100"
                ></textarea>
              </div>
              <p className="text-xl not-italic font-semibold leading-7 pt-5">
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
                  className="w-96 h-20 border-solid border-2  border-gray-300 rounded-lg  bg-gray-100"
                ></textarea>
              </div>
              <p className="text-xl not-italic font-semibold leading-7 pt-5">
                Add skills/interest tags
              </p>
              <input
                value={skills}
                onChange={handleSkills}
                type="text"
                placeholder="Search skills"
                className="w-96 h-8 border-solid border-2  border-gray-300 rounded-lg  bg-gray-100"
              />
            </div>
            <button className=" border-solid border-2 border-gray-300 rounded-2xl bg-gray-200 p-1 mt-4 mr-4">
              Figma
            </button>
            <button className=" border-solid border-2 border-gray-300 rounded-2xl bg-gray-200 p-1 mt-4">
              UI Design
            </button>
          </div>
        </div>
        <button
          onClick={() => navigate("/question")}
          className="border-solid border-2 text-2xl rounded-3xl leading-9 border-orange-400 font-semibold text-orange-400 px-4 mt-5 mb-10"
        >
          Next
        </button>
      </div>
    </>
  );
};
export default Content;
