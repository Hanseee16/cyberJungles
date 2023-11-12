import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY > 20) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
  }, []);

  return (
    <header>
      <nav className={`fixed w-full top-0 left-0 right-0 z-10 p-4 md:p-5 flex justify-center ${scrolling ? "bg-opacity-0 backdrop-blur-md shadow" : "bg-transparent"}`}>
        <ul className="flex items-center gap-5 lg:gap-x-16 uppercase md:text-lg font-extrabold text-white ">
          <li>
            <a href="#hero" className={`${scrolling ? "hover:text-[#D616A1]" : "hover:text-[#c9c9c9]"} md:tracking-wider duration-300 ease-in`}>
              home
            </a>
          </li>
          <li>
            <a href="#characters" className={`${scrolling ? "hover:text-[#D616A1]" : "hover:text-[#c9c9c9]"} md:tracking-wider duration-300 ease-in`}>
              characters
            </a>
          </li>
          <li>
            <a href="#history" className={`${scrolling ? "hover:text-[#D616A1]" : "hover:text-[#c9c9c9]"} md:tracking-wider duration-300 ease-in`}>
              history
            </a>
          </li>
          <li>
            <a href="#cards" className={`${scrolling ? "hover:text-[#D616A1]" : "hover:text-[#c9c9c9]"} md:tracking-wider duration-300 ease-in`}>
              cards
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
