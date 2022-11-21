import React from 'react';
import image from '../../Asset/images/Frame_1081.png'
const ForEmployers = () => {
    return (
        <>
            <div className='m-24'>
                <div className='flex items-center justify-between'>
                    <div>
                        <p className='font-bold text-2xl text-white bg-brightGrey w-[250px] h-[60px] flex items-center justify-center'>XcitEducation</p>
                    </div>
                    <div className='flex items-center justify-center'>
                        <div className='border-2 border-pumpkinOrange rounded-full w-[170px] h-[50px] flex items-center justify-center'>
                            <p> Register Now</p>
                        </div>
                        <div className='font-semibold text-2xl text-pumpkinOrange ml-8'>
                            <p> Login</p>
                        </div>
                    </div>
                </div>



                <div className='flex items-center justify-between'>
                    <div className='w-1/2 pt-12'>
                        <img src={image} alt="" />
                    </div>
                    <div className='flex flex-col items-center justify-center w-1/2 p-12'>
                        <div className='flex items-center justify-end '>
                            <div className='text-3xl font-normal text-[#2F2E41] border-b border-pumpkinOrange flex items-center justify-center mt-12 p-4'>
                                <p>Hire your ideal candidate now.</p>
                            </div>
                        </div>
                        <div className='mt-12 mb-12 text-brightGrey text-3xl font-normal'>
                            <p>How it works</p>
                        </div>
                        <div className='grid grid-cols-3 gap-12'>
                            <div className='flex flex-col items-center justify-center text-center'>
                                <div className='bg-pumpkinOrange rounded-full w-[60px] h-[60px] flex items-center justify-center'>
                                    <p className='text-3xl font-bold text-white'>1</p>
                                </div>
                                <p className='text-brightGrey font-semibold text-2xl mt-4 mb-6'>Register</p>
                                <p className='text-[#2F2E41]'>
                                    Register as an employer and provide details about the company.
                                </p>
                            </div>
                            <div className='flex flex-col items-center justify-center text-center'>
                                <div className='bg-pumpkinOrange rounded-full w-[60px] h-[60px] flex items-center justify-center'>
                                    <p className='text-3xl font-bold text-white'>2</p>
                                </div>
                                <p className='text-brightGrey font-semibold text-2xl mt-4 mb-6'>Post a job</p>
                                <p className='text-[#2F2E41]'>
                                    Post jobs under different categoies, add job description and requirements.
                                </p>
                            </div>
                            <div className='flex flex-col items-center justify-center text-center'>
                                <div className='bg-pumpkinOrange rounded-full w-[60px] h-[60px] flex items-center justify-center'>
                                    <p className='text-3xl font-bold text-white'>3</p>
                                </div>
                                <p className='text-brightGrey font-semibold text-2xl mt-4 mb-6'>Hire candidates</p>
                                <p className='text-[#2F2E41]'>
                                    Review applications, conduct interviews and get the perfect candidate for the job.
                                </p>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ForEmployers;