"use client";

import { useState } from "react";
import { Badge } from "./Badge";
import { RequestsList, type RequestItem } from "./RequestsList";
import { WriteAccessModal } from "./WriteAccessModal";

export function TicketGovernance({
  ticketKey,
  initialRequests
}: {
  ticketKey: string;
  initialRequests: RequestItem[];
}) {
  const [requests, setRequests] = useState<RequestItem[]>(initialRequests);

  return (
    <div className="space-y-4">
      <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-slate-100">Governance</h3>
            <p className="text-sm text-slate-400">
              Jira is read-only by default. Writes require approval.
            </p>
          </div>
          <Badge tone="amber">Read-only</Badge>
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <Badge tone="amber">Approval required for writes</Badge>
          <WriteAccessModal
            ticketKey={ticketKey}
            onSubmitted={(request) =>
              setRequests((prev) => [
                {
                  id: request.id,
                  reason: request.reason,
                  scope: request.scope,
                  approvalPolicy: request.approvalPolicy,
                  notes: request.notes,
                  status: request.status,
                  createdAt: request.createdAt
                },
                ...prev
              ])
            }
          />
        </div>
      </div>
      <RequestsList requests={requests} />
    </div>
  );
}
