import React from 'react';
import { Search, Bell, Settings, ChevronDown, DollarSign, Users, TrendingUp, Wallet, ArrowUpRight, Download, MoreHorizontal } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

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

const chartData = [
  { name: 'Jul', Subscriptions: 240, Ads: 360, Fees: 420 },
  { name: 'Aug', Subscriptions: 260, Ads: 380, Fees: 450 },
  { name: 'Sep', Subscriptions: 290, Ads: 410, Fees: 480 },
  { name: 'Oct', Subscriptions: 310, Ads: 440, Fees: 510 },
  { name: 'Nov', Subscriptions: 330, Ads: 470, Fees: 540 },
  { name: 'Dec', Subscriptions: 350, Ads: 490, Fees: 560 },
];

const transactionsData = [
  { id: '1', user: 'John Doe', role: 'vendor', transferId: 'S8XX5455455', date: '10 Dec 2012', method: '0077 **** **** 3814 (Visa)', status: 'Completed', amount: '+$400', source: 'Product posting' },
  { id: '2', user: 'John Doe', role: 'vendor', transferId: 'S8XX6456465', date: '10 Dec 2012', method: '0077 **** **** 3814 (Visa)', status: 'Completed', amount: '+$400', source: 'Standard plan' },
  { id: '3', user: 'John Doe', role: 'vendor', transferId: 'S8XX6456465', date: '10 Dec 2012', method: '0077 **** **** 3814 (Visa)', status: 'Completed', amount: '+$400', source: 'Basic' },
  { id: '4', user: 'John Doe', role: 'vendor', transferId: 'S8XX5455455', date: '10 Dec 2012', method: '0077 **** **** 3814 (Visa)', status: 'Completed', amount: '+$400', source: 'Product posting' },
  { id: '5', user: 'John Doe', role: 'vendor', transferId: 'S8XX6456465', date: '10 Dec 2012', method: '0077 **** **** 3814 (Visa)', status: 'Completed', amount: '+$400', source: 'Product posting' },
  { id: '6', user: 'John Doe', role: 'vendor', transferId: 'S8XX5455455', date: '10 Dec 2012', method: '0077 **** **** 3814 (Visa)', status: 'Completed', amount: '+$400', source: 'Product posting' },
  { id: '7', user: 'John Doe', role: 'vendor', transferId: 'S8XX5455455', date: '10 Dec 2012', method: '0077 **** **** 3814 (Visa)', status: 'Completed', amount: '+$400', source: 'Product posting' },
];

