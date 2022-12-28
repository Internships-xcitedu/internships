import React from "react";

import RNavbar from "../Bars/RNavbar";
import Navbar from "../Bars/Navbar";
import Sidebar from "../Bars/Sidebar";
import Content2 from "./Content2";

const Postjob1 = () => {
  return (
    <>
      <div className="postjob2container">
        <Navbar />
        <div>
          <RNavbar />
        </div>
        <div className="postjob2">
          <Sidebar />
          <div>
            <Content2 />
          </div>
        </div>
      </div>
    </>
  );
};

export default Postjob1;
