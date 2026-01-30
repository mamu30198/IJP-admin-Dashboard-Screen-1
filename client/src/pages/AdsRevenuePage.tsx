import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell, Settings, Search, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area
} from "recharts";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const stats = [
  { 
    title: "Active Campaigns", 
    value: "892",
    change: "+12.5% vs last month",
    icon: "/figmaAssets/active-campaigns.png",
    iconBg: "bg-[#e8f5e9]",
  },
  { 
    title: "Average CTR", 
    value: "3.2%",
    change: "+0.8% vs last month",
    icon: "/figmaAssets/avg-ctr.png",
    iconBg: "bg-[#e3f2fd]",
  },
  { 
    title: "Total Impressions", 
    value: "45.6M",
    change: "+15.2% vs last month",
    icon: "/figmaAssets/total-impressions.png",
    iconBg: "bg-[#fff3e0]",
  },
  { 
    title: "Revenue (AD's)", 
    value: "$168,450",
    change: "+21.4% vs last month",
    icon: "/figmaAssets/revenue-ads.png",
    iconBg: "bg-[#f3e5f5]",
  },
];

const ctrData = [
  { category: "20-May", ctr: 38 },
  { category: "21-May", ctr: 32 },
  { category: "22-May", ctr: 36 },
  { category: "23-May", ctr: 30 },
  { category: "24-May", ctr: 42 },
  { category: "25-May", ctr: 35 },
  { category: "26-May", ctr: 28 },
];

interface AdVendor {
  id: number;
  vendor: string;
  adSpend: string;
  impressions: string;
  ctr: string;
  performance: string;
  status: "Active" | "Paused" | "Completed";
}

const topAdSpenders: AdVendor[] = [
  { id: 1, vendor: "Google Ads", adSpend: "$45,200", impressions: "2.5M", ctr: "5.0%", performance: "High", status: "Active" },
  { id: 2, vendor: "Facebook Ads", adSpend: "$38,500", impressions: "1.8M", ctr: "4.2%", performance: "Medium", status: "Active" },
  { id: 3, vendor: "LinkedIn Ads", adSpend: "$22,100", impressions: "1.2M", ctr: "3.8%", performance: "High", status: "Active" },
  { id: 4, vendor: "Twitter Ads", adSpend: "$15,400", impressions: "950K", ctr: "3.2%", performance: "Low", status: "Paused" },
  { id: 5, vendor: "TikTok Ads", adSpend: "$12,800", impressions: "780K", ctr: "4.5%", performance: "High", status: "Active" },
  { id: 6, vendor: "Snapchat Ads", adSpend: "$8,500", impressions: "620K", ctr: "3.5%", performance: "Medium", status: "Completed" },
];

