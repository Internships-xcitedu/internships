import React from 'react';
import homeIcon from '../../Asset/images/HomeIcon.png'
import calendarIcon from '../../Asset/images/CalendarIcon.png'
import bookmarkIcon from '../../Asset/images/bookmark.png'
const ApplicationArea = () => {
    const workDetails = [
        {
            "companyName": "Diggligence",
            "workType": "Work from home",
            "position": "UI/UX Design",
            "duration": "2 Months"
        },
        {
            "companyName": "Diggligence",
            "workType": "Work from home",
            "position": "UI/UX Design",
            "duration": "2 Months"
        },
        {
            "companyName": "Diggligence",
            "workType": "Work from home",
            "position": "UI/UX Design",
            "duration": "2 Months"
        },
        {
            "companyName": "Diggligence",
            "workType": "Work from home",
            "position": "UI/UX Design",
            "duration": "2 Months"
        }
    ]
    return (
        <>
            < div className='flex items-center justify-between w-2/3 font-bold' >
                <div className='w-[290px] h-[45px] border-2 border-black text-center p-2'>All Applications</div>
                <div className='ml-12 w-[290px] h-[45px] border-2 border-black text-center p-2'>Shortlisted</div>
            </div >
            <div className=''>
                {workDetails.map(work =>
                    <div className='mt-4 border-2 border-black grid grid-cols-3 gap-2 justify-center items-center p-10 '>
                        <div className='text-center w-1/2'><input type="radio" name="radio-1" class="radio" /></div>
                        <div className='grid grid-cols-2 gap-2 font-bold ml-[-100px]'>
                            <div>{work.companyName}</div>
                            <div className='flex items-center justify-start'> <img src={homeIcon} alt="" />{work.workType}</div>
                            <div>{work.position}</div>
                            <div className='flex items-center justify-start'><img src={calendarIcon} alt="" /> {work.duration}</div>
                        </div>
                        <div className='flex justify-end w-2/3'>
                            <div>
                                <p className='flex justify-end'><img className='w-[24px]' src={bookmarkIcon} alt="" /></p>
                                <p className='bg-pumpkinOrange text-white p-2 mt-4 text-sm'>View Profile</p>

                            </div>
                        </div>
                    </div>
                )
                }
            </div>
        </>
    );
};

export default ApplicationArea;