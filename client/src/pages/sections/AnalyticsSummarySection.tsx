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
    icon: "/figmaAssets/overlay-3.svg",
    value: "$168K",
    label: "Ads Revenue (MTD)",
    percentage: "15%",
    trend: "up",
    gradient:
      "bg-[linear-gradient(149deg,rgba(245,159,10,1)_0%,rgba(212,98,17,1)_100%)]",
  },
  {
    icon: "/figmaAssets/overlay-2.svg",
    value: "3.8M",
    label: "Total Posts",
    percentage: "5%",
    trend: "up",
    gradient:
      "bg-[linear-gradient(149deg,rgba(46,184,161,1)_0%,rgba(40,138,138,1)_100%)]",
  },
  {
    icon: "/figmaAssets/overlay-5.svg",
    value: "$314K",
    label: "Subscriptions Revenue",
    percentage: "9%",
    trend: "up",
    gradient:
      "bg-[linear-gradient(149deg,rgba(175,87,219,1)_0%,rgba(174,57,198,1)_100%)]",
  },
  {
    icon: "/figmaAssets/overlay-4.svg",
    value: "27",
    label: "Fraud Alerts",
    percentage: "23%",
    trend: "down",
    gradient:
      "bg-[linear-gradient(149deg,rgba(239,67,67,1)_0%,rgba(223,32,64,1)_100%)]",
  },
];

