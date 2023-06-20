import React from "react";

const Navbar = () => {
  return (
    <div className=" bg-[#c7d2fe]">
      <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
        <h1 className="w-full text-3xl font-bold text-[#3730a3]">
          Mindful Matters
        </h1>
        <ul className="flex">
          <li className="p-8">Home</li>
          <li className="p-8">My Self Care</li>
          <li className="p-8">Activities</li>
          <li className="p-8">Resources</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
