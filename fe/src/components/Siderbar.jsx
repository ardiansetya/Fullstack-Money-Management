"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaHome, FaChartBar, FaCog } from "react-icons/fa";

const Sidebar = () => {
  const [isHovered, setIsHovered] = useState(false); 

  return (
    <aside
      className={`${
        isHovered ? "w-1/12 duration-200" : "w-[5%] duration-200"
      } duration-500 transition-all flex flex-col gap-5 bg-indigo-500/60 h-[40vh] rounded-r-xl justify-center items-center my-auto`}
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)} 
    >
      {/* <div className="p-5">
        <h1 className="text-2xl font-semibold text-white">SPENDO</h1>
      </div> */}
      <div className="p-5">
        <ul className="flex flex-col gap-5">
          <li className="flex items-center gap-3">
            <Link href="/dashboard" className="text-white flex items-center">
              <FaHome className="text-xl" />
              {isHovered && (
                <span className="ml-2 duration-200">Dashboard</span>
              )}
            </Link>
          </li>
          <li className="flex items-center gap-3">
            <Link href="/analytics" className="text-white flex items-center">
              <FaChartBar className="text-xl" />
              {isHovered && (
                <span className="ml-2 duration-200">Analytics</span>
              )}
            </Link>
          </li>
          <li className="flex items-center gap-3">
            <Link href="/settings" className="text-white flex items-center">
              <FaCog className="text-xl" />
              {isHovered && <span className="ml-2 duration-200">Settings</span>}
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
