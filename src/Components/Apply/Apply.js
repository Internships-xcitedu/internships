import React, { useState } from "react";

const Apply = () => {
  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");
  let [email, setEmail] = useState("");
  let [contact, setContact] = useState("");
  let [upload, setUpload] = useState("");
  let [question1, setQuestion1] = useState("");
  let [answer1, setAnswer1] = useState("");
  let [question2, setQuestion2] = useState("");
  let [answer2, setAnswer2] = useState("");
  const handleApply = () => {
    console.log(firstName);
    console.log(lastName);
    console.log(email);
    console.log(contact);
    console.log(upload);
    console.log(question1);
    console.log(answer1);
    console.log(question2);
    console.log(answer2);
  };

  return (
    <div
      className=" w-600 h-480 mx-10 my-3 bg-base-100 font-['Segoe UI'] drop-shadow-2xl  rounded-xl flex justify-center  
    mobileMd:w-70 mobileMd:h-450 mobileMd: mx-7 mobileMd:my-2 
    mobileLg:w-70 mobileLg:h-450 mobileLg:mx-14 mobileLg:my-2 
    tablet:w-70 tablet:h-450 tablet:mx-56 tablet:my-2 
    laptopSm:w-96 laptopSm:h-550 laptopSm:mx-56 laptopSm:my-8
    laptopMd:w-480 laptopMd:h-608 laptopMd:mx-64 laptopMd:my-16
    laptopLg:w-480  laptopLg:h-608  laptopLg:mx-96  laptopLg:my-16
    desktopMd:w-700 desktopMd:h-900 desktopMd:mx-430px desktopMd:my-20
    desktopLg:w-700 desktopLg:h-900 desktopLg:mx-650px desktopLg:my-24
     "
    >
      <div
        className=" ml-14 mr-14 my-5 
      mobileMd:ml-14  mobileMd:mr-5  mobileMd:my-5
      mobileLg:ml-14 mobileLg:mr-5 mobileLg:my-5 
      laptopSm:ml-14 laptopSm:mr-5 laptopSm:my-5
      laptopMd:ml-10  laptopMd:mr-5  laptopMd:my-5
      laptopLg:ml-10  laptopLg:mr-5  laptopLg:my-5
      desktopMd:ml-10 desktopMd:mr-5 desktopMd:my-5"
      >
        <p
          className="font-normal text-3xl 
        mobileMd:text-base 
        mobileLg:text-base
        laptopSm:text-2xl
        laptopMd:text-3xl
        laptopLg:text-3xl
        desktopMd:text-5xl"
        >
          Apply to (Company name)
        </p>

        <p
          className=" font-normal text-2xl 
          mobileMd:text-xs mobileMd:mx-0.5
         mobileLg:text-xs mobileLg:mx-0.5
         laptopSm:text-base laptopSm:mx-0.5 
         laptopMd:text-lg laptopMd:mx-0.5
         laptopLg:text-lg laptopLg:mx-0.5
         desktopMd:text-2xl desktopMd:mx-2 desktopMd:mt-2"
        >
          Your details
        </p>
        <br />

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
              <p
                className="font-semibold text-xl 
                mobileMd:font-semibold mobileMd:text-xs  mobileMd:mt-0
                mobileLg:font-semibold mobileLg:text-xs mobileLg:mt-0
                laptopSm:font-semibold laptopSm:text-lg  laptopSm:mt-0
                laptopMd:font-semibold laptopMd:text-2xl laptopMd:mt-0
                laptopLg:font-semibold laptopLg:text-2xl  laptopLg:mt-0
                desktopMd:font-semibold desktopMd:text-2xl desktopMd:mt-6 "
              >
                First Name
              </p>
              <input
                className="peer bg-gray-300 w-44
                mobileMd:w-28 mobileMd:h-5
                mobileLg:w-28 mobileLg:h-5
                laptopSm:w-36 laptopSm:h-5
                laptopMd:w-44 laptopMd:h-7
                laptopLg:w-44 laptopLg:h-7
                desktopMd:w-52  desktopMd:h-10"
                required
                type="text"
                onChange={(event) => {
                  setFirstName(event.target.value);
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
                Please enter your First Name.
              </p>
            </div>
            <div className="mx-8 desktopMd:mx-20">
              <p
                className="font-semibold text-xl mt-0
                mobileMd:font-semibold mobileMd:text-xs  mobileMd:mt-0
                mobileLg:font-semibold mobileLg:text-xs  mobileLg:mt-0
                laptopSm:font-semibold laptopSm:text-lg  laptopSm:mt-0
                laptopMd:font-semibold laptopMd:text-2xl  laptopMd:mt-0
                laptopLg:font-semibold laptopLg:text-2xl  laptopLg:mt-0
                desktopMd:font-semibold desktopMd:text-2xl  desktopMd:mt-6"
              >
                Last Name
              </p>
              <input
                className="peer bg-gray-300 w-44 
                mobileMd:w-28 mobileMd:h-5
                mobileLg:w-28 mobileLg:h-5
                laptopSm:w-36 laptopSm:h-5
                laptopMd:w-44 laptopMd:h-7
                laptopLg:w-44 laptopLg:h-7
                desktopMd:w-52  desktopMd:h-10"
                required
                onChange={(event) => {
                  setLastName(event.target.value);
                }}
                type="text"
              />
              <p
                className="mt-2 peer-valid:invisible peer-invalid:visible text-red-500 text-sm 
              mobileMd:text-verysm mobileMd:mt-0
              mobileLg:text-verysm mobileLg:mt-0
              laptopSm:text-lesssm laptopSm:mt-0
              laptopMd:text-xs laptopMd:mt-0
              laptopLg:text-xs laptopLg:mt-0
              desktopMd:text-base desktopMd:mt-2"
              >
                Please enter your Last Name.
              </p>
            </div>
          </div>

          <div>
            <p
              className="font-semibold text-xl 
              mobileMd:font-semibold mobileMd:text-xs 
              mobileLg:font-semibold mobileLg:text-xs
              laptopSm:font-semibold laptopSm:text-lg
              laptopMd:font-semibold laptopMd:text-2xl
              laptopLg:font-semibold laptopLg:text-2xl
              desktopMd:font-semibold desktopMd:text-2xl  desktopMd:mt-10"
            >
              Email
            </p>
            <input
              type="email"
              className="peer bg-gray-300 w-96
               mobileMd:w-64 mobileMd:h-5
               mobileLg:w-64 mobileLg:h-5
               laptopSm:w-80 laptopSm:h-5
               laptopMd:w-96 laptopMd:h-7
               laptopLg:w-96 laptopLg:h-7
               desktopMd:w-500  desktopMd:h-10"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
            <p
              className="mt-2 invisible peer-invalid:visible text-red-500 text-sm 
            mobileMd:text-verysm  mobileMd:mt-0
            mobileLg:text-verysm mobileLg:mt-0 
            laptopSm:text-lesssm laptopSm:mt-0
            laptopMd:text-xs laptopMd:mt-0
            laptopLg:text-xs laptopLg:mt-0 
            desktopMd:text-sm desktopMd:mt-2"
            >
              Please provide a valid email address.
            </p>
          </div>

          <div className=" flex flex-row">
            <div>
              <p
                className="font-semibold text-xl 
                mobileMd:font-semibold mobileMd:text-xs 
                mobileLg:font-semibold mobileLg:text-xs
                laptopSm:font-semibold laptopSm:text-lg
                laptopMd:font-semibold laptopMd:text-2xl 
                laptopLg:font-semibold laptopLg:text-2xl
                desktopMd:font-semibold desktopMd:text-2xl desktopMd:mt-6"
              >
                Contact
              </p>
              <input
                className=" bg-gray-300 w-44 
                mobileMd:w-28 mobileMd:h-5
                mobileLg:w-28 mobileLg:h-5
                laptopSm:w-36 laptopSm:h-5
                laptopMd:w-44 laptopMd:h-7
                laptopLg:w-44 laptopLg:h-7
                desktopMd:w-52  desktopMd:h-10"
                onChange={(event) => {
                  setContact(event.target.value);
                }}
                type="number"
              />
            </div>

            <div className="mx-8 desktopMd:mx-20">
              <p
                className="font-semibold text-xl 
                mobileMd:font-semibold mobileMd:text-xs 
                mobileLg:font-semibold mobileLg:text-xs
                laptopSm:font-semibold laptopSm:text-lg
                laptopMd:font-semibold laptopMd:text-2xl
                laptopLg:font-semibold laptopLg:text-2xl
                desktopMd:font-semibold desktopMd:text-2xl desktopMd:mt-6"
              >
                Upload Resume
              </p>
              <input
                className="bg-gray-300 w-44 
                mobileMd:w-28 mobileMd:h-5
                mobileLg:w-28 mobileLg:h-5
                laptopSm:w-36 laptopSm:h-5
                laptopMd:w-44 laptopMd:h-7
                laptopLg:w-44 laptopLg:h-7
                desktopMd:w-52  desktopMd:h-10"
                onChange={(event) => {
                  setUpload(event.target.value);
                }}
                type="text"
              />
            </div>
          </div>
        </div>
        <br />

        <div>
          <p
            className="font-semibold text-xl 
            mobileMd:font-semibold mobileMd:text-xs 
            mobileLg:font-semibold mobileLg:text-xs
            laptopSm:font-semibold laptopSm:text-lg
            laptopMd:font-semibold laptopMd:text-2xl
            laptopLg:font-semibold laptopLg:text-2xl
            desktopMd:font-semibold desktopMd:text-2xl desktopMd:mt-10"
          >
            Additional Questions
          </p>

          <input
            className="bg-gray-400 w-60 
            mobileMd:w-36 mobileMd:h-5 mobileMd:mt-2
            mobileLg:w-36 mobileLg:h-5 mobileLg:mt-2
            laptopSm:w-52 laptopSm:h-5 laptopSm:mt-2
            laptopMd:w-52 laptopMd:h-7 laptopMd:mt-2
            laptopLg:w-52 laptopLg:h-7 laptopLg:mt-2
            desktopMd:w-60 desktopMd:h-10 desktopMd:mt-2"
            type="text"
            onChange={(event) => {
              setQuestion1(event.target.value);
            }}
          />
          <br />
          <input
            className="bg-gray-300 w-96 
            mobileMd:w-64 mobileMd:h-5 
            mobileLg:w-64 mobileLg:h-5
            laptopSm:w-80 laptopSm:h-5
            laptopMd:w-96 laptopMd:h-7 laptopMd:mt-2 
            laptopLg:w-96 laptopLg:h-7 laptopLg:mt-2 
            desktopMd:w-500 desktopMd:h-10 desktopMd:mt-2"
            type="text"
            onChange={(event) => {
              setAnswer1(event.target.value);
            }}
          />
          <br />
          <input
            className="bg-gray-400 w-60 
            mobileMd:w-36 mobileMd:h-5 mobileMd:mt-2
            mobileLg:w-36 mobileLg:h-5 mobileLg:mt-2
            laptopSm:w-52 laptopSm:h-5 laptopSm:mt-2
            laptopMd:w-52 laptopMd:h-7 laptopMd:mt-2
            laptopLg:w-52 laptopLg:h-7 laptopLg:mt-2
            desktopMd:w-60 desktopMd:h-10 desktopMd:mt-2"
            type="text"
            onChange={(event) => {
              setQuestion2(event.target.value);
            }}
          />
          <br />
          <input
            className="bg-gray-300 w-96 
            mobileMd:w-64 mobileMd:h-5
            mobileLg:w-64 mobileLg:h-5
            laptopSm:w-80 laptopSm:h-5
            laptopMd:w-96 laptopMd:h-7 laptopMd:mt-2
            laptopLg:w-96 laptopLg:h-7 laptopLg:mt-2
            desktopMd:w-500 desktopMd:h-10 desktopMd:mt-2
            "
            type="text"
            onChange={(event) => {
              setAnswer2(event.target.value);
            }}
          />
        </div>
        <br />
        <div
          className="ml-40 
        mobileMd:ml-24 mobileMd:h-5
        mobileLg:ml-24 mobileLg:h-5
        laptopSm:ml-32 laptopSm:h-5
        laptopMd:ml-44 laptopMd:h-7
        laptopLg:ml-44 laptopLg:h-7
        desktopMd:ml-56 desktopMd:h-7"
        >
          <button
            className="bg-gray-300 py-2 px-3 text-xs font-medium text-center rounded-lg
            desktopMd:bg-gray-300  desktopMd:py-2  desktopMd:px-3  desktopMd:text-lg  desktopMd:font-medium  desktopMd:text-center desktopMd:rounded-lg"
            onClick={handleApply}
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default Apply;
