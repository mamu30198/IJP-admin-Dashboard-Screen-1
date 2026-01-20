import { CalendarIcon, SearchIcon } from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const statsCards = [
  {
    title: "Total Posts",
    value: "1,234",
    icon: "/figmaAssets/frame-1171275704-3.svg",
  },
  {
    title: "Active Users",
    value: "1,234",
    icon: "/figmaAssets/frame-1171275704-2.svg",
  },
  {
    title: "Sponsored Posts",
    value: "1,234",
    icon: "/figmaAssets/frame-1171275704-4.svg",
  },
  {
    title: "Total Revenue",
    value: "1,234",
    icon: "/figmaAssets/frame-1171275704.svg",
  },
  {
    title: "Total Vendors",
    value: "1,234",
    icon: "/figmaAssets/frame-1171275704-1.svg",
  },
  {
    title: "Total Users",
    value: "1,234",
    icon: "/figmaAssets/frame-1171275705.svg",
  },
];

const recentActivities = [
  {
    title: "New post created",
    description: "John Doe created a new deal",
    time: "2 min ago",
    color: "bg-[#10b5cb]",
  },
  {
    title: "New user registered",
    description: "Jane Smith joined the platform",
    time: "2 min ago",
    color: "bg-frame-4",
  },
  {
    title: "Payment received",
    description: "John Doe created a new deal",
    time: "2 min ago",
    color: "bg-[#ffcc00]",
  },
  {
    title: "New post created",
    description: "John Doe created a new deal",
    time: "2 min ago",
    color: "bg-[#10b5cb]",
  },
  {
    title: "New post created",
    description: "John Doe created a new deal",
    time: "2 min ago",
    color: "bg-[#10b5cb]",
  },
];

const salesChartDates = [
  "2 Oct",
  "3 Oct",
  "4 Oct",
  "5 Oct",
  "6 Oct",
  "7 Oct",
  "8 Oct",
  "9 Oct",
];

const salesChartYAxis = ["250 k", "200  k", "150 k", "100 k", "50 k", "0 k"];

const dailyActiveUsersXAxis = [
  "Dec 16",
  "Dec 18",
  "Dec 20",
  "Dec 22",
  "Dec 24",
  "Dec 26",
  "Dec 28",
];

const dailyActiveUsersYAxis = ["200K", "150K", "100K", "50K", "0K"];

const revenueSourcesXAxis = ["$0K", "$80K", "$160K", "$240K", "$320K"];

const revenueSourcesYAxis = ["Subscriptions", "Ads Revenue"];

const reportsByRegionXAxis = [
  "North America",
  "Europe",
  "Asia Pacific",
  "Latin America",
  "Middle East",
  "Africa",
];

const reportsByRegionYAxis = ["6,000", "4,500", "3,000", "1,500", "0"];

