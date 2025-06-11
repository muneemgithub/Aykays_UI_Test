import React from "react";
import phoneInterface1 from "../assets/Group 1171274791.png";
import phoneInterface2 from "../assets/Group 1171274793.png";


const Footer = () => {
  return (
    <div className="h-[66vh] bg-[#F2F2F2] w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-2">
        <div className="bg-[#ff5349] md:h-[66vh] h-[155vh] rounded-t-3xl overflow-hidden">
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
              <h2 className="text-4xl md:text-3xl xl:text-4xl font-bold leading-tight mb-6">
                <span className="block text-[#FFFFFF]">
                  Join the Fun – Download
                </span>
                <span className="block text-[#FFFFFF]">MyBindle Now!</span>
              </h2>

              <p className="text-lg lg:text-sm font-[600] mb-5 text-[#FFFFFF] max-w-64">
                Your Social Network, Your Way Download MyBindle Now and Be a
                Part of a Community That’s Always Evolving!
              </p>

              {/* Right Content - Phone Mockups */}
              <div className="flex flex-wrap gap-4">
                {/* App Store Button */}
                <button className="flex items-center bg-white rounded-full px-5 py-[6px] hover:bg-opacity-90 transition-all">
                  <svg
                    className="w-8 h-8 mr-2"
                    viewBox="0 0 24 24"
                    fill="black"
                  >
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.02.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-[10px] text-gray-700 font-bold">DOWNLOAD ON THE</div>
                    <div className="text-lg font-semibold">App Store</div>
                  </div>{" "}
                </button>

                {/* Google Play Button */}
                <button className="flex items-center bg-white rounded-full px-5 py-[6px] hover:bg-opacity-90 transition-all">
                  <svg
                    className="w-8 h-8 mr-2"
                    viewBox="0 0 24 24"
                    fill="black"
                  >
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                  <div className="text-left">
                     <div className="text-[10px] text-gray-700 font-bold">GET IT ON</div>
                    <div className="text-lg font-semibold">Google Play</div>
                  </div>
                </button>
              </div>
            </div>

            {/* Right Content - Phone Mockups */}
            <div className="flex-1 relative p-8 lg:p-0">
              <div className="relative w-full max-w-[500px] mx-auto">
                {/* Background Phone */}
                <div className="absolute md:-top-14 md:left-40 z-0">
                  <img
                    src={phoneInterface1}
                    alt="Phone Interface"
                    className="w-full h-auto max-w-[245px]"
                  />
                </div>

                {/* Front Phone */}
                <div className="relative md:right-[345px] md:top-[132px] top-[421px] z-10">
                  <img
                    src={phoneInterface2}
                    alt="iPhone Mockup"
                    className="w-full h-auto max-w-[230px] ml-auto"
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

export default Footer;