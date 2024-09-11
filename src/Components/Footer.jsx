import React from "react";
import r4 from "../assets/images/footer.png"; // Replace with your image path
import ic1 from '../assets/images/home.png';
import ic2 from '../assets/images/about.png';
import ic4 from '../assets/images/info.png';
import ic3 from '../assets/images/contact.png';
import is1 from '../assets/images/digi.png';
import is2 from '../assets/images/rec.png';
import linkedin from '../assets/images/linkedin.png';
import logo from '../assets/images/logo.png';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="footer  fixed left-0 right-0 bottom-0" id="footer">
        <div className="container">
          <div className="row mt-0 mt-md-5">
            <div className="col-md-3">
              <div className="footer__about flex flex-col items-center justify-center">
                <p>
                  We are a one-stop destination for your business growth. We have
                  expertise in AI/ML and other technology product development, IT
                  Talent Acquisition and team building, and big-data-driven digital
                  marketing services.
                </p>
                <img alt="Logo" src={logo} />
              </div>
            </div>

            <div className="col-md-3 offset-md-2">
              <div className="footer__menu">
                <h3 className="text-xl">Quick Links</h3>
                <ul>
                  <li>
                    <Link to="/">
                      <span><img alt="Home" src={ic1} /></span> Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <span><img alt="About Us" src={ic2}  className="pl-1"/></span> About Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact-us">
                      <span><img alt="Contact Us" src={ic3} /></span> Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-4">
              <div className="footer__menu">
                <h3 className="text-xl">Site Access</h3>
                <ul>
                  <li>
                    <Link to="Talent-acquisition.html">
                      <span><img alt="Talent Acquisition Wing" src={is2} /></span> Talent Acquisition Wing
                    </Link>
                  </li>
                  <li>
                    <Link to="information-technology.html">
                      <span><img alt="Information Technology Wing" src={ic4} /></span> Information Technology Wing
                    </Link>
                  </li>
                  <li>
                    <Link to="digital-marketing.html">
                      <span><img alt="Digital Marketing Wing" src={ic1} /></span> Digital Marketing Wing
                    </Link>
                  </li>
                </ul>
              </div>
              <ul className="social">
                <li>
                  <a href="https://in.linkedin.com/company/brainsterra-synergy-bspl" title="LinkedIn">
                    <img alt="LinkedIn" src={linkedin} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      <div className="copyrights py-2 bg-black footer-copy mw-100 m-0">
        <div className="container">
          <div className="row">
            <div className="col-md-8 text-xs">
              2023 &copy; BrainsTerra Intelligence. All rights reserved.
            </div>
            <div className="col-md-4 text-xs">
              Designed and Developed by Brainsterra Syenrgy Pvt. Ltd.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