export const DashboardMainSection = (): JSX.Element => {
  return (
    <div className="flex flex-col gap-4 w-full">
      <header className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 w-full">
        <div className="flex items-center gap-3.5">
          <h1 className="[font-family:'Poppins',Helvetica] font-semibold text-total-sales text-2xl tracking-[0] leading-[33.6px] whitespace-nowrap">
            Dashboard
          </h1>
          <div className="flex items-center gap-[13px]">
            <div className="w-px h-[19.5px] bg-title opacity-30" />
            <p className="[font-family:'Poppins',Helvetica] font-normal text-title text-xs tracking-[0] leading-[18px]">
              Hello , 👋 Jack Welcome to Ijustpaid dashboard
            </p>
          </div>
        </div>

        <div className="flex items-center gap-[19px]">
          <div className="relative w-full lg:w-[388px]">
            <SearchIcon className="absolute left-[17px] top-1/2 -translate-y-1/2 w-[15.61px] h-[15.61px] text-title opacity-50" />
            <Input
              placeholder="Search For Anything"
              className="h-[38px] pl-[45px] pr-[17px] bg-white rounded-[19px] border-[0.6px] border-[#7a838e] [font-family:'Poppins',Helvetica] font-normal text-total-sales text-sm"
            />
          </div>

          <button className="w-[42px] h-[34px]">
            <img
              className="w-full h-full"
              alt="Notifications"
              src="/figmaAssets/item---link-1.svg"
            />
          </button>

          <div className="flex items-center gap-2">
            <Avatar className="w-7 h-7">
              <AvatarImage src="/figmaAssets/2-jpg.png" />
              <AvatarFallback>MJ</AvatarFallback>
            </Avatar>
            <span className="[font-family:'Poppins',Helvetica] font-medium text-title text-[13.6px] tracking-[0] leading-[13.6px] whitespace-nowrap">
              Mr. Jack
            </span>
          </div>

          <button className="w-[42px] h-[34px]">
            <img
              className="w-full h-full"
              alt="Menu"
              src="/figmaAssets/item---link.svg"
            />
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-2.5 w-full">
        {statsCards.map((stat, index) => (
          <Card
            key={index}
            className="h-auto bg-white rounded-[15px] shadow-[0px_1px_2px_#0000000d] border-0"
          >
            <CardContent className="p-[22px_38px] flex items-center justify-between gap-4">
              <div className="flex flex-col gap-[5.36px]">
                <p className="[font-family:'Poppins',Helvetica] font-medium text-title text-[11.3px] tracking-[0] leading-[normal]">
                  {stat.title}
                </p>
                <p className="[font-family:'Poppins',Helvetica] font-semibold text-total-sales text-[22.6px] tracking-[0] leading-[normal]">
                  {stat.value}
                </p>
              </div>
              <img
                className="w-[53.47px] h-[53.47px]"
                alt={stat.title}
                src={stat.icon}
              />
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-[624px_424px_491px] gap-4 w-full">
        <Card className="h-auto bg-white rounded-[10px] overflow-hidden shadow-[0px_1px_3px_#00000005,0px_6px_10px_#b1b1b114] border-0">
          <CardHeader className="p-[31px_30px_0_30px]">
            <div className="flex items-center justify-between">
              <CardTitle className="[font-family:'Poppins',Helvetica] font-semibold text-total-sales text-xl tracking-[-0.20px] leading-7">
                Sales Revenue
              </CardTitle>
              <div className="flex items-center gap-[5px] px-3 py-2 bg-white rounded-[5px] border-[0.5px] border-[#7a838e]">
                <CalendarIcon className="w-4 h-4 text-title" />
                <span className="[font-family:'Poppins',Helvetica] font-normal text-title text-xs tracking-[0] leading-[18px] whitespace-nowrap">
                  2 Oct to 18 Oct , 2025
                </span>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-[24px_23px_30px_23px]">
            <div className="relative w-full h-[320px]">
              <div className="absolute top-0 left-0 flex flex-col items-end gap-8">
                {salesChartYAxis.map((label, index) => (
                  <span
                    key={index}
                    className="[font-family:'Poppins',Helvetica] font-normal text-title text-xs tracking-[0] leading-[18px] whitespace-nowrap"
                  >
                    {label}
                  </span>
                ))}
              </div>

              <div className="absolute top-[24px] left-[52px] w-[508px] h-[250px] flex flex-col justify-between">
                {Array.from({ length: 6 }).map((_, index) => (
                  <img
                    key={index}
                    className="w-full h-px object-cover"
                    alt="Line"
                    src={
                      index < 4
                        ? "/figmaAssets/line-5.svg"
                        : "/figmaAssets/line-8.svg"
                    }
                  />
                ))}
              </div>

              <img
                className="absolute top-[67px] left-[73px] w-[504px] h-[146px]"
                alt="Sales Chart"
                src="/figmaAssets/group-3.png"
              />

              <div className="absolute top-[105px] left-[167px] w-[165px] h-[234px]">
                <img
                  className="absolute top-[118px] left-[82px] w-px h-[116px] object-cover"
                  alt="Line"
                  src="/figmaAssets/line-5-1.svg"
                />
                <div className="absolute top-0 left-0 w-full h-[98px]">
                  <img
                    className="absolute w-full h-full top-[-8px] left-[-16px]"
                    alt="Shape"
                    src="/figmaAssets/shape.svg"
                  />
                  <div className="absolute top-4 left-[17px] flex flex-col items-start">
                    <span className="font-body-label-8px-r font-[number:var(--body-label-8px-r-font-weight)] text-title text-[length:var(--body-label-8px-r-font-size)] text-center tracking-[var(--body-label-8px-r-letter-spacing)] leading-[var(--body-label-8px-r-line-height)] [font-style:var(--body-label-8px-r-font-style)]">
                      This Month
                    </span>
                    <span className="font-[number:var(--h3-22px-SB-font-weight)] text-[#11263c] text-[length:var(--h3-22px-SB-font-size)] leading-[var(--h3-22px-SB-line-height)] font-h3-22px-SB text-center tracking-[var(--h3-22px-SB-letter-spacing)] [font-style:var(--h3-22px-SB-font-style)]">
                      100,202
                    </span>
                    <span className="font-[number:var(--body-small-12px-r-font-weight)] text-title text-[length:var(--body-small-12px-r-font-size)] leading-[var(--body-small-12px-r-line-height)] font-body-small-12px-r text-center tracking-[var(--body-small-12px-r-letter-spacing)] [font-style:var(--body-small-12px-r-font-style)]">
                      May
                    </span>
                  </div>
                </div>
                <div className="absolute top-[108px] left-[72px] w-5 h-5 bg-frame-4 rounded-[10px] border-4 border-white shadow-[0px_2.67px_5.33px_#3232470f,0px_2.67px_2.67px_#3232470f]" />
              </div>

              <div className="absolute bottom-0 left-[52px] flex items-start gap-8">
                {salesChartDates.map((date, index) => (
                  <span
                    key={index}
                    className="[font-family:'Poppins',Helvetica] font-normal text-title text-xs tracking-[0] leading-[18px] whitespace-nowrap"
                  >
                    {date}
                  </span>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="h-auto bg-white rounded-[10px] overflow-hidden border border-[#efefef] shadow-[0px_1px_3px_#00000005,0px_6px_10px_#b1b1b114]">
          <CardHeader className="p-[20px_16px_0_16px]">
            <CardTitle className="[font-family:'Poppins',Helvetica] font-semibold text-total-sales text-xl tracking-[-0.20px] leading-7">
              Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent className="p-[20px_16px_16px_16px]">
            <div className="flex flex-col gap-2.5">
              {recentActivities.map((activity, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between h-[58px] pl-4 pr-[22px] py-1.5 bg-[#d9d9d933] rounded-[5px]"
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`w-[11px] h-[11px] ${activity.color} rounded-full`}
                    />
                    <div className="flex flex-col">
                      <span className="[font-family:'Poppins',Helvetica] font-medium text-x-1234 text-sm tracking-[0] leading-5">
                        {activity.title}
                      </span>
                      <span className="opacity-70 [font-family:'Poppins',Helvetica] font-normal text-total-sales text-[10px] tracking-[0] leading-5">
                        {activity.description}
                      </span>
                    </div>
                  </div>
                  <span className="[font-family:'Poppins',Helvetica] font-normal text-title text-[10.5px] tracking-[0] leading-4 whitespace-nowrap">
                    {activity.time}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="h-auto bg-white rounded-[10px] overflow-hidden border border-[#efefef] shadow-[0px_1px_3px_#00000005,0px_6px_10px_#b1b1b114]">
          <CardHeader className="p-[26px_31px_0_31px]">
            <CardTitle className="[font-family:'Poppins',Helvetica] font-semibold text-total-sales text-xl tracking-[-0.20px] leading-7">
              User Overview
            </CardTitle>
          </CardHeader>
          <CardContent className="p-[24px_31px_31px_31px]">
            <div className="flex items-center justify-between">
              <div className="relative w-[248px] h-[248px]">
                <img
                  className="absolute top-[23px] left-[131px] w-[122px] h-[229px]"
                  alt="Chart segment"
                  src="/figmaAssets/3rd.svg"
                />
                <img
                  className="absolute top-[-5px] left-[-5px] w-[216px] h-[258px]"
                  alt="Chart segment"
                  src="/figmaAssets/1st.svg"
                />
              </div>

              <div className="flex flex-col gap-[46px]">
                <div className="flex items-center gap-5">
                  <div className="w-[22px] h-[23px] bg-[#e3b40e] rounded-[11px]" />
                  <div className="flex flex-col items-center">
                    <span className="[font-family:'Poppins',Helvetica] font-medium text-total-sales text-[28px] tracking-[0] leading-[39.2px] whitespace-nowrap">
                      14k
                    </span>
                    <span className="[font-family:'Poppins',Helvetica] font-medium text-total-sales text-xs tracking-[0] leading-[16.8px] whitespace-nowrap">
                      Vendors
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-5">
                  <div className="w-[22px] h-[23px] bg-[#62a230] rounded-[11px]" />
                  <div className="flex flex-col items-start">
                    <span className="[font-family:'Poppins',Helvetica] font-medium text-total-sales text-[28px] tracking-[0] leading-[39.2px] whitespace-nowrap">
                      102k
                    </span>
                    <span className="[font-family:'Poppins',Helvetica] font-medium text-total-sales text-xs tracking-[0] leading-[16.8px] whitespace-nowrap">
                      Users
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
        <Card className="h-auto bg-white rounded-xl border border-[#e0ebe5]">
          <CardHeader className="p-[27px_36px_0_36px]">
            <div className="flex flex-col gap-[3px]">
              <CardTitle className="font-daily-active-users font-[number:var(--daily-active-users-font-weight)] text-total-sales text-[length:var(--daily-active-users-font-size)] tracking-[var(--daily-active-users-letter-spacing)] leading-[var(--daily-active-users-line-height)] [font-style:var(--daily-active-users-font-style)]">
                Daily Active Users
              </CardTitle>
              <p className="[font-family:'Inter',Helvetica] font-normal text-[#8c8c8c] text-sm tracking-[0] leading-5">
                Last 14 days trend
              </p>
            </div>
          </CardHeader>
          <CardContent className="p-[24px_21px_21px_21px]">
            <div className="relative w-full h-[256px]">
              <div className="absolute top-[14px] left-[63px] w-[396px] h-[207px] flex flex-col justify-between opacity-30">
                {Array.from({ length: 6 }).map((_, index) => (
                  <img
                    key={index}
                    className="w-full h-px object-cover"
                    alt="Line"
                    src={
                      index === 0
                        ? "/figmaAssets/line-4-1.svg"
                        : "/figmaAssets/line-7-1.svg"
                    }
                  />
                ))}
              </div>

              <div className="absolute top-0 left-0 flex flex-col items-end gap-8">
                {dailyActiveUsersYAxis.map((label, index) => (
                  <span
                    key={index}
                    className="[font-family:'Inter',Helvetica] font-normal text-[#666666] text-[11px] text-right tracking-[0] leading-[normal] whitespace-nowrap"
                  >
                    {label}
                  </span>
                ))}
              </div>

              <img
                className="absolute top-[84px] left-[62px] w-[397px] h-[135px]"
                alt="Chart"
                src="/figmaAssets/group.png"
              />

              <div className="absolute bottom-0 left-[74px] flex items-start gap-8">
                {dailyActiveUsersXAxis.map((date, index) => (
                  <span
                    key={index}
                    className="[font-family:'Inter',Helvetica] font-normal text-[#666666] text-[11px] text-center tracking-[0] leading-[normal] whitespace-nowrap"
                  >
                    {date}
                  </span>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="h-auto bg-white rounded-xl border border-[#e0ebe5]">
          <CardHeader className="p-[27px_36px_0_36px]">
            <div className="flex flex-col gap-[3px]">
              <CardTitle className="[font-family:'Poppins',Helvetica] font-semibold text-total-sales text-xl tracking-[-0.20px] leading-7">
                Revenue Sources
              </CardTitle>
              <p className="[font-family:'Inter',Helvetica] font-normal text-[#8c8c8c] text-sm tracking-[0] leading-5">
                Monthly breakdown
              </p>
            </div>
          </CardHeader>
          <CardContent className="p-[24px_20px_20px_20px]">
            <div className="relative w-full h-[256px]">
              <div className="absolute top-0 left-0 flex flex-col gap-[15px]">
                {revenueSourcesYAxis.map((label, index) => (
                  <span
                    key={index}
                    className="[font-family:'Inter',Helvetica] font-normal text-[#666666] text-[11px] text-right tracking-[0] leading-[normal] whitespace-nowrap"
                  >
                    {label}
                  </span>
                ))}
              </div>

              <img
                className="absolute top-[16px] left-[87px] w-[220px] h-[194px]"
                alt="Chart"
                src="/figmaAssets/group-1.png"
              />

              <div className="absolute bottom-0 left-[75px] flex items-start gap-8">
                {revenueSourcesXAxis.map((value, index) => (
                  <span
                    key={index}
                    className="[font-family:'Inter',Helvetica] font-normal text-[#666666] text-[11px] text-center tracking-[0] leading-[normal] whitespace-nowrap"
                  >
                    {value}
                  </span>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="h-auto bg-white rounded-xl border border-[#e0ebe5]">
          <CardHeader className="p-[27px_36px_0_36px]">
            <div className="flex flex-col gap-[3px]">
              <CardTitle className="[font-family:'Poppins',Helvetica] font-semibold text-total-sales text-xl tracking-[-0.20px] leading-7">
                Reports by Region
              </CardTitle>
              <p className="[font-family:'Inter',Helvetica] font-normal text-[#8c8c8c] text-sm tracking-[0] leading-5">
                Moderation workload
              </p>
            </div>
          </CardHeader>
          <CardContent className="p-[24px_13px_13px_13px]">
            <div className="relative w-full h-[256px]">
              <div className="absolute top-0 left-[25px] flex flex-col items-end gap-8">
                {reportsByRegionYAxis.map((label, index) => (
                  <span
                    key={index}
                    className="[font-family:'Inter',Helvetica] font-normal text-[#666666] text-[11px] text-right tracking-[0] leading-[normal] whitespace-nowrap"
                  >
                    {label}
                  </span>
                ))}
              </div>

              <img
                className="absolute top-[66px] left-[69px] w-[255px] h-[135px]"
                alt="Chart"
                src="/figmaAssets/group-2.png"
              />

              <div className="absolute bottom-0 left-[32px] flex items-start gap-4">
                {reportsByRegionXAxis.map((region, index) => (
                  <span
                    key={index}
                    className="[font-family:'Inter',Helvetica] font-normal text-[#666666] text-[10px] text-right tracking-[0] leading-[normal] rotate-[-20deg] origin-bottom-right"
                  >
                    {region}
                  </span>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
