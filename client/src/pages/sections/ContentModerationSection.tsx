import React, { useState, useMemo } from 'react';
import { Search, Bell, Settings, ChevronDown, Eye, EyeOff, Trash2, AlertTriangle, CheckCircle, X, Flag, Shield } from 'lucide-react';

interface FlaggedItem {
  id: string;
  storeName: string;
  postId: string;
  category: 'fake_receipt' | 'spam' | 'scam' | 'abuse';
  categoryLabel: string;
  severity: 'high' | 'medium' | 'low';
  description: string;
  reportCount: number;
  date: string;
  postContent: string;
}

const flaggedItems: FlaggedItem[] = [
  {
    id: '1',
    storeName: 'QuickMart Store',
    postId: 'POST-89234',
    category: 'fake_receipt',
    categoryLabel: 'Fake Receipt',
    severity: 'high',
    description: '50% off iPhone 15 Pro Max - Receipt attached',
    reportCount: 8,
    date: '2024-12-29 08:45',
    postContent: '50% off iPhone 15 Pro Max - Receipt attached'
  },
  {
    id: '2',
    storeName: 'DealZone Express',
    postId: 'POST-89193',
    category: 'spam',
    categoryLabel: 'Spam',
    severity: 'medium',
    description: 'BUY NOW!! LIMITED TIME OFFER!!!',
    reportCount: 3,
    date: '2024-12-29 07:30',
    postContent: 'BUY NOW!! LIMITED TIME OFFER!!! CLICK HERE FOR AMAZING DEALS!!!'
  },
  {
    id: '3',
    storeName: 'LuxuryBrands Hub',
    postId: 'POST-89156',
    category: 'scam',
    categoryLabel: 'Scam',
    severity: 'high',
    description: 'Authentic Rolex watch - Only $99',
    reportCount: 12,
    date: '2024-12-29 06:15',
    postContent: 'Authentic Rolex watch - Only $99. Limited stock available!'
  },
  {
    id: '4',
    storeName: 'TechWorld Shop',
    postId: 'POST-89134',
    category: 'abuse',
    categoryLabel: 'Abuse',
    severity: 'low',
    description: 'Customer complaint response',
    reportCount: 2,
    date: '2024-12-29 05:00',
    postContent: 'Customer complaint response with inappropriate language'
  },
  {
    id: '5',
    storeName: 'SportGear Pro',
    postId: 'POST-89098',
    category: 'fake_receipt',
    categoryLabel: 'Fake Receipt',
    severity: 'medium',
    description: 'Nike Air Jordan - Receipt from authorized dealer',
    reportCount: 4,
    date: '2024-12-28 23:45',
    postContent: 'Nike Air Jordan - Receipt from authorized dealer'
  }
];

interface FilterTab {
  id: string;
  label: string;
  filterType: string;
}

const filterTabs: FilterTab[] = [
  { id: 'all', label: 'All', filterType: 'all' },
  { id: 'fake_receipt', label: 'Fake Receipt', filterType: 'fake_receipt' },
  { id: 'spam', label: 'Spam', filterType: 'spam' },
  { id: 'scam', label: 'Scam', filterType: 'scam' },
  { id: 'abuse', label: 'Abuse', filterType: 'abuse' },
];

const getSeverityColor = (severity: string) => {
  switch (severity) {
    case 'high': return { bg: '#FEE2E2', text: '#DC2626', dot: '#EF4444', border: '#EF4444' };
    case 'medium': return { bg: '#FEF3C7', text: '#D97706', dot: '#F59E0B', border: '#F59E0B' };
    case 'low': return { bg: '#DCFCE7', text: '#16A34A', dot: '#22C55E', border: '#22C55E' };
    default: return { bg: '#F3F4F6', text: '#6B7280', dot: '#9CA3AF', border: '#9CA3AF' };
  }
};

