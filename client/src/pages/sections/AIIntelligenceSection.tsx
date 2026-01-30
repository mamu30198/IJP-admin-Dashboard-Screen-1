import React, { useState } from 'react';
import { Search, Bell, Settings, ChevronDown, ChevronRight, Check, AlertTriangle, TrendingUp, Activity, Shield, Eye, X, Flag, Sparkles } from 'lucide-react';

interface AlertItem {
  id: string;
  type: 'fraud' | 'vendor' | 'revenue' | 'health' | 'moderation';
  typeLabel: string;
  title: string;
  timestamp: string;
  percentage: number;
  color: string;
  bgColor: string;
  borderColor: string;
}

const alerts: AlertItem[] = [
  {
    id: '1',
    type: 'fraud',
    typeLabel: 'FRAUD DETECTION',
    title: 'Suspicious receipt patterns detected across 14 vendors',
    timestamp: '9:20:00 AM',
    percentage: 92,
    color: '#EF4444',
    bgColor: '#FEF2F2',
    borderColor: '#FCA5A5'
  },
  {
    id: '2',
    type: 'vendor',
    typeLabel: 'VENDOR RISK',
    title: "Vendor 'AutoLux Parts' risk score increased to 72/100",
    timestamp: '8:45:00 AM',
    percentage: 78,
    color: '#F59E0B',
    bgColor: '#FFFBEB',
    borderColor: '#FCD34D'
  },
  {
    id: '3',
    type: 'revenue',
    typeLabel: 'REVENUE INTELLIGENCE',
    title: 'Raising posting fee by 5% could increase MRR by ~$24k',
    timestamp: '8:00:00 AM',
    percentage: 71,
    color: '#22C55E',
    bgColor: '#F0FDF4',
    borderColor: '#86EFAC'
  },
  {
    id: '4',
    type: 'health',
    typeLabel: 'PLATFORM HEALTH',
    title: 'User engagement up 18% following new feature release',
    timestamp: '7:20:00 AM',
    percentage: 95,
    color: '#3B82F6',
    bgColor: '#EFF6FF',
    borderColor: '#93C5FD'
  },
  {
    id: '5',
    type: 'moderation',
    typeLabel: 'MODERATION INTELLIGENCE',
    title: 'Emerging scam pattern detected in Electronics category',
    timestamp: '6:15:00 AM',
    percentage: 84,
    color: '#8B5CF6',
    bgColor: '#F5F3FF',
    borderColor: '#C4B5FD'
  }
];

const filterTabs = [
  { id: 'all', label: 'All Insights', icon: null, active: true },
  { id: 'fraud', label: 'Fraud & Abuse', icon: null },
  { id: 'vendor', label: 'Vendor Risk', icon: null },
  { id: 'revenue', label: 'Revenue', icon: null },
  { id: 'health', label: 'Platform Health', icon: null },
  { id: 'moderation', label: 'Moderation', icon: null },
];

