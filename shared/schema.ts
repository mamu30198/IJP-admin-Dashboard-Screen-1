import { pgTable, text, varchar, timestamp, boolean, integer, numeric, real } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";
import { sql } from "drizzle-orm";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  fullName: text("full_name"),
  role: text("role").default("admin"),
  status: text("status").default("active"),
  lastActive: timestamp("last_active"),
  twoFactorEnabled: boolean("two_factor_enabled").default(false),
  avatar: text("avatar"),
});

export const dashboardStats = pgTable("dashboard_stats", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  totalUsers: integer("total_users").notNull().default(0),
  activeVendors: integer("active_vendors").notNull().default(0),
  monthlyRevenue: numeric("monthly_revenue").notNull().default("0"),
  moderationTasks: integer("moderation_tasks").notNull().default(0),
  fraudAlerts: integer("fraud_alerts").notNull().default(0),
  systemPerformance: real("system_performance").notNull().default(99.9),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const activities = pgTable("activities", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  description: text("description").notNull(),
  type: text("type").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const salesData = pgTable("sales_data", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  date: timestamp("date").notNull(),
  value: numeric("value").notNull(),
});

export const dailyActiveUsers = pgTable("daily_active_users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  date: timestamp("date").notNull(),
  count: integer("count").notNull(),
});

export const platformUsers = pgTable("platform_users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  mobile: text("mobile").notNull(),
  city: text("city").notNull(),
  registrationDate: timestamp("registration_date").defaultNow(),
  followers: integer("followers").default(0),
  following: integer("following").default(0),
  posts: integer("posts").default(0),
  profileCompletion: integer("profile_completion").default(0),
  avatar: text("avatar"),
});

export const highRiskVendors = pgTable("high_risk_vendors", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  description: text("description").notNull(),
  riskScore: integer("risk_score").notNull(),
  transactions: text("transactions").notNull(),
});

export const aiAlerts = pgTable("ai_alerts", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  type: text("type").notNull(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  confidence: text("confidence").notNull(),
  action: text("action").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const platformMetrics = pgTable("platform_metrics", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  label: text("label").notNull(),
  value: text("value").notNull(),
  percentage: text("percentage").notNull(),
  trend: text("trend").notNull(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type DashboardStat = typeof dashboardStats.$inferSelect;
export type Activity = typeof activities.$inferSelect;
export type SalesData = typeof salesData.$inferSelect;
export type DailyActiveUser = typeof dailyActiveUsers.$inferSelect;
export type PlatformUser = typeof platformUsers.$inferSelect;
export type HighRiskVendor = typeof highRiskVendors.$inferSelect;
export type AiAlert = typeof aiAlerts.$inferSelect;
export type PlatformMetric = typeof platformMetrics.$inferSelect;
