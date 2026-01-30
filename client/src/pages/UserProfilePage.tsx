import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  Star, 
  MapPin, 
  Mail, 
  Phone, 
  MoreVertical, 
  LayoutGrid, 
  List,
  ShieldAlert,
  UserX,
  ChevronRight,
  Search,
  X
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";

const userPosts = [
  { id: 1, image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=800&auto=format&fit=crop&q=60", type: "sponsored" },
  { id: 2, image: "https://images.unsplash.com/photo-1461151304267-38535e770f71?w=800&auto=format&fit=crop&q=60", type: "regular" },
  { id: 3, image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&auto=format&fit=crop&q=60", type: "fav" },
];

const followersData = [
  { id: 1, name: "Devine roy", username: "@Devine_roy555", followed: false },
  { id: 2, name: "Annulalitti roy", username: "@roy555", followed: false },
  { id: 3, name: "Devine roy", username: "@Devine_roy555", followed: false },
  { id: 4, name: "Devine roy", username: "@Devine_roy555", followed: true },
  { id: 5, name: "Devine roy", username: "@Devine_roy555", followed: false },
  { id: 6, name: "Devine roy", username: "@Devine_roy555", followed: false },
  { id: 7, name: "Devine roy", username: "@Devine_roy555", followed: false },
  { id: 8, name: "Devine roy", username: "@Devine_roy555", followed: false },
];

export default function UserProfilePage() {
  const [drawerType, setDrawerType] = useState<"Followers" | "Following" | null>(null);
  const [activeFilter, setActiveFilter] = useState("All");
  const [showBlockDialog, setShowBlockDialog] = useState(false);

  return (
    <div className="flex bg-[#f5f6fa] w-full min-h-screen relative overflow-hidden">
      <Sidebar className="w-[280px] flex-shrink-0 sticky top-0" activeModule="Users" />
      
      <main className="flex-1 p-6 space-y-6 overflow-x-hidden">
        {/* Banner Section */}
        <div className="bg-white rounded-[24px] overflow-hidden shadow-sm border border-[#0000000a]">
          <div className="relative w-full h-[220px] bg-gradient-to-r from-[#5a9a2a] via-[#6db33f] to-[#5a9a2a]">
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-[-50%] left-[-10%] w-[120%] h-[200%] bg-[#4c8a20] rounded-[100%] opacity-40 transform translate-y-[30%] translate-x-[5%]" />
              <div className="absolute top-[-40%] left-[-5%] w-[110%] h-[180%] bg-[#7dc242] rounded-[100%] opacity-30 transform translate-y-[20%] translate-x-[-5%]" />
            </div>
          </div>
          
          <div className="px-8 pb-4 -mt-12 relative flex items-end justify-between">
            <div className="flex items-end gap-5">
              <div className="relative">
                <Avatar className="w-32 h-32 border-[6px] border-white shadow-lg">
                  <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Siti" />
                  <AvatarFallback>SA</AvatarFallback>
                </Avatar>
              </div>
              <div className="pb-2">
                <h1 className="text-2xl font-bold text-[#222f36]">Siti Arlina</h1>
                <div className="flex items-center gap-2 mt-1">
                  <Badge variant="secondary" className="bg-[#f0f9ff] text-[#0284c7] border border-[#bae6fd] text-[10px] py-0.5 px-2 flex items-center gap-1 font-medium rounded-md">
                    <img src="/figmaAssets/frame-1171275705.svg" className="w-3 h-3 grayscale contrast-200" alt="" />
                    Smart TV
                  </Badge>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-12 pb-2">
              <button onClick={() => setDrawerType("Followers")} className="text-center group transition-all">
                <p className="text-xl font-bold text-[#222f36] group-hover:text-[#62a230]">1.2M</p>
                <p className="text-[10px] text-[#7b848f] font-medium uppercase tracking-wider">Followers</p>
              </button>
              <div className="w-px h-8 bg-[#e2e8f0]" />
              <button onClick={() => setDrawerType("Following")} className="text-center group transition-all">
                <p className="text-xl font-bold text-[#222f36] group-hover:text-[#62a230]">124</p>
                <p className="text-[10px] text-[#7b848f] font-medium uppercase tracking-wider">Following</p>
              </button>
              <div className="w-px h-8 bg-[#e2e8f0]" />
              <div className="text-center">
                <p className="text-xl font-bold text-[#222f36]">12%</p>
                <p className="text-[10px] text-[#7b848f] font-medium uppercase tracking-wider">Positive</p>
              </div>
              <div className="w-px h-8 bg-[#e2e8f0]" />
              <div className="text-center">
                <p className="text-xl font-bold text-[#222f36]">326</p>
                <p className="text-[10px] text-[#7b848f] font-medium uppercase tracking-wider">Post</p>
              </div>
              
              <div className="flex items-center gap-2 ml-4">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="text-[#7b848f] hover:bg-gray-100 rounded-lg">
                      <MoreVertical className="w-5 h-5" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56 rounded-xl p-2 shadow-xl border-[#0000000d]">
                    <DropdownMenuItem 
                      className="flex items-center gap-2 text-[#222f36] cursor-pointer py-2.5"
                      onClick={() => setShowBlockDialog(true)}
                    >
                      <UserX className="w-4 h-4 text-gray-400" /> Block Account Temporary
                    </DropdownMenuItem>
                    <DropdownMenuItem className="flex items-center gap-2 text-[#222f36] cursor-pointer py-2.5 border-t border-gray-50">
                      <ShieldAlert className="w-4 h-4 text-gray-400" /> Suspend User Account
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-4 space-y-6">
            <Card className="border-0 shadow-sm rounded-[24px] bg-white">
              <CardContent className="p-6 space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-[#f59f00] text-[#f59f00]" />)}
                    <Star className="w-4 h-4 text-[#e2e8f0]" />
                  </div>
                  <span className="text-sm font-medium text-[#7b848f]">4.5</span>
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-[#222f36]">About</h3>
                  <p className="text-sm text-[#7b848f] leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur. Fermentum metus eget eu lacus.
                    Fermentum nunc sed dui in nisl lacinia. Odio eget purus velit et
                    sit sit scelerisque. Ac in ultrices aliquam velit et volutpat.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-medium mb-1">
                    <span className="text-[#7b848f]">Profile Completion</span>
                    <span className="text-[#222f36]">88%</span>
                  </div>
                  <Progress value={88} className="h-2 bg-[#f1f5f9]" />
                </div>

                <div className="pt-4 border-t space-y-4">
                  <h4 className="text-xs font-bold text-[#222f36] uppercase tracking-wider">Contact Info</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-sm text-[#7b848f]">
                      <div className="w-8 h-8 rounded-lg bg-[#f8fafc] flex items-center justify-center">
                        <Phone className="w-4 h-4 text-[#62a230]" />
                      </div>
                      +88 01345XXXX112
                    </div>
                    <div className="flex items-center gap-3 text-sm text-[#7b848f]">
                      <div className="w-8 h-8 rounded-lg bg-[#f8fafc] flex items-center justify-center">
                        <Mail className="w-4 h-4 text-[#62a230]" />
                      </div>
                      Siti@gmail.com
                    </div>
                    <div className="flex items-center gap-3 text-sm text-[#7b848f]">
                      <div className="w-8 h-8 rounded-lg bg-[#f8fafc] flex items-center justify-center">
                        <MapPin className="w-4 h-4 text-[#62a230]" />
                      </div>
                      Alabama, USA, 140010
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-8 space-y-6">
            <Card className="border-0 shadow-sm rounded-[24px] bg-white">
              <CardContent className="p-4 flex items-center justify-between">
                <div className="flex gap-2">
                  <Button 
                    variant="ghost" 
                    onClick={() => setActiveFilter("All")}
                    className={cn(
                      "px-6 h-9 rounded-full text-sm transition-all border",
                      activeFilter === "All" 
                        ? "bg-[#62a230] text-white border-[#62a230] font-medium" 
                        : "text-[#7b848f] border-transparent"
                    )}
                  >
                    All
                  </Button>
                  <Button 
                    variant="ghost" 
                    onClick={() => setActiveFilter("Sponsored Post")}
                    className={cn(
                      "px-6 h-9 rounded-full text-sm transition-all border",
                      activeFilter === "Sponsored Post" 
                        ? "bg-white text-[#62a230] border-[#62a230] font-medium" 
                        : "text-[#7b848f] border-transparent"
                    )}
                  >
                    Sponsored Post
                  </Button>
                  <Button 
                    variant="ghost" 
                    onClick={() => setActiveFilter("Fav posts")}
                    className={cn(
                      "px-6 h-9 rounded-full text-sm transition-all border",
                      activeFilter === "Fav posts" 
                        ? "bg-white text-[#62a230] border-[#62a230] font-medium" 
                        : "text-[#7b848f] border-transparent"
                    )}
                  >
                    Fav posts
                  </Button>
                </div>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon" className="w-9 h-9 bg-[#f0fdf4] text-[#62a230] rounded-lg border border-[#62a230]/10">
                    <LayoutGrid className="w-5 h-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="w-9 h-9 text-[#7b848f] rounded-lg">
                    <List className="w-5 h-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {userPosts.map(post => (
                <div 
                  key={post.id} 
                  className={cn(
                    "aspect-[4/3] rounded-[24px] overflow-hidden shadow-sm hover:shadow-md transition-all group cursor-pointer bg-white border border-[#e2e8f0]",
                  )}
                >
                  <img src={post.image} alt="User Post" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {drawerType && (
        <>
          <div className="fixed inset-0 bg-black/10 z-40 transition-opacity backdrop-blur-[2px]" onClick={() => setDrawerType(null)} />
          <div className="fixed right-0 top-0 bottom-0 w-[380px] bg-white shadow-2xl z-50 flex flex-col p-6 animate-in slide-in-from-right duration-300 rounded-l-[32px]">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-[#222f36]">{drawerType}</h2>
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold text-[#7b848f]">{drawerType === "Followers" ? "920k" : "102k"}</span>
                <button className="w-9 h-9 hover:bg-gray-100 rounded-full text-[#7b848f] flex items-center justify-center transition-colors" onClick={() => setDrawerType(null)}>
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
            <div className="relative mb-8">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#7b848f]" />
              <Input placeholder={`Search ${drawerType.toLowerCase()}...`} className="pl-11 h-12 bg-[#f8fafc] border-none rounded-xl text-sm focus-visible:ring-1 focus-visible:ring-[#62a230]" />
            </div>
            <div className="flex-1 overflow-y-auto space-y-5 pr-2 custom-scrollbar">
              {followersData.map((user, i) => (
                <div key={i} className="flex items-center justify-between group py-1">
                  <div className="flex items-center gap-4">
                    <Avatar className="w-12 h-12 border-2 border-white shadow-sm ring-1 ring-gray-100">
                      <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${drawerType}${i}`} />
                      <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                    <div className="space-y-0.5">
                      <p className="text-[14px] font-bold text-[#222f36]">{user.name}</p>
                      <p className="text-[11px] text-[#7b848f] font-medium">{user.username}</p>
                    </div>
                  </div>
                  <Button variant={user.followed ? "ghost" : "default"} className={cn("h-9 px-6 rounded-xl text-[10px] font-bold uppercase tracking-wider transition-all", user.followed ? "bg-[#f0fdf4] text-[#62a230] hover:bg-[#dcfce7] border border-[#62a230]/20" : "bg-[#62a230] text-white hover:bg-[#548a29] shadow-sm shadow-[#62a230]/20")}>
                    {user.followed ? "Following" : "Follow"}
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      <Dialog open={showBlockDialog} onOpenChange={setShowBlockDialog}>
        <DialogContent className="max-w-[480px] rounded-[24px] p-0 overflow-hidden border-none shadow-2xl bg-white">
          <div className="p-8 space-y-6 text-center relative">
            <button 
              onClick={() => setShowBlockDialog(false)} 
              className="absolute right-6 top-6 w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 hover:bg-gray-50 transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
            
            <div className="flex flex-col items-center gap-4">
              <div className="flex items-center gap-2">
                <Avatar className="w-8 h-8 rounded-lg">
                  <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=John" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <span className="text-base font-bold text-[#222f36]">John Doe</span>
              </div>
              <h2 className="text-[24px] font-bold text-[#222f36] leading-tight max-w-[400px]">
                Are you sure you want to block this user?
              </h2>
              <p className="text-sm text-[#7b848f] leading-relaxed px-4">
                This action will temporarily restrict the user's access to certain features. You can unblock them at any time from the settings.
              </p>
            </div>

            <div className="flex gap-4 pt-2">
              <Button 
                onClick={() => setShowBlockDialog(false)}
                className="flex-1 h-[48px] bg-[#62a230] hover:bg-[#548a29] text-white font-bold text-lg rounded-[12px] transition-all shadow-md shadow-[#62a230]/20"
              >
                Yes
              </Button>
              <Button 
                variant="secondary"
                onClick={() => setShowBlockDialog(false)}
                className="flex-1 h-[48px] bg-[#f8fafc] hover:bg-[#f1f5f9] text-[#7b848f] font-bold text-lg rounded-[12px] transition-all border border-gray-100"
              >
                No
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
