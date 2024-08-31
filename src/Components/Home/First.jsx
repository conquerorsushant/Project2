import React from "react";
import lines from "../../assets/images/lines.png"; // Adjust the path to the actual location of your lines.png file

const First = () => {
  return (
    <div className="bgFirst bg-primary text-white min-h-screen p-4 sm:p-6 md:p-8 lg:px-20 lg:pt-28 lg:pb-96 relative">
      <div className="flex flex-col lg:h-1/2 justify-between flex-grow">
        {/* Top Left Content */}
        <div className="font-semibold text-sm sm:text-xl lg:text-xl lg:w-2/3">
          A one-stop destination for START-ups to start, and EXCEL in their businesses.
        </div>
      </div>

      {/* Image in the middle of the screen, shifted upward */}
      <div className="absolute inset-0 flex items-center justify-center transform -translate-y-36 sm:-translate-y-44">
        <img src={lines} alt="Decorative Lines" className="max-w-full h-auto opacity-75" />
      </div>

      <div className="flex flex-col md:flex-row p-4 sm:p-6 md:p-8 lg:px-28 lg:py-28  space-y-4 md:space-y-0 md:space-x-44 ">
        {/* Bottom Left Content */}
        <div className="md:w-1/2">
          <div className="text-sm sm:text-base  pt-2 lg:text-lg lg:pt-40">
            Whether it is the starting or expansion of your business, we can help you take it to the next level.
          </div>
        </div>

        {/* Dark Container on Bottom Right */}
        <div className="bg-black text-xs sm:text-base lg:text-base p-4 sm:p-6 md:p-4 opacity-90 w-full md:w-1/2 lg:w-[350px]">
          <div>
            BrainsTerra Intelligence enables technical and non-technical CEOs/Founders to start, and excel in their businesses by helping them in building their high-quality engineering teams, and developing technology products for them. Companies can outsource all IT and tech development work from us until they have their own tech teams.
          </div>
        </div>
      </div>
    </div>
  );
};

export default First;
