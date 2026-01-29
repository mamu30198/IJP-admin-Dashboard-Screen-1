import {
  LayoutDashboard,
  Users,
  Store,
  FileText,
  CreditCard,
  Settings,
  HelpCircle,
  LogOut,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  className?: string;
}

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: Users, label: "Users", active: false },
  { icon: Store, label: "Vendors", active: false },
  { icon: FileText, label: "Posts", active: false },
  { icon: CreditCard, label: "Revenue", active: false },
  { icon: Settings, label: "Settings", active: false },
];

const secondaryItems = [
  { icon: HelpCircle, label: "Help & Support" },
  { icon: LogOut, label: "Logout" },
];

export function Sidebar({ className }: SidebarProps) {
  return (
    <div className={cn("flex flex-col h-full bg-white border-r border-[#edf1f3] py-8", className)}>
      <div className="px-6 mb-10 flex items-center gap-2">
        <div className="w-8 h-8 bg-frame-4 rounded-lg flex items-center justify-center text-white font-bold">
          IJP
        </div>
        <span className="font-semibold text-xl text-total-sales">Admin</span>
      </div>

      <nav className="flex-1 px-4 space-y-2">
        <p className="px-4 text-[10px] font-semibold text-title uppercase tracking-wider mb-4 opacity-50">
          Main Menu
        </p>
        {menuItems.map((item) => (
          <button
            key={item.label}
            className={cn(
              "w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200",
              item.active
                ? "bg-frame-4 text-white shadow-lg shadow-frame-4/20"
                : "text-title hover:bg-[#f5f6fa]"
            )}
          >
            <div className="flex items-center gap-3">
              <item.icon className="w-5 h-5" />
              <span className="font-medium text-sm">{item.label}</span>
            </div>
            {item.active && <ChevronRight className="w-4 h-4" />}
          </button>
        ))}
      </nav>

      <div className="px-4 mt-auto pt-8 border-t border-[#edf1f3]">
        {secondaryItems.map((item) => (
          <button
            key={item.label}
            className="w-full flex items-center gap-3 px-4 py-3 text-title hover:bg-[#f5f6fa] rounded-xl transition-all duration-200"
          >
            <item.icon className="w-5 h-5 opacity-70" />
            <span className="font-medium text-sm">{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