export default function AdsRevenuePage() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="flex bg-[#f5f6fa] w-full min-h-screen">
      <Sidebar className="w-[280px] flex-shrink-0 sticky top-0" activeModule="Ads & Revenue" />
      
      <main className="flex-1 p-4 md:p-6 overflow-x-hidden space-y-6">
        <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-xl md:text-2xl font-semibold text-[#222f36]">Ads & Revenue</h1>
            <p className="text-xs md:text-sm text-[#7b848f]">Track all paid promotions and revenue streams</p>
          </div>
          <div className="flex items-center gap-2 md:gap-4 w-full sm:w-auto justify-end">
            <div className="relative flex-1 sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#7b848f]" />
              <Input 
                placeholder="Search for anything..." 
                className="pl-10 h-10 bg-white border-0 shadow-sm rounded-full text-sm"
              />
            </div>
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <Card key={i} className="border-0 shadow-[0px_1px_2px_#0000000d] rounded-[15px] bg-white">
              <CardContent className="p-5 flex items-start justify-between">
                <div className="space-y-1">
                  <div className={`w-8 h-8 rounded-lg ${stat.iconBg} flex items-center justify-center mb-3`}>
                    <img src={stat.icon} alt="" className="w-4 h-4" />
                  </div>
                  <p className="text-2xl font-bold text-[#222f36]">{stat.value}</p>
                  <p className="text-[12px] font-medium text-[#7b848f]">{stat.title}</p>
                  <p className="text-[10px] text-[#62a230] font-medium">{stat.change}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-white rounded-[15px] border-0 shadow-[0px_1px_2px_#0000000d]">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-semibold text-[#222f36]">CTR by Category</CardTitle>
            <p className="text-xs text-[#7b848f]">Click-through rate trends</p>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={ctrData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorCtr" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={true} horizontal={false} stroke="#edf1f3" />
                <XAxis 
                  dataKey="category" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#7b848f', fontSize: 10 }}
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#7b848f', fontSize: 10 }}
                  tickFormatter={(value) => `${value}%`}
                />
                <Tooltip 
                  formatter={(value: number) => [`${value}%`, 'CTR']}
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="ctr" 
                  stroke="#0ea5e9" 
                  strokeWidth={2}
                  fillOpacity={1} 
                  fill="url(#colorCtr)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="bg-white rounded-[15px] border-0 shadow-[0px_1px_2px_#0000000d]">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div>
              <CardTitle className="text-lg font-semibold text-[#222f36]">Top Ad Spenders</CardTitle>
              <p className="text-xs text-[#7b848f]">Vendors with highest advertising spend</p>
            </div>
            <Button variant="outline" className="text-[#222f36] text-xs font-semibold bg-[#e8f5e9] border-0 rounded-lg hover:bg-[#e8f5e9]/80 h-9 px-4">
              View All Vendors
            </Button>
          </CardHeader>
          <CardContent className="px-0">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-[#f5f6fa] border-0">
                    <TableHead className="py-3 px-6 text-xs font-medium text-[#7b848f]">Vendor</TableHead>
                    <TableHead className="py-3 px-6 text-xs font-medium text-[#7b848f]">Ad Spend</TableHead>
                    <TableHead className="py-3 px-6 text-xs font-medium text-[#7b848f]">Impressions</TableHead>
                    <TableHead className="py-3 px-6 text-xs font-medium text-[#7b848f]">CTR</TableHead>
                    <TableHead className="py-3 px-6 text-xs font-medium text-[#7b848f]">Performance</TableHead>
                    <TableHead className="py-3 px-6 text-xs font-medium text-[#7b848f]">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {topAdSpenders.map((vendor) => (
                    <TableRow key={vendor.id} className="border-b border-[#f5f6fa] hover:bg-gray-50 transition-colors">
                      <TableCell className="py-4 px-6 text-sm font-medium text-[#222f36]">{vendor.vendor}</TableCell>
                      <TableCell className="py-4 px-6 text-sm text-[#7b848f]">{vendor.adSpend}</TableCell>
                      <TableCell className="py-4 px-6 text-sm text-[#7b848f]">{vendor.impressions}</TableCell>
                      <TableCell className="py-4 px-6 text-sm text-[#7b848f]">{vendor.ctr}</TableCell>
                      <TableCell className="py-4 px-6">
                        <span className={`text-sm font-medium ${
                          vendor.performance === 'High' ? 'text-[#62a230]' : 
                          vendor.performance === 'Medium' ? 'text-[#f59f00]' : 
                          'text-red-500'
                        }`}>
                          {vendor.performance}
                        </span>
                      </TableCell>
                      <TableCell className="py-4 px-6">
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          <Settings className="w-4 h-4 text-[#7b848f]" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            <div className="px-6 py-4 flex items-center justify-between">
              <p className="text-xs text-[#7b848f]">Showing 1 to 6 of 24 vendors</p>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" className="w-8 h-8 rounded-lg border border-gray-100">
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                {[1, 2, 3, 4].map((page) => (
                  <Button
                    key={page}
                    variant="ghost"
                    className={`w-8 h-8 rounded-lg p-0 text-xs font-medium ${
                      currentPage === page ? "bg-[#62a230] text-white hover:bg-[#62a230]/90 shadow-sm" : "text-[#7b848f]"
                    }`}
                    onClick={() => setCurrentPage(page)}
                  >
                    {page.toString().padStart(2, '0')}
                  </Button>
                ))}
                <Button variant="ghost" size="icon" className="w-8 h-8 rounded-lg border border-gray-100">
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
