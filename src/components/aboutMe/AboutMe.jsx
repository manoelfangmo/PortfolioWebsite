import React from "react";
import "./aboutMe.scss";
import man from "../../assets/man.jpg";
import resume from "../../assets/Fangmo, Manoel Resume.pdf";

export default function AboutMe() {
  return (
    <div className="aboutMe" id="aboutMe">
      <img src={man} alt="" />

      <div className="items">
        <div className="wrapper">
          <p>
            <span>G</span>reetings, I am an aspiring software developer. I can
            described as a jack of all trades with experience in software
            development, teaching, and fitness. I am driven by curiosity and
            enjoy solving problems wether its thorugh coding on an IDE, walking
            students through math problems in a classroom, or helping clients
            reach their fitness goals at a gym. Contact me below if I can be of
            service to you.
          </p>
          <blockquote>
            <p>"If I don't know it, I will love to learn it" </p>
          </blockquote>
          <a href={resume} download>
            <button>Resume</button>
          </a>
        </div>
      </div>
    </div>
  );
}
