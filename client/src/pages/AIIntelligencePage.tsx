import { Sidebar } from "@/components/Sidebar";
import AIIntelligenceSection from "@/pages/sections/AIIntelligenceSection";

const AIIntelligencePage = () => {
  return (
    <div className="flex min-h-screen bg-[#F8FAFC]">
      <Sidebar />
      <main className="flex-1 overflow-y-auto">
        <AIIntelligenceSection />
      </main>
    </div>
  );
};

export default AIIntelligencePage;
