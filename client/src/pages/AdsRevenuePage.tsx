import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell, Settings, Search, ChevronLeft, ChevronRight, Share2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar
} from "recharts";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";

const stats = [
  { 
    title: "Active Campaigns", 
    value: "892",
    change: "of 1245 total",
    icon: "/figmaAssets/active-campaigns.png",
    iconBg: "bg-[#e8f5e9]",
    isProgress: false
  },
  { 
    title: "Average CTR", 
    value: "3.2%",
    change: "+0.3%",
    icon: "/figmaAssets/avg-ctr.png",
    iconBg: "bg-[#e3f2fd]",
    isTrend: true
  },
  { 
    title: "Total Impressions", 
    value: "45.6M",
    change: "",
    icon: "/figmaAssets/total-impressions.png",
    iconBg: "bg-[#fff3e0]",
  },
  { 
    title: "Revenue MTD", 
    value: "$168,450",
    change: "+12%",
    icon: "/figmaAssets/revenue-ads.png",
    iconBg: "bg-[#f3e5f5]",
    isTrend: true
  },
];

const adSpendData = [
  { category: "Electronics", spend: 42000 },
  { category: "Fashion", spend: 38000 },
  { category: "Automotive", spend: 28000 },
  { category: "Home & Garden", spend: 22000 },
  { category: "Beauty", spend: 18000 },
  { category: "Sports", spend: 12000 },
  { category: "Food & Beverage", spend: 8000 },
];

const ctrData = [
  { category: "Electronics", ctr: 3.8 },
  { category: "Fashion", ctr: 3.2 },
  { category: "Automotive", ctr: 3.5 },
  { category: "Home & Garden", ctr: 3.0 },
  { category: "Beauty", ctr: 4.2 },
  { category: "Sports", ctr: 3.4 },
  { category: "Food & Beverage", ctr: 2.8 },
];

interface AdVendor {
  id: number;
  vendor: string;
  adSpend: string;
  impressions: string;
  ctr: string;
  performanceValue: number;
  performanceLabel: string;
}

