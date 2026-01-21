import { Badge } from "./Badge";

export function PolicyPanel({
  showHeader = true,
  accessLabel = "Read-only",
  accessTone = "slate"
}: {
  showHeader?: boolean;
  accessLabel?: string;
  accessTone?: "slate" | "amber" | "emerald";
}) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5 shadow-sm">
      {showHeader ? (
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
            Team Codex Policy
          </h3>
          <Badge tone={accessTone}>{accessLabel}</Badge>
        </div>
      ) : null}
      <p
        className={`${showHeader ? "mt-3" : ""} text-sm text-slate-300`}
      >
        Jira access defaults to read-only. Write operations require a documented
        request, explicit approvals, and a scoped time window.
      </p>
      <p className="mt-2 text-sm text-slate-300">
        Codex summaries are generated server-side and stored for auditability.
      </p>
    </div>
  );
}
