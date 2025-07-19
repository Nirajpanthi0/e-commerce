import React from 'react';
import banner from '../../../public/image/banner.webp';
import Image from 'next/image';

function Banner() {
  return (
    <div className="w-full flex justify-center items-center py-4 px-2">
      <div className="w-full max-w-[800px] h-auto">
        <Image
          src={banner}
          alt="Banner"
          priority
          className="w-full h-auto object-contain rounded-md"
        />
      </div>
    </div>
  );
}

export default Banner;
