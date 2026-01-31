import { Sidebar } from "@/components/Sidebar";
import ReportsSection from "@/pages/sections/ReportsSection";

const ReportsPage = () => {
  return (
    <div className="flex min-h-screen bg-[#F8FAFC]">
      <Sidebar className="w-[280px] flex-shrink-0 sticky top-0 h-screen" />
      <main className="flex-1 overflow-y-auto">
        <ReportsSection />
      </main>
    </div>
  );
};

export default ReportsPage;
