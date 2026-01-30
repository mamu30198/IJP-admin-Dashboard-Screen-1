import { useState } from "react";
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
import { MoreHorizontal, ChevronLeft, ChevronRight } from "lucide-react";

export interface User {
  id: string | number;
  name: string;
  mobile: string;
  city: string;
  registration: string;
  activity: "High" | "Medium" | "Low";
  reports: string;
  status: "Active" | "Inactive" | "Suspended";
  completion: number;
}

interface UserTableProps {
  users: User[];
  onPageChange?: (page: number) => void;
  currentPage?: number;
}

export function UserTable({ users, onPageChange, currentPage = 2 }: UserTableProps) {
  return (
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
              <TableHead className="p-4"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id} className="hover:bg-[#f8fafc] transition-colors bg-white">
                <TableCell className="p-4">
                  <div className="flex items-center gap-3">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.id}`} />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <span className="text-sm font-medium text-[#222f36]">{user.name}</span>
                  </div>
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
                  <Button variant="ghost" size="icon" className="text-[#7b848f]">
                    <MoreHorizontal className="w-4 h-4" />
                  </Button>
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
  );
}

const cn = (...classes: any[]) => classes.filter(Boolean).join(" ");
