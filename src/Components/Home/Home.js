import React from "react";
import frame_1 from "../../Asset/images/Frame_1081.png";

const Home = () => {
  return (
    <>
      <div>
        <div className="bg-pumpkinOrange w-512 h-480 flex flex-col items-center justify-center gap-12">
          <h1 className="bg-brightGrey w-60 h-16 text-4xl text-white text-center pt-2">
            XcitEducation
          </h1>
          <img src={frame_1} alt="" className="w-80"/>
        </div>
        <div className="w-512">
          <div className="flex items-center justify-evenly  mt-5">
            <button className="hover:w-40 hover:h-10 hover:rounded-full hover:border-pumpkinOrange hover:border-2 hover:bg-sunYellow  text-xl font-bold">Register now</button>
            <button className="hover:w-40 hover:h-10 hover:rounded-full hover:border-pumpkinOrange hover:border-2 hover:bg-sunYellow  text-xl font-bold">Login</button>
            <div className="bg-black w-1 h-9"></div>
            <button className="hover:w-40 hover:h-10 hover:rounded-full hover:border-pumpkinOrange hover:border-2 hover:bg-sunYellow  text-xl font-bold">For employers</button>
          </div>
          <div className="mt-10 flex flex-col items-center justify-center">
            <div><h3 className="text-3xl">Looking for internships?</h3>
            <p className="text-lg pt-6">We are here to help you find the best internship</p></div>
            <div className="flex flex-col pt-4 gap-6 items-center">
            <input className="w-96 h-14 bg-nobel bg-opacity-10 placeholder:text-osloGrey placeholder:text-center placeholder:text-xl rounded-2xl text-2xl pl-8 border-2" type="text" placeholder="search jobs titles or skills"/>
            <input className="w-96 h-14 bg-nobel bg-opacity-10 placeholder:text-osloGrey placeholder:text-center placeholder:text-xl rounded-2xl text-2xl pl-8 border-2" type="text" placeholder="city, state or pin code"/>
            
            <button className="bg-pumpkinOrange w-48 h-11 rounded-full">Search</button></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
