import React from 'react';
import { Link } from 'react-router-dom';
const PersonalDetails = () => {
  return (
    <div className="container mx-auto">
        <div className="lg:w-10/12 w-full mx-auto md:mt-12 mt-6 sm:px-0 px-4">
          <h3 className="text-4xl font-normal font-['Segoe UI'] text-[#2F2E41] mb-8 md:mt-4 ">Add your personal details</h3>
          <form className="flex flex-col text-gray font-sans font-semibold  justify-between">
            {/* ======= Date and photo ====== */}
            <div className="sm:flex sm:flex-row mobileMd:flex-col-reverse">
              <div className="sm:mb-0 mb-3">
                <label className="block text-xl font-normal font-['Segoe UI'] text-[#2F2E41] mb-1">Start date</label>
                <input type="text" className="border sm:w-10/12 w-full rounded-[15px] py-2 px-4 focus:outline-none" />
              </div>
              <div className='md:mx-6 mx-0 sm:mb-0 mb-3'>
                <label className="block text-xl font-normal font-['Segoe UI'] text-[#2F2E41] mb-1">End date</label>
                <input type="text" className="border sm:w-10/12 w-full rounded-[15px] py-2 px-4 focus:outline-none" />
              </div>
              <div className="md:mt-[-80px] sm:mb-0 mb-3">
                <p className="bg-[#F2F2F2] rounded-full md:w-[200px] md:h-[200px] w-36 h-36 text-center flex justify-center items-center md:text-2xl sm:text-lg text-base font-normal font-['Segoe UI'] text-[#8F8C8C] px-4">Add a profile photo</p>
              </div>
            </div>
             {/* ======= Email and Contact ====== */}
            <div className="w-full md:flex mb-6">
              <div className="md:w-6/12 sm:w-10/12 w-full mr-8 sm:mb-0 mb-3">
                <label className="block text-xl font-normal font-['Segoe UI'] text-[#2F2E41] mb-1">Email id</label>
                <input type="email" className="border w-full rounded-[15px] py-2 px-4 focus:outline-none" />
              </div>
              <div className="md:w-4/12 sm:w-10/12 w-full sm:mb-0 mb-3">
                <label className="block text-xl font-normal font-['Segoe UI'] text-[#2F2E41] mb-1">Contact</label>
                <input type="text" className="border w-full rounded-[15px] py-2 px-4 focus:outline-none" />
              </div>
            </div>
            {/* ======= Date and Gender ====== */}
            <div className="md:flex">
              <div className="md:w-4/12 sm:w-10/12 w-full mr-5 sm:mb-0 mb-3">
                <label className="block text-xl font-normal font-['Segoe UI'] text-[#2F2E41] mb-1">Date of brith</label>
                <input type="text" className="border w-full rounded-[15px] py-2 px-4 focus:outline-none" />
              </div>
              <div className="md:w-6/12 sm:w-10/12 w-full sm:mb-0 mb-3">
                <label className="block text-xl font-normal font-['Segoe UI'] text-[#2F2E41] mb-3 sm:mt-0 mt-2 md:ml-4">Gender</label>
                <div className="flex sm:ml-2 ml-0">
                  <div className="">
                    <label class="custom-radio-btn">
                      <span class="label font-['poppins'] sm:text-left sm:text-lg text-sm font-normal text-[#2F2E41] not-italic sm:ml-2">Student</span>
                      <input type="radio" name="sample" />
                      <span class="checkmark"></span>
                    </label>
                  </div>
                  <div className="">
                    <label class="custom-radio-btn">
                      <span class="label font-['poppins'] sm:text-left sm:text-lg text-sm font-normal text-[#2F2E41] not-italic sm:ml-2">Employer</span>
                      <input type="radio" name="sample" />
                      <span class="checkmark"></span>
                    </label>
                  </div>
                  <div className="">
                    <label class="custom-radio-btn">
                      <span class="label font-['poppins'] sm:text-left sm:text-lg text-sm font-normal text-[#2F2E41] not-italic sm:ml-2">Transgender</span>
                      <input type="radio" name="sample" />
                      <span class="checkmark"></span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            {/* ======= City,Pincode,state ====== */}
            <div className='md:flex my-6'>
              <div className="sm:mb-0 mb-3">
                <label className="block text-xl font-normal font-['Segoe UI'] text-[#2F2E41] mb-1">City</label>
                <input type="text" className="border sm:w-10/12 w-full rounded-[15px] py-2 px-8 focus:outline-none" />
              </div>
              <div className='md:mx-6 mx-0 sm:mb-0 mb-3'>
                <label className="block text-xl font-normal font-['Segoe UI'] text-[#2F2E41] mb-1">Pincode</label>
                <input type="text" className="border sm:w-10/12 w-full rounded-[15px] py-2 px-4 focus:outline-none" />
              </div>
              <div className='sm:mb-0 mb-3'>
                <label className="block text-xl font-normal font-['Segoe UI'] text-[#2F2E41] mb-1">State</label>
                <input type="text" className="border sm:w-10/12 w-full rounded-[15px] py-2 px-4 focus:outline-none" />
              </div>
            </div>
            {/* ======= Country ====== */}
            <div className='md:w-4/12 sm:w-10/12 w-full sm:mb-0 mb-3'>
              <label className="block text-xl font-normal font-['Segoe UI'] text-[#2F2E41] mb-1">Country</label>
              <input type="text" className="border w-full rounded-[15px] py-2 px-4 focus:outline-none" />
            </div>
            {/* ======= Next button ====== */}
            <div className="sm:mt-0 mt-3 md:w-10/12 w-full font-bold flex justify-end">
              <Link
                to="#"
                className="ml-auto font-semibold text-2xl font-['Segoe UI'] border-[#F97316] border text-[#F97316] rounded-3xl px-8 py-1">
                next
              </Link>
            </div>
          </form>
        </div>
    </div>
  );
};

export default PersonalDetails;