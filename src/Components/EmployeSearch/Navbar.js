import React from "react";
import { RiNotification2Fill } from "react-icons/ri";

const Navbar = () => {
  const Items = (
    <>
      <li>
        <button className="btn btn-outline rounded-full border-pumpkinOrange hover:btn-pumpkinOrange">
          Post a job
        </button>
      </li>
      <li className="font-semibold text-2xl text-pumpkinOrange mx-6">
        <p>{<RiNotification2Fill />}</p>
      </li>
      <li tabIndex={0} className="font-semibold">
        <a>
          Hello! employer name
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
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 px-16 shadow-xl">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {Items}
          </ul>
        </div>
        <a className="btn btn-active normal-case text-xl">XcitEducation</a>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{Items}</ul>
      </div>
    </div>
  );
};

export default Navbar;
