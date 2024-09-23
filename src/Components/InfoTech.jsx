import React from "react";
import i1 from "../assets/images/i1.png";
import i2 from "../assets/images/i2.png";
import i3 from "../assets/images/i3.png";
import quots from "../assets/images/quots.png";
import linesImage from "../assets/images/lines.png";
import d1 from "../assets/images/d3.png";
import d2 from "../assets/images/it2.png";
import d3 from "../assets/images/it3.png";
import { Link } from "react-router-dom";
import bg3 from "../assets/images/it-bg.png";
import arrow from "../assets/images/button-style.png";
// import { ReactComponent as Icon1 } from '../assets/images/ic1.svg';
// import { ReactComponent as Icon2 } from '../assets/images/ic2.svg';
// import { ReactComponent as Icon3 } from '../assets/images/ic3.svg';
// import { ReactComponent as Icon4 } from '../assets/images/ic4.svg';
import icon1 from "../assets/images/ic1.svg";
import icon2 from "../assets/images/ic2.svg";
import icon3 from "../assets/images/ic3.svg";
import icon4 from "../assets/images/ic4.svg";
import icon5 from "../assets/images/ic5.svg";
import icon6 from "../assets/images/ic6.svg";
import icon7 from "../assets/images/ic7.svg";
import icon8 from "../assets/images/ic8.svg";
import icon9 from "../assets/images/ic9.svg";
import icon10 from "../assets/images/ic10.svg";
import icon11 from "../assets/images/ic11.svg";
import icon12 from "../assets/images/ic12.svg";
import icon13 from "../assets/images/ic13.svg";
import icon14 from "../assets/images/ic14.svg";
import icon15 from "../assets/images/ic1.svg";
import icon16 from "../assets/images/ic2.svg";

