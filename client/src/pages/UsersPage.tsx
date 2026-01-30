import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { Search, Bell, Settings, MoreHorizontal, Filter, ChevronLeft, ChevronRight } from "lucide-react";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const stats = [
  { 
    title: "Total Users", 
    value: "1,234", 
    icon: "/figmaAssets/frame-1171275705.svg",
    bg: "bg-white" 
  },
  { 
    title: "Active Users", 
    value: "1,234", 
    icon: "/figmaAssets/frame-1171275704-2.svg",
    bg: "bg-white" 
  },
  { 
    title: "InActive Users", 
    value: "1,234", 
    icon: "/figmaAssets/frame-1171275704-3.svg",
    bg: "bg-white" 
  },
  { 
    title: "Total Vendors", 
    value: "1,234", 
    icon: "/figmaAssets/frame-1171275704-1.svg",
    bg: "bg-white" 
  },
  { 
    title: "Total User Reports", 
    value: "1,234", 
    icon: "/figmaAssets/frame-1171275704-4.svg",
    bg: "bg-white" 
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

const users = Array.from({ length: 10 }).map((_, i) => ({
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
      
      <main className="flex-1 p-6 overflow-x-hidden space-y-6">
        {/* Header */}
        <header className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-[#222f36]">Users</h1>
            <p className="text-sm text-[#7b848f]">Manage all users on the platform</p>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="bg-white rounded-lg shadow-sm">
              <Bell className="w-5 h-5 text-[#7b848f]" />
            </Button>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-white rounded-full shadow-sm">
              <Avatar className="w-7 h-7">
                <AvatarImage src="/figmaAssets/2-jpg.png" />
                <AvatarFallback>MJ</AvatarFallback>
              </Avatar>
              <span className="text-sm font-medium text-[#7b848f]">Mr. Jack</span>
            </div>
            <Button variant="ghost" size="icon" className="bg-white rounded-lg shadow-sm">
              <Settings className="w-5 h-5 text-[#7b848f]" />
            </Button>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {stats.map((stat, i) => (
            <Card key={i} className="border-0 shadow-[0px_1px_2px_#0000000d] rounded-[15px]">
              <CardContent className="p-5 flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-[11px] font-medium text-[#7b848f] uppercase tracking-wider">{stat.title}</p>
                  <p className="text-2xl font-bold text-[#222f36]">{stat.value}</p>
                </div>
                <div className="w-12 h-12 rounded-full flex items-center justify-center border border-[#edf1f3]">
                  <img src={stat.icon} alt={stat.title} className="w-6 h-6" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Alerts & Chart */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-4 space-y-4">
            <Card className="border-0 shadow-sm bg-[#fff5f5]">
              <CardContent className="p-4">
                <Badge variant="destructive" className="mb-2">VENDOR FRAUD DETECTION</Badge>
                <p className="text-sm font-medium text-[#222f36]">Suspicious receipt patterns detected across 14 vendors</p>
                <p className="text-xs text-[#7b848f] mt-1">9:20:00 AM</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-sm bg-[#fff9eb]">
              <CardContent className="p-4">
                <Badge className="mb-2 bg-[#f59f00]">VENDOR RISK</Badge>
                <p className="text-sm font-medium text-[#222f36]">Vendor 'Autolux Parts' risk score increased to 72/100</p>
                <p className="text-xs text-[#7b848f] mt-1">8:45:00 AM</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-sm bg-[#fff5f5]">
              <CardContent className="p-4">
                <Badge variant="destructive" className="mb-2">USER FRAUD DETECTION</Badge>
                <p className="text-sm font-medium text-[#222f36]">Suspicious receipt patterns detected across 14 Users</p>
                <p className="text-xs text-[#7b848f] mt-1">9:20:00 AM</p>
              </CardContent>
            </Card>
          </div>
          
          <Card className="lg:col-span-8 border-0 shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-lg font-semibold text-[#222f36]">Daily Active Users</CardTitle>
              <Badge variant="outline" className="text-[#7b848f] border-[#7b848f]">2 Oct to 18 Oct, 2025</Badge>
            </CardHeader>
            <CardContent className="h-[250px]">
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
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <div className="flex items-center gap-4 bg-white p-2 rounded-xl shadow-sm">
          <Button variant="ghost" className="bg-[#62a230] text-white hover:bg-[#62a230]/90">All User</Button>
          <Button variant="ghost" className="text-[#7b848f]">Only Users</Button>
          <Button variant="ghost" className="text-[#7b848f]">Vendors</Button>
          <Button variant="ghost" className="text-[#7b848f]">Suspended</Button>
          <Button variant="ghost" className="text-[#7b848f]">Blocked users</Button>
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#7b848f]" />
            <Input 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by name, mobile, or city..." 
              className="pl-10 h-10 bg-[#f8fafc] border-none rounded-lg"
            />
          </div>
        </div>

        {/* Users Table */}
        <Card className="border-0 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#f8fafc] border-b">
                  <th className="p-4 text-xs font-medium text-[#7b848f] uppercase">Name</th>
                  <th className="p-4 text-xs font-medium text-[#7b848f] uppercase">Mobile</th>
                  <th className="p-4 text-xs font-medium text-[#7b848f] uppercase">City</th>
                  <th className="p-4 text-xs font-medium text-[#7b848f] uppercase">Registration</th>
                  <th className="p-4 text-xs font-medium text-[#7b848f] uppercase">Activity</th>
                  <th className="p-4 text-xs font-medium text-[#7b848f] uppercase">Reports</th>
                  <th className="p-4 text-xs font-medium text-[#7b848f] uppercase">Status</th>
                  <th className="p-4 text-xs font-medium text-[#7b848f] uppercase">Profile Completion</th>
                  <th className="p-4 text-xs font-medium text-[#7b848f] uppercase"></th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {users.map((user) => (
                  <tr key={user.id} className="hover:bg-[#f8fafc] transition-colors">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <Avatar className="w-8 h-8">
                          <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.id}`} />
                          <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <span className="text-sm font-medium text-[#222f36]">{user.name}</span>
                      </div>
                    </td>
                    <td className="p-4 text-sm text-[#7b848f]">{user.mobile}</td>
                    <td className="p-4 text-sm text-[#7b848f]">{user.city}</td>
                    <td className="p-4 text-sm text-[#7b848f]">{user.registration}</td>
                    <td className="p-4">
                      <span className={`text-xs font-medium ${user.activity === 'High' ? 'text-[#62a230]' : user.activity === 'Medium' ? 'text-[#f59f00]' : 'text-[#7b848f]'}`}>
                        {user.activity}
                      </span>
                    </td>
                    <td className="p-4">
                      <span className={`text-xs ${user.reports !== 'None' ? 'text-red-500 font-medium' : 'text-[#7b848f]'}`}>
                        {user.reports}
                      </span>
                    </td>
                    <td className="p-4">
                      <Badge variant="outline" className={`rounded-full ${
                        user.status === 'Active' ? 'bg-[#e8f5e9] text-[#2e7d32] border-[#2e7d32]/20' : 
                        user.status === 'Inactive' ? 'bg-[#f5f5f5] text-[#757575] border-[#757575]/20' : 
                        'bg-[#ffebee] text-[#c62828] border-[#c62828]/20'
                      }`}>
                        {user.status}
                      </Badge>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-3 min-w-[120px]">
                        <Progress value={user.completion} className="h-1.5 flex-1" />
                        <span className="text-xs text-[#7b848f]">{user.completion}%</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <Button variant="ghost" size="icon" className="text-[#7b848f]">
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-4 border-t flex items-center justify-between">
            <p className="text-xs text-[#7b848f]">Showing 1 to 100 list in 1 page</p>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="w-8 h-8 rounded-lg"><ChevronLeft className="w-4 h-4" /></Button>
              <Button variant="ghost" className="w-8 h-8 rounded-lg p-0 text-xs">01</Button>
              <Button variant="ghost" className="w-8 h-8 rounded-lg p-0 text-xs bg-[#62a230] text-white">02</Button>
              <Button variant="ghost" className="w-8 h-8 rounded-lg p-0 text-xs">03</Button>
              <Button variant="ghost" className="w-8 h-8 rounded-lg p-0 text-xs">04</Button>
              <Button variant="ghost" className="w-8 h-8 rounded-lg p-0 text-xs">05</Button>
              <Button variant="ghost" size="icon" className="w-8 h-8 rounded-lg"><ChevronRight className="w-4 h-4" /></Button>
            </div>
          </div>
        </Card>
      </main>
    </div>
  );
}
