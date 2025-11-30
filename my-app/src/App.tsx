// React import not needed with automatic JSX runtime
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import IndustrySection from "./components/IndustriesSection";
import EquipmentSection from "./components/EquipmentSection";
import LoadingSpinner from "./components/LoadingSpinner";
import { useIndustrySelection } from "./hooks/useIndustrySelection";
import { equipmentByIndustry } from "./data/equipmentData";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LandingPage from "./components/LandingPage";
import ChatPage from "./components/ChatPage";

function App() {
  const {
    selectedIndustry,
    isTransitioning,
    selectedEquipment,
    fadeIn,
    handleIndustrySelect,
    handleEquipmentSelect,
    handleProceedToChatbot,
  } = useIndustrySelection();

  const navigate = useNavigate();
  const location = useLocation();

  const currentEquipment = selectedIndustry
    ? equipmentByIndustry[selectedIndustry]
    : [];

  const showHeader = !location.pathname.startsWith("/chat");

  return (
    <div className="bg-[#010b14] min-h-screen">
      {showHeader && <Navbar />}

      {showHeader && <Hero />}

      <main className="container mx-auto px-4">
        <Routes>
          <Route
            path="/"
            element={
              <>
                {isTransitioning && <LoadingSpinner />}
                {!isTransitioning && (
                  <IndustrySection
                    selectedIndustry={selectedIndustry}
                    onSelectIndustry={(industry) => {
                      handleIndustrySelect(industry);
                      navigate("/equipment");
                    }}
                    fadeIn={fadeIn}
                  />
                )}
              </>
            }
          />

          <Route
            path="/equipment"
            element={
              <>
                {isTransitioning && <LoadingSpinner />}
                {!isTransitioning && (
                  <EquipmentSection
                    equipment={currentEquipment}
                    selectedEquipment={selectedEquipment}
                    onSelectEquipment={(eq) => handleEquipmentSelect(eq)}
                    onFindEquipment={() => {
                      handleProceedToChatbot();
                      navigate("/chat");
                    }}
                    fadeIn={fadeIn}
                  />
                )}
              </>
            }
          />

          <Route
            path="/chat"
            element={
              <LandingPage onGetStarted={() => navigate("/chat/room")} />
            }
          />

          <Route path="/chat/room" element={<ChatPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
