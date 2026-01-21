import Link from "next/link";
import { getServerSession } from "next-auth";
import { notFound } from "next/navigation";
import { authOptions } from "../../../lib/auth";
import { prisma } from "../../../lib/prisma";
import { Badge } from "../../../components/Badge";
import { CodexPanel } from "../../../components/CodexPanel";
import { PolicyPanel } from "../../../components/PolicyPanel";
import { TicketTitleEditor } from "../../../components/TicketTitleEditor";
import { TicketGovernance } from "../../../components/TicketGovernance";

export default async function TicketDetailPage({
  params
}: {
  params: { key: string };
}) {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="text-xl font-semibold text-slate-900">
          Sign in to view this ticket
        </h1>
        <p className="mt-2 text-sm text-slate-600">
          Authenticate with GitHub to access Jira tickets and governance tools.
        </p>
      </div>
    );
  }

  const ticket = await prisma.ticket.findUnique({
    where: { key: params.key }
  });

  if (!ticket) {
    notFound();
  }

  const latestRun = await prisma.codexRun.findFirst({
    where: { ticketId: ticket.id, userId: session.user.id },
    orderBy: { createdAt: "desc" }
  });

  const requests = await prisma.writeAccessRequest.findMany({
    where: { ticketId: ticket.id },
    orderBy: { createdAt: "desc" }
  });

  const approvedRequests = await prisma.writeAccessRequest.findMany({
    where: {
      ticketId: ticket.id,
      userId: session.user.id,
      status: "approved"
    },
    select: { scope: true }
  });

  const approvedScopes = new Set(approvedRequests.map((item) => item.scope));
  const canRenameTicket =
    approvedScopes.has("rename-ticket") ||
    approvedScopes.has("rename-and-apply");
  const canApplyCodex =
    approvedScopes.has("apply-codex") ||
    approvedScopes.has("rename-and-apply");

  const requestItems = requests.map((request) => ({
    id: request.id,
    reason: request.reason,
    scope: request.scope,
    approvalPolicy: request.approvalPolicy,
    notes: request.notes,
    status: request.status,
    createdAt: request.createdAt.toISOString()
  }));

  const initialArtifact = latestRun
    ? {
        summary: latestRun.summary,
        prTitle: latestRun.prTitle,
        checklist: JSON.parse(latestRun.checklistJson) as string[],
        rationale: "Stored from previous Codex run."
      }
    : null;

  return (
    <div className="grid gap-8">
      <section className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6 shadow-sm">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-white"
        >
          <span aria-hidden="true">←</span>
          Back to tickets
        </Link>
        <div className="mt-4 flex items-start justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              {ticket.key}
            </p>
            <TicketTitleEditor
              ticketKey={ticket.key}
              title={ticket.title}
              canRename={canRenameTicket}
            />
            <p className="mt-3 text-sm text-slate-300">
              {ticket.description}
            </p>
          </div>
          <div className="text-right">
            <Badge tone="emerald">{ticket.status}</Badge>
            <p className="mt-2 text-xs text-slate-400">{ticket.priority}</p>
          </div>
        </div>
      </section>

      <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <div className="space-y-6">
          <CodexPanel
            ticketKey={ticket.key}
            initialArtifact={initialArtifact}
            canApplyCodex={canApplyCodex}
          />
          <PolicyPanel />
        </div>
        <TicketGovernance
          ticketKey={ticket.key}
          initialRequests={requestItems}
        />
      </div>
    </div>
  );
}
