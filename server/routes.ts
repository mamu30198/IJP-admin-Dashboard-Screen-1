import { Express } from "express";
import { createServer, type Server } from "http";
import { setupAuth } from "./auth";
import { storage } from "./storage";
import { users, dashboardStats, activities, salesData, dailyActiveUsers, platformUsers, highRiskVendors, aiAlerts, platformMetrics } from "@shared/schema";
import { db } from "./db";
import { desc } from "drizzle-orm";

async function seedDashboardData() {
  const existingStats = await db.select().from(dashboardStats).limit(1);
  
  if (existingStats.length === 0) {
    await db.insert(dashboardStats).values({
      totalUsers: 15234,
      activeVendors: 1102,
      monthlyRevenue: "48234",
      moderationTasks: 142,
      fraudAlerts: 28,
      systemPerformance: 99.9,
    });
    console.log("SEED: Dashboard stats created");
  }

  const existingActivities = await db.select().from(activities).limit(1);
  if (existingActivities.length === 0) {
    const activityData = [
      { title: "New post created", description: "John Doe created a new deal", type: "post" },
      { title: "New user registered", description: "Jane Smith joined the platform", type: "user" },
      { title: "Payment received", description: "$299 subscription renewal", type: "payment" },
      { title: "Vendor approved", description: "TechGadgets Inc verified", type: "vendor" },
      { title: "Report flagged", description: "Content review required", type: "report" },
    ];
    await db.insert(activities).values(activityData);
    console.log("SEED: Activities created");
  }

  const existingSales = await db.select().from(salesData).limit(1);
  if (existingSales.length === 0) {
    const now = new Date();
    const salesEntries = [];
    for (let i = 7; i >= 0; i--) {
      const date = new Date(now);
      date.setDate(date.getDate() - i);
      salesEntries.push({
        date,
        value: String(Math.floor(100 + Math.random() * 120)),
      });
    }
    await db.insert(salesData).values(salesEntries);
    console.log("SEED: Sales data created");
  }

  const existingDau = await db.select().from(dailyActiveUsers).limit(1);
  if (existingDau.length === 0) {
    const now = new Date();
    const dauEntries = [];
    for (let i = 13; i >= 0; i--) {
      const date = new Date(now);
      date.setDate(date.getDate() - i);
      dauEntries.push({
        date,
        count: Math.floor(120 + Math.random() * 80),
      });
    }
    await db.insert(dailyActiveUsers).values(dauEntries);
    console.log("SEED: Daily active users data created");
  }

  const existingPlatformUsers = await db.select().from(platformUsers).limit(1);
  if (existingPlatformUsers.length === 0) {
    const names = ["John Doe", "Jane Smith", "Mike Johnson", "Sarah Wilson", "David Brown", "Emily Davis", "Chris Lee", "Anna Taylor"];
    const cities = ["New York, USA", "Los Angeles, USA", "Chicago, USA", "Houston, USA", "Phoenix, USA"];
    const platformUsersData = names.map((name, i) => ({
      name,
      mobile: `+1089${Math.floor(1000000 + Math.random() * 9000000)}`,
      city: cities[i % cities.length],
      followers: Math.floor(20 + Math.random() * 100),
      following: Math.floor(10 + Math.random() * 50),
      posts: Math.floor(5 + Math.random() * 30),
      profileCompletion: Math.floor(40 + Math.random() * 60),
    }));
    await db.insert(platformUsers).values(platformUsersData);
    console.log("SEED: Platform users created");
  }

  const existingVendors = await db.select().from(highRiskVendors).limit(1);
  if (existingVendors.length === 0) {
    const vendorData = [
      { name: "AutoLux Parts", description: "Unusual discount patterns", riskScore: 72, transactions: "$124,580" },
      { name: "TechGadgets Pro", description: "Receipt format anomalies", riskScore: 68, transactions: "$89,420" },
      { name: "FashionHub Elite", description: "Rapid negative review increase", riskScore: 65, transactions: "$156,200" },
      { name: "HomeDecor Plus", description: "Payment dispute rate spike", riskScore: 61, transactions: "$45,890" },
    ];
    await db.insert(highRiskVendors).values(vendorData);
    console.log("SEED: High-risk vendors created");
  }

  const existingAlerts = await db.select().from(aiAlerts).limit(1);
  if (existingAlerts.length === 0) {
    const alertData = [
      { type: "danger", title: "Fraud Detection", description: "Suspicious receipt patterns detected across 14 vendors", confidence: "high confidence", action: "View Vendors" },
      { type: "warning", title: "Vendor Risk", description: "Vendor 'AutoLux Parts' risk score increased to 72/100", confidence: "medium confidence", action: "Review Vendor" },
      { type: "success", title: "Revenue Intelligence", description: "Raising posting fee by 5% could increase MRR by ~$24k", confidence: "medium confidence", action: "Simulate Pricing" },
    ];
    await db.insert(aiAlerts).values(alertData);
    console.log("SEED: AI alerts created");
  }

  const existingMetrics = await db.select().from(platformMetrics).limit(1);
  if (existingMetrics.length === 0) {
    const metricsData = [
      { label: "Ads Revenue (MTD)", value: "$168K", percentage: "15%", trend: "up" },
      { label: "Total Posts", value: "3.8M", percentage: "5%", trend: "up" },
      { label: "Subscriptions Revenue", value: "$314K", percentage: "9%", trend: "up" },
      { label: "Fraud Alerts", value: "27", percentage: "23%", trend: "down" },
    ];
    await db.insert(platformMetrics).values(metricsData);
    console.log("SEED: Platform metrics created");
  }
}

