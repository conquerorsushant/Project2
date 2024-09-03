import React from "react";
import p1 from "../../assets/images/Artboard13.png";
import p14 from "../../assets/images/Artboard12.png"; // Import the p14 image
import lines from "../../assets/images/lines.png"; // Import the lines image
import sec from '../../assets/images/Artboard10.png'; // Import the sec image
import bg from '../../assets/images/Artboard7.png'; // Import the bg image

const Section1 = () => {
  return (
    <div className="bg-primary pt-12">
      <div className="relative flex flex-col lg:flex-row items-center ">
        {/* Main image (p1) */}

        <div className="relative z-10 px-4 lg:px-20 lg:ml-auto lg:w-[800px] w-full">
          <img
            src={p1}
            alt="Data Engineering"
            className="w-full h-auto"
          />
          </div>

          {/* Overlay image (p14) positioned absolutely and overlapping lines image */}
          <div className="absolute lg:left-0 top-32 w-full lg:top-40 z-20">
          <img src={lines} alt="Lines" className="w-full h-auto" />
        </div>
        

        {/* Lines Image positioned absolutely and spanning full width */}
        
        <div className="absolute lg:top-[120px] top-20 lg:left-[70%] left-[60%] transform -translate-x-1/2 translate-y-8 lg:translate-y-12 z-20 lg:w-full w-[60%] lg:max-w-[500px] ">
            <img src={p14} alt="Overlay" className="w-full h-auto" /> {/* Adjust size here */}
          </div>

        {/* Text content */}
        <div className="absolute left-8 lg:left-72 pt-2  z-40 text-white text-center lg:text-left lg:w-1/3">
          <h1 className="text-xl lg:text-2xl font-bold">BrainsTerra Intelligence:</h1>
          <h2 className="text-xl lg:text-2xl font-semibold">
            Unleash the Power of Your Data with
          </h2>
          <h3 className="text-3xl lg:text-7xl font-bold">Expert</h3>
          <h3 className="text-3xl lg:text-7xl font-bold">Data</h3>
          <h3 className="text-3xl lg:text-7xl font-bold">Engineering</h3>
        </div>
      </div>

      {/* Section 2 */}
      <div className="flex flex-col sm:flex-row lg:flex-row items-center justify-center gap-4 lg:gap-11 sm:gap-2 p-4 sm:p-2 lg:p-10">
  <div className="flex-1 flex justify-center lg:justify-end sm:justify-center lg:py-16 lg:pl-56  px-4 lg:pt-24 pt-14 ">
    <div className="bg-opacity-30 text-sm lg:text-base bg-[#283B5E] p-2 lg:py-6 lg:px-8 lg:pr-10  pr-2 text-center sm:text-start text-white rounded-xl">
      <p>At BrainsTerra Intelligence.</p>
      <p>We empower businesses of all sizes:</p>
      <p className="text-lg font-semibold">MSMEs, startups, and enterprises</p>
      <p>to leverage the transformative power of data. Our world-class Data Engineering Services are crafted to build robust infrastructure tailored to your specific needs, driving your business towards data-driven decision-making and growth.</p>
    </div>
  </div>
  <div className="lg:flex-1 flex justify-center items-center lg:pt-16">
    <img src={sec} alt="Section Image" className="w-1/2 lg:w-2/3 h-auto" /> {/* Reduce image size */}
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
          <h2 className="text-xl lg:text-3xl font-bold mb-4 text-center">Our Expertise:</h2>
          <h2 className="text-xl lg:text-3xl font-bold mb-4 text-center">Building the Foundation for Success</h2>
          <p className="text-lg lg:text-xl lg:text-center text-center">
            Our team of seasoned data engineers possesses unparalleled expertise in developing
            the critical infrastructure components that form the backbone of your data ecosystem.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section1;
