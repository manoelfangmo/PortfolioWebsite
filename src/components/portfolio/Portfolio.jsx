import React from 'react'
import './portfolio.scss'
import { useState } from 'react';
import comingSoon from "../../assets/comingSoon.jpg"
import arrow from "../../assets/arrow2.png"


export default function Portfolio() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const data = [
        {
            img: comingSoon,
            title: "Personal Training Website",
            skills: ["Javascript","HTML","SCSS","React"],
        },
        {
            img: comingSoon,
            title: "Mobile Application",
            skills: ["Javascript","HTML","SCSS","React"],
        },
        {
            img: comingSoon,
            title: "Scheduler Application",
            skills: ["Javascript","HTML","SCSS","React"],
        },
    ]

    const handleClick = (way) =>{
        way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : 2) :
        setCurrentSlide(currentSlide<data.length-1 ? currentSlide+1 : 0);
    }

    return (
        <div className="portfolio" id="portfolio">


            <div className="slider" style={{transform:`translateX(-${currentSlide*100}vw)`}}>
                {data.map((d) => (
                    <div className="container">
                        <div className="item">
                            
                            <img src={d.img} alt="" />

                            <div className="description">
                                <h2>{d.title}</h2>
                                <h3>Skills Used</h3>
                                {d.skills.map((x) =>(
                                <ul>
                            
                                    <li>{x}</li>
                                </ul>
                                ))}
                                <button>Open</button>
                            </div>
                        </div>
                    </div> ))
                }
            </div>
            <img src={arrow} alt="" className="arrow left" onClick={()=>handleClick("left")}/>
            <img src={arrow} alt="" className="arrow right" onClick={()=>handleClick()} />
            
        </div> 
    )
}
