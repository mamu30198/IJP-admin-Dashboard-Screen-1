import { AnalyticsSummarySection } from "./sections/AnalyticsSummarySection";
import { DashboardMainSection } from "./sections/DashboardMainSection";
import { UserTableSection } from "./sections/UserTableSection";

export const DashboardScreen = (): JSX.Element => {
  return (
    <div className="flex flex-col items-start gap-[30px] p-[24px] w-full">
      <DashboardMainSection />
      <AnalyticsSummarySection />
      <UserTableSection />
    </div>
  );
};
