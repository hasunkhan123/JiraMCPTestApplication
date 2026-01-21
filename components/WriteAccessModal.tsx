"use client";

import { useState } from "react";
import { Badge } from "./Badge";

type WriteAccessRequestPayload = {
  ticketKey: string;
  reason: string;
  scope: string;
  approvalPolicy: string;
  notes?: string;
};

type WriteAccessRequestResponse = WriteAccessRequestPayload & {
  id: string;
  status: string;
  createdAt: string;
};

export function WriteAccessModal({
  ticketKey,
  onSubmitted
}: {
  ticketKey: string;
  onSubmitted?: (request: WriteAccessRequestResponse) => void;
}) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({
    reason: "",
    scope: "rename-ticket",
    approvalPolicy: "",
    notes: "",
    confirm: false
  });

  const resetForm = () => {
    setForm({
      reason: "",
      scope: "rename-ticket",
      approvalPolicy: "",
      notes: "",
      confirm: false
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const payload: WriteAccessRequestPayload = {
        ticketKey,
        reason: form.reason,
        scope: form.scope,
        approvalPolicy: form.approvalPolicy,
        notes: form.notes || undefined
      };

      const response = await fetch("/api/write-access-requests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error("Request failed.");
      }

      const data = (await response.json()) as WriteAccessRequestResponse;
      onSubmitted?.(data);
      resetForm();
      setOpen(false);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Unknown error";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button
        className="rounded-full border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-100 hover:bg-slate-800"
        onClick={() => setOpen(true)}
      >
        Request write access
      </button>

      {open ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-6">
          <div className="w-full max-w-lg rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Jira write access
                </p>
                <h2 className="mt-1 text-xl font-semibold text-slate-100">
                  Request temporary write access
                </h2>
              </div>
              <Badge tone="amber">Read-only</Badge>
            </div>

            <form className="mt-5 space-y-4" onSubmit={handleSubmit}>
              <label className="block text-sm font-medium text-slate-200">
                Reason
                <textarea
                  required
                  className="mt-2 w-full rounded-xl border border-slate-800 bg-slate-950 p-3 text-sm text-slate-100 placeholder:text-slate-600"
                  rows={3}
                  value={form.reason}
                  onChange={(event) =>
                    setForm((prev) => ({ ...prev, reason: event.target.value }))
                  }
                />
              </label>
              <label className="block text-sm font-medium text-slate-200">
                Scope
                <select
                  required
                  className="mt-2 w-full rounded-xl border border-slate-800 bg-slate-950 p-3 text-sm text-slate-100"
                  value={form.scope}
                  onChange={(event) =>
                    setForm((prev) => ({ ...prev, scope: event.target.value }))
                  }
                >
                  <option value="rename-ticket">Rename ticket title</option>
                  <option value="apply-codex">
                    Apply Codex summary and checklist
                  </option>
                  <option value="rename-and-apply">
                    Rename ticket + apply Codex output
                  </option>
                </select>
                <p className="mt-2 text-xs text-slate-400">
                  Pick the minimal write access needed for this change.
                </p>
              </label>
              <label className="block text-sm font-medium text-slate-200">
                Approval policy
                <input
                  required
                  className="mt-2 w-full rounded-xl border border-slate-800 bg-slate-950 p-3 text-sm text-slate-100 placeholder:text-slate-600"
                  value={form.approvalPolicy}
                  onChange={(event) =>
                    setForm((prev) => ({ ...prev, approvalPolicy: event.target.value }))
                  }
                  placeholder="e.g., Team lead + security reviewer"
                />
              </label>
              <label className="block text-sm font-medium text-slate-200">
                Notes (optional)
                <input
                  className="mt-2 w-full rounded-xl border border-slate-800 bg-slate-950 p-3 text-sm text-slate-100 placeholder:text-slate-600"
                  value={form.notes}
                  onChange={(event) =>
                    setForm((prev) => ({ ...prev, notes: event.target.value }))
                  }
                />
              </label>
              <label className="flex items-start gap-2 text-sm text-slate-300">
                <input
                  type="checkbox"
                  required
                  className="mt-1 rounded border-slate-700 bg-slate-950"
                  checked={form.confirm}
                  onChange={(event) =>
                    setForm((prev) => ({ ...prev, confirm: event.target.checked }))
                  }
                />
                I understand write access is time-bound and requires approval.
              </label>

              {error ? (
                <p className="text-sm text-red-200">{error}</p>
              ) : null}

              <div className="flex items-center justify-end gap-3">
                <button
                  type="button"
                  className="rounded-full px-4 py-2 text-sm font-semibold text-slate-300 hover:text-slate-100"
                  onClick={() => {
                    resetForm();
                    setOpen(false);
                  }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-white disabled:cursor-not-allowed disabled:bg-slate-500"
                >
                  {loading ? "Submitting..." : "Submit request"}
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </div>
  );
}
