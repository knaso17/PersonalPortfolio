import * as React from "react";
import "../styles/styles.scss";

import About from "../components/About";
import Header from "../components/Header";

const IndexPage = () => {
  return (
    <React.Fragment>
      <Header />
      <main >
        <title>Krista Naso's Portfolio</title>
        <h1>Krista Naso's Portfolio</h1>
        <About/>
      </main>
    </React.Fragment>
  )
}

export default IndexPage
