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
  UserX
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const userPosts = [
  { id: 1, image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=800&auto=format&fit=crop&q=60" },
  { id: 2, image: "https://images.unsplash.com/photo-1461151304267-38535e770f71?w=800&auto=format&fit=crop&q=60" },
  { id: 3, image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&auto=format&fit=crop&q=60" },
];

export default function UserProfilePage() {
  return (
    <div className="flex bg-[#f5f6fa] w-full min-h-screen">
      <Sidebar className="w-[280px] flex-shrink-0 sticky top-0" />
      
      <main className="flex-1 p-6 space-y-6 overflow-x-hidden">
        {/* Banner Section */}
        <div className="relative w-full h-[240px] bg-gradient-to-r from-[#62a230] to-[#2e7d32] rounded-[24px] overflow-hidden">
          <div className="absolute inset-0 opacity-20">
             <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/40 to-transparent scale-150" />
          </div>
          
          <div className="absolute bottom-6 left-6 flex items-end gap-6">
            <div className="relative">
              <Avatar className="w-32 h-32 border-4 border-white shadow-xl">
                <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Siti" />
                <AvatarFallback>SA</AvatarFallback>
              </Avatar>
            </div>
            <div className="pb-2 text-white">
              <h1 className="text-3xl font-bold">Siti Arlina</h1>
              <div className="flex items-center gap-2 text-white/80 mt-1">
                <Badge variant="secondary" className="bg-white/20 text-white border-0">📺 Smart TV</Badge>
              </div>
            </div>
          </div>

          <div className="absolute bottom-6 right-8 flex gap-8 text-white text-center">
            <div>
              <p className="text-2xl font-bold">1.2M</p>
              <p className="text-xs text-white/70">Followers</p>
            </div>
            <div className="w-px h-10 bg-white/20 self-center" />
            <div>
              <p className="text-2xl font-bold">124</p>
              <p className="text-xs text-white/70">Following</p>
            </div>
            <div className="w-px h-10 bg-white/20 self-center" />
            <div>
              <p className="text-2xl font-bold">12%</p>
              <p className="text-xs text-white/70">Positive</p>
            </div>
            <div className="w-px h-10 bg-white/20 self-center" />
            <div>
              <p className="text-2xl font-bold">326</p>
              <p className="text-xs text-white/70">Post</p>
            </div>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 ml-4">
                  <MoreVertical className="w-6 h-6" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 rounded-xl p-2">
                <DropdownMenuItem className="flex items-center gap-2 text-red-600 focus:text-red-600 cursor-pointer">
                  <UserX className="w-4 h-4" /> Block Account Temporary
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center gap-2 text-red-600 focus:text-red-600 cursor-pointer">
                  <ShieldAlert className="w-4 h-4" /> Suspend User Account
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Sidebar Info */}
          <div className="lg:col-span-4 space-y-6">
            <Card className="border-0 shadow-sm rounded-[24px]">
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

          {/* Posts Feed */}
          <div className="lg:col-span-8 space-y-6">
            <Card className="border-0 shadow-sm rounded-[24px]">
              <CardContent className="p-4 flex items-center justify-between">
                <div className="flex gap-2">
                  <Button variant="ghost" className="bg-[#f0fdf4] text-[#62a230] hover:bg-[#f0fdf4]/80 px-4 rounded-lg">All</Button>
                  <Button variant="ghost" className="text-[#7b848f] px-4">Sponsored Post</Button>
                  <Button variant="ghost" className="text-[#7b848f] px-4">Regular Post</Button>
                </div>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon" className="w-9 h-9 bg-[#f0fdf4] text-[#62a230] rounded-lg">
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
                <div key={post.id} className="aspect-[4/3] rounded-[24px] overflow-hidden shadow-sm hover:shadow-md transition-shadow group cursor-pointer">
                  <img src={post.image} alt="User Post" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
