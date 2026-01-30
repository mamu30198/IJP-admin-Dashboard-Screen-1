import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: string;
  className?: string;
  iconBgClassName?: string;
}

export function StatCard({ 
  title, 
  value, 
  icon, 
  className,
  iconBgClassName 
}: StatCardProps) {
  return (
    <Card className={cn("border-0 shadow-[0px_1px_2px_#0000000d] rounded-[15px] bg-white", className)}>
      <CardContent className="p-5 flex items-center justify-between">
        <div className="space-y-1">
          <p className="text-[11px] font-medium text-[#7b848f] uppercase tracking-wider">{title}</p>
          <p className="text-2xl font-bold text-[#222f36]">{value}</p>
        </div>
        <div className={cn(
          "w-12 h-12 rounded-full flex items-center justify-center border border-[#edf1f3] bg-white",
          iconBgClassName
        )}>
          <img src={icon} alt={title} className="w-6 h-6" />
        </div>
      </CardContent>
    </Card>
  );
}
