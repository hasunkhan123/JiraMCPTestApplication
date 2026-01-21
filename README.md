# Codex Jira Companion

Hackathon demo app showing Jira ticket workflows with Codex summaries and governance controls.

## Stack
- Next.js (App Router) + TypeScript
- NextAuth (GitHub OAuth)
- Prisma + SQLite
- Tailwind CSS
- Vitest + React Testing Library

## Setup
1. Install dependencies
   ```bash
   npm install
   ```
2. Create `.env` with:
   ```bash
   DATABASE_URL="file:./dev.db"
   NEXTAUTH_URL="http://localhost:3000"
   NEXTAUTH_SECRET="change-me"
   GITHUB_ID="your-github-oauth-id"
   GITHUB_SECRET="your-github-oauth-secret"
   CODEX_MODE="mock"
   # Optional for live mode
   CODEX_API_KEY=""
   ```
   Or copy `.env.example` and adjust values as needed.
3. Run migrations and seed data
   ```bash
   npm run prisma:generate
   npm run prisma:migrate
   npm run seed
   ```
4. Start dev server
   ```bash
   npm run dev
   ```

## Scripts
- `npm run dev` - start dev server
- `npm run build` - production build
- `npm run start` - run production server
- `npm run lint` - lint
- `npm run test` - run tests
- `npm run prisma:generate` - generate Prisma client
- `npm run prisma:migrate` - run migrations
- `npm run seed` - seed mock tickets

## Notes
- `CODEX_MODE=mock` returns deterministic Codex output for demos/tests.
- `CODEX_MODE=live` requires `CODEX_API_KEY` and calls the Responses API.
- `.env` files are intentionally gitignored; use `.env.example` as a template.
