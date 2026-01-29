import { Search, Bell, Settings, User, LogOut } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Navbar() {
  return (
    <header className="h-16 border-b bg-white flex items-center justify-between px-6 gap-4">
      <div className="flex-1 max-w-xl relative group">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#7b848f] group-focus-within:text-[#21c45d] transition-colors" />
        <Input 
          placeholder="Search for anything..." 
          className="pl-10 bg-[#f8fafc] border-[#e2e8f0] rounded-full focus-visible:ring-1 focus-visible:ring-[#21c45d]/20 h-10"
          data-testid="input-search"
        />
      </div>

      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" className="relative hover:bg-[#f8fafc] rounded-full" data-testid="button-notifications">
          <Bell className="w-5 h-5 text-[#7b848f]" />
          <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-[#21c45d] rounded-full border-2 border-white" />
        </Button>
        
        <Button variant="ghost" size="icon" className="hover:bg-[#f8fafc] rounded-full" data-testid="button-settings">
          <Settings className="w-5 h-5 text-[#7b848f]" />
        </Button>

        <div className="h-8 w-[1px] bg-[#e2e8f0] mx-2" />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="pl-1 pr-2 gap-3 hover:bg-[#f8fafc] rounded-full h-10" data-testid="button-profile-dropdown">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/figmaAssets/2-jpg.png" />
                <AvatarFallback>MJ</AvatarFallback>
              </Avatar>
              <div className="flex flex-col items-start text-left hidden sm:flex">
                <span className="text-sm font-semibold text-[#222f36] leading-none">Mr. Jack</span>
                <span className="text-[11px] text-[#7b848f] font-medium leading-none mt-1">Super Admin</span>
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56 rounded-xl border-[#e2e8f0] shadow-xl">
            <DropdownMenuLabel className="font-semibold text-[#222f36]">My Account</DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-[#e2e8f0]" />
            <DropdownMenuItem className="gap-2 focus:bg-[#f8fafc] focus:text-[#222f36] rounded-lg cursor-pointer py-2.5">
              <User className="w-4 h-4 text-[#7b848f]" />
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem className="gap-2 text-destructive focus:bg-destructive/5 rounded-lg cursor-pointer py-2.5">
              <LogOut className="w-4 h-4" />
              Sign Out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
