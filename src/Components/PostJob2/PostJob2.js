import React from "react";
import Content from "./Content";
import "./postjob2.css";
import Navbar from "../Bars/Navbar";
import Sidebar from "../Bars/Sidebar";
import RNavbar from "../Bars/RNavbar";
const Postjob2 = () => {
  return (
    <>
      <div className="postjob2container">
        <Navbar />
        <div>
          <RNavbar />
        </div>
        <div className="postjob2">
          <Sidebar />
          <div className="content">
            <Content />
          </div>
        </div>
      </div>
    </>
  );
};

export default Postjob2;
