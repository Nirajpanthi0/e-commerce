import React from 'react';
import Image from 'next/image';
import Logo from '../../app/../../public/image/logo.webp';
import { FiShoppingCart, FiUser } from "react-icons/fi";

function Navbar() {
  return (
    <div className=" w-full flex  items-center justify-evenly  text-black">
      
      {/* Logo */}
      <div id="logo" className="flex items-center gap-2">
        <Image
          src={Logo}
          alt="Logo"
          width={60}
          height={60}
          priority
          className="rounded-full"
        />
        <p className="text-pink-700 font-extrabold text-xl hidden md:block">
          SupriceInside
        </p>
      </div>

      {/* Searchbar */}
      <div id="Searchbar" className="w-full md:w-auto md:flex hidden items-center mt-2 md:mt-0">
        <input
          type="text"
          placeholder="Search"
          className="w-full md:w-[500px] h-[40px] border-2 rounded-full border-gray-600 px-4 text-base"
        />
      </div>

      {/* Cart & Login */}
      <div id="cart" className="flex items-center gap-4 text-black mt-2 md:mt-0">
        <div className="flex items-center gap-1 cursor-pointer hover:text-pink-300">
          <FiShoppingCart />
          <p className="hidden md:block">Cart</p>
        </div>
        <div className="flex items-center gap-1 cursor-pointer hover:text-pink-300">
          <FiUser />
          <p className="hidden md:block">Login</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
