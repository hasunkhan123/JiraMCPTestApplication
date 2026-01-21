import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "../lib/auth";
import { prisma } from "../lib/prisma";
import { Badge } from "../components/Badge";
import { PolicyPanel } from "../components/PolicyPanel";
import { PriorityIndicator } from "../components/PriorityIndicator";

export default async function HomePage() {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    return (
      <div className="grid gap-10">
        <section className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 p-8 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
            Demo workspace
          </p>
          <h1 className="mt-2 text-3xl font-semibold text-slate-100">
            Codex-guided Jira workflows with enterprise guardrails
          </h1>
          <p className="mt-4 max-w-2xl text-slate-300">
            Explore Jira tickets, generate Codex summaries, and request gated
            write access. Everything is audit-ready and safe by default.
          </p>
          <div className="mt-6 grid gap-3 text-sm text-slate-300 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
              <p className="text-sm font-semibold text-slate-100">
                1. Review tickets
              </p>
              <p className="mt-2 text-xs text-slate-400">
                Browse prioritized issues with clear status and context.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
              <p className="text-sm font-semibold text-slate-100">
                2. Run Codex
              </p>
              <p className="mt-2 text-xs text-slate-400">
                Generate summaries, checklists, and PR-ready titles.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
              <p className="text-sm font-semibold text-slate-100">
                3. Request writes
              </p>
              <p className="mt-2 text-xs text-slate-400">
                Submit access requests with explicit scope and policy.
              </p>
            </div>
          </div>
          <p className="mt-6 text-sm text-slate-400">
            Sign in to view tickets and use Codex actions.
          </p>
        </section>
        <section className="grid gap-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Governance
              </p>
              <h2 className="mt-1 text-lg font-semibold text-slate-100">
                Team Codex policy
              </h2>
            </div>
            <Badge tone="slate">Read-only mode</Badge>
          </div>
          <PolicyPanel showHeader={false} />
        </section>
      </div>
    );
  }

  const tickets = await prisma.ticket.findMany({ orderBy: { key: "asc" } });
  const approvedRequest = await prisma.writeAccessRequest.findFirst({
    where: { userId: session.user.id, status: "approved" },
    select: { id: true }
  });
  const hasWriteAccess = Boolean(approvedRequest);

  return (
    <div className="grid gap-10">
      <section className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 p-8 shadow-sm">
        <div>
          <h1 className="text-3xl font-semibold text-slate-100">
            Jira tickets with Codex-ready context
          </h1>
          <p className="mt-4 max-w-2xl text-slate-300">
            Select a ticket to generate Codex summaries, inspect governance
            controls, and request scoped write access when needed.
          </p>
        </div>
      </section>
      <section className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
        <div className="grid gap-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-slate-300">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 7h16M4 12h16M4 17h10"
                  />
                </svg>
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Ticket queue
                </p>
                <h2 className="mt-1 text-2xl font-semibold text-slate-100">
                  Open tickets
                </h2>
              </div>
            </div>
          </div>
          <div className="grid gap-4">
            {tickets.map((ticket) => (
              <Link
                key={ticket.id}
                href={`/tickets/${ticket.key}`}
                className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-700 hover:bg-slate-900"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                      {ticket.key}
                    </p>
                    <h3 className="mt-1 text-lg font-semibold text-slate-100">
                      {ticket.title}
                    </h3>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-slate-200">
                      {ticket.status}
                    </p>
                    <PriorityIndicator priority={ticket.priority} />
                  </div>
                </div>
                <p className="mt-3 text-sm text-slate-300">
                  {ticket.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
        <details
          className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4 shadow-sm"
          open
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-3 marker:content-none">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-slate-300">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3l7 4v5c0 4.418-3.134 8.418-7 9-3.866-.582-7-4.582-7-9V7l7-4z"
                  />
                </svg>
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Governance
                </p>
                <h2 className="mt-1 text-lg font-semibold text-slate-100">
                  Team Codex policy
                </h2>
              </div>
            </div>
            <Badge tone={hasWriteAccess ? "emerald" : "slate"}>
              {hasWriteAccess ? "Write enabled" : "Read-only mode"}
            </Badge>
          </summary>
          <div className="mt-4">
            <PolicyPanel showHeader={false} />
          </div>
        </details>
      </section>
    </div>
  );
}