const InfoTech = () => {
  return (
    <div>
      {/* Banner Section */}
      <div
        className="bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bg3})` }}
      >
        <div className="relative ">
          <div className="banner__content container px-9">
            <h1 className="banner__content-title banner-font-change pt-[4.8rem] ml-14 front-heading3">
              We develop best-in-class
              <br />
              tech products and help our
              <br />
              clients beyond their expectations.
            </h1>
          </div>
          <br />
          <br />
          <br />
          <br />
          <div className="whatwedo  relative">
            <div className="absolute inset-x-0 top-[-5px] lg:top-[-150px] z-0">
              <img src={linesImage} alt="Lines" className="w-full h-auto" />
            </div>
            <h1 className="heading text-center  relative z-10 expertise">
              Level 1.0 Expertise
            </h1>{" "}
            {/* Added relative and z-10 */}
            {/* <div className="row1 text-center mt-5">
    <div className="col-md-4 mt-4 mt-md-0">
      <div className="whatwedo_single flex flex-col items-center justify-center" data-toggle="modal" data-target="#dap">
        <img className="icon" src={i1} alt="" />
        <h3>AI/ML Development Service | Level 1.0</h3>
      </div>
    </div>
    <div className="col-md-4 mt-4 mt-md-0">
      <div className="whatwedo_single flex flex-col items-center justify-center" data-toggle="modal" data-target="#abp">
        <img className="icon " src={i2} alt="" />
        <h3>Data Analytics Service | Level 1.0</h3>
      </div>
    </div>
    <div className="col-md-4 mt-4 mt-md-0">
      <div className="whatwedo_single flex flex-col items-center justify-center" data-toggle="modal" data-target="#bcbp">
        <img className="icon " src={i3} alt="" />
        <h3>UX/UI Design/Development Service | Expertise Level- SUPER</h3>
      </div>
    </div>
  </div> */}
            {/**icons */}
            <div className="service-container">
  <div className="grid-container">
    <Link to='/AI-ML'>
    <div className="service-box">
      <img src={icon1} className="service-icon" />
      <h3>AI/ML Models Development</h3>
    </div>
    </Link>
    <Link to='/data-engineering'>
    <div className="service-box">
      <img src={icon2} className="service-icon" />
      <h3>Data Engineering</h3>
    </div>
    </Link>
    {/* <Link to='/page2'> */}
    <div className="service-box">
      <img src={icon3} className="service-icon" />
      <h3>Database Recovery and Disaster Management</h3>
    </div>
    {/* </Link> */}
    <Link to='/forex-trading'>
    <div className="service-box">
      <img src={icon4} className="service-icon" />
      <h3>Forex Trading Automation Bot</h3>
    </div>
    </Link>
    <Link to='/app-development'>
    <div className="service-box">
      <img src={icon5} className="service-icon" />
      <h3>App Development</h3>
    </div>
    </Link>
    <Link to='/web-development'>
    <div className="service-box">
      <img src={icon6} className="service-icon" />
      <h3>Web Development</h3>
    </div>
    </Link>
    <Link to='/custom-software'>
    <div className="service-box">
      <img src={icon7} className="service-icon" />
      <h3>Custom Software Development</h3>
    </div>
    </Link>
    <Link to='/ui-ux'>
    <div className="service-box">
      <img src={icon8} className="service-icon" />
      <h3>UI/UX Design Services</h3>
    </div>
    </Link>
    <Link to='/IOT'>
    <div className="service-box">
      <img src={icon9} className="service-icon" />
      <h3>Iot Development </h3>
    </div>
    </Link>
    <Link to='/game-development'>
    <div className="service-box">
      <img src={icon10} className="service-icon" />
      <h3>Game Development</h3>
    </div>
    </Link>
    <Link to='/desktop-development'>
    <div className="service-box">
      <img src={icon11} className="service-icon" />
      <h3>Desktop Application</h3>
    </div>
    </Link>
    <Link to='/MVP'>
    <div className="service-box">
      <img src={icon12} className="service-icon" />
      <h3>MVP Development</h3>
    </div>
    </Link>
    <Link to='/EPR'>
    <div className="service-box">
      <img src={icon13} className="service-icon" />
      <h3>ERP Software Solutions</h3>
    </div>
    </Link>
    <Link to='/CRM'>
    <div className="service-box">
      <img src={icon15} className="service-icon" />
      <h3>Customer Relationship Management</h3>
    </div>
    </Link>
    <Link to='/CMS'>
    <div className="service-box">
      <img src={icon16} className="service-icon" />
      <h3>Content Management System</h3>
    </div>
    </Link>
    <Link to='/e-commerce'>
    <div className="service-box">
      <img src={icon14} className="service-icon" />
      <h3>E-Commerce Solution</h3>
    </div>
    </Link>
  </div>
</div>


          </div>
        </div>
      </div>

      {/* Modals */}
      <div
        className="modal fade text-center"
        id="dap"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header border-0 text-center p-0 pr-3 pt-2">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body p-0">
              <img
                className="icon"
                src="images/i1.png"
                alt=""
                style={{ height: "102px" }}
              />
            </div>
            <div className="modal-header p-0 border-0 text-center">
              <h5 className="modal-title w-100 font-weight-bold">
                AI/ML Development Service | Level 1.0
              </h5>
            </div>
            <div className="modal-body">
              <p>
                BrainsTerra Intelligence helps companies accelerate their growth
                by improving and automating their operations and strengthening
                their business decision-making capabilities. We provide AI/ML
                development services to companies in various industries,
                including but not limited to finance, healthcare, education, and
                retail. Our teams are well-versed in data science & research,
                natural language processing, machine learning algorithms, deep
                learning architectures, and computer vision.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade text-center"
        id="abp"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header border-0 text-center p-0 pr-3 pt-2">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body p-0">
              <img
                className="icon"
                src="images/i2.png"
                alt=""
                style={{ height: "102px" }}
              />
            </div>
            <div className="modal-header p-0 border-0 text-center">
              <h5 className="modal-title w-100 font-weight-bold">
                Data Analytics Service | Level 1.0
              </h5>
            </div>
            <div className="modal-body">
              <p>
                In today’s world, with increasing competition and changing
                market conditions, a company must use the power of data
                analytics to make critical business decisions and strategies.
                Whether you are a big company or an early start-up, data
                analytics-based business decisions can help you stay ahead of
                your competitors. Our team is expert in decision science and
                offer full-scale data analytics service, including data
                extraction, end to end data engineering, and Business
                Intelligence service. We help our clients capture meaningful
                insights from their data, enabling them to make smarter business
                decisions, predict customer trends and behaviours, increase
                business productivity, and optimise business performance.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade text-center"
        id="bcbp"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header border-0 text-center p-0 pr-3 pt-2">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body p-0">
              <img
                className="icon"
                src="images/i3.png"
                alt=""
                style={{ height: "102px" }}
              />
            </div>
            <div className="modal-header p-0 border-0 text-center">
              <h5 className="modal-title w-100 font-weight-bold">
                UX/UI Design/Development Service | Expertise Level- SUPER
              </h5>
            </div>
            <div className="modal-body">
              <p>
                To some extent, a product's user experience and interface affect
                its success pace. A product may not succeed quickly despite
                being innovative and influential if it has no appealing and
                easy-to-use user interface. A product needs to have a visually
                stunning and creative user interface to capture users’
                attention. At BrainsTerra Intelligence, UX/UI Design/Development
                is one of our core strengths. Our team has a unique sense of
                colour combinations and the latest design trends. We design &
                develop interactive and intuitive user interfaces for websites,
                mobile apps, and other tech products, strengthening our clients’
                products on the user experience front and helping them achieve
                desired results.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Synergy Section */}
      <div className="synergy pt-0 digital-margin-top">
        <div className="container top-infotech">
          <h1 className="heading"></h1>
          <div className="synergy__content">
            <div style={{ maxWidth: "fit-content,", textAlign:"justify" }} className="px-4">
              <p>
                We have designed our entire process and products to provide
                everything a business needs when starting from scratch. We
                ensure that working with us is a quick, easy, and hassle-free
                experience. Along with a comprehensive range of IT solutions and
                services, we give our clients complete control of their
                products, including full rights and ownership of the source code
                without a ridiculous price tag, and our friendly teams stay
                available to offer their expertise and stand beside you to
                support after your product is live.
              </p>
              <br />
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="testimonial it pb-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1 pb-3">
              <div className="testimonial__single text-center flex flex-col items-center justify-center">
                <img className="mb-4 mt-5" src={quots} alt="" />
                <h4 style={{ fontSize: "20px" }} className="text-justify px-4">
                  “We are a growth catalyst with the simple aim of helping our
                  clients achieve their full potential and excel in their
                  business. We help our clients stand out by ensuring that
                  growth is not just something you strive towards, but that it
                  becomes an inherent part of your day-to-day work.”
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Intelligence Section */}
      <div className="intelligence  lg:mr-0  info_tech">
        <div className="container">
          <br />
          <h1 className="heading text-center mb-5 pb-sm-5 flex items-center justify-center">
            Level 2.0 Expertise
            <img className="ml-4" src={arrow} alt="" />
          </h1>
          <div className="flex flex-col">
            <div className="intelligence__row   !gap-7     h-auto">
              
                <div className="intelligence__row-single four h-fit   ">
                  <div className="content  ">
                    <h3 className="text-base ">Web designing</h3>
                    <span>and development</span>
                  </div>
                </div>
             
              
                <div className="intelligence__row-single two h-fit">
                  <div className="content ">
                    <h3 className="text-base ">Web Application</h3>
                    <span>Design & Development</span>
                  </div>
                </div>
             
              
                <div className="intelligence__row-single three h-fit">
                  <div className="content ">
                    <h3 className="text-base ">Pre Developed Website</h3>
                    <span>or Application maintenance</span>
                  </div>
                </div>
             
              
                <div className="intelligence__row-single one h-fit">
                  <div className="content  ">
                    <h3 className="text-base ">Software Development</h3>
                    <span>& testing</span>
                  </div>
                </div>
              
            </div>

            <div className="intelligence__row  h-auto !gap-7   ">
             
                <div className="intelligence__row-single five h-fit ">
                  <div className="content ">
                    <h3 className="text-base ">Bug Fixing Services</h3>
                    <span>for Application</span>
                  </div>
                </div>
             
                <div className="intelligence__row-single two h-fit">
                  <div className="content ">
                    <h3 className="text-base ">Mobile Application</h3>
                    <span>Development</span>
                  </div>
                </div>
             
                <div className="intelligence__row-single three mt-10">
                  <div className="content ">
                    <h3 className="text-base  ">Custom Application</h3>
                    <span>Development</span>
                  </div>
                </div>
         
                <div className="intelligence__row-single one h-fit mt-7">
                  <div className="content">
                    <h3 className="text-base ">Application</h3>
                    <span>Modemization</span>
                  </div>
                </div>
           
            </div>
          </div>
        </div>
        <img src={linesImage} className="w-100 mt-5 lg:mt-0" alt="Lines" />
      </div>

      {/* Subfooter Section */}
      <div className="subfooter">
        <div className="container text-center">
          <div class="subfooter it">
            <div class="container">
              <h1
                class="heding text-center mb-4 pt-4 flex items-center justify-center gap-6"
                style={{ fontSize: "28px" }}
              >
                Why Us <img class="" src={arrow} alt="" />
              </h1>
              <div class="whatwedo row mt-0 text-center">
                <div
                  class="col-md-4 mt-md-0 px-md-5"
                  style={{ pointerEvents: "none" }}
                >
                  <div
                    class=" !pb-16 whatwedo_single flex flex-col items-center justify-center "
                    data-toggle="modal"
                    data-target="#ea"
                  >
                    <img class="icon  " src={d1} alt="" />
                    <h3 class="">Efficiency and Accountability</h3>
                  </div>
                </div>
                <div
                  class="col-md-4 mt-4 mt-md-0 px-md-5"
                  style={{ pointerEvents: "none" }}
                >
                  <div
                    class="!pb-16 whatwedo_single flex flex-col items-center justify-center"
                    data-toggle="modal"
                    data-target="#ces"
                  >
                    <img class="icon  " src={d2} alt="" />
                    <h3 class="">Cost Effective Solutions</h3>
                  </div>
                </div>
                <div
                  class="col-md-4 mt-4 mt-md-0 px-md-5"
                  style={{ pointerEvents: "none" }}
                >
                  <div
                    class="!pb-16 whatwedo_single flex flex-col items-center justify-center"
                    data-toggle="modal"
                    data-target="#sc"
                  >
                    <img class="icon  " src={d3} alt="" />
                    <h3 class="mt-4">Security & Confidentiality</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="pt-5 text-center">
        <div class="container px-4">
          <br />
          <h1 class="heading mb-8 " style={{ fontSize: "18px" }} className="text-justify">
            We truly understand that a healthy IT system is the backbone of a
            company, and to have it, you need the support of a good team of
            experts, which is where we play a significant role as your
            technology partner. You focus on running your business and let us
            handle your whole IT and development work behind the scenes. You can
            trust our expertise that has been gained through thousands of
            development hours. Let us customise our services according to your
            commercial objectives and help you achieve more.
          </h1>
          <br />
        </div>
      </div>
    </div>
  );
};

export default InfoTech;
