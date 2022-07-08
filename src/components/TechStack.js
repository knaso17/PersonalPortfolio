import React from "react";

import "../styles/styles.scss";

import { StaticImage } from "gatsby-plugin-image";

export default function TechStack() {
  return (
    <div className="techContainer" id="tech">
      <h2 className="techContainer__header">
        Tech Stack
      </h2>
      <div className="techContainer__tech">
        <section className="tech__imgContainer">
          <StaticImage
            src="../images/tech/html5.png"
            alt="html icon"
            placeholder="blurred"
            layout="fixed"
            style={{
              height: "100px",
              width: "100px",
            }}
          />
        </section>
        <section className="tech__imgContainer">
          <StaticImage
            src="../images/tech/css3.png"
            alt="css icon"
            placeholder="blurred"
            layout="fixed"
            style={{
              height: "100px",
              width: "100px",
            }}
          />
        </section>{" "}
        <section className="tech__imgContainer">
          <StaticImage
            src="../images/tech/javascript.png"
            alt="js icon"
            placeholder="blurred"
            layout="fixed"
            style={{
              height: "100px",
              width: "100px",
            }}
          />{" "}
        </section>
        <section className="tech__imgContainer">
          <StaticImage
            src="../images/tech/react.png"
            alt="react icon"
            placeholder="blurred"
            layout="fixed"
            style={{
              height: "100px",
              width: "100px",
            }}
          />
        </section>
        <section className="tech__imgContainer">
          <StaticImage
            src="../images/tech/expressjs-icon.png"
            alt="express icon"
            placeholder="blurred"
            layout="fixed"
            style={{
              height: "100px",
              width: "100px",
            }}
          />
        </section>
        <section className="tech__imgContainer">
          <StaticImage
            src="../images/tech/redux.png"
            alt="redux icon"
            placeholder="blurred"
            layout="fixed"
            style={{
              height: "100px",
              width: "100px",
            }}
          />
        </section>
        <section className="tech__imgContainer">
          <StaticImage
            src="../images/tech/postgresql.png"
            alt="postgres icon"
            placeholder="blurred"
            layout="fixed"
            style={{
              height: "100px",
              width: "100px",
            }}
          />
        </section>
        <section className="tech__imgContainer">
          <StaticImage
            src="../images/tech/github.png"
            alt="github icon"
            placeholder="blurred"
            layout="fixed"
            style={{
              height: "100px",
              width: "100px",
            }}
          />
        </section>
        <section className="tech__imgContainer">
          <StaticImage
            src="../images/tech/nodejs.png"
            alt="node icon"
            placeholder="blurred"
            layout="fixed"
            style={{
              height: "100px",
              width: "100px",
            }}
          />
        </section>
        <section className="tech__imgContainer">
          <StaticImage
            src="../images/tech/sass-icon.png"
            alt="sass icon"
            placeholder="blurred"
            layout="fixed"
            style={{
              height: "100px",
              width: "100px",
            }}
          />
        </section>
      </div>
    </div>
  );
}
