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
    <div className="w-1/3 bg-base-100 font-['Segoe UI'] drop-shadow-2xl mx-10 my-3  rounded-xl flex justify-center sm: min-w-fit   md:ml-10 min-w-fit  lg:ml-10 min-w-fit">
      <div className=" ml-14 mr-14 my-5">
        <p className="font-normal text-3xl">Apply to (Company name)</p>

        <p className=" font-normal text-2xl">Your details</p>
        <br />
        <br />
        <div className="flex flex-col space-y-7">
          <div className=" flex flex-row ">
            <div>
              <p className="font-semibold text-xl">First Name</p>
              <input
                className="peer bg-gray-300 w-44 "
                required
                type="text"
                onChange={(event) => {
                  setFirstName(event.target.value);
                }}
              />
              <p className="mt-2 invisible peer-invalid:visible text-red-500 text-sm">
                Please enter your First Name.
              </p>
            </div>
            <div className="mx-8">
              <p className="font-semibold text-xl">Last Name</p>
              <input
                className="peer bg-gray-300 w-44"
                required
                onChange={(event) => {
                  setLastName(event.target.value);
                }}
                type="text"
              />
              <p className="mt-2 peer-valid:invisible peer-invalid:visible text-red-500 text-sm">
                Please enter your Last Name.
              </p>
            </div>
          </div>

          <div>
            <p className="font-semibold text-xl">Email</p>
            <input
              type="email"
              className="peer bg-gray-300 w-96 "
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
            <p className="mt-2 invisible peer-invalid:visible text-red-500 text-sm">
              Please provide a valid email address.
            </p>
          </div>

          <div className=" flex flex-row">
            <div>
              <p className="font-semibold text-xl">Contact</p>
              <input
                className=" bg-gray-300 w-44"
                onChange={(event) => {
                  setContact(event.target.value);
                }}
                type="number"
              />
            </div>

            <div className="mx-8">
              <p className="font-semibold text-xl">Upload Resume</p>
              <input
                className="bg-gray-300 w-44"
                onChange={(event) => {
                  setUpload(event.target.value);
                }}
                type="text"
              />
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div>
          <p className="font-semibold text-xl">Additional Questions</p>
          <br />
          <input
            className="bg-gray-400 w-60"
            type="text"
            onChange={(event) => {
              setQuestion1(event.target.value);
            }}
          />
          <br />
          <input
            className="bg-gray-300 w-96"
            type="text"
            onChange={(event) => {
              setAnswer1(event.target.value);
            }}
          />
          <br />
          <br />
          <input
            className="bg-gray-400 w-60"
            type="text"
            onChange={(event) => {
              setQuestion2(event.target.value);
            }}
          />
          <br />

          <input
            className="bg-gray-300 w-96"
            type="text"
            onChange={(event) => {
              setAnswer2(event.target.value);
            }}
          />
        </div>
        <br />
        <div className="ml-40">
          <button
            className="bg-gray-300 py-2 px-3 text-xs font-medium text-center rounded-lg "
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
