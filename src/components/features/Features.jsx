import React from "react";
import { book, clock, live, graduate, ads } from "../../assets";

const Features = () => {
  return (
    <>
      <div className="mt-20">
        <h1 className="text-white font-semibold lg:text-[42px] sm:text-[36px] xs:text-[24px] text-[22px]  leading-snug">
          Access curated courses worth <br />
          <span className="">₹ 18,500</span> at just <span>₹ 99 </span>
          per year!
        </h1>
      </div>
      <div className="flex items-center mt-10">
        <img className="h-9 w-9 mr-4" src={book} alt="book" />
        <p className="ml-4 text-white font-semibold text-[24px]">
          <span className="text-[#0096FF]">100+</span> Job relevant courses
        </p>
      </div>
      <div className="flex items-center mt-10">
        <img className="h-9 w-9 mr-4" src={clock} alt="book" />
        <p className="ml-4 text-white font-semibold text-[24px]">
          <span className="text-[#0096FF]">20,000+</span> Hours of content
        </p>
      </div>
      <div className="flex items-center mt-10">
        <img className="h-9 w-9 mr-4" src={live} alt="book" />
        <p className="ml-4 text-white font-semibold text-[24px]">
          <span className="text-[#0096FF]">Exclusive</span> webinar access
        </p>
      </div>
      <div className="flex items-center mt-10">
        <img className="h-9 w-9 mr-4" src={graduate} alt="book" />
        <p className="ml-4 text-white font-semibold text-[24px]">
          Scholarship worth <span className="text-[#0096FF]">₹94,500</span>
        </p>
      </div>
      <div className="flex items-center mt-10">
        <img className="h-9 w-9 mr-4" src={ads} alt="book" />
        <p className="ml-4 text-white font-semibold text-[24px]">
          <span className="text-[#0096FF]">Ad Free </span>
          learning experience
        </p>
      </div>
    </>
  );
};

export default Features;
