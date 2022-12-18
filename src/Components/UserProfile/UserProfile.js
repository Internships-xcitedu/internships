import React from 'react'
import vector1 from "../../Asset/images/Vector1.svg" 
import Vector2 from "../../Asset/images/Vector2.svg"
import Vector3 from "../../Asset/images/Vector3.svg"
const UserProfile = () => {
  return (
    <div className='max-w-laptopLg mx-auto  '>
     <div className="w-344  rounded-xl mobileLg:w-[425px] bg-white   tablet:w-700   laptopMd:w-700 h-[1040px]  ">
     <div className='flex mt-10 mb-5 justify-end '>
       <img className='w-[25px]' src={Vector3} alt=""/>
     </div>
    <div className='w-344 flex  mobileMd:ml-4 mobileLg:ml-16'>
 
     <div class="avatar placeholder">
  <div class="bg-[#EEEEEE] text-neutral-content rounded-full w-24 h-24">
    <img src='' alt=''/>
  </div>
</div>

      <div className='mt-2 ml-8'>
         <h1 className='text-xl'>Devayani Gadgil</h1>
       <div className='flex  mt-[17px] mb-2'>
       <img className='pr-2 w-6' src={vector1}/>
       <p className='text-sm'>45487846565</p>
       </div>
        <div className='flex mt-[17px]'>
          <img className='pr-2 w-6' src={Vector2}/>
        <p>devayani@gmail.com</p>
        </div>
      </div>
    
    </div>
     
     <div className='w-197 mobileMd:ml-4 mobileLg:ml-16  mt-16'>
       <h1 className='text-xl' >Profile summary</h1>
       <h1 className='text-xl mt-[94px]'>Education</h1>
       <h1 className='text-xl mt-[77px]'>Certifications/courses</h1>
       <h1 className='text-xl mt-[117px]' >Experience</h1>
       <h1 className='text-xl mt-[87px]'>Resume</h1>
       <h1 className='text-xl mt-[63px]'>Profile Links</h1>

     </div>


        <div className='flex gap-2 justify-end mt-28 mr-[40px] tablet:mr-[52px]'>
          <button className='w-[90px]  tablet:w-[101px] h-[38px] bg-red text-white rounded-xl'>Message</button>
          <button className='w-[90px] tablet:w-[101px] bg-green rounded-xl text-white'>Hire</button>
        </div>
     </div>
    </div>
  )
}

export default UserProfile

