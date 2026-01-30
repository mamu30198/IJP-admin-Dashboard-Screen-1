import React from 'react';
import { Search, Bell, Settings, TrendingUp, DollarSign, ShieldAlert, FileText, ShieldCheck, Users, ChevronDown, Eye, Download, FileSpreadsheet } from 'lucide-react';

interface ReportCardProps {
  title: string;
  description: string;
  date: string;
  icon: React.ElementType;
  color: string;
  tag: string;
}

const ReportCard = ({ title, description, date, icon: Icon, color, tag }: ReportCardProps) => (
  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col h-full relative">
    <div className="flex justify-between items-start mb-4">
      <div className={`p-3 rounded-lg ${color}`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
      <span className="text-[10px] font-medium text-gray-400 uppercase tracking-wider bg-gray-50 px-2 py-1 rounded">
        {tag}
      </span>
    </div>
    <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-sm text-gray-500 mb-6 flex-grow leading-relaxed">{description}</p>
    <div className="flex items-center justify-between pt-4 border-t border-gray-50">
      <span className="text-xs text-gray-400 font-medium">Last: {date}</span>
      <div className="flex gap-2">
        <button className="p-2 hover:bg-gray-50 rounded-full text-gray-400 transition-colors">
          <Eye className="w-4 h-4" />
        </button>
        <button className="flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-bold text-[#22C55E] bg-[#22C55E]/10 rounded-md hover:bg-[#22C55E]/20 transition-colors">
          <Download className="w-3.5 h-3.5" /> PDF
        </button>
        <button className="flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-bold text-[#22C55E] bg-[#22C55E]/10 rounded-md hover:bg-[#22C55E]/20 transition-colors">
          <FileSpreadsheet className="w-3.5 h-3.5" /> CSV
        </button>
      </div>
    </div>
  </div>
);

const ReportsSection = () => {
  const reports = [
    {
      title: "Weekly Platform Health Report",
      description: "Comprehensive overview of platform performance, user activity, and system health metrics",
      date: "Dec 28, 2024",
      tag: "Weekly",
      icon: TrendingUp,
      color: "bg-[#22C55E]"
    },
    {
      title: "Monthly Revenue Report",
      description: "Detailed breakdown of all revenue streams, including subscriptions, ads, and transaction fees",
      date: "Dec 1, 2024",
      tag: "Monthly",
      icon: DollarSign,
      color: "bg-[#059669]"
    },
    {
      title: "Moderation Activity Report",
      description: "Summary of moderation actions, flagged content statistics, and enforcement outcomes",
      date: "Dec 20, 2024",
      tag: "Weekly",
      icon: ShieldAlert,
      color: "bg-[#FB923C]"
    },
    {
      title: "Vendor Performance Report",
      description: "Analysis of vendor metrics including sales, ratings, compliance scores and growth trends",
      date: "Dec 25, 2024",
      tag: "Weekly",
      icon: FileText,
      color: "bg-[#3B82F6]"
    },
    {
      title: "Fraud Detection Summary",
      description: "AI-generated report on detected fraud patterns, false positives, and prevention effectiveness",
      date: "Dec 24, 2024",
      tag: "Daily",
      icon: ShieldCheck,
      color: "bg-[#F87171]"
    },
    {
      title: "User Growth & Retention",
      description: "User acquisition, churn analysis, and engagement metrics across all user segments",
      date: "Dec 22, 2024",
      tag: "Weekly",
      icon: Users,
      color: "bg-[#A855F7]"
    }
  ];

  return (
    <div className="flex-grow p-8 bg-[#F8FAFC]">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-[28px] font-bold text-gray-900 flex items-center gap-3">
            Reports
            <span className="text-xs font-normal text-gray-400 border-l border-gray-300 pl-3 ml-1">
              Generate and download platform reports
            </span>
          </h1>
        </div>
        <div className="flex items-center gap-6">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search for Anything" 
              className="pl-11 pr-4 py-2.5 w-[320px] bg-white border border-gray-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-[#22C55E]/20 shadow-sm transition-all"
            />
          </div>
          <div className="flex items-center gap-4">
            <button className="relative p-2.5 text-gray-400 hover:bg-gray-100 rounded-full transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-[#EF4444] rounded-full border-2 border-white"></span>
            </button>
            <div className="flex items-center gap-3 pl-4 border-l border-gray-100">
              <div className="w-10 h-10 rounded-full bg-[#FFEDD5] overflow-hidden border-2 border-white shadow-sm">
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Jack" alt="User" />
              </div>
              <div className="flex items-center gap-1.5 cursor-pointer">
                <span className="text-sm font-semibold text-gray-700">Mr. Jack</span>
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </div>
            </div>
            <button className="p-2.5 text-gray-400 hover:bg-gray-100 rounded-full transition-colors">
              <Settings className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {reports.map((report, idx) => (
          <ReportCard key={idx} {...report} />
        ))}
      </div>

      {/* Custom Report Builder */}
      <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
        <div className="flex items-center gap-4 mb-10">
          <div className="p-2.5 bg-[#22C55E]/10 rounded-lg text-[#22C55E]">
            <TrendingUp className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900">Custom Report Builder</h3>
            <p className="text-sm text-gray-400 font-medium">Create a custom report with specific date ranges and metrics</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
          <div className="md:col-span-3 space-y-2.5">
            <label className="text-sm font-bold text-gray-900 block">Report Type</label>
            <div className="relative">
              <select className="w-full bg-[#F8FAFC] border border-gray-100 rounded-xl px-4 py-3.5 text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-[#22C55E]/20 font-medium text-gray-600">
                <option>Platform Health</option>
              </select>
              <ChevronDown className="w-4 h-4 absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>
          </div>
          <div className="md:col-span-3 space-y-2.5">
            <label className="text-sm font-bold text-gray-900 block">Start Date</label>
            <input 
              type="text" 
              placeholder="mm/dd/yyyy" 
              className="w-full bg-[#F8FAFC] border border-gray-100 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#22C55E]/20 font-medium"
            />
          </div>
          <div className="md:col-span-3 space-y-2.5">
            <label className="text-sm font-bold text-gray-900 block">End Date</label>
            <input 
              type="text" 
              placeholder="mm/dd/yyyy" 
              className="w-full bg-[#F8FAFC] border border-gray-100 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#22C55E]/20 font-medium"
            />
          </div>
          <div className="md:col-span-3">
            <button className="w-full bg-[#22C55E] hover:bg-[#1ea34d] text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-2.5 transition-all shadow-lg shadow-[#22C55E]/20">
              <TrendingUp className="w-5 h-5" />
              Generate Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportsSection;

