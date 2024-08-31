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
    <div className="lg:py-10 bg-primary">
      <div className="relative h-40 lg:h-60">
        <img
          src={r4}
          alt="Footer Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50" />
        <div className="absolute inset-0 flex items-center justify-center text-white text-sm lg:text-2xl">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 px-4">
            <div className="flex flex-col items-center md:items-start lg:px-20">
              <p className="text-xs text-center md:text-left">
                We are a one-stop destination for your business growth. We have
                expertise in AI/ML and other technology product development, and
                IT Talent Acquisition and tech team building.
              </p>
              <img src={logo} className="mt-4" alt="Logo" />
            </div>

            <div className="flex flex-col items-center md:items-start lg:pl-24 lg:text-base text-sm">
  <h3 className="mb-4 font-semibold lg:text-xl">Quick Links</h3>
  <div className="">
    <div className="flex items-center lg:items-start space-x-2 mb-2">
      <img src={ic1} alt="Home" className="px-2 py-" /> {/* Set consistent icon size */}
      <a href="#" className="leading-none">HOME</a>
    </div>
    <div className="flex items-center lg:items-start space-x-2 mb-2">
      <img src={ic2} alt="About Us" className="px-3" /> {/* Set consistent icon size */}
      <a href="#" className="leading-none">ABOUT US</a>
    </div>
    <div className="flex items-center lg:items-start space-x-2">
      <img src={ic3} alt="Contact Us" className="px-2" /> {/* Set consistent icon size */}
      <a href="#" className="leading-none">CONTACT US</a>
    </div>
  </div>
</div>


            <div className="flex flex-col items-center md:items-start lg:text-base text-sm">
              <h3 className="mb-4 font-semibold lg:text-xl">Site Access</h3>
              <div className="flex items-center space-x-2 mb-2">
                <img src={is1} alt="Talent Acquisition" className="" />
                <a href="#">Talent Acquisition Wing</a>
              </div>
              <div className="flex items-center space-x-2">
                <img src={is2} alt="IT Wing" className="" />
                <a href="#">Information Technology Wing</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex lg:px-44 lg:py-1 gap-80 text-white">
      <h3>
      2024 © BrainsTerra Intelligence. All rights reserved.
      </h3>
      <h3>
      Designed and Developed by Brainsterra Syenrgy Pvt. Ltd
      </h3>
      </div>
    </div>
  );
};

export default Footer;
