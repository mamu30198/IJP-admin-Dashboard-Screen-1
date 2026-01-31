import { useState, useEffect } from "react";
import { format } from "date-fns";
import { CalendarIcon, SearchIcon, Bell, Settings as SettingsIcon } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { 
  Area, 
  AreaChart, 
  CartesianGrid, 
  ResponsiveContainer, 
  Tooltip, 
  XAxis, 
  YAxis,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  Line,
  LineChart
} from "recharts";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { DateRange } from "react-day-picker";
import { useToast } from "@/hooks/use-toast";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const getActivityColor = (type: string) => {
  switch (type) {
    case "post": return "bg-[#10b5cb]";
    case "user": return "bg-[#62a230]";
    case "payment": return "bg-[#ffcc00]";
    case "vendor": return "bg-[#9c27b0]";
    case "report": return "bg-[#f44336]";
    default: return "bg-[#10b5cb]";
  }
};

const getTimeAgo = (date: string) => {
  const now = new Date();
  const past = new Date(date);
  const diffMs = now.getTime() - past.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  if (diffMins < 60) return `${diffMins} min ago`;
  const diffHours = Math.floor(diffMins / 60);
  if (diffHours < 24) return `${diffHours} hr ago`;
  return `${Math.floor(diffHours / 24)} days ago`;
};

const revenueData = [
  { name: "Subscriptions", value: 314000 },
  { name: "Ads Revenue", value: 168000 },
];

const regionData = [
  { name: "North America", value: 5500 },
  { name: "Europe", value: 4200 },
  { name: "Asia Pacific", value: 3800 },
  { name: "Latin America", value: 2500 },
  { name: "Middle East", value: 1800 },
  { name: "Africa", value: 1200 },
];

const userOverviewData = [
  { name: "Vendors", value: 14000, color: "#e3b40e" },
  { name: "Users", value: 102000, color: "#62a230" },
];

