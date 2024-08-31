import React, { useState } from "react";
import homepng from "../../assets/images/homepng.png";
import arrow from "../../assets/images/blurarrow.png";
import comppng from "../../assets/images/comppng.png";
import data from "../../assets/images/datapng.png";
import more from "../../assets/images/readpng.png";

const Second = () => {
  const [isReadMore, setIsReadMore] = useState(false);

  const handleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <div className="bg-primary text-white p-8 lg:px-36">
      <div>
        <div className="text-center">
          <h2 className="text-sm py-10 md:text-xl lg:text-xl font-bold mb-4">
            BrainsTerra Intelligence has two separate and independent business
            wings having expertise in the following domains.
          </h2>
        </div>

        <div className="mt-8 flex flex-col lg:flex-row items-start justify-between">
          <div className="lg:w-1/2 w-full flex justify-center lg:justify-start">
            <img
              src={homepng}
              alt="Tech Product Development"
              className="lg:ml-0 ml-4"
            />
          </div>

          <div className="mt-6 lg:w-1/2 w-full flex items-start text-center lg:text-left">
            <div className="flex items-center lg:mr-4 justify-center lg:justify-start">
              <img src={arrow} className="w-20 lg:w-32" />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-base md:text-2xl font-bold">
                Tech Product Development Wing
              </h3>
              <p className="mt-4 text-sm md:text-base bg-black p-4">
                We provide Digital Transformation and Custom Product Engineering
                services to start-ups and large enterprises across the globe.
                Our engineering teams are experts in the latest machine learning
                practices, data science modelling, deep learning, computer
                vision, natural language processing,
                artificial-intelligence-powered software building, and
                traditional yet modern SaaS-based software development.
              </p>

              <div className="flex flex-col md:flex-row justify-center lg:space-x-16 lg:justify-start mt-6 gap-4">
                <div className="flex items-center">
                  <img src={comppng} />
                </div>
                <div className="flex items-center">
                  <img src={data} />
                </div>
                <div className="flex items-center">
                  <button onClick={handleReadMore} className="">
                    {isReadMore ? <img src={more} /> : <img src={more} />}
                  </button>
                </div>
              </div>
              {isReadMore && (
                <div className="mt-8 p-4 bg-black text-white rounded">
                  <p className="text-sm md:text-base">
                    We are obsessed with perfection in our work, and we never
                    compromise on the quality of the software we develop. Our
                    products are always highly secure, scalable, and brilliant
                    in performance.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Second Section*/}
      <div>
        <div className="lg:py-10 lg:px-6 font-semibold text-sm md:text-base">
          We are skilled at developing high-quality, AI-enabled, innovative, and
          robust software solutions for rapid business transformation across the
          industries. This wing also has a strong data analytics team which
          helps our clients make smart business decisions to optimize their
          services and products.
        </div>

        <div className="mt-8 flex flex-col lg:flex-row items-start justify-between">
          <div className="mt-6 lg:w-1/2 w-full flex items-start text-center lg:text-left">
            <div className="flex items-center lg:mr-4 justify-center lg:justify-start">
              <img src={arrow} className="w-20 lg:w-32" />
            </div>

            <div className="flex flex-col justify-center">
              <h3 className="text-sm  md:text-2xl font-bold">
                Start-up Talent Acquisition Wing
              </h3>
              <p className="mt-4 text-sm md:text-sm bg-black p-4">
                This wing of BrainsTerra Intelligence, having in-depth knowledge
                of technologies, is expert in technical/IT hiring. We are
                experts when it comes to recruiting niche talent in the market.
                Adhering to the high level of talent-quality standards and
                focused exclusively on engineering and IT hiring, we are a team
                of expert technical recruiters who can help you build your
                extraordinary technology teams from scratch.
              </p>

              <div className="flex flex-col md:flex-row justify-center lg:space-x-16 lg:justify-start mt-6 gap-4">
                <div className="flex items-center">
                  <img src={comppng} />
                </div>
                <div className="flex items-center">
                  <img src={data} />
                </div>
                <div className="flex items-center">
                  <button onClick={handleReadMore} className="">
                    {isReadMore ? <img src={more} /> : <img src={more} />}
                  </button>
                </div>
              </div>
              {isReadMore && (
                <div className="mt-8 p-4 bg-black text-white rounded">
                  <p className="text-sm md:text-sm">
                    We have successfully helped 150+ top product-based start-up
                    tech companies build their high-end engineering/technology
                    teams from scratch in India and USA.
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className="lg:w-1/2 w-full flex justify-center lg:justify-end lg:ml-20">
            <img
              src={homepng}
              alt="Tech Product Development"
              className="lg:mr-0 mr-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Second;
