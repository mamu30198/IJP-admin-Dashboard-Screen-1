import { Route, Switch, Redirect } from "wouter";
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
import CommentsPage from "@/pages/CommentsPage";
import FinancePage from "@/pages/FinancePage";
import { AuthProvider, useAuth } from "./hooks/use-auth";
import { Loader2 } from "lucide-react";

function ProtectedRoute({ component: Component, path }: { component: React.ComponentType, path: string }) {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin text-[#62A230]" />
      </div>
    );
  }

  if (!user) {
    return <Redirect to="/auth" />;
  }

  return (
    <Route path={path}>
      <Component />
    </Route>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/auth" component={AuthPage} />
      <ProtectedRoute path="/profile" component={UserProfilePage} />
      <ProtectedRoute path="/users/:id" component={UserProfilePage} />
      <ProtectedRoute path="/users" component={UsersPage} />
      <ProtectedRoute path="/revenue" component={AdsRevenuePage} />
      <ProtectedRoute path="/pricing" component={PricingSettingsPage} />
      <ProtectedRoute path="/reports" component={ReportsPage} />
      <ProtectedRoute path="/alerts" component={AlertsPage} />
      <ProtectedRoute path="/ai-intelligence" component={AIIntelligencePage} />
      <ProtectedRoute path="/moderation" component={ContentModerationPage} />
      <ProtectedRoute path="/admin" component={AdminManagementPage} />
      <ProtectedRoute path="/comments" component={CommentsPage} />
      <ProtectedRoute path="/finance" component={FinancePage} />
      <ProtectedRoute path="/" component={DashboardScreen} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
