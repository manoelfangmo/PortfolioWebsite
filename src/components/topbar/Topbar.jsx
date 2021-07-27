import React from 'react'
import './topbar.scss'
import PersonIcon from '@material-ui/icons/Person';
import MailIcon from '@material-ui/icons/Mail';
export default function Topbar({menuOpen, setMenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo" >relentless.</a>
                    <div className="itemContainer">
                        <PersonIcon className="icon" />
                        <span>+2409590595</span>
                    </div>
                    <div className="itemContainer">
                        <MailIcon className="icon" />
                        <span>manoelfangmo@gmail.com</span>
                    </div>

                </div>
        
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)} >
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                    
                </div>

            </div>
            
        </div>
    )
}
