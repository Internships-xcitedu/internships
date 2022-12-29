import React from "react";
import EmployeDetails from "./EmployeDetails";
import EmpSearch from "./EmpSearch";
import Navbar from "./Navbar";

const EmployeSearch = () => {
  return (
    <div>
      <Navbar />
      <EmpSearch />
      <EmployeDetails />
    </div>
  );
};

export default EmployeSearch;
