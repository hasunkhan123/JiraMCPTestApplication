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
    scope: "",
    approvalPolicy: "",
    notes: "",
    confirm: false
  });

  const resetForm = () => {
    setForm({ reason: "", scope: "", approvalPolicy: "", notes: "", confirm: false });
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
        className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100"
        onClick={() => setOpen(true)}
      >
        Request write access
      </button>

      {open ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-6">
          <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Jira write access
                </p>
                <h2 className="mt-1 text-xl font-semibold text-slate-900">
                  Request temporary write access
                </h2>
              </div>
              <Badge tone="amber">Read-only</Badge>
            </div>

            <form className="mt-5 space-y-4" onSubmit={handleSubmit}>
              <label className="block text-sm font-medium text-slate-700">
                Reason
                <textarea
                  required
                  className="mt-2 w-full rounded-xl border border-slate-200 p-3 text-sm text-slate-700"
                  rows={3}
                  value={form.reason}
                  onChange={(event) =>
                    setForm((prev) => ({ ...prev, reason: event.target.value }))
                  }
                />
              </label>
              <label className="block text-sm font-medium text-slate-700">
                Scope
                <input
                  required
                  className="mt-2 w-full rounded-xl border border-slate-200 p-3 text-sm text-slate-700"
                  value={form.scope}
                  onChange={(event) =>
                    setForm((prev) => ({ ...prev, scope: event.target.value }))
                  }
                  placeholder="e.g., Update ticket fields only"
                />
              </label>
              <label className="block text-sm font-medium text-slate-700">
                Approval policy
                <input
                  required
                  className="mt-2 w-full rounded-xl border border-slate-200 p-3 text-sm text-slate-700"
                  value={form.approvalPolicy}
                  onChange={(event) =>
                    setForm((prev) => ({ ...prev, approvalPolicy: event.target.value }))
                  }
                  placeholder="e.g., Team lead + security reviewer"
                />
              </label>
              <label className="block text-sm font-medium text-slate-700">
                Notes (optional)
                <input
                  className="mt-2 w-full rounded-xl border border-slate-200 p-3 text-sm text-slate-700"
                  value={form.notes}
                  onChange={(event) =>
                    setForm((prev) => ({ ...prev, notes: event.target.value }))
                  }
                />
              </label>
              <label className="flex items-start gap-2 text-sm text-slate-600">
                <input
                  type="checkbox"
                  required
                  className="mt-1"
                  checked={form.confirm}
                  onChange={(event) =>
                    setForm((prev) => ({ ...prev, confirm: event.target.checked }))
                  }
                />
                I understand write access is time-bound and requires approval.
              </label>

              {error ? (
                <p className="text-sm text-red-600">{error}</p>
              ) : null}

              <div className="flex items-center justify-end gap-3">
                <button
                  type="button"
                  className="rounded-full px-4 py-2 text-sm font-semibold text-slate-600 hover:text-slate-900"
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
                  className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800 disabled:cursor-not-allowed disabled:bg-slate-400"
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
