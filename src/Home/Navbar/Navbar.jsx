import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";
import { FaX } from "react-icons/fa6";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="px-4 py-1 border-b-2 h-[60px] overflow-x-hidden">
      <div className="flex items-center justify-between h-full">
        <div>
          <h1 className="logoFont">NewsDragon</h1>
        </div>
        <div>
          <div className="flex items-center justify-center border px-1 py-[4px] rounded-sm">
            <input
              className="outline-none"
              type="search"
              name="search"
              id=""
              placeholder="Search..."
            />
            <BsSearch className="cursor-pointer" size={24} />
          </div>
        </div>
        <div className="">
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="hover:cursor-pointer"
          >
            {isOpen ? (
              <FaX className="text-[24px] md:text-[30px] transition-all duration-300 ease-in-out" />
            ) : (
              <BiMenuAltRight className="text-[24px] md:text-[30px] transition-all duration-300 ease-in-out" />
            )}
          </div>
          <div
            className={`
              absolute top-[60px] right-0 bg-gray-300 bg-opacity-50 h-[calc(100vh-60px)] min-w-[100vw]
              ${isOpen ? "translate-x-0" : "translate-x-full"}
              transition-transform duration-300 ease-in-out flex justify-end backdrop-blur
            `}
          >
            <ul className="flex flex-col w-[100vw] md:w-[50vw] lg:w-[25vw] bg-gray-400 items-center">
              <li className="hover:bg-slate-300 py-4 w-full text-center font-bold capitalize cursor-pointer transition-colors duration-300 ease-in-out">
                home
              </li>
              <li className="hover:bg-slate-300 py-4 w-full text-center font-bold capitalize cursor-pointer transition-colors duration-300 ease-in-out">
                home
              </li>
              <li className="hover:bg-slate-300 py-4 w-full text-center font-bold capitalize cursor-pointer transition-colors duration-300 ease-in-out">
                home
              </li>
              <li className="hover:bg-slate-300 py-4 w-full text-center font-bold capitalize cursor-pointer transition-colors duration-300 ease-in-out">
                home
              </li>
              <li className="hover:bg-slate-300 py-4 w-full text-center font-bold capitalize cursor-pointer transition-colors duration-300 ease-in-out">
                home
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
