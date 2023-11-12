import React from "react";
import imageSatu from "../assets/img/about/img (1).png";
import imageDua from "../assets/img/about/img (2).png";
import imageTiga from "../assets/img/about/img.png";

const About = () => {
  return (
    <section id="about" className="relative">
      <div className="container max-w-full py-28 px-5 md:px-[2rem] lg:px-[13rem] ">
        <div className="w-full">
          <p className="text-center text-white text-base md:text-lg lg:text-xl">
            In a world where people used cybernetics to create perfect and deadly animal-machines, a terrible event occurred. Control over some of these creations was lost, and they began attacking humans, destroying everything in their
            path. In this dystopia, the surviving humans formed different factions and compete with each other using their cyber beasts in a card battle. The player must choose their faction and assemble a deck of cyber animals for battle.
          </p>
          <img src={imageSatu} alt="" className="absolute left-0 lg:left-16 top-5 lg:top-10" />
          <img src={imageSatu} alt="" className="absolute right-0 lg:right-16 top-5 lg:top-10" />
          <img src={imageDua} alt="" className="absolute right-0 lg:right-28 " />
          <img src={imageTiga} alt="" className="absolute left-0 lg:left-10 w-[150px] lg:w-[300px]" />
        </div>
      </div>
    </section>
  );
};

export default About;
