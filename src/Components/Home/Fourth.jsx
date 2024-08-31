import React from "react";
import logo from "../../assets/images/king.png"; // Add your logo here
import lines from "../../assets/images/lines.png"; // Add your lines image here
import i1 from "../../assets/images/groupuser.png";
import i2 from "../../assets/images/groupcoress.png";
import i3 from "../../assets/images/lionpng.png";
import i4 from "../../assets/images/sparepng.png";
import arrow from '../../assets/images/button-style.png';
import f1 from '../../assets/images/f1.png';
import f2 from '../../assets/images/f2.png';
import f3 from '../../assets/images/f3.png';

const Fourth = () => {
  return (
    <div className="bg-primary text-white">
      {/* Main Content */}
      <div className=" lg:py-4 py-2 lg:pb-8">
        <div className="lg:px-28">

       
        <h2 className="text-center text-lg lg:text-xl">
          We act with integrity, respect, trust, and great collaborative spirits.
        </h2>

        <div className="lg:pt-6">
          <div className="flex gap-11">
            <div className="flex flex-1 items-center justify-center px-2 lg:px-6 lg:gap-10">
              <div className="text-start gap-8 flex items-center justify-center">
                <img src={i1} alt="Group User" />
                <p>We are CUSTOMER OBSESSED. We are perfection obsessed.</p>
              </div>
            </div>
            <div className="flex flex-1 items-center justify-center px-2 lg:px-6 lg:gap-10">
              <div className="text-start gap-8 flex items-center justify-center">
                <img src={i2} alt="Group Cores" />
                <p>Our unique work approach enables us to STAND OUT from the crowd.</p>
              </div>
            </div>
          </div>

          <div className="py-2">
            <div className="flex gap-11">
              <div className="flex flex-1 items-center justify-center px-2 lg:px-6 lg:gap-10">
                <div className="text-start gap-8 flex items-center justify-center">
                  <img src={i3} alt="Lion" />
                  <p>We are a group of ambitious people with an EXTREME FOCUS on our commitments.</p>
                </div>
              </div>
              <div className="flex flex-1 items-center justify-center px-2 lg:px-6 lg:gap-10">
                <div className="text-start gap-8 flex items-center justify-center">
                  <img src={i4} alt="Spare" />
                  <p>The only fuel we need from our clients to perform beyond their expectations is regular and QUALITY COORDINATION.</p>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
        
        {/* Logo and Additional Content */}
        <div className="bgFourth">
          <div className="flex justify-center lg:pt-28 lg:px-36">
            <img src={logo} alt="Logo" className="w-15 h-auto lg:w-28 lg:p-4 p-2" />
          </div>
          <p className="text-start text-sm lg:text-lg lg:px-48 lg:py-3">
            We are heavily involved in the start-up space. More than 90% of our new clients come from the referrals of our existing clients who are happy with our work approach. We treat our client company as our own company and go to any possible extent to achieve its desired business objective. You can consider us as your internal team, give us a chance to serve you, and see us performing beyond your expectations.
          </p>
          <div className="flex justify-center lg:pt-6">
            <img src={lines} alt="Lines Decoration" className="max-w-full h-auto opacity-75" />
          </div>
        </div>

        {/* Pilot Mode Section */}
        <div className="flex items-center justify-center mt-8 lg:my- lg:mx-40">
          <div className="bg-secondary p-2 lg:mx-28 lg:pt-6">
            <p className="lg:px-44 lg:text-base text-sm text-center">
              Try the PILOT MODE of our services without worrying about any further commitment. Drop us a line to connect.
            </p>
          </div>
        </div>

        <div className="flex lg:items-center justify-center lg:pt-8 lg:gap-6">
          <p className="lg:text-xl text-base ">We'd love to hear from you</p>
          <img src={arrow} alt="Arrow" />
        </div>
      </div>

      {/* Contact Section */}
      <div className="bgContact w-full lg:px-40 lg:py-8">
        <div className="flex items-center justify-center  lg:px-36 lg:space-x-72 bg-secondary bg-opacity-50  lg:py-8">
          <div>
            <img src={f1} alt="Feature 1" />
          </div>
          <div>
            <img src={f2} alt="Feature 2" />
          </div>
          <div>
            <img src={f3} alt="Feature 3" />
          </div>
        </div>
<div className="flex  lg:gap-14 lg:px-24 ">
<div className="text-center lg:w-1/3 ">
          <p className="lg:text-lg">
            Meet Us at
            <br />
           <span className="text-sm">Level 7, Tower C, 7C, Green Boulevard, B9/A, Sector-62, Noida-201309, UP</span> 
          </p>
        </div>
        <div className="text-center lg:w-1/3  ">
          <p className="lg:text-lg">
          Call Us
          <br />
         <span className="lg:text-sm">p. (0) 120-4730534</span> 
          </p>
        </div>
        <div className="text-center lg:w-1/3  ">
          <p className="lg:text-lg">
          Email Us
            <br />
           <span className="lg:text-sm">nfo@brainsterra.com</span> i
          </p>
        </div>
</div>
        
      </div>
    </div>
  );
};

export default Fourth;
