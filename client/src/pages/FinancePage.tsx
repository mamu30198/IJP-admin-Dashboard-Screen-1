import React from 'react';
import { Sidebar } from "@/components/Sidebar";
import FinanceSection from "@/pages/sections/FinanceSection";

const FinancePage = () => {
  return (
    <div className="flex min-h-screen bg-[#F8FAFC]">
      <Sidebar className="w-[280px] flex-shrink-0 sticky top-0 h-screen" activeModule="Finance & Plans" />
      <main className="flex-1 overflow-y-auto">
        <FinanceSection />
      </main>
    </div>
  );
};

export default FinancePage;
