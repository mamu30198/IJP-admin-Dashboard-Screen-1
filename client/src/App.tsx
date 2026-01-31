import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import { DashboardScreen } from "@/pages/DashboardScreen";
import AuthPage from "@/pages/AuthPage";
import UsersPage from "@/pages/UsersPage";
import UserProfilePage from "@/pages/UserProfilePage";
import AdsRevenuePage from "@/pages/AdsRevenuePage";
import PricingSettingsPage from "@/pages/PricingSettingsPage";
import ReportsPage from "@/pages/ReportsPage";
import AlertsPage from "@/pages/AlertsPage";
import AIIntelligencePage from "@/pages/AIIntelligencePage";
import ContentModerationPage from "@/pages/ContentModerationPage";
import AdminManagementPage from "@/pages/AdminManagementPage";

function Router() {
  return (
    <Switch>
      {/* Add pages below */}
      <Route path="/auth" component={AuthPage} />
      <Route path="/users/:id" component={UserProfilePage} />
      <Route path="/users" component={UsersPage} />
      <Route path="/revenue" component={AdsRevenuePage} />
      <Route path="/pricing" component={PricingSettingsPage} />
      <Route path="/reports" component={ReportsPage} />
      <Route path="/alerts" component={AlertsPage} />
      <Route path="/ai-intelligence" component={AIIntelligencePage} />
      <Route path="/moderation" component={ContentModerationPage} />
      <Route path="/admin" component={AdminManagementPage} />
      <Route path="/" component={DashboardScreen} />
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
