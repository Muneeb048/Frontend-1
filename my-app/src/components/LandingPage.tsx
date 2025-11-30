import React from "react";
import Navbar from "./Navbar";
import RightPanel from "./RightPanel";

interface LandingPageProps {
  onGetStarted: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onGetStarted }) => {
  return (
    <div className="min-h-screen bg-[#041119] flex flex-col">
      <Navbar />
      <div className="flex-1 flex flex-col lg:flex-row">
        {/* Left Side */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center lg:justify-start lg:px-12 px-6 pt-12 lg:pt-24 pb-12 text-left">
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-white mb-6 md:mb-8 leading-tight font-semibold">
            <span className="block md:whitespace-nowrap">
              Hi! I can help narrow down
            </span>
            <span className="block mt-3">
              CBCT options for you without selling to you :)
            </span>
          </h2>
          <p className="text-base md:text-lg text-teal-500 mb-6 md:mb-8 leading-relaxed">
            I'll ask you Qs to guide us. You can ask
            <br />
            me Qs too.
          </p>
          <div className="flex items-start">
            <button
              onClick={onGetStarted}
              className="bg-white text-gray-900 px-6 md:px-8 py-3 rounded-full text-sm md:text-base font-semibold hover:bg-gray-100 transition-colors inline-block"
            >
              Get Started
            </button>
          </div>
          <p className="text-gray-500 ml-16 mt-14 text-sm hidden md:block">
            This should take ~5 minutes.
          </p>
        </div>

        {/* Right Side */}
        <div className="w-full lg:w-1/2 flex items-center justify-center bg-[#000000]/10 border-t lg:border-t-0 lg:border-l border-gray-800">
          <RightPanel />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
