"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export function TicketTitleEditor({
  ticketKey,
  title,
  canRename
}: {
  ticketKey: string;
  title: string;
  canRename: boolean;
}) {
  const router = useRouter();
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(title);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSave = async () => {
    if (!draft.trim()) {
      setError("Title cannot be empty.");
      return;
    }

    setSaving(true);
    setError(null);
    try {
      const response = await fetch(`/api/tickets/${ticketKey}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: draft.trim() })
      });

      if (!response.ok) {
        throw new Error("Update failed.");
      }

      setEditing(false);
      router.refresh();
    } catch (err) {
      const message = err instanceof Error ? err.message : "Update failed.";
      setError(message);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div>
      <div className="flex flex-wrap items-center gap-3">
        {editing ? (
          <input
            className="w-full max-w-xl rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-lg font-semibold text-slate-100"
            value={draft}
            onChange={(event) => setDraft(event.target.value)}
          />
        ) : (
          <h1 className="mt-2 text-2xl font-semibold text-slate-100">
            {title}
          </h1>
        )}
        {canRename ? (
          <div className="flex items-center gap-2">
            {editing ? (
              <>
                <button
                  className="rounded-full border border-slate-700 px-3 py-1 text-xs font-semibold text-slate-100 hover:bg-slate-800 disabled:cursor-not-allowed disabled:text-slate-500"
                  onClick={handleSave}
                  disabled={saving}
                  type="button"
                >
                  {saving ? "Saving..." : "Save"}
                </button>
                <button
                  className="rounded-full px-3 py-1 text-xs font-semibold text-slate-400 hover:text-slate-100"
                  onClick={() => {
                    setEditing(false);
                    setDraft(title);
                    setError(null);
                  }}
                  type="button"
                >
                  Cancel
                </button>
              </>
            ) : (
              <button
                className="rounded-full border border-slate-700 px-3 py-1 text-xs font-semibold text-slate-100 hover:bg-slate-800"
                onClick={() => setEditing(true)}
                type="button"
              >
                Edit title
              </button>
            )}
          </div>
        ) : null}
      </div>
      {error ? (
        <p className="mt-2 text-sm text-red-200">{error}</p>
      ) : null}
    </div>
  );
}
