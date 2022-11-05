import React from "react";
// import { useNavigate } from "react-router-dom";

const Content = () => {
  // const navigate = useNavigate();
  const question = [""];

  return (
    <>
      <div>
        <div className="absolute left-[510px] max-lg:left-[70px] pt-14">
          <p className="text-3xl font-semibold not-italic leading-10 text-left">
            Some additional questions{" "}
          </p>
          <div className="box-border w-600 h-96 bg-gray-100 text-left mt-6 rounded-2xl ">
            <div className="pl-28 pt-6">
              <div>
                {question.map((index) => (
                  <p className="text-xl not-italic font-semibold leading-7 pt-5">
                    Question {index + 1}
                  </p>
                ))}
                <div className="con3">
                  <textarea
                    name="about"
                    id=""
                    cols="50"
                    rows="4"
                    className="w-96 h-20 border-solid border-2  border-gray-300 rounded-lg  bg-gray-100"
                  ></textarea>
                </div>
                <p className="text-xl not-italic font-semibold leading-7 pt-5">
                  Question 2{" "}
                </p>
                <div className="con3">
                  <textarea
                    name="about"
                    id=""
                    cols="50"
                    rows="4"
                    className=" w-96 h-20  border-solid border-2  border-gray-300 rounded-lg  bg-gray-100"
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="pt-8">
              <p className="text-xl not-italic font-semibold leading-7 ml-72 ">
                +Add another question
              </p>
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
