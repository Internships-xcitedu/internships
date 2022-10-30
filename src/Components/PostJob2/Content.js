import React from "react";
import "../../index.css";
const Content = () => {
  return (
    <>
      <div className="pl-72 max-lg:pl-2 ">
        <p className="text-3xl font-semibold not-italic leading-10 text-left">
          Add a few more details
        </p>
        <div className="box-border w-600 h-608 bg-gray-100 text-left mt-6 rounded-2xl">
          <div className="pl-28 pt-6">
            <div>
            <p className="text-xl not-italic font-semibold leading-7 pt-5">
              Job Description
            </p>
            <input type="text" className="w-9/12 h-20 border-solid border-2  border-gray-300 rounded-lg  bg-gray-100"  />
            <p className="text-xl not-italic font-semibold leading-7 pt-5">
              Roles and responsibilities
            </p>
            <input type="text" className="w-9/12 h-20 border-solid border-2 border-gray-300 rounded-lg  bg-gray-100" />
            <p className="text-xl not-italic font-semibold leading-7 pt-5">
              Qualifications
            </p>
            <input type="text" className="w-9/12 h-20 border-solid border-2 border-gray-300 rounded-lg  bg-gray-100" />
            <p className="text-xl not-italic font-semibold leading-7 pt-5">
              Add skills/interest tags
            </p>
            <input type="text" placeholder="Search skills"className="w-9/12 h-8 border-solid border-2  border-gray-300 rounded-lg  bg-gray-100" />
            </div>
            <button className=" border-solid border-2 border-gray-300 rounded-2xl bg-gray-200 p-1 mt-4 mr-4">Figma</button>
            <button className=" border-solid border-2 border-gray-300 rounded-2xl bg-gray-200 p-1 mt-4">UI Design</button>
          </div>
        </div>
        <button className="border-solid border-2 text-2xl rounded-3xl leading-9 border-orange-400 font-semibold text-orange-400 px-4 mt-4">Next</button>
      </div>
    </>
  );
};
export default Content;