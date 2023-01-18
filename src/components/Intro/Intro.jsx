import React from "react";
import "./intro.css";
import Github from "../../img/github.png";
import Linkdin from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";

const Intro = () => {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hy! I Am</span>
          <span>Kewal Tamang</span>
          <span>
            Hi, I'm Kewal, and I graduated from the Asia e University of
            Malaysia in 2023 with a degree in Informationn and Communication
            Technology. So, I'm a Frontend Developer with experience in web
            designing and producing the Quality work.
          </span>
          <div
            className="blur"
            style={{
              background: "#C1F5FF",
              top: "17rem",
              width: "21rem",
              height: "11rem",
            }}
          ></div>
        </div>
        <button className="button i-button">Hire me</button>
        <div className="i-icons">
          <img src={Github} alt="" />
          <a href="https://www.linkedin.com/in/kewal-tamang-5758521a6/">
            <img src={Linkdin} alt="" />
          </a>
          <a href="https://www.instagram.com/_k3wal/">
            {" "}
            <img src={Instagram} alt="" />
          </a>
        </div>
      </div>
      <div className="i-right">
        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
      </div>
    </div>
  );
};

export default Intro;
