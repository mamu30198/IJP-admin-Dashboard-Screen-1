import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell, Settings, Users, TrendingUp, Eye, DollarSign, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  BarChart, 
  Bar, 
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
    title: "Total Impressions", 
    value: "892",
    icon: Users,
    iconBg: "bg-[#e8f5e9]",
    iconColor: "text-[#62a230]"
  },
  { 
    title: "CTR", 
    value: "3.2%",
    icon: TrendingUp,
    iconBg: "bg-[#fff3e0]",
    iconColor: "text-[#f59f00]"
  },
  { 
    title: "Total Reach", 
    value: "45.8M",
    icon: Eye,
    iconBg: "bg-[#e3f2fd]",
    iconColor: "text-[#1976d2]"
  },
  { 
    title: "Total Revenue", 
    value: "$168,450",
    icon: DollarSign,
    iconBg: "bg-[#e8f5e9]",
    iconColor: "text-[#62a230]"
  },
];

const adSpendData = [
  { category: "Automotive", spend: 120000, color: "#62a230" },
  { category: "Fashion", spend: 95000, color: "#7cb342" },
  { category: "Electronics", spend: 85000, color: "#8bc34a" },
  { category: "Real Estate", spend: 70000, color: "#9ccc65" },
  { category: "Food & Dining", spend: 55000, color: "#aed581" },
  { category: "Health & Fitness", spend: 45000, color: "#c5e1a5" },
];

const ctrData = [
  { month: "Jan", ctr: 2.1 },
  { month: "Feb", ctr: 2.4 },
  { month: "Mar", ctr: 2.2 },
  { month: "Apr", ctr: 2.8 },
  { month: "May", ctr: 3.1 },
  { month: "Jun", ctr: 2.9 },
  { month: "Jul", ctr: 3.4 },
  { month: "Aug", ctr: 3.2 },
  { month: "Sep", ctr: 3.5 },
  { month: "Oct", ctr: 3.8 },
];

interface AdOperation {
  id: number;
  name: string;
  category: string;
  impressions: string;
  clicks: string;
  ctr: string;
  spend: string;
  revenue: string;
  status: "Active" | "Paused" | "Completed";
}

