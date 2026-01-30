import React from 'react';
import { Search, Bell, Settings, ChevronDown, AlertCircle, CheckCircle2, X } from 'lucide-react';

interface AlertItemProps {
  title: string;
  type: 'CRITICAL' | 'WARNING' | 'INFO';
  description: string;
  time: string;
  acknowledged?: boolean;
}

const AlertItem = ({ title, type, description, time, acknowledged }: AlertItemProps) => {
  const typeStyles = {
    CRITICAL: {
      border: 'border-l-[#EF4444]',
      bg: 'bg-[#FEF2F2]',
      icon: 'text-[#EF4444]',
      badge: 'bg-[#EF4444] text-white',
    },
    WARNING: {
      border: 'border-l-[#F59E0B]',
      bg: 'bg-[#FFFBEB]',
      icon: 'text-[#F59E0B]',
      badge: 'bg-[#F59E0B] text-white',
    },
    INFO: {
      border: 'border-l-[#3B82F6]',
      bg: 'bg-[#EFF6FF]',
      icon: 'text-[#3B82F6]',
      badge: 'bg-[#3B82F6] text-white',
    },
  };

  const style = typeStyles[type];

  return (
    <div className={`flex items-center justify-between p-5 bg-white border border-gray-100 border-l-4 ${style.border} rounded-xl mb-4 shadow-sm hover:shadow-md transition-shadow group relative overflow-hidden`}>
      <div className="flex items-start gap-4 flex-1">
        <div className={`p-2.5 rounded-lg ${style.bg} ${style.icon}`}>
          <AlertCircle className="w-6 h-6" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-1">
            <h3 className="text-[15px] font-bold text-gray-900">{title}</h3>
            <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${style.badge}`}>{type}</span>
            {acknowledged && (
              <span className="flex items-center gap-1 text-[10px] font-bold text-[#22C55E] bg-[#22C55E]/10 px-2 py-0.5 rounded">
                <CheckCircle2 className="w-3 h-3" /> Acknowledged
              </span>
            )}
          </div>
          <p className="text-sm text-gray-500 font-medium leading-relaxed">{description}</p>
          <p className="text-xs text-gray-400 mt-1.5 flex items-center gap-1.5 italic">• {time}</p>
        </div>
      </div>
      <div className="flex items-center gap-4 ml-6">
        {!acknowledged && (
          <button className="bg-[#22C55E] hover:bg-[#1ea34d] text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors whitespace-nowrap">
            Acknowledge
          </button>
        )}
        <button className="text-gray-300 hover:text-gray-500 transition-colors">
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

const SystemAlertsSection = () => {
  const filters = [
    { label: 'All', count: 8, active: true },
    { label: 'Critical', count: 2 },
    { label: 'Warning', count: 2 },
    { label: 'Info', count: 2 },
  ];

  const alerts: AlertItemProps[] = [
    {
      title: "Payment Gateway Latency",
      type: "CRITICAL",
      description: "Stripe API response time increased by 245%. Investigating...",
      time: "2 min ago",
      acknowledged: false
    },
    {
      title: "Fraud Spike Detected",
      type: "CRITICAL",
      description: "42% increase in flagged transactions from APAC region",
      time: "15 min ago",
      acknowledged: false
    },
    {
      title: "Report Volume Surge",
      type: "WARNING",
      description: "Report submissions 2.2x higher than usual for this hour",
      time: "28 min ago",
      acknowledged: true
    },
    {
      title: "AI Model Anomaly",
      type: "WARNING",
      description: "Fraud detection model confidence dropped below threshold",
      time: "45 min ago",
      acknowledged: true
    },
    {
      title: "Scheduled Maintenance",
      type: "INFO",
      description: "Database maintenance window scheduled for 02:00 UTC",
      time: "1 hour ago",
      acknowledged: true
    },
    {
      title: "Scheduled Maintenance",
      type: "INFO",
      description: "Database maintenance window scheduled for 02:00 UTC",
      time: "1 hour ago",
      acknowledged: true
    }
  ];

  return (
    <div className="flex-grow p-8 bg-[#F8FAFC]">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-[28px] font-bold text-gray-900 flex items-center gap-3">
            System Alerts
            <span className="text-xs font-normal text-gray-400 border-l border-gray-300 pl-3 ml-1">
              Monitor platform health and critical notifications
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

      {/* Filters and Actions */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          {filters.map((filter) => (
            <button
              key={filter.label}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-2 ${
                filter.active
                  ? 'bg-[#22C55E] text-white shadow-lg shadow-[#22C55E]/20'
                  : 'bg-white text-gray-400 border border-gray-100 hover:bg-gray-50'
              }`}
            >
              {filter.label} <span className={filter.active ? 'opacity-80' : 'text-gray-300'}>{filter.count}</span>
            </button>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-2 text-xs font-bold text-[#EF4444] bg-[#FEF2F2] px-4 py-2 rounded-full border border-[#FEE2E2]">
            <AlertCircle className="w-4 h-4" /> 2 unacknowledged
          </span>
          <button className="bg-[#22C55E] hover:bg-[#1ea34d] text-white text-xs font-bold px-6 py-2.5 rounded-full transition-all shadow-lg shadow-[#22C55E]/20">
            Acknowledge All
          </button>
        </div>
      </div>

      {/* Alerts List */}
      <div className="max-w-6xl">
        {alerts.map((alert, idx) => (
          <AlertItem key={idx} {...alert} />
        ))}
      </div>
    </div>
  );
};

export default SystemAlertsSection;
