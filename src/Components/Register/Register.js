import React from "react";
import google from "../../Asset/images/google.png";
import union from "../../Asset/images/Union.png";

const Register = () => {
  return (
    <div className="bg-white w-screen tablet:flex ">
      <div className="bg-pumpkinOrange   h-480 flex flex-col items-center justify-center gap-12 tablet:w-96 tablet:h-screen tablet:gap-36 iPadAir:w-480 iPadAir:gap-80  laptopMd:h-screen laptopMd:gap-20 desktopSm:gap-36">
        <h1 className="main-page-logo">XcitEducation</h1>
        <img src={union} alt="" className="w-80  laptopMd:mt-28" />
      </div>
      <div className="flex flex-col items-center">
        <h3 className="mt-6 mb-4 text-2xl font-semibold">Let's get started</h3>
        <div className="flex flex-col items-center">
         <div> <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-bold text-2xl">First name</span>
            </label>
            <input
              type="text"
              className="input input-bordered w-72 max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-bold text-2xl">Last name</span>
            </label>
            <input
              type="text"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-bold text-2xl">Email</span>
            </label>
            <input
              type="text"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-bold text-2xl">Password</span>
            </label>
            <input
              type="password"
              className="input input-bordered w-full max-w-xs"
            />
            <button className="bg-pumpkinOrange mt-6 rounded-full w-44 h-10 text-xl ml-14 font-semibold text-white">Sign up</button>
          </div></div>
          <p>or</p>
          <div >
            <button className="flex flex-row items-center gap-2 pb-10">Sign up with Google <img src={google} alt="" /> </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
