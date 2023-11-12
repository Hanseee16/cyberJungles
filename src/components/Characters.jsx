import React from "react";
import Character1 from "../assets/img/characters/card (1).png";
import Character2 from "../assets/img/characters/card (2).png";
import Character3 from "../assets/img/characters/card (3).png";
import Character4 from "../assets/img/characters/card (4).png";
import Character5 from "../assets/img/characters/card (5).png";
import Character6 from "../assets/img/characters/card (6).png";

const ListCharacters = () => {
  const lists = [
    {
      imageUrl: Character1,
      heading: `Healer`,
      subheading: `She can use the ability "Restoration" to restore the health of herself or allied creatures.`,
      hoverHeading: `group-hover:text-[#D616A1]`,
    },
    {
      imageUrl: Character2,
      heading: `Hunter`,
      subheading: `He can place a "Trap" on the battlefield that deals damage to enemy creatures when they enter play or attack the Hunter.`,
      hoverHeading: `group-hover:text-[#4D098C]`,
    },
    {
      imageUrl: Character3,
      heading: `Shadow`,
      subheading: `She can use "Dark Shield" which protects her from magical attacks and absorbs some of the damage received.`,
      hoverHeading: `group-hover:text-[#590E7B]`,
    },
    {
      imageUrl: Character4,
      heading: `Pirate`,
      subheading: `He has the ability to "Steal", which allows him to steal a card from the opponent's deck or hand."`,
      hoverHeading: `group-hover:text-[#C300E3]`,
    },
    {
      imageUrl: Character5,
      heading: `Arrow`,
      subheading: `She can use "Slow Arrow", which slows down the movement of her opponents and weakens their attacks.`,
      hoverHeading: `group-hover:text-[#FF4AFF]`,
    },
    {
      imageUrl: Character6,
      heading: `Ghost`,
      subheading: `He can use "Phantom Curse" to place a curse on the opponent's cards,ucing their effectiveness when they are used.`,
      hoverHeading: `group-hover:text-[#7B149E]`,
    },
  ];

  return (
    <section id="characters">
      <div className="container max-w-full py-28 px-10 md:px-[2rem] lg:px-[5rem]">
        <h1 className="text-center text-white text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-widest drop-shadow-boom">
          C<span className="text-[#99449F]">h</span>ara<span className="text-[#99449F]">c</span>ters
        </h1>
        <div className="flex flex-wrap justify-between items-start mt-5 lg:mt-10">
          {lists.map((list, index) => (
            <div key={index} className="w-full md:w-[49%] lg:w-[33%] group mb-5 md:mb-7 lg:mb-10">
              <img src={list.imageUrl} alt="" className="w-full grayscale group-hover:grayscale-0 transition ease-in-out duration-300" />
              <div className="text-center text-white mt-3 md:mt-5 px-2 md:px-5">
                <h1 className={`text-2xl md:text-3xl font-bold text-[#ccc] uppercase mb-1 md:mb-3 duration-300 ${list.hoverHeading}`}>{list.heading}</h1>
                <p className="text-base md:text-lg lg:text-xl group-hover:text-[#b1b1b1] duration-300">{list.subheading}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ListCharacters;
