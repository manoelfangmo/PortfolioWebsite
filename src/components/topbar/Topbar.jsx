import React from "react";
import "./topbar.scss";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            relentless.
          </a>
          <div className="itemContainer">
            <LinkedInIcon className="icon" />
            <span>
              <a href="https://www.linkedin.com/in/manoel-fangmo/">Linkedin</a>
            </span>
          </div>
          <div className="itemContainer">
            <GitHubIcon className="icon" />
            <span>
              <a href="https://github.com/manoelfangmo?tab=repositories">
                GitHub
              </a>
            </span>
          </div>
        </div>

        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
