import React from "react";
import Content from "../PostJob2/Content";
import Navbar from "../PostJob2/Navbar";
import Sidebar from "../PostJob2/Sidebar";

const Postjob1 = () => {
  return (
    <>
      <div className="postjob2container">
        <Navbar />
        <div className="postjob2">
          <Sidebar />
        </div>
      </div>
    </>
  );
};

export default Postjob1;
