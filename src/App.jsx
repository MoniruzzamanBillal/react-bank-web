import React from "react";
import Styles from "./Style";

import "./index.css";

import { NavBar, Hero, Stats } from "./Components";

const App = () => {
  return (
    <>
      {/* <div className="MainContainer bg-primary bg-[#00040F] w-full"> */}
      <div className="MainContainer  bg-[#00040F] w-full ">
        <div className="mainContainerWrapper relative">
          <NavBar />
          <Hero />

          <Stats />
        </div>
      </div>
    </>
  );
};

export default App;
