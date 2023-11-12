import React from "react";
import ImageSatu from "../assets/img/download/img.svg";
import ImageDua from "../assets/img/download/img (1).svg";
import VectorSatu from "../assets/img/download/Vector 1.svg";
import VectorDua from "../assets/img/download/Vector.svg";
import VectorTiga from "../assets/img/download/Vector (1).svg";

const Download = () => {
  return (
    <section id="download">
      <div className="container max-w-full">
        <div className="row flex flex-wrap justify-between items-center relative">
          <div className="w-[50%]">
            <img src={ImageSatu} alt="" />
          </div>
          <div className="w-[50%]">
            <img src={ImageDua} alt="" />
          </div>
          <div class="w-[60%] flex flex-col justify-center absolute left-[20%]">
            <h1 className="text-6xl text-white text-center font-semibold uppercase mb-10">Fight your opponent in a fight for life and death</h1>
            <div className="relative mx-auto">
              <a href="" className="text-center text-white text-2xl bg-[#99449F] mx-auto rounded-lg capitalize py-5 px-7">
                download a game
              </a>
              <img src={VectorSatu} className="absolute -top-8 -left-1" />
              <img src={VectorDua} className="absolute -top-8" />
              <img src={VectorTiga} className="absolute -top-7 -right-2" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
