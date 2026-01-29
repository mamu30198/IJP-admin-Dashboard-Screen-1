import {
  ChevronRightIcon,
  TrendingDownIcon,
  TrendingUpIcon,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const highRiskVendors = [
  {
    name: "AutoLux Parts",
    description: "Unusual discount patterns",
    score: 72,
    transactions: "124,580",
  },
  {
    name: "TechGadgets Pro",
    description: "Receipt format anomalies",
    score: 68,
    transactions: "89,420",
  },
  {
    name: "FashionHub Elite",
    description: "Rapid negative review increase",
    score: 65,
    transactions: "156,200",
  },
  {
    name: "HomeDecor Plus",
    description: "Payment dispute rate spike",
    score: 61,
    transactions: "45,890",
  },
];

const aiAlerts = [
  {
    emoji: "🔴",
    title: "Fraud Detection",
    description: "Suspicious receipt patterns detected across 14 vendors",
    confidence: "high confidence",
    action: "View Vendors",
    borderColor: "border-[#ef4343]",
    bgGradient:
      "bg-[linear-gradient(90deg,rgba(239,67,67,0.05)_0%,rgba(239,67,67,0)_100%)]",
    titleColor: "text-[#ef4343]",
  },
  {
    emoji: "🟠",
    title: "Vendor Risk",
    description: "Vendor 'AutoLux Parts' risk score increased to 72/100",
    confidence: "medium confidence",
    action: "Review Vendor",
    borderColor: "border-[#f59f0a]",
    bgGradient:
      "bg-[linear-gradient(90deg,rgba(245,159,10,0.05)_0%,rgba(245,159,10,0)_100%)]",
    titleColor: "text-[#f59f0a]",
  },
  {
    emoji: "🟢",
    title: "Revenue Intelligence",
    description: "Raising posting fee by 5% could increase MRR by ~$24k",
    confidence: "medium confidence",
    action: "Simulate Pricing",
    borderColor: "border-[#16a249]",
    bgGradient:
      "bg-[linear-gradient(90deg,rgba(22,162,73,0.05)_0%,rgba(22,162,73,0)_100%)]",
    titleColor: "text-[#16a249]",
  },
];

const platformMetrics = [
  {
    value: "$168K",
    label: "Ads Revenue (MTD)",
    percentage: "15%",
    trend: "up",
    gradient: "bg-gradient-to-br from-orange-400 to-orange-600",
  },
  {
    value: "3.8M",
    label: "Total Posts",
    percentage: "5%",
    trend: "up",
    gradient: "bg-gradient-to-br from-emerald-400 to-emerald-600",
  },
  {
    value: "$314K",
    label: "Subscriptions Revenue",
    percentage: "9%",
    trend: "up",
    gradient: "bg-gradient-to-br from-purple-500 to-purple-700",
  },
  {
    value: "27",
    label: "Fraud Alerts",
    percentage: "23%",
    trend: "down",
    gradient: "bg-gradient-to-br from-red-500 to-red-700",
  },
];

export const AnalyticsSummarySection = (): JSX.Element => {
  return (
    <div className="flex w-full items-start gap-6 relative flex-col xl:flex-row">
      <Card className="flex-1 w-full bg-white rounded-xl border border-solid border-[#e0ebe5]">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center">
              <AlertTriangle className="w-5 h-5 text-red-600" />
            </div>
            <CardTitle className="font-semibold text-[#12211c] text-lg">
              High-Risk Vendors
            </CardTitle>
          </div>
          <Button
            variant="ghost"
            className="h-auto text-[#21c45d] hover:text-[#21c45d] hover:bg-transparent p-0"
          >
            <span className="text-sm">View All</span>
            <ChevronRightIcon className="w-3 h-3 ml-1" />
          </Button>
        </CardHeader>
        <CardContent className="space-y-3">
          {highRiskVendors.map((vendor, index) => (
            <div
              key={index}
              className="rounded-xl border border-solid border-[#ef43431a] bg-[#ef434305] p-4 flex items-center justify-between hover:bg-[#ef43430a] transition-colors"
            >
              <div className="flex flex-col gap-1">
                <div className="font-semibold text-[#12211c] text-sm">
                  {vendor.name}
                </div>
                <div className="text-[#677e77] text-xs">
                  {vendor.description}
                </div>
              </div>
              <div className="flex flex-col items-end gap-1">
                <div className="font-bold text-[#ef4343] text-lg">
                  {vendor.score}
                </div>
                <div className="text-[#677e77] text-xs">
                  {vendor.transactions}
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="flex-1 w-full bg-white rounded-xl border border-solid border-[#e0ebe5]">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
            </div>
            <CardTitle className="font-semibold text-[#12211c] text-lg">
              AI Intelligence
            </CardTitle>
          </div>
          <Button
            variant="ghost"
            className="h-auto text-[#21c45d] hover:text-[#21c45d] hover:bg-transparent p-0"
          >
            <span className="text-sm">View Center</span>
            <ChevronRightIcon className="w-3 h-3 ml-1" />
          </Button>
        </CardHeader>
        <CardContent className="space-y-3">
          {aiAlerts.map((alert, index) => (
            <div
              key={index}
              className={`rounded-xl border-l-4 ${alert.borderColor} ${alert.bgGradient} p-4 flex flex-col justify-between hover:brightness-95 transition-all`}
            >
              <div className="space-y-2">
                <div className={`font-semibold ${alert.titleColor} text-sm`}>
                  {alert.emoji} {alert.title}
                </div>
                <div className="font-medium text-[#12211c] text-sm">
                  {alert.description}
                </div>
              </div>
              <div className="flex items-center justify-between mt-4">
                <div className="text-[#677e77] text-xs">
                  {alert.confidence}
                </div>
                <Button
                  variant="ghost"
                  className="h-auto text-[#21c45d] hover:text-[#21c45d] hover:bg-transparent p-0"
                >
                  <span className="text-xs font-semibold uppercase tracking-wider">
                    {alert.action} →
                  </span>
                </Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="w-full xl:w-[478px] bg-white rounded-xl border border-solid border-[#e0ebe5]">
        <CardHeader className="space-y-1 pb-6">
          <CardTitle className="font-semibold text-[#222f36] text-xl">
            Platform Overviews
          </CardTitle>
          <p className="text-[#8c8c8c] text-sm">
            Performance metrics overview
          </p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            {platformMetrics.map((metric, index) => (
              <div
                key={index}
                className={`${metric.gradient} relative h-[140px] rounded-xl overflow-hidden p-4 flex flex-col justify-between shadow-sm hover:scale-[1.02] transition-transform`}
              >
                <div className="relative flex items-start justify-between">
                  <Badge className="bg-white/20 hover:bg-white/30 text-white border-0 h-6 px-2 gap-1 backdrop-blur-sm">
                    {metric.trend === "up" ? (
                      <TrendingUpIcon className="w-3 h-3" />
                    ) : (
                      <TrendingDownIcon className="w-3 h-3" />
                    )}
                    <span className="font-bold text-[10px]">
                      {metric.percentage}
                    </span>
                  </Badge>
                </div>
                <div className="relative space-y-1">
                  <div className="font-bold text-white text-2xl tracking-tight">
                    {metric.value}
                  </div>
                  <div className="font-medium text-white/80 text-[11px] uppercase tracking-wider">
                    {metric.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

import { ShieldCheck, AlertTriangle } from "lucide-react";
