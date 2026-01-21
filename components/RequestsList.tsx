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

export function RequestsList({ requests }: { requests: RequestItem[] }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-slate-100">
          Write access requests
        </h3>
        <Badge tone="amber">Approval required for writes</Badge>
      </div>
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
                <Badge
                  tone={request.status === "approved" ? "emerald" : "amber"}
                >
                  {request.status}
                </Badge>
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
