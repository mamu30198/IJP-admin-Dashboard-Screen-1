import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { Express, Request } from "express";
import session from "express-session";
import bcrypt from "bcrypt";
import { storage } from "./storage";
import { User as SelectUser } from "@shared/schema";

const SALT_ROUNDS = 10;

async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, SALT_ROUNDS);
}

async function comparePasswords(supplied: string, stored: string): Promise<boolean> {
  try {
    return await bcrypt.compare(supplied, stored);
  } catch (e) {
    return false;
  }
}

declare global {
  namespace Express {
    interface User extends SelectUser {}
  }
}

export function setupAuth(app: Express) {
  const sessionSettings: session.SessionOptions = {
    secret: process.env.SESSION_SECRET || "temp-secret",
    resave: false,
    saveUninitialized: false,
    store: storage.sessionStore,
    cookie: {
      secure: app.get("env") === "production",
      maxAge: 24 * 60 * 60 * 1000, // 24 hours
    },
  };

  if (app.get("env") === "production") {
    app.set("trust proxy", 1);
  }

  app.use(session(sessionSettings));
  app.use(passport.initialize());
  app.use(passport.session());

  passport.use(
    new LocalStrategy(async (username, password, done) => {
      try {
        const user = await storage.getUserByUsername(username);
        if (!user) {
          console.log(`Auth: User not found - ${username}`);
          return done(null, false);
        }
        const isMatch = await comparePasswords(password, user.password);
        if (!isMatch) {
          console.log(`Auth: Password mismatch for - ${username}`);
          return done(null, false);
        }
        return done(null, user);
      } catch (err) {
        return done(err);
      }
    }),
  );

  passport.serializeUser((user, done) => done(null, (user as SelectUser).id));
  passport.deserializeUser(async (id: string, done) => {
    try {
      const user = await storage.getUser(id);
      done(null, user);
    } catch (err) {
      done(err);
    }
  });

  // Seed Admin User with bcrypt password
  (async () => {
    try {
      const adminEmail = "admin@ijp.com";
      const adminPassword = "password123";
      
      const existing = await storage.getUserByUsername(adminEmail);
      if (!existing) {
        const hashedPassword = await hashPassword(adminPassword);
        await storage.createUser({
          username: adminEmail,
          password: hashedPassword,
        });
        console.log(`SEED: Admin user created - ${adminEmail}`);
      } else {
        // Update password with bcrypt hash if it's not already bcrypt format
        // bcrypt hashes start with $2b$ or $2a$
        if (!existing.password.startsWith('$2')) {
          const hashedPassword = await hashPassword(adminPassword);
          await storage.updateUserPassword(existing.id, hashedPassword);
          console.log(`SEED: Admin password updated to bcrypt - ${adminEmail}`);
        }
      }
    } catch (e) {
      console.error("SEED Error:", e);
    }
  })();

  app.post("/api/register", async (req, res, next) => {
    try {
      const existingUser = await storage.getUserByUsername(req.body.username);
      if (existingUser) {
        return res.status(400).send("Username already exists");
      }

      const hashedPassword = await hashPassword(req.body.password);
      const user = await storage.createUser({
        ...req.body,
        password: hashedPassword,
      });

      req.login(user, (err) => {
        if (err) return next(err);
        const { password: _, ...safeUser } = user;
        res.status(201).json(safeUser);
      });
    } catch (err) {
      next(err);
    }
  });

  app.post("/api/login", (req, res, next) => {
    passport.authenticate("local", (err: any, user: Express.User, info: any) => {
      if (err) return next(err);
      if (!user) return res.status(401).send("Invalid email or password");
      req.login(user, (err) => {
        if (err) return next(err);
        const { password, ...safeUser } = user;
        res.status(200).json(safeUser);
      });
    })(req, res, next);
  });

  app.post("/api/logout", (req, res, next) => {
    req.logout((err) => {
      if (err) return next(err);
      res.sendStatus(200);
    });
  });

  app.get("/api/user", (req, res) => {
    if (!req.isAuthenticated()) return res.sendStatus(401);
    const { password, ...safeUser } = req.user!;
    res.json(safeUser);
  });
}
