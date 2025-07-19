import Image from "next/image";
import Shoopingcard from "./shooping/Shoopingcard";
import Navbar from "./shooping/Navbar";
import Categroy from "./shooping/Categroy";
import Banner from "./shooping/Banner";


export default function Home() {
  return (
   <>
   <div className="w-full h-full">
    <Navbar></Navbar>
    <Categroy></Categroy>
    <Banner></Banner>
    <Shoopingcard></Shoopingcard>

   </div>
   </>
  );
}
