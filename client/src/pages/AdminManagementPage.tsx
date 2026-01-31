import { Sidebar } from "@/components/Sidebar";
import AdminManagementSection from "@/pages/sections/AdminManagementSection";

const AdminManagementPage = () => {
  return (
    <div className="flex min-h-screen bg-[#F8FAFC]">
      <Sidebar />
      <main className="flex-1 overflow-y-auto">
        <AdminManagementSection />
      </main>
    </div>
  );
};

export default AdminManagementPage;
