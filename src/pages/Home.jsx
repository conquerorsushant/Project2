import React, { useState } from "react";

import lines from "../assets/images/lines.png";
import t1 from "../assets/images/trangle.png";
import t2 from "../assets/images/blurarrow.png";
import t3 from "../assets/images/comppng.png";
import t4 from "../assets/images/datapng.png";
import t6 from "../assets/images/allarrow.png";
import t7 from "../assets/images/triangleone.png";
import t8 from "../assets/images/150plus.png";
import t9 from "../assets/images/button-style.png";
import n1 from "../assets/images/n1.png";
import n2 from "../assets/images/n2.png";
import n3 from "../assets/images/n3.png";
import n4 from "../assets/images/n4.png";
import n5 from "../assets/images/groupuser.png";
import n6 from "../assets/images/groupcoress.png";
import n7 from "../assets/images/lionpng.png";
import n8 from "../assets/images/sparepng.png";
import n9 from "../assets/images/king.png";
import r1 from "../assets/images/button-style.png";
import f1 from "../assets/images/f1.png";
import f2 from "../assets/images/f2.png";
import f3 from "../assets/images/f3.png";
const Home = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="">
     <div className="banner relative">
  <div className="banner__content">
  <div class="col-md-8 ">
						<h1 class="banner__content-title pl-16 ">A one-stop destination for START-ups to start, and EXCEL in their businesses.</h1>
					</div>
    
    {/* Container for the image */}
    <div className="absolute inset-x-0 top-1/3 lg:top-36 z-20">
      <img src={lines} alt="Lines" className="w-full h-auto" />
    </div>
  </div>

  <div className="container banner-top-content">
    <div className="row">
      <div className="col-md-6"></div>
      <div className="col-md-6">
        <div className="black-bg-text">
          <p className="text-left brain-text p-3">
            BrainsTerra Intelligence enables technical and non-technical CEOs/Founders to start, and excel in their businesses by helping them in building their high-quality engineering teams, and developing technology products for them. Companies can outsource all IT and tech development work from us until they have their own tech teams.
          </p>
        </div>
      </div>
    </div>
  </div>

  <div className="container mt-5 pb-md-5">
    <div className="row">
      <div className="col-md-6">
        <div className="top-style">
          <img alt="" className="first-imgss" />
          <p className="font-weight-bold left-bold">
            Whether it is the starting or expansion of your business, we can help you take it to the next level.
          </p>
          &nbsp;
        </div>
      </div>
    </div>
  </div>
