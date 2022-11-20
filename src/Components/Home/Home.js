import React from "react";
import { Link } from "react-router-dom";
import frame_1 from "../../Asset/images/Frame_1081.png";

const Home = () => {
  return (
    <>
      <div className="bg-white w-screen  tablet:flex ">
        <div className="bg-pumpkinOrange   h-480 flex flex-col items-center justify-center gap-12 tablet:w-96 tablet:h-screen tablet:gap-36 iPadAir:w-480 iPadAir:gap-80  laptopMd:h-screen laptopMd:gap-20 desktopSm:gap-36">
          <h1 className="main-page-logo">
            XcitEducation
          </h1>
          <img src={frame_1} alt="" className="w-80  laptopMd:mt-28" />
        </div>
        <div className="w-screen h-screen tablet:flex flex-col justify-center tablet:gap-28  iPadAir:justify-evenly iPadAir:-mt-64 iPadAir:gap-96 laptopMd:-mt-48 laptopLg:-mt-6 laptopLg:gap-64">
          <div className=" text-black flex items-center justify-evenly mt-5  iPadAir:mt-64 laptopLg:-mt-16  desktopSm:-mt-4">


            <Link to='/register' className="navbar-btn">
              Register now
            </Link>

            <Link to='/login' className="navbar-btn">
              Login
            </Link>
            <div className="bg-black w-1 h-9"></div>


            <Link to='/forEmployers' className="navbar-btn">
              For employers
            </Link>
          </div>
          <div className="mt-10 flex flex-col items-center justify-center iPadAir:-mt-64">
            <div className="text-center">
              <h3 className="text-black text-3xl iPadAir:text-4xl iPadAir:font-bold desktopSm:text-6xl">Looking for internships?</h3>
              <p className="text-black text-lg pt-6 iPadAir:text-xl iPadAir:mb-4 desktopSm:text-3xl">
                We are here to help you find the best internship
              </p>
            </div>
            <div className="flex flex-col pt-4 gap-6 items-center justify-center">
              <div>
                <input
                  className="main-page-input"
                  type="text"
                  placeholder="search jobs titles or skills"
                />
                <i className="fa-solid fa-magnifying-glass -ml-8 text-osloGrey text-xl"></i>
              </div>
              <div>
                <input
                  className="main-page-input"
                  type="text"
                  placeholder="city, state or pin code"
                />
                <i className="fa-solid fa-location-dot -ml-8 text-osloGrey text-xl"></i>
              </div>
              <button className="bg-pumpkinOrange text-black w-48 h-11 rounded-full mb-10 hover:bg-blue-400 font-bold laptopMd:text-2xl ">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
