import React from "react";
import p1 from "../../assets/images/p2.png";
import p14 from "../../assets/images/p14.png"; // Import the p14 image
import lines from "../../assets/images/lines.png"; // Import the lines image
import sec from '../../assets/images/Asset2.png'; // Import the sec image
import bg from '../../assets/images/asset3.png'; // Import the bg image

const Section1 = () => {
  return (
    <div className="bg-primary pt-12">
      <div className="relative flex flex-col lg:flex-row items-center p-4 lg:p-10">
        {/* Main image (p1) */}
        <div className="relative z-0 px-4 lg:px-20 lg:ml-auto lg:w-[800px] w-full">
          <img
            src={p1}
            alt="Data Engineering"
            className="w-full h-auto"
          />

          {/* Overlay image (p14) positioned absolutely and overlapping lines image */}
          <div className="absolute top-[100px] left-[50%] transform -translate-x-1/2 translate-y-8 lg:translate-y-12 z-20 w-full max-w-[500px]">
            <img src={p14} alt="Overlay" className="w-full h-auto" /> {/* Adjust size here */}
          </div>
        </div>

        {/* Lines Image positioned absolutely and spanning full width */}
        <div className="absolute left-0 top-56 w-full lg:top-56 z-10">
          <img src={lines} alt="Lines" className="w-full h-auto" />
        </div>

        {/* Text content */}
        <div className="absolute left-4 lg:left-64 z-30 text-white text-center lg:text-left lg:w-1/3">
          <h1 className="text-xl lg:text-2xl font-bold">BrainsTerra Intelligence:</h1>
          <h2 className="text-xl lg:text-2xl font-semibold">
            Unleash the Power of Your Data with
          </h2>
          <h3 className="text-4xl lg:text-8xl font-bold">Expert</h3>
          <h3 className="text-4xl lg:text-8xl font-bold">Data</h3>
          <h3 className="text-4xl lg:text-8xl font-bold">Engineering</h3>
        </div>
      </div>

      {/* Section 2 */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-11 p-4 lg:p-10">
        <div className="flex-1 lg:py-16 lg:pl-56 px-4 pt-44">
          <div className="bg-opacity-30 text-xs lg:text-sm bg-[#283B5E] p-2 lg:p-8 text-white rounded-xl">
            At BrainsTerra Intelligence, we empower businesses of all sizes:
            MSMEs, startups, and enterprises to leverage the transformative power
            of data. Our world-class Data Engineering Services are crafted to
            build robust infrastructure tailored to your specific needs, driving
            your business towards data-driven decision-making and growth.
          </div>
        </div>
        <div className="flex-1">
          <img src={sec} alt="Section Image" className="w-full lg:w-2/3 h-auto" /> {/* Reduce image size */}
        </div>
      </div>

      {/* Section 3 */}
      <div className="relative flex flex-col items-center justify-center p-4 lg:p-10">
        <img
          src={bg}
          alt="Expertise Background"
          className="absolute inset-0 w-full h-full object-cover "
        />
        <div className="relative z-10 text-center lg:text-left lg:px-28 max-w-full lg:max-w-4xl p-2 lg:p-8 text-white rounded-lg">
          <h2 className="text-xl lg:text-4xl font-bold mb-4">Our Expertise:</h2>
          <h2 className="text-xl lg:text-4xl font-bold mb-4">Building the Foundation for Success</h2>
          <p className="text-lg lg:text-xl lg:text-center text-start">
            Our team of seasoned data engineers possesses unparalleled expertise in developing
            the critical infrastructure components that form the backbone of your data ecosystem.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section1;
