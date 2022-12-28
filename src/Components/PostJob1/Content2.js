import React, { useState } from "react";

const Content2 = () => {
  let [jobTitle, setJobtitle] = useState("");
  let [jobType, setJobtype] = useState("");
  let [duration, setDuration] = useState("");
  let [location, setLocation] = useState("");
  let [stipend, setStipend] = useState("");
  let [deadline, setDeadline] = useState("");

  const handleNext = () => {
    console.log(jobTitle);
    console.log(jobType);
    console.log(duration);
    console.log(location);
    console.log(stipend);
    console.log(deadline);
  };

  return (
    <>
      <div
        className="font-['Segoe UI'] absolute mobileMd:pt-8  desktopMd:pt-14 laptopMd:pt-14 mobileMd:left-10 
      mobileLg:left-16 tablet:left-56 laptopMd:left-[350px]  desktopMd:left-[510px]"
      >
        <div>
          <p className="font-semibold not-italic leading-10 text-left mobileMd:text-sm mt- tablet:text-base laptopMd:text-2xl desktopMd:text-4xl desktopLg:text-5xl">
            post a job
          </p>
        </div>
        <div className="box-border desktopMd:w-[600px] mobileMd:w-[300px] tablet:w-[450px] laptopMd:w-[500px] desktopMd:h-[590px] mobileMd:h-[310px] tablet:h-[325px] laptopMd:h-[390px] bg-gray-100 text-left mt-6 rounded-2xl pt-3">
          <div className="ml-5 desktopMd:ml-10 desktopLg:ml-10">
            <div>
              <p className="desktopMd:mt-4 desktopLg:mt-4 mobileMd:text-sm laptopMd:text-2xl desktopMd:text-2xl desktopLg:text-3xl not-italic font-semibold leading-7 mobileMd:-pt-0.5 ">
                Job Title
              </p>
              <input
                className="desktopMd:mt-4 desktopLg:mt-4 desktopMd:w-[480px] desktopMd:h-10 desktopLg:h-10 mobileMd:w-64 tablet:w-80 laptopMd:w-[390px] h-7 border-solid border-2
                border-gray-100 rounded-lg pl-2 bg-gray-100 mt-2 "
                type="text"
                onChange={(event) => {
                  setJobtitle(event.target.value);
                }}
              />
            </div>
            <div
              className="flex flex-col space-y-7 
        mobileMd:flex mobileMd:flex-col mobileMd:-space-y-0.5  
        mobileLg:flex mobileLg:flex-col mobileLg:-space-y-0.5 
        laptopSm:flex laptopSm:flex-col laptopSm:-space-y-0.5
        laptopMd:flex laptopMd:flex-col laptopMd:-space-y-0.5
        laptopLg:flex laptopLg:flex-col laptopLg:-space-y-0.5
        desktopMd:flex desktopMd:flex-col desktopMd:-space-y-0.5"
            >
              <div className=" flex flex-row ">
                <div>
                  <p className="desktopMd:mt-4 desktopLg:mt-4 desktopMd:text-2xl desktopLg:text-3xl mobileMd:text-sm laptopMd:text-2xl  not-italic font-semibold leading-7 mobileMd:pt-3">
                    Job Type
                  </p>

                  <select
                    className="h-7 mt-2 border-solid border-2
                    border-gray-100 rounded-lg pl-2 bg-gray-100 
                    desktopMd:mt-4 desktopLg:mt-4
                    desktopMd:w-48 
                    desktopMd:h-10
                    desktopLg:w-48 
                    desktopLg:h-10
                     mobileMd:w-28 
                     tablet:w-36
                      laptopMd:w-44  
                      focus:border-gray-100 
                      focus:border-solid 
                      focus:border-2
                      focus:bg-gray-100 "
                    id="grid-state"
                    onChange={(event) => {
                      setJobtype(event.target.value);
                    }}
                  >
                    <option>Select</option>
                    <option>Internship</option>
                    <option>Full Time</option>
                  </select>
                </div>

                <div className="mx-8 desktopMd:mx-24 desktopLg:mx-24">
                  <p className="desktopMd:mt-4 desktopLg:mt-4 mobileMd:text-sm laptopMd:text-2xl desktopMd:text-2xl desktopLg:text-3xl not-italic font-semibold leading-7 mobileMd:pt-3">
                    Duration
                  </p>
                  <input
                    className=" desktopMd:w-48 
                    desktopMd:mt-4 desktopLg:mt-4
                    desktopMd:h-10
                    desktopLg:w-48 
                    desktopLg:h-10 mobileMd:w-28 tablet:w-36 laptopMd:w-44 h-7 border-solid border-2
                   border-gray-100 rounded-lg pl-2 bg-gray-100 mt-2 "
                    onChange={(event) => {
                      setDuration(event.target.value);
                    }}
                    type="text"
                  />
                </div>
              </div>
              <div className=" flex flex-row ">
                <div>
                  <p className="desktopMd:mt-4 desktopLg:mt-4 mobileMd:text-sm laptopMd:text-2xl desktopMd:text-2xl desktopLg:text-3xl not-italic font-semibold leading-7 mobileMd:pt-3">
                    Location
                  </p>
                  <input
                    className=" desktopMd:w-48 
                    desktopMd:mt-4 desktopLg:mt-4
                    desktopMd:h-10
                    desktopLg:w-48 
                    desktopLg:h-10 mobileMd:w-28 tablet:w-36 laptopMd:w-44 h-7 border-solid border-2
                   border-gray-100 rounded-lg pl-2 bg-gray-100 mt-2 "
                    onChange={(event) => {
                      setLocation(event.target.value);
                    }}
                    type="text"
                  />
                </div>
                <div className="mx-8 desktopMd:mx-24 desktopLg:mx-24">
                  <p className="desktopMd:mt-4 desktopLg:mt-4 mobileMd:text-sm laptopMd:text-2xl desktopMd:text-2xl desktopLg:text-3xl not-italic font-semibold leading-7 mobileMd:pt-3">
                    Stipend
                  </p>
                  <input
                    className=" desktopMd:w-48 
                    desktopMd:mt-4 desktopLg:mt-4
                    desktopMd:h-10
                    desktopLg:w-48 
                    desktopLg:h-10 mobileMd:w-28 tablet:w-36 laptopMd:w-44 h-7 border-solid border-2
                   border-gray-100 rounded-lg pl-2 bg-gray-100 mt-2 "
                    onChange={(event) => {
                      setStipend(event.target.value);
                    }}
                    type="text"
                  />
                </div>
              </div>
            </div>
            <div>
              <p className=" desktopMd:mt-4 desktopLg:mt-4 mobileMd:text-sm laptopMd:text-2xl desktopMd:text-2xl desktopLg:text-3xl not-italic font-semibold leading-7 mobileMd:pt-3">
                Application deadline
              </p>
              <input
                className="peer desktopMd:w-48 
                desktopMd:mt-4 desktopLg:mt-4
                desktopMd:h-10
                desktopLg:w-48 
                desktopLg:h-10 mobileMd:w-28 tablet:w-36 laptopMd:w-44 h-7 border-solid border-2
               border-gray-100 rounded-lg pl-2 bg-gray-100 mt-1"
                type="text"
                required
                placeholder="DD/MM/YYYY"
                onChange={(event) => {
                  setDeadline(event.target.value);
                }}
              />
              <p
                className="mt-2 invisible peer-invalid:visible text-red-500 text-sm
               mobileMd:text-verysm mobileMd:mt-0 
               mobileLg:text-verysm mobileLg:mt-0 
               laptopSm:text-lesssm laptopSm:mt-0
               laptopMd:text-xs laptopMd:mt-0 
               laptopLg:text-xs laptopLg:mt-0 
               desktopMd:text-base desktopMd:mt-2"
              >
                Please enter.
              </p>
            </div>

            <div className="flex justify-end">
              <button
                className="mr-8 border-solid border-2 mobileMd:text-xs mobileMd:px-2 tablet:text-lg laptopMd:text-xl desktopMd:text-2xl rounded-3xl leading-9 border-orange-400 font-semibold text-orange-400 px-4 mt-1 "
                onClick={handleNext}
              >
                next
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Content2;
