import React from "react";
import img1 from "../../assets/images/Asset19.png";
import img2 from "../../assets/images/Asset23.png";
import img3 from "../../assets/images/Asset31.png";
import img4 from "../../assets/images/Artboard3.png";
import img12 from "../../assets/images/56arrow.jpg";

import img6 from "../../assets/images/Asset21.png";
import img7 from "../../assets/images/Asset25.png";
import img8 from "../../assets/images/Asset26.png";
import img9 from "../../assets/images/Artboard6.png";
import img10 from "../../assets/images/Artboard14.png";
import img11 from "../../assets/images/Artboard11.png";
import lines from "../../assets/images/lines.png";
import page1Content from "../../content/Page1cont";

const Sec33 = ({ content }) => {
  // const content = page1Content.sec3;

  return (
    <div className="bg-primary relative text-white">
      {/* Section 1 */}
      <div className="relative">
        {/* Left Image */}
        <div className="absolute left-0 top-72 w-1/4 h-full items-center justify-center hidden lg:block">
          <img src={img10} alt="Left Side Image" className="w-full h-auto" />
        </div>

        {/* Main Content */}
        <div className="flex flex-col items-center justify-center pt-8 px-4 sm:px-8 lg:px-12 relative">
          <img
            src={img1}
            alt="Discovery Workshop"
            className="w-full sm:w-2/3 lg:w-1/2"
          />
          <div className="flex flex-col lg:flex-row items-start px-2 lg:mx-44 z-10">
            <div className="text-lg mt-4 max-w-full lg:max-w-2xl text-start px- lg:px-16">
              <h3 className="text-base lg:text-3xl font-semibold">
                {content.d1}
              </h3>
              <p className="pt-2 lg:pt-6 text-sm sm:text-base">{content.d11}</p>
            </div>
            <div className="text-lg mt-4 max-w-full lg:max-w-2xl text-start px-4 z-10">
              <h3 className="text-base lg:text-3xl font-semibold">
                {content.d2}
              </h3>
              <p className="pt-2 lg:pt-6 text-sm sm:text-base">{content.d22}</p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="absolute right-0 top-72 w-1/4 h-full items-center justify-center hidden lg:block">
          <img src={img11} alt="Right Side Image" className="w-full h-auto" />
        </div>

        {/* Image Container 2 */}
        
        <div className="flex flex-col items-center justify-center pt-8 px-4   lg:ml-16">
          <img
            src={img2}
            alt="Implementation & Deployment"
            className="w-full sm:w-2/3 lg:w-1/2"
          />
          <div className="flex flex-col lg:flex-row items-start px-4 lg:mx-44 z-10">
            <div className="text-lg mt-4 max-w-full lg:max-w-2xl text-start px-2 lg:px-24  ">
              <h3 className="text-base lg:text-3xl font-semibold">
                {content.d4}
              </h3>
              <p className="pt-4 lg:pt-6 text-sm sm:text-base">{content.d44}</p>
            </div>
            <div className="text-lg mt-4 max-w-full lg:max-w-2xl text-start lg:px-16 lg:ml-20">
              <h3 className="text-base lg:text-3xl font-semibold">
                {content.d3}
              </h3>
              <p className="pt-4 lg:pt-6 text-sm sm:text-base">{content.d33}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center pt-8 px-4   lg:ml-16">
          <img
            src={img12}
            alt="Implementation & Deployment"
            className="w-full sm:w-2/3 lg:w-1/2"
          />
          <div className="flex flex-col lg:flex-row items-start px-4 lg:mx-40 z-10">
           <div>
           {content.d5 && (
          <div className="flex flex-col lg:flex-row lg:items-center items-start justify-center  px-4 sm:px-8 z-10">
            
            <div className="text-lg mt-4 max-w-full lg:max-w-2xl text-start px-4">
              <h3 className="text-base lg:text-3xl font-semibold">
                {content.d5}
              </h3>
              <p className="pt-4 lg:pt-6 text-sm sm:text-base">{content.d55}</p>
            </div>
          </div>
        )}
           </div>

            <div>
            {content.d6 && (
        <div className="flex flex-col lg:flex-col lg:items-center items-start justify-center  px-4 sm:px-8">
        
          <div className="text-lg mt-4 max-w-full lg:max-w-2xl text-start px-4">
            <h3 className="text-base lg:text-3xl font-semibold">
              {content.d6}
            </h3>
            <p className="pt-4 lg:pt-6 text-sm sm:text-base">{content.d66}</p>
          </div>
        </div>
      )}
            </div>
          </div>
        </div>

        {/* Image 3 and its text */}
      
      </div>

     

      {/* Section 2 with overlapping image */}
      <div className="relative mt-12 sm:mt-24 lg:mt-28">
        {/* Background Image */}
        <img
          src={img4}
          alt="Background"
          className="w-full h-[300px] object-cover relative z-10"
        />

        {/* Text on background image */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-30 text-center px-4 sm:px-2">
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold p-2 lg:px-96 sm:p-4">
            {content.e1}
          </h2>
          <p className="text-base sm:text-xl lg:text-2xl font-semibold mt-2 sm:mt-4 max-w-full sm:max-w-2xl mx-auto">
            {content.e11}
          </p>
        </div>
      </div>

      {/* Section 3 with additional images */}
      <div className="flex flex-col lg:flex-row px-2 sm:px-8 lg:mx-24 pt-8 sm:pt-12">
        <div className="flex-1 px-4">
          <div className="flex items-start justify-center gap-2 lg:gap-4 lg:p-4 lg:mx-8">
            <img
              src={img6}
              alt="In-House Training Icon"
              className="w-8 h-8 sm:w-auto sm:h-auto"
            />
            <div className="text-lg">
              <h2 className="text-base lg:text-3xl font-semibold">MSMEs:</h2>
              <h2 className="text-sm lg:text-xl font-semibold">{content.f1}</h2>
              <p className="mt-2 text-sm sm:text-base">{content.f11}</p>
              <h2 className="text-sm lg:text-xl font-semibold">{content.f2}</h2>
              <p className="mt-2 text-sm sm:text-base">{content.f22}</p>
            </div>
          </div>
          <div className="flex items-start justify-center gap-2 lg:gap-4 lg:p-4 lg:mx-8 mt-4">
            <img
              src={img7}
              alt="In-House Training Icon"
              className="w-8 h-8 sm:w-auto sm:h-auto"
            />
            <div className="text-lg">
              <h2 className="text-base lg:text-3xl font-semibold">
                Enterprises:
              </h2>

              <h2 className="text-sm lg:text-xl font-semibold">{content.f5}</h2>
              <p className="mt-2 text-sm sm:text-base">{content.f55}</p>
              <h2 className="text-sm lg:text-xl font-semibold">{content.f6}</h2>
              <p className="mt-2 text-sm sm:text-base">{content.f66}</p>
              <h2 className="text-sm lg:text-xl font-semibold">{content.f7}</h2>
              <p className="mt-2 text-sm sm:text-base">{content.f77}</p>
            </div>
          </div>
        </div>

        <div className="flex-1 px-4">
          <div className="flex pl-2 items-start justify-center gap-2 lg:gap-4 lg:p-4 lg:mx-8 ">
            <img
              src={img8}
              alt="In-House Training Icon"
              className="w-8 h-8 sm:w-auto sm:h-auto"
            />
            <div className="text-lg">
              <h2 className="text-base lg:text-3xl font-semibold">Startups:</h2>
              <h2 className="text-sm lg:text-xl font-semibold">{content.f3}</h2>
              <p className="mt-2 text-sm sm:text-base">{content.f33}</p>
              <h2 className="text-sm lg:text-xl font-semibold">{content.f4}</h2>
              <p className="mt-2 text-sm sm:text-base">{content.f44}</p>
            </div>
          </div>
          <div className="flex items-center justify-start pt-6 lg:pl-12 lg:pt-4 gap-4">
            <img
              src={img9}
              alt="In-House Training Icon"
              className="w-[300px] h-[200px] lg:w-[400px] lg:h-[300px]"
            />
          </div>
        </div>
      </div>

      {/* Line Image */}
      <div className="relative mt-6 sm:mt-12 sm:pb-7">
        <img src={lines} alt="Lines" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default Sec33;
