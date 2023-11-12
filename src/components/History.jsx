import React from "react";
import historySatu from "../assets/img/history/section.svg";
import historyDua from "../assets/img/history/section (1).svg";
import historyTiga from "../assets/img/history/section (2).svg";
import historyEmpat from "../assets/img/history/section (3).svg";

const History = () => {
  return (
    <section id="history">
      <div className="container max-w-full py-28 px-10 md:px-[2rem] lg:px-[5rem]">
        <h1 className="text-center text-white text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-widest drop-shadow-boom">
          hi<span className="text-[#99449F]">s</span>tor<span className="text-[#99449F]">y</span>
        </h1>
        <div className="flex flex-wrap justify-between items-center mt-5 lg:mt-10 text-white text-lg font-light">
          {/* history 1 */}
          <div className="w-full lg:w-[49%]">
            <img src={historySatu} alt="" />
          </div>
          <div className="w-full lg:w-[49%] ">
            <p className="mb-2">
              In 2060, a group of scientists began conducting secret experiments on genetically modifying animals in an underground laboratory. They used cutting-edge technologies and computer programs to create the perfect combination of
              animal genes and mechanics, allowing them to create unique cyber-creatures.
            </p>
            <p className="mb-2">
              Soon, the scientists began applying these technologies to more dangerous animals such as predators and reptiles in the hope of creating the perfect weapon for military purposes. However, the experiments got out of control and
              the animals began exhibiting extraordinary aggression and strength. They started attacking the laboratory personnel and breaking out.
            </p>
            <p className="mb-2">
              Nevertheless, the scientists were not going to stop, and they continued their experiments in an attempt to create even stronger cyber-monsters. They continued to modify the animals' genes by adding new, more powerful
              mechanisms, and subjecting them to more rigorous training and testing.
            </p>
          </div>

          {/* history 2 */}
          <div className="w-full lg:w-[49%]">
            <p className="mb-2">
              The world after the invasion of the cyber-animals looked terrifying. Cities were destroyed, leaving only ruins and ash. Pollution and chemical emissions became the norm, and the quality of air and water became unfit for human
              life.
            </p>
            <p className="mb-2">
              Where once there was life and movement, now there was emptiness and silence. Animals and insects were displaced by the cyber-animals, leaving the planet devoid of nature and living beings. The cyber-animals, once created to
              assist humans, had now become a threat to their survival.
            </p>
            <p className="mb-2">Humanity was forced to start over. They began to restore and recreate what had been destroyed, and to seek new ways of survival in this new, devastated world.</p>
          </div>
          <div className="w-full lg:w-[49%]">
            <img src={historyDua} alt="" />
          </div>

          {/* history 3 */}
          <div className="w-full lg:w-[49%]">
            <img src={historyTiga} alt="" />
          </div>
          <div className="w-full lg:w-[49%]">
            <p className="mb-2">
              Despite the devastation caused by the cyber-animals, pockets of humanity survived by banding together in factions. These groups pooled their resources and knowledge to fend off the cyber-threat, while also seeking to harness
              the power of the cyber-animals for their own purposes.
            </p>
          </div>

          {/* history 2 */}
          <div className="w-full lg:w-[49%]">
            <p className="mb-2">
              Some factions saw the cyber-animals as valuable assets and began to use them as their own army. They modified the cyber-animals to enhance their combat effectiveness and used them in battles against other factions that
              threatened their survival.
            </p>
            <p className="mb-2">
              As the cyber-animals continued to spread across the planet, different factions fought against each other for control over them. Some factions collaborated to destroy them, while others used the cyber-animals for their own
              personal gain.
            </p>
          </div>
          <div className="w-full lg:w-[49%]">
            <img src={historyEmpat} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
