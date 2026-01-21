import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../lib/auth";
import { prisma } from "../../../lib/prisma";

async function resolveUserId(request: Request) {
  if (process.env.NODE_ENV === "test") {
    const testUserId = request.headers.get("x-test-user-id");
    if (testUserId) {
      return testUserId;
    }
  }

  const session = await getServerSession(authOptions);
  if (session?.user?.id) {
    return session.user.id;
  }

  return null;
}

export async function POST(request: Request) {
  const userId = await resolveUserId(request);

  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = (await request.json()) as {
    ticketKey?: string;
    reason?: string;
    scope?: string;
    approvalPolicy?: string;
    notes?: string;
  };

  if (!body.ticketKey || !body.reason || !body.scope || !body.approvalPolicy) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const ticket = await prisma.ticket.findUnique({
    where: { key: body.ticketKey }
  });

  if (!ticket) {
    return NextResponse.json({ error: "Ticket not found" }, { status: 404 });
  }

  const requestRecord = await prisma.writeAccessRequest.create({
    data: {
      ticketId: ticket.id,
      userId,
      reason: body.reason,
      scope: body.scope,
      approvalPolicy: body.approvalPolicy,
      notes: body.notes ?? null,
      status: "pending"
    }
  });

  return NextResponse.json({
    id: requestRecord.id,
    ticketKey: body.ticketKey,
    reason: requestRecord.reason,
    scope: requestRecord.scope,
    approvalPolicy: requestRecord.approvalPolicy,
    notes: requestRecord.notes,
    status: requestRecord.status,
    createdAt: requestRecord.createdAt.toISOString()
  });
}

export async function GET(request: Request) {
  const userId = await resolveUserId(request);

  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const ticketKey = searchParams.get("ticketKey");

  const requests = await prisma.writeAccessRequest.findMany({
    where: ticketKey ? { ticket: { key: ticketKey } } : undefined,
    orderBy: { createdAt: "desc" }
  });

  return NextResponse.json(
    requests.map((requestItem) => ({
      id: requestItem.id,
      reason: requestItem.reason,
      scope: requestItem.scope,
      approvalPolicy: requestItem.approvalPolicy,
      notes: requestItem.notes,
      status: requestItem.status,
      createdAt: requestItem.createdAt.toISOString()
    }))
  );
}
