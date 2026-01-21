# Codex Jira Companion — Agent Build Guide

## Goal
Build a small web app that demonstrates:
1) a working workflow app built quickly
2) programmatic Codex usage inside the app
3) an MCP-style Jira integration concept
4) enterprise-ready governance patterns (read-only default + gated write access request)

This app is a hackathon demo for an eCommerce company, but the workflow is Jira + Codex.

## Product requirements (MVP)
### Core flows
- User can log in (OAuth via GitHub).
- User sees a list of Jira tickets (mock data is fine).
- Clicking a ticket shows details plus Codex actions:
  - "Summarize with Codex" produces:
    - Summary
    - PR checklist (bullets)
    - Suggested PR title
  - Output is persisted and shown on refresh.
- Governance:
  - System is in "Read-only mode" for Jira.
  - A "Request write access" button opens a modal.
  - Submitting creates a persisted WriteAccessRequest record (status=pending).
  - No actual Jira writes happen; the request is the point.

### Non-functional requirements
- Working UX, no broken routes.
- Clean code suitable for open-source.
- Minimal but meaningful tests:
  - 1 UI test (Request write access modal submits)
  - 1 server/API test (write access request route persists record)
- Provide seed data.
- Strong loading/error states for Codex call.

## Tech stack (must)
- Next.js (App Router) + TypeScript
- NextAuth (GitHub provider)
- Prisma + SQLite
- Tailwind for styling (minimal, clean)
- Vitest + React Testing Library

## Architecture constraints
- Keep the app small: 4–6 screens max.
- Keep logic separated:
  - lib/ for helpers (codexClient, jiraMock)
  - app/api for route handlers
  - components/ for UI
- Codex programmatic usage:
  - Implement server-side function `generateCodexArtifact(ticket)` behind an interface.
  - Support `CODEX_MODE=mock|live` env.
  - Mock mode returns deterministic output (so demos/tests pass without keys).

## Data model (Prisma)
- User (NextAuth)
- Ticket (seeded; or just store as JSON in DB if easier)
- CodexRun: ticketId, userId, summary, prTitle, checklistJson, createdAt
- WriteAccessRequest: ticketId, userId, reason, scope, approvalPolicy, notes, status, createdAt

## Pages
- / (if logged out, show CTA; if logged in, show tickets)
- /tickets/[key] ticket detail + Codex output + governance panel
- /requests (optional: list requests; or show inline on ticket page)

## UI guidelines
- Use compact cards, badges, and clear labels:
  - Badge: "Read-only"
  - Badge: "Approval required for writes"
- Add a small "Team Codex Policy" panel (read-only) explaining defaults.

## Deliverables
- Working repo with README (setup, scripts, env)
- Tests pass with `pnpm test` or `npm test`
- Seed script or auto-seed on dev start

## Nice-to-have (only if time)
- "Why Codex suggested this" collapsible section.