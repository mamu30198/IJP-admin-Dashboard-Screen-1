import React, { useState } from 'react';
import { Sidebar } from "@/components/Sidebar";
import { Bell, ChevronDown, Settings, Search, Trash2, Clock, MessageCircle, TrendingUp, BarChart3, Users, User, ArrowUpRight, AlertTriangle, X } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Cell } from 'recharts';
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";

const sentimentData = [
  { name: 'Week 1', positive: 65, neutral: 25, negative: 10 },
  { name: 'Week 2', positive: 70, neutral: 22, negative: 8 },
  { name: 'Week 3', positive: 75, neutral: 18, negative: 7 },
  { name: 'Week 4', positive: 80, neutral: 15, negative: 5 },
  { name: 'Week 5', positive: 82, neutral: 14, negative: 4 },
  { name: 'Week 6', positive: 85, neutral: 12, negative: 3 },
];

const topicsData = [
  { name: 'Build Quality', mentions: 156, percentage: 92, color: '#62a230' },
  { name: 'Price Value', mentions: 124, percentage: 78, color: '#f59e0b' },
  { name: 'Performance', mentions: 93, percentage: 55, color: '#62a230' },
  { name: 'Customer Service', mentions: 87, percentage: 88, color: '#62a230' },
  { name: 'Delivery Speed', mentions: 72, percentage: 45, color: '#f97316' },
];