export const DashboardMainSection = (): JSX.Element => {
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(2025, 9, 2),
    to: new Date(2025, 9, 18),
  });

  const { data: stats } = useQuery({
    queryKey: ["/api/dashboard/stats"],
    queryFn: async () => {
      const res = await fetch("/api/dashboard/stats", { credentials: "include" });
      if (!res.ok) return null;
      return res.json();
    },
  });

  const { data: activities } = useQuery({
    queryKey: ["/api/dashboard/activities"],
    queryFn: async () => {
      const res = await fetch("/api/dashboard/activities", { credentials: "include" });
      if (!res.ok) return [];
      return res.json();
    },
  });

  const { data: salesDataApi } = useQuery({
    queryKey: ["/api/dashboard/sales"],
    queryFn: async () => {
      const res = await fetch("/api/dashboard/sales", { credentials: "include" });
      if (!res.ok) return [];
      return res.json();
    },
  });

  const { data: dauDataApi } = useQuery({
    queryKey: ["/api/dashboard/dau"],
    queryFn: async () => {
      const res = await fetch("/api/dashboard/dau", { credentials: "include" });
      if (!res.ok) return [];
      return res.json();
    },
  });

  const statsCards = [
    { title: "Total Users", value: stats?.totalUsers?.toLocaleString() || "15,234", icon: "/figmaAssets/frame-1171275705.svg" },
    { title: "Active Vendors", value: stats?.activeVendors?.toLocaleString() || "1,102", icon: "/figmaAssets/frame-1171275704-1.svg" },
    { title: "Monthly Revenue", value: `$${Number(stats?.monthlyRevenue || 48234).toLocaleString()}`, icon: "/figmaAssets/frame-1171275704.svg" },
    { title: "Moderation Tasks", value: stats?.moderationTasks?.toString() || "142", icon: "/figmaAssets/frame-1171275704-4.svg" },
    { title: "Fraud Alerts", value: stats?.fraudAlerts?.toString() || "28", icon: "/figmaAssets/frame-1171275704-2.svg" },
    { title: "System Performance", value: `${stats?.systemPerformance || 99.9}%`, icon: "/figmaAssets/frame-1171275704-3.svg" },
  ];

  const salesData = salesDataApi?.length > 0 
    ? salesDataApi.map((s: any) => ({ name: format(new Date(s.date), "d MMM"), value: Number(s.value) }))
    : [{ name: "2 Oct", value: 100 }, { name: "3 Oct", value: 120 }, { name: "4 Oct", value: 150 }, { name: "5 Oct", value: 130 }, { name: "6 Oct", value: 180 }, { name: "7 Oct", value: 160 }, { name: "8 Oct", value: 200 }, { name: "9 Oct", value: 190 }];

  const dauData = dauDataApi?.length > 0
    ? dauDataApi.map((d: any) => ({ name: format(new Date(d.date), "MMM d"), value: d.count }))
    : [{ name: "Dec 16", value: 120 }, { name: "Dec 18", value: 150 }, { name: "Dec 20", value: 140 }, { name: "Dec 22", value: 170 }, { name: "Dec 24", value: 160 }, { name: "Dec 26", value: 180 }, { name: "Dec 28", value: 175 }];

  const recentActivities = activities?.length > 0
    ? activities.map((a: any) => ({ title: a.title, description: a.description, time: getTimeAgo(a.createdAt), color: getActivityColor(a.type) }))
    : [{ title: "New post created", description: "John Doe created a new deal", time: "2 min ago", color: "bg-[#10b5cb]" }];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      toast({
        title: "Search initiated",
        description: `Searching for: ${searchQuery}`,
      });
    }
  };

  return (
    <div className="flex flex-col gap-6 w-full">
      <header className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 w-full">
        <div className="flex items-center gap-3.5">
          <h1 className="[font-family:'Poppins',Helvetica] font-semibold text-[#222f36] text-2xl tracking-[0] leading-[33.6px] whitespace-nowrap">
            Dashboard
          </h1>
          <div className="flex items-center gap-[13px]">
            <div className="w-px h-[19.5px] bg-[#7b848f] opacity-30" />
            <p className="[font-family:'Poppins',Helvetica] font-normal text-[#7b848f] text-xs tracking-[0] leading-[18px]">
              Hello , 👋 Jack Welcome to Ijustpaid dashboard
            </p>
          </div>
        </div>

        <div className="flex items-center gap-[19px]">
          <form onSubmit={handleSearch} className="relative w-full lg:w-[388px]">
            <SearchIcon className="absolute left-[17px] top-1/2 -translate-y-1/2 w-[15.61px] h-[15.61px] text-[#7b848f] opacity-50" />
            <Input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search For Anything"
              className="h-[38px] pl-[45px] pr-[17px] bg-white rounded-[19px] border-[0.6px] border-[#7a838e] [font-family:'Poppins',Helvetica] font-normal text-[#222f36] text-sm focus-visible:ring-emerald-500"
            />
          </form>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="w-[42px] h-[34px] flex items-center justify-center bg-white rounded-lg shadow-sm hover:bg-gray-50 transition-colors relative">
                <Bell className="w-5 h-5 text-[#7b848f]" />
                <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-64">
              <DropdownMenuLabel>Notifications</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer">
                <div className="flex flex-col gap-1">
                  <span className="font-medium text-sm">New post created</span>
                  <span className="text-xs text-muted-foreground">John Doe created a new deal</span>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <div className="flex flex-col gap-1">
                  <span className="font-medium text-sm">Payment received</span>
                  <span className="text-xs text-muted-foreground">Successful subscription update</span>
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-white rounded-full shadow-sm cursor-pointer hover:bg-gray-50 transition-colors">
                <Avatar className="w-7 h-7 border border-gray-100">
                  <AvatarImage src="/figmaAssets/2-jpg.png" />
                  <AvatarFallback>MJ</AvatarFallback>
                </Avatar>
                <span className="[font-family:'Poppins',Helvetica] font-medium text-[#7b848f] text-[13.6px] tracking-[0] leading-[13.6px] whitespace-nowrap">
                  Mr. Jack
                </span>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer" onClick={() => window.location.href = '/profile'}>
                Profile Settings
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer" onClick={() => window.location.href = '/billing'}>
                Billing
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer text-red-600 focus:text-red-600" onClick={() => window.location.href = '/auth'}>
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <button 
            onClick={() => window.location.href = '/settings'}
            className="w-[42px] h-[34px] flex items-center justify-center bg-white rounded-lg shadow-sm hover:bg-gray-50 transition-colors"
          >
            <SettingsIcon className="w-5 h-5 text-[#7b848f]" />
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-2.5 w-full">
        {statsCards.map((stat, index) => (
          <Card
            key={index}
            className="h-auto bg-white rounded-[15px] shadow-[0px_1px_2px_#0000000d] border-0"
          >
            <CardContent className="p-[22px_24px] flex items-center justify-between gap-4">
              <div className="flex flex-col gap-[5.36px]">
                <p className="[font-family:'Poppins',Helvetica] font-medium text-[#7b848f] text-[11.3px] tracking-[0] leading-[normal]">
                  {stat.title}
                </p>
                <p className="[font-family:'Poppins',Helvetica] font-semibold text-[#222f36] text-[22.6px] tracking-[0] leading-[normal]">
                  {stat.value}
                </p>
              </div>
              <img
                className="w-[48px] h-[48px]"
                alt={stat.title}
                src={stat.icon}
              />
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-[1fr_350px_400px] gap-6 w-full">
        <Card className="bg-white rounded-[10px] shadow-[0px_1px_3px_#00000005,0px_6px_10px_#b1b1b114] border-0">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="[font-family:'Poppins',Helvetica] font-semibold text-[#222f36] text-xl tracking-[-0.20px] leading-7">
              Sales Revenue
            </CardTitle>
            <Popover>
              <PopoverTrigger asChild>
                <div className="flex items-center gap-[5px] px-3 py-2 bg-white rounded-[5px] border-[0.5px] border-[#7a838e] cursor-pointer hover:bg-gray-50 transition-colors">
                  <CalendarIcon className="w-4 h-4 text-[#7b848f]" />
                  <span className="[font-family:'Poppins',Helvetica] font-normal text-[#7b848f] text-xs">
                    {date?.from ? (
                      date.to ? (
                        <>
                          {format(date.from, "d MMM")} to {format(date.to, "d MMM , yyyy")}
                        </>
                      ) : (
                        format(date.from, "d MMM , yyyy")
                      )
                    ) : (
                      <span>Pick a date</span>
                    )}
                  </span>
                </div>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="end">
                <Calendar
                  initialFocus
                  mode="range"
                  defaultMonth={date?.from}
                  selected={date}
                  onSelect={setDate}
                  numberOfMonths={2}
                />
              </PopoverContent>
            </Popover>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={salesData}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#62a230" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#62a230" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#edf1f3" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#7b848f', fontSize: 10}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#7b848f', fontSize: 10}} />
                <Tooltip />
                <Area type="monotone" dataKey="value" stroke="#62a230" strokeWidth={2} fillOpacity={1} fill="url(#colorValue)" />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="bg-white rounded-[10px] border border-[#efefef] shadow-[0px_1px_3px_#00000005,0px_6px_10px_#b1b1b114]">
          <CardHeader>
            <CardTitle className="[font-family:'Poppins',Helvetica] font-semibold text-[#222f36] text-xl">
              Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentActivities.map((activity: { title: string; description: string; time: string; color: string }, index: number) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-[#f8fafc] rounded-xl group hover:bg-[#f1f5f9] transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className={`w-2.5 h-2.5 ${activity.color} rounded-full`} />
                  <div className="flex flex-col">
                    <span className="font-medium text-[#222f36] text-sm">
                      {activity.title}
                    </span>
                    <span className="text-[#7b848f] text-[10px]">
                      {activity.description}
                    </span>
                  </div>
                </div>
                <span className="text-[#7b848f] text-[10px] whitespace-nowrap">
                  {activity.time}
                </span>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="bg-white rounded-[10px] border border-[#efefef] shadow-[0px_1px_3px_#00000005,0px_6px_10px_#b1b1b114]">
          <CardHeader>
            <CardTitle className="[font-family:'Poppins',Helvetica] font-semibold text-[#222f36] text-xl">
              User Overview
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <div className="h-[200px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={userOverviewData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {userOverviewData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-2 gap-8 mt-4 w-full px-4">
              {userOverviewData.map((item) => (
                <div key={item.name} className="flex flex-col items-center gap-1">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{backgroundColor: item.color}} />
                    <span className="text-2xl font-bold text-[#222f36]">{item.value / 1000}k</span>
                  </div>
                  <span className="text-xs text-[#7b848f] font-medium">{item.name}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
        <Card className="bg-white rounded-xl border border-[#e0ebe5]">
          <CardHeader>
            <CardTitle className="[font-family:'Poppins',Helvetica] font-semibold text-[#222f36] text-lg">
              Daily Active Users
            </CardTitle>
            <p className="text-sm text-[#8c8c8c]">Last 14 days trend</p>
          </CardHeader>
          <CardContent className="h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={dauData}>
                <defs>
                  <linearGradient id="colorDau" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#62a230" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#62a230" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#edf1f3" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#666', fontSize: 10}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#666', fontSize: 10}} tickFormatter={(value) => `${value}k`} />
                <Tooltip />
                <Area type="monotone" dataKey="value" stroke="#62a230" strokeWidth={2} fillOpacity={1} fill="url(#colorDau)" />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="bg-white rounded-xl border border-[#e0ebe5]">
          <CardHeader>
            <CardTitle className="[font-family:'Poppins',Helvetica] font-semibold text-[#222f36] text-lg">
              Revenue Sources
            </CardTitle>
            <p className="text-sm text-[#8c8c8c]">Monthly breakdown</p>
          </CardHeader>
          <CardContent className="h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={revenueData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#edf1f3" />
                <XAxis type="number" axisLine={false} tickLine={false} tick={{fill: '#666', fontSize: 10}} />
                <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{fill: '#666', fontSize: 10}} width={80} />
                <Tooltip />
                <Bar dataKey="value" fill="#21c45d" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="bg-white rounded-xl border border-[#e0ebe5]">
          <CardHeader>
            <CardTitle className="[font-family:'Poppins',Helvetica] font-semibold text-[#222f36] text-lg">
              Reports by Region
            </CardTitle>
            <p className="text-sm text-[#8c8c8c]">Moderation workload</p>
          </CardHeader>
          <CardContent className="h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={regionData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#edf1f3" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#666', fontSize: 9}} angle={-15} textAnchor="end" />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#666', fontSize: 10}} />
                <Tooltip />
                <Bar dataKey="value" fill="#f59f0a" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
