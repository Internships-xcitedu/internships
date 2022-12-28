import React from 'react'
import './Signup.css'
import {Link} from 'react-router-dom'

const SignUp = () => {
  return (
    <>
    <div className=' bg-gray-100  w-[370px] sm:w-[714px]  mobileMd:h-[600px] mobileLg:w-[370px] mobileMd:w-[350px] mobileMd:ml-[12px] mobileLg:ml-[25px] laptopSm:h-[580px] laptopMd:h-[600px]  absolute top-[2%] tablet:top-[2%] laptopMd:top-[25px]  left-[0px] laptopLg:top-[60px] tablet:left-[30px] laptopMd:left-[150px] laptopLg:left-[404px]  container1 '>
      <h2 className='absolute top-[50px] left-[130px] sm:left-[270px]  font-[400] text-[36px]'>Signup!</h2>
      <form>
        <div className=' inline absolute  top-[120px] mobileMd:left-[6%] mobileLg:left-[10%]'>
        <label htmlFor="name" className='font-[400] text-[20px] ml-[0px] mb-[10px]'>First Name</label><br/>
        <input type="text" name='firstname' className=' w-[150px] sm:w-[265px] h-[50px]  border border-solid rounded-2xl' />

        </div>
        <div className='inline absolute top-[120px] left-[52.5%]'>
        <label htmlFor="name" className='font-[400] text-[20px] ml-[0px] mb-[10px]'>Last Name</label><br/>
        <input type="text" name='firstname' className='w-[150px] sm:w-[265px] h-[50px]  border border-solid rounded-2xl' />
        </div>

        <div className='inline absolute top-[220px]  mobileMd:left-[6%] mobileLg:left-[10%]'>
        <label htmlFor="cname" className='font-[400] text-[20px] ml-[0px] mb-[10px]'>Name of the company</label><br/>
        <input type="text" name='firstname' className='w-[315px] sm:w-[570px] h-[50px]  border border-solid rounded-2xl' />
        </div>

        <div className='inline absolute top-[320px]  mobileMd:left-[6%] mobileLg:left-[10%]'>
        <label htmlFor="email" className='font-[400] text-[20px] ml-[0px] mb-[10px]'>email id</label><br/>
        <input type="text" name='firstname' className='w-[315px] sm:w-[570px] h-[50px]  border border-solid rounded-2xl' />
        </div>

        <div className='inline absolute top-[420px]  mobileMd:left-[6%] mobileLg:left-[10%]'>
        <label htmlFor="name" className='font-[400] text-[20px] ml-[0px] mb-[10px]'>password</label><br/>
        <input type="text" name='firstname' className='w-[315px] sm:w-[570px] h-[50px]  border border-solid rounded-2xl' />
        </div>
       <Link to='/empreg'>
        <button className='absolute top-[530px] left-[130px] sm:left-[270px] rounded-[35px]  border border-solid rounded-2xl w-[116px] h-[40px] bg-[#F97316] text-white font-[600]'>Submit</button>
        </Link>
      </form>
    </div>
    </>
  )
}

export default SignUp
