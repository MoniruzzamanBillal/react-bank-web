import React from "react";

import { feedback } from "../constants/constants";
import styles from "../Style";
import FeedBackCard from "./FeedBackCard";

const Testimonials = () => {
  return (
    <>
      <div className="testimonialWrapper bg-violet-500 mb-8 sm:mb-20  ">
        <div className="testimonialWrapper bg-green-500 w-[85%] m-auto  ">
          {/* testimonial top section starts  */}

          <div className="testimonialTop mb-8 flex justify-between items-center self-center   ">
            {/*  */}
            <div className="testimonialTopLeft bg-red-600 w-[38%] p-1 text-white text-5xl ">
              <h1>What people are saying about us</h1>
            </div>
            {/*  */}

            {/*  */}
            <div className="testimonialTopRight bg-blue-600 w-[44%] pr-8 text-[#FFFFFFB2] text-lg ">
              <p>
                Everything you need to accept card payments and grow your
                business anywhere on the planet.
              </p>
            </div>
            {/*  */}

            {/*  */}
          </div>

          {/* testimonial top section ends  */}

          {/* testimonial bottom section starts  */}

          <div className="testimonialWrapper bg-violet-500 mb-8 sm:mb-20">
            {/* ... */}
            <div className="testimonialBottom flex flex-col md:flex-row bg-blue-700 ">
              {feedback &&
                feedback.map((ele, ind) => (
                  <div className="itemsCard mb-6 md:mb-0 w-[68%] md:w-[32%] m-auto bg-red-700 ">
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
