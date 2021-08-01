import React from 'react'
import "./intro.scss"
import { init } from 'ityped'
import { useEffect, useRef } from 'react';
import ParticleBackground from '../particles/ParticleBackground';




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
                <div className="background">
                <ParticleBackground /> 
                </div>
                <div className="wrapper">
                    <h1>Manoel Fangmo</h1>
                    <h2><span ref={textRef}></span></h2>
                </div>
        </div>
    )
}
