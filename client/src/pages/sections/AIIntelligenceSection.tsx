import React from 'react';
import { Search, Bell, Settings, ChevronDown, ShieldCheck, Zap, Brain, Activity, Lock, Target, AlertCircle } from 'lucide-react';

const AIIntelligenceSection = () => {
  const stats = [
    { label: 'Detection Accuracy', value: '99.8%', icon: Target, color: 'text-green-500', bg: 'bg-green-50' },
    { label: 'Active Patterns', value: '1,248', icon: Activity, color: 'text-blue-500', bg: 'bg-blue-50' },
    { label: 'Risk Prevention', value: '856', icon: Lock, color: 'text-purple-500', bg: 'bg-purple-50' },
  ];

  const models = [
    { name: 'Neural Fraud Engine v4.2', status: 'Optimal', performance: '98.5%', type: 'Fraud Detection' },
    { name: 'NLP Sentiment Analyzer', status: 'Monitoring', performance: '94.2%', type: 'Content Moderation' },
    { name: 'User Behavior Predictor', status: 'Optimal', performance: '96.8%', type: 'Growth Retention' },
  ];

  return (
    <div className="flex-grow p-8 bg-[#F8FAFC]">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-[28px] font-bold text-gray-900 flex items-center gap-3">
            AI Intelligence Center
            <span className="text-xs font-normal text-gray-400 border-l border-gray-300 pl-3 ml-1">
              Advanced platform insights and automated systems
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

      {/* Hero AI Status */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2 bg-gradient-to-br from-[#002B20] to-[#004D39] rounded-2xl p-8 text-white relative overflow-hidden">
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 bg-white/10 rounded-lg backdrop-blur-sm">
                <Brain className="w-6 h-6 text-[#22C55E]" />
              </div>
              <span className="text-sm font-bold tracking-wider uppercase opacity-80">System Intelligence Overview</span>
            </div>
            <h2 className="text-4xl font-bold mb-4 leading-tight">AI Ecosystem is running at <br/> <span className="text-[#22C55E]">Peak Performance</span></h2>
            <p className="text-white/60 max-w-md mb-8">All automated models are currently active with zero latency detected across all modules.</p>
            <div className="flex items-center gap-6">
              <button className="bg-[#22C55E] hover:bg-[#1ea34d] text-white px-8 py-3.5 rounded-xl font-bold transition-all shadow-lg shadow-[#22C55E]/20">
                Configure Models
              </button>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-[#22C55E] rounded-full animate-pulse"></span>
                <span className="text-sm font-medium opacity-80">Live Monitoring Active</span>
              </div>
            </div>
          </div>
          <div className="absolute right-[-40px] bottom-[-40px] opacity-10">
            <Brain className="w-[300px] h-[300px]" />
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-bold text-gray-900">Automation Stats</h3>
            <Zap className="w-5 h-5 text-yellow-400" />
          </div>
          <div className="space-y-6">
            {stats.map((stat, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${stat.bg} ${stat.color}`}>
                    <stat.icon className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-medium text-gray-500">{stat.label}</span>
                </div>
                <span className="font-bold text-gray-900">{stat.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Models Table */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-50 flex justify-between items-center">
          <h3 className="font-bold text-gray-900">Active Intelligence Models</h3>
          <button className="text-[#22C55E] text-sm font-bold hover:underline">View All Models</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-[#F8FAFC] text-gray-400 text-[11px] font-bold uppercase tracking-wider">
                <th className="px-6 py-4">Model Name</th>
                <th className="px-6 py-4">Module Type</th>
                <th className="px-6 py-4">Performance</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {models.map((model, i) => (
                <tr key={i} className="hover:bg-gray-50 transition-colors group">
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-gray-50 rounded-lg group-hover:bg-white transition-colors">
                        <Brain className="w-4 h-4 text-gray-400" />
                      </div>
                      <span className="text-sm font-bold text-gray-900">{model.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-sm text-gray-500 font-medium">{model.type}</td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-1.5 w-24 bg-gray-100 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-[#22C55E] rounded-full" 
                          style={{ width: model.performance }}
                        />
                      </div>
                      <span className="text-xs font-bold text-gray-900">{model.performance}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <span className="flex items-center gap-1.5 text-xs font-bold text-[#22C55E] bg-[#22C55E]/10 px-2.5 py-1 rounded-full w-fit">
                      <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full animate-pulse"></span>
                      {model.status}
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <button className="text-sm font-bold text-gray-400 hover:text-gray-900 transition-colors">Manage</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AIIntelligenceSection;
