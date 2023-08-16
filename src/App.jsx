import React from "react";
import Styles from "./Style";

import "./index.css";

import {
  NavBar,
  Hero,
  Stats,
  Business,
  Billing,
  CardDeal,
  Testimonials,
} from "./Components";
import FeedBackCard from "./Components/FeedBackCard";

const App = () => {
  return (
    <>
      {/* <div className="MainContainer bg-primary bg-[#00040F] w-full"> */}
      <div className="MainContainer  bg-[#00040F] w-full ">
        <div className="mainContainerWrapper relative">
          <NavBar />
          <Hero />
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
        </div>
      </div>
    </>
  );
};

export default App;
