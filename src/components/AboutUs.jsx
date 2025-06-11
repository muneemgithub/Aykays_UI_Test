import React from "react";
import leftImage from "../assets/Group 3.png";

const AboutUs = () => {
  const features = [
    {
      emoji: "🎥",
      title: "Short Videos & Reels",
      desc: "Share engaging, bite-sized content that keeps everyone entertained.",
    },
    {
      emoji: "🔔",
      title: "Smart Notifications",
      desc: "Stay updated on what matters without the noise.",
    },
    {
      emoji: "👥",
      title: "Interest-Based Communities",
      desc: "Join groups and discussions that match your passion.",
    },
  ];

  return (
    <div className="bg-[#F2F2F2] w-full min-h-screen md:px-28 px-4 py-10 flex flex-col md:flex-row items-center justify-center gap-12">
      {/* Left Side - Mobile Images */}
      <div className="md:w-[50%] w-[100%]">
        <img src={leftImage} alt="Phone Mockup 1" />
      </div>

      {/* Right Side - Text + Features */}
      <div className="md:w-[50%] w-[100%] p-2">
        <h2 className="text-3xl md:text-[40px] font-[700] text-[#222222] mb-4">
          Where Every Click Sparks a Connection!
        </h2>
        <p className="text-[#525252] mb-8 font-[600]">
          A small act of kindness today can create a lifetime of impact for
          someone in need. Give from the heart and change a life!
        </p>

        <div className="space-y-6">
          {features.map((item, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-[#F2F2F2] backdrop-blur-md text-center
             shadow-[4px_4px_10px_rgba(0,0,0,0.1),-3px_-3px_6px_#FFFFFF]
             transition duration-300"
            >
              <div className="flex  flex-col items-start gap-1">
                <div className="flex flex-row justify-start items-center">
                  <span className="text-3xl group-hover:scale-110 transition-transform duration-200">
                    {item.emoji}
                  </span>
                  <h3 className="md:text-lg text-[17px] font-bold text-[#222222] group-hover:text-blue-600">
                    {item.title}
                  </h3>
                </div>

                <div>
                  <p className="font-[600] mt-1 text-[#525252] text-start">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;