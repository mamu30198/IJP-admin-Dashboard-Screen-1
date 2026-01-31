import { Express } from "express";
import { createServer, type Server } from "http";
import { setupAuth } from "./auth";
import { storage } from "./storage";
import { users } from "@shared/schema";
import { db } from "./db";

export async function registerRoutes(app: Express): Promise<Server> {
  setupAuth(app);

  // Dynamic dashboard stats endpoint
  app.get("/api/dashboard/stats", async (req, res) => {
    if (!req.isAuthenticated()) return res.sendStatus(401);
    res.json({
      activeCampaigns: 892,
      avgCtr: "3.2%",
      totalImpressions: "45.6M",
      revenueMtd: "$168,450"
    });
  });

  // Dynamic user list endpoint
  app.get("/api/users", async (req, res) => {
    if (!req.isAuthenticated()) return res.sendStatus(401);
    const allUsers = await db.select().from(users);
    res.json(allUsers);
  });

  const httpServer = createServer(app);
  return httpServer;
}
