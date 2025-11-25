import React from "react";
import IndustrySection from "./components/IndustriesSection";
import EquipmentSection from "./components/EquipmentSection";
import LoadingSpinner from "./components/LoadingSpinner";
import { useIndustrySelection } from "./hooks/useIndustrySelection";
import { equipmentByIndustry } from "./data/equipmentData";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ChatbotPage from "./components/ChatbotPage";

function App() {
  const {
    selectedIndustry,
    currentStep,
    isTransitioning,
    selectedEquipment,
    fadeIn,
    handleIndustrySelect,
    handleEquipmentSelect,
    handleProceedToChatbot,
  } = useIndustrySelection();

  const currentEquipment = selectedIndustry
    ? equipmentByIndustry[selectedIndustry]
    : [];

  return (
    <div className="bg-[#010b14] min-h-screen">
      <Navbar />

      {/* Only show Hero on industry and equipment steps */}
      {currentStep !== "chatbot" && <Hero />}

      {/* Main Content */}
      <main className="container mx-auto px-4">
        {/* Industry Selection */}
        {currentStep === "industry" && !isTransitioning && (
          <IndustrySection
            selectedIndustry={selectedIndustry}
            onSelectIndustry={handleIndustrySelect}
            fadeIn={fadeIn}
          />
        )}

        {/* Loading State */}
        {isTransitioning && <LoadingSpinner />}

        {/* Equipment Selection */}
        {currentStep === "equipment" && !isTransitioning && (
          <EquipmentSection
            equipment={currentEquipment}
            selectedEquipment={selectedEquipment}
            onSelectEquipment={handleEquipmentSelect}
            onFindEquipment={handleProceedToChatbot}
            fadeIn={fadeIn}
          />
        )}

        {/* Chatbot Page */}
        {currentStep === "chatbot" && !isTransitioning && (
          <ChatbotPage fadeIn={fadeIn} />
        )}
      </main>
    </div>
  );
}

export default App;
