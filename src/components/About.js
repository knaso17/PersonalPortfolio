import React from "react";

import "../styles/styles.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faHand, faBusinessTime, faCode, faLaptopCode, faBookOpen, faComments} from '@fortawesome/free-solid-svg-icons';

export default function About() {
  return (
      <div className="about" id="about">
          <h2 className="about__header">About Me</h2>
          <p className="about__para">
            <FontAwesomeIcon icon={faHand} label={"hello"}/>
            Hi, I'm Krista! I'm a software engineer from the Chicago-land area.
          </p>
          <p className="about__para">
            <FontAwesomeIcon icon={faBusinessTime} label={"work"}/>
            I used to be an eCommercer marketer, but I wasn't growing in that role…
          </p>
          <p className="about__para">
            After learning the basics and really enjoying them, I decided to make a career transition to Software Engineering and completed the immersive Grace Hopper Program at Fullstack Academy. During that program I learned more about fullstack development including Node.js, PostgreSQL, React, Express and more. I'm now able to take what I've learned and apply it to real world problems and create beautiful websites.
          </p>
          <p className="about__para">To learn more, or to contact me, click one of the icons below!</p>
          <div className="about__link-container">
            <a href="https://www.linkedin.com/in/krista-naso/"
              target="_blank"
              className="about__link"
              >
                <FontAwesomeIcon icon={faLinkedin} size={"4x"} label={"LinkedIn"}/>
                LinkedIn
              </a>
              <a href="https://github.com/knaso17"
                target="_blank"
                className="about__link"
                >
                <FontAwesomeIcon icon={faGithub} size={"4x"} label={"GitHub"}/>
                GitHub
              </a>
            </div>
        </div>
  );
}
