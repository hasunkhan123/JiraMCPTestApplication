"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export function AuthButtons() {
  const { data: session } = useSession();

  if (session?.user) {
    return (
      <button
        className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
        onClick={() => signOut()}
      >
        Sign out
      </button>
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
