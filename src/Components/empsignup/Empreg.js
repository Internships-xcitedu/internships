import React from "react";
import "./Empreg.css";
import  Navbar from "./Navbar"
const Empreg = () => {
  const handleChange = {};
  return (
    <div>
      <Navbar/>
      <h2 className="absolute left-[10px] md:left-[356px] top-[75px] md:top-[110px] font-[400] text-[32px]">
        Complete Your Profile
      </h2>
      <p className="absolute left-[10px] md:left-[353px] top-[180px] md:top-[190px] text-[20px] font-[400]">
        
        Employee Details
      </p>
      <div className="bg-[#F8F8Fb] w-[395px] md:w-[805px] h-[255px] absolute left-[0px] md:left-[353px] top-[227px] rounded-[15px]">
        <div className=" inline absolute  top-[10px] left-[3%] md:left-[10%]">
          <label
            htmlFor="name"
            className="font-[400] text-[20px] ml-[0px] mb-[10px]"
          >
            First Name
          </label>
          <br />
          <input
            onChange={handleChange}
            type="text"
            name="firstname"
            className="w-[171px] md:w-[265px] h-[50px] border border-solid rounded-2xl "
          />
        </div>

        <div className="inline absolute top-[10px] left-[52.5%]">
          <label
            htmlFor="name"
            className="font-[400] text-[20px] ml-[0px] mb-[10px]"
          >
            Last Name
          </label>
          <br />
          <input
            onChange={handleChange}
            type="text"
            name="firstname"
            className="w-[171px] md:w-[265px] h-[50px] border border-solid rounded-2xl "
          />
        </div>

        <div className=" inline absolute  top-[50%] left-[3%] md:left-[10%]">
          <label
            htmlFor="name"
            className="font-[400] text-[20px] ml-[0px] mb-[10px]"
          >
            Emailid
          </label>
          <br />
          <input
            onChange={handleChange}
            type="text"
            name="firstname"
            className="w-[171px] md:w-[265px] h-[50px] border border-solid rounded-2xl"
          />
        </div>

        <div className="inline absolute top-[50%] left-[52.5%]">
          <label
            htmlFor="name"
            className="font-[400] text-[20px] ml-[0px] mb-[10px]"
          >
            Contact No
          </label>
          <br />
          <input
            onChange={handleChange}
            type="text"
            name="firstname"
            className="w-[171px] md:w-[265px] h-[50px] border border-solid rounded-2xl"
          />
        </div>
      </div>
      {/* company details */}
      <h2 className="absolute left-[10px] md:left-[353px] top-[500px]">
        Company Details
      </h2>
      <div className="bg-[#F8F8Fb] w-[395px] md:w-[805px] h-[578px] absolute left-[0] md:left-[353px] top-[530px] rounded-[15px] mb-[200px]">
        <div className=" inline absolute  top-[10%] left-[3%] md:left-[10%]">
          <label
            htmlFor="name"
            className="font-[400] text-[20px] ml-[0px] mb-[10px]"
          >
            Name of the Company
          </label>
          <br />
          <input
            onChange={handleChange}
            type="text"
            name="firstname"
            className="  width-[171px] md:w-[461px] h-[50px] border border-solid rounded-2xl"
          />
        </div>

        <div className="inline absolute top-[10%] left-[53%] md:left-[70%]">
          <label
            htmlFor="name"
            className="font-[400] text-[20px] ml-[15px] md:ml-[0px] mb-[10px]"
          >
            Logo
          </label>
          <br />
          <input
            onChange={handleChange}
            type="file"
            id="file1"
            name="firstname"
            className="w-[171px] md:w-[210px] h-[50px] border border-solid rounded-2xl"
          />
        </div>

        <div className=" inline absolute  top-[35%] left-[3%] md:left-[10%]">
          <label
            htmlFor="name"
            className="font-[400] text-[18px] md:text-[20px] ml-[0px] mb-[10px]"
          >
            {" "}
            Company Email address
          </label>
          <br />
          <input
            onChange={handleChange}
            type="text"
            name="firstname"
            className="w-[171px] md:w-[265px] h-[50px] border border-solid rounded-2xl"
          />
        </div>

        <div className="inline absolute top-[35%] left-[52.5%]">
          <label
            htmlFor="name"
            className="font-[400] text-[20px] ml-[15px] md:ml-[0px] mb-[10px]"
          >
            Contact No
          </label>
          <br />
          <input
            onChange={handleChange}
            type="text"
            name="firstname"
            className="w-[171px] md:w-[265px] h-[50px] border border-solid rounded-2xl"
          />
        </div>

        <div className=" inline absolute  top-[50%] left-[3%] md:left-[10%]">
          <label
            htmlFor="name"
            className="font-[400] text-[20px] ml-[0px] mb-[10px]"
          >
            {" "}
            Office address
          </label>
          <br />
          <input
            onChange={handleChange}
            type="text"
            name="firstname"
            className=" w-[366px] md:w-[695px] h-[50px] border border-solid rounded-2xl"
          />
        </div>

        <div className=" inline absolute  top-[65%] left-[3%] md:left-[10%]">
          <label
            htmlFor="name"
            className="font-[400] text-[20px] ml-[0px] mb-[10px]"
          >
            {" "}
            City
          </label>
          <br />
          <input
            onChange={handleChange}
            type="text"
            name="firstname"
            className="w-[108px] md:w-[227px] h-[50px] border border-solid rounded-2xl"
          />
        </div>

        <div className=" inline absolute  top-[65%] left-[35%] md:left-[40%]">
          <label
            htmlFor="name"
            className="font-[400] text-[20px] ml-[0px] mb-[10px]"
          >
            {" "}
            State
          </label>
          <br />
          <input
            onChange={handleChange}
            type="text"
            name="firstname"
            className="w-[108px] md:w-[227px] h-[50px] border border-solid rounded-2xl"
          />
        </div>

        <div className=" inline absolute  top-[65%] left-[67%] md:left-[70%]">
          <label
            htmlFor="name"
            className="font-[400] text-[20px] ml-[0px] mb-[10px]"
          >
            {" "}
            Pincode
          </label>
          <br />
          <input
            onChange={handleChange}
            type="text"
            name="firstname"
            className="w-[108px] md:w-[227px] h-[50px] border border-solid rounded-2xl"
          />
        </div>

        <div className=" inline absolute  top-[80%] left-[3%] md:left-[10%]">
          <label
            htmlFor="name"
            className="font-[400] text-[20px] ml-[0px] mb-[10px]"
          >
            {" "}
            Certificate of incorporation
          </label>
          <br />
          <input
            onChange={handleChange}
            type="text"
            name="firstname"
            className="w-[265px] h-[50px] border border-solid rounded-2xl "
          />
        </div>
      </div>

      {/* about the company */}
      <div className="bg-[#F8F8Fb] w-[395px] md:w-[805px] h-[255px] absolute left-[0px] md:left-[353px] top-[1200px] rounded-[15px] mb-[200px]">
        <textarea
          name="about"
          id=""
          cols="50"
          rows="4"
          className="  absolute w-[366px] md:w-[722px] h-[200px] top-[10%] left-[3%] md:left-[5%] border border-solid rounded-2xl "
          placeholder="A short description about the organization"
        ></textarea>
      </div>

      <div className="btn1">
        <button className="absolute top-[1500px] left-[141px] md:left-[709px] rounded-[35px] bg-[#f97316] w-[116px] h-[40px] text-white font-[600] text-[24px]  ">
          Save
        </button>
      </div>
    </div>
  );
};

export default Empreg;
