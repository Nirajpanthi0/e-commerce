"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import { FiShoppingBag } from "react-icons/fi";

export default function Home() {
  const [categories, setCategory] = useState([]);
  const [products, setProducts] = useState([]);

  const LoadCategory = () => {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((res) => {
        res.data.unshift("All");
        setCategory(res.data);
      })
      .catch((err) => console.log(err));
  };

  const LoadProducts = (url) => {
    axios
      .get(url)
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    LoadCategory();
    LoadProducts("https://fakestoreapi.com/products");
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    if (value === "All") {
      LoadProducts("https://fakestoreapi.com/products");
    } else {
      LoadProducts(`https://fakestoreapi.com/products/category/${value}`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2] font-sans">
      {/* Header */}
      <header className="bg-white/30 backdrop-blur-lg shadow-lg py-6 px-4 sm:px-10 flex justify-between items-center sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <FiShoppingBag className="text-4xl text-indigo-600" />
          <h1 className="text-3xl font-bold text-gray-800 tracking-tight">Drezze</h1>
        </div>
      </header>

      {/* Category Selector */}
      <div className="flex flex-col sm:flex-row gap-4 items-center px-6 sm:px-10 mt-8">
        <h2 className="text-xl font-semibold text-gray-700">Select Category:</h2>
        <select
          onChange={handleChange}
          className="bg-white/40 backdrop-blur-md px-4 py-2 rounded-xl border border-gray-300 shadow-inner focus:outline-none focus:ring-2 focus:ring-indigo-400 w-full sm:w-[220px]"
        >
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category.toUpperCase()}
            </option>
          ))}
        </select>
      </div>

      {/* Products Grid */}
      <main className="px-6 sm:px-10 py-10">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {products.map((item) => (
            <div
              key={item.id}
              className="bg-white/60 backdrop-blur-md rounded-3xl shadow-xl p-4 flex flex-col hover:scale-105 transition-transform duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-48 object-contain mb-4 rounded-xl"
              />
              <h3 className="text-gray-800 font-semibold text-base line-clamp-2 mb-1">
                {item.title}
              </h3>
              <p className="text-indigo-600 font-bold text-lg mb-4">Rs {item.price}</p>
              <button className="bg-indigo-500 text-white px-4 py-2 rounded-full mt-auto hover:bg-indigo-600 transition">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
