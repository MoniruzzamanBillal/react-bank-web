import React from "react";
import Styles from "./Style";

import "./index.css";

import { NavBar, Hero } from "./Components";

const App = () => {
  return (
    <>
      {/* <div className="MainContainer bg-primary w-full"> */}
      <div className="MainContainer bg-[#00040F] w-full ">
        <div className="mainContainerWrapper  w-[85%] m-auto">
          <NavBar />
        </div>
      </div>
    </>
  );
};

export default App;
