import React from "react";
import "./sidebar.css";
const Sidebar = () => {
  return (
    <>
      <div className=" a w-52 laptopLg:mt-20 tablet:mt-[150px] pl-5 ">
        <nav class=" flex flex-col justify-center">
          <a
            href="/postedjob"
            className=" tablet:text-base tablet:py-2 laptopMd:text-xl desktopMd:text-3xl font-semibold leading-10 desktopMd:py-4 
          hover:bg-slate-100 hover:text-slate-900"
          >
            Posted Jobs
          </a>
          <hr className="border-1  border-gray-300 tablet:w-28 laptopMd:w-36 desktopMd:w-52 " />
          <a
            href="/application"
            className=" tablet:text-base tablet:py-2 laptopMd:text-xl desktopMd:text-3xl font-semibold leading-10 desktopMd:py-4 
         hover:bg-slate-100 hover:text-slate-900"
          >
            Applications
          </a>
          <hr className="border-1 border-gray-300 tablet:w-28 laptopMd:w-36 desktopMd:w-52" />
          <a
            href="/messages"
            className=" tablet:text-base tablet:py-2 laptopMd:text-xl desktopMd:text-3xl font-semibold leading-10 desktopMd:py-4 
         hover:bg-slate-100 hover:text-slate-900"
          >
            Messages
          </a>
          <hr className="border-1 border-gray-300 tablet:w-28 laptopMd:w-36 desktopMd:w-52" />
        </nav>
      </div>
    </>
  );
};
export default Sidebar;
