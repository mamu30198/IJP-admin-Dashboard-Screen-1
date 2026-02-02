import React, { useState, useMemo } from 'react';
import { Search, Bell, Settings, ChevronDown, ChevronRight, Check, Eye, Sparkles, Zap, HelpCircle } from 'lucide-react';

interface AlertItem {
  id: string;
  type: 'fraud' | 'vendor' | 'revenue' | 'health' | 'moderation';
  typeLabel: string;
  title: string;
  timestamp: string;
  percentage: number;
  dotColor: string;
  labelColor: string;
  cardBg: string;
  borderColor: string;
  detailBg: string;
}

const alerts: AlertItem[] = [
  {
    id: '1',
    type: 'fraud',
    typeLabel: 'FRAUD DETECTION',
    title: 'Suspicious receipt patterns detected across 14 vendors',
    timestamp: '9:20:00 AM',
    percentage: 92,
    dotColor: '#EF4444',
    labelColor: '#DC2626',
    cardBg: 'linear-gradient(135deg, #FEF2F2 0%, #FEE2E2 100%)',
    borderColor: '#EF4444',
    detailBg: '#FEF2F2'
  },
  {
    id: '2',
    type: 'vendor',
    typeLabel: 'VENDOR RISK',
    title: "Vendor 'AutoLux Parts' risk score increased to 72/100",
    timestamp: '8:45:00 AM',
    percentage: 78,
    dotColor: '#F97316',
    labelColor: '#EA580C',
    cardBg: 'linear-gradient(135deg, #FFF7ED 0%, #FFEDD5 100%)',
    borderColor: '#F97316',
    detailBg: '#FFF7ED'
  },
  {
    id: '3',
    type: 'revenue',
    typeLabel: 'REVENUE INTELLIGENCE',
    title: 'Raising posting fee by 5% could increase MRR by ~$24k',
    timestamp: '8:00:00 AM',
    percentage: 71,
    dotColor: '#84CC16',
    labelColor: '#65A30D',
    cardBg: 'linear-gradient(135deg, #FEFCE8 0%, #FEF9C3 100%)',
    borderColor: '#84CC16',
    detailBg: '#FEFCE8'
  },
  {
    id: '4',
    type: 'health',
    typeLabel: 'PLATFORM HEALTH',
    title: 'User engagement up 18% following new feature release',
    timestamp: '7:20:00 AM',
    percentage: 95,
    dotColor: '#3B82F6',
    labelColor: '#2563EB',
    cardBg: 'linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%)',
    borderColor: '#3B82F6',
    detailBg: '#EFF6FF'
  },
  {
    id: '5',
    type: 'moderation',
    typeLabel: 'MODERATION INTELLIGENCE',
    title: 'Emerging scam pattern detected in Electronics category',
    timestamp: '6:15:00 AM',
    percentage: 84,
    dotColor: '#EAB308',
    labelColor: '#CA8A04',
    cardBg: 'linear-gradient(135deg, #FEFCE8 0%, #FEF08A 100%)',
    borderColor: '#EAB308',
    detailBg: '#FEFCE8'
  }
];

interface FilterTab {
  id: string;
  label: string;
  filterType: string;
  icon?: string;
}

const filterTabs: FilterTab[] = [
  { id: 'all', label: 'All Insights', filterType: 'all' },
  { id: 'fraud', label: 'Fraud & Abuse', filterType: 'fraud', icon: '🛡️' },
  { id: 'vendor', label: 'Vendor Risk', filterType: 'vendor', icon: '📊' },
  { id: 'revenue', label: 'Revenue', filterType: 'revenue', icon: '💰' },
  { id: 'health', label: 'Platform Health', filterType: 'health', icon: '❤️' },
  { id: 'moderation', label: 'Moderation', filterType: 'moderation', icon: '🔍' },
];

