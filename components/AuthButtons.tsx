"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export function AuthButtons() {
  const { data: session } = useSession();

  if (session?.user) {
    const displayName = session.user.name ?? session.user.email ?? "User";
    const initial = displayName.trim().charAt(0).toUpperCase();

    return (
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-3 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-900 text-xs font-semibold text-white">
            {initial}
          </span>
          <div className="text-left">
            <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
              Signed in
            </p>
            <p className="text-sm font-semibold text-slate-800">
              {displayName}
            </p>
          </div>
        </div>
        <button
          className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
          onClick={() => signOut()}
        >
          Sign out
        </button>
      </div>
    );
  }

  return (
    <button
      className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
      onClick={() => signIn("github")}
    >
      Sign in with GitHub
    </button>
  );
}