const AIIntelligenceSection = () => {
  const [selectedAlert, setSelectedAlert] = useState(alerts[0]);
  const [activeFilter, setActiveFilter] = useState('all');

  return (
    <div className="flex-grow p-6 bg-[#F8FAFC] min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-3">
          <h1 className="text-[22px] font-semibold text-gray-900">AI Intelligence Center</h1>
          <span className="text-sm text-gray-400 border-l border-gray-300 pl-3">
            Central command for AI-powered platform insights
          </span>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search for Anything" 
              className="pl-10 pr-4 py-2.5 w-[280px] bg-white border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-[#22C55E]/20"
            />
          </div>
          <div className="flex items-center gap-3">
            <button className="relative p-2 text-gray-400 hover:bg-gray-100 rounded-full">
              <Bell className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2 pl-3 border-l border-gray-200">
              <div className="w-9 h-9 rounded-full bg-[#FFEDD5] overflow-hidden border-2 border-white shadow-sm">
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Jack" alt="User" className="w-full h-full" />
              </div>
              <span className="text-sm font-medium text-gray-700">Mr. Jack</span>
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </div>
            <button className="p-2 text-gray-400 hover:bg-gray-100 rounded-full">
              <Settings className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 mb-6">
        {filterTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveFilter(tab.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeFilter === tab.id
                ? 'bg-[#002B20] text-white'
                : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Main Content */}
      <div className="flex gap-6">
        {/* Left Column - Alert Cards */}
        <div className="w-[380px] flex-shrink-0 space-y-3">
          {alerts.map((alert) => (
            <div
              key={alert.id}
              onClick={() => setSelectedAlert(alert)}
              className={`bg-white rounded-xl p-4 cursor-pointer transition-all border-l-4 ${
                selectedAlert.id === alert.id
                  ? 'ring-2 ring-[#22C55E]/30 shadow-md'
                  : 'hover:shadow-sm'
              }`}
              style={{ borderLeftColor: alert.color }}
            >
              <div className="flex justify-between items-start mb-2">
                <span
                  className="text-[10px] font-semibold px-2 py-0.5 rounded"
                  style={{ backgroundColor: alert.bgColor, color: alert.color }}
                >
                  {alert.typeLabel}
                </span>
                <span className="text-sm font-semibold text-gray-700">{alert.percentage}%</span>
              </div>
              <p className="text-sm text-gray-800 font-medium mb-2 leading-snug">{alert.title}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-400">{alert.timestamp}</span>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </div>
            </div>
          ))}
        </div>

        {/* Right Column - Detail Panel */}
        <div className="flex-1 bg-white rounded-xl p-6 shadow-sm relative">
          {/* Pin Icon */}
          <button className="absolute top-4 right-4 text-gray-300 hover:text-gray-500">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2v8M12 22v-8M4.93 4.93l5.66 5.66M13.41 13.41l5.66 5.66M2 12h8M22 12h-8M4.93 19.07l5.66-5.66M13.41 10.59l5.66-5.66"/>
            </svg>
          </button>

          {/* Alert Type Badge */}
          <span
            className="inline-block text-[10px] font-bold px-3 py-1 rounded mb-3"
            style={{ backgroundColor: selectedAlert.bgColor, color: selectedAlert.color }}
          >
            {selectedAlert.typeLabel}
          </span>

          {/* Title */}
          <h2 className="text-xl font-semibold text-gray-900 mb-2">{selectedAlert.title}</h2>

          {/* Meta Info */}
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
            <span>Confidence: <span className="font-semibold text-gray-700">{selectedAlert.percentage}%</span></span>
            <span>•</span>
            <span>Generated: 12/29/2024, 9:20:00 AM</span>
          </div>

          {/* Evidence & Findings */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Check className="w-5 h-5 text-[#22C55E]" />
              <h3 className="text-base font-semibold text-gray-900">Evidence & Findings</h3>
            </div>
            <ul className="space-y-2 ml-7">
              <li className="flex items-start gap-2 text-sm text-gray-600">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-1.5 flex-shrink-0"></span>
                Repeated identical receipt formats from different stores
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-600">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-1.5 flex-shrink-0"></span>
                Unusual discount patterns exceeding 85%
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-600">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-1.5 flex-shrink-0"></span>
                Timestamp anomalies in transaction records
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-600">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-1.5 flex-shrink-0"></span>
                Geographic inconsistencies in purchase locations
              </li>
            </ul>
          </div>

          {/* Affected Vendors */}
          <div className="mb-6">
            <h3 className="text-base font-semibold text-gray-900 mb-3">Affected Vendors</h3>
            <div className="flex flex-wrap gap-2">
              {['QuickMart Store', 'DealZone Express', 'TechWorld Shop', 'BargainBay Plus'].map((vendor) => (
                <span
                  key={vendor}
                  className="px-3 py-1.5 bg-[#F0FDF4] text-[#22C55E] text-sm font-medium rounded-full border border-[#86EFAC]"
                >
                  {vendor}
                </span>
              ))}
            </div>
          </div>

          {/* AI Recommendation */}
          <div className="bg-[#FFFBEB] rounded-lg p-4 mb-6 border border-[#FCD34D]">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-5 h-5 text-[#F59E0B]" />
              <h3 className="text-base font-semibold text-gray-900">AI Recommendation</h3>
            </div>
            <p className="text-sm text-gray-700 mb-3">
              Review affected vendors and consider temporary restrictions
            </p>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-gray-500">Potential Impact:</span>
              <span className="text-[#22C55E] font-semibold">Estimated $45,000 in fraudulent transactions</span>
            </div>
          </div>

          {/* Why am I seeing this? */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <Eye className="w-5 h-5 text-gray-400" />
              <h3 className="text-sm font-semibold text-gray-900">Why am I seeing this?</h3>
            </div>
            <p className="text-sm text-gray-500 ml-7">
              This insight is generated by analyzing receipt patterns, transaction timestamps, and comparing against known fraud signatures in our data.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
            <button className="flex items-center gap-2 bg-[#22C55E] text-white px-4 py-2.5 rounded-lg font-medium hover:bg-[#1ea34d] transition-colors">
              <Eye className="w-4 h-4" />
              View Vendors
            </button>
            <button className="flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2.5 rounded-lg font-medium hover:bg-gray-200 transition-colors">
              Dismiss
            </button>
            <button className="flex items-center gap-2 text-gray-500 px-4 py-2.5 rounded-lg font-medium hover:bg-gray-50 transition-colors">
              Report False Positive
            </button>
          </div>

          {/* Footer Note */}
          <p className="text-xs text-gray-400 mt-4 flex items-center gap-1">
            <span className="inline-block w-3 h-3 border border-gray-300 rounded-sm mr-1"></span>
            AI recommendations are advisory only. All enforcement actions require admin confirmation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AIIntelligenceSection;
