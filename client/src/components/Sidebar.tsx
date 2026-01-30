import { cn } from "@/lib/utils";
import { Link, useLocation } from "wouter";
import { 
  LayoutDashboard, 
  Tag, 
  ShieldCheck, 
  MessageSquareText, 
  TrendingUp, 
  CreditCard, 
  FileBarChart, 
  AlertTriangle, 
  Users, 
  MessageCircle, 
  Settings, 
  User, 
  LogOut 
} from "lucide-react";

interface MenuItem {
  title: string;
  url: string;
  icon: any;
}

const mainMenuItems: MenuItem[] = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard },
  { title: "Manage Users", url: "/users", icon: Users },
  { title: "Manage Vendors", url: "/vendors", icon: User },
  { title: "Risk Assessment", url: "/risk", icon: ShieldCheck },
  { title: "Fraud Alerts", url: "/alerts", icon: AlertTriangle },
  { title: "Moderation Queue", url: "/moderation", icon: MessageSquareText },
  { title: "Revenue Center", url: "/revenue", icon: TrendingUp },
  { title: "System Reports", url: "/reports", icon: FileBarChart },
  { title: "Comments", url: "/comments", icon: MessageCircle },
  { title: "Platform Settings", url: "/settings", icon: Settings },
];

const otherMenuItems: MenuItem[] = [
  { title: "Profile", url: "/profile", icon: User },
  { title: "Sign Out", url: "/auth", icon: LogOut },
];

export function Sidebar({ className }: { className?: string }) {
  const [location] = useLocation();

  return (
    <aside className={cn("w-[280px] bg-[#002B20] h-[calc(100vh-32px)] m-4 flex flex-col rounded-[24px] overflow-hidden text-white/70", className)}>
      {/* Checkered Header Section */}
      <div className="relative pt-12 pb-6 flex flex-col items-center">
        <div className="absolute top-0 left-0 w-full h-[140px] pointer-events-none overflow-hidden rounded-t-[24px]">
          <div className="flex flex-wrap w-[320px]">
            {Array.from({ length: 64 }).map((_, i) => (
              <div 
                key={i} 
                className={cn(
                  "w-10 h-10",
                  (Math.floor(i / 8) + (i % 8)) % 2 === 0 ? "bg-white/[0.04]" : "bg-transparent"
                )}
              />
            ))}
          </div>
        </div>
        
        <div className="relative z-10 w-28 h-28 bg-white rounded-full p-2 shadow-xl mb-4">
          <img
            src="/figmaAssets/new_logo.png"
            alt="IJustPaid Logo"
            className="w-full h-full object-contain rounded-full"
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 custom-scrollbar">
        <div className="mb-6">
          <p className="px-4 text-[11px] font-medium text-white/40 uppercase tracking-[1px] mb-4">
            Main Menu
          </p>
          <nav className="space-y-1">
            {mainMenuItems.map((item) => {
              const isActive = location === item.url;
              return (
                <Link key={item.title} href={item.url}>
                  <a
                    className={cn(
                      "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group",
                      isActive
                        ? "bg-[#21c45d] text-white font-medium"
                        : "text-white/60 hover:text-white hover:bg-white/5"
                    )}
                  >
                    <item.icon className={cn("w-5 h-5", isActive ? "text-white" : "text-white/40 group-hover:text-white")} />
                    <span className="text-[14px] font-medium">
                      {item.title}
                    </span>
                  </a>
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="mb-8">
          <p className="px-4 text-[11px] font-medium text-white/40 uppercase tracking-[1px] mb-4">
            Others
          </p>
          <nav className="space-y-1">
            {otherMenuItems.map((item) => (
              <Link key={item.title} href={item.url}>
                <a className="flex items-center gap-3 px-4 py-3 rounded-xl text-white/60 hover:text-white hover:bg-white/5 transition-all duration-200 group">
                  <item.icon className="w-5 h-5 text-white/40 group-hover:text-white" />
                  <span className="text-[14px] font-medium">
                    {item.title}
                  </span>
                </a>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </aside>
  );
}
