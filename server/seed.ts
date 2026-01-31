import { scrypt, randomBytes } from "crypto";
import { promisify } from "util";
import { storage } from "./server/storage";
import { db } from "./server/db";
import { dashboardStats } from "./shared/schema";

const scryptAsync = promisify(scrypt);

async function hashPassword(password: string) {
  const salt = randomBytes(16).toString("hex");
  const buf = (await scryptAsync(password, salt, 64)) as Buffer;
  return `${buf.toString("hex")}.${salt}`;
}

async function seed() {
  console.log("Starting seeding...");

  try {
    // 1. Seed Admin User
    const adminEmail = "admin@ijp.com";
    const adminPassword = "password123";
    const existingUser = await storage.getUserByUsername(adminEmail);

    if (!existingUser) {
      const hashedPassword = await hashPassword(adminPassword);
      await storage.createUser({
        username: adminEmail,
        password: hashedPassword,
      });
      console.log(`SEED: Admin user created - ${adminEmail} / ${adminPassword}`);
    } else {
      console.log("SEED: Admin user already exists.");
    }

    // 2. Seed Dashboard Stats
    const stats = await db.select().from(dashboardStats);
    if (stats.length === 0) {
      await db.insert(dashboardStats).values({
        activeCampaigns: 892,
        avgCtr: "3.2",
        totalImpressions: "45.6M",
        revenueMtd: "168450",
      });
      console.log("SEED: Dashboard stats created.");
    } else {
      console.log("SEED: Dashboard stats already exist.");
    }

    console.log("Seeding completed successfully.");
    process.exit(0);
  } catch (error) {
    console.error("Seeding failed:", error);
    process.exit(1);
  }
}

seed();
