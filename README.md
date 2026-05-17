# Finverse Academy

A production-oriented Next.js App Router learning ecosystem for commerce, economics, finance, banking, investing, SIPs, mutual funds, accounting, entrepreneurship, marketing, and wealth psychology.

## Architecture

- `src/app` — App Router pages, layouts, API routes, and auth callback.
- `src/components` — reusable UI, marketing, learning, dashboard, simulator, and mentor components.
- `src/lib` — curriculum data, gamification rules, Supabase clients, utilities.
- `src/store` — Zustand persisted learning state for XP, streaks, notes, bookmarks, quiz scores, and difficulty tracking.
- `supabase/schema.sql` — PostgreSQL schema with RLS for profiles, progress, notes, bookmarks, flashcard reviews, and achievements.

## Core systems

- Cinematic dark glassmorphism design system with Tailwind CSS.
- Beginner/advanced lesson modes for every chapter.
- Roadmap from human wants and scarcity to investing, business systems, macro cycles, and wealth creation.
- Dashboard with XP, streak, level, achievements, progress, and recommendations.
- SIP/wealth projection, budgeting simulator, and stock practice desk.
- AI mentor chat interface plus `/api/mentor` route for production LLM integration.

## Getting started

```bash
npm install
npm run dev
```

Add Supabase values to `.env.local` using `.env.example`, then run `supabase/schema.sql` in your Supabase SQL editor.
