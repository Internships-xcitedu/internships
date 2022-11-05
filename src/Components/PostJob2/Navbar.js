import React from "react";
import logo from "../../images/logo.png";
import "./navbar.css"
const Navbar = () => {
  return (
    <>
      <div className="w-full h-20 flex flex-row justify-between mt-2">
        <img src={logo} alt="logo" />
        <div className="flex flex-row">
        <button className=" border-2 rounded-3xl border-orange-400 font-semibold leading-7 text-xl px-4 py-1 h-12 mt-4  ">
          Post a job
        </button>
        <i class="fa-solid fa-bell px-10 mt-10 fa-xl "></i>
        <p className="font-semibold text-2xl leading-8 mt-5 mr-2">Hello!</p>
        {/* copy paste code */}
        <button
          id="dropdownInformationButton"
          data-dropdown-toggle="dropdownInformation"
          className="font-semibold text-2xl leading-8 mt-2 pr-10"
          type="button"
        >
          Employer Name
          <svg
            class="ml-2 w-4 h-4"
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </button>
        {/* <!-- Dropdown menu --> */}
        <div
          id="dropdownInformation"
          class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
        >
          {/* <div class="py-3 px-4 text-sm text-gray-900 dark:text-white">
            <div>Bonnie Green</div>
            <div class="font-medium truncate">name@flowbite.com</div>
          </div> */}
          <ul
            class="py-1 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownInformationButton"
          >
            <li>
              <a
                href="#"
                class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Settings
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Earnings
              </a>
            </li>
          </ul>
          <div class="py-1">
            <a
              href="#"
              class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >
              Sign out
            </a>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
