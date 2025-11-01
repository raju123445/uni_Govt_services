import React from "react";
import Banner from "/banner.png";

const banner = () => {
  return (
    <div className="max-w-screen-2xl container mx-auto px-7 md:px-20 px-4 flex flex-col md:flex-row gap-2.5">
      <div className="w-full md:w-1/2 md:my-20 my-5 md:order-1 order-2 mt-5">
        <div className = 'md:space-y-8 space-y-4 md:pt-15 '>
        <h1 className="text-4xl font-bold">
          Smart Financial Solutions for Sustainable{" "}
          <span className="text-pink-500">Growth and Success</span>{" "}
        </h1>
        <p>
        Empower your financial future with expert strategies for budgeting, investment, and wealth management. Achieve lasting success with customized tools and insights.
        </p>
        </div>
      </div>

      <div className="w-full md:w-1/2 rounded-2xl mt-0 order-1 ">
        <img src={Banner} alt="Banner" className ="md:h-100 h-70 md:mt-10 mt-10" />
      </div>
    </div>
  );
};

export default banner;
