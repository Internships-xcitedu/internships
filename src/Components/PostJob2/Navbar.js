import React from "react";
import logo from "../../Asset/images/logo.png";
import "./navbar.css";
const Navbar = () => {
  return (
    <>
      <div className="w-screen laptopMd:h-20 desktopMd:h-20 mobileMd:h-14 tablet:h-16 flex flex-row justify-between mt-2 shadow-lg">
        <img
          className="mobileMd:h-12 tablet:h-16 laptopMd:h-20 desktopMd:h-20"
          src={logo}
          alt="logo"
        />
        <div className="flex-none mobileMd:pl-0">
          <ul className="menu menu-horizontal p-0">
            <a
              href="#"
              className="border-2 rounded-3xl border-orange-400 font-semibold leading-7 
                    mobileMd:text-xs mobileMd:border-0 mobileMd:px-0 mobileMd:mr-3 mobileMd:mt-[15px]
                    tablet:border-2 tablet:text-base tablet:px-4 tablet:py-1 tablet:h-10 tablet:mt-2 tablet:mr-10
                    laptopMd:text-xl laptopMd:h-14 laptopMd:px-6 laptopMd:py-2 laptopMd:mr-24
                    desktopMd:text-3xl desktopMd:h-14 desktopMd:px-8 desktopMd:py-2 desktopMd:mr-24
                    "
            >
              Post a job
            </a>
            <i
              className="fa-solid fa-bell mt-10 fa-sm mx-8 
            mobileMd:mx-0 mobileMd:fa-xl mobileMd:mr-2 mobileMd:mt-6
            tablet:mr-6 tablet:mt-7 tablet:fa-lg  laptopMd:fa-xl laptopMd:mr-10 laptopMd:mt-7
            desktopMd:fa-xl desktopMd:mr-10 desktopMd:mt-8
            "
            ></i>
            <p
              className="font-semibold text-2xl leading-8 mt-6 mr-2 
              mobileMd:text-xs mobileMd:mt-[14px] mobileLg:mt-[14px] 
              tablet:text-base laptopMd:text-xl laptopMd:mt-5 desktopMd:text-3xl
              desktopMd:mt-4 "
            >
              Hello!
            </p>
            <li tabIndex={0}>
              <a
                className="font-semibold text-2xl leading-8 mt-3 pr-10 hover:bg-white
                 mobileMd:text-xs mobileMd:px-0 mobileMd:mt-0 mobileLg:mt-0 tablet:text-base tablet:mt-[1px]
                 laptopMd:text-xl  laptopMd:mr-10 desktopMd:text-3xl
              "
              >
                Employer Name
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul className="p-1 bg-base-100 ">
                <li>
                  <a className="bg-base-100 text-xs  laptopMd:text-xl">
                    Submenu 1
                  </a>
                </li>
                <li>
                  <a className="bg-base-100 text-xs laptopMd:text-xl ">
                    Submenu 2
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      {/* <nav className="w-screen desktopMd:h-20 mobileMd:h-14 flex flex-wrap items-center mt-2 shadow-lg ">
        <a className=" inline-flex items-center"href="#">
        <img className="mobileMd:h-12 desktopMd:h-20" src={logo} alt="logo" />
        </a>
        <button className=" inline-flex p-3 hover:bg-gray-300 rounded desktopMd:hidden desktopSm:hidden desktopLg:hidden laptopSm:hidden laptopMd:hidden laptopLg:hidden">
        <i className="fa-solid fa-bars text-black"></i>
        </button>
        <div 
        className="top-nav w-full laptopLg:inline-flex laptopLg:flex-grow laptopLg:w-auto laptopSm:w-auto laptopMd:w-auto desktopSm:w-auto desktopMd:w-auto desktopLg:w-auto "
        id="navigation"
        >
          <div className=" laptopLg:inline-flex laptopLg:flex-row laptopLg:ml-auto laptopSm:ml-auto laptopMd:ml-auto desktopSm:ml-auto desktopMd:ml-auto desktopLg:ml+-auto ">
            <a href="#">
               <span>Post a job</span>
            </a>
            <a href="#">
               <span>Notification</span>
            </a>
            <a href="#">
              <a>Employer Name</a>
            </a>
          </div>
        </div>
      </nav> */}
    </>
  );
};

export default Navbar;
