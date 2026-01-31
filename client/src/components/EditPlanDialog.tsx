import React from 'react';
import { X, Plus, ArrowLeft } from 'lucide-react';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface EditPlanDialogProps {
  isOpen: boolean;
  onClose: () => void;
  plan: {
    type: string;
    price: string;
  } | null;
}

export function EditPlanDialog({ isOpen, onClose, plan }: EditPlanDialogProps) {
  if (!plan) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[1000px] p-0 border-0 bg-transparent shadow-none">
        <div className="bg-white rounded-[32px] overflow-hidden p-12">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-[#2D3748]">Edit Plan</h2>
            <div className="flex items-center gap-6">
              <Button size="icon" className="bg-[#22C55E] hover:bg-[#1eb054] rounded-full h-10 w-10">
                <Plus className="w-6 h-6" />
              </Button>
              <button 
                onClick={onClose}
                className="flex items-center gap-2 text-[#4A5568] hover:text-[#2D3748] transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span className="text-sm font-bold">Back</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-12">
            {/* Left Column - General Info */}
            <div className="bg-[#F8FAFC] rounded-[32px] p-10 space-y-8">
              <div className="space-y-3">
                <label className="text-[11px] font-bold text-[#94A3B8] uppercase tracking-wider ml-1">Plan Name</label>
                <Input 
                  defaultValue={plan.type}
                  placeholder="Plan Name"
                  className="h-14 bg-white border-0 rounded-2xl px-6 text-[15px] font-medium text-[#2D3748] focus-visible:ring-2 focus-visible:ring-[#22C55E]/20"
                />
              </div>
              <div className="space-y-3">
                <label className="text-[11px] font-bold text-[#94A3B8] uppercase tracking-wider ml-1">Price</label>
                <Input 
                  defaultValue={plan.price.replace('$', '')}
                  placeholder="Price"
                  className="h-14 bg-white border-0 rounded-2xl px-6 text-[15px] font-medium text-[#2D3748] focus-visible:ring-2 focus-visible:ring-[#22C55E]/20"
                />
              </div>
            </div>

            {/* Right Column - Features */}
            <div className="bg-[#F8FAFC] rounded-[32px] p-10 relative">
              <Button size="icon" className="absolute top-8 left-8 bg-[#22C55E] hover:bg-[#1eb054] rounded-full h-10 w-10 z-10">
                <Plus className="w-6 h-6" />
              </Button>
              <div className="space-y-4 mt-12">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i}>
                    <Input 
                      placeholder={`Feature ${i}`}
                      className="h-14 bg-white border-0 rounded-2xl px-6 text-[15px] font-medium text-[#2D3748] focus-visible:ring-2 focus-visible:ring-[#22C55E]/20"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 flex justify-end">
            <Button 
              onClick={onClose}
              className="bg-[#22C55E] hover:bg-[#1eb054] text-white px-12 h-14 rounded-2xl text-lg font-bold min-w-[200px]"
            >
              Update
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
