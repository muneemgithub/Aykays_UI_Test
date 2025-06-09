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
    <div className="bg-gray-50 py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          How to Install Our App
        </h2>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 relative">
          {/* Connecting Lines - Only visible on desktop */}
          <div className="hidden lg:block absolute top-[60px] left-[25%] right-[25%] h-[2px] bg-gray-200 -z-10"></div>

          {/* Steps */}
          {steps.map((step, index) => (
            <div 
              key={index}
              className="w-full lg:w-1/3 flex flex-col items-center"
            >
              {/* Step Number */}
              <div className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mb-6 shadow-lg
                ${step.isFirst ? 'text-black' : ' text-gray-800'}`}
              >
                {step.number}
              </div>

              {/* Step Content */}
              <div className="bg-white rounded-2xl p-6 shadow-lg w-full max-w-sm hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Connecting Lines */}
        <div className="lg:hidden flex flex-col items-center gap-4">
          {[1, 2].map((line) => (
            <div key={line} className="w-[2px] h-8 bg-gray-200"></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InstallApp;
