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
import left1 from '../../assets/images/Artboard9.png';
import left2 from "../../assets/images/Artboard8.png";
import color from '../../assets/images/Asset17.png';
import arrow from '../../assets/images/Arrow111.png'
import favicon from '../../assets/images/favicon.png'

const Section2 = () => {
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
        <img src={a1} alt="Data Lakes Icon" className="w-10 h-10 sm:w-auto sm:h-auto mt-2" />
        <div>
          <h2 className="text-base sm:text-xl lg:text-3xl font-semibold">Data Lakes</h2>
          <p className="text-sm sm:text-base">
            We design and implement scalable data lakes using technologies like Apache Hadoop, Amazon S3, or Azure Data Lake Storage. These repositories serve as the central hub for ingesting and storing all your raw, structured, and semi-structured data.
          </p>
        </div>
      </div>

      <div className="pt-6 lg:pt-9 flex items-start justify-center gap-4 lg:p-4 mx-2 sm:mx-8">
        <img src={a2} alt="Enterprise Data Warehouses Icon" className="w-10 h-10 mt-2 sm:w-auto sm:h-auto" />
        <div>
          <h2 className="text-base sm:text-xl lg:text-3xl font-semibold">Enterprise Data Warehouses (EDW):</h2>
          <p className="text-sm sm:text-base">
            We help you implement and manage high-performance EDWs using technologies like Snowflake, Amazon Redshift, or Google BigQuery. EDWs provide a centralized repository for structured, business-critical data, optimized for efficient querying and analysis.
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
      We provide seamless cloud migration for your data infrastructure, leveraging platforms like AWS, Azure, or GCP. Our expertise extends to data lake, data warehouse, and data pipeline migration, ensuring a smooth and efficient transition.
    </p>
  </div>
</div>

    </div>

    <div className="flex-1 pt-2 lg:px-20">
      <div className=" pl-2 flex items-start justify-center gap-4 lg:p-4 mx-2 sm:mx-8">
        <img src={a4} alt="Data Pipelines Icon" className="w-10 h-10 mt-2 sm:w-auto sm:h-auto" />
        <div>
          <h2 className="text-base sm:text-xl lg:text-3xl font-semibold">Data Pipelines:</h2>
          <p className="text-sm sm:text-base">
            We leverage robust frameworks like Apache Airflow, Apache Spark, or Luigi to construct efficient data pipelines. These automated workflows seamlessly extract, transform, and load (ETL) data from disparate sources into your data lake or data warehouse, ensuring consistent and reliable data flow.
          </p>
        </div>
      </div>

      <div className="pt-6 flex items-start justify-center gap-4 lg:p-4 mx-2 sm:mx-8">
        <img src={a5} alt="Productionizing ML Algorithms Icon" className="w-10 h-10 mt-2 sm:w-auto sm:h-auto" />
        <div>
          <h2 className="text-base sm:text-xl lg:text-3xl font-semibold">Productionizing Machine Learning (ML) Algorithms:</h2>
          <p className="text-sm sm:text-base">
            We bridge the gap between development and deployment by operationalizing your ML models. We containerize models using Docker and orchestrate deployments using Kubernetes, ensuring seamless integration into your production environment.
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
      style={{ right: '0', marginRight: '0px' }} 
    />
  </div>

  {/* Line Image */}
  <div className="relative mt-0 lg:mb-20 mb-10">
    <img src={lines} alt="Lines" className="w-full bottom-11 left-0 h-auto" />
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
      for Your Data Engineering Needs?
    </h2>
    <div className="lg:mt-4 mb-1 mt-2 sm:mt-8">
      <button
        onClick={handleClick}
        className={`bg-blue-500 font-semibold flex items-center justify-center lg:gap-2 py-1 px-1 lg:py-2 lg:px-4 rounded-md text-xs sm:text-lg transform transition-transform duration-200 ease-in-out ${
          isClicked ? "scale-110" : ""
        } hover:scale-125`}
      >
        <img src={contact} alt="Contact Us" className="w-5 h-5 sm:w-6 sm:h-6" />
        Contact Us
      </button>
    </div>
  </div>
</div>








      {/* Third Section */}
      <div className="relative">
      <div className="text-center lg:py-12   py-8 flex lg:flex-col   flex-col items-center
       justify-center">
            <p className="font-semibold text-2xl lg:text-3xl lg:px-[380px] px-[]">
            We differentiate ourselves through several
            key aspects:
            </p>
           <div className="lg:py-4 ">
           <img src={arrow} className=""/>
           </div>
           

          </div>
        <div className="flex lg:flex-row flex-col  lg:gap-12 flex-wrap  lg:px-36 p-2">
         
          <div className="flex-1 lg:px-20  lg:flex-col flex-row pt-2">
            <div className="flex pt-2 pl-2 items-start justify-center gap-4 lg:p-4 mx-2 sm:mx-8">
              {/* Shift text */}
              <img src={a6} alt="Customized Solutions Icon" className="w-10 h-10  mt-2 sm:w-auto sm:h-auto" />
              <div>
                <h2 className="text-base sm:text-3xl font-semibold">Customized Solutions:</h2>
                <p className="text-sm sm:text-base lg:pt-2">
                  We understand that one-size-fits-all solutions rarely work in
                  data engineering. We take a collaborative approach,
                  understanding your unique business challenges and data
                  landscape to design a bespoke solution that perfectly aligns
                  with your requirements.
                </p>
              </div>
            </div>

            <div className="flex pt-2 items-start justify-center gap-4 lg:p-4 mx-2 sm:mx-8 mt-2">
              {/* Shift text */}
              <img src={a7} alt="Focus on Scalability Icon" className="w-10 h-10  mt-2 sm:w-auto sm:h-auto" />
              <div>
                <h2 className="text-base sm:text-3xl font-semibold">Focus on Scalability:</h2>
                <p className="text-sm sm:text-base lg:pt-2">
                  We design and build data infrastructure with scalability in
                  mind. As your data volume and complexity grow, your data
                  engineering infrastructure seamlessly scales to accommodate
                  future needs.
                </p>
              </div>
            </div>

            <div className="flex pt-2 items-start justify-center gap-4 lg:p-4 mx-2 sm:mx-8 mt-2">
              {/* Shift text */}
              <img src={a8} alt="Cost-Effectiveness Icon" className="w-10 h-10  mt-2 sm:w-auto sm:h-auto" />
              <div>
                <h2 className="text-base sm:text-3xl font-semibold">Cost-Effectiveness:</h2>
                <p className="text-sm sm:text-base lg:pt-2">
                  We leverage our in-house training programs to optimize our
                  processes, translating into cost savings that we pass on to
                  you. Additionally, we offer customized plans to fit your
                  budget and project scope.
                </p>
              </div>
            </div>
          </div>

          <div className="flex-1 lg:px-20">
            <div className="flex pt-2 pl-2 items-start justify-center gap-4 lg:p-4 mx-2 sm:mx-8 mt-2">
              {/* Shift text */}
              <img src={a9} alt="Technology Expert Icon" className="w-10 h-10 mt-2 sm:w-auto sm:h-auto" />
              <div>
                <h2 className="text-base sm:text-3xl font-semibold">Technology Expert:</h2>
                <p className="text-sm sm:text-base lg:pt-2">
                  Our team is well-versed in a comprehensive suite of data
                  engineering tools and technologies. This flexibility allows us
                  to recommend the best-fit solutions based on your specific
                  needs and infrastructure, ensuring optimal performance and
                  cost-effectiveness.
                </p>
              </div>
            </div>
            <div className="flex pt-2 pl-1 items-start justify-center gap-4 lg:p-4 mx-2 sm:mx-8 mt-2">
              {/* Shift text */}
              <img src={a10} alt="In-House Training Icon" className="w-10 h-10 mt-2 sm:w-auto sm:h-auto" />
              <div>
                <h2 className="text-base sm:text-3xl font-semibold">In-House Training:</h2>
                <p className="text-sm sm:text-base lg:pt-2">
                  Our team continuously undergoes rigorous training to stay at
                  the forefront of the ever-evolving data engineering landscape.
                  This ensures we leverage the latest advancements and best
                  practices to deliver exceptional service.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Left2 Image Positioned on Right Side */}
        <div className="absolute right-0 top-72
     bottom-0 hidden lg:flex items-center justify-end z-10">
  <img
    src={left2}
    alt="Left1"
    className="lg:w-[270px] max-w-none h-auto object-contain"
    style={{ right: '0', marginRight: '0px' }} // Ensure image is flush with the right side
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
      A Seamless Onboarding Experience
    </h2>
    <p className="text-sm sm:text-xl font-semibold lg:mt-4 max-w-2xl mx-auto rounded-lg shadow-lg">
      We prioritize ensuring a smooth and efficient onboarding experience for every client. Our process typically involves the following steps:
    </p>
  </div>
</div>

      </div>
    </div>
  );
};

export default Section2;
