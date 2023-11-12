import React from "react";
import Card1 from "../assets/img/card/img.png";
import Card2 from "../assets/img/card/img (1).png";
import Card3 from "../assets/img/card/img (2).png";
import Card4 from "../assets/img/card/img (3).png";
import Card5 from "../assets/img/card/img (4).png";
import Card6 from "../assets/img/card/img (5).png";
import Card7 from "../assets/img/card/img (6).png";
import Card8 from "../assets/img/card/img (7).png";
import Card9 from "../assets/img/card/img (8).png";
import Card10 from "../assets/img/card/img (9).png";
import Card11 from "../assets/img/card/img (10).png";
import Card12 from "../assets/img/card/img (11).png";
import Card13 from "../assets/img/card/img (12).png";
import Card14 from "../assets/img/card/img (13).png";
import Card15 from "../assets/img/card/img (14).png";
import Card16 from "../assets/img/card/img (15).png";
import Card17 from "../assets/img/card/img (16).png";
import Card18 from "../assets/img/card/img (17).png";
import Card19 from "../assets/img/card/img (18).png";
import Card20 from "../assets/img/card/img (19).png";
import Card21 from "../assets/img/card/img (20).png";
import Card22 from "../assets/img/card/img (21).png";
import Card23 from "../assets/img/card/img (22).png";
import Card24 from "../assets/img/card/img (23).png";
import Card25 from "../assets/img/card/img (24).png";
import Card26 from "../assets/img/card/img (25).png";
import Card27 from "../assets/img/card/img (26).png";
import Card28 from "../assets/img/card/img (27).png";
import Card29 from "../assets/img/card/img (28).png";
import Card30 from "../assets/img/card/img (29).png";
import Card31 from "../assets/img/card/img (30).png";
import Card32 from "../assets/img/card/img (31).png";

const ListCards = () => {
  const list = [
    { imageUrl: Card1 },
    { imageUrl: Card2 },
    { imageUrl: Card3 },
    { imageUrl: Card4 },
    { imageUrl: Card5 },
    { imageUrl: Card6 },
    { imageUrl: Card7 },
    { imageUrl: Card8 },
    { imageUrl: Card9 },
    { imageUrl: Card10 },
    { imageUrl: Card11 },
    { imageUrl: Card12 },
    { imageUrl: Card13 },
    { imageUrl: Card14 },
    { imageUrl: Card15 },
    { imageUrl: Card16 },
    { imageUrl: Card17 },
    { imageUrl: Card18 },
    { imageUrl: Card19 },
    { imageUrl: Card20 },
    { imageUrl: Card21 },
    { imageUrl: Card22 },
    { imageUrl: Card23 },
    { imageUrl: Card24 },
    { imageUrl: Card25 },
    { imageUrl: Card26 },
    { imageUrl: Card27 },
    { imageUrl: Card28 },
    { imageUrl: Card29 },
    { imageUrl: Card30 },
    { imageUrl: Card31 },
    { imageUrl: Card32 },
  ];

  return (
    <section id="cards">
      <div className="container max-w-full py-28 px-3 md:px-[2rem] lg:px-[5rem]">
        <h1 className="text-center text-white text-4xl lg:text-6xl font-extrabold uppercase tracking-wider">
          ca<span className="text-[#99449F]">r</span>ds
        </h1>
        <div className="flex flex-wrap justify-center items-center mt-5 lg:mt-10">
          {list.map((list, index) => (
            <div key={index} className="w-1/2 md:w-1/3 lg:w-1/4 group">
              <img src={list.imageUrl} alt="" className="w-full grayscale hover:grayscale-0 hover:scale-[1.1] transition ease-in-out duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ListCards;
