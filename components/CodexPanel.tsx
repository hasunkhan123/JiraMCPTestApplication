"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type CodexArtifact = {
  summary: string;
  prTitle: string;
  checklist: string[];
  rationale: string;
  createdAt?: string;
};

export function CodexPanel({
  ticketKey,
  initialArtifact,
  canApplyCodex
}: {
  ticketKey: string;
  initialArtifact?: CodexArtifact | null;
  canApplyCodex?: boolean;
}) {
  const [artifact, setArtifact] = useState<CodexArtifact | null>(
    initialArtifact ?? null
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [applying, setApplying] = useState(false);
  const [applyError, setApplyError] = useState<string | null>(null);
  const router = useRouter();

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

  const handleApply = async () => {
    if (!artifact) {
      return;
    }

    setApplying(true);
    setApplyError(null);
    try {
      const description = [
        "Codex summary:",
        artifact.summary,
        "",
        "Suggested PR title:",
        artifact.prTitle,
        "",
        "PR checklist:",
        ...artifact.checklist.map((item) => `- ${item}`)
      ].join("\n");

      const response = await fetch(`/api/tickets/${ticketKey}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ description })
      });

      if (!response.ok) {
        throw new Error("Apply failed.");
      }

      router.refresh();
    } catch (err) {
      const message = err instanceof Error ? err.message : "Apply failed.";
      setApplyError(message);
    } finally {
      setApplying(false);
    }
  };

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-slate-100">
            Codex summary
          </h3>
          <p className="text-sm text-slate-400">
            Server-side generation with persisted output.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {artifact && canApplyCodex ? (
            <button
              className="rounded-full border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-100 hover:bg-slate-800 disabled:cursor-not-allowed disabled:text-slate-500"
              onClick={handleApply}
              disabled={applying}
            >
              {applying ? "Applying..." : "Apply to ticket"}
            </button>
          ) : null}
          <button
            className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-white disabled:cursor-not-allowed disabled:bg-slate-500"
            onClick={handleGenerate}
            disabled={loading}
          >
            {loading ? "Generating..." : "Summarize with Codex"}
          </button>
        </div>
      </div>

      {error ? (
        <div className="mt-4 rounded-xl border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-200">
          {error}
        </div>
      ) : null}
      {applyError ? (
        <div className="mt-4 rounded-xl border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-200">
          {applyError}
        </div>
      ) : null}

      {artifact ? (
        <div className="mt-5 space-y-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Summary
            </p>
            <p className="mt-2 text-sm text-slate-200">{artifact.summary}</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Suggested PR title
            </p>
            <p className="mt-2 text-sm font-semibold text-slate-100">
              {artifact.prTitle}
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              PR checklist
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-200">
              {artifact.checklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <details className="rounded-xl border border-slate-800 bg-slate-950/70 p-3 text-sm text-slate-300">
            <summary className="cursor-pointer text-sm font-semibold text-slate-200">
              Why Codex suggested this
            </summary>
            <p className="mt-2">{artifact.rationale}</p>
          </details>
        </div>
      ) : (
        <p className="mt-5 text-sm text-slate-400">
          No Codex output yet. Generate a summary to persist the artifact.
        </p>
      )}
    </div>
  );
}
