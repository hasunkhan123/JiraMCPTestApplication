import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../../lib/auth";
import { prisma } from "../../../../lib/prisma";

const RENAME_SCOPE = "rename-ticket";
const APPLY_SCOPE = "apply-codex";
const BOTH_SCOPE = "rename-and-apply";

export async function PATCH(
  request: Request,
  { params }: { params: { key: string } }
) {
  const session = await getServerSession(authOptions);

  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = (await request.json()) as {
    title?: string;
    description?: string;
  };

  if (!body.title && !body.description) {
    return NextResponse.json({ error: "No updates provided" }, { status: 400 });
  }

  const ticket = await prisma.ticket.findUnique({
    where: { key: params.key }
  });

  if (!ticket) {
    return NextResponse.json({ error: "Ticket not found" }, { status: 404 });
  }

  const approvals = await prisma.writeAccessRequest.findMany({
    where: {
      ticketId: ticket.id,
      userId: session.user.id,
      status: "approved"
    },
    select: { scope: true }
  });

  const approvedScopes = new Set(approvals.map((item) => item.scope));
  const canRename =
    approvedScopes.has(RENAME_SCOPE) || approvedScopes.has(BOTH_SCOPE);
  const canApply =
    approvedScopes.has(APPLY_SCOPE) || approvedScopes.has(BOTH_SCOPE);

  if (body.title && !canRename) {
    return NextResponse.json({ error: "Rename not approved" }, { status: 403 });
  }

  if (body.description && !canApply) {
    return NextResponse.json({ error: "Apply not approved" }, { status: 403 });
  }

  const updated = await prisma.ticket.update({
    where: { id: ticket.id },
    data: {
      ...(body.title ? { title: body.title } : {}),
      ...(body.description ? { description: body.description } : {})
    }
  });

  return NextResponse.json({
    key: updated.key,
    title: updated.title,
    description: updated.description
  });
}
