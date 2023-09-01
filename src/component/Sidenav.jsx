import { React, useState } from "react";
import {
  AiOutlineContacts,
  AiOutlineHome,
  AiOutlineMail,
  AiOutlineMenu,
  AiOutlineProject,
  AiOutlineSetting,
} from "react-icons/ai";
import { Tooltip } from "@material-tailwind/react";

const Sidenav = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
    console.log("kntl");
  };
  return (
    <div>
      <AiOutlineMenu
        onClick={handleNav}
        className="absolute top-4 right-4 z-[99] md:hidden text-white text-2xl cursor-pointer"
      />
      {nav ? (
        <div className="fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20">
          <a
            href="#main"
            className="flex w-[75%] justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor:pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineHome size={20} />
            <span className="pl-4">Home</span>
          </a>
          <a href="#skill">
            <AiOutlineSetting size={20} />
            <span className="pl-4">Tech</span>
          </a>
          <a
            href="#project"
            className="flex w-[75%] justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor:pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineProject size={20} />
            <span className="pl-4">Project</span>
          </a>
          <a
            href="#contact"
            className="flex w-[75%] justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor:pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineMail size={20} />
            <span className="pl-4">Contact</span>
          </a>
        </div>
      ) : (
        <div className="md:block hidden fixed top-[25%] z-10">
          <div className="flex flex-col">
            <Tooltip
              content={
                <div className="w-20 h-7 items-center flex justify-center">
                  Home
                </div>
              }
              placement="right"
            >
              <a
                href="#main"
                className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
              >
                <AiOutlineHome size={20} />
              </a>
            </Tooltip>
            <Tooltip
              content={
                <div className="w-20 h-7 items-center flex justify-center">
                  Tech
                </div>
              }
              placement="right"
            >
              <a
                href="#skills"
                className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
              >
                <AiOutlineSetting size={20} />
              </a>
            </Tooltip>
            <Tooltip
              content={
                <div className="w-20 h-7 items-center flex justify-center">
                  Project
                </div>
              }
              placement="right"
            >
              <a
                href="#project"
                className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
              >
                <AiOutlineProject size={20} />
              </a>
            </Tooltip>
            <Tooltip
              content={
                <div className="w-20 h-7 items-center flex justify-center">
                  Contact
                </div>
              }
              placement="right"
            >
              <a
                href="#contact"
                className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
              >
                <AiOutlineMail size={20} />
              </a>
            </Tooltip>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidenav;
