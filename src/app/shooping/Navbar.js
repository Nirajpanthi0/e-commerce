import React from 'react'
import Image from 'next/image'
import Logo from '../../app/../../public/image/logo.webp'
import { FiShoppingCart } from "react-icons/fi";
import {  FiUser} from 'react-icons/fi';
function Navbar() {
  return (
   <>
<div className='flex  w-full  h-[100px]   justify-center items-center  '>
<div className='flex h-[90px]  w-[90%]'>
<div className='flex w-[300px] h-[90px] k justify-center items-center'>
  <div className='flex w-[300px] h-[80px]  justify-center items-center  gap-3 '>
<Image
src={Logo}
className='h-[80px]'
>
</Image>
<p className='font-bold text-3xl text-pink-700'>SupriceInside</p>

</div>
</div>

</div>

</div>
   </>
  )
}

export default Navbar