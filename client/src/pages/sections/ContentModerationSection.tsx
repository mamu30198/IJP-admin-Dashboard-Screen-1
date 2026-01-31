import React, { useState, useMemo } from 'react';
import { Search, Bell, Settings, ChevronDown, Eye, EyeOff, Trash2, AlertTriangle, CheckCircle, Flag, Shield } from 'lucide-react';

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

const getSeverityStyles = (severity: string) => {
  switch (severity) {
    case 'high': 
      return { 
        dot: '#EF4444', 
        text: '#EF4444',
        cardBorder: '#EF4444',
        cardBg: '#FEF2F2',
        badge: { bg: '#FEE2E2', text: '#DC2626' }
      };
    case 'medium': 
      return { 
        dot: '#F59E0B', 
        text: '#F59E0B',
        cardBorder: '#F59E0B',
        cardBg: '#FFFBEB',
        badge: { bg: '#FEF3C7', text: '#D97706' }
      };
    case 'low': 
      return { 
        dot: '#22C55E', 
        text: '#22C55E',
        cardBorder: '#3B82F6',
        cardBg: '#EFF6FF',
        badge: { bg: '#DCFCE7', text: '#16A34A' }
      };
    default: 
      return { 
        dot: '#9CA3AF', 
        text: '#6B7280',
        cardBorder: '#9CA3AF',
        cardBg: '#F9FAFB',
        badge: { bg: '#F3F4F6', text: '#6B7280' }
      };
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

  const severityStyles = getSeverityStyles(selectedItem.severity);

  return (
    <div className="flex-grow p-6 bg-[#F8FAFC] min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
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
      <div className="flex items-center gap-4 mb-5">
        <div className="relative flex-1">
          <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search by vendor or post ID..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 pr-4 py-2.5 w-full bg-white border border-gray-200 rounded-lg text-[13px] focus:outline-none focus:ring-2 focus:ring-[#22C55E]/20"
          />
        </div>
        
        {/* Filter Tabs */}
        <div className="flex items-center gap-1">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => handleFilterChange(tab.id)}
                className={`px-4 py-2 rounded text-[13px] font-medium transition-all ${
                  isActive
                    ? 'bg-[#3B82F6] text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-50'
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
        <div className="w-[320px] flex-shrink-0 space-y-3">
          {filteredItems.map((item) => {
            const styles = getSeverityStyles(item.severity);
            const isSelected = selectedItem.id === item.id;
            
            return (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className={`rounded-xl overflow-hidden cursor-pointer transition-all shadow-sm ${
                  isSelected ? 'ring-2 ring-[#22C55E]/40 shadow-md' : 'hover:shadow-md'
                }`}
                style={{ borderLeft: `4px solid ${styles.cardBorder}` }}
              >
                {/* Card Header */}
                <div className="bg-white p-3 pb-2">
                  <div className="flex justify-between items-start mb-1">
                    <div className="flex items-center gap-1.5">
                      <span 
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: styles.dot }}
                      ></span>
                      <span 
                        className="text-[11px] font-semibold capitalize"
                        style={{ color: styles.text }}
                      >
                        {item.severity}
                      </span>
                    </div>
                    <span className="text-[11px] text-gray-400">{item.reportCount} reports</span>
                  </div>
                  
                  <div>
                    <h4 className="text-[13px] font-semibold text-gray-900">{item.storeName}</h4>
                    <p className="text-[10px] text-gray-400">{item.categoryLabel} • {item.postId}</p>
                  </div>
                </div>
                
                {/* Description Box */}
                <div 
                  className="px-3 py-2"
                  style={{ backgroundColor: styles.cardBg }}
                >
                  <p className="text-[12px] text-gray-700">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Column - Detail Panel */}
        <div className="flex-1 bg-white rounded-xl p-6 shadow-sm">
          {/* Header with severity badge */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-2">
              <span 
                className="text-[10px] font-bold px-3 py-1 rounded-full uppercase flex items-center gap-1"
                style={{ backgroundColor: '#FEE2E2', color: '#DC2626' }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]"></span>
                {selectedItem.severity} Severity
              </span>
              <span className="text-[11px] text-gray-500 bg-gray-100 px-2 py-1 rounded">
                {selectedItem.postId}
              </span>
            </div>
            <div className="text-right">
              <div className="text-[32px] font-bold text-[#EF4444] leading-none">{selectedItem.reportCount}</div>
              <div className="text-[11px] text-gray-400">Reports</div>
              <div className="text-[11px] text-gray-400 mt-1">{selectedItem.date}</div>
            </div>
          </div>

          {/* Store Info */}
          <div className="mb-5">
            <h2 className="text-[18px] font-semibold text-gray-900 mb-1">{selectedItem.storeName}</h2>
            <div className="flex items-center gap-1.5 text-[12px] text-gray-500">
              <Flag className="w-3.5 h-3.5" />
              <span>{selectedItem.categoryLabel}</span>
            </div>
          </div>

          {/* Post Content */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-5 h-5 rounded-full bg-[#22C55E] flex items-center justify-center">
                <Eye className="w-3 h-3 text-white" />
              </div>
              <h3 className="text-[14px] font-semibold text-gray-900">Post Content</h3>
            </div>
            <div className="bg-[#F9FAFB] rounded-lg p-4 border border-gray-100">
              <p className="text-[13px] text-gray-600">{selectedItem.postContent}</p>
            </div>
          </div>

          {/* Moderation Actions */}
          <div>
            <h3 className="text-[14px] font-semibold text-gray-900 mb-3">Moderation Actions</h3>
            
            <div className="grid grid-cols-2 gap-2 mb-2">
              <button className="flex items-center justify-center gap-2 bg-[#F3F4F6] text-gray-700 px-4 py-2.5 rounded-lg text-[12px] font-medium hover:bg-gray-200 transition-colors border border-gray-200">
                <EyeOff className="w-4 h-4" />
                Hide Post
              </button>
              <button className="flex items-center justify-center gap-2 bg-[#EF4444] text-white px-4 py-2.5 rounded-lg text-[12px] font-medium hover:bg-[#DC2626] transition-colors">
                <Trash2 className="w-4 h-4" />
                Remove Post
              </button>
              <button className="flex items-center justify-center gap-2 bg-[#F59E0B] text-white px-4 py-2.5 rounded-lg text-[12px] font-medium hover:bg-[#D97706] transition-colors">
                <AlertTriangle className="w-4 h-4" />
                Warn Vendor
              </button>
              <button className="flex items-center justify-center gap-2 bg-[#F3F4F6] text-gray-700 px-4 py-2.5 rounded-lg text-[12px] font-medium hover:bg-gray-200 transition-colors border border-gray-200">
                <Shield className="w-4 h-4" />
                Escalate Case
              </button>
            </div>
            
            <button className="w-full flex items-center justify-center gap-2 bg-[#22C55E] text-white px-4 py-2.5 rounded-lg text-[12px] font-medium hover:bg-[#16A34A] transition-colors">
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
