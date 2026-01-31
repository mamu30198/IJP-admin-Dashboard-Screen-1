import { useState } from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  MoreVerticalIcon,
  Eye,
  Settings,
  Trash2,
} from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";

const tableHeaders = [
  { label: "Name", className: "w-[191px]" },
  { label: "Mobile", className: "w-[189px]" },
  { label: "City", className: "w-[282px]" },
  { label: "Registration", className: "w-[166px]" },
  { label: "Followers", className: "w-[109px]" },
  { label: "Following", className: "w-[101px]" },
  { label: "No of posts", className: "w-[143px]" },
  { label: "Profile Completion", className: "w-[309px]" },
  { label: "More", className: "w-[228px]" },
];

const getCompletionColor = (completion: number) => {
  if (completion >= 80) return "bg-[#62a230]";
  if (completion >= 50) return "bg-[#5ca0ff]";
  return "bg-[#ff8e44]";
};

export const UserTableSection = (): JSX.Element => {
  const { toast } = useToast();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const totalPages = 5;

  const { data: platformUsers = [] } = useQuery({
    queryKey: ["/api/dashboard/platform-users"],
    queryFn: async () => {
      const res = await fetch("/api/dashboard/platform-users", { credentials: "include" });
      if (!res.ok) return [];
      return res.json();
    },
  });

  const handleAction = (action: string, userName: string) => {
    toast({
      title: `${action} initiated`,
      description: `Performing ${action.toLowerCase()} on ${userName}`,
    });
  };

  const startIndex = (currentPage - 1) * itemsPerPage;

  return (
    <section className="flex flex-col items-start w-full">
      <div className="flex flex-col w-full items-start bg-white rounded-t-[20px] overflow-hidden">
        <div className="px-9 pt-[21px] pb-5">
          <h2 className="[font-family:'Poppins',Helvetica] font-semibold text-total-sales text-xl tracking-[-0.20px] leading-7">
            Recent Users Registered
          </h2>
        </div>

        <div className="w-full overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-[#efefef] opacity-70 hover:bg-[#efefef]">
                {tableHeaders.map((header, index) => (
                  <TableHead
                    key={index}
                    className={`h-10 [font-family:'Poppins',Helvetica] font-normal text-[#666666] text-xs tracking-[0] leading-3 ${header.className}`}
                  >
                    {header.label}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {platformUsers.map((user: any, index: number) => (
                <TableRow
                  key={user.id || index}
                  className="border-b border-[#edf1f3] h-[63px]"
                >
                  <TableCell className="py-[19px]">
                    <div className="flex items-center gap-1.5">
                      <Avatar className="w-[29px] h-[29px]">
                        <AvatarImage src={user.avatar || "/figmaAssets/ellipse-11.svg"} alt={user.name} />
                        <AvatarFallback>{user.name?.substring(0, 2).toUpperCase()}</AvatarFallback>
                      </Avatar>
                      <span className="[font-family:'Poppins',Helvetica] font-normal text-rectangle-164 text-xs tracking-[-0.12px] leading-[16.8px]">
                        {user.name}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="[font-family:'Poppins',Helvetica] font-normal text-rectangle-164 text-xs tracking-[-0.12px] leading-[16.8px]">
                    {user.mobile}
                  </TableCell>
                  <TableCell className="[font-family:'Poppins',Helvetica] font-normal text-rectangle-164 text-xs tracking-[-0.12px] leading-[16.8px]">
                    {user.city}
                  </TableCell>
                  <TableCell className="[font-family:'Poppins',Helvetica] font-normal text-rectangle-164 text-xs tracking-[-0.12px] leading-[16.8px]">
                    {user.registrationDate ? format(new Date(user.registrationDate), "d MMM, yyyy") : "N/A"}
                  </TableCell>
                  <TableCell className="[font-family:'Poppins',Helvetica] font-medium text-rectangle-164 text-xs tracking-[-0.12px] leading-[16.8px]">
                    {user.followers}
                  </TableCell>
                  <TableCell className="[font-family:'Poppins',Helvetica] font-medium text-rectangle-164 text-xs tracking-[-0.12px] leading-[16.8px]">
                    {user.following}
                  </TableCell>
                  <TableCell className="[font-family:'Poppins',Helvetica] font-medium text-rectangle-164 text-xs tracking-[-0.12px] leading-[16.8px]">
                    {user.posts}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-[7.6px]">
                      <div className="relative w-[176.78px] h-[7.6px] bg-[#d9d9d957] rounded-[95.05px] overflow-hidden">
                        <div
                          className={`h-2 ${getCompletionColor(user.profileCompletion)} rounded-[95.05px]`}
                          style={{
                            width: `${(user.profileCompletion / 100) * 176.78}px`,
                          }}
                        />
                      </div>
                      <span className="[font-family:'Poppins',Helvetica] font-medium text-rectangle-164 text-[11.4px] tracking-[-0.11px] leading-[16.0px] whitespace-nowrap">
                        {user.profileCompletion} %
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-auto w-5 p-0"
                        >
                          <MoreVerticalIcon className="w-5 h-5" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="w-40">
                        <DropdownMenuItem onClick={() => handleAction("View", user.name)}>
                          <Eye className="w-4 h-4 mr-2" /> View Details
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleAction("Edit", user.name)}>
                          <Settings className="w-4 h-4 mr-2" /> Edit User
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600 focus:text-red-600" onClick={() => handleAction("Delete", user.name)}>
                          <Trash2 className="w-4 h-4 mr-2" /> Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      <footer className="flex items-center justify-between p-6 w-full bg-white rounded-b-[20px] border-t border-[#edf1f3]">
        <p className="opacity-70 [font-family:'Poppins',Helvetica] font-normal text-rectangle-164 text-sm tracking-[0] leading-[21px]">
          Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, platformUsers.length || 8)} of {platformUsers.length || 8} users
        </p>

        <nav className="flex items-center gap-1">
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-auto w-10 p-0"
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            disabled={currentPage === 1}
          >
            <ChevronLeftIcon className="w-5 h-5" />
          </Button>

          {[1, 2, 3, 4, 5].map((page) => (
            <Button
              key={page}
              variant="ghost"
              onClick={() => setCurrentPage(page)}
              className={cn(
                "h-auto w-10 rounded-[190px] font-medium text-sm transition-all",
                currentPage === page
                  ? "bg-frame-4 text-white hover:bg-frame-4 hover:text-white"
                  : "text-rectangle-165 hover:bg-transparent"
              )}
            >
              {page.toString().padStart(2, '0')}
            </Button>
          ))}

          <Button 
            variant="ghost" 
            size="icon" 
            className="h-auto w-10 p-0"
            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
          >
            <ChevronRightIcon className="w-5 h-5" />
          </Button>
        </nav>
      </footer>
    </section>
  );
};
