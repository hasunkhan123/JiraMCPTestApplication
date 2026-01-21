import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../../lib/auth";
import { prisma } from "../../../../lib/prisma";

export async function PATCH(
  _request: Request,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession(authOptions);

  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const requestItem = await prisma.writeAccessRequest.findUnique({
    where: { id: params.id }
  });

  if (!requestItem) {
    return NextResponse.json({ error: "Request not found" }, { status: 404 });
  }

  const updated = await prisma.writeAccessRequest.update({
    where: { id: params.id },
    data: { status: "approved" }
  });

  return NextResponse.json({
    id: updated.id,
    reason: updated.reason,
    scope: updated.scope,
    approvalPolicy: updated.approvalPolicy,
    notes: updated.notes,
    status: updated.status,
    createdAt: updated.createdAt.toISOString()
  });
}
