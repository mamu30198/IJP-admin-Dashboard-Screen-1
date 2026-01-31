import React from 'react';
import { X, Download, Printer, User } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface PermissionProfilePanelProps {
  isOpen: boolean;
  onClose: () => void;
  data: {
    user: string;
    role: string;
    transferId: string;
    date: string;
    method: string;
    status: string;
    amount: string;
    source: string;
  } | null;
}

export function PermissionProfilePanel({ isOpen, onClose, data }: PermissionProfilePanelProps) {
  if (!data) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className={cn(
          "fixed inset-0 bg-black/20 z-40 transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
      />
      
      {/* Panel */}
      <div 
        className={cn(
          "fixed top-0 right-0 h-full w-[480px] bg-white z-50 shadow-2xl transition-transform duration-300 ease-in-out p-8 flex flex-col overflow-y-auto",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <X className="w-5 h-5 text-gray-400" />
        </button>

        <div className="flex items-center gap-4 mb-8">
          <Avatar className="w-16 h-16 ring-4 ring-[#F8FAFC]">
            <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${data.user}`} />
            <AvatarFallback><User /></AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-[#2D3748]">{data.user}</h3>
            <p className="text-sm text-gray-400 font-medium">@{data.user.toLowerCase().replace(' ', '')}50</p>
          </div>
          <div className="text-right">
            <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1">Status</div>
            <Badge variant="secondary" className="bg-[#F0FDF4] text-[#22C55E] hover:bg-[#F0FDF4] border-0 rounded-full px-4 py-1">
              {data.status}
            </Badge>
          </div>
          <div className="ml-4">
            <div className="text-3xl font-bold text-[#22C55E]">$300</div>
          </div>
        </div>

        <div className="p-4 bg-[#F8FAFC] rounded-2xl mb-8">
          <p className="text-[13px] text-[#4A5568] leading-relaxed italic">
            This is the receipt for a payment of $4000 (USD) .
          </p>
        </div>

        <div className="flex gap-3 mb-10">
          <Button variant="secondary" className="flex-1 bg-[#F8FAFC] text-[#4A5568] hover:bg-gray-100 border-0 rounded-xl h-11">
            <Download className="w-4 h-4 mr-2" /> Download
          </Button>
          <Button className="flex-1 bg-[#22C55E] text-white hover:bg-[#1eb054] border-0 rounded-xl h-11">
            <Printer className="w-4 h-4 mr-2" /> Print Doc
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-8 mb-10">
          <div>
            <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-2">Payment Method</div>
            <div className="text-[15px] font-bold text-[#2D3748]">Google pay</div>
          </div>
          <div className="text-right">
            <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-2">Payment date</div>
            <div className="text-[13px] font-medium text-[#4A5568]">10 December, 2021 - 03:45 pm</div>
          </div>
        </div>

        <div className="flex-1">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left py-3 text-[10px] text-gray-400 font-bold uppercase tracking-wider">Payment for</th>
                <th className="text-center py-3 text-[10px] text-gray-400 font-bold uppercase tracking-wider">QUANITY</th>
                <th className="text-right py-3 text-[10px] text-gray-400 font-bold uppercase tracking-wider">AMOUNT</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              <tr>
                <td className="py-6 pr-4">
                  <div className="flex gap-4">
                    <span className="text-[13px] font-bold text-[#2D3748]">1</span>
                    <div>
                      <div className="text-[13px] font-bold text-[#2D3748] mb-1">Product posting</div>
                      <div className="text-[11px] text-gray-400 leading-relaxed font-medium">
                        in semper pharetra eget porta odio imperdiet turpis facilisis co
                      </div>
                    </div>
                  </div>
                </td>
                <td className="py-6 text-center text-[13px] font-bold text-[#2D3748]">1</td>
                <td className="py-6 text-right text-[13px] font-bold text-[#2D3748]">$4000</td>
              </tr>
            </tbody>
            <tfoot>
              <tr className="border-t border-gray-100">
                <td colSpan={2} className="py-8 text-right text-[11px] font-bold text-[#94A3B8] uppercase tracking-wider pr-8">
                  TOTAL DUE
                </td>
                <td className="py-8 text-right text-[15px] font-bold text-[#2D3748]">
                  $4000
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </>
  );
}
