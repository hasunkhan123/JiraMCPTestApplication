import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "../lib/auth";
import { prisma } from "../lib/prisma";
import { Badge } from "../components/Badge";
import { PolicyPanel } from "../components/PolicyPanel";

export default async function HomePage() {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    return (
      <div className="grid gap-10">
        <section className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-slate-100 p-8 shadow-sm">
          <div className="flex flex-wrap items-center gap-3">
            <Badge tone="amber">Read-only</Badge>
            <Badge tone="slate">Approval required for writes</Badge>
          </div>
          <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-slate-500">
            Demo workspace
          </p>
          <h1 className="mt-2 text-3xl font-semibold text-slate-900">
            Codex-guided Jira workflows with enterprise guardrails
          </h1>
          <p className="mt-4 max-w-2xl text-slate-600">
            Explore Jira tickets, generate Codex summaries, and request gated
            write access. Everything is audit-ready and safe by default.
          </p>
          <div className="mt-6 grid gap-3 text-sm text-slate-600 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white/80 p-4">
              <p className="text-sm font-semibold text-slate-800">
                1. Review tickets
              </p>
              <p className="mt-2 text-xs text-slate-500">
                Browse prioritized issues with clear status and context.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white/80 p-4">
              <p className="text-sm font-semibold text-slate-800">
                2. Run Codex
              </p>
              <p className="mt-2 text-xs text-slate-500">
                Generate summaries, checklists, and PR-ready titles.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white/80 p-4">
              <p className="text-sm font-semibold text-slate-800">
                3. Request writes
              </p>
              <p className="mt-2 text-xs text-slate-500">
                Submit access requests with explicit scope and policy.
              </p>
            </div>
          </div>
          <p className="mt-6 text-sm text-slate-500">
            Sign in to view tickets and use Codex actions.
          </p>
        </section>
        <section className="grid gap-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                Governance
              </p>
              <h2 className="mt-1 text-lg font-semibold text-slate-900">
                Team Codex policy
              </h2>
            </div>
            <Badge tone="slate">Read-only mode</Badge>
          </div>
          <PolicyPanel />
        </section>
      </div>
    );
  }

  const tickets = await prisma.ticket.findMany({ orderBy: { key: "asc" } });

  return (
    <div className="grid gap-10">
      <section className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-slate-100 p-8 shadow-sm">
        <div className="flex flex-wrap items-center gap-3">
          <Badge tone="amber">Read-only</Badge>
          <Badge tone="slate">Approval required for writes</Badge>
        </div>
        <div className="mt-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            Home / Tickets
          </p>
          <h1 className="mt-2 text-3xl font-semibold text-slate-900">
            Jira tickets with Codex-ready context
          </h1>
          <p className="mt-4 max-w-2xl text-slate-600">
            Select a ticket to generate Codex summaries, inspect governance
            controls, and request scoped write access when needed.
          </p>
        </div>
      </section>
      <section className="grid gap-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              Ticket queue
            </p>
            <h2 className="mt-1 text-2xl font-semibold text-slate-900">
              Open tickets
            </h2>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Badge tone="amber">Approval required for writes</Badge>
            <Badge tone="slate">Read-only by default</Badge>
          </div>
        </div>
        <div className="grid gap-4">
          {tickets.map((ticket) => (
            <Link
              key={ticket.id}
              href={`/tickets/${ticket.key}`}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                    {ticket.key}
                  </p>
                  <h3 className="mt-1 text-lg font-semibold text-slate-900">
                    {ticket.title}
                  </h3>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-slate-700">
                    {ticket.status}
                  </p>
                  <p className="text-xs text-slate-500">{ticket.priority}</p>
                </div>
              </div>
              <p className="mt-3 text-sm text-slate-600">
                {ticket.description}
              </p>
            </Link>
          ))}
        </div>
      </section>
      <section className="grid gap-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              Governance
            </p>
            <h2 className="mt-1 text-lg font-semibold text-slate-900">
              Team Codex policy
            </h2>
          </div>
          <Badge tone="slate">Read-only mode</Badge>
        </div>
        <PolicyPanel />
      </section>
    </div>
  );
}
