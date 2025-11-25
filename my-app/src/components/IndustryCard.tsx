import React from "react";

interface Props {
  title: string;
  icon: React.ReactNode;
  selected: boolean;
  onClick: () => void;
}

const IndustryCard: React.FC<Props> = ({ title, icon, selected, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="h-44 border rounded-xl flex flex-col items-center justify-center gap-4 cursor-pointer transition border-teal-950 bg-[#030d13] hover:border-teal-700 "
    >
      <div className="text-teal-400 text-5xl">{icon}</div>
      <p className="text-white">{title}</p>
    </div>
  );
};

export default IndustryCard;
