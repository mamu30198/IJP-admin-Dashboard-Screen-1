import { cn } from "@/lib/utils";
import { Link, useLocation } from "wouter";

interface MenuItem {
  title: string;
  url: string;
  icon: string;
}

const mainMenuItems: MenuItem[] = [
  {
    title: "Dashboard",
    url: "/",
    icon: "/figmaAssets/frame-1171275704-3.svg",
  },
  {
    title: "Users",
    url: "/users",
    icon: "/figmaAssets/frame-1171275705.svg",
  },
  {
    title: "Vendors",
    url: "/vendors",
    icon: "/figmaAssets/frame-1171275704-1.svg",
  },
  {
    title: "Posts",
    url: "/posts",
    icon: "/figmaAssets/frame-1171275704.svg",
  },
  {
    title: "Revenue",
    url: "/revenue",
    icon: "/figmaAssets/frame-1171275704-2.svg",
  },
  {
    title: "Settings",
    url: "/settings",
    icon: "/figmaAssets/frame-1171275704-4.svg",
  },
];

export function Sidebar({ className }: { className?: string }) {
  const [location] = useLocation();

  return (
    <aside className={cn("w-[271px] bg-white h-screen flex flex-col border-r border-[#edf1f3]", className)}>
      <div className="p-[37px_30px_20px_30px]">
        <img
          src="/figmaAssets/component-6.png"
          alt="IJP Admin Logo"
          className="w-full h-auto"
        />
      </div>

      <nav className="flex-1 px-4 py-4 space-y-1">
        {mainMenuItems.map((item) => {
          const isActive = location === item.url;
          return (
            <Link key={item.title} href={item.url}>
              <a
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group",
                  isActive
                    ? "bg-[#62a230] text-white shadow-[0px_4px_12px_rgba(98,162,48,0.2)]"
                    : "text-[#7a838e] hover:bg-[#f5f6fa] hover:text-[#222f36]"
                )}
              >
                <img 
                  src={item.icon} 
                  alt={item.title} 
                  className={cn(
                    "w-5 h-5",
                    isActive ? "brightness-0 invert" : "opacity-70 group-hover:opacity-100"
                  )} 
                />
                <span className="font-medium text-sm [font-family:'Poppins',Helvetica]">
                  {item.title}
                </span>
              </a>
            </Link>
          );
        })}
      </nav>

      <div className="p-6 mt-auto border-t border-[#edf1f3]">
        <button className="flex items-center gap-3 px-4 py-3 w-full text-[#7a838e] hover:text-[#ef4343] transition-colors group">
          <img 
            src="/figmaAssets/item---link.svg" 
            alt="Logout" 
            className="w-5 h-5 opacity-70 group-hover:opacity-100" 
          />
          <span className="font-medium text-sm [font-family:'Poppins',Helvetica]">Logout</span>
        </button>
      </div>
    </aside>
  );
}
