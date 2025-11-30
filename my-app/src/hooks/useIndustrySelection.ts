import { useState } from "react";
import type { Industry } from "../types";

type Step = "industry" | "equipment" | "chatbot";

export const useIndustrySelection = () => {
  const [selectedIndustry, setSelectedIndustry] = useState<Industry>(() => {
    try {
      const stored = localStorage.getItem("selectedIndustry");
      if (
        stored === "dental" ||
        stored === "vision" ||
        stored === "veterinarian"
      ) {
        return stored as Industry;
      }
    } catch (e) {
      // ignore storage errors
    }
    return null;
  });
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [currentStep, setCurrentStep] = useState<Step>("industry");
  const [selectedEquipment, setSelectedEquipment] = useState<string | null>(
    null
  );
  const [fadeIn, setFadeIn] = useState(true);

  const handleIndustrySelect = (industry: Industry) => {
    setSelectedIndustry(industry);
    setIsTransitioning(true);
    setFadeIn(false);

    try {
      if (industry) localStorage.setItem("selectedIndustry", industry);
      else localStorage.removeItem("selectedIndustry");
    } catch (e) {
      // ignore storage errors
    }

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

    try {
      localStorage.removeItem("selectedIndustry");
    } catch (e) {
      // ignore
    }
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
