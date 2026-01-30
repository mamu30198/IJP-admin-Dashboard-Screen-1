import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell, Settings, Search } from "lucide-react";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { StatCard } from "@/components/StatCard";
import { UserTable, User } from "@/components/UserTable";

const stats = [
  { 
    title: "Total Users", 
    value: "1,234", 
    icon: "/figmaAssets/frame-1171275705.svg"
  },
  { 
    title: "Active Users", 
    value: "1,234", 
    icon: "/figmaAssets/frame-1171275704-2.svg"
  },
  { 
    title: "InActive Users", 
    value: "1,234", 
    icon: "/figmaAssets/frame-1171275704-3.svg"
  },
  { 
    title: "Total Vendors", 
    value: "1,234", 
    icon: "/figmaAssets/frame-1171275704-1.svg"
  },
  { 
    title: "Total User Reports", 
    value: "1,234", 
    icon: "/figmaAssets/frame-1171275704-4.svg"
  },
];

const chartData = [
  { name: "2 Oct", value: 100 },
  { name: "3 Oct", value: 120 },
  { name: "4 Oct", value: 150 },
  { name: "5 Oct", value: 130 },
  { name: "6 Oct", value: 180 },
  { name: "7 Oct", value: 160 },
  { name: "8 Oct", value: 200 },
  { name: "9 Oct", value: 190 },
];

const users: User[] = Array.from({ length: 10 }).map((_, i) => ({
  id: i,
  name: "John Doe",
  mobile: "+10895XXXX550",
  city: "New York, USA, 140050",
  registration: "12-17 oct, 2025",
  activity: i % 3 === 0 ? "High" : i % 3 === 1 ? "Medium" : "Low",
  reports: i % 4 === 0 ? "2 reports" : "None",
  status: i % 3 === 0 ? "Active" : i % 3 === 1 ? "Inactive" : "Suspended",
  completion: Math.floor(Math.random() * 100),
}));

export default function UsersPage() {
  const [search, setSearch] = useState("");

  return (
    <div className="flex bg-[#f5f6fa] w-full min-h-screen">
      <Sidebar className="w-[280px] flex-shrink-0 sticky top-0" />
      
      <main className="flex-1 p-4 md:p-6 overflow-x-hidden space-y-6">
        {/* Header */}
        <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-xl md:text-2xl font-semibold text-[#222f36]">Users</h1>
            <p className="text-xs md:text-sm text-[#7b848f]">Manage all users on the platform</p>
          </div>
          <div className="flex items-center gap-2 md:gap-4 w-full sm:w-auto justify-end">
            <Button variant="ghost" size="icon" className="bg-white rounded-lg shadow-sm w-9 h-9 md:w-10 md:h-10">
              <Bell className="w-4 h-4 md:w-5 md:h-5 text-[#7b848f]" />
            </Button>
            <div className="flex items-center gap-2 px-2 md:px-3 py-1 md:py-1.5 bg-white rounded-full shadow-sm">
              <Avatar className="w-6 h-6 md:w-7 md:h-7">
                <AvatarImage src="/figmaAssets/2-jpg.png" />
                <AvatarFallback>MJ</AvatarFallback>
              </Avatar>
              <span className="text-xs md:text-sm font-medium text-[#7b848f] whitespace-nowrap">Mr. Jack</span>
            </div>
            <Button variant="ghost" size="icon" className="bg-white rounded-lg shadow-sm w-9 h-9 md:w-10 md:h-10">
              <Settings className="w-4 h-4 md:w-5 md:h-5 text-[#7b848f]" />
            </Button>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {stats.map((stat, i) => (
            <StatCard key={i} {...stat} />
          ))}
        </div>

        {/* Alerts & Chart */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-[#fff5f5] rounded-[15px] p-4 border-0 shadow-[0px_1px_2px_#0000000d]">
              <Badge variant="destructive" className="mb-2 uppercase text-[10px]">VENDOR FRAUD DETECTION</Badge>
              <p className="text-sm font-medium text-[#222f36]">Suspicious receipt patterns detected across 14 vendors</p>
              <p className="text-xs text-[#7b848f] mt-1">9:20:00 AM</p>
            </div>
            <div className="bg-[#fff9eb] rounded-[15px] p-4 border-0 shadow-[0px_1px_2px_#0000000d]">
              <Badge className="mb-2 bg-[#f59f00] uppercase text-[10px]">VENDOR RISK</Badge>
              <p className="text-sm font-medium text-[#222f36]">Vendor 'Autolux Parts' risk score increased to 72/100</p>
              <p className="text-xs text-[#7b848f] mt-1">8:45:00 AM</p>
            </div>
            <div className="bg-[#fff5f5] rounded-[15px] p-4 border-0 shadow-[0px_1px_2px_#0000000d]">
              <Badge variant="destructive" className="mb-2 uppercase text-[10px]">USER FRAUD DETECTION</Badge>
              <p className="text-sm font-medium text-[#222f36]">Suspicious receipt patterns detected across 14 Users</p>
              <p className="text-xs text-[#7b848f] mt-1">9:20:00 AM</p>
            </div>
          </div>
          
          <div className="lg:col-span-8 bg-white border-0 shadow-[0px_1px_2px_#0000000d] rounded-[15px] p-6">
            <div className="flex flex-row items-center justify-between pb-4">
              <h3 className="text-lg font-semibold text-[#222f36]">Daily Active Users</h3>
              <Badge variant="outline" className="text-[#7b848f] border-[#7b848f] text-[10px] uppercase">2 Oct to 18 Oct, 2025</Badge>
            </div>
            <div className="h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData}>
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
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col xl:flex-row xl:items-center gap-4 bg-white p-3 rounded-xl shadow-sm">
          <div className="flex flex-wrap items-center gap-2">
            <Button variant="ghost" className="bg-[#62a230] text-white hover:bg-[#62a230]/90 px-3 py-1 h-9 text-sm">All User</Button>
            <Button variant="ghost" className="text-[#7b848f] px-3 py-1 h-9 text-sm">Only Users</Button>
            <Button variant="ghost" className="text-[#7b848f] px-3 py-1 h-9 text-sm">Vendors</Button>
            <Button variant="ghost" className="text-[#7b848f] px-3 py-1 h-9 text-sm">Suspended</Button>
            <Button variant="ghost" className="text-[#7b848f] px-3 py-1 h-9 text-sm">Blocked users</Button>
          </div>
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#7b848f]" />
            <Input 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by name, mobile, or city..." 
              className="pl-10 h-10 bg-[#f8fafc] border-none rounded-lg w-full"
            />
          </div>
        </div>

        <UserTable users={users} />
      </main>
    </div>
  );
}
