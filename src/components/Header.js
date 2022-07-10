import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import "../styles/styles.scss";

export default function Header () {
  return (
    <header className="header">
          <div className="header__logo" >
            <section className="header__imgContainer">
              <StaticImage
                src="../images/KNLogo.png"
                alt="KN logo"
                placeholder="blurred"
                layout="fixed"
                style={{
                  width: "100px",
                  height: "100px",
                }}
              />
              </section>
              <p className="header__logoText">Krista Naso</p>
            </div>
          <nav className="header__nav">
            <ul className="nav__ul">
              <li className="nav__item">
                <a href="#top"
                  className="nav__link">
                  Home
                  </a>
              </li>
              <li className="nav__item">
                <a href="#about"
                   className="nav__link">
                  About
                </a>
              </li>
              <li className="nav__item">
                <a href="#tech"
                   className="nav__link">
                  Tech
                </a>
              </li>
              <li className="nav__item">
                <a href="#projects"
                   className="nav__link">
                  Projects
                </a>
              </li>
              <li className="nav__item">
                <a href="#recs"
                   className="nav__link">
                  Recs
                </a>
              </li>
            </ul>
          </nav>
      </header>
  );
}
