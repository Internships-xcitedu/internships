import React from "react";
import Navbar from "../Bars/Navbar";
import RNavbar from "../Bars/RNavbar";
import Sidebar from "../Bars/Sidebar";
import Content from "./Content";

import "./question.css";
const Question = () => {
  return (
    <>
      <div className="questioncontainer">
        <Navbar />
        <div>
          <RNavbar />
        </div>
        <div className="question">
          <Sidebar />
          <div className="content">
            <Content />
          </div>
        </div>
      </div>
    </>
  );
};

export default Question;
