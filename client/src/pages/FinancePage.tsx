import React from 'react';
import { Sidebar } from "@/components/Sidebar";
import FinanceSection from "@/pages/sections/FinanceSection";

const FinancePage = () => {
  return (
    <div className="flex min-h-screen bg-[#F8FAFC]">
      <Sidebar activeModule="Finance & Plans" />
      <main className="flex-1 overflow-y-auto">
        <FinanceSection />
      </main>
    </div>
  );
};

export default FinancePage;
