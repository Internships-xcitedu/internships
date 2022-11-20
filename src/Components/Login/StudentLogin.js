import React from 'react';
import { Link } from 'react-router-dom';
import "../../Components/Login/Login.css"
import google from "../../Asset/Logo/Google.png"
const StudentLogin = () => {
  return (
    <div className="">
      <div className='text-center mt-6'>
        <div>
          <input type="email" className="input-field mb-7" placeholder='Email id' />
          <br />
          <input type="password" className="input-field" placeholder='Password' />
        </div>
        <div className="text-center flex justify-around items-center mt-5">
          <Link className="font-['Segoe UI'] text-base font-normal text-[#F97316] not-italic border-b-[1px] border-b-[#ff5722]">Forget password</Link>
          <button className="bg-[#ff5722] px-8 py-2 rounded-full font-['Segoe UI'] text-base font-semibold text-white not-italic">Login</button>
        </div>
        <div className="font-['Segoe UI'] text-xl font-normal text-[#2F2E41] not-italic py-5">OR</div>
        <div className="sm:w-9/12 w-10/12 mx-auto border border-[#676976] rounded-lg sm:p-0 p-1">
          <button className="flex items-center justify-around font-['Segoe UI'] text-base font-normal text-[#374151] not-italic">
            <img src={google} alt="" className="sm:ml-3 ml-0 sm:mr-8 mr-0 w-10 " />
            Login with Goggle Account
          </button>
        </div>
        <div className="sm:w-8/12 w-10/12 mx-auto sm:my-10 my-8 border border-[#ff5722]"></div>
        <h4 className="font-['Segoe UI'] text-base font-semibold text-[#ff5722] not-italic sm:px-0 px-2">Don't have an account? Register now.</h4>
      </div>
    </div>
  );
};

export default StudentLogin;