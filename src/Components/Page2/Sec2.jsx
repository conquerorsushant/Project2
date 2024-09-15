import React, { useState } from "react";
import a1 from "../../assets/images/Asset1.png";
import a2 from "../../assets/images/Asset5.png";
import a3 from "../../assets/images/Asset9.png";
import a4 from "../../assets/images/Asset4.png";
import a5 from "../../assets/images/Asset6.png";
import a6 from "../../assets/images/Asset11.png";
import a7 from "../../assets/images/Asset13.png";
import a8 from "../../assets/images/Asset15.png";
import a9 from "../../assets/images/Asset12.png";
import a10 from "../../assets/images/Asset14.png";
import lines from "../../assets/images/lines.png";
import bg3 from "../../assets/images/Artboard1.png";
import bg2 from "../../assets/images/bg2.png";
import contact from "../../assets/images/contact.png";
import left1 from "../../assets/images/Artboard9.png";
import left2 from "../../assets/images/Artboard8.png";
import color from "../../assets/images/Asset17.png";
import arrow from "../../assets/images/Arrow111.png";
import favicon from "../../assets/images/favicon.png";

const Sec2 = () => {
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
        <div className="flex lg:flex-row flex-col lg:gap-10 gap-6 flex-wrap lg:pt-20 lg:px-24 p-2">
          <div className="flex-1 pt-2 lg:px-20">
            <div className="flex items-start justify-center gap-4 lg:p-4 mx-2 sm:mx-8">
              <img
                src={a1}
                alt="Data Lakes Icon"
                className="w-10 h-10 sm:w-auto sm:h-auto mt-2"
              />
              <div>
                <h2 className="text-base sm:text-xl lg:text-3xl font-semibold">
                  Leading CRM Platforms
                </h2>
                <p className="text-sm sm:text-base">
                  We have extensive experience with popular CRM platforms like
                  Salesforce, HubSpot, Zoho CRM, and Microsoft Dynamics 365. We
                  can help you select the platform that best aligns with your
                  specific needs, budget, and scalability requirements.
                </p>
              </div>
            </div>

            <div className="pt-6 lg:pt-9 flex items-start justify-center gap-4 lg:p-4 mx-2 sm:mx-8">
              <img
                src={a2}
                alt="Enterprise Data Warehouses Icon"
                className="w-10 h-10 mt-2 sm:w-auto sm:h-auto"
              />
              <div>
                <h2 className="text-base sm:text-xl lg:text-3xl font-semibold">
                  Custom CRM Development::
                </h2>
                <p className="text-sm sm:text-base">
                  For complex requirements or situations where off-the-shelf
                  solutions fall short, our developers can build custom CRM
                  applications tailored to your unique business processes and
                  workflows.{" "}
                </p>
              </div>
            </div>

            <div className="pt-6 flex items-start justify-center gap-4 lg:p-4 mx-2 sm:mx-8">
              <img
                src={a3}
                alt="Cloud Migration Services Icon"
                className="w-10 h-10 mt-2 sm:w-auto sm:h-auto opacity-50"
              />
              <div>
                <h2 className="text-base sm:text-xl lg:text-3xl font-semibold">
                  Cloud Migration Services:
                </h2>
                <p className="text-sm sm:text-base">
                  We provide seamless cloud migration for your data
                  infrastructure, leveraging platforms like AWS, Azure, or GCP.
                  Our expertise extends to data lake, data warehouse, and data
                  pipeline migration, ensuring a smooth and efficient
                  transition.
                </p>
              </div>
            </div>
          </div>

          <div className="flex-1 pt-2 lg:px-20">
            <div className=" pl-2 flex items-start justify-center gap-4 lg:p-4 mx-2 sm:mx-8">
              <img
                src={a4}
                alt="Data Pipelines Icon"
                className="w-10 h-10 mt-2 sm:w-auto sm:h-auto"
              />
              <div>
                <h2 className="text-base sm:text-xl lg:text-3xl font-semibold">
                  API Integrations:
                </h2>
                <p className="text-sm sm:text-base">
                  We can integrate your CRM with other business-critical
                  applications like marketing automation platforms, e-commerce
                  platforms, and helpdesk software to create a unified customer
                  experience ecosystem.
                </p>
              </div>
            </div>

            <div className="mt-10 flex items-start justify-center gap-4 lg:p-4 mx-2 sm:mx-8">
              <img
                src={a5}
                alt="Productionizing ML Algorithms Icon"
                className="w-10 h-10 mt-2 sm:w-auto sm:h-auto"
              />
              <div>
                <h2 className="text-base sm:text-xl lg:text-3xl font-semibold">
                  Data Management &amp; Analytics:
                </h2>
                <p className="text-sm sm:text-base">
                  We prioritize data security and ensure your CRM provides
                  insightful reporting and analytics to understand customer
                  behavior, identify trends, and optimize marketing and sales
                  strategies.
                </p>
              </div>
            </div>
          </div>
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
          <h2 className="text-lg sm:text-3xl font-bold mx-auto max-w-screen-sm sm:max-w-[80%]">
            Why Choose
            <br />
            BrainsTerra Intelligence
            <br />
            for Your CRM Development Needs?
          </h2>
          <div className="lg:mt-4 mb-1 mt-2 sm:mt-8">
            <button
              onClick={handleClick}
              className={`bg-blue-500 font-semibold flex items-center justify-center lg:gap-2 py-1 px-1 lg:py-2 lg:px-4 rounded-md text-xs sm:text-lg transform transition-transform duration-200 ease-in-out ${
                isClicked ? "scale-110" : ""
              } hover:scale-125`}
            >
              <img
                src={contact}
                alt="Contact Us"
                className="w-5 h-5 sm:w-6 sm:h-6"
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
        <div className="flex lg:flex-row flex-col  lg:gap-12 flex-wrap  lg:px-36 p-2">
          <div className="flex-1 lg:px-20  lg:flex-col flex-row pt-2">
            <div className="flex pt-2 pl-2 items-start justify-center gap-4 lg:p-4 mx-2 sm:mx-8">
              {/* Shift text */}
              <img
                src={a6}
                alt="Customized Solutions Icon"
                className="w-10 h-10  mt-2 sm:w-auto sm:h-auto"
              />
              <div>
                <h2 className="text-base sm:text-3xl font-semibold">
                  In-Depth Needs Assessment:
                </h2>
                <p className="text-sm sm:text-base lg:pt-2">
                  We begin with a comprehensive needs assessment to understand
                  your customer relationship management challenges, target
                  audience, and desired functionalities.
                </p>
              </div>
            </div>

            <div className="flex pt-2 items-start justify-center gap-4 lg:p-4 mx-2 sm:mx-8 mt-2">
              {/* Shift text */}
              <img
                src={a7}
                alt="Focus on Scalability Icon"
                className="w-10 h-10  mt-2 sm:w-auto sm:h-auto"
              />
              <div>
                <h2 className="text-base sm:text-3xl font-semibold">
                  Focus on User Experience:
                </h2>
                <p className="text-sm sm:text-base lg:pt-2">
                  We design user-friendly CRM interfaces that empower your
                  sales, marketing, and customer service teams to leverage the
                  system effectively and efficiently.
                </p>
              </div>
            </div>

            <div className="flex pt-2 items-start justify-center gap-4 lg:p-4 mx-2 sm:mx-8 mt-2">
              {/* Shift text */}
              <img
                src={a8}
                alt="Cost-Effectiveness Icon"
                className="w-10 h-10  mt-2 sm:w-auto sm:h-auto"
              />
              <div>
                <h2 className="text-base sm:text-3xl font-semibold">
                  Data-Driven Customization:
                </h2>
                <p className="text-sm sm:text-base lg:pt-2">
                  We don&#39;t offer a one-size-fits-all approach. Our CRM
                  solutions are customized based on your data and workflows to
                  ensure they address your specific business needs.
                </p>
              </div>
            </div>
          </div>

          <div className="flex-1 lg:px-20">
            <div className="flex pt-2 pl-2 items-start justify-center gap-4 lg:p-4 mx-2 sm:mx-8 mt-2">
              {/* Shift text */}
              <img
                src={a9}
                alt="Technology Expert Icon"
                className="w-10 h-10 mt-2 sm:w-auto sm:h-auto"
              />
              <div>
                <h2 className="text-base sm:text-3xl font-semibold">
                  Integration Expertise:
                </h2>
                <p className="text-sm sm:text-base lg:pt-2">
                  We possess the skills to seamlessly integrate your CRM with
                  existing systems, eliminating data silos and streamlining
                  information flow across your organization.
                </p>
              </div>
            </div>
            <div className="flex  pl-1 items-start justify-center gap-4 lg:p-4 mx-2 sm:mx-8 mt-2">
              {/* Shift text */}
              <img
                src={a10}
                alt="In-House Training Icon"
                className="w-10 h-10 mt-2 sm:w-auto sm:h-auto"
              />
              <div>
                <h2 className="text-base sm:text-3xl font-semibold">
                  Scalable &amp; Secure Solutions:
                </h2>
                <p className="text-sm sm:text-base lg:pt-2">
                  Our CRM solutions are built with scalability in mind, allowing
                  them to grow alongside your business. We also prioritize
                  robust security measures to safeguard your valuable customer
                  data.
                </p>
              </div>
            </div>
          </div>
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
            <h2 className="text-xl sm:text-3xl font-bold">
            A Smooth Onboarding Experience: Your CRM Development Journey Starts Here
            </h2>
            <p className="text-sm sm:text-xl font-semibold lg:mt-4 max-w-2xl mx-auto rounded-lg shadow-lg">
            We prioritize a clear and efficient onboarding process to ensure a positive experience throughout your
            CRM development journey with BrainsTerra Intelligence:
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sec2;
