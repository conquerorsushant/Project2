import React from "react";
import r4 from "../assets/images/footer.png"; // Replace with your image path
import ic1 from '../assets/images/home.png';
import ic2 from '../assets/images/about.png';
import ic3 from '../assets/images/contact.png';
import is1 from '../assets/images/digi.png';
import is2 from '../assets/images/rec.png';
import logo from '../assets/images/logo.png';

const Footer = () => {
  return (
    <div className="bg-primary   ">
      <div className="relative h-[500px] lg:h-80"> {/* Reduced height */}
        <img
          src={r4}
          alt="Footer Background"
          className="lg:w-full lg:h-full h-[400px] object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50" />
        <div className="absolute inset-0 flex items-start justify-center text-white text-xs lg:text-sm pt-10 lg:pt-16">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 px-4">
            {/* first col */}
            <div className="flex flex-col items-center md:items-start mb-6 pt-12 lg:pt-0 md:mb-0"> {/* Added margin-bottom for spacing */}
              <p className="text-xs text-start md:text-left lg:pl-28 pl-28 lg:text-sm">
                We are a one-stop destination for your business growth. We have
                expertise in AI/ML and other technology product development, and
                IT Talent Acquisition and tech team building.
              </p>
              <img src={logo} className="pl-2 " alt="Logo" />
            </div>
            {/* second and third col combined in one row on small screens */}
            <div className="flex items-start justify-start flex-row  md:flex-row lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6">
              {/* second col */}
              <div className="flex flex-col items-start px-4 lg:px-10 lg:pl-16 text-xs lg:text-sm">
                <h3 className="mb-2 font-semibold lg:text-lg">Quick Links</h3>
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <img src={ic1} alt="Home" className="w-auto h-auto" />
                    <a href="#" className="leading-none whitespace-nowrap">HOME</a>
                  </div>
                  <div className="flex items-start space-x-2 pl-1">
                    <img src={ic2} alt="About Us" className="w-auto h-auto" />
                    <a href="#" className="leading-none whitespace-nowrap pl-2">ABOUT US</a>
                  </div>
                  <div className="flex items-start space-x-2">
                    <img src={ic3} alt="Contact Us" className="w-auto h-auto" />
                    <a href="#" className="leading-none whitespace-nowrap pl-1">CONTACT US</a>
                  </div>
                </div>
              </div>
              {/* third col */}
              <div className="flex flex-col items-start px-4 lg:px-10 lg:pl-16 text-xs lg:text-sm">
                <h3 className="mb-2 font-semibold lg:text-lg whitespace-nowrap">Site Access</h3> {/* Prevent text wrapping */}
                <div className="flex items-start space-x-2 mb-1">
                  <img src={is1} alt="Talent Acquisition" className="w-auto h-auto" />
                  <a href="#" className="whitespace-nowrap">TALENT ACQUISITION WING</a>
                </div>
                <div className="flex items-start space-x-2">
                  <img src={is2} alt="IT Wing" className="w-auto h-auto" />
                  <a href="#" className="whitespace-nowrap">INFORMATION TECHNOLOGY WING</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* copyright */}
      <div className="flex flex-col lg:flex-row lg:px-16 items-center justify-center lg:text-xs text-xs lg:py-1 gap-4 lg:gap-16 text-white mt-4"> {/* Adjusted for small screens */}
        <h3 className="text-center  lg:text-left">
          2024 © BrainsTerra Intelligence. All rights reserved.
        </h3>
        <h3 className="text-center lg:text-left">
          Designed and Developed by Brainsterra Syenrgy Pvt. Ltd
        </h3>
      </div>
    </div>
  );
};

export default Footer;
