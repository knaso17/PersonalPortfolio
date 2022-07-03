import * as React from "react"
import "../styles/styles.scss"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const IndexPage = () => {
  return (
    <main >
      <title>Krista Naso's Portfolio</title>
      <h1>Krista Naso's Portfolio</h1>
      <div className="about">
          <h2 className="about__header">About Me</h2>
          <div className="about__border"></div>
          <p className="about__para">
            Hi, I'm Krista! I live in the Chicago Area and currently work as a Front End Developer.
          </p>
          <p className="about__para">
            I previously worked in eCommerce marketing after graduating from the University of Illinois at Chicago. I worked on the vendor side of many major retailers, but I wasn't challenged enough by simply uploading products, tracking their progress, and making updates as needed. I decided to revisit my minor in Management Information Systems and start learning CSS, HTML, and JavaScript.
          </p>
          <p className="about__para">
            After learning the basics and really enjoying them, I decided to make a career transition to Software Engineering and completed the immersive Grace Hopper Program at Fullstack Academy. During that program I learned more about fullstack development including Node.js, PostgreSQL, React, Express and more. I'm now able to take what I've learned and apply it to real world problems and create beautiful websites.
          </p>
          <p className="about__para">To learn more, or to contact me, click one of the icons below!</p>
          <a href="https://www.linkedin.com/in/krista-naso/"
             target="_blank"
             className="about__link"
             >
              <FontAwesomeIcon icon={faLinkedin} size={"4x"}/>
              <br/>LinkedIn
            </a>
            <span className="about__icon-spacing"></span>
            <a href="https://github.com/knaso17"
               target="_blank"
               className="about__link"
               >
              <FontAwesomeIcon icon={faGithub} size={"4x"}/>
              <br/>GitHub
            </a>
        </div>
    </main>
  )
}

export default IndexPage
