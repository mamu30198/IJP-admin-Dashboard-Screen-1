import { AnalyticsSummarySection } from "./sections/AnalyticsSummarySection";
import { DashboardMainSection } from "./sections/DashboardMainSection";
import { UserTableSection } from "./sections/UserTableSection";

export const DashboardScreen = (): JSX.Element => {
  return (
    <div className="flex gap-[21px] bg-[#f5f6fa] rounded-[20px] overflow-hidden w-full">
      <aside className="mt-[37px] w-[271px] flex-shrink-0 ml-3">
        <img
          className="w-full h-auto"
          alt="Component"
          src="/figmaAssets/component-6.png"
        />
      </aside>

      <main className="flex mt-[26px] flex-1 flex-col items-start gap-[30px] pr-[21px]">
        <DashboardMainSection />
        <AnalyticsSummarySection />
        <UserTableSection />
      </main>
    </div>
  );
};
