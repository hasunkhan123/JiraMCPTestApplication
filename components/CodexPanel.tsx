"use client";

import { useState } from "react";

type CodexArtifact = {
  summary: string;
  prTitle: string;
  checklist: string[];
  rationale: string;
  createdAt?: string;
};

export function CodexPanel({
  ticketKey,
  initialArtifact
}: {
  ticketKey: string;
  initialArtifact?: CodexArtifact | null;
}) {
  const [artifact, setArtifact] = useState<CodexArtifact | null>(
    initialArtifact ?? null
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("/api/codex/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ticketKey })
      });

      if (!response.ok) {
        throw new Error("Codex request failed.");
      }

      const data = (await response.json()) as CodexArtifact;
      setArtifact({ ...data, createdAt: new Date().toISOString() });
    } catch (err) {
      const message = err instanceof Error ? err.message : "Unknown error";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">
            Codex summary
          </h3>
          <p className="text-sm text-slate-500">
            Server-side generation with persisted output.
          </p>
        </div>
        <button
          className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800 disabled:cursor-not-allowed disabled:bg-slate-400"
          onClick={handleGenerate}
          disabled={loading}
        >
          {loading ? "Generating..." : "Summarize with Codex"}
        </button>
      </div>

      {error ? (
        <div className="mt-4 rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-700">
          {error}
        </div>
      ) : null}

      {artifact ? (
        <div className="mt-5 space-y-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              Summary
            </p>
            <p className="mt-2 text-sm text-slate-700">{artifact.summary}</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              Suggested PR title
            </p>
            <p className="mt-2 text-sm font-semibold text-slate-900">
              {artifact.prTitle}
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              PR checklist
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
              {artifact.checklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <details className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-600">
            <summary className="cursor-pointer text-sm font-semibold text-slate-700">
              Why Codex suggested this
            </summary>
            <p className="mt-2">{artifact.rationale}</p>
          </details>
        </div>
      ) : (
        <p className="mt-5 text-sm text-slate-500">
          No Codex output yet. Generate a summary to persist the artifact.
        </p>
      )}
    </div>
  );
}
