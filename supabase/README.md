# DocFlow AI — Supabase Setup (Phase 2A)

This directory contains the database schema and storage configuration for DocFlow AI.

---

## Files

| File | Purpose |
|------|---------|
| `schema.sql` | Full DB schema, RLS policies, triggers, and storage bucket setup |

---

## Manual Supabase Dashboard Steps

After cloning the project, complete the following steps **once** in your Supabase project dashboard.

### 1. Run the Schema SQL

1. Open [Supabase Dashboard](https://supabase.com/dashboard) → your project
2. Navigate to **SQL Editor** → **New Query**
3. Paste the entire contents of [`schema.sql`](./schema.sql)
4. Click **Run**

This will create:
- `profiles` table
- `documents` table
- `invoice_data` table
- `workflow_logs` table
- `settings` table
- Row Level Security (RLS) on all tables
- `handle_new_user` trigger (auto-creates profile + settings on signup)
- `invoices` storage bucket with per-user access policies

> **If you get "policy already exists" errors**: The policies were already applied. Safe to ignore.

---

### 2. Enable Email Auth

1. Navigate to **Authentication** → **Providers**
2. Ensure **Email** is enabled
3. (Optional) Disable "Confirm email" for faster local development

---

### 3. Verify Storage Bucket

1. Navigate to **Storage** → **Buckets**
2. Confirm the `invoices` bucket exists and is set to **Private**
3. The SQL script creates this bucket automatically — verify it was created

---

### 4. Set Environment Variables

Copy `.env.example` to `.env.local` and fill in:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key  # Keep secret, server-side only
```

Values are found in: **Supabase Dashboard** → **Project Settings** → **API**

---

### 5. Vercel Deployment

Add the same environment variables in: **Vercel Dashboard** → **Project** → **Settings** → **Environment Variables**

> Do NOT add `SUPABASE_SERVICE_ROLE_KEY` as a `NEXT_PUBLIC_` variable — it must remain server-side only.

---

## Architecture

```
src/lib/supabase/
  client.ts   — Browser client (safe in 'use client' components)
  server.ts   — Server client (Server Components, Route Handlers)
  auth.ts     — Auth helpers (signIn, signUp, signOut, getUser)
  index.ts    — Barrel export

src/middleware.ts — Refreshes auth session cookies on every request
src/types/database.ts — Full TypeScript types for all DB tables
```

---

## Phase Roadmap

| Phase | Status | Description |
|-------|--------|-------------|
| Phase 1 | ✅ Complete | Frontend foundation + mock data |
| Phase 2A | ✅ Complete | Supabase DB schema + Auth foundation |
| Phase 2B | 🔜 Next | Gemini AI extraction + real upload flow |
| Phase 2C | 🔜 Future | Workflow automation engine |