const AIIntelligenceSection = () => {
  const [selectedAlert, setSelectedAlert] = useState(alerts[0]);
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredAlerts = useMemo(() => {
    if (activeFilter === 'all') return alerts;
    return alerts.filter(alert => alert.type === activeFilter);
  }, [activeFilter]);

  const handleFilterChange = (filterId: string) => {
    setActiveFilter(filterId);
    const filtered = filterId === 'all' ? alerts : alerts.filter(a => a.type === filterId);
    if (filtered.length > 0 && !filtered.find(a => a.id === selectedAlert.id)) {
      setSelectedAlert(filtered[0]);
    }
  };

  return (
    <div className="flex-grow p-6 bg-[#F8FAFC] min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-5">
        <div className="flex items-center gap-3">
          <h1 className="text-[20px] font-semibold text-gray-900">AI Intelligence Center</h1>
          <span className="text-[13px] text-gray-400 border-l border-gray-300 pl-3">
            Central command for AI-powered platform insights
          </span>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search for Anything" 
              className="pl-10 pr-4 py-2 w-[240px] bg-white border border-gray-200 rounded-full text-[13px] focus:outline-none focus:ring-2 focus:ring-[#22C55E]/20"
            />
          </div>
          <div className="flex items-center gap-3">
            <button className="relative p-2 text-gray-400 hover:bg-gray-100 rounded-full">
              <Bell className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2 pl-3 border-l border-gray-200">
              <div className="w-8 h-8 rounded-full bg-[#FFEDD5] overflow-hidden border-2 border-white shadow-sm">
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Jack" alt="User" className="w-full h-full" />
              </div>
              <span className="text-[13px] font-medium text-gray-700">Mr. Jack</span>
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </div>
            <button className="p-2 text-gray-400 hover:bg-gray-100 rounded-full">
              <Settings className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 mb-5 bg-[#F1F5F9] rounded-xl p-1.5">
        {filterTabs.map((tab) => {
          const isActive = activeFilter === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => handleFilterChange(tab.id)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-[13px] font-medium transition-all ${
                isActive
                  ? 'bg-[#65A30D] text-white shadow-sm'
                  : 'text-gray-600 hover:bg-white/60'
              }`}
            >
              {isActive && (
                <span className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
                  <Check className="w-2.5 h-2.5 text-[#65A30D]" strokeWidth={3} />
                </span>
              )}
              {tab.icon && !isActive && <span className="text-sm">{tab.icon}</span>}
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Main Content */}
      <div className="flex gap-5">
        {/* Left Column - Alert Cards */}
        <div className="w-[380px] flex-shrink-0 space-y-3">
          {filteredAlerts.map((alert) => (
            <div
              key={alert.id}
              onClick={() => setSelectedAlert(alert)}
              className={`rounded-xl p-4 cursor-pointer transition-all border-l-4 shadow-sm hover:shadow-md ${
                selectedAlert.id === alert.id
                  ? 'ring-2 ring-[#22C55E]/40 shadow-md'
                  : ''
              }`}
              style={{ 
                borderLeftColor: alert.borderColor,
                background: alert.cardBg
              }}
            >
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-1.5">
                  <span 
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: alert.dotColor }}
                  />
                  <span
                    className="text-[11px] font-bold uppercase tracking-wide"
                    style={{ color: alert.labelColor }}
                  >
                    {alert.typeLabel}
                  </span>
                </div>
                <span className="text-[14px] font-semibold text-gray-700">{alert.percentage}%</span>
              </div>
              <p className="text-[14px] text-gray-800 font-medium mb-3 leading-snug">{alert.title}</p>
              <span className="text-[11px] text-gray-400">{alert.timestamp}</span>
            </div>
          ))}
        </div>

        {/* Right Column - Detail Panel */}
        <div 
          className="flex-1 rounded-xl p-6 shadow-sm relative border border-gray-100/50"
          style={{ backgroundColor: selectedAlert.detailBg }}
        >
          {/* Zap Icon */}
          <button className="absolute top-5 right-5 text-[#22C55E] hover:text-[#16A34A]">
            <Zap className="w-5 h-5" fill="currentColor" />
          </button>

          {/* Alert Type Badge */}
          <div className="flex items-center gap-1.5 mb-4">
            <span 
              className="w-2.5 h-2.5 rounded-full"
              style={{ backgroundColor: selectedAlert.dotColor }}
            />
            <span
              className="text-[11px] font-bold uppercase tracking-wide"
              style={{ color: selectedAlert.labelColor }}
            >
              {selectedAlert.typeLabel}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-[20px] font-semibold text-gray-900 mb-3 leading-tight">{selectedAlert.title}</h2>

          {/* Meta Info */}
          <div className="flex items-center gap-3 text-[13px] text-gray-500 mb-6">
            <span>Confidence: <span className="font-semibold text-gray-700">{selectedAlert.percentage}%</span></span>
            <span className="text-gray-300">•</span>
            <span>Generated: 12/29/2024, {selectedAlert.timestamp}</span>
          </div>

          {/* Evidence & Findings */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-5 h-5 rounded-full bg-[#22C55E] flex items-center justify-center">
                <Check className="w-3 h-3 text-white" strokeWidth={3} />
              </div>
              <h3 className="text-[15px] font-semibold text-gray-900">Evidence & Findings</h3>
            </div>
            <ul className="space-y-2.5 ml-7">
              <li className="flex items-start gap-2.5 text-[13px] text-gray-600">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-1.5 flex-shrink-0"></span>
                Repeated identical receipt formats from different stores
              </li>
              <li className="flex items-start gap-2.5 text-[13px] text-gray-600">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-1.5 flex-shrink-0"></span>
                Unusual discount patterns exceeding 85%
              </li>
              <li className="flex items-start gap-2.5 text-[13px] text-gray-600">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-1.5 flex-shrink-0"></span>
                Timestamp anomalies in transaction records
              </li>
              <li className="flex items-start gap-2.5 text-[13px] text-gray-600">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-1.5 flex-shrink-0"></span>
                Geographic inconsistencies in purchase locations
              </li>
            </ul>
          </div>

          {/* Affected Vendors */}
          <div className="mb-6">
            <h3 className="text-[15px] font-semibold text-gray-900 mb-3">Affected Vendors</h3>
            <div className="flex flex-wrap gap-2">
              {['QuickMart Store', 'DealZone Express', 'TechWorld Shop', 'BargainBay Plus'].map((vendor) => (
                <span
                  key={vendor}
                  className="px-3 py-1.5 bg-[#E0F2FE] text-[#0284C7] text-[12px] font-medium rounded-full border border-[#BAE6FD]"
                >
                  {vendor}
                </span>
              ))}
            </div>
          </div>

          {/* AI Recommendation - Green background like screenshot */}
          <div className="bg-gradient-to-r from-[#F0FDF4] to-[#DCFCE7] rounded-xl p-4 mb-6 border border-[#BBF7D0]">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-5 h-5 rounded-full bg-[#22C55E] flex items-center justify-center">
                <Check className="w-3 h-3 text-white" strokeWidth={3} />
              </div>
              <h3 className="text-[14px] font-semibold text-gray-900">AI Recommendation</h3>
            </div>
            <p className="text-[13px] text-gray-700 mb-2 ml-7">
              Review affected vendors and consider temporary restrictions
            </p>
            <div className="flex items-center gap-2 text-[13px] ml-7">
              <span className="text-gray-500 font-medium">Potential Impact:</span>
              <span className="text-[#22C55E] font-semibold">Estimated $45,000 in fraudulent transactions</span>
            </div>
          </div>

          {/* Why am I seeing this? */}
          <div className="mb-6 bg-[#F8FAFC] rounded-xl p-4 border border-gray-100">
            <div className="flex items-center gap-2 mb-2">
              <HelpCircle className="w-4 h-4 text-gray-400" />
              <h3 className="text-[13px] font-semibold text-gray-900">Why am I seeing this?</h3>
            </div>
            <p className="text-[12px] text-gray-500 ml-6 leading-relaxed">
              This insight is generated by analyzing receipt patterns, transaction timestamps, and comparing against known fraud signatures in our data.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
            <button className="flex items-center gap-2 bg-[#22C55E] text-white px-5 py-2.5 rounded-lg text-[13px] font-medium hover:bg-[#16A34A] transition-colors shadow-sm">
              <Zap className="w-4 h-4" />
              View Vendors
            </button>
            <button className="flex items-center gap-2 bg-gray-100 text-gray-700 px-5 py-2.5 rounded-lg text-[13px] font-medium hover:bg-gray-200 transition-colors">
              Dismiss
            </button>
            <button className="flex items-center gap-2 text-gray-600 px-5 py-2.5 rounded-lg text-[13px] font-medium hover:bg-gray-50 transition-colors border border-gray-200">
              Report False Positive
            </button>
          </div>

          {/* Footer Note */}
          <p className="text-[11px] text-gray-400 mt-4 flex items-center gap-1.5">
            <span className="inline-block w-3.5 h-3.5 border border-gray-300 rounded flex-shrink-0"></span>
            AI recommendations are advisory only. All enforcement actions require admin confirmation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AIIntelligenceSection;
