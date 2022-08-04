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
            <FontAwesomeIcon icon={faBusinessTime} label={"oldWork"}/>
            I used to be an eCommercer marketer, but I wasn't growing in that role…
          </p>
          <p className="about__para">
            <FontAwesomeIcon icon={faCode} label={"code"}/>
            So I learned to code! Partially on my own and then with the help of an immersive program.
          </p>
          <p className="about__para">
            <FontAwesomeIcon icon={faLaptopCode} label={"newWork"}/>
            Now I work full-time as front-end web developer!
          </p>
          <p className="about__para">
            <FontAwesomeIcon icon={faBookOpen} label={"learning"}/>
            I'm still learning all the time and can't wait to see what new opportunities come my way!
          </p>
          <p className="about__para">
            <FontAwesomeIcon icon={faComments} label={"contact"}/>
            To learn more, or to contact me, click one of the icons below!
          </p>
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
