import React from 'react';
import Avator from '../../Asset/chat/avatar.png'
import Arrow from '../../Asset/chat/arrow 2 - left.png'
import Menu from '../../Asset/chat/menu-kebab.png'
import Bi_send from '../../Asset/chat/bi_send.png'
import Notification from '../../Asset/chat/notification.png'
import Search from '../../Asset/chat/search.svg'
   

const Chat = () => {
    return (
	<div className='flex justify-center bg-gray-100 text-gray-800 p-10 mobileLg:flex-col mb-5 tablet:flex-col p-3 mb-5 laptopMd:flex-row'>
		 {/* Frist-Part	 */}

	<div className='bg-gray-300 border border-gray-300 shadow-xl rounded-2xl p-6 tablet:mb-5'>
       {/* Search bar */}
	   
	<div className='flex justify-between mb-5'>
		<div>
		<form action="" className="relative">

		  <div className=' flex'>
			<img className='absolute z-30 justify-start pt-3 ml-5' src={Search} alt=''></img>
			<input type="search" placeholder='Enter for Search' className="w-[395px] justify-start peer relative z-10 cursor-pointer rounded-full border border-gray-300 bg-white pl-12 outline-none py-2" />
             
		 </div>
		 
        </form>
		</div>
		<div className='mt-2 ml-5'>
			<img src={Notification} alt=''></img>
		</div>
	</div>   
    
  {/* Chat-1    */}
       <div className='bg-white p-2 rounded-lg mb-6'>
       <div className='flex justify-around mt-3.5'>
	   <div className='flex'>
	   <div>
	       <img className="h-16 w-16 object-cover rounded-full mx-4" src={Avator} alt="" />
	   </div>
       <div>
		   <input className="flex items-center h-6 w-56 rounded-xl border-none px-3 bg-gray-300" type="text" placeholder=""/>
		   <input className="flex items-center h-3.5 w-36 rounded-xl border-none  bg-gray-300 px-3 mt-1.5" type="text" placeholder=""/>
	   </div>
	   </div>

	   <div>
		<p className='ml-8'>1:20 PM</p>
	   </div>
    </div>
    
    <div className='flex justify-between'>
		<div className='mt-5 pb-5'>
			<input className="flex items-center h-3.5 w-80 rounded-xl border-none  bg-gray-300 px-3 mt-1.5 ml-5" type="text" placeholder=""/>
		</div>
		<div className='h-10 w-10 bg-gray-300 rounded-full border-2 border-gray-900 flex justify-center items-center'>
			<p className='justify-center items-center text-black'>2</p>
		</div>
	</div>
	   </div>  
		{/* Chat-2   */}
       <div className='bg-white p-2 rounded-lg mb-6'>
       <div className='flex justify-around mt-3.5'>
	   <div className='flex'>
	   <div>
	       <img className="h-16 w-16 object-cover rounded-full mx-4" src={Avator} alt="" />
	   </div>
       <div>
		   <input className="flex items-center h-6 w-56 rounded-xl border-none px-3 bg-gray-300" type="text" placeholder=""/>
		   <input className="flex items-center h-3.5 w-36 rounded-xl border-none  bg-gray-300 px-3 mt-1.5" type="text" placeholder=""/>
	   </div>
	   </div>

	   <div>
		<p className='ml-8'>1:20 PM</p>
	   </div>
    </div>
    
    <div className='flex justify-between'>
		<div className='mt-5 pb-5'>
			<input className="flex items-center h-3.5 w-80 rounded-xl border-none  bg-gray-300 px-3 mt-1.5 ml-5" type="text" placeholder=""/>
		</div>
		<div className='h-10 w-10 bg-gray-300 rounded-full border-2 border-gray-900 flex justify-center items-center'>
			<p className='justify-center items-center text-black'>1</p>
		</div>
	</div>
	   </div>  
		{/* Chat-3  */}
       <div className='bg-white p-2 rounded-lg mb-6'>
       <div className='flex justify-around mt-3.5'>
	   <div className='flex'>
	   <div>
	       <img className="h-16 w-16 object-cover rounded-full mx-4" src={Avator} alt="" />
	   </div>
       <div>
		   <input className="flex items-center h-6 w-56 rounded-xl border-none px-3 bg-gray-300" type="text" placeholder=""/>
		   <input className="flex items-center h-3.5 w-36 rounded-xl border-none  bg-gray-300 px-3 mt-1.5" type="text" placeholder=""/>
	   </div>
	   </div>

	   <div>
		<p className='ml-8'>1:20 PM</p>
	   </div>
    </div>
    
    <div className='flex justify-between'>
		<div className='mt-5 pb-5'>
			<input className="flex items-center h-3.5 w-80 rounded-xl border-none  bg-gray-300 px-3 mt-1.5 ml-5" type="text" placeholder=""/>
		</div>
		
	</div>
	   </div>  
		{/* Chat-4   */}
       <div className='bg-white p-2 rounded-lg mb-6'>
       <div className='flex justify-around mt-3.5'>
	   <div className='flex'>
	   <div>
	       <img className="h-16 w-16 object-cover rounded-full mx-4" src={Avator} alt="" />
	   </div>
       <div>
		   <input className="flex items-center h-6 w-56 rounded-xl border-none px-3 bg-gray-300" type="text" placeholder=""/>
		   <input className="flex items-center h-3.5 w-36 rounded-xl border-none  bg-gray-300 px-3 mt-1.5" type="text" placeholder=""/>
	   </div>
	   </div>

	   <div>
		<p className='ml-8'>1:20 PM</p>
	   </div>
    </div>
    
    <div className='flex justify-between'>
		<div className='mt-5 pb-5'>
			<input className="flex items-center h-3.5 w-80 rounded-xl border-none  bg-gray-300 px-3 mt-1.5 ml-5" type="text" placeholder=""/>
		</div>
		<div className='h-10 w-10 bg-gray-300 rounded-full border-2 border-gray-900 flex justify-center items-center'>
			<p className='justify-center items-center text-black'>2</p>
		</div>
	</div>
	   </div>  
	 </div>






		 {/* Second-Part */}
        <div className=" ml-10 ">
           {/* <!-- Component Start --> */}
    <div className="flex flex-col flex-grow w-full max-w-xl border border-gray-300 shadow-xl rounded-2xl overflow-hidden">

	<div className='flex justify-start justify-between items-center p-3 bg-white'>
       
	   <div className="flex justify-start items-center">
		 <div>
		   <img src={Arrow} alt=''></img>
		 </div>
		 <div class="shrink-0">
		  <img className="h-16 w-16 object-cover rounded-full mx-4" src={Avator} alt="" />
		</div>
		<div>
		<input className="flex items-center h-6 w-56 rounded-xl border-none px-3 bg-gray-300" type="text" placeholder=""/>
		<input className="flex items-center h-3.5 w-36 rounded-xl border-none  bg-gray-300 px-3 mt-1.5" type="text" placeholder=""/>
		</div>
	  </div>
   
	   <div>
		   <img className='center' src={Menu} alt=''></img>
	   </div>
	</div>

		<div className='bg-gray-300'>
			<div className='p-3 mt-80'>
			<div className="flex w-full mt-2 space-x-3 max-w-xs">
				<img className='h-10 w-10 mt-3' src={Avator} alt=''/>
				<div>
				<input className="flex items-center h-20 w-96 rounded-tl-2xl rounded-tr-2xl rounded-br-2xl border-none px-3 bg-gray-200" type="text" placeholder=""/>
					<span className="text-xs text-gray-500 leading-none">1:20 PM</span>
				</div>
			</div>

			<div className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
				<div>
				<input className="flex items-center h-14 w-64 rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl border-none px-3 bg-white" type="text" placeholder=""/>
					<span className="text-xs text-gray-500 leading-none">1:20 PM</span>
				</div>
				<img className='h-10 w-10 mt-3' src={Avator} alt=''/>
			</div>
			
			<div className="flex w-full mt-2 space-x-3 max-w-xs">
            <img className='h-10 w-10 mt-3' src={Avator} alt=''/>
				<div>
				<input className="flex items-center h-14 w-96 rounded-2xl border-none px-3 bg-gray-200" type="text" placeholder=""/>
					<span className="text-xs text-gray-500 leading-none">1:20 PM</span>
				</div>
			</div>
			<div className="flex w-full mt-2 space-x-3 max-w-xs">
            <img className='h-10 w-10 mt-3' src={Avator} alt=''/>
				<div>
				<input className="flex items-center h-14 w-64 rounded-tl-2xl rounded-tr-2xl rounded-br-2xl border-none px-3 bg-gray-200" type="text" placeholder=""/>
					<span className="text-xs text-gray-500 leading-none">1:20 PM</span>
				</div>
			</div>
			<div className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
				<div>
				<input className="flex items-center h-14 w-64 rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl border-none px-3 bg-white" type="text" placeholder=""/>
					<span className="text-xs text-gray-500 leading-none justify-end">1:20 PM</span>
				</div>
				<img className='h-10 w-10 mt-3' src={Avator} alt=''/>
			</div>
			
		</div>
		
		<div className='flex justify-between items-center px-3'>
		<div className="bg-gray-300 p-4">
			<input className="flex items-center h-10 w-96 rounded-xl px-3 text-sm" type="text" placeholder="Write a Message"/>
        </div>
		<div className='h-10 w-20 bg-white rounded-full flex justify-center items-center'>
			<img src={Bi_send} alt=''></img>
		</div>
		</div>
		</div>
	</div>
	{/* <!-- Component End  --> */}
 
        </div>
		</div>
    );
};

export default Chat;