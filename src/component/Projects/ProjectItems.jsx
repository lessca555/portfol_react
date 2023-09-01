import React from "react";
import eyed from "../../assets/favicon.png";

const ProjectItems = ({ img, title, tech, url }) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-black">
      <img src={img} alt="/" className="rounded-xl group-hover:opacity-10 h-[300px] w=full" />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="lg:text-2xl text-xs font-bold text-white tracking-wider text-center">
          {title}
        </h3>
        <p className="uppercase lg:text-base text-xs pb-3 pt-2 text-white text-center">
          {tech}
        </p>
        <a target="_blank" href={url}>
          <p className="text-center p-2 rounded-lg bg-black text-white font-bold cursor-pointer lg:text-lg text-sm flex justify-center gap-1 items-center">
            DEMO
            <img src={eyed} alt="" className="w-[18px] h-[18px]" />
          </p>
        </a>
      </div>
    </div>
  );
};

export default ProjectItems;