const FinanceSection = () => {
  const [currentPage, setCurrentPage] = React.useState(2);

  return (
    <div className="p-8 space-y-8 bg-[#F8FAFC]">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-[#2D3748] flex items-center gap-2">
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
              className="pl-10 pr-4 py-2 w-64 bg-white border border-gray-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-[#22C55E]/20 shadow-sm"
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
              <span className="text-sm font-bold text-[#2D3748]">Mr. Jack</span>
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
        <StatCard icon={TrendingUp} label="Avg. Conversion" value="1.3%" trend="+0.2%" color="bg-orange-500" />
        <StatCard icon={Wallet} label="Failed Payments" value="23" trend="+2%" color="bg-red-500" />
      </div>

      {/* Charts & Fees Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 bg-white p-8 rounded-3xl border border-gray-50 shadow-sm">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h3 className="text-lg font-bold text-[#2D3748]">Revenue Breakdown</h3>
              <p className="text-xs text-gray-400">6 month trend</p>
            </div>
          </div>
          <div className="h-[280px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorSub" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#22C55E" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#22C55E" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorAds" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorFees" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#F59E0B" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#F59E0B" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94A3B8', fontSize: 11}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#94A3B8', fontSize: 11}} tickFormatter={(value) => `$${value}k`} />
                <Tooltip />
                <Area type="monotone" dataKey="Subscriptions" stroke="#22C55E" fillOpacity={1} fill="url(#colorSub)" strokeWidth={2} />
                <Area type="monotone" dataKey="Ads" stroke="#3B82F6" fillOpacity={1} fill="url(#colorAds)" strokeWidth={2} />
                <Area type="monotone" dataKey="Fees" stroke="#F59E0B" fillOpacity={1} fill="url(#colorFees)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-center gap-8 mt-6">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 border-2 border-[#22C55E] rounded-sm transform rotate-45"></div>
              <span className="text-xs font-bold text-[#22C55E]">Subscriptions</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 border-2 border-[#3B82F6] rounded-sm transform rotate-45"></div>
              <span className="text-xs font-bold text-[#3B82F6]">Ads</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 border-2 border-[#F59E0B] rounded-sm transform rotate-45"></div>
              <span className="text-xs font-bold text-[#F59E0B]">Fees</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 bg-white p-8 rounded-3xl border border-gray-50 shadow-sm">
          <div className="flex items-center gap-2 mb-8">
            <div className="p-2 bg-[#F0FDF4] text-[#22C55E] rounded-lg">
              <Wallet className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#2D3748]">Platform Fees</h3>
          </div>
          <div className="space-y-4">
            {[
              { label: 'Posting Fee', value: '$0.99' },
              { label: 'Ad Fee %', value: '15%' },
              { label: 'Admin Chat Fee', value: '$2.99' },
              { label: 'Premium Listing', value: '$4.99' },
            ].map((fee, i) => (
              <div key={i} className="flex justify-between items-center p-4 bg-[#F8FAFC] rounded-2xl group hover:bg-[#F0FDF4] transition-all">
                <span className="text-sm text-[#4A5568] font-bold">{fee.label}</span>
                <span className="text-sm font-bold text-[#22C55E]">{fee.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Plans Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <PlanCard type="vendor" price="$150" transactions="42,000" revenue="$24,000" color="text-[#F59E0B]" gradient="from-[#FFFBEB] to-white" />
        <PlanCard type="basic" price="$150" transactions="42,000" revenue="$24,000" color="text-[#22C55E]" gradient="from-[#F0FDF4] to-white" />
        <PlanCard type="premium exclusive" price="$150" transactions="42,000" revenue="$24,000" color="text-[#8B5CF6]" gradient="from-[#F5F3FF] to-white" />
      </div>

      {/* Recent Transactions */}
      <div className="bg-white rounded-[32px] border border-gray-50 shadow-sm overflow-hidden">
        <div className="p-8 flex justify-between items-center">
          <div>
            <h3 className="text-xl font-bold text-[#2D3748]">Recent Transactions</h3>
            <p className="text-sm text-gray-400">Latest financial activity</p>
          </div>
          <button className="flex items-center gap-2 px-6 py-2.5 bg-[#F1F5F9] hover:bg-[#E2E8F0] rounded-xl text-xs font-bold text-[#475569] transition-all">
            <Download className="w-4 h-4" /> Export All List To Excel
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-[#F8FAFC]">
                <th className="px-8 py-4 text-[11px] font-bold text-[#94A3B8] uppercase tracking-wider">User Id</th>
                <th className="px-8 py-4 text-[11px] font-bold text-[#94A3B8] uppercase tracking-wider">Transfer ID</th>
                <th className="px-8 py-4 text-[11px] font-bold text-[#94A3B8] uppercase tracking-wider">Date & Time</th>
                <th className="px-8 py-4 text-[11px] font-bold text-[#94A3B8] uppercase tracking-wider">Payment Method</th>
                <th className="px-8 py-4 text-[11px] font-bold text-[#94A3B8] uppercase tracking-wider">Status</th>
                <th className="px-8 py-4 text-[11px] font-bold text-[#94A3B8] uppercase tracking-wider">Amount</th>
                <th className="px-8 py-4 text-[11px] font-bold text-[#94A3B8] uppercase tracking-wider">Revenue From</th>
                <th className="px-8 py-4 text-[11px] font-bold text-[#94A3B8] uppercase tracking-wider text-right">More</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#F1F5F9]">
              {transactionsData.map((trx) => (
                <tr key={trx.id} className="hover:bg-[#F8FAFC] transition-colors group">
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-3">
                      <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${trx.user}`} className="w-9 h-9 rounded-full bg-gray-100" />
                      <div>
                        <div className="text-[13px] font-bold text-[#2D3748]">{trx.user}</div>
                        <div className="text-[10px] text-gray-400 font-medium">{trx.role}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-5 text-[13px] text-[#4A5568] font-medium uppercase">{trx.transferId}</td>
                  <td className="px-8 py-5 text-[13px] text-[#4A5568] font-medium">{trx.date}</td>
                  <td className="px-8 py-5 text-[13px] text-[#4A5568] font-medium">{trx.method}</td>
                  <td className="px-8 py-5">
                    <span className="px-3 py-1 bg-[#F0FDF4] text-[#22C55E] text-[11px] font-bold rounded-full">
                      {trx.status}
                    </span>
                  </td>
                  <td className="px-8 py-5 text-[14px] font-bold text-[#22C55E]">{trx.amount}</td>
                  <td className="px-8 py-5 text-[13px] text-[#4A5568] font-bold">{trx.source}</td>
                  <td className="px-8 py-5 text-right">
                    <button className="p-1 hover:bg-gray-100 rounded-full transition-colors">
                      <MoreHorizontal className="w-5 h-5 text-gray-300" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="p-8 border-t border-[#F1F5F9] flex items-center justify-between">
          <div className="text-[13px] font-bold text-[#94A3B8]">Showing 1 to 100 list in 1 page</div>
          <div className="flex items-center gap-2">
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-[#F8FAFC] text-gray-400 hover:bg-[#F1F5F9] transition-all">
              <ChevronDown className="w-5 h-5 rotate-90" />
            </button>
            <div className="flex items-center gap-1.5">
              {[1, 2, 3, 4, 5].map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-10 h-10 rounded-full text-[13px] font-bold transition-all ${
                    currentPage === page
                      ? 'bg-[#22C55E] text-white shadow-lg shadow-[#22C55E]/20'
                      : 'text-[#94A3B8] hover:text-[#2D3748]'
                  }`}
                >
                  {page.toString().padStart(2, '0')}
                </button>
              ))}
            </div>
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-[#F8FAFC] text-gray-400 hover:bg-[#F1F5F9] transition-all">
              <ChevronDown className="w-5 h-5 -rotate-90" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinanceSection;
