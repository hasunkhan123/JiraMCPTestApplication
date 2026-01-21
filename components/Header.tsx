import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "../lib/auth";
import { prisma } from "../lib/prisma";
import { AuthButtons } from "./AuthButtons";
import { Badge } from "./Badge";

export async function Header() {
  const session = await getServerSession(authOptions);
  const approvedRequest = session?.user?.id
    ? await prisma.writeAccessRequest.findFirst({
        where: { userId: session.user.id, status: "approved" },
        select: { id: true }
      })
    : null;
  const hasWriteAccess = Boolean(approvedRequest);

  return (
    <header className="border-b border-slate-800 bg-slate-950">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold text-slate-100">
          Codex Jira Companion
        </Link>
        <div className="flex items-center gap-3">
          <Badge tone={hasWriteAccess ? "emerald" : "slate"}>
            {hasWriteAccess ? "Write enabled" : "Read-only"}
          </Badge>
          <AuthButtons />
        </div>
      </div>
    </header>
  );
}
