import React, { useState, useEffect } from "react";
import rocktIcon from "../assets/images/rockt.png"; // Update the path to your assets
import hiringIcon from "../assets/images/hiring.png"; // Update the path to your assets
import teamIcon from "../assets/images/team.png";
import quotsImage from "../assets/images/quots.png"; // Update the path to your assets
import buttonStyleImage from "../assets/images/button-style.png"; // Update the path to your assets
import linesImage from "../assets/images/lines.png";
import rec1 from "../assets/images/rec1.png";
import rec2 from "../assets/images/rec2.png";
import rec3 from "../assets/images/rec3.png";

const TalentAcquisition = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [showModal4, setShowModal4] = useState(false);
  const [showModal5, setShowModal5] = useState(false);
  const [showModal6, setShowModal6] = useState(false);
  const [showModal7, setShowModal7] = useState(false);
  const [showModal8, setShowModal8] = useState(false);
  const [showModal9, setShowModal9] = useState(false);
  const [showModal10, setShowModal10] = useState(false);
  const [showModal11, setShowModal11] = useState(false);
  const [showModal12, setShowModal12] = useState(false);
  const [showModal13, setShowModal13] = useState(false);
  const [showModal14, setShowModal14] = useState(false);

  const toggleModal1 = () => setShowModal(!showModal);
  const toggleModal2 = () => setShowModal2(!showModal2);
  const toggleModal3 = () => setShowModal3(!showModal3);
  const toggleModal4 = () => setShowModal4(!showModal4);
  const toggleModal5 = () => setShowModal5(!showModal5);
  const toggleModal6 = () => setShowModal6(!showModal6);
  const toggleModal7 = () => setShowModal7(!showModal7);
  const toggleModal8 = () => setShowModal8(!showModal8);
  const toggleModal9 = () => setShowModal9(!showModal9);
  const toggleModal10 = () => setShowModal10(!showModal10);
  const toggleModal11 = () => setShowModal11(!showModal11);
  const toggleModal12 = () => setShowModal12(!showModal12);
  const toggleModal13 = () => setShowModal13(!showModal13);
  const toggleModal14 = () => setShowModal14(!showModal14);

  const [counters, setCounters] = useState({
    activeJobSeekers: 0,
    profilesProcessed: 0,
    talentAcquisitionOfficers: 0,
    happyClients: 0,
  });

  // Function to animate counters
  const animateCounter = (endValue, key) => {
    let startValue = 0;
    const duration = 2000; // Duration in milliseconds
    const stepTime = 10;
    const steps = duration / stepTime;
    const stepValue = endValue / steps;

    const interval = setInterval(() => {
      startValue += stepValue;
      if (startValue >= endValue) {
        clearInterval(interval);
        setCounters((prevCounters) => ({
          ...prevCounters,
          [key]: endValue,
        }));
      } else {
        setCounters((prevCounters) => ({
          ...prevCounters,
          [key]: Math.floor(startValue),
        }));
      }
    }, stepTime);
  };

  useEffect(() => {
    animateCounter(500000, "activeJobSeekers");
    animateCounter(500, "profilesProcessed");
    animateCounter(35, "talentAcquisitionOfficers");
    animateCounter(150, "happyClients");
  }, []);

  return (
    <>
      <div
        className=" font-sansation  recruitment"
        style={{ marginTop: "-5px" }}
      >
        {/* <img src={linesImage} className=""/> */}

        <div className="talentcontainer relative">
          <div className="banner__content container">
            <h1 className="banner__content-title banner_font banner-font-change mt-12 pt-4 ml-24 front-heading2">
              We create a world of like-minded and coherent people for our
              clients.
            </h1>
            <h1 className="banner__content-title banner_font banner-font-change animate-second mt-5 ml-24 front-heading2">
              Our expert teams have in-depth knowledge of technologies <br />
              and help companies build their HIGH-END engineering/technology{" "}
              <br />
              Teams from scratch.
            </h1>
          </div>

          <div className="absolute inset-x-0 top-[330px] lg:top-48 z-0">
            <img src={linesImage} alt="Lines" className="w-full h-auto" />
          </div>
          {/* "Why Choose Us" Section */}
          <div className="whatwedo relative mt-20 max-w-[70%] mx-[15%]">
            <h1
              className="heading text-center   recruit-head-change relative z-10 why_choose_us"
              style={{ marginTop: "155px" }}
            >
              Why Choose Us
            </h1>

            {/* Background lines image */}

            <div className="row px-5 text-center mt-2 relative z-10">
              <div className="col-md-4 mt-4 mt-md-0">
                <div
                  className="whatwedo_single cursor-pointer flex flex-col items-center justify-center"
                  onClick={toggleModal1}
                >
                  <img
                    className="icon"
                    src={rocktIcon}
                    alt="Exceptional Client-Promotion Skills"
                  />
                  <h3>Exceptional Client-Promotion Skills</h3>
                </div>
              </div>

              <div className="col-md-4 mt-4 mt-md-0">
                <div
                  className="whatwedo_single cursor-pointer flex flex-col items-center justify-center"
                  onClick={toggleModal2}
                >
                  <img
                    className="icon"
                    src={hiringIcon}
                    alt="Off-Beat Hiring Approach"
                  />
                  <h3>Off-Beat Hiring Approach</h3>
                </div>
              </div>

              <div className="col-md-4 mt-4 mt-md-0">
                <div
                  className="whatwedo_single cursor-pointer flex flex-col items-center justify-center"
                  onClick={toggleModal3}
                >
                  <img
                    className="icon"
                    src={teamIcon}
                    alt="Involvement of Multiple Teams"
                  />
                  <h3>Involvement of Multiple Teams</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="synergy pt-0" style={{ marginTop: "1px" }}>
        <div className="container">
          <br />
          <br />
          <div className="synergy__content">
            <div style={{ maxWidth: "fit-content" }} className="px-6">
              <p style={{ textAlign: "justify" }}>
                We are a team of proficient and well-qualified professionals who
                have in-depth knowledge of technology. Our focus is on
                conserving the clients' pace and effort by performing the hiring
                process in an organised and systematic way. Based on the
                clients’ hiring interests and needs, we develop a lucid hiring
                process that enables our clients to save their time and efforts
                to build their engineering/technology teams.
              </p>

              <p style={{ textAlign: "justify" }}>
                We have expertise in junior level to leadership/executive level
                hiring. We have been working seamlessly as a whole team behind
                the scenes for many start-ups and middle-level tech
                product-based companies. We have helped them take their
                businesses to the next level by continuously supplying
                thoroughly vetted and curated talent in India and the USA.
              </p>

              <p style={{ textAlign: "justify" }}>
                Our team has a proven track record of meeting our clients’
                expectations who are very selective in picking up the talent for
                hire; they consider the resources from premium engineering
                institutes of India, the USA and other universities across the
                globe and to those who have prior experience with good
                product-based companies.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="testimonial recruitment pb-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1 pb-5">
              <div className="testimonial__single text-center flex flex-col items-center justify-center">
                <img src={quotsImage} alt="Quotes" />
                <br />
                <br />
                <h5 style={{ fontSize: "17px", textAlign: "justify" }}>
                  “It has been seen that around 80% of companies, worldwide,
                  don’t know much about current hiring trends, effective
                  interview process, latest salary trends, etc. They are
                  following age-old hiring methods. Sometimes they end up paying
                  very high salaries or not able to pay reasonable salaries to
                  the talents, which all lead the talents to dissatisfaction and
                  to shop around for other job offers. To mitigate these
                  challenges, we help our clients perform ideal hiring practices
                  by providing them with insights on current industry
                  recruitment methods and salary trends, enabling them to keep
                  pace with the market standards and hire the talents at a
                  faster pace.”
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recruitment Expertise Section */}
      <div className="intelligence ">
        <div className="container">
          <br />
          <h1 className="heading text-center mb-5  flex items-center justify-center">
            Our Recruitment Expertise
            <img className="ml-4" src={buttonStyleImage} alt="Button Style" />
          </h1>
          <div className="flex flex-col">
            <div className="intelligence__row  !gap-7   h-auto">
              <div
                className="intelligence__row-single one  "
                data-toggle="modal"
                data-target="#test23"
                onClick={toggleModal4}
              >
                <div className="content">
                  <h3 className="">Executive Search</h3>
                </div>
              </div>
              <div
                className="intelligence__row-single two"
                data-toggle="modal"
                data-target="#test1"
                onClick={toggleModal5}
              >
                <div className="content">
                  <h3 className="text-xs">Software</h3>
                </div>
              </div>
              <div
                className="intelligence__row-single five"
                data-toggle="modal"
                data-target="#test2"
                onClick={toggleModal6}
              >
                <div className="content">
                  <h3 className="text-xs">Mobile</h3>
                </div>
              </div>
              <div
                className="intelligence__row-single two"
                data-toggle="modal"
                data-target="#test6"
                onClick={toggleModal7}
              >
                <div className="content">
                  <h3 className="text-xs">Data</h3>
                </div>
              </div>
            </div>
            <div className="intelligence__row !gap-7   h-auto ">
              <div
                className="intelligence__row-single one"
                data-toggle="modal"
                data-target="#test16"
                onClick={toggleModal8}
              >
                <div className="content">
                  <h3 className="text-xs">Tech Infrastructure</h3>
                </div>
              </div>
              <div
                className="intelligence__row-single five"
                data-toggle="modal"
                data-target="#test7"
                onClick={toggleModal9}
              >
                <div className="content">
                  <h3 className="text-xs">Cybersecurity</h3>
                </div>
              </div>
              <div
                className="intelligence__row-single three"
                data-toggle="modal"
                data-target="#test8"
                onClick={toggleModal10}
              >
                <div className="content">
                  <h3 className="text-xs">Product & UX</h3>
                </div>
              </div>
              <div
                className="intelligence__row-single two"
                data-toggle="modal"
                data-target="#test9"
                onClick={toggleModal11}
              >
                <div className="content">
                  <h3 className="text-xs">Functional</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img src={linesImage} className="w-100 mt-4 " alt="Lines" />
        <div className="number container" id="counter">
          <div className="bg-black mw-100 text-center">
            <div className="row">
              <div className="col-md-3 mb-3 mb-md-0">
                <div className="number__single two">
                  <span className="count percent">
                    {counters.activeJobSeekers.toLocaleString()}
                  </span>
                  <h4 className="text-xs">Active Job Seekers</h4>
                </div>
              </div>
              <div className="col-md-3 mb-3 mb-md-0">
                <div className="number__single one">
                  <span className="count percent">
                    {counters.profilesProcessed.toLocaleString()}
                  </span>
                  <h4>Profiles processed per day</h4>
                </div>
              </div>
              <div className="col-md-3 mb-3 mb-md-0">
                <div className="number__single three">
                  <span className="count percent">
                    {counters.talentAcquisitionOfficers.toLocaleString()}
                  </span>
                  <h4 className="text-xs">Talent Acquisition Officers</h4>
                </div>
              </div>
              <div className="col-md-3">
                <div className="number__single four">
                  <span className="count percent">
                    {counters.happyClients.toLocaleString()}
                  </span>
                  <h4 className="text-xs">Happy Clients</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showModal4 && (
        <div
          className="modal fade show text-center "
          style={{ display: "block", zIndex: 1050 }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="btn-close ml-auto "
                  onClick={toggleModal4}
                  style={{
                    float: "right",
                    fontSize: "2.0rem",
                    border: "none",
                    background: "none",
                  }}
                >
                  &times;
                </button>
              </div>
              <div className="modal-header p-0 border-0 text-center">
                <h5 className="modal-title w-100 font-weight-bold text-capitalize">
                  Executive Search
                </h5>
              </div>
              <div className="modal-body">
                <ul
                  style={{
                    textAlign: "left",
                    listStyleType: "disc",
                    paddingLeft: "20px",
                  }}
                >
                  <li>Chief Information Officer (CIO).</li>
                  <li>Chief Technology Officer (CTO) | Chief Architect.</li>
                  <li>Chief Information Security Officer (CISO).</li>
                  <li>Chief Product Officer.</li>
                  <li>VP/Director Product.</li>
                  <li>Vice-President/Director/Head of Engineering.</li>
                  <li>Engineering Manager.</li>
                  <li>Technical Architect.</li>
                  <li>Head-Quality Assurance.</li>
                  <li>Head-Infrastructure and Operations.</li>
                  <li>Head-IT Security.</li>
                  <li>Chief Data Scientist.</li>
                  <li>Chief Data Officer (CDO).</li>
                  <li>Head- Business Intelligence and Data Analytics.</li>
                  <li>QA Manager and more.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
      {showModal5 && (
        <div
          className="modal fade show text-center "
          style={{ display: "block", zIndex: 1050 }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="btn-close ml-auto "
                  onClick={toggleModal5}
                  style={{
                    float: "right",
                    fontSize: "2.0rem",
                    border: "none",
                    background: "none",
                  }}
                >
                  &times;
                </button>
              </div>

              <div className="modal-header p-0 border-0 text-center">
                <h5 className="modal-title w-100 font-weight-bold text-capitalize">
                  Software
                </h5>
              </div>
              <div className="modal-body">
                <ul
                  style={{
                    textAlign: "left",
                    listStyleType: "disc",
                    paddingLeft: "20px",
                  }}
                >
                  <li>
                    Backend: Java, Python, Go/Golang, C++, Ruby, PHP, Node,
                    Scala, Elixir, Rust, Erlang, Clojure, and more.
                  </li>
                  <li>
                    Frontend: Angular, React, Vue.js, TypeScript, JavaScript,
                    HTML, CSS, and more.
                  </li>
                  <li>Full Stack: UI, Middle Tier, Back End, and more.</li>
                  <li>Embedded: C/C++</li>
                  <li>
                    QA: SDET, Automation, Manual, Verification & Validation, and
                    more.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {showModal6 && (
        <div
          className="modal fade show text-center "
          style={{ display: "block", zIndex: 1050 }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="btn-close ml-auto "
                  onClick={toggleModal6}
                  style={{
                    float: "right",
                    fontSize: "2.0rem",
                    border: "none",
                    background: "none",
                  }}
                >
                  &times;
                </button>
              </div>

              <div className="modal-header p-0 border-0 text-center">
                <h5 className="modal-title w-100 font-weight-bold text-capitalize">
                  Mobile
                </h5>
              </div>

              <div className="modal-body">
                <ul
                  style={{
                    textAlign: "left",
                    listStyleType: "disc",
                    paddingLeft: "20px",
                  }}
                >
                  <li>Data Science: Python, R, SQL, and more.</li>
                  <li>
                    Data Engineering: Spark, Hadoop, MapReduce, Hive, Pig,
                    Kafka, and more.
                  </li>
                  <li>
                    Machine Learning/AI/Computer Vision: TensorFlow, Caffe,
                    Keras, Theano, PyTorch, Scikit-learn, OpenCV, MATLAB, CUDA,
                    PCL, Dlib, and more.
                  </li>
                  <li>
                    Data Analytics: Business Intelligence, Data Visualization,
                    ETL, Data Warehousing, Data Pipeline, and more.
                  </li>
                  <li>
                    Database: NoSQL, MySQL, PostgreSQL, SQL, Oracle, and more.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
      {showModal7 && (
        <div
          className="modal fade show text-center "
          style={{ display: "block", zIndex: 1050 }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="btn-close ml-auto "
                  onClick={toggleModal7}
                  style={{
                    float: "right",
                    fontSize: "2.0rem",
                    border: "none",
                    background: "none",
                  }}
                >
                  &times;
                </button>
              </div>

              <div className="modal-header p-0 border-0 text-center">
                <h5 className="modal-title w-100 font-weight-bold text-capitalize">
                  Data
                </h5>
              </div>
              <div className="modal-body">
                <ul
                  style={{
                    textAlign: "left",
                    listStyleType: "disc",
                    paddingLeft: "20px",
                  }}
                >
                  <li>Data Science- Python, R, SQL, and more.</li>
                  <li>
                    Data Engineering- Spark, Hadoop, MapReduce, Hive, Pig,
                    Kafka, and more.
                  </li>
                  <li>
                    Machine Learning/AI/ComputerVision- TensorFlow, Caffe,
                    Keras, Theano, PyTorch, Scikit-learn, OpenCV, MATLAB, CUDA,
                    PCL, Dlib, and more.{" "}
                  </li>
                  <li>
                    Data Analytics- Business Intelligence, Data Visualization,
                    ETL, Data Warehousing, Data Pipeline, and more.
                  </li>
                  <li>
                    Database- NoSQL, MySQL, PostgreSQL, SQL, Oracle, and more.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
      {showModal8 && (
        <div
          className="modal fade show text-center "
          style={{ display: "block", zIndex: 1050 }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="btn-close ml-auto "
                  onClick={toggleModal8}
                  style={{
                    float: "right",
                    fontSize: "2.0rem",
                    border: "none",
                    background: "none",
                  }}
                >
                  &times;
                </button>
              </div>
              <div className="modal-header p-0 border-0 text-center">
                <h5 className="modal-title w-100 font-weight-bold text-capitalize">
                  Tech Infrastructure
                </h5>
              </div>
              <div className="modal-body">
                <ul
                  style={{
                    textAlign: "left",
                    listStyleType: "disc",
                    paddingLeft: "20px",
                  }}
                >
                  <li>
                    DevOps/SRE- CI/CD, Orchestration, Containerization,
                    Configuration Management, Build & Release, and more.
                  </li>
                  <li>Network Engineering- Cisco, Juniper, VPN, and more.</li>
                  <li>Cloud- AWS, GCP, Azure, and more. </li>
                  <li>
                    Systems Administration- Linux, Windows, Virtualization, and
                    more.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {showModal9 && (
        <div
          className="modal fade show text-center "
          style={{ display: "block", zIndex: 1050 }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="btn-close ml-auto "
                  onClick={toggleModal9}
                  style={{
                    float: "right",
                    fontSize: "2.0rem",
                    border: "none",
                    background: "none",
                  }}
                >
                  &times;
                </button>
              </div>
              <div className="modal-header p-0 border-0 text-center">
                <h5 className="modal-title w-100 font-weight-bold text-capitalize">
                  Cybersecurity
                </h5>
              </div>
              <div className="modal-body">
                <ul
                  style={{
                    textAlign: "left",
                    listStyleType: "disc",
                    paddingLeft: "20px",
                  }}
                >
                  <li>
                    Cloud Security, Application Security, Network Security,
                    Infrastructure Security, DevSecOps, Enterprise Governance,
                    and more.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
      {showModal10 && (
        <div
          className="modal fade show text-center "
          style={{ display: "block", zIndex: 1050 }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="btn-close ml-auto "
                  onClick={toggleModal10}
                  style={{
                    float: "right",
                    fontSize: "2.0rem",
                    border: "none",
                    background: "none",
                  }}
                >
                  &times;
                </button>
              </div>

              <div className="modal-header p-0 border-0 text-center">
                <h5 className="modal-title w-100 font-weight-bold text-capitalize">
                  Product & UX
                </h5>
              </div>
              <div className="modal-body">
                <ul
                  style={{
                    textAlign: "left",
                    listStyleType: "disc",
                    paddingLeft: "20px",
                  }}
                >
                  <li>
                    UI/UX, Visual Design, Interaction Design, User Research,
                    Creative/Art-Director, Product Management, and more.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
      {showModal11 && (
        <div
          className="modal fade show text-center "
          style={{ display: "block", zIndex: 1050 }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="btn-close ml-auto "
                  onClick={toggleModal11}
                  style={{
                    float: "right",
                    fontSize: "2.0rem",
                    border: "none",
                    background: "none",
                  }}
                >
                  &times;
                </button>
              </div>

              <div className="modal-header p-0 border-0 text-center">
                <h5 className="modal-title w-100 font-weight-bold text-capitalize">
                  Functional
                </h5>
              </div>
              <div className="modal-body">
                <ul
                  style={{
                    textAlign: "left",
                    listStyleType: "disc",
                    paddingLeft: "20px",
                  }}
                >
                  <li>
                    Product Manager, Project Manager, Program Manager, Business
                    Analyst, Scrum Master, Technical Writer, Business
                    Development, Sales, and Marketing/Performance-Marketing, and
                    more.{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      <h1 className="heading text-center flex items-center justify-center">
        Our Cool Features <img className="ml-4" src={buttonStyleImage} alt="" />
      </h1>
      <div className="subfooter features pt-2">
        <div className="container">
          <div className="whatwedo row mt-0 text-center ">
            <div className="col-md-4 mt-4 mt-md-0 px-md-5">
              <div
                className="!pb-16 whatwedo_single flex flex-col items-center justify-center "
                data-toggle="modal"
                data-target="#rs1"
                onClick={toggleModal12}
                style={{
                  fontSize: "2.0rem",
                  border: "none",
                  background: "none",
                }}
              >
                <img className="icon " src={rec1} alt="" />
                <h3 className="">We Build Solutions</h3>
              </div>
            </div>
            <div className="col-md-4 mt-4 mt-md-0 px-md-5">
              <div
                className="!pb-20 whatwedo_single flex flex-col items-center justify-center"
                data-toggle="modal"
                data-target="#rs2"
                onClick={toggleModal13}
                style={{
                  fontSize: "2.0rem",
                  border: "none",
                  background: "none",
                }}
              >
                <img className="icon " src={rec2} alt="" />
                <h3 className="">Extensive Research </h3>
              </div>
            </div>
            <div className="col-md-4 mt-4 mt-md-0 px-md-5">
              <div
                className="!pb-20 whatwedo_single flex flex-col items-center justify-center"
                data-toggle="modal"
                data-target="#rs3"
                onClick={toggleModal14}
                style={{
                  fontSize: "2.0rem",
                  border: "none",
                  background: "none",
                }}
              >
                <img className="icon " src={rec3} alt="" />
                <h3 className="">Rich Data Bank</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="pt-5 text-center flex flex-col justify-center items-center">
        <h1
          className="heading mb-2 mx-4 lg:mx-2 "
          style={{ fontSize: "18px", textAlign: "justify" }}
        >
          We are driven by the highest standards of quality, integrity, trust,
          and commitment while providing quality professional services.{" "}
        </h1>
        <h1
          className="heading mb-2 mx-4 lg:mx-2"
          style={{ fontSize: "18px", textAlign: "justify" }}
        >
          We aim to lay a foundation towards building a great relationship
          between the employer and employee.
        </h1>
        <br />
        <br />
      </div>

      {showModal12 && (
        <div
          className="modal fade show text-center "
          style={{ display: "block", zIndex: 1050 }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="btn-close ml-auto "
                  onClick={toggleModal12}
                  style={{
                    float: "right",
                    fontSize: "2.0rem",
                    border: "none",
                    background: "none",
                  }}
                >
                  &times;
                </button>
              </div>
              <div className="modal-body p-0 flex items-center justify-center">
                <img className="icon" src={rec1} alt="" />
              </div>
              <div className="modal-header p-0 border-0 text-center">
                <h5 className="modal-title w-100 font-weight-bold">
                  We Build Solutions
                </h5>
              </div>
              <div className="modal-body">
                <p>
                  We continuously invest in knowledge growth to ensure that we
                  stay updated to provide our clients and talent with the
                  information needed to excel in their businesses and roles,
                  respectively. We ensure that our clients save money and time
                  by providing them with end-to-end RPO services. With our
                  innovative, ground-breaking ideas, detailed approach, and
                  quality-oriented delivery of outsourced solutions, we assist
                  our clients to fulfil their tasks quickly and efficiently.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {showModal13 && (
        <div
          className="modal fade show text-center "
          style={{ display: "block", zIndex: 1050 }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="btn-close ml-auto "
                  onClick={toggleModal13}
                  style={{
                    float: "right",
                    fontSize: "2.0rem",
                    border: "none",
                    background: "none",
                  }}
                >
                  &times;
                </button>
              </div>

              <div className="modal-body p-0 flex items-center justify-center">
                <img className="icon" src={rec2} alt="" />
              </div>
              <div className="modal-header p-0 border-0 text-center">
                <h5 className="modal-title w-100 font-weight-bold">
                  Extensive Research to maintain Quality of Services
                </h5>
              </div>
              <div className="modal-body">
                <p>
                  {" "}
                  Our persistent endeavour and commitment are to bring forth the
                  market’s best talent to fulfil our esteemed clients’ hiring
                  needs. For talent search assignments, we carry out extensive
                  research of the target markets and companies to engage with
                  the appropriate profiles, qualified professionals and help
                  them through the end to end hiring process. We collect
                  profiles from existing data and target a list of appropriate
                  companies with intersecting domains by utilising our massive
                  network. Our profile submission frequency is high. We do not
                  accept, not even the slightest compromise over the profile
                  quality as we follow a thoroughly vetted hiring process
                  designed according to our clients’ expectations.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {showModal14 && (
        <div
          className="modal fade show text-center "
          style={{ display: "block", zIndex: 1050 }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="btn-close ml-auto "
                  onClick={toggleModal14}
                  style={{
                    float: "right",
                    fontSize: "2.0rem",
                    border: "none",
                    background: "none",
                  }}
                >
                  &times;
                </button>
              </div>
              <div className="modal-body p-0 flex items-center justify-center">
                <img className="icon" src={rec3} alt="" />
              </div>
              <div className="modal-header p-0 border-0 text-center">
                <h5 className="modal-title w-100 font-weight-bold">
                  Rich Data Bank
                </h5>
              </div>
              <div className="modal-body">
                <p>
                  We have a rich data bank consisting of professionals with
                  excellent education backgrounds (IIT’S, NIT’S, IIIT’S, BITS &
                  REC’S, and other top global institutes, etc.) and work
                  experience who are specialised in their respective fields. Our
                  selection process is based on a well-structured and systematic
                  approach, which is proactive, detailed and target-oriented.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Modal for Exceptional Client-Promotion Skills */}
      {showModal && (
        <div
          className="modal fade show text-center "
          style={{ display: "block", zIndex: 1050 }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="btn-close ml-auto "
                  onClick={toggleModal1}
                  style={{
                    float: "right",
                    fontSize: "2.0rem",
                    border: "none",
                    background: "none",
                  }}
                >
                  &times;
                </button>
              </div>

              <div className="modal-body p-0 flex items-center justify-center">
                <img
                  className="icon"
                  src={rocktIcon}
                  alt=""
                  style={{ height: "102px" }}
                />
              </div>
              <div className="modal-header p-0 border-0 text-center">
                <h5 className="modal-title w-100 font-weight-bold">
                  Exceptional Client-Promotion Skills
                </h5>
              </div>
              <div className="modal-body">
                <p>
                  If a talent is not well informed about the company’s business
                  idea, teams, plans, culture, growth path, etc., then the
                  chances are high that the offered talent will not join the
                  company. To convey the correct information of the client in
                  the proper manners, a talent acquisition team is required to
                  have strong client promotion skills, and our teams have an
                  exceptional command on it.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal for Off-Beat Hiring Approach */}
      {showModal2 && (
        <div
          className="modal fade show text-center "
          style={{ display: "block", zIndex: 1050 }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="btn-close ml-auto "
                  onClick={toggleModal2}
                  style={{
                    float: "right",
                    fontSize: "2.0rem",
                    border: "none",
                    background: "none",
                  }}
                >
                  &times;
                </button>
              </div>
              <div className="modal-body text-center flex flex-col items-center justify-center">
                <img
                  className="icon"
                  src={teamIcon}
                  alt=""
                  style={{ height: "102px" }}
                />
                <h5 className="modal-title">Off-Beat Hiring Approach</h5>
                <p style={{ textAlign: "justify" }}>
                  When it comes to hiring top talent in the market, most
                  companies face many challenges like low rate of talent joining
                  at the company, low rate of interview footfalls, and
                  irrelevant profiles submission by the talent acquisition teams
                  of recruitment vendors. And, most of the companies have
                  settled to the idea that talent joining rates can’t be
                  controlled, but in our case, this is not true. We follow some
                  unique, systematic, and highly customised hiring approaches
                  according to our clients’ needs. These approaches enable us to
                  deliver the talents to our clients on time without fail,
                  saving time and our clients’ efforts.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal for Involvement of Multiple Teams */}
      {showModal3 && (
        <div
          className="modal fade show text-center "
          style={{ display: "block", zIndex: 1050 }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="btn-close ml-auto "
                  onClick={toggleModal3}
                  style={{
                    float: "right",
                    fontSize: "2.0rem",
                    border: "none",
                    background: "none",
                  }}
                >
                  &times;
                </button>
              </div>
              <div className="modal-body text-center flex flex-col items-center justify-center">
                <img
                  className="icon"
                  src={hiringIcon}
                  alt=""
                  style={{ height: "102px" }}
                />
                <h5 className="modal-title">Involvement of Multiple Teams</h5>
                <p style={{ textAlign: "justify" }}>
                  Imagine that you are getting 15 profiles for a vacant position
                  daily; out of 15 profiles, 13 profiles are highly irrelevant,
                  but you are still screening them and writing feedback to the
                  vendor on each profile. Doing this all, you waste a lot of
                  time daily. You can save this time if the profile filtration
                  part can be done strictly beforehand by the talent acquisition
                  team of your vendor. To sort this challenge, subsequently, an
                  efficient and systematic hiring model is, thus, required to
                  enable a client to do the hiring at a fast pace, and that's
                  where we play a significant role to save our client’s time by
                  deploying three different teams of BrainsTerra Intelligence to
                  do strict filtrations of each profile on parameters like
                  skills, education, past work, culture fitment, and stability,
                  etc.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TalentAcquisition;
