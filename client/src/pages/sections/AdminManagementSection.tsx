import React, { useState } from 'react';
import { Bell, Settings, ChevronDown, Plus, Edit2, Shield, Headphones, DollarSign, FileCheck } from 'lucide-react';

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

const AdminManagementSection = () => {
  const [activeTab, setActiveTab] = useState('users');

  return (
    <div className="flex-grow p-6 bg-[#F8FAFC] min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-5">
        <div className="flex items-center gap-3">
          <h1 className="text-[20px] font-semibold text-gray-900">Admin Management</h1>
          <span className="text-[13px] text-gray-400 border-l border-gray-300 pl-3">
            Manage administrator accounts and permissions
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

      {/* Tabs */}
      <div className="flex items-center gap-1 mb-5">
        <button
          onClick={() => setActiveTab('users')}
          className={`px-4 py-2 rounded-lg text-[13px] font-medium transition-all ${
            activeTab === 'users'
              ? 'bg-[#002B20] text-white'
              : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
          }`}
        >
          Admin Users
        </button>
        <button
          onClick={() => setActiveTab('logs')}
          className={`px-4 py-2 rounded-lg text-[13px] font-medium transition-all ${
            activeTab === 'logs'
              ? 'bg-[#002B20] text-white'
              : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
          }`}
        >
          Audit Logs
        </button>
      </div>

      {activeTab === 'users' && (
        <>
          {/* Admin Users Section */}
          <div className="bg-white rounded-xl shadow-sm mb-6">
            <div className="flex justify-between items-center p-4 border-b border-gray-100">
              <div>
                <h2 className="text-[15px] font-semibold text-gray-900">Admin Users</h2>
                <p className="text-[12px] text-gray-400">5 administrators</p>
              </div>
              <button className="flex items-center gap-1.5 bg-[#22C55E] text-white px-3 py-2 rounded-lg text-[12px] font-medium hover:bg-[#16A34A] transition-colors">
                <Plus className="w-4 h-4" />
                Add Admin
              </button>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="text-left px-4 py-3 text-[11px] font-medium text-gray-400 uppercase tracking-wider">Name</th>
                    <th className="text-left px-4 py-3 text-[11px] font-medium text-gray-400 uppercase tracking-wider">Email</th>
                    <th className="text-left px-4 py-3 text-[11px] font-medium text-gray-400 uppercase tracking-wider">Role</th>
                    <th className="text-left px-4 py-3 text-[11px] font-medium text-gray-400 uppercase tracking-wider">Status</th>
                    <th className="text-left px-4 py-3 text-[11px] font-medium text-gray-400 uppercase tracking-wider">Last Active</th>
                    <th className="text-left px-4 py-3 text-[11px] font-medium text-gray-400 uppercase tracking-wider">2FA</th>
                    <th className="text-left px-4 py-3 text-[11px] font-medium text-gray-400 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {adminUsers.map((user) => {
                    const roleStyles = getRoleStyles(user.role);
                    const statusStyles = getStatusStyles(user.status);
                    
                    return (
                      <tr key={user.id} className="border-b border-gray-50 hover:bg-gray-50/50">
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-200">
                              <img 
                                src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.avatar}`} 
                                alt={user.name}
                                className="w-full h-full"
                              />
                            </div>
                            <span className="text-[13px] font-medium text-gray-900">{user.name}</span>
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <span className="text-[12px] text-gray-500">{user.email}</span>
                        </td>
                        <td className="px-4 py-3">
                          <span 
                            className="text-[10px] font-medium px-2 py-1 rounded"
                            style={{ backgroundColor: roleStyles.bg, color: roleStyles.text }}
                          >
                            {user.roleLabel}
                          </span>
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-1.5">
                            <span 
                              className="w-2 h-2 rounded-full"
                              style={{ backgroundColor: statusStyles.dot }}
                            ></span>
                            <span 
                              className="text-[12px] font-medium"
                              style={{ color: statusStyles.text }}
                            >
                              {statusStyles.label}
                            </span>
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <span className="text-[12px] text-gray-500">{user.lastActive}</span>
                        </td>
                        <td className="px-4 py-3">
                          <span 
                            className={`text-[11px] font-medium px-2 py-0.5 rounded ${
                              user.twoFA 
                                ? 'bg-[#DCFCE7] text-[#16A34A]' 
                                : 'bg-[#FEE2E2] text-[#DC2626]'
                            }`}
                          >
                            {user.twoFA ? 'Enabled' : 'Disabled'}
                          </span>
                        </td>
                        <td className="px-4 py-3">
                          <button className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded">
                            <Edit2 className="w-4 h-4" />
                          </button>
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
            <div className="mb-4">
              <h2 className="text-[15px] font-semibold text-gray-900">Roles & Permissions</h2>
              <p className="text-[12px] text-gray-400">Permission levels for admin roles</p>
            </div>

            <div className="grid grid-cols-4 gap-4">
              {roleCards.map((role) => {
                const IconComponent = role.icon;
                return (
                  <div key={role.id} className="bg-white rounded-xl p-4 shadow-sm">
                    <div className="flex items-center gap-2 mb-2">
                      <div 
                        className="w-8 h-8 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: role.iconBg }}
                      >
                        <IconComponent className="w-4 h-4" style={{ color: role.iconColor }} />
                      </div>
                      <h3 className="text-[13px] font-semibold text-gray-900">{role.title}</h3>
                    </div>
                    <p className="text-[11px] text-gray-500 mb-3">{role.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {role.permissions.map((perm) => (
                        <span 
                          key={perm}
                          className="text-[10px] text-gray-500 bg-gray-100 px-2 py-0.5 rounded"
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
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileCheck className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-[15px] font-semibold text-gray-900 mb-2">Audit Logs</h3>
            <p className="text-[13px] text-gray-500">View administrator activity and changes</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminManagementSection;
