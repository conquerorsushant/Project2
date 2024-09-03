import React from "react";
import img1 from "../../assets/images/Asset19.png";
import img2 from "../../assets/images/Asset23.png";
import img3 from "../../assets/images/Asset31.png";
import img4 from "../../assets/images/Artboard4.png";

import img6 from "../../assets/images/Asset21.png";
import img7 from "../../assets/images/Asset25.png";
import img8 from "../../assets/images/Asset26.png";
import img9 from "../../assets/images/Asset28.png";
import img10 from "../../assets/images/Artboard14.png";
import img11 from "../../assets/images/Artboard11.png";
import lines from '../../assets/images/lines.png';

const Section3 = () => {
  return (
    <div className="bg-primary relative text-white">
      {/* Section 1 */}
      <div className="relative">
        {/* Left Image */}
        <div className="absolute left-0 top-32 w-1/4 h-full  items-center justify-center hidden lg:block">
          <img src={img10} alt="Left Side Image" className="w-full h-auto" />
        </div>

        {/* Main Content */}
        <div className="flex flex-col items-center justify-center pt-8 px-4 sm:px-8 lg:px-12 relative">
          <img src={img1} alt="Discovery Workshop" className="w-full sm:w-2/3 lg:w-1/2" />
          <div className="flex flex-col lg:flex-row items-start px-2 lg:px-44">
            <div className="text-lg mt-4 max-w-full lg:max-w-2xl text-start px-4 lg:px-10">
              <h3 className="text-base lg:text-3xl font-semibold">Discovery Workshop:</h3>
              <p className="pt-2 lg:pt-6 text-base lg:text-base">
                We initiate the collaboration with a comprehensive discovery
                workshop to understand your business goals, data landscape, and
                specific challenges.
              </p>
            </div>
            <div className="text-lg mt-4 max-w-full lg:max-w-2xl text-start px-4  z-10 lg:ml-24">
              <h3 className="text-base  lg:text-3xl font-semibold">Solution Design:</h3>
              <p className="pt-4 lg:pt-6 text-base lg:text-base">
                Based on our findings, we design a customized data engineering
                solution, outlining the technologies, tools, and processes
                tailored to your needs.
              </p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="absolute right-0 top-32 w-1/4 h-full  items-center justify-center hidden lg:block">
          <img src={img11} alt="Right Side Image" className="w-full h-auto" />
        </div>

        {/* Image Container 2 */}
        <div className="flex flex-col  items-center justify-center pt-8 px-4 sm:px-8">
          <img src={img2} alt="Implementation & Deployment" className="w-full sm:w-2/3 lg:w-1/2" />
          <div className="flex flex-col lg:flex-row items-start px-4 lg:px-24 lg:pl-54   ">
            <div className="text-lg mt-4 max-w-full lg:max-w-2xl text-start px- lg:pl-28 ">
              <h3 className="text-base lg:text-3xl font-semibold">Implementation & Deployment:</h3>
              <p className="pt-4 lg:pt-6 text-base lg:text-base">
                Our team implements the agreed-upon solution, ensuring seamless
                integration with your existing infrastructure.
              </p>
            </div>
            <div className="text-lg mt-4 max-w-full lg:max-w-2xl text-start px-4 lg:px-16 lg:ml-40">
              <h3 className="text-base lg:text-3xl font-semibold">Proof of Concept (POC):</h3>
              <p className="pt-4 lg:pt-6 text-base lg:text-base ">
                To mitigate risk and ensure alignment, we can develop a focused
                POC to demonstrate the effectiveness of our proposed solution.
              </p>
            </div>
          </div>
        </div>

        {/* Image 3 and its text */}
        <div className="flex flex-col lg:flex-row lg:items-center items-start  justify-center pt-8 px-4 sm:px-8">
          <img src={img3} alt="Ongoing Support" className="w-[80px] lg:w-[150px]" />
          <div className="text-lg mt-4 max-w-full lg:max-w-2xl text-start p-4">
            <h3 className="text-base lg:text-3xl font-semibold">Ongoing Support</h3>
            <p className="pt-4 lg:pt-6 text-base lg:text-base">
              We provide ongoing support to maintain your data engineering
              infrastructure, address any emerging challenges, and optimize
              performance.
            </p>
          </div>
        </div>
      </div>

      {/* Section 2 with overlapping image */}
      <div className="relative mt-12 sm:mt-24 lg:mt-28">
        {/* Background Image */}
        {/* Background Image */}
         <img src={img4} alt="Background" className="w-full h-[300px] object-cover relative z-10" />
        
        {/* Overlay Image */}
        

        
        {/* Text on background image */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-30 text-center px-4 sm:px-8">
          <h2 className="text-xl sm:text-3xl lg:text-3xl font-bold p-2 lg:px-96 sm:p-4 ">
          How We Can Help You: Solutions for
          Every Business Size
          </h2>
          <p className="text-base sm:text-xl lg:text-xl font-semibold mt-2 sm:mt-4 max-w-full sm:max-w-2xl mx-auto">
          Our data engineering expertise caters to the specific needs
          of businesses at every stage of their growth journey:
          </p>
        </div>
      </div>

      {/* Section 3 with additional images */}
      <div className="flex flex-col lg:flex-row px-2 sm:px-8 lg:px-12 pt-8 sm:pt-12">
  <div className="flex-1 px-4">
    <div className="flex items-start justify-center gap-2 lg:gap-4 lg:p-4 lg:mx-8">
      <img src={img6} alt="In-House Training Icon" className="w-8 h-8 sm:w-16 sm:h-16 lg:lg:-mt-7" /> {/* Adjusted margin */}
      <div className="text-lg">
        <h2 className="text-base lg:text-3xl font-semibold">MSMEs:</h2>
        <p className="mt-2 text-base lg:text-base">
          Our team continuously undergoes rigorous training to stay at
          the forefront of the ever-evolving data engineering landscape.
          This ensures we leverage the latest advancements and best
          practices to deliver exceptional service.
        </p>
      </div>
    </div>
    <div className="flex items-start justify-center gap-2 lg:gap-4 lg:p-4 lg:mx-8 mt-4">
      <img src={img7} alt="In-House Training Icon" className="w-8 h-8 sm:w-16 sm:h-16 lg:-mt-7" /> {/* Adjusted margin */}
      <div className="text-lg">
        <h2 className="text-base lg:text-3xl font-semibold">Enterprises:</h2>
        <p className="mt-2 text-base lg:text-base">
          Our team continuously undergoes rigorous training to stay at
          the forefront of the ever-evolving data engineering landscape.
          This ensures we leverage the latest advancements and best
          practices to deliver exceptional service.
        </p>
      </div>
    </div>
  </div>

  <div className="flex-1 px-4">
    <div className="flex pl-2 items-start justify-center gap-2 lg:gap-4 lg:p-4 lg:mx-8 mt-4">
      <img src={img8} alt="In-House Training Icon" className="w-8 h-8 sm:w-16 sm:h-16 lg:-mt-7" /> {/* Adjusted margin */}
      <div className="text-lg">
        <h2 className="text-base lg:text-3xl font-semibold">Startups:</h2>
        <p className="mt-2 text-base lg:text-base">
          Our team continuously undergoes rigorous training to stay at
          the forefront of the ever-evolving data engineering landscape.
          This ensures we leverage the latest advancements and best
          practices to deliver exceptional service.
        </p>
      </div>
    </div>
    <div className="flex items-center justify-start pt-6 lg:pl-12 lg:pt-9 gap-4">
      <img src={img9} alt="In-House Training Icon" />
    </div>
  </div>
</div>


      {/* Line Image */}
      <div className="relative mt-6 sm:mt-12">
        <img src={lines} alt="Lines" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default Section3;
