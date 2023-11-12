import React from "react";
import Heading from "../assets/img/hero/New Era of Card Battles.svg";
import Subheading from "../assets/img/hero/CyberJungles.svg";
import CharacterHero from "../assets/img/hero/character-hero.svg";

const Hero = () => {
  return (
    <>
      <section id="hero">
        <div className="container max-w-full bg-hero h-screen flex flex-col justify-center items-center bg-cover bg-center bg-fixed px-4 lg:px-20 relative">
          <div className="row flex flex-wrap justify-center items-center">
            <div className="col w-full">
              <img src={Heading} alt="" className="w-full md:w-1/2 mx-auto mb-5 md:mb-10 px-5 md:px-0" />
              <img src={Subheading} alt="" className="w-full mx-auto" />
            </div>
            <div className="col w-full flex justify-center">
              <img src={CharacterHero} alt="" className="absolute bottom-0 w-full sm:w-[40%] md:w-[40%] lg:w-[30%]" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
