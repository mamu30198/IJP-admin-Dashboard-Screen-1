import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell, Settings } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function PricingSettingsPage() {
  const [sponsoredPostPrice, setSponsoredPostPrice] = useState("");
  const [vendorPostingPrice, setVendorPostingPrice] = useState("");
  const [talkToAdminPrice, setTalkToAdminPrice] = useState("");
  const [maxImagesPerPost, setMaxImagesPerPost] = useState("");
  const [commentCharLimit, setCommentCharLimit] = useState("");

  return (
    <div className="flex bg-[#f5f6fa] w-full min-h-screen">
      <Sidebar className="w-[280px] flex-shrink-0 sticky top-0" activeModule="Pricing Settings" />
      
      <main className="flex-1 p-4 md:p-6 overflow-x-hidden space-y-6">
        <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <h1 className="text-xl md:text-2xl font-semibold text-[#222f36]">Settings</h1>
            <span className="text-[#7b848f] text-sm">|</span>
            <p className="text-xs md:text-sm text-[#7b848f]">Configure platform settings</p>
          </div>
          <div className="flex items-center gap-2 md:gap-4 w-full sm:w-auto justify-end">
            <Button variant="ghost" size="icon" className="bg-white rounded-lg shadow-sm w-9 h-9 md:w-10 md:h-10">
              <Bell className="w-4 h-4 md:w-5 md:h-5 text-[#7b848f]" />
            </Button>
            <div className="flex items-center gap-2 px-2 md:px-3 py-1 md:py-1.5 bg-white rounded-full shadow-sm">
              <Avatar className="w-6 h-6 md:w-7 md:h-7">
                <AvatarImage src="/figmaAssets/2-jpg.png" />
                <AvatarFallback>MJ</AvatarFallback>
              </Avatar>
              <span className="text-xs md:text-sm font-medium text-[#7b848f] whitespace-nowrap">Mr. Jack</span>
            </div>
            <Button variant="ghost" size="icon" className="bg-white rounded-lg shadow-sm w-9 h-9 md:w-10 md:h-10">
              <Settings className="w-4 h-4 md:w-5 md:h-5 text-[#7b848f]" />
            </Button>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="bg-white rounded-[15px] border-0 shadow-[0px_1px_2px_#0000000d]">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-base font-bold text-[#222f36]">Sponsored Post Pricing</h2>
                  <p className="text-xs text-[#7b848f] mt-0.5">Set the price per day for sponsored posts</p>
                </div>
                <Button className="bg-[#62a230] hover:bg-[#62a230]/90 text-white text-xs font-bold h-9 px-5 rounded-lg">
                  Save Settings
                </Button>
              </div>
              <div>
                <label className="text-xs font-medium text-[#222f36] mb-2 block">Price Per Day ($)</label>
                <Input
                  value={sponsoredPostPrice}
                  onChange={(e) => setSponsoredPostPrice(e.target.value)}
                  className="h-11 bg-white border-[#edf1f3] rounded-lg text-sm"
                  placeholder=""
                />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white rounded-[15px] border-0 shadow-[0px_1px_2px_#0000000d]">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-base font-bold text-[#222f36]">Talk to Admin fee</h2>
                  <p className="text-xs text-[#7b848f] mt-0.5">Set the price for one Time chatting</p>
                </div>
                <Button className="bg-[#62a230] hover:bg-[#62a230]/90 text-white text-xs font-bold h-9 px-5 rounded-lg">
                  Save Settings
                </Button>
              </div>
              <div>
                <label className="text-xs font-medium text-[#222f36] mb-2 block">Price For Once</label>
                <Input
                  value={talkToAdminPrice}
                  onChange={(e) => setTalkToAdminPrice(e.target.value)}
                  className="h-11 bg-white border-[#edf1f3] rounded-lg text-sm"
                  placeholder=""
                />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white rounded-[15px] border-0 shadow-[0px_1px_2px_#0000000d]">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-base font-bold text-[#222f36]">Vendor Posting Product Fee</h2>
                  <p className="text-xs text-[#7b848f] mt-0.5">Set the price per Post</p>
                </div>
                <Button className="bg-[#62a230] hover:bg-[#62a230]/90 text-white text-xs font-bold h-9 px-5 rounded-lg">
                  Save Settings
                </Button>
              </div>
              <div>
                <label className="text-xs font-medium text-[#222f36] mb-2 block">Price Per Post ($)</label>
                <Input
                  value={vendorPostingPrice}
                  onChange={(e) => setVendorPostingPrice(e.target.value)}
                  className="h-11 bg-white border-[#edf1f3] rounded-lg text-sm"
                  placeholder=""
                />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white rounded-[15px] border-0 shadow-[0px_1px_2px_#0000000d]">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-base font-bold text-[#222f36]">Platform Configuration</h2>
                  <p className="text-xs text-[#7b848f] mt-0.5">Additional platform settings</p>
                </div>
                <Button className="bg-[#62a230] hover:bg-[#62a230]/90 text-white text-xs font-bold h-9 px-5 rounded-lg">
                  Save Settings
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-medium text-[#222f36] mb-2 block">Maximum Images Per Post</label>
                  <Input
                    value={maxImagesPerPost}
                    onChange={(e) => setMaxImagesPerPost(e.target.value)}
                    className="h-11 bg-white border-[#edf1f3] rounded-lg text-sm"
                    placeholder=""
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-[#222f36] mb-2 block">Comment Character Limit</label>
                  <Input
                    value={commentCharLimit}
                    onChange={(e) => setCommentCharLimit(e.target.value)}
                    className="h-11 bg-white border-[#edf1f3] rounded-lg text-sm"
                    placeholder=""
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
