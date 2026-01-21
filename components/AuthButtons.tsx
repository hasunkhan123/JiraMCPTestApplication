"use client";

import { useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";

export function AuthButtons() {
  const { data: session } = useSession();
  const [resetting, setResetting] = useState(false);
  const [resetError, setResetError] = useState<string | null>(null);

  const handleReset = async () => {
    const confirmed = window.confirm(
      "Reset demo state for this account? This clears Codex runs and write access requests."
    );
    if (!confirmed) {
      return;
    }

    setResetting(true);
    setResetError(null);
    try {
      const response = await fetch("/api/demo/reset", { method: "POST" });
      if (!response.ok) {
        throw new Error("Reset failed.");
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : "Reset failed.";
      setResetError(message);
    } finally {
      setResetting(false);
    }
  };

  if (session?.user) {
    const displayName = session.user.name ?? session.user.email ?? "User";
    const initial = displayName.trim().charAt(0).toUpperCase();

    return (
      <details className="relative">
        <summary className="flex cursor-pointer list-none items-center gap-3 rounded-full border border-slate-800 bg-slate-900 px-3 py-1.5 text-slate-100 hover:bg-slate-800 marker:content-none">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-900 text-xs font-semibold text-white">
            {initial}
          </span>
          <div className="text-left">
            <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
              Signed in
            </p>
            <p className="text-sm font-semibold text-slate-100">
              {displayName}
            </p>
          </div>
          <span className="ml-1 flex h-8 w-8 items-center justify-center rounded-full border border-slate-800 bg-slate-950 text-slate-300">
            <span className="flex flex-col gap-1">
              <span className="block h-0.5 w-4 bg-slate-400" />
              <span className="block h-0.5 w-4 bg-slate-400" />
              <span className="block h-0.5 w-4 bg-slate-400" />
            </span>
          </span>
        </summary>
        <div className="absolute right-0 z-20 mt-2 w-64 rounded-2xl border border-slate-800 bg-slate-900 p-2 shadow-lg">
          <div className="px-3 py-2">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              Demo controls
            </p>
            <p className="mt-1 text-sm text-slate-300">
              Reset Codex outputs and access requests for this account.
            </p>
          </div>
          <div className="border-t border-slate-800">
            <button
              className="flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-sm font-medium text-slate-200 hover:bg-slate-800 disabled:cursor-not-allowed disabled:text-slate-500"
              onClick={handleReset}
              disabled={resetting}
              type="button"
            >
              {resetting ? "Resetting demo state..." : "Reset demo state"}
            </button>
            <button
              className="flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-sm font-medium text-slate-200 hover:bg-slate-800"
              onClick={() => signOut()}
              type="button"
            >
              Sign out
            </button>
          </div>
          {resetError ? (
            <div className="mt-2 rounded-xl border border-red-500/30 bg-red-500/10 px-3 py-2 text-xs text-red-200">
              {resetError}
            </div>
          ) : null}
        </div>
      </details>
    );
  }

  return (
    <button
      className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-white"
      onClick={() => signIn("github")}
    >
      Sign in with GitHub
    </button>
  );
}
