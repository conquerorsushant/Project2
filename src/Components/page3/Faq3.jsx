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
      case 3:
        return "text-green-500";
      case 4:
        return "text-purple-500";
      default:
        return "";
    }
  };

  useEffect(() => {
    setFaqExpanded(activeIndex !== null);
  }, [activeIndex]);

  return (
    <div className={`relative text-white bg-primary`}>
      {/* FAQ Section Title */}
      <div
        className={`relative z-20 lg:mx-20 p-8 pb-4 transition-all duration-300 ${
          faqExpanded ? "lg:pt-20 pt-20" : "lg:pt-44 pt-60"
        }`}
      >
        <h2 className="lg:text-4xl text-xl font-bold ">
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
        <div className="relative z-30 px-8 pt-3 lg:mx-20 lg:pt-8 transition-transform duration-300">
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
                <div className="text-sm lg:text-xl px-12 pb-4">
                  <p>{content.ans1}</p>{" "}
                </div>
              </div>
            </div>

            {/* FAQ 2 */}
            <div
              className={`relative border-b bg-[#283B5E] rounded-lg border-gray-700`}
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
                <div className="text-sm lg:text-xl px-12 pb-4">
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
                <div className="text-sm lg:text-xl px-12 pb-4">
                  <p>{content.ans3}</p>
                </div>
              </div>
            </div>

            {/* FAQ 4 */}
            {content.que4 && (
              <div className="relative bg-[#283B5E] border-gray-700 border-b rounded-lg">
                <button
                  className="w-full text-left bg-[#182544] p-4 rounded-lg text-base sm:text-lg font-semibold flex items-center"
                  onClick={() => handleToggle(3)}
                >
                  <span className="flex-1 text-base lg:text-xl lg:px-8">
                    {content.que4}
                  </span>
                  <div
                    className={`flex items-center ml-4 border-l border-gray-500 pl-4 ${getIconColor(
                      3
                    )}`}
                  >
                    <span className="text-lg">
                      {activeIndex === 3 ? <FaChevronUp /> : <FaChevronDown />}
                    </span>
                  </div>
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    activeIndex === 3
                      ? "max-h-[500px] mt-4"
                      : "max-h-0 overflow-hidden"
                  }`}
                >
                  <div className="text-sm lg:text-xl px-12 pb-4">
                    <p>{content.ans4}</p>
                  </div>
                </div>
              </div>
            )}

            {/* FAQ 5 */}
            {content.que5 && (
              <div className="relative bg-[#283B5E] border-gray-700 border-b rounded-lg">
                <button
                  className="w-full text-left bg-[#182544] p-4 rounded-lg text-base sm:text-lg font-semibold flex items-center"
                  onClick={() => handleToggle(4)}
                >
                  <span className="flex-1 text-base lg:text-xl lg:px-8">
                    {content.que5}
                  </span>
                  <div
                    className={`flex items-center ml-4 border-l border-gray-500 pl-4 ${getIconColor(
                      4
                    )}`}
                  >
                    <span className="text-lg">
                      {activeIndex === 4 ? <FaChevronUp /> : <FaChevronDown />}
                    </span>
                  </div>
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    activeIndex === 4
                      ? "max-h-[500px] mt-4"
                      : "max-h-0 overflow-hidden"
                  }`}
                >
                  <div className="text-sm lg:text-xl px-12 pb-4">
                    <p>{content.ans5}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq3;
