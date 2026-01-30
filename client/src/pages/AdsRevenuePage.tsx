import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell, Settings, Search, ChevronLeft, ChevronRight, Share2, MapPin, TrendingUp, Info, Eye, AlertCircle, X } from "lucide-react";
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
  Bar,
  Cell
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
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";

const stats = [
  { 
    title: "Active Campaigns", 
    value: "892",
    change: "of 1245 total",
    icon: "/figmaAssets/active-campaigns.png",
    iconBg: "bg-[#e8f5e9]",
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

const reachData = [
  { day: '20 Jun', reach: 200 },
  { day: '21 Jun', reach: 500 },
  { day: '22 Jun', reach: 300 },
  { day: '23 Jun', reach: 450 },
  { day: '24 Jun', reach: 400 },
  { day: '25 Jun', reach: 420 },
  { day: '26 Jun', reach: 250 },
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
  { id: 6, vendor: "TechWorld", adSpend: "$10,500", impressions: "1.2M", ctr: "3.2%", performanceValue: 50, performanceLabel: "Average" },
  { id: 7, vendor: "HomeDecor", adSpend: "$9,800", impressions: "1.1M", ctr: "2.9%", performanceValue: 45, performanceLabel: "Average" },
  { id: 8, vendor: "FoodieExpress", adSpend: "$8,200", impressions: "950K", ctr: "2.7%", performanceValue: 40, performanceLabel: "Below avg" },
];

export default function AdsRevenuePage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedVendor, setSelectedVendor] = useState<AdVendor | null>(null);
  const itemsPerPage = 5;
  
  const totalPages = Math.ceil(topAdSpenders.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentVendors = topAdSpenders.slice(startIndex, startIndex + itemsPerPage);

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
                  {currentVendors.map((vendor) => (
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
                        <Button 
                          variant="link" 
                          size="sm" 
                          className="text-[10px] text-[#62a230] font-bold h-auto p-0 hover:no-underline"
                          onClick={() => setSelectedVendor(vendor)}
                        >
                          View Details
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            
            <div className="px-6 py-4 flex items-center justify-between border-t border-[#f5f6fa]">
              <p className="text-[11px] text-[#7b848f]">Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, topAdSpenders.length)} of {topAdSpenders.length} vendors</p>
              <div className="flex items-center gap-2">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="w-7 h-7 rounded-md border border-gray-100"
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage(prev => prev - 1)}
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                </Button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <Button
                    key={page}
                    variant="ghost"
                    className={`w-7 h-7 rounded-md p-0 text-[11px] font-semibold ${
                      currentPage === page ? "bg-[#62a230] text-white hover:bg-[#62a230]/90 shadow-sm" : "text-[#7b848f]"
                    }`}
                    onClick={() => setCurrentPage(page)}
                  >
                    {page.toString().padStart(2, '0')}
                  </Button>
                ))}
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="w-7 h-7 rounded-md border border-gray-100"
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage(prev => prev + 1)}
                >
                  <ChevronRight className="w-3.5 h-3.5" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Vendor Detail View Drawer (Right-side Sheet) */}
        <Sheet open={!!selectedVendor} onOpenChange={() => setSelectedVendor(null)}>
          <SheetContent side="right" className="sm:max-w-[70%] w-full bg-[#f5f6fa] border-l-0 p-0 overflow-y-auto overflow-x-hidden">
            <div className="p-4 md:p-8 space-y-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Avatar className="w-14 h-14 border-2 border-white shadow-sm">
                    <AvatarImage src="/figmaAssets/2-jpg.png" />
                    <AvatarFallback>SA</AvatarFallback>
                  </Avatar>
                  <div>
                    <h2 className="text-xl font-bold text-[#222f36]">{selectedVendor?.vendor || "Siti Arlina"}</h2>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-[11px] bg-white px-2.5 py-1 rounded-full text-[#7b848f] flex items-center gap-1.5 shadow-sm">
                        <span className="w-2 h-2 rounded-full bg-blue-500" /> Smart Tv
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Button variant="outline" className="bg-white border-0 text-[12px] font-bold text-[#222f36] h-10 px-5 rounded-xl flex items-center gap-2 shadow-sm hover:bg-white/90">
                    <AlertCircle className="w-4 h-4 text-[#7b848f]" /> Close Add
                  </Button>
                  <Button variant="link" className="text-[#62a230] text-[12px] font-bold p-0 hover:no-underline">View Profile</Button>
                  <SheetClose asChild>
                    <Button variant="ghost" size="icon" className="w-9 h-9 rounded-full bg-white/50"><X className="w-5 h-5 text-[#7b848f]" /></Button>
                  </SheetClose>
                </div>
              </div>

              <div className="space-y-5">
                <h3 className="text-base font-bold text-[#222f36]">Current Running Ads</h3>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2">
                    <div className="bg-white rounded-[25px] overflow-hidden shadow-sm relative group p-1.5">
                      <img src="/figmaAssets/monsoon-sale.png" alt="Monsoon Sale" className="w-full h-[280px] object-cover rounded-[20px]" />
                      <div className="absolute top-6 left-6 flex items-center gap-2 bg-black/40 backdrop-blur-md px-4 py-1.5 rounded-full text-white text-[12px] font-medium">
                        <Eye className="w-4 h-4" /> 93,050 Views
                      </div>
                      <div className="absolute top-6 right-6 w-8 h-8 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center text-white border border-white/20">
                        <Info className="w-4 h-4" />
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-5 mt-6">
                      <Button variant="ghost" size="icon" className="w-9 h-9 rounded-full bg-white border border-gray-100 shadow-sm hover:bg-gray-50">
                        <ChevronLeft className="w-5 h-5 text-[#7b848f]" />
                      </Button>
                      <div className="flex items-center gap-3">
                        <span className="w-7 h-7 rounded-full bg-[#62a230] text-white text-[11px] flex items-center justify-center font-bold shadow-sm">01</span>
                        <span className="w-7 h-7 rounded-full bg-white text-[#7b848f] text-[11px] flex items-center justify-center font-bold">02</span>
                        <span className="w-7 h-7 rounded-full bg-white text-[#7b848f] text-[11px] flex items-center justify-center font-bold">03</span>
                      </div>
                      <Button variant="ghost" size="icon" className="w-9 h-9 rounded-full bg-white border border-gray-100 shadow-sm hover:bg-gray-50">
                        <ChevronRight className="w-5 h-5 text-[#7b848f]" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <Card className="border-0 bg-white rounded-[25px] p-6 shadow-sm">
                      <h4 className="text-[11px] font-bold text-[#7b848f] uppercase tracking-widest mb-5">Overview</h4>
                      <div className="space-y-4">
                        {[
                          { label: 'Ad Reached', value: '93k' },
                          { label: 'Content interaction', value: '102k' },
                          { label: 'Profile Visits', value: '180k' },
                          { label: 'Website Visits', value: '180k' },
                        ].map((item, idx) => (
                          <div key={idx} className="flex items-center justify-between">
                            <span className="text-[12px] font-medium text-[#222f36]">{item.label}</span>
                            <div className="flex items-center gap-1 text-[#62a230] text-[12px] font-bold">
                              <TrendingUp className="w-3.5 h-3.5" /> {item.value}
                            </div>
                          </div>
                        ))}
                      </div>
                    </Card>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="bg-white rounded-[25px] border-0 p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2 group cursor-pointer">
                      <h4 className="text-base font-bold text-[#222f36]">Last 7 Days</h4>
                      <ChevronRight className="w-4 h-4 rotate-90 text-[#7b848f] group-hover:text-[#62a230] transition-colors" />
                    </div>
                    <span className="text-[11px] text-[#7b848f] font-medium">20 June to 26 June</span>
                  </div>
                  
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-2 bg-[#e8f5e9] px-4 py-1.5 rounded-full text-[#62a230] text-[12px] font-bold shadow-sm">
                      <TrendingUp className="w-4 h-4" /> 500
                    </div>
                    <h4 className="text-base font-bold text-[#222f36]">Reach</h4>
                  </div>

                  <div className="h-[140px] mb-8">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={reachData}>
                        <Bar dataKey="reach" radius={[5, 5, 0, 0]} barSize={24}>
                          {reachData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={index === 1 ? '#62a230' : '#c8e6c9'} />
                          ))}
                        </Bar>
                        <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: '#7b848f', fontSize: 10 }} dy={10} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>

                  <div className="space-y-4 pt-6 border-t border-gray-50">
                    <div className="flex items-center justify-between text-[12px]">
                      <span className="text-[#7b848f] font-medium">Content interaction</span>
                      <span className="font-bold text-[#222f36]">850k</span>
                    </div>
                    <div className="flex items-center justify-between text-[12px]">
                      <span className="text-[#7b848f] font-medium">Vendor Profile Visits</span>
                      <span className="font-bold text-[#222f36]">600k</span>
                    </div>
                  </div>
                </Card>

                <div className="space-y-6">
                  <div className="bg-white rounded-[25px] p-7 shadow-sm relative overflow-hidden flex flex-col items-center group">
                    <div className="relative w-40 h-40 mb-6 transition-transform group-hover:scale-105 duration-500">
                      <svg className="w-full h-full transform -rotate-90">
                        <circle cx="80" cy="80" r="72" stroke="#f1f5f9" strokeWidth="10" fill="transparent" />
                        <circle cx="80" cy="80" r="72" stroke="#62a230" strokeWidth="10" fill="transparent" strokeDasharray="452.16" strokeDashoffset="90.43" strokeLinecap="round" />
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-3xl font-black text-[#222f36]">93k</span>
                        <span className="text-[11px] text-[#7b848f] font-bold uppercase tracking-wider">Reached</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between w-full text-[12px] pt-5 border-t border-gray-50">
                      <span className="text-[#7b848f] font-medium">Account Reached</span>
                      <span className="font-bold text-[#222f36]">93k</span>
                    </div>
                  </div>

                  <Card className="bg-white rounded-[25px] border-0 p-6 shadow-sm">
                    <h4 className="text-base font-bold text-[#222f36] mb-5">Sponsored details</h4>
                    <div className="grid grid-cols-2 gap-5 mb-5">
                      <div className="p-4 bg-[#f8fafc] rounded-2xl border border-gray-50 shadow-sm">
                        <p className="text-[11px] font-bold text-[#7b848f] uppercase tracking-wider mb-2">Send Message</p>
                        <p className="text-[13px] font-bold text-[#222f36]">@Siti Arlina</p>
                      </div>
                      <div className="p-4 bg-[#f8fafc] rounded-2xl border border-gray-50 shadow-sm">
                        <div className="flex items-center justify-between mb-2">
                          <p className="text-[11px] font-bold text-[#7b848f] uppercase tracking-wider">Total spend</p>
                          <span className="text-[10px] text-[#62a230] font-black">$400 / 5d</span>
                        </div>
                        <p className="text-[13px] font-bold text-[#222f36]">$1,200</p>
                      </div>
                    </div>
                    <div className="p-4 bg-[#f8fafc] rounded-2xl border border-gray-50 shadow-sm">
                      <div className="flex items-center justify-between mb-3">
                        <p className="text-[11px] font-bold text-[#7b848f] uppercase tracking-wider">Audience Location</p>
                        <MapPin className="w-4 h-4 text-[#7b848f]" />
                      </div>
                      <p className="text-[13px] font-bold text-[#222f36] mb-4">Kolkata, Orissa, 153004</p>
                      <div className="flex gap-2.5">
                        {['Travel', 'Leisure', 'Luxury'].map((tag, i) => (
                          <span key={i} className="text-[10px] bg-white border border-gray-100 px-4 py-1.5 rounded-full text-[#7b848f] font-bold shadow-sm">{tag}</span>
                        ))}
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-6 mt-6 pt-4 border-t border-gray-50">
                      <div>
                        <p className="text-[11px] font-bold text-[#7b848f] uppercase tracking-wider mb-1 text-right">Started Date</p>
                        <p className="text-[12px] font-bold text-[#222f36] text-right">21 Dec 2024</p>
                      </div>
                      <div>
                        <p className="text-[11px] font-bold text-[#7b848f] uppercase tracking-wider mb-1 text-right">End Date</p>
                        <p className="text-[12px] font-bold text-[#222f36] text-right">25 Dec 2024</p>
                        <p className="text-[10px] text-[#62a230] font-black text-right mt-0.5">3 days left</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </main>
    </div>
  );
}
