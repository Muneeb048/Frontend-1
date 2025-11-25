export type Industry = "dental" | "vision" | "veterinarian" | null;

export type AppStep = "industry" | "equipment" | "chatbot";

export interface IndustryCardProps {
  title: string;
  icon: React.ReactNode;
  selected: boolean;
  onClick: () => void;
}

export interface EquipmentButtonProps {
  label: string;
  selected: boolean;
  onClick: () => void;
}

export interface IndustrySectionProps {
  selectedIndustry: Industry;
  onSelectIndustry: (industry: Industry) => void;
  fadeIn: boolean;
}

export interface EquipmentSectionProps {
  equipment: string[];
  selectedEquipment: string | null;
  onSelectEquipment: (equipment: string) => void;
  onFindEquipment: () => void;
  fadeIn: boolean;
}

export interface ChatbotPageProps {
  fadeIn: boolean;
}
