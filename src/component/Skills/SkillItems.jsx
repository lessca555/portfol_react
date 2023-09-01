import React from "react";

const SkillItems = ({ img, desc }) => {
  return (
    <div className="relative flex flex-col items-center justify-center h-auto w-full rounded-xl shadow-xl shadow-gray-400">
      <div className="bg-gray-800 p-3 w-full h-[400px] md:h-[150px] skill-ext">
        <img className="w-full h-full" src={img} alt="" />
      </div>
      <p className="font-bold py-1">{desc}</p>
    </div>
  );
};

export default SkillItems;
