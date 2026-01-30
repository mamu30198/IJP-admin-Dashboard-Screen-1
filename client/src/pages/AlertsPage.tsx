import { Sidebar } from "@/components/Sidebar";
import SystemAlertsSection from "@/pages/sections/SystemAlertsSection";

const AlertsPage = () => {
  return (
    <div className="flex min-h-screen bg-[#F8FAFC]">
      <Sidebar />
      <main className="flex-1 overflow-y-auto">
        <SystemAlertsSection />
      </main>
    </div>
  );
};

export default AlertsPage;
