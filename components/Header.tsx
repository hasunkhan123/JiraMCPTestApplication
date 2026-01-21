import Link from "next/link";
import { AuthButtons } from "./AuthButtons";

export function Header() {
  return (
    <header className="border-b border-slate-800 bg-slate-950">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold text-slate-100">
          Codex Jira Companion
        </Link>
        <AuthButtons />
      </div>
    </header>
  );
}
