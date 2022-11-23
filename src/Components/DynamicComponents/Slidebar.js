import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';

const Slidebar = () => {
  const activeStyle = {
    backgroundColor: "transparent",
    borderBottom: "3px solid white",
    borderRadius: "2px",
    paddingBottom: "5px",

  };
  return (
    <div class="drawer drawer-mobile mt-0">
      <input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content">
        <div className="flex justify-end absolute top-[7%] right-[2%] z-10">
          <label for="my-drawer-4" class="drawer-button lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="#F97316"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
        </div>
        {/* <!-- Page content here --> */}
        <Outlet />
      </div>
      <div class="drawer-side">
        <label for="my-drawer-4" class="drawer-overlay"></label>
        <ul class="menu p-6 w-[300px] text-base-content bg-[#F97316]">
          <Link to="#" className="text-2xl font-bold text-white bg-black  mb-10 p-2 font-sans text-center">XcitEducation</Link>
          <li className="">
            <NavLink
              to="/slider"
              className="text-2xl text-white mb-3"
              style={({ isActive }) => isActive ? activeStyle : {}}
            >
              PERSONAL DETIALS
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/slider/education"
              className="text-2xl text-white mb-3"
              style={({ isActive }) => isActive ? activeStyle : {}}
            >
              EDUCATION
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/slider/exprience"
              className="text-2xl text-white mb-3"
              style={({ isActive }) => isActive ? activeStyle : {}}
            >
              WORK EXPERIENCE
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/slider/certificate"
              className="text-2xl text-white mb-3"
              style={({ isActive }) => isActive ? activeStyle : {}}
            >
              CERTIFICATE
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/slider/skills"
              className="text-2xl text-white mb-3"
              style={({ isActive }) => isActive ? activeStyle : {}}
            >
              SKILLS
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/slider/profile"
              className="text-2xl text-white mb-3"
              style={({ isActive }) => isActive ? activeStyle : {}}
            >
              PROFILE LINKS
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Slidebar;