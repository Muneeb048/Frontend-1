import React from "react";

const RightPanel: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center p-6 md:p-8 h-full text-center">
      <h1 className="text-2xl md:text-4xl font-bold text-teal-500 mb-2">
        group<span className="text-white">ups</span>
      </h1>
      <p className="text-gray-400 text-sm md:text-base text-center lg:text-left max-w-md md:max-w-none">
        You're about to use the GroupUps chatbot.
      </p>

      <p className="text-gray-400 text-sm md:text-base text-center lg:text-left  max-w-md md:max-w-none">
        Once you finish, products matching your needs will display here
      </p>
    </div>
  );
};
export default RightPanel;
