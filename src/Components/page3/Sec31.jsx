import React from 'react';
import p1 from '../../assets/images/Artboard13.png';
import p14 from '../../assets/images/Artboard12.png';
import lines from '../../assets/images/lines.png';
import sec from '../../assets/images/Artboard10.png';
import bg from '../../assets/images/Artboard7.png';
 

const Sec31 = ({content}) => {
  
  return (
    <div>
    <div className="bg-primary pt-12">
      <div className="relative flex flex-col lg:flex-row items-center ">
        {/* Main image (p1) */}

        <div className="relative z-10 px-4 lg:mx-12 lg:ml-auto lg:w-[800px] w-full">
          <img src={p1} alt="Data Engineering" className="w-full h-auto" />
        </div>

        {/* Overlay image (p14) */}
        <div className="absolute lg:left-0 top-36 w-full lg:top-52 z-20">
          <img src={lines} alt="Lines" className="w-full h-auto" />
        </div>

        {/* Lines Image  */}
        <div className="absolute lg:top-[150px] top-20 lg:left-[70%] left-[60%] transform -translate-x-1/2 translate-y-8 lg:translate-y-12 z-20 lg:w-full w-[60%] lg:max-w-[600px]">
          <img
            src={p14}
            alt="Overlay"
            className="w-full h-auto transform scale-110"
          />{" "}
          {/* Adjust size here */}
        </div>

        <div className="absolute  left-8 lg:left-72 pt-2  z-40 text-white text-start !lg:text-left lg:w-1/2"
        style={{ textShadow: "5px 5px 10px rgba(0, 0, 0)" }}
        >
          <h1 >
            {content.title}
          </h1>
          <h2 className="text-xl lg:text-4xl font-semibold">
           {content.t1}
          </h2>
          <h3>{content.t2}</h3>
          <h3 >{content.t3}</h3>
          <h3 >{content.t4}</h3>
        </div>
      </div>

      {/* Section 2 */}
      <div className="flex flex-col sm:flex-row lg:flex-row items-center justify-center gap-4 lg:gap-11 pt-16 lg:mt-7 sm:gap-2 px-4 lg:mx-28  sm:p-2 lg:p-10">
        <div className="flex-1 flex justify-center p-3 lg:justify-end sm:justify-center lg:py-16 lg:pl-56  px-4 lg:pt-8 pt-14 ">
          <div className="bg-opacity-30 text-sm lg:text-lg bg-[#283B5E] lg:py-6 px-6   sm:text-start text-white rounded-[2rem] ">
            <p className="w-[30rem] ">
             {content.t5}
            </p>
          </div>
        </div>
        <div className="lg:flex-1 my-4 flex justify-center items-center ">
          <img
            src={sec}
            alt="Section Image"
            className="w-1/2 lg:w-96 h-auto"
          />{" "}
          {/* Reduce image size */}
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
          <h2 >
          {content.t6}
          </h2>
          <h2 >
            {content.t7}
          </h2>
          <p >
         {content.t8}
          </p>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Sec31;
