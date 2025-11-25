import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="w-full  text-center py-12 px-2">
      <div className="inline-block bg-teal-950/55 text-white text-sm px-4 py-2 rounded-md mb-8">
        This should take ~5 minutes.
      </div>

      <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mt-1 mb-3">
        Find the Right Medical Equipment
      </h1>
      <h2 className="text-3xl md:text-5xl font-bold text-teal-500 mt-1">
        AI-Powered Precision
      </h2>

      <p className="text-gray-400 max-w-2xl mx-auto mt-6">
        GroupUps guides you to the right equipment based on your practice’s
        specific needs, while also getting you the best pricing.
      </p>
    </section>
  );
};

export default Hero;