const comments = [
  {
    id: '1',
    user: { name: 'John Doe', avatar: 'John', role: 'Vendor' },
    post: { title: 'Amazing Laptop Deal', image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=100&h=100&fit=crop' },
    comment: 'Great deal! 🔥🔥🔥 Thanks for sharing',
    timestamp: '20 min ago'
  },
  {
    id: '2',
    user: { name: 'John Doe', avatar: 'John', role: 'Vendor' },
    post: { title: 'Amazing Laptop Deal', image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=100&h=100&fit=crop' },
    comment: 'Great deal! 🔥🔥🔥 Thanks for sharing',
    timestamp: '20 min ago'
  },
  {
    id: '3',
    user: { name: 'John Doe', avatar: 'John', role: 'Vendor' },
    post: { title: 'Amazing Laptop Deal', image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=100&h=100&fit=crop' },
    comment: 'Great deal! 🔥🔥🔥 Thanks for sharing',
    timestamp: '20 min ago'
  },
  {
    id: '4',
    user: { name: 'John Doe', avatar: 'John', role: 'Vendor' },
    post: { title: 'Amazing Laptop Deal', image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=100&h=100&fit=crop' },
    comment: 'Great deal! 🔥🔥🔥 Thanks for sharing',
    timestamp: '20 min ago'
  },
  {
    id: '5',
    user: { name: 'John Doe', avatar: 'John', role: 'Vendor' },
    post: { title: 'Amazing Laptop Deal', image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=100&h=100&fit=crop' },
    comment: 'Great deal! 🔥🔥🔥 Thanks for sharing',
    timestamp: '20 min ago'
  },
  {
    id: '6',
    user: { name: 'John Doe', avatar: 'John', role: 'Vendor' },
    post: { title: 'Amazing Laptop Deal', image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=100&h=100&fit=crop' },
    comment: 'Great deal! 🔥🔥🔥 Thanks for sharing',
    timestamp: '20 min ago'
  },
  {
    id: '7',
    user: { name: 'John Doe', avatar: 'John', role: 'Vendor' },
    post: { title: 'Amazing Laptop Deal', image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=100&h=100&fit=crop' },
    comment: 'Great deal! 🔥🔥🔥 Thanks for sharing',
    timestamp: '20 min ago'
  },
  {
    id: '8',
    user: { name: 'John Doe', avatar: 'John', role: 'Vendor' },
    post: { title: 'Amazing Laptop Deal', image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=100&h=100&fit=crop' },
    comment: 'Great deal! 🔥🔥🔥 Thanks for sharing',
    timestamp: '20 min ago'
  },
  {
    id: '9',
    user: { name: 'John Doe', avatar: 'John', role: 'Vendor' },
    post: { title: 'Amazing Laptop Deal', image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=100&h=100&fit=crop' },
    comment: 'Great deal! 🔥🔥🔥 Thanks for sharing',
    timestamp: '20 min ago'
  }
];

export default function CommentsPage() {
  const [activeFilter, setActiveFilter] = useState('All User');
  const [deleteReasonDialogOpen, setDeleteReasonDialogOpen] = useState(false);
  const [confirmDeleteDialogOpen, setConfirmDeleteDialogOpen] = useState(false);
  const [selectedReason, setSelectedReason] = useState('Inappropriate Content');
  const [customReason, setCustomReason] = useState('');
  const [currentPage, setCurrentPage] = useState(2);

  const reasons = [
    'Inappropriate Content',
    'Spam Content',
    'Inappropriate Content',
    'Inappropriate Content'
  ];

  const handleReasonSubmit = () => {
    setDeleteReasonDialogOpen(false);
    setConfirmDeleteDialogOpen(true);
  };

  const handleFinalDelete = () => {
    // Logic to delete comment
    setConfirmDeleteDialogOpen(false);
  };

  return (
    <div className="flex min-h-screen bg-[#F8FAFC]">
      <Sidebar activeModule="Comments" />
      
      <main className="flex-grow p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-3">
            <h1 className="text-[24px] font-bold text-[#222f36]">Comments</h1>
            <span className="text-[13px] text-gray-400 border-l border-gray-300 pl-4 h-5 flex items-center">
              Manage and moderate user comments
            </span>
          </div>
          <div className="flex items-center gap-6">
            <button className="relative p-2 text-gray-400 hover:bg-white rounded-full transition-all shadow-sm">
              <Bell className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-3 pl-3 border-l border-gray-200">
              <Avatar className="w-9 h-9 border-2 border-white shadow-sm ring-1 ring-gray-100">
                <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Jack" />
                <AvatarFallback>JK</AvatarFallback>
              </Avatar>
              <div className="flex items-center gap-1">
                <span className="text-[13px] font-bold text-[#222f36]">Mr. Jack</span>
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </div>
            </div>
            <button className="p-2 text-gray-400 hover:bg-white rounded-full transition-all shadow-sm">
              <Settings className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* AI Sentiment Analysis Card */}
        <div className="bg-white rounded-[24px] p-8 shadow-sm border border-gray-50 mb-8">
          <div className="mb-8">
            <h2 className="text-[18px] font-bold text-[#222f36]">AI Comment Sentiment Analysis</h2>
            <p className="text-[13px] text-[#7b848f]">Deep analysis of customer feedback from posts & comments</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Sentiment Trend */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <TrendingUp className="w-4 h-4 text-[#62a230]" />
                <h3 className="text-[14px] font-bold text-[#222f36]">Sentiment Trend Over Time</h3>
              </div>
              <div className="h-[200px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={sentimentData}>
                    <defs>
                      <linearGradient id="colorPositive" x1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#62a230" stopOpacity={0.1}/>
                        <stop offset="95%" stopColor="#62a230" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                    <XAxis 
                      dataKey="name" 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{fill: '#94a3b8', fontSize: 10}}
                    />
                    <YAxis 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{fill: '#94a3b8', fontSize: 10}}
                    />
                    <Tooltip />
                    <Area 
                      type="monotone" 
                      dataKey="positive" 
                      stroke="#62a230" 
                      fillOpacity={1} 
                      fill="url(#colorPositive)" 
                      strokeWidth={2}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="neutral" 
                      stroke="#94a3b8" 
                      fill="transparent" 
                      strokeWidth={2}
                      strokeDasharray="5 5"
                    />
                    <Area 
                      type="monotone" 
                      dataKey="negative" 
                      stroke="#ef4444" 
                      fill="transparent" 
                      strokeWidth={2}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              <div className="flex justify-center gap-6 mt-4">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#62a230]"></div>
                  <span className="text-[11px] font-bold text-[#7b848f]">Positive</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#94a3b8]"></div>
                  <span className="text-[11px] font-bold text-[#7b848f]">Neutral</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ef4444]"></div>
                  <span className="text-[11px] font-bold text-[#7b848f]">Negative</span>
                </div>
              </div>
            </div>

            {/* Top Topics */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <BarChart3 className="w-4 h-4 text-[#62a230]" />
                <h3 className="text-[14px] font-bold text-[#222f36]">Top Mentioned Topics</h3>
              </div>
              <div className="space-y-4">
                {topicsData.map((topic, index) => (
                  <div key={topic.name} className="flex items-center gap-4">
                    <span className="text-[12px] font-bold text-[#7b848f] w-4">{index + 1}</span>
                    <div className="flex-grow">
                      <div className="flex justify-between mb-1.5">
                        <span className="text-[12px] font-bold text-[#222f36]">{topic.name}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-[12px] font-bold text-[#222f36]">{topic.mentions} mentions</span>
                          <span className="text-[11px] font-bold text-[#62a230] flex items-center gap-0.5">
                            <ArrowUpRight className="w-3 h-3" />
                            {topic.percentage}%
                          </span>
                        </div>
                      </div>
                      <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                        <div 
                          className="h-full rounded-full transition-all duration-1000"
                          style={{ width: `${topic.percentage}%`, backgroundColor: topic.color }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Filters & Table Card */}
        <div className="bg-white rounded-[24px] shadow-sm border border-gray-50 overflow-hidden">
          {/* Filters Bar */}
          <div className="flex items-center justify-between p-4 border-b border-gray-50 bg-[#F8FAFC]/30">
            <div className="flex items-center gap-2">
              {['All User', 'Only Users', 'Vendors'].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-6 py-2 rounded-xl text-[13px] font-bold transition-all ${
                    activeFilter === filter
                      ? 'bg-[#62a230] text-white shadow-md shadow-[#62a230]/20'
                      : 'text-[#7b848f] hover:text-[#222f36] bg-white border border-gray-100'
                  }`}
                >
                  {filter}
                </button>
              ))}
              <button className="flex items-center gap-2 px-6 py-2 rounded-xl text-[13px] font-bold text-[#ef4444] bg-white border border-[#ef4444]/20 hover:bg-[#ef4444]/5 transition-all">
                <AlertTriangle className="w-4 h-4" />
                Spam Comments
              </button>
            </div>
            
            <div className="relative w-[300px]">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input 
                type="text"
                placeholder="Search by Comments by keyword"
                className="w-full h-10 pl-11 pr-4 bg-white border border-gray-100 rounded-xl text-[13px] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#62a230]/10 transition-all"
              />
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-[#f8fafc]/50">
                  <th className="text-left px-6 py-4 text-[11px] font-bold text-[#7b848f] uppercase tracking-wider">Posted By</th>
                  <th className="text-left px-6 py-4 text-[11px] font-bold text-[#7b848f] uppercase tracking-wider">Post</th>
                  <th className="text-left px-6 py-4 text-[11px] font-bold text-[#7b848f] uppercase tracking-wider">Comment</th>
                  <th className="text-right px-6 py-4 text-[11px] font-bold text-[#7b848f] uppercase tracking-wider">More</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {comments.map((item) => (
                  <tr key={item.id} className="hover:bg-[#f8fafc]/50 transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <Avatar className="w-9 h-9 border border-gray-100 shadow-sm">
                          <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${item.user.avatar}`} />
                          <AvatarFallback>U</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col">
                          <span className="text-[13px] font-bold text-[#222f36]">{item.user.name}</span>
                          <span className="text-[11px] text-[#7b848f] font-medium">{item.user.role}</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg overflow-hidden border border-gray-100 shadow-sm">
                          <img src={item.post.image} alt={item.post.title} className="w-full h-full object-cover" />
                        </div>
                        <span className="text-[13px] font-bold text-[#222f36] truncate max-w-[150px]">{item.post.title}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col">
                        <p className="text-[13px] font-medium text-[#222f36] leading-relaxed">{item.comment}</p>
                        <div className="flex items-center gap-1.5 mt-1 text-[#7b848f]">
                          <Clock className="w-3.5 h-3.5" />
                          <span className="text-[11px] font-medium">{item.timestamp}</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button 
                        onClick={() => setDeleteReasonDialogOpen(true)}
                        className="p-2 text-[#ef4444] hover:bg-[#ef4444]/5 rounded-lg transition-all"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Footer / Pagination */}
          <div className="flex items-center justify-between p-6 border-t border-gray-50 bg-[#F8FAFC]/30">
            <p className="text-[13px] font-bold text-[#7b848f]">Showing 1 to 100 list in 1 page</p>
            <div className="flex items-center gap-2">
              <button 
                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                className="p-2 text-gray-400 hover:text-[#222f36] disabled:opacity-30" 
                disabled={currentPage === 1}
              >
                <ChevronDown className="w-5 h-5 rotate-90" />
              </button>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={cn(
                      "w-8 h-8 rounded-full text-[13px] font-bold transition-all",
                      currentPage === page
                        ? "bg-[#62a230] text-white shadow-md shadow-[#62a230]/20"
                        : "text-gray-400 hover:text-[#222f36]"
                    )}
                  >
                    {page.toString().padStart(2, '0')}
                  </button>
                ))}
              </div>
              <button 
                onClick={() => setCurrentPage(prev => Math.min(5, prev + 1))}
                className="p-2 text-gray-400 hover:text-[#222f36] disabled:opacity-30"
                disabled={currentPage === 5}
              >
                <ChevronDown className="w-5 h-5 -rotate-90" />
              </button>
            </div>
          </div>
        </div>

        {/* Step 1: Why Deleting Dialog */}
        <Dialog open={deleteReasonDialogOpen} onOpenChange={setDeleteReasonDialogOpen}>
          <DialogContent className="max-w-[550px] p-10 rounded-[24px] border-none gap-0">
            <button 
              onClick={() => setDeleteReasonDialogOpen(false)}
              className="absolute right-6 top-6 p-2 text-gray-400 hover:bg-gray-50 rounded-full transition-all"
            >
              <X className="w-5 h-5" />
            </button>

            <DialogHeader className="mb-8 text-left">
              <DialogTitle className="text-[28px] font-bold text-[#222f36] leading-tight">
                Why Are You Deleting This Comment?
              </DialogTitle>
            </DialogHeader>

            <div className="space-y-3 mb-6">
              {reasons.map((reason, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedReason(reason)}
                  className={cn(
                    "w-full flex items-center justify-between p-4 rounded-xl border transition-all text-[15px] font-medium text-left",
                    selectedReason === reason 
                      ? "border-[#62a230] bg-[#62a230]/5 text-[#222f36]" 
                      : "border-gray-100 text-[#7b848f] hover:border-gray-200"
                  )}
                >
                  {reason}
                  <div className={cn(
                    "w-5 h-5 rounded-full border-2 flex items-center justify-center",
                    selectedReason === reason ? "border-[#62a230]" : "border-gray-200"
                  )}>
                    {selectedReason === reason && <div className="w-2.5 h-2.5 rounded-full bg-[#62a230]" />}
                  </div>
                </button>
              ))}
            </div>

            <div className="mb-8">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[15px] font-bold text-[#222f36]">Custom Reason</span>
                <button
                  onClick={() => setSelectedReason('Custom')}
                  className={cn(
                    "w-5 h-5 rounded-full border-2 flex items-center justify-center",
                    selectedReason === 'Custom' ? "border-[#62a230]" : "border-gray-200"
                  )}
                >
                  {selectedReason === 'Custom' && <div className="w-2.5 h-2.5 rounded-full bg-[#62a230]" />}
                </button>
              </div>
              <textarea
                placeholder="Write something"
                value={customReason}
                onFocus={() => setSelectedReason('Custom')}
                onChange={(e) => setCustomReason(e.target.value)}
                className="w-full h-24 p-4 rounded-xl border border-gray-100 text-[13px] focus:outline-none focus:ring-2 focus:ring-[#62a230]/10 focus:border-[#62a230] transition-all resize-none"
              />
            </div>

            <DialogFooter>
              <button 
                onClick={handleReasonSubmit}
                className="w-full py-4 bg-[#62a230] text-white rounded-xl text-[15px] font-bold hover:bg-[#548a29] transition-all shadow-lg shadow-[#62a230]/20"
              >
                Submit
              </button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Step 2: Confirm Delete Dialog */}
        <Dialog open={confirmDeleteDialogOpen} onOpenChange={setConfirmDeleteDialogOpen}>
          <DialogContent className="max-w-[550px] p-12 rounded-[24px] border-none gap-0">
            <button 
              onClick={() => setConfirmDeleteDialogOpen(false)}
              className="absolute right-6 top-6 p-2 text-gray-400 hover:bg-gray-50 rounded-full transition-all"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center">
              <h2 className="text-[28px] font-bold text-[#222f36] mb-4">
                Are you sure you want to delete this Comment?
              </h2>
              <p className="text-[15px] text-[#7b848f] mb-10 leading-relaxed px-4">
                This action cannot be undone. The comment and all associated data will be permanently removed from our servers.
              </p>

              <div className="flex items-center gap-4">
                <button 
                  onClick={handleFinalDelete}
                  className="flex-1 py-4 bg-[#62a230] text-white rounded-xl text-[16px] font-bold hover:bg-[#548a29] transition-all shadow-lg shadow-[#62a230]/20"
                >
                  Yes, Delete
                </button>
                <button 
                  onClick={() => setConfirmDeleteDialogOpen(false)}
                  className="flex-1 py-4 bg-[#F1F5F9] text-[#222f36] rounded-xl text-[16px] font-bold hover:bg-[#E2E8F0] transition-all"
                >
                  No, Keep It
                </button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </main>
    </div>
  );
}