import React from "react";

import "../styles/styles.scss";

export default function About() {
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
              <p className="header_logoText">Krista Naso</p>
            </div>
          <nav className="header__nav">
            <a href="#top" className="nav__link">Home</a>
            <a href="#about" className="nav__link">About</a>
            <a href="#tech" className="nav__link">Tech</a>
            <a href="#projects" className="nav__link">Projects</a>
            <a href="#recs" className="nav__link">Recs</a>
          </nav>
      </header>
  );
}
