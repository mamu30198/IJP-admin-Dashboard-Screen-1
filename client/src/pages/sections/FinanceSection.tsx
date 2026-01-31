import React from 'react';
import { Search, Bell, Settings, ChevronDown, DollarSign, Users, TrendingUp, Wallet, ArrowUpRight, Download, MoreHorizontal, Edit, Trash2 } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', revenue: 4000, users: 2400 },
  { name: 'Feb', revenue: 3000, users: 1398 },
  { name: 'Mar', revenue: 2000, users: 9800 },
  { name: 'Apr', revenue: 2780, users: 3908 },
  { name: 'May', revenue: 1890, users: 4800 },
  { name: 'Jun', revenue: 2390, users: 3800 },
  { name: 'Jul', revenue: 3490, users: 4300 },
];

interface StatCardProps {
  icon: React.ElementType;
  label: string;
  value: string;
  trend: string;
  color: string;
}

const StatCard = ({ icon: Icon, label, value, trend, color }: StatCardProps) => (
  <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
    <div className="flex justify-between items-start mb-4">
      <div className={`p-3 rounded-xl ${color} bg-opacity-10`}>
        <Icon className={`w-6 h-6 ${color.replace('bg-', 'text-')}`} />
      </div>
      <div className="flex items-center gap-1 text-green-500 text-xs font-bold">
        <ArrowUpRight className="w-3 h-3" />
        {trend}
      </div>
    </div>
    <div className="text-2xl font-bold text-gray-900 mb-1">{value}</div>
    <div className="text-sm text-gray-400 font-medium">{label}</div>
  </div>
);

interface PlanCardProps {
  type: string;
  price: string;
  transactions: string;
  revenue: string;
  color: string;
  gradient: string;
}

const PlanCard = ({ type, price, transactions, revenue, color, gradient }: PlanCardProps) => (
  <div className={`p-8 rounded-[32px] relative overflow-hidden shadow-sm border border-gray-50 bg-gradient-to-br ${gradient}`}>
    <div className="relative z-10">
      <div className="flex justify-between items-center mb-6">
        <span className="text-sm font-bold text-gray-900 capitalize">{type} plan</span>
        <button className="p-2 hover:bg-black/5 rounded-full transition-colors">
          <MoreHorizontal className="w-5 h-5 text-gray-400" />
        </button>
      </div>
      <div className="text-3xl font-bold text-gray-900 mb-8">{price}<span className="text-sm font-medium text-gray-400">/mth</span></div>
      
      <div className="grid grid-cols-2 gap-4">
        <div>
          <div className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Transactions</div>
          <div className="text-lg font-bold text-gray-900">{transactions}</div>
        </div>
        <div className="text-right">
          <div className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Revenue</div>
          <div className={`text-lg font-bold ${color}`}>{revenue}</div>
        </div>
      </div>
    </div>
  </div>
);

