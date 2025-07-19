import React from 'react'
import banner from '../../../public/image/banner.webp'
import Image from 'next/image'
function Banner() {
  return (
    <>
    <div className="h-[500px] w-full flex justify-center items-center">
  <div className="h-[300px] w-[800px]  flex justify-center items-center">
    <Image
      src={banner}
      alt="Banner"
      width={800} 
      height={300}
      priority
      className="object-contain"
    />
  </div>
</div>
    </>
  )
}

export default Banner