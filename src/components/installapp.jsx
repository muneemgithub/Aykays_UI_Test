import React from 'react';

const InstallApp = () => {
  const steps = [
    {
      number: '01',
      title: 'Download',
      description: 'Open Play Store or App Store',
      isFirst: true
    },
    {
      number: '02',
      title: 'Install App',
      description: 'The app will install automatically',
      isFirst: false
    },
    {
      number: '03',
      title: 'Ready to Use',
      description: 'Sign up or log in to start exploring',
      isFirst: false
    }
  ];

  return (
    <div className="bg-[#F2F2F2] py-16 lg:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#222222] mb-4">
          How to Install Our App
        </h2>
        <p className='text-center mb-6 text-[#222222] font-[600] text-sm'>Getting started is quick and easy! Follow these simple steps to install and start using MyBindle today.</p>

        <div className="flex flex-col md:flex-row items-center justify-center">
          {/* Connecting Lines - Only visible on desktop */}
          <div className="hidden lg:block top-[60px] left-[25%] right-[25%] h-[5px] bg-[#000] -z-10"></div>

          {/* Steps */}
          {steps.map((step, index) => (
            <div 
              key={index}
              className="w-full lg:w-1/3 flex flex-col items-center"
            >
              {/* Step Number */}
              <div className={`w-16 h-16 flex items-center justify-center text-2xl font-bold mb-6
                ${step.isFirst ? 'text-[#FF5349]' : ' text-[#222222]'}`}
              >
                {step.number}
              </div>

              {/* Step Content */}
              <div className="p-6 rounded-2xl bg-[#F2F2F2] backdrop-blur-md text-center
             shadow-[4px_4px_10px_rgba(0,0,0,0.1),-2px_-2px_6px_#FFFFFF]
             transition duration-300">
                <h3 className="text-xl font-bold text-[#222222] mb-2 text-center">
                  {step.title}
                </h3>
                <p className="text-[#222222] text-center font-bold text-sm">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InstallApp;