const FinanceSection = () => {
  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            Finance & Subscriptions
            <span className="text-xs font-normal text-gray-400 border-l border-gray-300 pl-2 ml-1">
              Track your revenue and manage plan pricing
            </span>
          </h1>
        </div>
        <div className="flex items-center gap-6">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search for Anything" 
              className="pl-10 pr-4 py-2 w-64 bg-white border border-gray-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-green-500/20 shadow-sm"
            />
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 text-gray-400 hover:bg-white rounded-full transition-all shadow-sm">
              <Bell className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-3 pl-3 border-l border-gray-200">
              <div className="w-9 h-9 rounded-full bg-orange-200 overflow-hidden ring-2 ring-white shadow-sm">
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Jack" alt="User" />
              </div>
              <span className="text-sm font-bold text-gray-700">Mr. Jack</span>
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </div>
            <button className="p-2 text-gray-400 hover:bg-white rounded-full transition-all shadow-sm">
              <Settings className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard icon={DollarSign} label="Monthly Revenue" value="$544,200" trend="+12%" color="bg-green-500" />
        <StatCard icon={Users} label="Active Subscribers" value="78,410" trend="+05%" color="bg-blue-500" />
        <StatCard icon={TrendingUp} label="Avg. Conversion" value="1.2%" trend="+0.2%" color="bg-orange-500" />
        <StatCard icon={Wallet} label="Failed Payments" value="23" trend="+2%" color="bg-red-500" />
      </div>

      {/* Charts & Fees Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white p-8 rounded-3xl border border-gray-50 shadow-sm">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h3 className="font-bold text-gray-900">Revenue Breakdown</h3>
              <p className="text-xs text-gray-400">Current month stats</p>
            </div>
          </div>
          <div className="h-[250px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#22C55E" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#22C55E" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f8fafc" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 10}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 10}} />
                <Tooltip />
                <Area type="monotone" dataKey="revenue" stroke="#22C55E" fillOpacity={1} fill="url(#colorRevenue)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-8 rounded-3xl border border-gray-50 shadow-sm">
          <div className="flex items-center gap-2 mb-8">
            <div className="p-2 bg-green-50 text-green-500 rounded-lg">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-gray-900">Platform Fees</h3>
          </div>
          <div className="space-y-6">
            {[
              { label: 'Transaction', value: '$0.50' },
              { label: 'Admin %', value: '15%' },
              { label: 'Withdrawal Fee', value: '$2.00' },
              { label: 'Premium Listing', value: '$5.00' },
            ].map((fee, i) => (
              <div key={i} className="flex justify-between items-center pb-4 border-b border-gray-50 last:border-0 last:pb-0">
                <span className="text-sm text-gray-500 font-medium">{fee.label}</span>
                <span className="text-sm font-bold text-green-600">{fee.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Plans Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <PlanCard type="vendor" price="$150" transactions="42,000" revenue="$24,000" color="text-yellow-600" gradient="from-yellow-50/50 to-white" />
        <PlanCard type="basic" price="$150" transactions="42,000" revenue="$24,000" color="text-green-600" gradient="from-pink-50/50 to-white" />
        <PlanCard type="premium" price="$150" transactions="42,000" revenue="$24,000" color="text-purple-600" gradient="from-blue-50/50 to-white" />
      </div>

      {/* Recent Transactions */}
      <div className="bg-white rounded-3xl border border-gray-50 shadow-sm overflow-hidden">
        <div className="p-8 flex justify-between items-center">
          <div>
            <h3 className="font-bold text-gray-900">Recent Transactions</h3>
            <p className="text-xs text-gray-400 italic">Latest platform activity</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-100 rounded-xl text-xs font-bold text-gray-500 hover:bg-gray-50 transition-all">
            <Download className="w-4 h-4" /> Export list (as Excel)
          </button>
        </div>
        <table className="w-full">
          <thead className="bg-gray-50/50">
            <tr>
              <th className="text-left px-8 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-wider">User</th>
              <th className="text-left px-8 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Transaction ID</th>
              <th className="text-left px-8 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Date & Time</th>
              <th className="text-left px-8 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Amount/Status</th>
              <th className="text-left px-8 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Plan Type</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {[1, 2, 3, 4, 5].map((item) => (
              <tr key={item} className="hover:bg-gray-50/50 transition-colors">
                <td className="px-8 py-4">
                  <div className="flex items-center gap-3">
                    <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${item}`} className="w-8 h-8 rounded-full bg-gray-100" />
                    <span className="text-xs font-bold text-gray-900 underline decoration-gray-200">User_{item}</span>
                  </div>
                </td>
                <td className="px-8 py-4 text-xs text-gray-500 font-medium">#TRX-000000{item}</td>
                <td className="px-8 py-4 text-xs text-gray-400 font-medium">24 Dec, 2024 • 14:30</td>
                <td className="px-8 py-4">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-gray-900">$150.00</span>
                    <span className="px-2 py-1 bg-green-50 text-green-500 text-[10px] font-bold rounded-lg uppercase">Completed</span>
                  </div>
                </td>
                <td className="px-8 py-4 text-xs font-bold text-gray-900 italic underline decoration-gray-200">Premium Exclusive</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FinanceSection;
