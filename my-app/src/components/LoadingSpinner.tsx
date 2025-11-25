import React from "react";

const LoadingSpinner: React.FC = () => (
  <div className="flex items-center justify-center py-20">
    <div className="relative">
      <div className="w-16 h-16 border-4 border-gray-700 border-t-cyan-400 rounded-full animate-spin"></div>
    </div>
  </div>
);

export default LoadingSpinner;
