# replit.md

## Overview

This is an admin dashboard application for managing users, vendors, posts, and revenue analytics. The project follows a full-stack TypeScript architecture with a React frontend and Express backend. It appears to be designed for an "IJP Admin" platform that includes features like user management, vendor risk assessment, AI-powered fraud detection alerts, and analytics visualization.

## Recent Changes

- **January 31, 2026**: Implemented Admin Management page matching Figma design with:
  - Admin Users and Audit Logs tabs
  - Admin users table with Name, Email, Role, Status, Last Active, 2FA, Actions
  - Color-coded role badges (Super Admin, Support Admin, Finance Admin, Compliance Admin)
  - Status indicators (Online/Away/Offline)
  - 2FA enabled/disabled badges
  - Roles & Permissions section with 4 role cards
  - Add Admin button

- **January 31, 2026**: Implemented Content Moderation page matching Figma design with:
  - Filter tabs (All, Fake Receipt, Spam, Scam, Abuse)
  - Flagged content cards with severity indicators (High/Medium/Low)
  - Store name, category, and report count display
  - Detailed panel with Post Content and Moderation Actions
  - Action buttons: Hide Post, Remove Post, Warn Vendor, Escalate Case, Dismiss

- **January 30, 2026**: Implemented AI Intelligence Center page matching Figma design with:
  - Filter tabs (All Insights, Fraud & Abuse, Vendor Risk, Revenue, Platform Health, Moderation)
  - Alert cards list with color-coded categories and percentage indicators
  - Detailed alert panel with Evidence & Findings, Affected Vendors, AI Recommendation
  - Interactive selection between alert cards
  - Simplified Vite config for development server on port 5000

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight alternative to React Router)
- **State Management**: TanStack React Query for server state management
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with CSS variables for theming (neutral base color scheme)
- **Build Tool**: Vite with React plugin

The frontend follows a component-based architecture with:
- `client/src/pages/` - Page components and section components
- `client/src/components/` - Reusable UI components (including shadcn/ui in `/ui/`)
- `client/src/hooks/` - Custom React hooks
- `client/src/lib/` - Utility functions and query client configuration

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **HTTP Server**: Node.js native HTTP module
- **Development**: tsx for TypeScript execution, Vite middleware for development HMR
- **Production Build**: esbuild bundles server code

The backend follows a modular structure:
- `server/index.ts` - Application entry point with middleware setup
- `server/routes.ts` - API route registration (all routes prefixed with `/api`)
- `server/storage.ts` - Data access layer with storage interface abstraction
- `server/vite.ts` - Vite development server integration

### Data Storage
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Database**: PostgreSQL (via Neon serverless driver `@neondatabase/serverless`)
- **Schema Location**: `shared/schema.ts` - Contains table definitions using Drizzle's pgTable
- **Migrations**: Managed via `drizzle-kit push` command, output to `/migrations`
- **Current Storage**: In-memory storage implementation (`MemStorage` class) with interface for future database integration

### Shared Code
The `shared/` directory contains code used by both frontend and backend:
- `schema.ts` - Database schema definitions and Zod validation schemas (using `drizzle-zod`)

### API Design
- RESTful API pattern with JSON request/response bodies
- API routes prefixed with `/api`
- Request logging middleware for development
- Centralized error handling middleware

## External Dependencies

### Database
- **PostgreSQL**: Primary database (configured via `DATABASE_URL` environment variable)
- **Neon**: Serverless PostgreSQL provider (`@neondatabase/serverless`)
- **Session Storage**: `connect-pg-simple` for PostgreSQL-backed sessions

### UI Libraries
- **Radix UI**: Comprehensive set of accessible, unstyled UI primitives (accordion, dialog, dropdown, tabs, etc.)
- **Lucide React**: Icon library
- **Embla Carousel**: Carousel/slider functionality
- **cmdk**: Command menu component
- **Vaul**: Drawer component
- **Recharts**: Chart library (via shadcn/ui chart component)

### Form & Validation
- **React Hook Form**: Form state management
- **@hookform/resolvers**: Form validation resolvers
- **Zod**: Schema validation (integrated with Drizzle via `drizzle-zod`)

### Utilities
- **date-fns**: Date manipulation
- **class-variance-authority**: Component variant management for Tailwind
- **clsx/tailwind-merge**: Conditional class name utilities
- **nanoid**: Unique ID generation

### Development Tools
- **Replit Plugins**: `@replit/vite-plugin-runtime-error-modal`, `@replit/vite-plugin-cartographer`, `@replit/vite-plugin-dev-banner` for enhanced Replit development experience