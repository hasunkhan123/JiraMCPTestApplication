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
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-slate-900">
          Write access requests
        </h3>
        <Badge tone="amber">Approval required for writes</Badge>
      </div>
      {requests.length === 0 ? (
        <p className="mt-3 text-sm text-slate-500">
          No requests yet. Submit a request to start the approval workflow.
        </p>
      ) : (
        <div className="mt-4 space-y-3">
          {requests.map((request) => (
            <div
              key={request.id}
              className="rounded-xl border border-slate-200 p-4"
            >
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-slate-800">
                  {request.reason}
                </p>
                <Badge
                  tone={request.status === "approved" ? "emerald" : "amber"}
                >
                  {request.status}
                </Badge>
              </div>
              <p className="mt-2 text-sm text-slate-600">
                Scope: {request.scope}
              </p>
              <p className="text-sm text-slate-600">
                Approval policy: {request.approvalPolicy}
              </p>
              {request.notes ? (
                <p className="text-sm text-slate-600">Notes: {request.notes}</p>
              ) : null}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
