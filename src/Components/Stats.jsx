import React from "react";

import { stats } from "../constants/constants";
import styles from "../Style";

const Stats = () => {
  return (
    <>
      <div className="statsContainer bg-blue-200 mb-6">
        <div className="startsWrapper bg-violet-400 w-[85%] m-auto flex justify-between flex-wrap items-center p-2 ">
          {stats.map((ele, ind) => (
            <div
              className={`statItem w-[33%] bg-blue-700 flex justify-center items-center ${
                ind === stats.length - 1 ? "border-r-0" : "border-r-2"
              } border-gray-400 `}
              key={ele.id}
            >
              <h4 className="bg-green-500 text-white pr-2 text-2xl md:text-3xl lg:text-4xl font-semibold ">
                {ele.value}
              </h4>
              <p className="  bg-blue-600 text-white text-sm md:text-lg lg:text-xl ">
                {" "}
                {ele.title}{" "}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Stats;
