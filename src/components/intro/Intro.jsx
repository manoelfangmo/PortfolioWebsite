import React from 'react'
import "./intro.scss"
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { init } from 'ityped'
import { useEffect, useRef } from 'react';

export default function Intro() {
    const textRef = useRef();
    useEffect(()=>{
        init(textRef.current, { showCursor: true,
            backDelay: 1500,
            backSpeed: 60, 
            strings: ['Developer', 'Personal Trainer','Math Tutor'],});
    },[])
    return (
        <div className="intro" id="intro" >
            <div className="left">
                <div className="imageContainer">
                    <img src="assets/man.jpg" alt=""/>
                </div>
            </div>
            <div className="right">

                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Manoel Fangmo</h1>
                    <h3>Freelance <span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                    <KeyboardArrowDownIcon className="icon" fontSize="large" /> 
                </a>
            </div>
        </div>
    )
}
