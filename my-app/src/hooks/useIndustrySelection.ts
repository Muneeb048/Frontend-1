import { useState } from "react";
import type { Industry } from "../types";

type Step = "industry" | "equipment" | "chatbot";

export const useIndustrySelection = () => {
  const [selectedIndustry, setSelectedIndustry] = useState<Industry>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [currentStep, setCurrentStep] = useState<Step>("industry");
  const [selectedEquipment, setSelectedEquipment] = useState<string | null>(
    null
  );
  const [fadeIn, setFadeIn] = useState(false);

  const handleIndustrySelect = (industry: Industry) => {
    setSelectedIndustry(industry);
    setIsTransitioning(true);
    setFadeIn(false);

    setTimeout(() => {
      setCurrentStep("equipment");
      setIsTransitioning(false);
      setTimeout(() => setFadeIn(true), 50);
    }, 1000);
  };

  const handleEquipmentSelect = (equipment: string) => {
    setSelectedEquipment(equipment);
  };

  const handleProceedToChatbot = () => {
    setIsTransitioning(true);
    setFadeIn(false);

    setTimeout(() => {
      setCurrentStep("chatbot");
      setIsTransitioning(false);
      setTimeout(() => setFadeIn(true), 50);
    }, 1000);
  };

  const resetSelection = () => {
    setSelectedIndustry(null);
    setCurrentStep("industry");
    setSelectedEquipment(null);
    setFadeIn(false);
    setIsTransitioning(false);
  };

  return {
    selectedIndustry,
    isTransitioning,
    currentStep,
    selectedEquipment,
    fadeIn,
    handleIndustrySelect,
    handleEquipmentSelect,
    handleProceedToChatbot,
    resetSelection,
  };
};
