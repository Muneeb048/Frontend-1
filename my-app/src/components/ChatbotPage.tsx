import React, { useState } from "react";

// Left Column Component
const LeftColumn = () => {
  return (
    <div className="h-screen bg-teal-950/10 flex flex-col justify-between py-12 px-16">
      <div>
        <h2 className="text-3xl text-white leading-tight">
          Hi! I can help narrow down 3D
          <br />
          Printer options for you without
          <br />
          selling to you :)
        </h2>
        <p className="text-teal-600 text-2xl mt-3 mb-8">
          I'll ask you Qs to guide us. You can ask
          <br />
          me Qs too.
        </p>
        <button className="bg-white text-gray-900 px-8 py-3 rounded-full text-md font-semibold hover:bg-gray-100 transition-colors shadow-lg">
          Get Started
        </button>
      </div>

      <p className="text-gray-400 text-sm text-center">
        This should take ~5 minutes.
      </p>
    </div>
  );
};

// Right Column Component
const RightColumn = () => {
  return (
    <div className="flex-1 flex items-center justify-center h-screen">
      <div className="max-w-md w-full text-center">
        <div>
          <h3 className="text-4xl font-bold">
            <span className="text-teal-600">group</span>
            <span className="text-white">ups</span>
          </h3>
        </div>
        <p className="text-gray-500/80 text-sm mt-2">
          You're about to use the GroupUps chatbot.
        </p>
        <p className="text-gray-500/80 text-base">
          Once you finish, products matching your needs will display here
        </p>
      </div>
    </div>
  );
};

// Main Component
const ChatbotPage = () => {
  const [fadeIn, setFadeIn] = useState(true);

  return (
    <div className="h-screen overflow-hidden ">
      {/* Main Content */}
      <div
        className={`transition-opacity duration-700 ${
          fadeIn ? "opacity-100" : "opacity-0"
        } flex h-64`}
      >
        {/* Left Column */}
        <LeftColumn />

        {/* Right Column */}
        <RightColumn />
      </div>
    </div>
  );
};

export default ChatbotPage;
