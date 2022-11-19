import React from "react";
import union from "../../Asset/images/Union.png";

const Register = () => {
  return (
    <div className="bg-white w-screen  tablet:flex ">
      <div className="bg-pumpkinOrange   h-480 flex flex-col items-center justify-center gap-12 tablet:w-96 tablet:h-screen tablet:gap-36 iPadAir:w-480 iPadAir:gap-80  laptopMd:h-screen laptopMd:gap-20 desktopSm:gap-36">
        <h1 className="main-page-logo">XcitEducation</h1>
        <img src={union} alt="" className="w-80  laptopMd:mt-28" />
      </div>
      <div>
        <h3>Let's get started</h3>
        <div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-bold">First name</span>
            </label>
            <input
              type="text"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-bold">Last name</span>
            </label>
            <input
              type="text"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-bold">Email</span>
            </label>
            <input
              type="text"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-bold">Password</span>
            </label>
            <input
              type="text"
              className="input input-bordered w-full max-w-xs"
            />
            <input type="submit" value="Sign up" />
          </div>
          <div>
            <h3>google</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
