import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";

const EmpSearch = () => {
  return (
    <>
      <div className="mt-10 px-16">
        <div class="grid laptopLg:grid-cols-4 laptopMd:grid-cols-3 laptopSm:grid-cols-2 mobileMd:grid-cols-1 gap-4">
          <div>
            <form>
              <div className="relative flex items-center">
                <AiOutlineSearch className="w-5 h-5 absolute ml-3 pointer-events-none" />
                <input
                  type="text"
                  placeholder="Search by required skills"
                  className="input input-bordered w-full max-w-xs pl-10 pr-2"
                />
              </div>
            </form>
          </div>
          <div>
            <form>
              <div className="relative flex items-center">
                <MdLocationOn className="w-5 h-5 absolute ml-3 pointer-events-none" />
                <input
                  type="text"
                  placeholder="Location"
                  className="input input-bordered w-full max-w-xs pl-10 pr-2"
                />
              </div>
            </form>
          </div>
          <div>
            <button className="btn btn-pumpkinOrange rounded-full  bg-pumpkinOrange border-pumpkinOrange hover:bg-pumpkinOrange hover:border-pumpkinOrange">
              Search
            </button>
          </div>
        </div>
        <h1 className="my-10 font-bold text-xl">
          Based on your previous job postings
        </h1>
      </div>
    </>
  );
};

export default EmpSearch;
