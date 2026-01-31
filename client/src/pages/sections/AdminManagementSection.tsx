import React, { useState } from 'react';
import { Bell, Settings, ChevronDown, Plus, Edit2, Shield, Headphones, DollarSign, FileCheck, Trash2, Search, Clock } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface AdminUser {
  id: string;
  name: string;
  avatar: string;
  email: string;
  role: 'super_admin' | 'support_admin' | 'finance_admin' | 'compliance_admin';
  roleLabel: string;
  status: 'online' | 'away' | 'offline';
  lastActive: string;
  twoFA: boolean;
}

const adminUsers: AdminUser[] = [
  {
    id: '1',
    name: 'Sarah Kim',
    avatar: 'Sarah',
    email: 'sarah.kim@justpaid.com',
    role: 'super_admin',
    roleLabel: 'Super Admin',
    status: 'online',
    lastActive: 'Now',
    twoFA: true
  },
  {
    id: '2',
    name: 'Michael Chen',
    avatar: 'Michael',
    email: 'm.chen@justpaid.com',
    role: 'support_admin',
    roleLabel: 'Support Admin',
    status: 'online',
    lastActive: '5 min ago',
    twoFA: true
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    avatar: 'Emily',
    email: 'e.rodriguez@justpaid.com',
    role: 'finance_admin',
    roleLabel: 'Finance Admin',
    status: 'online',
    lastActive: '12 min ago',
    twoFA: true
  },
  {
    id: '4',
    name: 'James Wilson',
    avatar: 'James',
    email: 'j.wilson@justpaid.com',
    role: 'compliance_admin',
    roleLabel: 'Compliance Admin',
    status: 'away',
    lastActive: '1 hour ago',
    twoFA: true
  },
  {
    id: '5',
    name: 'Lisa Thompson',
    avatar: 'Lisa',
    email: 'l.thompson@justpaid.com',
    role: 'support_admin',
    roleLabel: 'Support Admin',
    status: 'offline',
    lastActive: '3 hours ago',
    twoFA: false
  }
];

interface RoleCard {
  id: string;
  title: string;
  icon: any;
  iconBg: string;
  iconColor: string;
  description: string;
  permissions: string[];
}

const roleCards: RoleCard[] = [
  {
    id: 'super_admin',
    title: 'Super Admin',
    icon: Shield,
    iconBg: '#22C55E',
    iconColor: '#FFFFFF',
    description: 'Full platform access',
    permissions: ['All']
  },
  {
    id: 'support_admin',
    title: 'Support Admin',
    icon: Headphones,
    iconBg: '#F3F4F6',
    iconColor: '#6B7280',
    description: 'Customer support operations',
    permissions: ['users', 'vendors', 'moderation', 'reports']
  },
  {
    id: 'finance_admin',
    title: 'Finance Admin',
    icon: DollarSign,
    iconBg: '#F3F4F6',
    iconColor: '#6B7280',
    description: 'Financial operations',
    permissions: ['finance', 'subscriptions', 'reports']
  },
  {
    id: 'compliance_admin',
    title: 'Compliance Admin',
    icon: FileCheck,
    iconBg: '#F3F4F6',
    iconColor: '#6B7280',
    description: 'Compliance and legal',
    permissions: ['moderation', 'audit', 'reports', 'alerts']
  }
];

const getRoleStyles = (role: string) => {
  switch (role) {
    case 'super_admin':
      return { bg: '#22C55E', text: '#FFFFFF' };
    case 'support_admin':
      return { bg: '#3B82F6', text: '#FFFFFF' };
    case 'finance_admin':
      return { bg: '#8B5CF6', text: '#FFFFFF' };
    case 'compliance_admin':
      return { bg: '#F59E0B', text: '#FFFFFF' };
    default:
      return { bg: '#6B7280', text: '#FFFFFF' };
  }
};

const getStatusStyles = (status: string) => {
  switch (status) {
    case 'online':
      return { dot: '#22C55E', text: '#22C55E', label: 'Online' };
    case 'away':
      return { dot: '#F59E0B', text: '#F59E0B', label: 'Away' };
    case 'offline':
      return { dot: '#EF4444', text: '#EF4444', label: 'Offline' };
    default:
      return { dot: '#9CA3AF', text: '#9CA3AF', label: 'Unknown' };
  }
};

interface AuditLog {
  id: string;
  user: {
    name: string;
    avatar: string;
    initials: string;
    color: string;
  };
  action: string;
  actionColor: string;
  target: string;
  timestamp: string;
}

