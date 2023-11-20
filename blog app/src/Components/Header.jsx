import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import images from '../Services/Logo.png';
import { MdKeyboardArrowDown } from "react-icons/md";

// const navItemsInfo =[
//   { name: "Home", type: "link" },
//   { name: "Articles", type: "dropdoen", items: [Med, Tech, Plants] },
//   { name: "Write", type: "link" },
//   { name: "FAQs", type: "link" },
  
// ];

function Header() {
  const [navIsVisible, setNavIsVisible] = useState(false);

  const navVisibilityHandler = () => {
    setNavIsVisible((curState) => {
      return !curState;
    });
  };

  return (
    <section>
      <header className="container mx-auto px-5 flex justify-between py-4 items-center">
        <div className="">
          <img src={images} alt="logo" className="w-30 h-16" />
        </div>
        <div className="lg:hidden z-50">
          {navIsVisible ? (
            <AiOutlineClose
              className="w-6 h-6"
              onClick={navVisibilityHandler}
            />
          ) : (
            <AiOutlineMenu className="w-6 h-6" onClick={navVisibilityHandler} />
          )}
        </div>
        <div
          className={`${
            navIsVisible ? "right-0" : "-right-full"
          } transition-all duration-300 mt-[56px] lg:mt-0 bg-dark-hard lg:bg-transparent z-[49] flex flex-col w-full lg:w-auto justify-center lg:justify-end lg:flex-row fixed top-0 bottom-0 lg:static gap-x-9 items-center`}
        >
          <ul className="flex flex-col lg:flex-row gap-x-3 font-semibold">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Article</a>
            </li>
            <li>
              <a href="/">Write</a>
            </li>
            <li>
              <a href="/">FAQs</a>
            </li>
          </ul>
          <button className="border-2 border-blue-500 px-6 py-2 rounded-full text-blue-500 font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300">
            Sign in
          </button>
        </div>
      </header>
    </section>
  );
}

export default Header;
