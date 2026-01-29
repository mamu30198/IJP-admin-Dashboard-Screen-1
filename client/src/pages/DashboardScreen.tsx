import { AnalyticsSummarySection } from "./sections/AnalyticsSummarySection";
import { DashboardMainSection } from "./sections/DashboardMainSection";
import { UserTableSection } from "./sections/UserTableSection";
import { Sidebar } from "@/components/Sidebar";

export const DashboardScreen = (): JSX.Element => {
  return (
    <div className="flex bg-[#f5f6fa] w-full min-h-screen">
      <Sidebar className="w-[271px] flex-shrink-0" />

      <main className="flex mt-[26px] flex-1 flex-col items-start gap-[30px] pr-[21px] pl-[21px] overflow-x-hidden">
        <DashboardMainSection />
        <AnalyticsSummarySection />
        <UserTableSection />
      </main>
    </div>
  );
};
