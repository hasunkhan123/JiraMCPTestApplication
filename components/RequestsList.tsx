"use client";

import { Badge } from "./Badge";

export type RequestItem = {
  id: string;
  reason: string;
  scope: string;
  approvalPolicy: string;
  notes?: string | null;
  status: string;
  createdAt: string;
};

export function RequestsList({
  requests,
  approvingId,
  approveError,
  onApprove
}: {
  requests: RequestItem[];
  approvingId?: string | null;
  approveError?: string | null;
  onApprove?: (requestId: string) => void;
}) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-slate-100">
          Write access requests
        </h3>
        <Badge tone="amber">Approval required for writes</Badge>
      </div>
      {approveError ? (
        <div className="mt-3 rounded-xl border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-200">
          {approveError}
        </div>
      ) : null}
      {requests.length === 0 ? (
        <p className="mt-3 text-sm text-slate-400">
          No requests yet. Submit a request to start the approval workflow.
        </p>
      ) : (
        <div className="mt-4 space-y-3">
          {requests.map((request) => (
            <div
              key={request.id}
              className="rounded-xl border border-slate-800 bg-slate-950/40 p-4"
            >
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-slate-100">
                  {request.reason}
                </p>
                <div className="flex items-center gap-2">
                  <Badge
                    tone={request.status === "approved" ? "emerald" : "amber"}
                  >
                    {request.status}
                  </Badge>
                  {request.status === "pending" && onApprove ? (
                    <button
                      className="rounded-full border border-slate-700 px-3 py-1 text-xs font-semibold text-slate-100 hover:bg-slate-800 disabled:cursor-not-allowed disabled:text-slate-500"
                      onClick={() => onApprove(request.id)}
                      disabled={approvingId === request.id}
                      type="button"
                    >
                      {approvingId === request.id ? "Approving..." : "Approve"}
                    </button>
                  ) : null}
                </div>
              </div>
              <p className="mt-2 text-sm text-slate-300">
                Scope: {request.scope}
              </p>
              <p className="text-sm text-slate-300">
                Approval policy: {request.approvalPolicy}
              </p>
              {request.notes ? (
                <p className="text-sm text-slate-300">Notes: {request.notes}</p>
              ) : null}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
