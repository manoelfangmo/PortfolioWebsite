import React from 'react'
import './portfolio.scss'
import { useState } from 'react';


export default function Portfolio() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const data = [
        {
            img: "assets/comingSoon.jpg",
            title: "Personal Training Website",
            skills: ["Javascript","HTML","SCSS","React"],
        },
        {
            img: "assets/comingSoon.jpg",
            title: "Mobile Application",
            skills: ["Javascript","HTML","SCSS","React"],
        },
        {
            img: "assets/comingSoon.jpg",
            title: "Scheduler Application",
            skills: ["Javascript","HTML","SCSS","React"],
        },
    ]

    const handleClick = (way) =>{
        way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : 2) :
        setCurrentSlide(currentSlide<data.length-1 ? currentSlide+1 : 0);
    }

    return (
        <div className="works" id="works">


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
            <img src="assets/arrow.png" alt="" className="arrow left" onClick={()=>handleClick("left")}/>
            <img src="assets/arrow.png" alt="" className="arrow right" onClick={()=>handleClick()} />
            
        </div> 
    )
}