const auditLogs: AuditLog[] = [
  {
    id: '1',
    user: { name: 'Sarah Kim', avatar: 'Sarah', initials: 'SK', color: '#62a230' },
    action: 'Vendor Suspended',
    actionColor: '#ef4444',
    target: 'GadgetZone Plus',
    timestamp: '2024-10-29 08:12'
  },
  {
    id: '2',
    user: { name: 'Michael Chen', avatar: 'Michael', initials: 'MC', color: '#22c55e' },
    action: 'User Warned',
    actionColor: '#f59e0b',
    target: 'alex_trader99',
    timestamp: '2024-10-29 08:08'
  },
  {
    id: '3',
    user: { name: 'Emily Rodriguez', avatar: 'Emily', initials: 'ER', color: '#3b82f6' },
    action: 'Refund Processed',
    actionColor: '#3b82f6',
    target: 'TXN-89321',
    timestamp: '2024-10-28 08:58'
  },
  {
    id: '4',
    user: { name: 'Sarah Kim', avatar: 'Sarah', initials: 'SK', color: '#62a230' },
    action: 'Post Removed',
    actionColor: '#ef4444',
    target: 'POST-88034',
    timestamp: '2024-10-28 08:42'
  },
  {
    id: '5',
    user: { name: 'James Wilson', avatar: 'James', initials: 'JW', color: '#f59e0b' },
    action: 'Permission Updated',
    actionColor: '#f59e0b',
    target: 'AutoLux Parts',
    timestamp: '2024-10-28 08:22'
  },
  {
    id: '6',
    user: { name: 'Michael Chen', avatar: 'Michael', initials: 'MC', color: '#22c55e' },
    action: 'User Banned',
    actionColor: '#ef4444',
    target: 'fake_seller_xyz',
    timestamp: '2024-10-28 08:14'
  },
  {
    id: '7',
    user: { name: 'Sarah Kim', avatar: 'Sarah', initials: 'SK', color: '#62a230' },
    action: 'Vendor Warned',
    actionColor: '#f59e0b',
    target: 'FashionHub Elite',
    timestamp: '2024-10-28 08:05'
  },
  {
    id: '8',
    user: { name: 'Emily Rodriguez', avatar: 'Emily', initials: 'ER', color: '#3b82f6' },
    action: 'Subscription Plan Updated',
    actionColor: '#3b82f6',
    target: 'Professional Plan',
    timestamp: '2024-10-28 07:52'
  }
];

