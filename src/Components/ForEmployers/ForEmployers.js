import React from 'react';

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

                <div className='flex items-end justify-end'>
                    <div className='text-3xl font-normal text-[#2F2E41] border border-pumpkinOrange w-[700px] h-[80px] flex items-center justify-center mt-12 '>
                        <p>Hire your ideal candidate now.</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ForEmployers;