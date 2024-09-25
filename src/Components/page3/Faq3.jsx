import React, { useState, useEffect } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import img1 from "../../assets/images/Artboard4.png";
import contact from "../../assets/images/contact.png";
import bg from "../../assets/images/p12.png";
import { Link } from "react-router-dom";

const Faq3 = ({ content }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isClicked, setIsClicked] = useState(false);
  const [faqExpanded, setFaqExpanded] = useState(false);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const getIconColor = (index) => {
    switch (index) {
      case 0:
        return "text-blue-500";
      case 1:
        return "text-red-500";
      case 2:
        return "text-yellow-500";
      default:
        return "";
    }
  };

  useEffect(() => {
    setFaqExpanded(activeIndex !== null);
  }, [activeIndex]);

  return (
    <div
      className={`relative text-white bg-primary  ${
        faqExpanded ? "lg:pt-44 pt-60" : "lg:pt-0"
      }`}
    >
      {/* FAQ Section Title */}
      <div
        className={`relative z-20 lg:mx-20 p-8 pb-4 ${
          faqExpanded
            ? "lg:translate-y-[-200px] translate-y-[-280px] lg:pt-8 lg:py-4 pt-14 "
            : ""
        }`}
      >
        <h2 className="lg:text-4xl text-xl font-bold " style={{marginBottom:"-1rem"}}>
          Frequently Asked Questions (FAQs)
        </h2>
      </div>

      {/* Background Image Container */}
      <div
        className={`relative ${
          faqExpanded ? "h-[500px] sm:h-[600px] md:h-[700px]" : "h-auto py-6"
        } transition-height duration-300`}
      >
        <img
          src={bg}
          alt="FAQ Background"
          className="absolute inset-0 lg:w-full lg:h-full w-full h-full object-cover opacity-20"
        />

        {/* FAQ Content Container */}
        <div
          className={`relative z-30 px-8 pt-3 lg:mx-20 lg:pt-20  transition-transform duration-300 ${
            faqExpanded ? "lg:translate-y-[-220px] translate-y-[-350px]  " : ""
          }`}
        >
          <div className="space-y-4">
            {/* FAQ 1 */}
            <div className="relative mb-4 border-b bg-[#283B5E] rounded-lg border-gray-700">
              <button
                className="w-full text-left bg-[#182544] p-4 rounded-lg text-base sm:text-lg font-semibold flex items-center"
                onClick={() => handleToggle(0)}
              >
                <span className="flex-1 text-base lg:text-xl lg:px-8">
                  {content.que1}
                </span>
                <div
                  className={`flex items-center ml-4 border-l border-gray-500 pl-4 ${getIconColor(
                    0
                  )}`}
                >
                  <span className="text-lg">
                    {activeIndex === 0 ? <FaChevronUp /> : <FaChevronDown />}
                  </span>
                </div>
              </button>
              <div
                className={`transition-all duration-300 ease-in-out ${
                  activeIndex === 0
                    ? "max-h-[500px] mt-4"
                    : "max-h-0 overflow-hidden"
                }`}
              >
                <div className="text-sm lg:text-xl lg:px-16 px-2">
                  <p>{content.ans1}</p>{" "}
                </div>
              </div>
            </div>

            {/* FAQ 2 */}
            <div
              className={`relative border-b bg-[#283B5E] rounded-lg border-gray-700 ${
                faqExpanded ? "pb-0" : "lg:pt-0"
              }`}
            >
              <button
                className="w-full text-left bg-[#182544] p-4 rounded-lg text-base sm:text-lg font-semibold flex items-center"
                onClick={() => handleToggle(1)}
              >
                <span className="flex-1 text-base lg:text-xl lg:px-8">
                  {content.que2}
                </span>
                <div
                  className={`flex items-center ml-4 border-l border-gray-500 pl-4 ${getIconColor(
                    1
                  )}`}
                >
                  <span className="text-lg">
                    {activeIndex === 1 ? <FaChevronUp /> : <FaChevronDown />}
                  </span>
                </div>
              </button>
              <div
                className={`transition-all duration-300 ease-in-out ${
                  activeIndex === 1
                    ? "max-h-[500px] mt-4"
                    : "max-h-0 overflow-hidden"
                }`}
              >
                <div className="text-sm lg:text-lg lg:px-16 px-2">
                  <p>{content.ans2}</p>
                </div>
              </div>
            </div>

            {/* FAQ 3 */}
            <div className="relative bg-[#283B5E] border-gray-700 border-b rounded-lg">
              <button
                className="w-full text-left bg-[#182544] p-4 rounded-lg text-base sm:text-lg font-semibold flex items-center"
                onClick={() => handleToggle(2)}
              >
                <span className="flex-1 text-base lg:text-xl lg:px-8">
                  {content.que3}
                </span>
                <div
                  className={`flex items-center ml-4 border-l border-gray-500 pl-4 ${getIconColor(
                    2
                  )}`}
                >
                  <span className="text-lg">
                    {activeIndex === 2 ? <FaChevronUp /> : <FaChevronDown />}
                  </span>
                </div>
              </button>
              <div
                className={`transition-all duration-300 ease-in-out ${
                  activeIndex === 2
                    ? "max-h-[500px] mt-4"
                    : "max-h-0 overflow-hidden"
                }`}
              >
                <div className="text-base lg:text-lg lg:px-16 px-2">
                  <p>{content.ans3}</p>
                </div>
              </div>
            </div>
            {/* FAQ 4 */}
            {content.ques4 && (
              <div className="relative bg-[#283B5E] border-gray-700 border-b rounded-lg">
                <button
                  className="w-full text-left bg-[#182544] p-4 rounded-lg text-base sm:text-lg font-semibold flex items-center"
                  onClick={() => handleToggle(2)}
                >
                  <span className="flex-1 text-base lg:text-xl lg:px-8">
                    {content.que4}
                  </span>
                  <div
                    className={`flex items-center ml-4 border-l border-gray-500 pl-4 ${getIconColor(
                      2
                    )}`}
                  >
                    <span className="text-lg">
                      {activeIndex === 2 ? <FaChevronUp /> : <FaChevronDown />}
                    </span>
                  </div>
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    activeIndex === 2
                      ? "max-h-[500px] mt-4"
                      : "max-h-0 overflow-hidden"
                  }`}
                >
                  <div className="text-base lg:text-lg lg:px-16 px-2">
                    <p>{content.ans4}</p>
                  </div>
                </div>
              </div>
            )}
            {/* FAQ 5 */}
            {content.ques5 && (
              <div className="relative bg-[#283B5E] border-gray-700 border-b rounded-lg">
                <button
                  className="w-full text-left bg-[#182544] p-4 rounded-lg text-base sm:text-lg font-semibold flex items-center"
                  onClick={() => handleToggle(2)}
                >
                  <span className="flex-1 text-base lg:text-xl lg:px-8">
                    {content.que5}
                  </span>
                  <div
                    className={`flex items-center ml-4 border-l border-gray-500 pl-4 ${getIconColor(
                      2
                    )}`}
                  >
                    <span className="text-lg">
                      {activeIndex === 2 ? <FaChevronUp /> : <FaChevronDown />}
                    </span>
                  </div>
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    activeIndex === 2
                      ? "max-h-[500px] mt-4"
                      : "max-h-0 overflow-hidden"
                  }`}
                >
                  <div className="text-base lg:text-lg lg:px-16 px-2">
                    <p>{content.ans5}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Contact Us Section */}
      <div className="relative h-[400px] ">
        <img src={img1} alt="Contact" className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex flex-col items-center lg:px-80 justify-center text-center p-4 sm:p-8 ">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl lg:mx-[400px] font-semibold mb-4">
            {content.ready}
          </h2>
          <p className="text-sm sm:text-lg lg:mx-52 mb-2">{content.ready1}</p>
          <a
            href="/contact-us"
            className={`px-2 py-1 bg-blue-500 font-semibold flex items-center justify-center lg:gap-2 lg:py-2 lg:px-4 rounded-md text-xs sm:text-lg transform transition-transform duration-200 ease-in-out ${
              isClicked ? "scale-110" : ""
            } hover:scale-125 text-white hover:text-white`}
          >
            <img
              src={contact}
              alt="Contact Us"
              className="w-5 h-5 sm:w-auto sm:h-auto"
            />
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Faq3;
