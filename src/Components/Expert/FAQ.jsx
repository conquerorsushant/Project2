import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import img1 from '../../assets/images/Artboard4.png';
import contact from '../../assets/images/contact.png';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isClicked, setIsClicked] = useState(false);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleClick = () => {
    setIsClicked(!isClicked);
    // Additional logic for the button can go here
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

  return (
    <div className="bg-primary text-white pt-8">
      <div className="px-4 sm:px-8 md:px-12 lg:px-24 pb-20">
        <h2 className="py-10 text-xl sm:text-2xl md:text-3xl font-semibold text-center">
          Frequently Asked Questions (FAQS)
        </h2>

        <div className="mb-8 border-b bg-[#283B5E] rounded-lg border-gray-700">
          <button
            className="w-full text-left bg-[#182544] p-4 rounded-lg text-base sm:text-lg font-semibold flex items-center"
            onClick={() => handleToggle(0)}
          >
            <span className="flex-1 text-sm lg:text-xl">
              What are the benefits of using Data Engineering Services?
            </span>
            <div className={`flex items-center ml-4 border-l border-gray-500 pl-4 ${getIconColor(0)}`}>
              <span className="text-lg">
                {activeIndex === 0 ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </div>
          </button>
          {activeIndex === 0 && (
            <div className="p-4 text-sm lg:text-xl">
              <p><strong>Improved Data Accessibility:</strong> 
              <p> By establishing a structured data infrastructure, data becomes readily accessible for analysis and reporting.</p></p>
             
              <p><strong>Enhanced Data Quality:</strong> <p> Data pipelines ensure data accuracy and consistency, leading to reliable insights.</p></p>
              <p><strong>Streamlined Data-Driven Decision Making:</strong> Easy access to clean and organized data empowers faster and more informed business decisions.</p>
              <p><strong>Scalability and Agility:</strong> A well-designed data engineering solution can seamlessly scale to accommodate future growth and evolving business needs.</p>
            </div>
          )}
        </div>

        <div className="mb-8 border-b bg-[#283B5E] rounded-lg border-gray-700">
          <button
            className="w-full text-left bg-[#182544] p-4 rounded-lg text-base sm:text-lg font-semibold flex items-center"
            onClick={() => handleToggle(1)}
          >
            <span className="flex-1 text-sm lg:text-xl">
              Do you offer any training on data engineering tools and technologies?
            </span>
            <div className={`flex items-center ml-4 border-l border-gray-500 pl-4 ${getIconColor(1)}`}>
              <span className="text-lg">
                {activeIndex === 1 ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </div>
          </button>
          {activeIndex === 1 && (
            <div className="p-4 text-sm lg:text-lg">
              <p>While we don't currently offer public training programs, we leverage our in-house training expertise to stay updated on the latest advancements. This ensures we incorporate the most effective tools and technologies into our client solutions.</p>
            </div>
          )}
        </div>

        <div className="bg-[#283B5E] border-gray-700 border-b rounded-lg">
          <button
            className="w-full text-left bg-[#182544] p-4 rounded-lg text-base sm:text-lg font-semibold flex items-center"
            onClick={() => handleToggle(2)}
          >
            <span className="flex-1 text-sm lg:text-xl">
              What is your approach to data security?
            </span>
            <div className={`flex items-center ml-4 border-l border-gray-500 pl-4 ${getIconColor(2)}`}>
              <span className="text-lg">
                {activeIndex === 2 ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </div>
          </button>
          {activeIndex === 2 && (
            <div className="p-4 text-sm lg:text-lg">
              <p>Data security is paramount. We prioritize implementing robust security measures throughout the data engineering process, including access controls, data encryption, and regular security audits.</p>
            </div>
          )}
        </div>
      </div>

      {/* Contact Section */}
      <div className="relative h-72 md:h-96">
        <img src={img1} alt="Contact" className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex flex-col items-center lg:px-80 justify-center text-center p-4 sm:p-8 bg-black bg-opacity-50">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl lg:px-32   font-semibold mb-4 ">
            Ready to Unleash the Power of Your Data?
          </h2>
          <p className="text-sm sm:text-lg mb-4">
            At BrainsTerra Intelligence, we are passionate about empowering businesses with the transformative power of data. Contact us today to discuss your specific data engineering needs and embark on your journey towards data-driven success.
          </p>
          <button
            onClick={handleClick}
            className={`bg-blue-500 font-semibold flex items-center justify-center gap-2 py-2 px-4 rounded-md text-sm sm:text-base transform transition-transform duration-200 ease-in-out ${
              isClicked ? "scale-110" : ""
            } hover:scale-125`}
          >
            <img src={contact} alt="Contact Us" className="w-5 h-5 sm:w-6 sm:h-6" />
            <span>Contact Us</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
