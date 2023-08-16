import React from "react";

import { feedback } from "../constants/constants";
import styles from "../Style";
import FeedBackCard from "./FeedBackCard";

const Testimonials = () => {
  return (
    <>
      <div className="testimonialWrapper  mb-8 sm:mb-20 ">
        <div className="testimonialWrapper  w-[85%] m-auto ">
          {/* testimonial top section starts  */}

          <div className="testimonialTop mb-4 sm:mb-6 md:mb-8 flex justify-between items-center self-center   ">
            {/*  */}
            <div className="testimonialTopLeft w-[49%] md:w-[47%] lg:w-[44%] p-1 text-white text-3xl md:text-4xl lg:text-5xl ">
              <h1>What people are saying about us</h1>
            </div>
            {/*  */}

            {/*  */}
            <div className="testimonialTopRight  w-[50%] md:w-[45%] md:pr-6 lg:pr-8 text-[#FFFFFFB2] text-sm sm:text-base md:text-lg">
              <p>
                Everything you need to accept card payments and grow your
                business anywhere on the planet.
              </p>
            </div>

            {/*  */}
          </div>

          {/* testimonial top section ends  */}

          {/* testimonial bottom section starts  */}

          <div className="testimonialWrapper  mb-8 sm:mb-20">
            {/* ... */}
            <div className="testimonialBottom flex flex-col md:flex-row ">
              {feedback &&
                feedback.map((ele, ind) => (
                  <div className="itemsCard mb-6 md:mb-0 w-[86%] sm:w-[65%] md:w-[32%] m-auto  ">
                    <FeedBackCard {...ele} key={ind} />
                  </div>
                ))}
            </div>
            {/* ... */}
          </div>

          {/* testimonial bottom section ends  */}
        </div>
      </div>
    </>
  );
};

export default Testimonials;
