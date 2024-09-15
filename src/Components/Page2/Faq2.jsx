import React, { useState, useEffect } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import img1 from "../../assets/images/Artboard4.png";
import contact from "../../assets/images/contact.png";
import bg from "../../assets/images/p12.png";

const Faq2 = () => {
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
        className={`relative z-20 lg:mx-20 p-8 ${
          faqExpanded
            ? "lg:translate-y-[-200px] translate-y-[-280px] lg:pt-8 lg:py-4 pt-14 "
            : ""
        }`}
      >
        <h2 className="lg:text-4xl text-xl font-bold mb-4">
          Frequently Asked Questions (FAQs)
        </h2>
      </div>

      {/* Background Image Container */}
      <div
        className={`relative ${
          faqExpanded ? "h-[500px] sm:h-[600px] md:h-[700px]" : "h-[400px]"
        } transition-height duration-300`}
      >
        <img
          src={bg}
          alt="FAQ Background"
          className="absolute inset-0 lg:w-auto lg:h-auto w-full h-full object-cover opacity-20"
        />

        {/* FAQ Content Container */}
        <div
          className={`relative z-30 px-8 pt-3 lg:mx-20 lg:pt-20  transition-transform duration-300 ${
            faqExpanded ? "lg:translate-y-[-220px] translate-y-[-350px]  " : ""
          }`}
        >
          <div className="space-y-4 lg:pt-12">
            {/* FAQ 1 */}
            <div className="relative mb-4 border-b bg-[#283B5E] rounded-lg border-gray-700">
              <button
                className="w-full text-left bg-[#182544] p-4 rounded-lg text-base sm:text-lg font-semibold flex items-center"
                onClick={() => handleToggle(0)}
              >
                <span className="flex-1 text-base lg:text-xl lg:px-8">
                  What are the benefits of using a CRM system?
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
                  <p>
                    CRM systems offer numerous benefits, including improved
                    customer service, streamlined sales processes, enhanced
                    marketing campaign targeting, better data-driven decision
                    making, and ultimately, increased customer loyalty and
                    revenue growth.
                  </p>{" "}
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
                  Can you integrate my CRM with other software?
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
                  <p>
                    Yes, we have extensive experience integrating CRMs with
                    various business-critical applications like marketing
                    automation platforms, e-commerce platforms, and helpdesk
                    software. This creates a unified customer experience
                    ecosystem and eliminates data silos.
                  </p>
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
                  How much does it cost to develop a CRM system?
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
                  <p>
                    The cost of CRM development can vary depending on the
                    complexity of your needs, the chosen platform (if
                    applicable), customization requirements, and the scope of
                    integrations. During the discovery phase, we provide a
                    transparent cost estimate tailored to your specific
                    requirements.
                  </p>
                </div>
              </div>
            </div>
            {/* FAQ 4 */}
            <div className="relative bg-[#283B5E] border-gray-700 border-b rounded-lg">
              <button
                className="w-full text-left bg-[#182544] p-4 rounded-lg text-base sm:text-lg font-semibold flex items-center"
                onClick={() => handleToggle(2)}
              >
                <span className="flex-1 text-base lg:text-xl lg:px-8">
                  How long does it take to implement a CRM system?
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
                  <p>
                    The implementation timeline can vary depending on the
                    project&#39;s scope. For simpler CRM configurations using
                    existing platforms, implementation may take a few weeks.
                    Custom CRM development projects or complex integrations may
                    require several months.
                  </p>
                </div>
              </div>
            </div>
            {/* FAQ 5 */}
            <div className="relative bg-[#283B5E] border-gray-700 border-b rounded-lg">
              <button
                className="w-full text-left bg-[#182544] p-4 rounded-lg text-base sm:text-lg font-semibold flex items-center"
                onClick={() => handleToggle(2)}
              >
                <span className="flex-1 text-base lg:text-xl lg:px-8">
                  Do you offer ongoing support after CRM implementation?
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
                  <p>
                    Yes, we offer ongoing support plans to ensure your team can
                    leverage the CRM effectively. This includes user training,
                    technical support, and guidance as your business needs
                    evolve.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Us Section */}
      <div className="relative h-[400px] ">
        <img src={img1} alt="Contact" className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex flex-col items-center lg:px-80 justify-center text-center p-4 sm:p-8 ">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl lg:mx-[400px] font-semibold mb-4">
            Ready to Build Stronger Customer Relationships?
          </h2>
          <p className="text-sm sm:text-lg lg:mx-52 mb-2">
            At BrainsTerra Intelligence, we are passionate about empowering
            businesses to cultivate strong and lasting customer relationships.
            Our CRM development expertise can help you streamline interactions,
            gain valuable customer insights, and ultimately achieve your
            business goals. Contact us today to discuss your CRM needs and
            explore how we can help you build a customer-centric future!
          </p>
          <button
            onClick={handleClick}
            className={`bg-blue-500 font-semibold flex items-center justify-center gap-2 py-2 px-4 rounded-md text-sm sm:text-base transform transition-transform duration-200 ease-in-out ${
              isClicked ? "scale-110" : ""
            } hover:scale-125`}
          >
            <img
              src={contact}
              alt="Contact Us"
              className="w-auto h-auto sm:w-auto sm:h-auto"
            />
            <span>Contact Us</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Faq2;