export async function registerRoutes(app: Express): Promise<Server> {
  setupAuth(app);

  await seedDashboardData();

  app.get("/api/dashboard/stats", async (req, res) => {
    if (!req.isAuthenticated()) return res.sendStatus(401);
    const [stats] = await db.select().from(dashboardStats).limit(1);
    res.json(stats || {
      totalUsers: 0,
      activeVendors: 0,
      monthlyRevenue: "0",
      moderationTasks: 0,
      fraudAlerts: 0,
      systemPerformance: 99.9,
    });
  });

  app.get("/api/dashboard/activities", async (req, res) => {
    if (!req.isAuthenticated()) return res.sendStatus(401);
    const recentActivities = await db.select().from(activities).orderBy(desc(activities.createdAt)).limit(5);
    res.json(recentActivities);
  });

  app.get("/api/dashboard/sales", async (req, res) => {
    if (!req.isAuthenticated()) return res.sendStatus(401);
    const sales = await db.select().from(salesData).orderBy(salesData.date).limit(8);
    res.json(sales);
  });

  app.get("/api/dashboard/dau", async (req, res) => {
    if (!req.isAuthenticated()) return res.sendStatus(401);
    const dau = await db.select().from(dailyActiveUsers).orderBy(dailyActiveUsers.date).limit(14);
    res.json(dau);
  });

  app.get("/api/dashboard/platform-users", async (req, res) => {
    if (!req.isAuthenticated()) return res.sendStatus(401);
    const pUsers = await db.select().from(platformUsers).orderBy(desc(platformUsers.registrationDate)).limit(8);
    res.json(pUsers);
  });

  app.get("/api/dashboard/high-risk-vendors", async (req, res) => {
    if (!req.isAuthenticated()) return res.sendStatus(401);
    const vendors = await db.select().from(highRiskVendors).orderBy(desc(highRiskVendors.riskScore)).limit(4);
    res.json(vendors);
  });

  app.get("/api/dashboard/ai-alerts", async (req, res) => {
    if (!req.isAuthenticated()) return res.sendStatus(401);
    const alerts = await db.select().from(aiAlerts).orderBy(desc(aiAlerts.createdAt)).limit(3);
    res.json(alerts);
  });

  app.get("/api/dashboard/platform-metrics", async (req, res) => {
    if (!req.isAuthenticated()) return res.sendStatus(401);
    const metrics = await db.select().from(platformMetrics).limit(4);
    res.json(metrics);
  });

  app.get("/api/users", async (req, res) => {
    if (!req.isAuthenticated()) return res.sendStatus(401);
    const allUsers = await db.select({
      id: users.id,
      username: users.username,
      fullName: users.fullName,
      role: users.role,
      status: users.status,
      lastActive: users.lastActive,
      avatar: users.avatar,
    }).from(users);
    res.json(allUsers);
  });

  const httpServer = createServer(app);
  return httpServer;
}
