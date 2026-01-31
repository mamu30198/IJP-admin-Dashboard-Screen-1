import { Sidebar } from "@/components/Sidebar";
import ContentModerationSection from "@/pages/sections/ContentModerationSection";

const ContentModerationPage = () => {
  return (
    <div className="flex min-h-screen bg-[#F8FAFC]">
      <Sidebar />
      <main className="flex-1 overflow-y-auto">
        <ContentModerationSection />
      </main>
    </div>
  );
};

export default ContentModerationPage;
