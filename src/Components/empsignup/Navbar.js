import React from 'react'
import logo from './logo.png'

const Navbar = () => {
  return (
    <div className=' flex flex-wrap bg-[#FFFFFF] w-[389px] sm:w-[1518px] h-[90px] shadow-lg'>
      <img src={logo} alt="" className='w-[210px] h-[47px] absolute top-[30px] left-[87px]' />
      <button className='absolute top-[30px] left-[859px] border-[#f97316] rounded-[35px]'>Post a job</button>
      <p className='absolute top-[33px] left-[1109px] font-[600] text-[24px]'>employer name</p>
      
</div>

    
  )
}

export default Navbar
