import React from "react";
import type { EquipmentButtonProps } from "../types";

const EquipmentButton: React.FC<EquipmentButtonProps> = ({
  label,
  selected,
  onClick,
}) => (
  <button
    onClick={onClick}
    className={`
      px-4 py-4 rounded-lg border transition-all duration-300 text-white
      ${
        selected ? "border-teal-600 " : "border-gray-800  hover:border-teal-600"
      }
    `}
  >
    {label}
  </button>
);

export default EquipmentButton;
