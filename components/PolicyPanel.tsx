import { Badge } from "./Badge";

export function PolicyPanel() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
          Team Codex Policy
        </h3>
        <Badge tone="slate">Read-only</Badge>
      </div>
      <p className="mt-3 text-sm text-slate-600">
        Jira access defaults to read-only. Write operations require a documented
        request, explicit approvals, and a scoped time window.
      </p>
      <p className="mt-2 text-sm text-slate-600">
        Codex summaries are generated server-side and stored for auditability.
      </p>
    </div>
  );
}
