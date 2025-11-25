import React from "react";
import EquipmentButton from "./EquipmentButton";
import type { EquipmentSectionProps } from "../types";

const EquipmentSection: React.FC<EquipmentSectionProps> = ({
  equipment,
  selectedEquipment,
  onSelectEquipment,
  onFindEquipment,
  fadeIn,
}) => (
  <div
    className={`transition-opacity duration-700 ${
      fadeIn ? "opacity-100" : "opacity-0"
    }`}
  >
    {equipment.length === 0 ? (
      <div className="max-w-2xl mx-auto text-center py-12">
        <div className="mb-6">
          <svg
            className="w-5 h-5 mx-auto text-teal-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
              transform="rotate(90 12 12)"
            />
          </svg>
        </div>
        <h4 className="text-2xl font-semibold text-white mb-4">
          No Equipment Available
        </h4>
        <p className="text-white/60 text-lg">
          There are currently no equipment items available for this industry.
          Please check back later.
        </p>
      </div>
    ) : (
      <>
        <h3 className="px-56 text-white/80 text-lg mb-8 max-w-4xl mx-autoleft">
          Select the equipment you need:
        </h3>
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {equipment.map((item) => (
            <EquipmentButton
              key={item}
              label={item}
              selected={selectedEquipment === item}
              onClick={() => onSelectEquipment(item)}
            />
          ))}
        </div>

        <div className="flex justify-center">
          <button
            onClick={onFindEquipment}
            disabled={!selectedEquipment}
            className={`
              px-4 py-4 mb-10 rounded-full text-black font-bold transition-all duration-300
              ${
                selectedEquipment
                  ? "bg-white cursor-pointer"
                  : "bg-teal-900/70 cursor-pointer opacity-50"
              }
            `}
          >
            Find My Ideal Equipment
          </button>
        </div>
      </>
    )}
  </div>
);

export default EquipmentSection;
