import { Express } from "express";
import { createServer, type Server } from "http";
import { setupAuth } from "./auth";
import { storage } from "./storage";
import { users, dashboardStats, activities, salesData, dailyActiveUsers } from "@shared/schema";
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
    const sales = await db.select().from(salesData).orderBy(salesData.date);
    res.json(sales);
  });

  app.get("/api/dashboard/dau", async (req, res) => {
    if (!req.isAuthenticated()) return res.sendStatus(401);
    const dau = await db.select().from(dailyActiveUsers).orderBy(dailyActiveUsers.date);
    res.json(dau);
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
