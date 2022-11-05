import React from "react";
import Content from "./Content";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import "./postjob2.css";
const Postjob2 = () => {
  return (
    <>
      <div className="postjob2container">
        <Navbar />
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
