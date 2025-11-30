import React from "react";
import IndustryCard from "./IndustryCard";
import { FaTooth, FaPaw } from "react-icons/fa";
import { PiEyeglassesFill } from "react-icons/pi";
import type { IndustrySectionProps } from "../types";

const IndustriesSection: React.FC<IndustrySectionProps> = ({
  selectedIndustry,
  onSelectIndustry,
  fadeIn,
}) => {
  return (
    <section
      className={`w-full py-4 px-14 transition-opacity duration-500 ${
        fadeIn ? "opacity-100" : "opacity-0"
      }`}
    >
      <h3 className="px-16 text-white/80 text-lg mb-8 max-w-4xl mx-auto">
        Select your industry first
      </h3>

      <div className="max-w-3xl mt-2 mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <IndustryCard
          title="Dental"
          icon={<FaTooth />}
          selected={selectedIndustry === "dental"}
          onClick={() => onSelectIndustry("dental")}
        />

        <IndustryCard
          title="Vision"
          icon={<PiEyeglassesFill />}
          selected={selectedIndustry === "vision"}
          onClick={() => onSelectIndustry("vision")}
        />

        <IndustryCard
          title="Veterinarian"
          icon={<FaPaw />}
          selected={selectedIndustry === "veterinarian"}
          onClick={() => onSelectIndustry("veterinarian")}
        />
      </div>
    </section>
  );
};

export default IndustriesSection;