const topAdSpenders: AdVendor[] = [
  { id: 1, vendor: "BeautyBliss Co", adSpend: "$32,100", impressions: "4.2M", ctr: "4.2%", performanceValue: 80, performanceLabel: "Above avg" },
  { id: 2, vendor: "FashionHub Elite", adSpend: "$24,500", impressions: "3.1M", ctr: "2.8%", performanceValue: 60, performanceLabel: "Average" },
  { id: 3, vendor: "AutoLux Parts", adSpend: "$12,400", impressions: "1.8M", ctr: "3.6%", performanceValue: 80, performanceLabel: "Above avg" },
  { id: 4, vendor: "PetParadise Shop", adSpend: "$14,200", impressions: "1.9M", ctr: "3.1%", performanceValue: 60, performanceLabel: "Average" },
  { id: 5, vendor: "SportGear Pro", adSpend: "$11,200", impressions: "1.5M", ctr: "3.4%", performanceValue: 60, performanceLabel: "Average" },
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
            <p className="text-xs md:text-sm text-[#7b848f]">Advertising performance and revenue analytics</p>
          </div>
          <div className="flex items-center gap-2 md:gap-4 w-full sm:w-auto justify-end">
            <div className="relative flex-1 sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#7b848f]" />
              <Input 
                placeholder="Search For Anything" 
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
              <CardContent className="p-5 flex items-start justify-between h-full">
                <div className="flex flex-col h-full justify-between gap-2">
                  <div className={`w-8 h-8 rounded-lg ${stat.iconBg} flex items-center justify-center`}>
                    <img src={stat.icon} alt="" className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-[#222f36]">{stat.value}</p>
                    <p className="text-[12px] font-medium text-[#7b848f]">{stat.title}</p>
                  </div>
                  {stat.change && (
                    <p className={`text-[10px] font-medium flex items-center gap-1 ${stat.isTrend ? 'text-[#0ea5e9] bg-[#e3f2fd] px-1.5 py-0.5 rounded-full w-fit ml-auto absolute top-5 right-5' : 'text-[#7b848f]'}`}>
                      {stat.isTrend && <span className="text-[8px]">📈</span>}
                      {stat.change}
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="bg-white rounded-[15px] border-0 shadow-[0px_1px_2px_#0000000d]">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <div>
                <CardTitle className="text-lg font-semibold text-[#222f36]">Ad Spend by Category</CardTitle>
                <p className="text-xs text-[#7b848f]">Monthly breakdown</p>
              </div>
              <Button variant="ghost" size="sm" className="text-[#7b848f] text-[10px] gap-1 px-0 h-auto">
                Export <Share2 className="w-3 h-3" />
              </Button>
            </CardHeader>
            <CardContent className="h-[350px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={adSpendData} layout="vertical" margin={{ left: 20, right: 30, top: 10 }}>
                  <XAxis 
                    type="number" 
                    axisLine={true} 
                    tickLine={false} 
                    tick={{ fill: '#7b848f', fontSize: 10 }}
                    tickFormatter={(value) => `$${value/1000}K`}
                    domain={[0, 60000]}
                    stroke="#edf1f3"
                  />
                  <YAxis 
                    dataKey="category" 
                    type="category" 
                    axisLine={true} 
                    tickLine={false} 
                    tick={{ fill: '#7b848f', fontSize: 10 }} 
                    width={80}
                    stroke="#edf1f3"
                  />
                  <Tooltip 
                    formatter={(value: number) => [`$${value.toLocaleString()}`, 'Spend']}
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}
                  />
                  <Bar 
                    dataKey="spend" 
                    fill="#62a230" 
                    radius={[0, 4, 4, 0]} 
                    barSize={18}
                  />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="bg-white rounded-[15px] border-0 shadow-[0px_1px_2px_#0000000d]">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-semibold text-[#222f36]">CTR by Category</CardTitle>
              <p className="text-xs text-[#7b848f]">Click-through rates</p>
            </CardHeader>
            <CardContent className="h-[350px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={ctrData} margin={{ top: 10, right: 30, left: 0, bottom: 20 }}>
                  <defs>
                    <linearGradient id="colorCtr" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="0" vertical={true} horizontal={false} stroke="#edf1f3" />
                  <XAxis 
                    dataKey="category" 
                    axisLine={true} 
                    tickLine={false} 
                    tick={{ fill: '#7b848f', fontSize: 9 }}
                    stroke="#edf1f3"
                    angle={-20}
                    textAnchor="end"
                  />
                  <YAxis 
                    axisLine={true} 
                    tickLine={false} 
                    tick={{ fill: '#7b848f', fontSize: 10 }}
                    tickFormatter={(value) => `${value}%`}
                    domain={[0, 8]}
                    stroke="#edf1f3"
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
        </div>

        <Card className="bg-white rounded-[15px] border-0 shadow-[0px_1px_2px_#0000000d]">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div>
              <CardTitle className="text-lg font-semibold text-[#222f36]">Top Ad Spenders</CardTitle>
              <p className="text-xs text-[#7b848f]">Vendors with highest advertising spend</p>
            </div>
            <Button variant="outline" className="text-[#222f36] text-[10px] font-bold bg-[#e8f5e9] border-0 rounded-lg hover:bg-[#e8f5e9]/80 h-8 px-3">
              View All Vendors
            </Button>
          </CardHeader>
          <CardContent className="px-0">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-[#f5f6fa] border-0">
                    <TableHead className="py-2 px-6 text-[11px] font-medium text-[#7b848f]">Vendor</TableHead>
                    <TableHead className="py-2 px-6 text-[11px] font-medium text-[#7b848f]">Ad Spend</TableHead>
                    <TableHead className="py-2 px-6 text-[11px] font-medium text-[#7b848f]">Impressions</TableHead>
                    <TableHead className="py-2 px-6 text-[11px] font-medium text-[#7b848f]">CTR</TableHead>
                    <TableHead className="py-2 px-6 text-[11px] font-medium text-[#7b848f]">Performance</TableHead>
                    <TableHead className="py-2 px-6 text-[11px] font-medium text-[#7b848f]">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {topAdSpenders.map((vendor) => (
                    <TableRow key={vendor.id} className="border-0 hover:bg-gray-50 transition-colors">
                      <TableCell className="py-4 px-6 text-[12px] font-medium text-[#222f36]">{vendor.vendor}</TableCell>
                      <TableCell className="py-4 px-6 text-[12px] font-bold text-[#62a230]">{vendor.adSpend}</TableCell>
                      <TableCell className="py-4 px-6 text-[12px] text-[#7b848f]">{vendor.impressions}</TableCell>
                      <TableCell className="py-4 px-6">
                        <span className="text-[11px] bg-[#e8f5e9] text-[#62a230] px-2 py-0.5 rounded-full font-medium">
                          {vendor.ctr}
                        </span>
                      </TableCell>
                      <TableCell className="py-4 px-6 w-48">
                        <div className="flex items-center gap-3">
                          <Progress value={vendor.performanceValue} className="h-1.5 flex-1 bg-gray-100" indicatorClassName="bg-[#62a230]" />
                          <span className="text-[10px] font-medium text-[#7b848f] whitespace-nowrap">{vendor.performanceLabel}</span>
                        </div>
                      </TableCell>
                      <TableCell className="py-4 px-6">
                        <Button variant="link" size="sm" className="text-[10px] text-[#62a230] font-bold h-auto p-0 hover:no-underline">
                          View Details
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
