import React from 'react'
import Image from 'next/image'
import Logo from '../../app/../../public/image/logo.webp'
import { FiShoppingCart } from "react-icons/fi";
import {  FiUser} from 'react-icons/fi';
function Navbar() {
  return (
   <>
<div className='flex  h-[100px] w-[full]   bg-white  justify-evenly items-center   '>
<div id='logo' className='h-[100px] w-[300px]  rounded-full items-center flex justify-center p-[30px]  gap-2 font-extrabold  text-2xl '>
 <Image
        src={Logo}
        alt="Logo"
        width={90} 
        height={20} 
        priority 
        className='rounded-full'
      />
<p className='text-pink-700 hidden md:block '>SupriceInside</p>
</div>
<div id='Searchbar'   className='flex w-[600px] h-[50px]     md:block hidden  '>
<input type='text'  className='w-[500px] h-[50px]   border-2 rounded-4xl  border-gray-600 text-2xl items-center-safe '  />
</div>
<div id='cart' className=' h-[100px] w-[300px]  flex  justify-center items-center font-bold text-2xl gap-2 cursor-pointer' >
<FiShoppingCart className='hover:text-pink-700'></FiShoppingCart>
<p className='md:block hidden hover:text-pink-700'>Cart</p>
<FiUser className='hover:text-pink-700'></FiUser>
<p className='md:block hidden hover:text-pink-700'>Login</p>
</div>
</div>
   </>
  )
}

export default Navbar