</div>

      <div className="container mt-0 mt-md-5" id="about-us">
      <p
        className="font-weight-bold left-bold"
        style={{ textAlign: "center", fontSize: "18px" }}
      >
        BrainsTerra Intelligence has two separate and independent business
        wings having expertise in the following domains.
      </p>

      <div className="row">
        {/* Image on the left */}
        <div className="col-md-6">
          <img alt="" className="image-length" src={t1} />
        </div>

        {/* Content on the right */}
        <div className="col-md-6">
          <div className="d-inline">
            <br />
            <h1 className="font-app">
              <img alt="" className="arrimg" src={t2} />
              Tech Product Development Wing
            </h1>
          </div>

          <div className="black-bg-text">
            <p className="text-left black-text p-3">
              We provide Digital Transformation and Custom Product Engineering
              services to start-ups and large enterprises across the globe.
              Our engineering teams are experts in the latest machine learning
              practices, data science modeling, deep learning, computer vision,
              natural language processing, AI-powered software building, and
              traditional yet modern SaaS-based software development.
            </p>
          </div>

          <div className="row">
            {/* Column 1 with image */}
            <div className="col-md-4 col-4">
              <img alt="" className="col-smallimg" src={t3} />
            </div>

            {/* Column 2 with another image */}
            <div className="col-md-4 col-4">
              <img alt="" className="col-smallimg" src={t4} />
            </div>

            {/* Column 3 with "Read More" text and image */}
            <div
              className="col-md-4 col-4 cursor-pointer flex items-center justify-center"
              onClick={toggleCollapse}
            >
              <span className="cursor">READ MORE</span>
              <img alt="" className="pl-1" src={t6} />
            </div>

            {/* Collapsible section */}
            {isCollapsed && (
              <div className="col-12 mt-3 style-read">
                <div className="readmore-boxx">
                  We are obsessed with perfection in our work, and we never
                  compromise on the quality of the software we develop. Our
                  products are always highly secure, scalable, and brilliant
                  in performance.
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <br />

      {/* Paragraph under the row */}
      <p className="text-left p-2 para-font">
        We are skilled at developing high-quality, AI-enabled, innovative, and
        robust software solutions for rapid business transformation across
        industries. This wing also has a strong data analytics team which
        helps our clients make smart business decisions to optimize their
        services and products.
      </p>
    </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className="font-app">
              <img alt="" className="arrimg" src={t2} />
              Start-up Talent Acquisition Wing
            </h1>
            <p className="text-left black-text p-3">
              This wing of BrainsTerra Intelligence, having in-depth knowledge
              of technologies, is expert in technical/IT hiring. We are experts
              when it comes to recruiting niche talent in the market. Adhering
              to the high level of talent-quality standards and focused
              exclusively on engineering and IT hiring, we are a team of expert
              technical recruiters who can help you build your extraordinary
              technology teams from scratch.
            </p>
            <div className="row">
              <div className="col-md-6 col-6">
                <img alt="" className="col-smallimg" src={t8} />
              </div>
              <div
                className="col-md-4 col-4 cursor-pointer flex items-center justify-center"
                onClick={toggleCollapse}
              >
                <span className="cursor">READ MORE</span>
                <img alt="" className="pl-1" src={t6} />
              </div>
              {isCollapsed && (
                <div className="col-12 mt-3 style-read">
                  <div className="readmore-boxx">
                    We have successfully helped 150+ top product-based start-up
                    tech companies build their high-end engineering/technology
                    teams from scratch in India and USA..
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="col-md-6">
            <img alt="" className="image-length float-image" src={t7} />
          </div>
        </div>
        <p className="text-left p-2 para-font"></p>
      </div>
      <div className="intelligence corevalue">
        <div className="container">
          <h1 className="heading text-center mb-4 pb-sm-5 flex items-center justify-center">
            Our Core Values
            <img alt="" className="ml-4" src={t9} />
          </h1>
          <div className="intelligence__row">
            <div className="intelligence__row-single two">
              <span className="line"></span>
              <div className="content">
                <h3>WISDOM</h3>
              </div>
            </div>
            <div className="intelligence__row-single one">
              <span className="line"></span>
              <div className="content">
                <h3>CREATIVITY</h3>
              </div>
            </div>
            <div className="intelligence__row-single three">
              <span className="line"></span>
              <div className="content">
                <h3>INTEGRITY</h3>
              </div>
            </div>
            <div className="intelligence__row-single four">
              <span className="line"></span>
              <div className="content">
                <h3>COURAGE</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-4 pt-5 text-center"></div>
      </div>
      <div className="intelligence corevalue grid_view">
        <div className="intelligence__row">
          <div className="intelligence__row-single two">
            <img alt="" src={n1} />
            <div className="content"></div>
          </div>
          <div className="intelligence__row-single one">
            <img alt="" src={n2} />
            <div className="content"></div>
          </div>
          <div className="intelligence__row-single three">
            <img alt="" src={n3} />
            <div className="content"></div>
          </div>
          <div className="intelligence__row-single four">
            <img alt="" src={n4} />
            <div className="content"></div>
          </div>
        </div>
      </div>
      <div className="container core-content">
        <h2 className="text-center mb-5 mt-4 font-reduce">
          We act with integrity, respect, trust, and great collaborative
          spirits.
        </h2>
        <div className="row mb-4">
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-4">
                <img alt="" className="core-img" src={n5} />
              </div>
              <div className="col-md-8 mt-4">
                <p className="core-text">
                  We are CUSTOMER OBSESSED. We are perfection obsessed.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-4">
                <img alt="" className="core-img" src={n6} />
              </div>
              <div className="col-md-8 mt-4">
                <p className="core-text">
                  Our unique work approach enables us to STAND OUT from the
                  crowd.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row ">
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-4">
                <img alt="" className="core-img" src={n7} />
              </div>
              <div className="col-md-8">
                <p className="core-text">
                  We are a group of ambitious people with an EXTREME FOCUS on
                  our commitments.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-4">
                <img alt="" className="core-img" src={n8} />
              </div>
              <div className="col-md-8">
                <p className="core-text">
                  The only fuel we need from our clients to perform beyond their
                  expectations, is regular and QUALITY COORDINATION.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lionbg ">
        <div className="container last-content">
          <img alt="" className="kingpng mb-3" src={n9} />
          <h1
            style={{
              fontSize: "17px",
              textAlign: "center",
              width: "90%",
              margin: "0 auto",
            }}
          >
            We are heavily involved in the start-up space. More than 90% of our
            new clients come from the referrals of our existing clients who are
            happy with our work approach. We treat our client company as our own
            company and go to any possible extent to achieve its desired
            business objective. You can consider us as your internal team, give
            us a chance to serve you, and see us performing beyond your
            expectations.
          </h1>
        </div>
      </div>
      <p>
        <img alt="" className="w-100 second-last" src={lines} />
      </p>
      <div className="synergy">
        <div className="container synergy-content">
          <div className="synergy__content">
            <div className="bg-black">
              <p className="fonts-define">
                Try the PILOT MODE of our services without worrying about any
                further commitment.
                <br />
                Drop us a line to connect.
              </p>
            </div>
          </div>
          <h1 className="heading mb-4 flex items-center justify-center">
            We&#39;d love to hear from you{" "}
            <img alt="" className="ml-4" src={r1} />
          </h1>
        </div>
      </div>
      <div className="subfooter">
        <div className="container">
          <div className="whatwedo row mt-0 text-center">
            <div className="col-md-4 mt-4 mt-md-0 px-lg-5 flex flex-col items-center justify-center">
              <img alt="" className="icon  " src={f1} />
              <h3>Meet Us at</h3>
              <span>
                Level 7, Tower C, 7C, Green Boulevard, B9/A, Sector-62,
                Noida-201309, UP
              </span>
            </div>
            <div className="col-md-4 mt-4 mt-md-0 px-lg-5 flex flex-col items-center justify-center">
              <img alt="" className="icon " src={f2} />
              <h3>Call Us</h3>
              <span>
                p.{" "}
                <a href="tel:(0)120-4730534" title="">
                  {" "}
                  (0) 120-4730534
                </a>
              </span>
            </div>
            <div className="col-md-4 mt-4 mt-md-0 px-lg-5 flex flex-col items-center justify-center">
              <img alt="" className="icon " src={f3} />
              <h3>Email Us</h3>
              <span>
                <a href="mailto:info@BrainsTerra.com" title="">
                  {" "}
                  info@brainsterra.com
                </a>
              </span>
            </div>
          </div>
          <h4 className="green_heading text-center">We love green city!</h4>
        </div>
      </div>
    </div>
  );
};

export default Home;
