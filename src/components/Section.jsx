import React from "react";
import iPhoneMockup from "../assets/iPhone 14 Pro.png";
import bodyImage from "../assets/Body.png";

const Section = () => {
  return (
    <div className="min-h-screen bg-[#F2F2F2] w-full py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#ff5349] md:h-[85vh] h-[165vh] rounded-3xl overflow-hidden">
          {/* Background Pattern - SVG for curved lines */}
          <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%" className="absolute inset-0">
              <pattern
                id="curved-lines"
                x="0"
                y="0"
                width="100"
                height="100"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M0 50 Q 25 0, 50 50 T 100 50"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                />
              </pattern>
              <rect width="100%" height="100%" fill="url(#curved-lines)" />
            </svg>
          </div>

          <div className="flex flex-col lg:flex-row items-center relative">
            {/* Left Content */}
            <div className="flex-1 p-8 lg:p-16 relative z-10">
              <h2 className="text-4xl md:text-3xl xl:text-5xl font-bold leading-tight mb-6">
                <span className="block text-[#FFFFFF]">Be the Reason</span>
                <span className="block text-[#FFFFFF]">
                  Someone Smiles Today!
                </span>
              </h2>

              <p className="text-lg lg:text-sm font-[600] mb-5 text-[#FFFFFF] max-w-xl">
                Your generosity can change lives every donation brings hope,
                support, and a brighter future. Give today and make a
                difference!
              </p>

              <button className="px-8 py-2 bg-[#F2F2F2] text-[#FF5349] rounded-[7px] font-[600] text-lg hover:bg-red-50 transition duration-300 shadow-lg">
                Donate Now
              </button>
            </div>

            {/* Right Content - Phone Mockups */}
            <div className="flex-1 relative p-8 lg:p-0">
              <div className="relative w-full max-w-[500px] mx-auto">
                {/* Background Phone */}
                <div className="absolute top-10 left-5 lg:top-20 md:-top-20 md:left-3 lg:left-40 z-0">
                  
                   <img
                    src={bodyImage}
                    alt="Phone Interface"
                    className="w-full h-auto max-w-[300px]"
                  />
                </div>

                {/* Front Phone */}
                <div className="relative md:top-[330px] lg:right-[345px] lg:top-60 top-[500px] z-10">
                 <img
                    src={iPhoneMockup}
                    alt="iPhone Mockup"
                    className="w-full h-auto md:max-w-[260px] max-w-[320px] ml-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;