import React from "react";
import Content from "./Content";
import Sidebar from "../../Components/PostJob2/Sidebar";
import Navbar from "../../Components/PostJob2/Navbar";
import "./question.css"
const Question = () => {
  return (
    <>
      <div className="questioncontainer">
        <Navbar />
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
