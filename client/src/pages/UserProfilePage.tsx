import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { 
  Bell, 
  Settings, 
  Search, 
  ChevronRight, 
  User, 
  ShieldCheck, 
  Lock, 
  ChevronDown,
  Camera
} from "lucide-react";

import { Switch } from "@/components/ui/switch";

export default function UserProfilePage() {
  const [activeTab, setActiveTab] = useState("Notification Setting");
  const [showOtp, setShowOtp] = useState(false);

  const [notifications, setNotifications] = useState({
    critical: true,
    fraud: true,
    detection: true,
    moderation: true,
    summary: true,
  });

  const tabs = [
    { name: "Profile Setting", icon: User },
    { name: "Notification Setting", icon: Bell },
    { name: "Change Password", icon: Lock },
  ];

  return (
    <div className="flex bg-[#F1F4F9] w-full min-h-screen">
      <Sidebar
        className="w-[280px] flex-shrink-0 sticky top-0 h-screen"
        activeModule="Profile"
      />

      <main className="flex-1 p-8 space-y-8 overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-[#2D3748] flex items-center gap-2">
              Profile
              <span className="text-xs font-normal text-gray-400 border-l border-gray-300 pl-2 ml-1 uppercase tracking-wider">
                Management Setting
              </span>
            </h1>
          </div>
          <div className="flex items-center gap-6">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search For Anything" 
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

        {/* Profile Banner Card */}
        <div className="bg-white rounded-[32px] overflow-hidden shadow-sm border border-gray-50">
          <div className="relative h-[240px] bg-gradient-to-r from-[#22C55E] via-[#1eb054] to-[#22C55E]">
            <div className="absolute inset-0 opacity-20" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '32px 32px'
            }} />
          </div>
          <div className="px-10 pb-10 -mt-16 relative flex items-end gap-6">
            <div className="relative group">
              <Avatar className="w-40 h-40 border-[6px] border-white shadow-xl bg-white">
                <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Kevin" />
                <AvatarFallback>KA</AvatarFallback>
              </Avatar>
              <button className="absolute bottom-2 right-2 p-2 bg-[#22C55E] text-white rounded-full shadow-lg hover:bg-[#1eb054] transition-all">
                <Camera className="w-5 h-5" />
              </button>
            </div>
            <div className="pb-4">
              <h2 className="text-3xl font-bold text-[#2D3748]">Kevin Gilbert</h2>
              <p className="text-sm text-gray-400 font-medium mt-1 uppercase tracking-wider">Admin</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Navigation */}
          <div className="lg:col-span-4">
            <div className="bg-white rounded-[32px] p-4 border border-gray-50 shadow-sm space-y-2">
              {tabs.map((tab) => (
                <button
                  key={tab.name}
                  onClick={() => setActiveTab(tab.name)}
                  className={cn(
                    "w-full flex items-center justify-between p-5 rounded-2xl transition-all group",
                    activeTab === tab.name 
                      ? "bg-[#F8FAFC] text-[#2D3748]" 
                      : "text-gray-400 hover:bg-[#F8FAFC]/50 hover:text-[#2D3748]"
                  )}
                >
                  <div className="flex items-center gap-4">
                    <tab.icon className={cn("w-5 h-5", activeTab === tab.name ? "text-[#22C55E]" : "text-gray-400 group-hover:text-[#22C55E]")} />
                    <span className="text-[15px] font-bold">{tab.name}</span>
                  </div>
                  <ChevronRight className={cn("w-4 h-4 transition-transform", activeTab === tab.name ? "text-[#22C55E] translate-x-1" : "text-gray-300")} />
                </button>
              ))}
            </div>
          </div>

          {/* Right Content Area */}
          <div className="lg:col-span-8 space-y-8 bg-white rounded-[32px] p-8 border border-gray-50 shadow-sm">
            {activeTab === "Profile Setting" ? (
              <>
                <div className="bg-[#F8FAFC] rounded-[32px] p-10 border border-gray-100/50">
                  <div className="flex justify-between items-center mb-10">
                    <h3 className="text-xl font-bold text-[#2D3748]">Profile Details</h3>
                    <Button className="bg-[#72A840] hover:bg-[#629235] text-white px-8 rounded-xl h-11 font-bold">
                      Save changes
                    </Button>
                  </div>

                  <div className="flex gap-10">
                    <div className="flex flex-col items-center gap-3">
                      <div className="relative">
                        <Avatar className="w-24 h-24 bg-white rounded-2xl border border-gray-100 shadow-sm p-1">
                          <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=KevinSmall" />
                          <AvatarFallback><User /></AvatarFallback>
                        </Avatar>
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-white rounded-full border border-gray-100 flex items-center justify-center shadow-sm">
                          <Settings className="w-3 h-3 text-gray-400" />
                        </div>
                      </div>
                      <span className="text-[11px] font-bold text-[#94A3B8] uppercase tracking-wider">Profile Picture</span>
                    </div>

                    <div className="flex-1 grid grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <label className="text-[11px] font-bold text-[#94A3B8] uppercase tracking-wider ml-1">First Name</label>
                        <Input 
                          defaultValue="Rupali"
                          className="h-14 bg-white border border-gray-100/50 rounded-2xl px-6 text-[15px] font-medium text-[#2D3748] focus-visible:ring-2 focus-visible:ring-[#72A840]/20"
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[11px] font-bold text-[#94A3B8] uppercase tracking-wider ml-1">Last Name</label>
                        <Input 
                          defaultValue="Nandiya"
                          className="h-14 bg-white border border-gray-100/50 rounded-2xl px-6 text-[15px] font-medium text-[#2D3748] focus-visible:ring-2 focus-visible:ring-[#72A840]/20"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-[#F8FAFC] rounded-[32px] p-10 border border-gray-100/50">
                  <div className="flex justify-between items-center mb-10">
                    <h3 className="text-xl font-bold text-[#2D3748]">Email</h3>
                  </div>

                  <div className="flex items-end gap-6">
                    <div className="flex-1 space-y-3">
                      <Input 
                        defaultValue="RupaliNandiya@gmail.com"
                        className="h-14 bg-white border border-gray-100/50 rounded-2xl px-6 text-[15px] font-medium text-[#2D3748] focus-visible:ring-2 focus-visible:ring-[#72A840]/20"
                      />
                    </div>
                    <Button variant="secondary" className="bg-[#72A840] hover:bg-[#629235] text-white px-10 h-14 rounded-2xl font-bold min-w-[160px]">
                      Update Email
                    </Button>
                  </div>
                </div>
              </>
            ) : activeTab === "Notification Setting" ? (
              <div className="space-y-4">
                {[
                  { id: 'critical', title: 'Critical System Alerts', desc: 'Email + Slack + Std...' },
                  { id: 'fraud', title: 'Fraud Detection Alerts', desc: 'Email + Slack' },
                  { id: 'detection', title: 'Fraud Detection Alerts', desc: 'Email + Slack' },
                  { id: 'moderation', title: 'High-priority Moderation', desc: 'Email + Slack' },
                  { id: 'summary', title: 'Daily Summary', desc: 'Email + Slack' },
                ].map((item) => (
                  <div 
                    key={item.id}
                    className="flex items-center justify-between p-8 bg-[#F8FAFC] rounded-[24px] border border-gray-100/50"
                  >
                    <div>
                      <h4 className="text-[15px] font-bold text-[#2D3748] mb-1">{item.title}</h4>
                      <p className="text-[11px] text-[#94A3B8] font-medium">{item.desc}</p>
                    </div>
                    <Switch 
                      checked={notifications[item.id as keyof typeof notifications]}
                      onCheckedChange={(val) => setNotifications(prev => ({ ...prev, [item.id]: val }))}
                      className="data-[state=checked]:bg-[#72A840]"
                    />
                  </div>
                ))}
              </div>
            ) : activeTab === "Change Password" ? (
              <div className="flex flex-col items-center py-10">
                {!showOtp ? (
                  <div className="w-full max-w-[400px] space-y-8">
                    <div className="text-center space-y-2 mb-10">
                      <h3 className="text-2xl font-bold text-[#2D3748]">Change Password</h3>
                      <p className="text-[13px] text-[#94A3B8] leading-relaxed">
                        Lorem ipsum dolor sit amet consectetur. Fermentum metus eget eu lacus.
                      </p>
                    </div>

                    <div className="space-y-6">
                      <div className="space-y-3">
                        <label className="text-[11px] font-bold text-[#94A3B8] uppercase tracking-wider ml-1">Current Password *</label>
                        <Input 
                          type="password"
                          placeholder="Current Password"
                          className="h-14 bg-[#F8FAFC] border-0 rounded-2xl px-6 text-[15px] font-medium text-[#2D3748] focus-visible:ring-2 focus-visible:ring-[#72A840]/20"
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[11px] font-bold text-[#94A3B8] uppercase tracking-wider ml-1">New Password</label>
                        <Input 
                          type="password"
                          placeholder="New Password"
                          className="h-14 bg-[#F8FAFC] border-0 rounded-2xl px-6 text-[15px] font-medium text-[#2D3748] focus-visible:ring-2 focus-visible:ring-[#72A840]/20"
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[11px] font-bold text-[#94A3B8] uppercase tracking-wider ml-1">Confirm Password</label>
                        <Input 
                          type="password"
                          placeholder="Confirm Password"
                          className="h-14 bg-[#F8FAFC] border-0 rounded-2xl px-6 text-[15px] font-medium text-[#2D3748] focus-visible:ring-2 focus-visible:ring-[#72A840]/20"
                        />
                      </div>

                      <Button 
                        onClick={() => setShowOtp(true)}
                        className="w-full bg-[#72A840] hover:bg-[#629235] text-white h-14 rounded-2xl text-lg font-bold shadow-lg shadow-[#72A840]/20 mt-4"
                      >
                        Change
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="w-full max-w-[400px] space-y-8">
                    <div className="text-center space-y-4 mb-10">
                      <h3 className="text-3xl font-black text-[#2D3748]">Verification</h3>
                      <p className="text-[13px] text-[#94A3B8] leading-relaxed max-w-[300px] mx-auto font-medium">
                        Enter your OTP we just sent to your mobile phone number +91 **** ***834
                      </p>
                    </div>

                    <div className="space-y-10 flex flex-col items-center">
                      <div className="flex gap-4">
                        {[1, 2, 3, 4].map((i) => (
                          <input
                            key={i}
                            type="text"
                            maxLength={1}
                            className="w-14 h-14 bg-white border border-gray-100 rounded-2xl text-center text-xl font-bold text-[#2D3748] focus:ring-2 focus:ring-[#72A840]/20 outline-none shadow-sm"
                          />
                        ))}
                      </div>

                      <div className="w-full space-y-6">
                        <Button className="w-full bg-[#72A840] hover:bg-[#629235] text-white h-14 rounded-2xl text-lg font-bold shadow-lg shadow-[#72A840]/20">
                          Submit
                        </Button>
                        <button 
                          onClick={() => setShowOtp(false)}
                          className="w-full text-center text-[13px] font-bold text-[#94A3B8] hover:text-[#72A840] transition-colors"
                        >
                          Back
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : null}
          </div>
        </div>
      </main>
    </div>
  );
}
