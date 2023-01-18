import React from "react";
import "./service.css";
import Heart from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";
import Resume from "./Kewal_Tamang_CV.pdf";

const Service = () => {
  return (
    <div className="services">
      {/* left sides */}
      <div className="awesome">
        <span>My Avesome</span>
        <span>Services</span>
        <span>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat
          laboriosam. <br />
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim dolore.
        </span>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right side */}
      <div className="cards">
        <div style={{ left: "25rem" }}>
          <Card
            emoji={Heart}
            heading={"Design"}
            detail={"Figma, Photoshop, Adobe xd"}
          />
        </div>
        <div style={{ top: "12rem", left: "2rem" }}>
          <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={"HTML, CSS, JavScript, React"}
          />
        </div>
        <div style={{ top: "19rem", left: "19rem" }}>
          <Card
            emoji={Humble}
            heading={"Developer"}
            detail={"Python, Django"}
          />
        </div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Service;
