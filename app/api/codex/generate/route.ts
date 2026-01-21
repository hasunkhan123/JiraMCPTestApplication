import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../../lib/auth";
import { prisma } from "../../../../lib/prisma";
import { generateCodexArtifact } from "../../../../lib/codexClient";

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);

  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = (await request.json()) as { ticketKey?: string };

  if (!body.ticketKey) {
    return NextResponse.json({ error: "ticketKey required" }, { status: 400 });
  }

  const ticket = await prisma.ticket.findUnique({
    where: { key: body.ticketKey }
  });

  if (!ticket) {
    return NextResponse.json({ error: "Ticket not found" }, { status: 404 });
  }

  try {
    const artifact = await generateCodexArtifact(ticket);

    await prisma.codexRun.create({
      data: {
        ticketId: ticket.id,
        userId: session.user.id,
        summary: artifact.summary,
        prTitle: artifact.prTitle,
        checklistJson: JSON.stringify(artifact.checklist)
      }
    });

    return NextResponse.json(artifact);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Codex error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
