import { pgTable, text, varchar, timestamp, boolean, integer, numeric } from "drizzle-orm/pg-core";
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
  activeCampaigns: integer("active_campaigns").notNull(),
  avgCtr: numeric("avg_ctr").notNull(),
  totalImpressions: text("total_impressions").notNull(),
  revenueMtd: numeric("revenue_mtd").notNull(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
}).extend({
  password: z.string().min(1), // Allow password123
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type DashboardStat = typeof dashboardStats.$inferSelect;
