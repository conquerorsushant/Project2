import React, { useState } from "react";

import lines from "../../assets/images/lines.png";
import bg3 from "../../assets/images/Artboard1.png";
import bg2 from "../../assets/images/bg2.png";
import contact from "../../assets/images/contact.png";
import left1 from "../../assets/images/Artboard9.png";
import left2 from "../../assets/images/Artboard8.png";
import color from "../../assets/images/Asset17.png";
import arrow from "../../assets/images/Arrow111.png";
import favicon from "../../assets/images/favicon.png";

const Sec32 = ({ content }) => {
  console.log(content.a1.props);

  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 200);
  };
  return (
    <div className="bg-primary relative text-white">
      {/* First Section */}
      <div className="relative">
        <div className="flex lg:flex-col flex-col lg:gap-10 gap-6 flex-wrap mt-20   p-2">
          <div className="flex lg:flex-row flex-col lg:px-36 ">
            <div className="flex lg:w-1/2  items-center sm:items-start justify-center  gap-4 lg:p-4 mx-2 ">
              <img
                src={content.a1.props.src}
                alt="Data Lakes Icon"
                className="w-10 h-10 sm:w-auto sm:h-auto mt-2 "
              />
              <div>
                <h2 className="text-base sm:text-xl lg:text-3xl font-semibold">
                  {content.p1}
                </h2>
                <p className="text-sm sm:text-base">{content.p11}</p>
              </div>
            </div>
            <div className="flex lg:w-1/2   items-center sm:items-start justify-center gap-4 lg:p-4 mx-2 ">
              <img
                src={content.a2.props.src}
                alt="Data Lakes Icon"
                className="w-10 h-10 sm:w-auto sm:h-auto mt-2"
              />
              <div>
                <h2 className="text-base sm:text-xl lg:text-3xl font-semibold">
                  {content.p2}
                </h2>
                <p className="text-sm sm:text-base">{content.p22}</p>
              </div>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col lg:px-36">
            <div className="flex  lg:w-1/2  items-center sm:items-start justify-center gap-4 lg:p-4 mx-2">
              <img
                src={content.a3.props.src}
                alt="Data Lakes Icon"
                className="w-10 h-10 sm:w-auto sm:h-auto mt-2"
              />
              <div>
                <h2 className="text-base sm:text-xl lg:text-3xl font-semibold">
                  {content.p3}
                </h2>
                <p className="text-sm sm:text-base">{content.p33}</p>
              </div>
            </div>
            <div className="flex  lg:w-1/2 items-center sm:items-start justify-center gap-4 lg:p-4 pl-2 mx-2 ">
              <img
                src={content.a4.props.src}
                alt="Data Lakes Icon"
                className="w-10 h-10 sm:w-auto sm:h-auto mt-2"
              />
              <div>
                <h2 className="text-base sm:text-xl lg:text-3xl font-semibold">
                  {content.p4}
                </h2>
                <p className="text-sm sm:text-base">{content.p44}</p>
              </div>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col lg:px-36 ">
            <div className="flex  lg:w-1/2 items-center sm:items-start justify-center gap-4 lg:p-4 mx-2 ">
              <img
                src={content.a5.props.src}
                alt="Data Lakes Icon"
                className="w-10 h-10 sm:w-auto sm:h-auto mt-2"
              />
              <div>
                <h2 className="text-base sm:text-xl lg:text-3xl font-semibold">
                  {content.p5}
                </h2>
                <p className="text-sm sm:text-base">{content.p55}</p>
              </div>
            </div>
            {content.p6 && (
              <div className="flex  lg:w-1/2 items-center sm:items-start justify-center gap-4 lg:p-4 mx-2 ">
                <img
                  src={content.a6.props.src}
                  alt="Data Lakes Icon"
                  className="w-10 h-10 sm:w-auto sm:h-auto mt-2"
                />
                <div>
                  <h2 className="text-base sm:text-xl lg:text-3xl font-semibold ">
                    {content.p6}
                  </h2>
                  <p className="text-sm sm:text-base ">{content.p66}</p>
                </div>
              </div>
            )}
          </div>
          {content.p7 && (
            <div className="flex lg:px-36 ">
              <div className="flex  lg:w-1/2 items-center sm:items-start justify-center gap-4 lg:p-4 mx-2 ">
                <img
                  src={content}
                  alt="Data Lakes Icon"
                  className="w-10 h-10 sm:w-auto sm:h-auto mt-2"
                />
                <div>
                  <h2 className="text-base sm:text-xl lg:text-3xl font-semibold">
                    {content.p7}
                  </h2>
                  <p className="text-sm sm:text-base">{content.p77}</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Left1 Image Positioned on Right Side */}
        <div className="absolute right-0 top-64 bottom-0 hidden lg:flex items-center justify-end z-10">
          <img
            src={left1}
            alt="Left1"
            className="lg:w-[270px] max-w-none h-auto object-contain"
            style={{ right: "0", marginRight: "0px" }}
          />
        </div>

        {/* Line Image */}
        <div className="relative mt-0 lg:mb-20 mb-10">
          <img
            src={lines}
            alt="Lines"
            className="w-full bottom-11 left-0 h-auto"
          />
        </div>
      </div>

      {/* Section with bg2 Image */}
      <div className="relative overflow-hidden">
        <img
          src={bg2}
          alt="Background"
          className="w-full object-cover lg:h-[80vh] h-50vh "
        />

        {/* Favicon Positioned on the Bottom-Right Side */}
        {/* <div className="absolute right-[50px] bottom-[-90px] z-20 transform ">
<img
  src={favicon}
  alt="Favicon"
  className="w-[200px] h-[200px] sm:w-[350px] sm:h-[350px] object-contain"
/>
</div> */}

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
          <h2 className=" font-bold mx-auto max-w-screen-sm sm:max-w-[80%] text-base sm:text-3xl">
            {content.q2}

            {content.q3}

            {content.q1}
          </h2>
          <div className="lg:mt-4 mb-1 mt-2 sm:mt-8">
            <button
              // onClick={handleClick}
              className={`px-2 py-1 bg-blue-500 font-semibold flex items-center justify-center lg:gap-2 lg:py-2 lg:px-4 rounded-md text-xs sm:text-lg transform transition-transform duration-200 ease-in-out ${
                isClicked ? "scale-110" : ""
              } hover:scale-125`}
            >
              <img
                src={contact}
                alt="Contact Us"
                className="w-5 h-5 sm:w-auto sm:h-auto"
              />
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Third Section */}
      <div className="relative">
        <div
          className="text-center lg:py-12   py-8 flex lg:flex-col   flex-col items-center
     justify-center"
        >
          <p className="font-semibold text-2xl lg:text-3xl lg:px-[380px] px-[]">
            We differentiate ourselves through several key aspects:
          </p>
          <div className="lg:py-4 ">
            <img src={arrow} className="" />
          </div>
        </div>
        <div className="flex lg:flex-col flex-col lg:gap-10 gap-6 flex-wrap  p-2">
          <div className="flex lg:flex-row flex-col lg:px-36 ">
            <div className="flex lg:w-1/2  items-start justify-center  gap-4 lg:p-4 mx-2 ">
              <img
                src={content.a1.props.src}
                alt="Data Lakes Icon"
                className="w-10 h-10 sm:w-auto sm:h-auto mt-2"
              />
              <div>
                <h2 className="text-base sm:text-xl lg:text-3xl font-semibold">
                  {content.s1}
                </h2>
                <p className="text-sm sm:text-base font-semibold">
                  {content.s11}
                </p>
              </div>
            </div>
            <div className="flex lg:w-1/2   items-start justify-center gap-4 lg:p-4 mx-2 ">
              <img
                src={content.a2.props.src}
                alt="Data Lakes Icon"
                className="w-10 h-10 sm:w-auto sm:h-auto mt-2"
              />
              <div>
                <h2 className="text-base sm:text-xl lg:text-3xl font-semibold">
                  {content.s2}
                </h2>
                <p className="text-sm sm:text-base font-semibold">
                  {content.s22}
                </p>
              </div>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col lg:px-36">
            <div className="flex  lg:w-1/2  items-start justify-center gap-4 lg:p-4 mx-2">
              <img
                src={content.a3.props.src}
                alt="Data Lakes Icon"
                className="w-10 h-10 sm:w-auto sm:h-auto mt-2"
              />
              <div>
                <h2 className="text-base sm:text-xl lg:text-3xl font-semibold">
                  {content.s3}
                </h2>
                <p className="text-sm sm:text-base font-semibold">
                  {content.s33}
                </p>
              </div>
            </div>
            <div className="flex  lg:w-1/2 items-start justify-center gap-4 lg:p-4 pl-2 mx-2 ">
              <img
                src={content.a4.props.src}
                alt="Data Lakes Icon"
                className="w-10 h-10 sm:w-auto sm:h-auto mt-2"
              />
              <div>
                <h2 className="text-base sm:text-xl lg:text-3xl font-semibold">
                  {content.s4}
                </h2>
                <p className="text-sm sm:text-base font-semibold">
                  {content.s44}
                </p>
              </div>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col lg:px-36 ">
            <div className="flex  lg:w-1/2 items-start justify-center gap-4 lg:p-4 mx-2 ">
              <img
                src={content.a5.props.src}
                alt="Data Lakes Icon"
                className="w-10 h-10 sm:w-auto sm:h-auto mt-2"
              />
              <div>
                <h2 className="text-base sm:text-xl lg:text-3xl font-semibold">
                  {content.s5}
                </h2>
                <p className="text-sm sm:text-base font-semibold">
                  {content.s55}
                </p>
              </div>
            </div>
          { content.s6 && <div className="flex  lg:w-1/2 items-start justify-center gap-4 lg:p-4 mx-2 ">
              <img
                src={content.a6.props.src}
                alt="Data Lakes Icon"
                className="w-10 h-10 sm:w-auto sm:h-auto mt-2"
              />
              <div>
                <h2 className="text-base sm:text-xl lg:text-3xl font-semibold">
                  {content.s6}
                </h2>
                <p className="text-sm sm:text-base font-semibold">
                  {content.s66}
                </p>
              </div>
            </div>}
          </div>
          {content.s7 && (
            <div className="flex lg:flex-row flex-col lg:px-36 ">
              <div className="flex lg:w-1/2  items-start justify-center  gap-4 lg:p-4 mx-2 ">
                <img
                  src={content.a2.props.src}
                  alt="Data Lakes Icon"
                  className="w-10 h-10 sm:w-auto sm:h-auto mt-2"
                />
                <div>
                  <h2 className="text-base sm:text-xl lg:text-3xl font-semibold">
                    {content.s7}
                  </h2>
                  <p className="text-sm sm:text-base font-semibold">
                    {content.s77}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Left2 Image Positioned on Right Side */}
        <div
          className="absolute right-0 top-72
   bottom-0 hidden lg:flex items-center justify-end z-10"
        >
          <img
            src={left2}
            alt="Left1"
            className="lg:w-[270px] max-w-none h-auto object-contain"
            style={{ right: "0", marginRight: "0px" }} // Ensure image is flush with the right side
          />
        </div>

        <div className="relative mt-11">
          <img
            src={bg3}
            alt="Background"
            className="w-full bottom-6 left-0 h-[300px] relative z-10 opacity-70"
            // Add the opacity here to make the background image partially transparent
          />

          {/* Text on bg3 Image */}
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10 lg:mb-10 mb-10 text-center">
            <h2 className="text-xl sm:text-3xl font-bold">{content.smooth}</h2>
            <p className="text-sm sm:text-xl font-semibold lg:mt-4 max-w-2xl mx-auto rounded-lg shadow-lg">
              {content.smoothp}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sec32;
