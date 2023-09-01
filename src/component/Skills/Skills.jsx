import SkillItems from "./SkillItems";
import react from "../../assets/skills/react.png";
import flutter from "../../assets/skills/flutter.png";
import tailwind from "../../assets/skills/tailwind.png";
import laravel from "../../assets/skills/laravel.png";
import bs from "../../assets/skills/bootstrap.png";
import Aos from "aos"
import 'aos/dist/aos.css'
import { React, useEffect } from "react";

const Skills = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div>
      <div
        id="skills"
        className="max-w-[1040p] m-auto md:pl-20 p-4 py-16"
        data-aos="fade-up"
      >
        <h1 className="text-4xl font-bold text-center text-black">Tech</h1>
        <p className="text-center pb-8 pt-3 capitalize">
          some technology that i usually use
        </p>
        <div className="grid lg:grid-cols-4 gap-12">
          <SkillItems img={react} desc="ReactJS" />
          <SkillItems img={flutter} desc="Flutter getX" />
          <SkillItems img={tailwind} desc="Tailwind CSS" />
          <SkillItems img={laravel} desc="Laravel" />
          <SkillItems img={bs} desc="Bootstrap" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
