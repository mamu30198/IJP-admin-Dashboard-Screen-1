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
  { title: "Posts & Deals", url: "/posts", icon: Tag },
  { title: "AI Intelligence Center", url: "/ai-intelligence", icon: ShieldCheck },
  { title: "Content Moderation", url: "/moderation", icon: MessageSquareText },
  { title: "Ads & Revenue", url: "/revenue", icon: TrendingUp },
  { title: "Finance & Plans", url: "/finance", icon: CreditCard },
  { title: "Reports", url: "/reports", icon: FileBarChart },
  { title: "System Alerts", url: "/alerts", icon: AlertTriangle },
  { title: "Users", url: "/users", icon: Users },
  { title: "Comments", url: "/comments", icon: MessageCircle },
  { title: "Pricing Settings", url: "/pricing", icon: Settings },
];

const otherMenuItems: MenuItem[] = [
  { title: "Profile", url: "/profile", icon: User },
  { title: "Sign Out", url: "/auth", icon: LogOut },
];

export function Sidebar({ className }: { className?: string }) {
  const [location] = useLocation();

  return (
    <aside className={cn("w-[280px] bg-[#003829] h-[calc(100vh-32px)] m-4 flex flex-col rounded-[24px] overflow-hidden text-white/70", className)}>
      {/* Checkered Header Section */}
      <div className="relative pt-12 pb-8 flex flex-col items-center">
        <div className="absolute inset-0 opacity-10 pointer-events-none" 
             style={{
               backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
               backgroundSize: '20px 20px'
             }}>
        </div>
        
        <div className="relative z-10 w-32 h-32 bg-white rounded-full p-2 shadow-xl mb-6">
          <img
            src="/figmaAssets/component-6.png"
            alt="IJustPaid Logo"
            className="w-full h-full object-contain"
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
                        ? "bg-[#21c45d] text-white font-semibold"
                        : "hover:bg-white/5 hover:text-white"
                    )}
                  >
                    <item.icon className={cn("w-[18px] h-[18px]", isActive ? "text-white" : "text-white/60 group-hover:text-white")} />
                    <span className="text-[14px] [font-family:'Poppins',Helvetica]">
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
                <a className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 hover:text-white transition-all duration-200 group">
                  <item.icon className="w-[18px] h-[18px] text-white/60 group-hover:text-white" />
                  <span className="text-[14px] [font-family:'Poppins',Helvetica]">
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
