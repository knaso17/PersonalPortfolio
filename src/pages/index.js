import * as React from "react";
import "../styles/styles.scss";

import Header from "../components/Header";
import About from "../components/About";
import TechStack from "../components/TechStack";
import Projects from "../components/Projects";
import Recommendations from "../components/Recommendations";

const IndexPage = () => {
  return (
    <React.Fragment>
      <Header />
      <main>
        <title>Krista Naso's Portfolio</title>
        <h1>Krista Naso's Portfolio</h1>
        <About />
        <TechStack />
        <Projects />
      </main>
    </React.Fragment>
  )
}

export default IndexPage
