import React from 'react';
import { FiSearch } from "react-icons/fi";

function Hero() {
  return (
    <section>
    <div>
    <p className="text-dark-light mt-4 text-center md:text-xl lg:text-base xl:text-xl lg:text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
    <h3 className="font-roboto text-semibold text-center font-bold text-dark-soft md:text-5xl lg:text-4xl xl:text-5xl lg:text-left lg:max-w-[540px]">
          Join us and let the converstion begin!
        </h3>
        <div className="flex flex-col gap-y-2.5 mt-10 lg:mt-6 xl:mt-10 relative">
          <div className="relative">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6 text-[#959EAD]" />
            <input
              className="placeholder:font-bold font-semibold text-dark-soft placeholder:text-[#959EAD] rounded-lg pl-12 pr-3 w-full py-3 focus:outline-none shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] md:py-4"
              type="text"
              placeholder="Search article"
            />
        </div>
      </div>
  
    </div>
    <div>
      
    </div>
    </section>
  )
}

export default Hero