const ContentModerationSection = () => {
  const [selectedItem, setSelectedItem] = useState(flaggedItems[0]);
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = useMemo(() => {
    let items = flaggedItems;
    if (activeFilter !== 'all') {
      items = items.filter(item => item.category === activeFilter);
    }
    if (searchQuery) {
      items = items.filter(item => 
        item.storeName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.postId.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return items;
  }, [activeFilter, searchQuery]);

  const handleFilterChange = (filterId: string) => {
    setActiveFilter(filterId);
    const filtered = filterId === 'all' ? flaggedItems : flaggedItems.filter(i => i.category === filterId);
    if (filtered.length > 0 && !filtered.find(i => i.id === selectedItem.id)) {
      setSelectedItem(filtered[0]);
    }
  };

  const severityColors = getSeverityColor(selectedItem.severity);

  return (
    <div className="flex-grow p-6 bg-[#F8FAFC] min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-5">
        <div className="flex items-center gap-3">
          <h1 className="text-[20px] font-semibold text-gray-900">Content Moderation</h1>
          <span className="text-[13px] text-gray-400 border-l border-gray-300 pl-3">
            Review and moderate flagged content
          </span>
        </div>
        <div className="flex items-center gap-4">
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

      {/* Search and Filter Row */}
      <div className="flex items-center justify-between mb-5">
        <div className="relative">
          <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search by vendor or post ID..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 pr-4 py-2 w-[280px] bg-white border border-gray-200 rounded-lg text-[13px] focus:outline-none focus:ring-2 focus:ring-[#22C55E]/20"
          />
        </div>
        
        {/* Filter Tabs */}
        <div className="flex items-center gap-2">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => handleFilterChange(tab.id)}
                className={`px-4 py-1.5 rounded-md text-[13px] font-medium transition-all ${
                  isActive
                    ? 'bg-[#002B20] text-white'
                    : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex gap-5">
        {/* Left Column - Flagged Items */}
        <div className="w-[380px] flex-shrink-0 space-y-3">
          {filteredItems.map((item) => {
            const colors = getSeverityColor(item.severity);
            const isSelected = selectedItem.id === item.id;
            
            return (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className={`bg-white rounded-xl p-4 cursor-pointer transition-all border-l-4 shadow-sm ${
                  isSelected ? 'ring-2 ring-[#22C55E]/30 shadow-md' : 'hover:shadow-md'
                }`}
                style={{ borderLeftColor: colors.border }}
              >
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-2">
                    <span 
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: colors.dot }}
                    ></span>
                    <span 
                      className="text-[10px] font-bold px-2 py-0.5 rounded uppercase"
                      style={{ backgroundColor: colors.bg, color: colors.text }}
                    >
                      {item.severity}
                    </span>
                  </div>
                  <span className="text-[12px] text-gray-400">{item.reportCount} reports</span>
                </div>
                
                <div className="mb-1">
                  <h4 className="text-[14px] font-semibold text-gray-900">{item.storeName}</h4>
                  <p className="text-[11px] text-gray-400">{item.categoryLabel} • {item.postId}</p>
                </div>
                
                <p className="text-[13px] text-gray-600 leading-snug">{item.description}</p>
              </div>
            );
          })}
        </div>

        {/* Right Column - Detail Panel */}
        <div className="flex-1 bg-white rounded-xl p-6 shadow-sm">
          {/* Header with severity badge */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <span 
                className="text-[10px] font-bold px-3 py-1 rounded uppercase"
                style={{ backgroundColor: severityColors.bg, color: severityColors.text }}
              >
                {selectedItem.severity} Severity
              </span>
              <span className="text-[12px] text-gray-400 bg-gray-100 px-2 py-0.5 rounded">
                {selectedItem.postId}
              </span>
            </div>
            <div className="text-right">
              <div className="text-[28px] font-bold text-[#EF4444]">{selectedItem.reportCount}</div>
              <div className="text-[11px] text-gray-400">Reports</div>
              <div className="text-[11px] text-gray-400">{selectedItem.date}</div>
            </div>
          </div>

          {/* Store Info */}
          <div className="mb-6">
            <h2 className="text-[18px] font-semibold text-gray-900 mb-1">{selectedItem.storeName}</h2>
            <div className="flex items-center gap-2 text-[13px] text-gray-500">
              <Flag className="w-4 h-4" />
              <span>{selectedItem.categoryLabel}</span>
            </div>
          </div>

          {/* Post Content */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-5 h-5 rounded-full bg-[#22C55E] flex items-center justify-center">
                <Eye className="w-3 h-3 text-white" />
              </div>
              <h3 className="text-[15px] font-semibold text-gray-900">Post Content</h3>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-[13px] text-gray-700">{selectedItem.postContent}</p>
            </div>
          </div>

          {/* Moderation Actions */}
          <div className="mb-4">
            <h3 className="text-[15px] font-semibold text-gray-900 mb-4">Moderation Actions</h3>
            
            <div className="grid grid-cols-2 gap-3 mb-3">
              <button className="flex items-center justify-center gap-2 bg-gray-100 text-gray-700 px-4 py-3 rounded-lg text-[13px] font-medium hover:bg-gray-200 transition-colors">
                <EyeOff className="w-4 h-4" />
                Hide Post
              </button>
              <button className="flex items-center justify-center gap-2 bg-[#EF4444] text-white px-4 py-3 rounded-lg text-[13px] font-medium hover:bg-[#DC2626] transition-colors">
                <Trash2 className="w-4 h-4" />
                Remove Post
              </button>
              <button className="flex items-center justify-center gap-2 bg-[#F59E0B] text-white px-4 py-3 rounded-lg text-[13px] font-medium hover:bg-[#D97706] transition-colors">
                <AlertTriangle className="w-4 h-4" />
                Warn Vendor
              </button>
              <button className="flex items-center justify-center gap-2 bg-gray-100 text-gray-700 px-4 py-3 rounded-lg text-[13px] font-medium hover:bg-gray-200 transition-colors">
                <Shield className="w-4 h-4" />
                Escalate Case
              </button>
            </div>
            
            <button className="w-full flex items-center justify-center gap-2 bg-[#22C55E] text-white px-4 py-3 rounded-lg text-[13px] font-medium hover:bg-[#16A34A] transition-colors">
              <CheckCircle className="w-4 h-4" />
              Dismiss - No Violation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentModerationSection;
