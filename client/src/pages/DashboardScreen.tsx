import { AnalyticsSummarySection } from "./sections/AnalyticsSummarySection";
import { DashboardMainSection } from "./sections/DashboardMainSection";
import { UserTableSection } from "./sections/UserTableSection";
import { Sidebar } from "@/components/Sidebar";

export const DashboardScreen = (): JSX.Element => {
  return (
    <div className="flex bg-[#f5f6fa] w-full min-h-screen">
      <Sidebar className="w-[280px] flex-shrink-0 sticky top-0" />

      <main className="flex flex-1 flex-col items-start gap-[30px] p-[24px] overflow-x-hidden">
        <DashboardMainSection />
        <AnalyticsSummarySection />
        <UserTableSection />
      </main>
    </div>
  );
};
