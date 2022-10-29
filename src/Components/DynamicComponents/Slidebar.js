import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';

const Slidebar = () => {
  const activeStyle = {
    borderBottom: "3px solid white",
    borderRadius: "1px",
    paddingBottom: "8px"
  };
  return (
    <div className="w-full h-full">
      <div className="grid grid-cols-4">
        <div className="col-span-1">
          <div className="bg-[#F97316] text-green md:h-screen text-center flex flex-col">
            <div className="mx-auto mt-10 flex flex-col">
              <h3 className="text-2xl font-bold text-white bg-black  mb-10 p-2 font-sans ">
                <Link to="#"> XcitEducation</Link>
              </h3>
              <div className="flex flex-col justify-around h-96 text-2xl text-start text-white ">
                <NavLink
                  to="/slider/details"
                  className=""
                  style={({ isActive }) => isActive ? activeStyle : {}}
                >
                  PERSONAL DETIALS
                </NavLink>
                <NavLink
                  className=""
                  to="/slider/education"
                  style={({ isActive }) => isActive ? activeStyle : {}}
                >
                  EDUCATION
                </NavLink>
                <NavLink
                  className=""
                  to="/slider/exprience"
                  style={({ isActive }) => isActive ? activeStyle : {}}
                >
                  WORK EXPERIENCE
                </NavLink>
                <NavLink
                  className="/slider/certificate"
                  to="/slider/certificate"
                  style={({ isActive }) => isActive ? activeStyle :{}}
                >
                  CERTIFICATE
                </NavLink>
                <NavLink
                  className=""
                  to="/slider"
                  style={({ isActive }) => isActive ? activeStyle : {}}
                >
                  SKILLS
                </NavLink>
                <NavLink
                  className=""
                  to="/slider/profile"
                  style={({ isActive }) => isActive ? activeStyle : {}}
                >
                  PROFILE LNKS
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        {/* ===============
          Dynamics Content 
          ================
        */}
        <div className="col-span-3">
          <div className="ml-24">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slidebar;