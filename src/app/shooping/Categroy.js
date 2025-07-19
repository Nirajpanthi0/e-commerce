"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Shoopingcard from './Shoopingcard';

function Categroy() {
  const [categories, setCategory] = useState([
  ]);
  
  const LoadCategory = () => {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((response) => {

        const res=[...response.data].reverse();
const Resall=["All",...res]
setCategory(Resall);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    LoadCategory();
  }, []);

  const handleclick=()=>{
return <Shoopingcard></Shoopingcard>
  }

  return (
    <>
      <div className='h-[100px] w-full bg-white shadow-md overflow-auto flex-wrap flex'  onClick={handleclick}>
        <select className='flex h-[85px] w-[500px] items-center gap-6 font-black'>
         {categories.map((category,index)=>(
           <option  key={index} value={category}>{category.toUpperCase()}</option>
         ))}
        </select>
      </div>
    </>
  );
}

export default Categroy;
