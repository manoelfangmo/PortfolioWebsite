import React from 'react'
import './aboutMe.scss'
import man from "../../assets/man.jpg"
import resume from "../../assets/Fangmo, Manoel Resume.pdf"



export default function AboutMe() {
        
    return (
            <div className="aboutMe" id="aboutMe" >
                    
                <img src={man} alt=""/>           
                
                <div className="items">
    
                    <div className="wrapper">
                        <p> <span>G</span>reetings, I am Junior Information Systems major at the University of Maryland. 
                        I can described as a jack of all trades with experience in software development, 
                        teaching, and fitness. However, one thing I take pride in is being a natural problem solver. Displayed 
                        through being a self thought devloper, walking students through math problems, and helping clients reach their
                        fitness goals. I am alo a very curious indivdual who enjoys acquiring knowledge and discussing topics especially 
                        in the fields of computer science, fitness and philosophy.</p>
                        <a href={resume} download ><button>Resume</button></a>
                    </div>
                </div>
            </div>
    
    )
}
