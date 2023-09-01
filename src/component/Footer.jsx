import React from "react";
import "../index.css";

const Footer = () => {
  return (
    <div>
      <footer className="flex text-gray-400 gap-5 font-bold flex-col">
        <div className="flex justify-center items-center gap-5 pt-3">
          <a href="#main">Home</a>
          <a href="#skill">Tech</a>
          <a href="#project">Project</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="flex justify-center items-center pb-2">
          <p>
            Created By : <span> </span>
            <a target="_blank" href="https://onlineportfol.netlify.app">
              Christian
            </a>
            <span> </span>| &copy; 2023
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
