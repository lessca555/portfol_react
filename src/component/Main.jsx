import React from "react";
import back from "../assets/img/back.jpg";
import { TypeAnimation } from "react-type-animation";
import { FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Main = () => {
  return (
    <div id="main">
      <img
        src={back}
        alt=""
        className="w-full h-screen object-cover object-left scale-x-[-1]"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-black/50">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center items-start p-2">
          <h1 className="sm:text-5xl text-4xl text-gray-400 font-bold">
            Hello, it's me Christian
          </h1>
          <h2 className="flex sm:text-2xl text-1xl pt-4 text-gray-400 p-1">
            I'm a
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "FrontEnd Web Developer",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Network Support",
                1000,
                "Tech Enthusiast",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{
                fontSize: "1em",
                display: "inline-block",
                paddingLeft: "5px",
              }}
              repeat={Infinity}
            />
          </h2>
          <div className="flex justify-start pt-6 gap-3 max-w-[200px] w-full text-gray-400 ml-1">
            <a target="_blank" href="https://github.com/lessca555">
              <FaGithub className="cursor-pointer" size={20} />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/christian-samuel-seputra-094074140"
            >
              <FaLinkedinIn className="cursor-pointer" size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
