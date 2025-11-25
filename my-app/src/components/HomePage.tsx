import React from "react";
import Hero from "./Hero";
import IndustriesSection from "./IndustriesSection";
import type { Industry } from "../types";

const HomePage: React.FC = () => {
  return (
    <div className="bg-[#010b14] min-h-screen">
      <Hero />
      <IndustriesSection
        selectedIndustry={null}
        onSelectIndustry={function (industry: Industry): void {
          throw new Error("Function not implemented.");
        }}
        fadeIn={false}
      />
    </div>
  );
};

export default HomePage;
