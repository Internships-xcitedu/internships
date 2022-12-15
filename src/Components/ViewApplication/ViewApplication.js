import React from 'react';
import logo from '../../Asset/images/logo.png'

import Sidebar from '../Bars/Sidebar';
import ApplicationArea from './ApplicationArea';

const ViewApplication = () => {
    return (
        <>
            <div>

                <div className="w-screen laptopMd:h-20 desktopMd:h-20 mobileMd:h-14 tablet:h-16 flex flex-row justify-between mt-2 shadow-lg">
                    <img
                        className="mobileMd:h-12 tablet:h-16 laptopMd:h-20 desktopMd:h-20"
                        src={logo}
                        alt="logo"
                    />
                    <div className="flex-none mobileMd:pl-0">
                        <ul className="menu menu-horizontal p-0">
                            <a
                                href="#"
                                className="border-2 rounded-3xl border-orange-400 font-semibold leading-7 
    mobileMd:text-xs mobileMd:border-0 mobileMd:px-0 mobileMd:mr-3 mobileMd:mt-[15px]
    tablet:border-2 tablet:text-base tablet:px-4 tablet:py-1 tablet:h-10 tablet:mt-2 
    laptopMd:text-xl laptopMd:h-14 laptopMd:px-6 laptopMd:py-2 
    desktopMd:text-3xl desktopMd:h-14 desktopMd:px-8 desktopMd:py-2 
    "
                            >
                                Post a job
                            </a>
                            <i
                                className="fa-solid fa-bell mt-10 fa-sm mx-8 mobileMd:mx-0 mobileMd:mr-2 mobileMd:mt-6
tablet:mx-10 tablet:mt-7 tablet:text-[25px] laptopMd:mx-16  laptopMd:mt-9 laptopMd:text-[30px]
desktopMd:mx-24 desktopMd:text-[35px]"></i>
                            <p
                                className="font-semibold text-2xl leading-8 mt-6 mr-2 
mobileMd:text-xs mobileMd:mt-[14px] mobileLg:mt-[14px] 
tablet:text-base laptopMd:text-xl laptopMd:mt-5 desktopMd:text-3xl
desktopMd:mt-4 "
                            >
                                Hello!
                            </p>
                            <li tabIndex={0}>
                                <a
                                    className="font-semibold text-2xl leading-8 mt-3 pr-10 hover:bg-white
 mobileMd:text-xs mobileMd:px-0 mobileMd:mt-0 mobileLg:mt-0 tablet:text-base tablet:mt-[1px]
 laptopMd:text-xl  laptopMd:mr-10 desktopMd:text-3xl
"
                                >
                                    Employer Name
                                    <svg
                                        className="fill-current"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                                    </svg>
                                </a>
                                {/* <ul className="p-1 bg-base-100 ">
                <li>
                    <a className="bg-base-100 text-xs  laptopMd:text-xl">
                        Submenu 1
                    </a>
                </li>
                <li>
                    <a className="bg-base-100 text-xs laptopMd:text-xl ">
                        Submenu 2
                    </a>
                </li>
            </ul> */}
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
            <div className='flex '>
                <div>
                    <Sidebar></Sidebar>
                </div>
                <div className='p-12 ml-32'>
                    <ApplicationArea></ApplicationArea>
                </div>
            </div>
        </>
    );
};

export default ViewApplication;