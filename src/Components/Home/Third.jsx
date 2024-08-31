import React from "react";
import arrow from "../../assets/images/button-style.png";
import r1 from "../../assets/images/rr1.png";
import r2 from "../../assets/images/rr2.png";
import r3 from "../../assets/images/rr3.png";
import r4 from "../../assets/images/rr4.png";
import n1 from "../../assets/images/n1.png";
import n2 from "../../assets/images/n2.png";
import n3 from "../../assets/images/n3.png";
import n4 from "../../assets/images/n4.png";


const Third = () => {
  return (
    <div className="bg-primary text-white ">
      {/* First Section */}
      <div className="">
        <div className="flex items-center justify-center space-x-4 mb-4 p-8 lg:px-36">
          <h3 className="text-lg lg:text-2xl">Our Core Values</h3>
          <img src={arrow} alt="arrow" />
        </div>

        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-6 p-8 lg:px-36">
          {/* Core Values Images */}
          <div className="relative flex items-center justify-center">
            <img src={r1} alt="Wisdom" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-red-500 opacity-50" />
            <span className="absolute inset-0 flex items-center justify-center text-white text-sm lg:text-2xl">
              Wisdom
            </span>
          </div>

          <div className="relative flex items-center justify-center">
            <img
              src={r2}
              alt="Creativity"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-green-500 opacity-50" />
            <span className="absolute inset-0 flex items-center justify-center text-white text-sm lg:text-2xl">
              Creativity
            </span>
          </div>

          <div className="relative flex items-center justify-center">
            <img
              src={r3}
              alt="Integrity"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-blue-500 opacity-50" />
            <span className="absolute inset-0 flex items-center justify-center text-white text-sm lg:text-2xl">
              Integrity
            </span>
          </div>

          <div className="relative flex items-center justify-center">
            <img src={r4} alt="Courage" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-yellow-500 opacity-50" />
            <span className="absolute inset-0 flex items-center justify-center text-white text-sm lg:text-2xl">
              Courage
            </span>
          </div>
        </div>

        <div className="flex items-center justify-center lg:px-40 lg:py-4">
          <div className="bg-red-500 w-1/4 h-[2px]"></div>
          <div className="bg-green-500 w-1/4 h-[2px]"></div>
          <div className="bg-blue-500 w-1/4 h-[2px]"></div>
          <div className="bg-yellow-500 w-1/4 h-[2px]"></div>
        </div>

        <div className="flex lg:flex-row flex-col lg:py-8  ">
          <div className="flex w-full">
            <div className="relative flex items-center justify-center w-1/2 h-[300px]">
              <img src={n1} alt="N1" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gray-500 opacity-50" />
            </div>

            <div className="relative flex items-center justify-center w-1/2 h-[300px]">
              <img src={n2} alt="N2" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-purple-500 opacity-50" />
            </div>
          </div>
          <div className="flex w-full">
            <div className="relative flex items-center justify-center w-1/2 h-[300px]">
              <img src={n3} alt="N3" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-orange-500 opacity-50" />
            </div>

            <div className="relative flex items-center justify-center w-1/2 h-[300px]">
              <img src={n4} alt="N4" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-teal-500 opacity-50" />
            </div>
          </div>
        </div>
      </div>

      {/* Second Section */}
     


    </div>
  );
};

export default Third;
