import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    console.log("changing nav");
    setNav(!nav);
  };

  return (
    <div className=" bg-[#c7d2fe] font-sora">
      <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
        <h1 className="w-full text-3xl font-bold text-[#3730a3]">
          Mindful Matters
        </h1>
        <ul className="flex hidden">
          <li className="p-4">Home</li>
          <li className="p-8 whitespace-nowrap">My Self Care</li>
          <li className="p-4">Activities</li>
          <li className="p-4">Resources</li>
        </ul>
        <div>
          <button onClick={handleNav} className="absolute top-8 right-4 z-[99]">
            {!nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
          </button>
        </div>
        <div
          className={
            !nav
              ? "fixed left-0 top-0 w-[20%] h-full border-r border-r-gray-900 bg-[#c7d2fe]"
              : "fixed left-[-100%]"
          }
        >
          <h1 className="w-full text-3xl pt-8 font-bold text-[#3730a3]">
            Mindful Matters
          </h1>
          <ul className="pt-12 uppercase">
            <li className="p-4 border-b border-gray-400">Home</li>
            <li className="p-4 border-b border-gray-400 whitespace-nowrap">
              My Self Care
            </li>
            <li className="p-4 border-b border-gray-400">Activities</li>
            <li className="p-4 border-b border-gray-400">Resources</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
