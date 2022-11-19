import React from "react";
import { Link } from "react-router-dom";

const RNavbar = () => {
  return (
    <>
      <div className="tablet:hidden  flex justify-center gap-2 mt-4">
        <Link to="#" className="text-[10px] font-medium text-gray-500">
          Posted Jobs
        </Link>

        <Link to="#" className="text-[10px] font-medium text-gray-500">
          Applications
        </Link>

        <Link to="#" className="text-[10px] font-medium text-gray-500">
          Messages
        </Link>
      </div>
    </>
  );
};
export default RNavbar;
