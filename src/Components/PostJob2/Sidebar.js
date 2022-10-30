import React from "react";

const Sidebar = () => {
  return (
    <>
      <div className="w-52 mt-20 pl-11 max-lg:pl-0">
        <nav class=" flex flex-col justify-center">
        <a href="/postedjob" class=" text-3xl font-semibold leading-10 py-4  hover:bg-slate-100 hover:text-slate-900">Posted Jobs</a>
        <hr className="border-1 border-gray-300 " />
        <a href="/application" class=" text-3xl font-semibold leading-10 py-4  hover:bg-slate-100 hover:text-slate-900">Applications</a>
        <hr className="border-1 border-gray-300 " />
        <a href="/messages" class=" text-3xl font-semibold leading-10 py-4  hover:bg-slate-100 hover:text-slate-900">Messages</a>
        <hr className="border-1 border-gray-300 " />
        </nav>
      </div>
    </>
  );
};
export default Sidebar;