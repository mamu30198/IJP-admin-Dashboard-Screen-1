import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { EyeIcon, EyeOffIcon } from "lucide-react";

export default function AuthPage() {
  const [, setLocation] = useLocation();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen w-full bg-[#002B20] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Checkered Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="grid grid-cols-8 md:grid-cols-12 lg:grid-cols-16 h-full w-full">
          {Array.from({ length: 192 }).map((_, i) => (
            <div 
              key={i} 
              className={`aspect-square border-[0.5px] border-white/20 ${(Math.floor(i / 12) + (i % 12)) % 2 === 0 ? 'bg-white/5' : ''}`}
            />
          ))}
        </div>
      </div>

      <div className="w-full max-w-[480px] relative z-10 flex flex-col items-center">
        {/* Logo */}
        <div className="mb-[-40px] z-20 relative">
          <div className="bg-white rounded-full p-4 shadow-xl border-4 border-[#002B20]">
            <img 
              src="/figmaAssets/new_logo.png" 
              alt="IJustPaid Logo" 
              className="w-24 h-24 object-contain"
            />
          </div>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-[32px] p-10 pt-16 w-full shadow-2xl">
          <h1 className="text-2xl font-semibold text-[#222F36] text-center mb-8">
            Login Administration
          </h1>

          <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setLocation("/"); }}>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-[#7B848F]">
                Email
              </Label>
              <Input
                id="email"
                placeholder="Enter your email"
                className="h-12 bg-[#F8FAFC] border-none rounded-xl px-4 focus-visible:ring-1 focus-visible:ring-[#62A230]"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" title="Password" className="text-sm font-medium text-[#7B848F]">
                Password
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="**********"
                  className="h-12 bg-[#F8FAFC] border-none rounded-xl px-4 pr-12 focus-visible:ring-1 focus-visible:ring-[#62A230]"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#7B848F] hover:text-[#222F36] transition-colors"
                >
                  {showPassword ? <EyeOffIcon size={20} /> : <EyeIcon size={20} />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="remember" className="border-[#D1D5DB] data-[state=checked]:bg-[#62A230] data-[state=checked]:border-[#62A230]" />
                <Label htmlFor="remember" className="text-sm text-[#7B848F] font-normal cursor-pointer">
                  Remember Me
                </Label>
              </div>
              <button type="button" className="text-sm font-medium text-[#62A230] hover:underline">
                Forgot password?
              </button>
            </div>

            <Button 
              type="submit" 
              className="w-full h-12 bg-[#62A230] hover:bg-[#4d8026] text-white rounded-xl text-base font-semibold transition-colors shadow-lg shadow-[#62A230]/20"
            >
              Sign In
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
