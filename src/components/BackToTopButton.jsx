import React, { useState, useEffect } from "react";
import vectorSatu from "../assets/img/backtotop/Vector.svg";
import vectorDua from "../assets/img/backtotop/Vector (1).svg";
import "boxicons";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Membuat event listener untuk mendeteksi pergerakan scroll
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Membersihkan event listener saat komponen unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <button
      onClick={scrollToTop}
      className={`${
        isVisible ? "block" : "hidden"
      } fixed bottom-2 md:bottom-5 right-2 md:right-5 h-10 md:h-10 w-10 md:w-10 bg-[#99449F] text-white rounded-lg shadow-lg hover:bg-[#79347e] focus:outline-none focus:ring focus:ring-transparent transition duration-300 ease-in-out `}
    >
      <span className="flex justify-center items-center relative">
        <img src={vectorSatu} alt="" className="absolute -top-2 left-0" />
        <img src={vectorDua} alt="" className="absolute -bottom-2" />
        <box-icon name="up-arrow-alt" color="white"></box-icon>
      </span>
    </button>
  );
};

export default BackToTopButton;
