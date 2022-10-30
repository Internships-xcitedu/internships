import React from "react";
const Content = () => {
  return (
    <>
      <div>
        <div className="pl-72 max-lg:pl-2 pt-14" >
          <p className="text-3xl font-semibold not-italic leading-10 text-left">
            Some additional questions{" "}
          </p>
          <div className="box-border w-600 h-96 bg-gray-100 text-left mt-6 rounded-2xl ">
            <div className="pl-28 pt-6">
              <div>
                <p className="text-xl not-italic font-semibold leading-7 pt-5">
                  Question 1{" "}
                </p>
                <input
                  type="text"
                  className="w-9/12 h-20 border-solid border-2  border-gray-300 rounded-lg  bg-gray-100"
                />
                <p className="text-xl not-italic font-semibold leading-7 pt-5">
                  Question 2{" "}
                </p>
                <input
                  type="text"
                  className="w-9/12 h-20 border-solid border-2 border-gray-300 rounded-lg  bg-gray-100"
                />
              </div>
            </div>
          </div>
          <button className="border-solid border-2 text-2xl rounded-3xl leading-9 border-orange-400 font-semibold text-orange-400 px-4 mt-4">
            Done
          </button>
        </div>
      </div>
    </>
  );
};
export default Content;
