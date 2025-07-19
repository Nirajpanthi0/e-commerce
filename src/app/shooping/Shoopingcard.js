"use client"

import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Shoopingcard() {

  const[products,SetProducts]=useState([])

  let LoadProducts=()=>{
    
    axios.get("https://fakestoreapi.com/products").then((response)=>{
      SetProducts(response.data);
    }).catch((error)=>{
      console.log(error);
      
    });

  }


  useEffect(()=>{
    LoadProducts();
  },[])


  return (
    <>
      <div className='h-[100px] w-full bg-white flex items-center p-[20px]'>
        <p className='font-bold text-3xl text-pink-700'>Products for Sale</p>
      </div>
<div
className='h-[800px]  w-full p-[50px]'
>
      <div className="flex  gap-5 flex-wrap  p-20  items-baseline justify-items-stretch ">
        {
          products.map((item) => (
            <div key={item.id} className='h-[300px] w-[200px] bg-white rounded-2xl p-3 shadow-md'>
              <img 
                src={item.image} 
                alt={item.title} 
                className="h-[120px] w-full object-cover rounded-lg mb-3"
              />
              <div className='text-xs font-normal'>{item.title}</div>
              <div className='text-sm'>Price: Rs {item.price}</div>
             <div className='p-[20px]'>

               <button className='border-2 rounded-2xl font-light cursor-pointer '>Add To Card</button>
             </div>
            </div>
          ))
        }
        </div>
      </div>
    </>
  );
}

export default Shoopingcard;
