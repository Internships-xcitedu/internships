import React from "react";
// import { useNavigate } from "react-router-dom";

const Content = () => {
  // const navigate = useNavigate();
  const question = [""];

  return (
    <>
      <div>
        <div className="absolute mobileMd:pt-8  desktopMd:pt-14 laptopMd:pt-14 mobileMd:left-10 mobileLg:left-16 tablet:left-56 laptopMd:left-[350px]  desktopMd:left-[510px]">
          <h3 className="font-semibold not-italic leading-10 text-left mobileMd:text-sm tablet:text-base laptopMd:text-2xl desktopMd:text-3xl ">
            Some additional questions{" "}
          </h3>
          <div className="box-border desktopMd:w-[600px] mobileMd:w-[300px] tablet:w-[450px] laptopMd:w-[600px] desktopMd:h-96 mobileMd:h-44 tablet:h-72 laptopMd:h-96 bg-gray-100 text-left mt-6 rounded-2xl pt-1">
            <div className="flex flex-col items-center tablet:pt-4">
              {/* <div className="desktopMd:pl-28 desktopMd:pt-6 mobileMd:px-6 mobileMd:pt-2 tablet:pl-14 "> */}

              <div>
                <p className="mobileMd:text-sm laptopMd:text-2xl desktopMd:text-xl not-italic font-semibold leading-7 pt-5">
                  Question 1{" "}
                </p>
                <div className="con3">
                  <textarea
                    name="about"
                    id=""
                    cols="50"
                    rows="4"
                    className="desktopMd:w-96 mobileMd:w-60 tablet:w-80 laptopMd:w-480 desktopMd:h-20 mobileMd:h-7 tablet:h-14 laptopMd:h-20 border-solid border-2  border-gray-300 rounded-lg pl-2 bg-gray-100 pt-1"
                  ></textarea>
                </div>
                <p className="mobileMd:text-sm laptopMd:text-2xl desktopMd:text-xl  not-italic font-semibold leading-7 mobileMd:pt-3 pt-5">
                  Question 2{" "}
                </p>
                <div className="con3">
                  <textarea
                    name="about"
                    id=""
                    cols="50"
                    rows="4"
                    className="desktopMd:w-96 mobileMd:w-60 tablet:w-80 laptopMd:w-480 desktopMd:h-20 mobileMd:h-7 tablet:h-14 laptopMd:h-20 border-solid border-2  border-gray-300 rounded-lg pl-2 bg-gray-100"
                  ></textarea>
                </div>
              </div>
            </div>
            <div className=" desktopMd:pt-8 mobileMd:pt-2 mobileMd:ml-28 desktopMd:ml-0 tablet:ml-56 laptopMd:ml-72 laptopMd:mt-2">
              <p className="mobileMd:text-xs mobileMd:ml-6 laptopMd:text-xl desktopMd:text-xl not-italic font-semibold leading-7 desktopMd:ml-72 ">
                +Add another question
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <button className="border-solid border-2 mobileMd:text-xs mobileMd:px-2 tablet:text-lg laptopMd:text-xl desktopMd:text-2xl rounded-3xl leading-9 border-orange-400 font-semibold text-orange-400 px-4 mt-4 ">
              Done
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Content;
