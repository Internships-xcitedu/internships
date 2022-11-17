import React, { useState } from 'react';
import "../../Components/Login/Login.css"
import StudentLogin from './StudentLogin';
const Login = () => {
  const [isChecked, setIsChecked] = useState(null)
  const [student, setStudent] = useState(false)
  const [employer, setEmployer] = useState(false)
  // console.log(student);
  // console.log(employer);
  return (
    <div className="pt-16">
      <div className="container mx-auto">
        <div className="flex justify-center items-center my-[3.4%]">
          <form className="w-[500px] h-[570px]  bg-gray-100 rounded-2xl p-8">
            <h1 className="font-['poppins'] text-3xl font-normal text-[#000000] not-italic text-center" >Login</h1>
            <div className="flex justify-evenly items-center my-7">
              <div className="">
                <label class="custom-radio-btn">
                  <span class="label font-['poppins'] text-[20px] font-normal text-[#2F2E41] not-italic ml-2">Student</span>
                  <input type="radio" name="sample" />
                  <span class="checkmark"></span>
                </label>
              </div>
              <div className="">
                <label class="custom-radio-btn">
                  <span class="label font-['poppins'] text-[20px] font-normal text-[#2F2E41] not-italic ml-2">Employer</span>
                  <input type="radio" name="sample" />
                  <span class="checkmark"></span>
                </label>
              </div>
            </div>
            <StudentLogin />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;