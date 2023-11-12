import React from "react";
import VectorSatu from "../assets/img/footer/Vector.svg";
import VectorDua from "../assets/img/footer/Vector (2).svg";
import VectorTiga from "../assets/img/footer/Vector (3).svg";
import VectorEmpat from "../assets/img/footer/Vector (5).svg";
// import "boxicons";

const Footer = () => {
  return (
    <footer>
      <div className="container max-w-full px-5 md:px-0 py-5">
        <div className="row flex flex-wrap justify-around items-end">
          <div className="col text-white">
            <span className="text-xl text-center">New Era of Card Battles</span>
            <h1 className="uppercase text-3xl font-semibold mt-2">CyberJungles</h1>
          </div>
          <div className="col text-white">
            <span className="text-lg">
              © Copyright 2023 by <span className="text-[#99449F] font-bold">Farhan Kamil</span>
            </span>
          </div>
          <div className="col">
            <ul className="flex items-center gap-2">
              <li>
                <a href="" className="bg-[#99449F] hover:bg-[#7b3580] shadow-xl duration-200 ease-in p-2 rounded-lg flex justify-center items-center relative">
                  <img src={VectorSatu} alt="" className="absolute -top-1 left-0 w-5" />
                  <box-icon type="logo" name="instagram" color="white"></box-icon>
                </a>
              </li>
              <li>
                <a href="" className="bg-[#99449F] hover:bg-[#7b3580] shadow-xl duration-200 ease-in p-2 rounded-lg flex justify-center items-center relative">
                  <img src={VectorDua} alt="" className="absolute -top-1 -right-1 w-4" />
                  <box-icon type="logo" name="facebook" color="white"></box-icon>
                </a>
              </li>
              <li>
                <a href="" className="bg-[#99449F] hover:bg-[#7b3580] shadow-xl duration-200 ease-in p-2 rounded-lg flex justify-center items-center relative">
                  <img src={VectorTiga} alt="" className="absolute -bottom-0 -left-1 w-4" />
                  <box-icon type="logo" name="tiktok" color="white"></box-icon>
                </a>
              </li>
              <li>
                <a href="" className="bg-[#99449F] hover:bg-[#7b3580] shadow-xl duration-200 ease-in p-2 rounded-lg flex justify-center items-center relative">
                  <img src={VectorEmpat} alt="" className="absolute -bottom-2 right-0 w-5" />
                  <box-icon type="logo" name="youtube" color="white"></box-icon>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
