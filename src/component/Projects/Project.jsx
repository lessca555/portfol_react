import { React, useEffect } from "react";
import ProjectItems from "./ProjectItems";
import atma from "../../assets/project/atma.png";
import kopi from "../../assets/project/kopikirlah.png";
import film from "../../assets/project/film.png";
import stiga from "../../assets/project/stiga.png";
import cart from "../../assets/project/cc.png";
import mikrotik from "../../assets/project/mikrotik.png";
import "aos/dist/aos.css";
import Aos from "aos";

const Project = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div id="project" className="max-w-[1040p] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-black">Projects</h1>
      <p className="text-center pb-8 pt-3 capitalize">
        Some projects that I ever build
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <div data-aos="zoom-in-up">
          <ProjectItems
            img={atma}
            title="[Real Project] Company Profile PT Atma Innovasion Group"
            tech="Laravel, CSS, JS"
            url="https://atmainovasion.com/"
          />
        </div>
        <div data-aos="zoom-in-down">
          <ProjectItems
            img={kopi}
            title="Landing Page Coffee Shop"
            tech="HTML, CSS, JS"
            url="https://kopikirlah.netlify.app/"
          />
        </div>
        <div data-aos="zoom-in-up">
          <ProjectItems
            img={film}
            title="Newest Film using react fetch API"
            tech="reactjs, bootstrap"
            url="https://tianfilm.netlify.app/"
          />
        </div>
        <div data-aos="zoom-in-down">
          <ProjectItems
            img={stiga}
            title="[Cancelled Project] Company Profile SMKN 3 Surabaya"
            tech="reactjs, css"
            url="https://stiga-tian.netlify.app/"
          />
        </div>
        <div data-aos="zoom-in-up">
          <ProjectItems
            img={cart}
            title="Shopping Cart Counting App"
            tech="html, css, js"
            url="https://tianpricecount.netlify.app/"
          />
        </div>
        <div data-aos="zoom-in-down">
          <ProjectItems
            img={mikrotik}
            title="Setting hotspot network using Mikrotik"
            tech="winbox, mikrotik router"
            url="https://youtu.be/t_BD2Gks17M?si=PVX6ORktgE_oqIAV"
          />
        </div>
      </div>
    </div>
  );
};

export default Project;