const topAdOperations: AdOperation[] = [
  { id: 1, name: "Black Friday Sale", category: "Fashion", impressions: "2.5M", clicks: "125K", ctr: "5.0%", spend: "$12,500", revenue: "$45,000", status: "Active" },
  { id: 2, name: "Summer Collection", category: "Fashion", impressions: "1.8M", clicks: "72K", ctr: "4.0%", spend: "$8,500", revenue: "$28,000", status: "Active" },
  { id: 3, name: "Auto Parts Promo", category: "Automotive", impressions: "1.2M", clicks: "48K", ctr: "4.0%", spend: "$6,200", revenue: "$18,500", status: "Paused" },
  { id: 4, name: "Tech Deals Week", category: "Electronics", impressions: "950K", clicks: "38K", ctr: "4.0%", spend: "$4,800", revenue: "$15,200", status: "Completed" },
  { id: 5, name: "Fitness Challenge", category: "Health & Fitness", impressions: "780K", clicks: "31.2K", ctr: "4.0%", spend: "$3,900", revenue: "$12,800", status: "Active" },
  { id: 6, name: "Restaurant Week", category: "Food & Dining", impressions: "$11,200", clicks: "22.4K", ctr: "4.0%", spend: "$2,800", revenue: "$9,500", status: "Active" },
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
              <CardContent className="p-5 flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-[11px] font-medium text-[#7b848f] uppercase tracking-wider">{stat.title}</p>
                  <p className="text-2xl font-bold text-[#222f36]">{stat.value}</p>
                </div>
                <div className={`w-12 h-12 rounded-xl ${stat.iconBg} flex items-center justify-center`}>
                  <stat.icon className={`w-6 h-6 ${stat.iconColor}`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="bg-white rounded-[15px] border-0 shadow-[0px_1px_2px_#0000000d]">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-semibold text-[#222f36]">Ad Spend by Category</CardTitle>
              <p className="text-xs text-[#7b848f]">Budget allocation across categories</p>
            </CardHeader>
            <CardContent className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={adSpendData} layout="vertical" margin={{ left: 20, right: 30 }}>
                  <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#edf1f3" />
                  <XAxis 
                    type="number" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#7b848f', fontSize: 10 }}
                    tickFormatter={(value) => `$${(value / 1000).toFixed(0)}K`}
                  />
                  <YAxis 
                    dataKey="category" 
                    type="category" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#222f36', fontSize: 11 }} 
                    width={100}
                  />
                  <Tooltip 
                    formatter={(value: number) => [`$${value.toLocaleString()}`, 'Spend']}
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}
                  />
                  <Bar 
                    dataKey="spend" 
                    fill="#62a230" 
                    radius={[0, 4, 4, 0]} 
                    barSize={20}
                  />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

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
                      <stop offset="5%" stopColor="#62a230" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#62a230" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#edf1f3" />
                  <XAxis 
                    dataKey="month" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#7b848f', fontSize: 10 }}
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
                    stroke="#62a230" 
                    strokeWidth={2}
                    fillOpacity={1} 
                    fill="url(#colorCtr)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-white rounded-[15px] border-0 shadow-[0px_1px_2px_#0000000d]">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div>
              <CardTitle className="text-lg font-semibold text-[#222f36]">Top Ad Operations</CardTitle>
              <p className="text-xs text-[#7b848f]">Recent Campaign performance</p>
            </div>
            <Button variant="link" className="text-[#62a230] text-sm p-0 h-auto">
              View all Operators
            </Button>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-[#f8fafc] border-b">
                    <TableHead className="p-4 text-xs font-medium text-[#7b848f] uppercase">Campaign Name</TableHead>
                    <TableHead className="p-4 text-xs font-medium text-[#7b848f] uppercase">Category</TableHead>
                    <TableHead className="p-4 text-xs font-medium text-[#7b848f] uppercase">Impressions</TableHead>
                    <TableHead className="p-4 text-xs font-medium text-[#7b848f] uppercase">Clicks</TableHead>
                    <TableHead className="p-4 text-xs font-medium text-[#7b848f] uppercase">CTR</TableHead>
                    <TableHead className="p-4 text-xs font-medium text-[#7b848f] uppercase">Spend</TableHead>
                    <TableHead className="p-4 text-xs font-medium text-[#7b848f] uppercase">Revenue</TableHead>
                    <TableHead className="p-4 text-xs font-medium text-[#7b848f] uppercase">Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {topAdOperations.map((operation) => (
                    <TableRow key={operation.id} className="hover:bg-[#f8fafc] transition-colors bg-white">
                      <TableCell className="p-4 text-sm font-medium text-[#222f36]">{operation.name}</TableCell>
                      <TableCell className="p-4 text-sm text-[#7b848f]">{operation.category}</TableCell>
                      <TableCell className="p-4 text-sm text-[#7b848f]">{operation.impressions}</TableCell>
                      <TableCell className="p-4 text-sm text-[#7b848f]">{operation.clicks}</TableCell>
                      <TableCell className="p-4 text-sm font-medium text-[#62a230]">{operation.ctr}</TableCell>
                      <TableCell className="p-4 text-sm text-[#7b848f]">{operation.spend}</TableCell>
                      <TableCell className="p-4 text-sm font-medium text-[#222f36]">{operation.revenue}</TableCell>
                      <TableCell className="p-4">
                        <Badge variant="outline" className={`rounded-full ${
                          operation.status === 'Active' ? 'bg-[#e8f5e9] text-[#2e7d32] border-[#2e7d32]/20' : 
                          operation.status === 'Paused' ? 'bg-[#fff3e0] text-[#f59f00] border-[#f59f00]/20' : 
                          'bg-[#f5f5f5] text-[#757575] border-[#757575]/20'
                        }`}>
                          {operation.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            <div className="p-4 border-t flex items-center justify-between bg-white">
              <p className="text-xs text-[#7b848f]">Showing 1 to 6 of 24 campaigns</p>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" className="w-8 h-8 rounded-lg">
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                {[1, 2, 3, 4].map((page) => (
                  <Button
                    key={page}
                    variant="ghost"
                    className={`w-8 h-8 rounded-lg p-0 text-xs ${
                      currentPage === page ? "bg-[#62a230] text-white hover:bg-[#62a230]/90" : ""
                    }`}
                    onClick={() => setCurrentPage(page)}
                  >
                    {page.toString().padStart(2, '0')}
                  </Button>
                ))}
                <Button variant="ghost" size="icon" className="w-8 h-8 rounded-lg">
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
