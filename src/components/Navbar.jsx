import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const [nav, setNav] = useState(true);
  const navigate = useNavigate();

  const { currentUser } = UserAuth();
  // console.log("currentUser-->", currentUser);

  const [activities, setActivities] = useState(false);

  const handleNav = () => {
    console.log("changing nav");
    setNav(!nav);
  };

  const handleActivities = () => {
    setActivities(!activities);
  };

  return (
    <div className=" bg-white border-b-slate-300 border-b font-sora">
      <div className="flex justify-between items-center h-20 max-w-[1240px] mx-auto px-4 text-slate-900 font-bold">
        <h1 className={!nav ? "hidden" : "w-full text-3xl font-bold"}>
          Mindful Matters
        </h1>
        <ul className="hidden md:flex">
          <Link to="/">
            <li className="p-8">Home</li>
          </Link>
          <Link to="/skills">
            <li className="p-8 whitespace-nowrap">My Self Care</li>
          </Link>
          <li className="relative p-8">
            <button
              onClick={handleActivities}
              className=" overflow-hidden focus:border-slate-300 text-slate-900 bg-white inline-flex items-center"
              type="button"
            >
              Activities{" "}
              <span>
                <IoMdArrowDropdown />
              </span>
            </button>
            <div
              className={
                activities
                  ? "absolute border-slate-200 mt-2 py-2 bg-white rounded-lg z-[99]"
                  : "hidden"
              }
            >
              <ul onClick={() => setActivities(false)}>
                <Link to="/memory">
                  <li className="block px-4 py-2 hover:bg-slate-300">
                    Memory Game
                  </li>
                </Link>
                <Link to="/journal">
                  <li className="block px-4 py-2 hover:bg-slate-300">
                    Journaling
                  </li>
                </Link>
              </ul>
            </div>
          </li>
          {!currentUser ? (
            <Link to="/signin">
              <li className="p-8 whitespace-nowrap">Sign In</li>
            </Link>
          ) : (
            <Link to="/dashboard">
              <li className="p-8 whitespace-nowrap">
                Hi, {currentUser.displayName}
              </li>
            </Link>
          )}
        </ul>
        <div className="block md:hidden">
          <button onClick={handleNav} className="absolute top-8 right-4 z-[99]">
            {!nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
          </button>
        </div>
        <div
          className={
            !nav
              ? "fixed left-0 top-0 w-[30%] h-full border-r border-r-slate-400 bg-white md:hidden z-[90]"
              : "fixed left-[-100%]"
          }
        >
          <h1 className="w-full text-3xl p-4 font-bold text-[#3730a3]">
            Mindful Matters
          </h1>
          <ul onClick={() => setNav(true)} className="pt-12 uppercase">
            <Link to="/home">
              <li className="p-4 border-b border-slate-400">Home</li>
            </Link>
            <Link to="/skills">
              <li className="p-4 border-b border-slate-400 whitespace-nowrap">
                My Self Care
              </li>
            </Link>
            <Link to="/memory">
              <li className="p-4 border-b border-slate-400">Activities</li>
            </Link>
            {!currentUser ? (
              <Link to="/signup">
                <li className="p-4 border-b border-slate-400">Sign Up</li>
              </Link>
            ) : (
              <Link to="/dashboard">
                <li className="p-4 border-b border-slate-400">Account</li>
              </Link>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