export const AnalyticsSummarySection = (): JSX.Element => {
  return (
    <div className="flex w-full items-start gap-6 relative">
      <Card className="flex-1 bg-white rounded-xl border border-solid border-[#e0ebe5]">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <div className="flex items-center gap-3">
            <img
              className="w-[34px] h-[34px]"
              alt="High Risk Vendors Icon"
              src="/figmaAssets/overlay.svg"
            />
            <CardTitle className="font-heading-3-high-risk-vendors font-[number:var(--heading-3-high-risk-vendors-font-weight)] text-[#12211c] text-[length:var(--heading-3-high-risk-vendors-font-size)] tracking-[var(--heading-3-high-risk-vendors-letter-spacing)] leading-[var(--heading-3-high-risk-vendors-line-height)] [font-style:var(--heading-3-high-risk-vendors-font-style)]">
              Heading 3 → High-Risk Vendors
            </CardTitle>
          </div>
          <Button
            variant="ghost"
            className="h-auto text-[#21c45d] hover:text-[#21c45d] hover:bg-transparent p-0"
          >
            <span className="text-sm leading-5 [font-family:'Inter',Helvetica] font-normal">
              View All
            </span>
            <ChevronRightIcon className="w-3 h-3 ml-1" />
          </Button>
        </CardHeader>
        <CardContent className="space-y-3">
          {highRiskVendors.map((vendor, index) => (
            <div
              key={index}
              className="h-[70px] rounded-xl border border-solid border-[#ef43431a] bg-[linear-gradient(90deg,rgba(239,67,67,0.05)_0%,rgba(239,67,67,0)_100%)] p-[13px] flex items-center justify-between"
            >
              <div className="flex flex-col gap-1">
                <div className="font-new-post-created font-[number:var(--new-post-created-font-weight)] text-[#12211c] text-[length:var(--new-post-created-font-size)] tracking-[var(--new-post-created-letter-spacing)] leading-[var(--new-post-created-line-height)] [font-style:var(--new-post-created-font-style)]">
                  {vendor.name}
                </div>
                <div className="[font-family:'Inter',Helvetica] font-normal text-[#677e77] text-xs tracking-[0] leading-4">
                  {vendor.description}
                </div>
              </div>
              <div className="flex flex-col items-end gap-1">
                <div className="[font-family:'Inter',Helvetica] font-bold text-[#ef4343] text-lg tracking-[0] leading-7">
                  {vendor.score}
                </div>
                <div className="[font-family:'Inter',Helvetica] font-normal text-[#677e77] text-xs tracking-[0] leading-4">
                  {vendor.transactions}
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="flex-1 bg-white rounded-xl border border-solid border-[#e0ebe5]">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <div className="flex items-center gap-3">
            <img
              className="w-[34px] h-[34px]"
              alt="AI Intelligence Icon"
              src="/figmaAssets/overlay-1.svg"
            />
            <CardTitle className="font-daily-active-users font-[number:var(--daily-active-users-font-weight)] text-[#12211c] text-[length:var(--daily-active-users-font-size)] tracking-[var(--daily-active-users-letter-spacing)] leading-[var(--daily-active-users-line-height)] [font-style:var(--daily-active-users-font-style)]">
              AI Intelligence
            </CardTitle>
          </div>
          <Button
            variant="ghost"
            className="h-auto text-[#21c45d] hover:text-[#21c45d] hover:bg-transparent p-0"
          >
            <span className="text-sm leading-5 [font-family:'Inter',Helvetica] font-normal">
              View Center
            </span>
            <ChevronRightIcon className="w-3 h-3 ml-1" />
          </Button>
        </CardHeader>
        <CardContent className="space-y-3">
          {aiAlerts.map((alert, index) => (
            <div
              key={index}
              className={`h-[104px] rounded-xl border-l-4 ${alert.borderColor} ${alert.bgGradient} p-5 flex flex-col justify-between`}
            >
              <div className="space-y-2">
                <div
                  className={`font-new-post-created font-[number:var(--new-post-created-font-weight)] ${alert.titleColor} text-[length:var(--new-post-created-font-size)] tracking-[var(--new-post-created-letter-spacing)] leading-[var(--new-post-created-line-height)] [font-style:var(--new-post-created-font-style)]`}
                >
                  {alert.emoji} {alert.title}
                </div>
                <div className="[font-family:'Inter',Helvetica] font-medium text-[#12211c] text-sm tracking-[0] leading-5">
                  {alert.description}
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="[font-family:'Inter',Helvetica] font-normal text-[#677e77] text-xs tracking-[0] leading-4">
                  {alert.confidence}
                </div>
                <Button
                  variant="ghost"
                  className="h-auto text-[#21c45d] hover:text-[#21c45d] hover:bg-transparent p-0"
                >
                  <span className="[font-family:'Inter',Helvetica] font-normal text-xs tracking-[0] leading-4">
                    {alert.action} →
                  </span>
                </Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="w-[478px] bg-white rounded-xl border border-solid border-[#e0ebe5]">
        <CardHeader className="space-y-1 pb-6">
          <CardTitle className="[font-family:'Poppins',Helvetica] font-semibold text-total-sales text-xl tracking-[-0.20px] leading-7">
            Platform Overviews
          </CardTitle>
          <p className="[font-family:'Inter',Helvetica] font-normal text-[#8c8c8c] text-sm tracking-[0] leading-5">
            Overview of IJustPaid platform performance
          </p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-[13px]">
            {platformMetrics.map((metric, index) => (
              <div
                key={index}
                className={`${metric.gradient} relative h-[146px] rounded-[9.82px] overflow-hidden p-4 flex flex-col justify-between`}
              >
                <div className="absolute w-full h-full top-0 left-0 rounded-[9.82px] bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.1)_50%,rgba(255,255,255,0)_100%)]" />
                <div className="relative flex items-start justify-between">
                  <img
                    className="w-[33px] h-[33px]"
                    alt={metric.label}
                    src={metric.icon}
                  />
                  <Badge className="bg-[#ffffff33] hover:bg-[#ffffff33] text-white border-0 h-5 px-2 gap-1">
                    {metric.trend === "up" ? (
                      <TrendingUpIcon className="w-[9.82px] h-[9.82px]" />
                    ) : (
                      <TrendingDownIcon className="w-[9.82px] h-[9.82px]" />
                    )}
                    <span className="[font-family:'Inter',Helvetica] font-bold text-[9.8px] tracking-[0] leading-[13.1px]">
                      {metric.percentage}
                    </span>
                  </Badge>
                </div>
                <div className="relative space-y-1">
                  <div className="[font-family:'Inter',Helvetica] font-bold text-white text-[24.5px] tracking-[-0.61px] leading-[29.5px]">
                    {metric.value}
                  </div>
                  <div className="[font-family:'Inter',Helvetica] font-medium text-[#ffffffcc] text-[11.5px] tracking-[0] leading-[16.4px]">
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
