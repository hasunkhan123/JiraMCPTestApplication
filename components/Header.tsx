import Link from "next/link";
import { AuthButtons } from "./AuthButtons";

export function Header() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold text-slate-900">
          Codex Jira Companion
        </Link>
        <AuthButtons />
      </div>
    </header>
  );
}
