import React from "react";
import "./portfolio.scss";
import { useState } from "react";
import comingSoon from "../../assets/comingSoon.jpg";
import arrow from "../../assets/arrow.png";
import clearCellGame from "../../assets/clearCellGame.png";

export default function Portfolio() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      img: clearCellGame,
      title: "Clear Cell Game",
      skills: ["Javascript", "HTML", "SCSS", "React"],
      link: "https://manoelfangmo.github.io/clearCellGame/",
    },
    {
      img: comingSoon,
      title: "Mobile Application",
      skills: ["Javascript", "HTML", "SCSS", "React"],
      link: "",
    },
    {
      img: comingSoon,
      title: "Scheduler Application",
      skills: ["Javascript", "HTML", "SCSS", "React"],
      link: "",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="portfolio" id="portfolio">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <img src={d.img} alt="" />

              <div className="description">
                <h2>{d.title}</h2>
                <h3>Skills Used</h3>
                <ul>
                  {d.skills.map((x) => (
                    <li>{x}</li>
                  ))}
                </ul>

                <button>
                  <a href={d.link}>Open</a>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src={arrow}
        alt=""
        className="arrow left"
        onClick={() => handleClick("left")}
      />
      <img
        src={arrow}
        alt=""
        className="arrow right"
        onClick={() => handleClick()}
      />
    </div>
  );
}