const AdminManagementSection = () => {
  const [activeTab, setActiveTab] = useState('users');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="flex-grow p-6 bg-[#F8FAFC] min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-3">
          <h1 className="text-[24px] font-bold text-[#222f36]">Admin Management</h1>
          <span className="text-[13px] text-gray-400 border-l border-gray-300 pl-4 h-5 flex items-center">
            Manage administrator accounts and permissions
          </span>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <button className="relative p-2 text-gray-400 hover:bg-gray-100 rounded-full transition-colors">
              <Bell className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-3 pl-3 border-l border-gray-200">
              <div className="w-9 h-9 rounded-full bg-[#FFEDD5] overflow-hidden border-2 border-white shadow-sm ring-1 ring-gray-100">
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Jack" alt="User" className="w-full h-full" />
              </div>
              <div className="flex flex-col">
                <span className="text-[13px] font-bold text-[#222f36]">Mr. Jack</span>
              </div>
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </div>
            <button className="p-2 text-gray-400 hover:bg-gray-100 rounded-full transition-colors">
              <Settings className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Tabs & Search */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-2 p-1 bg-white rounded-xl shadow-sm border border-gray-100">
          <button
            onClick={() => setActiveTab('users')}
            className={`px-6 py-2.5 rounded-lg text-[13px] font-bold transition-all ${
              activeTab === 'users'
                ? 'bg-[#002B20] text-white shadow-md'
                : 'text-[#7b848f] hover:text-[#222f36]'
            }`}
          >
            Admin Users
          </button>
          <button
            onClick={() => setActiveTab('logs')}
            className={`px-6 py-2.5 rounded-lg text-[13px] font-bold transition-all ${
              activeTab === 'logs'
                ? 'bg-[#62a230] text-white shadow-md'
                : 'text-[#7b848f] hover:text-[#222f36]'
            }`}
          >
            Audit Logs
          </button>
        </div>

        <div className="relative w-[400px]">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input 
            type="text"
            placeholder="Search by name, action, or target..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-11 pl-11 pr-4 bg-white border border-gray-100 rounded-xl text-[13px] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#62a230]/20 focus:border-[#62a230] transition-all"
          />
        </div>
      </div>

      {activeTab === 'users' && (
        <>
          {/* Admin Users Section */}
          <div className="bg-white rounded-[24px] shadow-sm border border-gray-50 overflow-hidden mb-8">
            <div className="flex justify-between items-center p-6 border-b border-gray-50">
              <div>
                <h2 className="text-[16px] font-bold text-[#222f36]">Admin Users</h2>
                <p className="text-[12px] text-gray-400 mt-0.5">5 administrators</p>
              </div>
              <button className="flex items-center gap-2 bg-[#62a230] text-white px-5 py-2.5 rounded-xl text-[13px] font-bold hover:bg-[#548a29] transition-all shadow-lg shadow-[#62a230]/20">
                <Plus className="w-4 h-4" />
                Add Admin
              </button>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#f8fafc]/50">
                    <th className="text-left px-6 py-4 text-[11px] font-bold text-[#7b848f] uppercase tracking-wider">Name</th>
                    <th className="text-left px-6 py-4 text-[11px] font-bold text-[#7b848f] uppercase tracking-wider">Email</th>
                    <th className="text-left px-6 py-4 text-[11px] font-bold text-[#7b848f] uppercase tracking-wider">Role</th>
                    <th className="text-left px-6 py-4 text-[11px] font-bold text-[#7b848f] uppercase tracking-wider">Status</th>
                    <th className="text-left px-6 py-4 text-[11px] font-bold text-[#7b848f] uppercase tracking-wider">Last Active</th>
                    <th className="text-left px-6 py-4 text-[11px] font-bold text-[#7b848f] uppercase tracking-wider">2FA</th>
                    <th className="text-left px-6 py-4 text-[11px] font-bold text-[#7b848f] uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {adminUsers.map((user) => {
                    const roleStyles = getRoleStyles(user.role);
                    const statusStyles = getStatusStyles(user.status);
                    
                    return (
                      <tr key={user.id} className="hover:bg-[#f8fafc]/50 transition-colors">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <Avatar className="w-9 h-9 border border-gray-100 shadow-sm">
                              <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.avatar}`} />
                              <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <span className="text-[13px] font-bold text-[#222f36]">{user.name}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-[12px] text-[#7b848f] font-medium">{user.email}</span>
                        </td>
                        <td className="px-6 py-4">
                          <span 
                            className="text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tight"
                            style={{ backgroundColor: `${roleStyles.bg}15`, color: roleStyles.bg }}
                          >
                            {user.roleLabel}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <span 
                              className="w-2 h-2 rounded-full"
                              style={{ backgroundColor: statusStyles.dot }}
                            ></span>
                            <span 
                              className="text-[12px] font-bold"
                              style={{ color: statusStyles.text }}
                            >
                              {statusStyles.label}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-[12px] text-[#7b848f] font-medium">{user.lastActive}</span>
                        </td>
                        <td className="px-6 py-4">
                          <span 
                            className={cn(
                              "text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-tight",
                              user.twoFA 
                                ? 'bg-[#DCFCE7] text-[#16A34A]' 
                                : 'bg-[#FEE2E2] text-[#DC2626]'
                            )}
                          >
                            {user.twoFA ? 'Enabled' : 'Disabled'}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <button className="p-2 text-[#62a230] hover:bg-[#62a230]/10 rounded-lg transition-all">
                              <Edit2 className="w-4 h-4" />
                            </button>
                            <button className="p-2 text-[#ef4444] hover:bg-[#ef4444]/10 rounded-lg transition-all">
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* Roles & Permissions Section */}
          <div>
            <div className="mb-6 px-1">
              <h2 className="text-[18px] font-bold text-[#222f36]">Roles & Permissions</h2>
              <p className="text-[13px] text-gray-400 mt-0.5">Permission levels for admin roles</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {roleCards.map((role) => {
                const IconComponent = role.icon;
                return (
                  <div key={role.id} className="bg-white rounded-[24px] p-6 shadow-sm border border-gray-50 hover:shadow-md transition-all group">
                    <div className="flex items-center gap-4 mb-4">
                      <div 
                        className="w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110"
                        style={{ backgroundColor: role.iconBg }}
                      >
                        <IconComponent className="w-6 h-6" style={{ color: role.iconColor }} />
                      </div>
                      <h3 className="text-[15px] font-bold text-[#222f36]">{role.title}</h3>
                    </div>
                    <p className="text-[12px] text-[#7b848f] mb-5 leading-relaxed">{role.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {role.permissions.map((perm) => (
                        <span 
                          key={perm}
                          className="text-[10px] font-bold text-[#62a230] bg-[#f0fdf4] px-3 py-1 rounded-full uppercase tracking-tight"
                        >
                          {perm}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}

      {activeTab === 'logs' && (
        <div className="space-y-4">
          <div className="bg-white rounded-[24px] shadow-sm border border-gray-50 divide-y divide-gray-50 overflow-hidden">
            {auditLogs.map((log) => (
              <div key={log.id} className="flex items-center justify-between p-6 hover:bg-[#f8fafc]/50 transition-all group">
                <div className="flex items-center gap-5">
                  <div 
                    className="w-11 h-11 rounded-2xl flex items-center justify-center text-[13px] font-bold text-white shadow-sm transition-transform group-hover:scale-110"
                    style={{ backgroundColor: log.user.color }}
                  >
                    {log.user.initials}
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-3">
                      <span className="text-[15px] font-bold text-[#222f36]">{log.user.name}</span>
                      <span 
                        className="text-[10px] font-bold px-3 py-0.5 rounded-full uppercase tracking-tight border"
                        style={{ 
                          backgroundColor: `${log.actionColor}10`, 
                          color: log.actionColor,
                          borderColor: `${log.actionColor}20`
                        }}
                      >
                        {log.action}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[13px] text-[#7b848f]">Target:</span>
                      <span className="text-[13px] font-bold text-[#222f36]">{log.target}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2 text-[#7b848f]">
                    <Clock className="w-4 h-4" />
                    <span className="text-[13px] font-medium">{log.timestamp}</span>
                  </div>
                  <button className="p-2 text-gray-300 hover:text-[#62a230] transition-colors">
                    <ChevronDown className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminManagementSection;
