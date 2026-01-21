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
      <div className="grid gap-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <Badge tone="amber">Read-only</Badge>
          <h1 className="mt-4 text-3xl font-semibold text-slate-900">
            Codex meets Jira governance
          </h1>
          <p className="mt-3 max-w-2xl text-slate-600">
            Sign in to explore Jira tickets, request gated write access, and
            generate Codex-powered summaries with audit-ready output.
          </p>
        </div>
        <PolicyPanel />
      </div>
    );
  }

  const tickets = await prisma.ticket.findMany({ orderBy: { key: "asc" } });

  return (
    <div className="grid gap-8">
      <section>
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-slate-900">Open tickets</h1>
          <Badge tone="amber">Approval required for writes</Badge>
        </div>
        <div className="mt-4 grid gap-4">
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
                  <h2 className="mt-1 text-lg font-semibold text-slate-900">
                    {ticket.title}
                  </h2>
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
      <PolicyPanel />
    </div>
  );
}
