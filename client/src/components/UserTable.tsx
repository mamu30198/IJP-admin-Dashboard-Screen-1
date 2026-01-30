import { useState } from "react";
import { Link } from "wouter";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, ChevronLeft, ChevronRight, UserX, ShieldAlert, X } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogOverlay,
} from "@/components/ui/dialog";

export interface User {
  id: string | number;
  name: string;
  mobile: string;
  city: string;
  registration: string;
  activity: "High" | "Medium" | "Low";
  reports: string;
  status: "Active" | "Inactive" | "Suspended" | "Blocked";
  completion: number;
  userType?: "user" | "vendor";
}

interface UserTableProps {
  users: User[];
  onPageChange?: (page: number) => void;
  currentPage?: number;
  showUnblockButton?: boolean;
  onUnblock?: (userId: string | number) => void;
}

export function UserTable({ users, onPageChange, currentPage = 2, showUnblockButton = false, onUnblock }: UserTableProps) {
  const [showUnblockDialog, setShowUnblockDialog] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const handleUnblockClick = (user: User) => {
    setSelectedUser(user);
    setShowUnblockDialog(true);
  };

  const handleConfirmUnblock = () => {
    if (selectedUser) {
      onUnblock?.(selectedUser.id);
    }
    setShowUnblockDialog(false);
    setSelectedUser(null);
  };

  const handleCancelUnblock = () => {
    setShowUnblockDialog(false);
    setSelectedUser(null);
  };

  return (
    <>
    <Dialog open={showUnblockDialog} onOpenChange={setShowUnblockDialog}>
      <DialogContent className="sm:max-w-[480px] p-0 gap-0 rounded-2xl border-0 shadow-xl">
        <div className="relative p-6">
          <button
            onClick={handleCancelUnblock}
            className="absolute right-4 top-4 text-[#7b848f] hover:text-[#222f36] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-2 mb-4">
              <Avatar className="w-12 h-12">
                <AvatarImage src={selectedUser ? `https://api.dicebear.com/7.x/avataaars/svg?seed=${selectedUser.id}` : ''} />
                <AvatarFallback>{selectedUser?.name?.charAt(0) || 'U'}</AvatarFallback>
              </Avatar>
              <span className="text-base font-medium text-[#222f36]">{selectedUser?.name}</span>
            </div>
            
            <h2 className="text-xl font-semibold text-[#222f36] mb-3">
              Are you sure you want to Unblock this post User ?
            </h2>
            
            <p className="text-sm text-[#7b848f] mb-6 max-w-[380px]">
              Lorem ipsum dolor sit amet consectetur. In tincidunt a pellentesque gravida pellentesque suspendisse interdum. Praesent risus non id auctor. Non tortor quis pretium placerat. Vestibulum convallis .
            </p>
            
            <div className="flex gap-4 w-full max-w-[280px]">
              <Button
                onClick={handleConfirmUnblock}
                className="flex-1 bg-[#62a230] hover:bg-[#62a230]/90 text-white rounded-full h-11"
              >
                Yes
              </Button>
              <Button
                onClick={handleCancelUnblock}
                variant="outline"
                className="flex-1 border-[#e5e7eb] text-[#222f36] hover:bg-[#f8fafc] rounded-full h-11"
              >
                No
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>

    <div className="bg-white border-0 shadow-[0px_1px_2px_#0000000d] rounded-[15px] overflow-hidden">
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-[#f8fafc] border-b">
              <TableHead className="p-4 text-xs font-medium text-[#7b848f] uppercase">Name</TableHead>
              <TableHead className="p-4 text-xs font-medium text-[#7b848f] uppercase">Mobile</TableHead>
              <TableHead className="p-4 text-xs font-medium text-[#7b848f] uppercase">City</TableHead>
              <TableHead className="p-4 text-xs font-medium text-[#7b848f] uppercase">Registration</TableHead>
              <TableHead className="p-4 text-xs font-medium text-[#7b848f] uppercase">Activity</TableHead>
              <TableHead className="p-4 text-xs font-medium text-[#7b848f] uppercase">Reports</TableHead>
              <TableHead className="p-4 text-xs font-medium text-[#7b848f] uppercase">Status</TableHead>
              <TableHead className="p-4 text-xs font-medium text-[#7b848f] uppercase">Profile Completion</TableHead>
              <TableHead className="p-4 text-xs font-medium text-[#7b848f] uppercase">{showUnblockButton ? "More" : ""}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id} className="hover:bg-[#f8fafc] transition-colors bg-white">
                <TableCell className="p-4">
                  <Link href={`/users/${user.id}`} className="flex items-center gap-3 cursor-pointer group">
                    <Avatar className="w-8 h-8 group-hover:ring-2 ring-[#62a230] transition-all">
                      <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.id}`} />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <span className="text-sm font-medium text-[#222f36] group-hover:text-[#62a230] transition-colors">{user.name}</span>
                  </Link>
                </TableCell>
                <TableCell className="p-4 text-sm text-[#7b848f]">{user.mobile}</TableCell>
                <TableCell className="p-4 text-sm text-[#7b848f]">{user.city}</TableCell>
                <TableCell className="p-4 text-sm text-[#7b848f]">{user.registration}</TableCell>
                <TableCell className="p-4">
                  <span className={`text-xs font-medium ${
                    user.activity === 'High' ? 'text-[#62a230]' : 
                    user.activity === 'Medium' ? 'text-[#f59f00]' : 'text-[#7b848f]'
                  }`}>
                    {user.activity}
                  </span>
                </TableCell>
                <TableCell className="p-4">
                  <span className={`text-xs ${user.reports !== 'None' ? 'text-red-500 font-medium' : 'text-[#7b848f]'}`}>
                    {user.reports}
                  </span>
                </TableCell>
                <TableCell className="p-4">
                  <Badge variant="outline" className={`rounded-full ${
                    user.status === 'Active' ? 'bg-[#e8f5e9] text-[#2e7d32] border-[#2e7d32]/20' : 
                    user.status === 'Inactive' ? 'bg-[#f5f5f5] text-[#757575] border-[#757575]/20' : 
                    user.status === 'Blocked' ? 'bg-[#ffebee] text-[#c62828] border-[#c62828]/20' :
                    'bg-[#ffebee] text-[#c62828] border-[#c62828]/20'
                  }`}>
                    {user.status}
                  </Badge>
                </TableCell>
                <TableCell className="p-4">
                  <div className="flex items-center gap-3 min-w-[120px]">
                    <Progress value={user.completion} className="h-1.5 flex-1" />
                    <span className="text-xs text-[#7b848f]">{user.completion}%</span>
                  </div>
                </TableCell>
                <TableCell className="p-4">
                  {showUnblockButton ? (
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="text-[#62a230] border-[#62a230] hover:bg-[#62a230] hover:text-white text-xs px-3 py-1 h-8"
                      onClick={() => handleUnblockClick(user)}
                    >
                      Unblock Account
                    </Button>
                  ) : (
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="text-[#7b848f]">
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="w-48">
                        <DropdownMenuItem asChild>
                          <Link href={`/users/${user.id}`} className="cursor-pointer">View Profile</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600 focus:text-red-600 cursor-pointer">
                          <UserX className="w-4 h-4 mr-2" /> Block Account
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600 focus:text-red-600 cursor-pointer">
                          <ShieldAlert className="w-4 h-4 mr-2" /> Suspend Account
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="p-4 border-t flex items-center justify-between bg-white">
        <p className="text-xs text-[#7b848f]">Showing 1 to 100 list in 1 page</p>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="w-8 h-8 rounded-lg">
            <ChevronLeft className="w-4 h-4" />
          </Button>
          {[1, 2, 3, 4, 5].map((page) => (
            <Button
              key={page}
              variant="ghost"
              className={cn(
                "w-8 h-8 rounded-lg p-0 text-xs",
                currentPage === page ? "bg-[#62a230] text-white hover:bg-[#62a230]/90" : ""
              )}
              onClick={() => onPageChange?.(page)}
            >
              {page.toString().padStart(2, '0')}
            </Button>
          ))}
          <Button variant="ghost" size="icon" className="w-8 h-8 rounded-lg">
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
    </>
  );
}

const cn = (...classes: any[]) => classes.filter(Boolean).join(" ");

