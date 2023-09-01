import React from "react";
import loader from '../assets/favicon.png'
import "../loader.css";


const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader">
        <img src={loader} alt="Loader" />
      </div>
    </div>
  );
};

export default Loader;
