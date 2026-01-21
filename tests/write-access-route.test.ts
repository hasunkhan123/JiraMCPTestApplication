import fs from "fs";
import os from "os";
import path from "path";
import { describe, expect, it, vi, beforeAll, afterAll } from "vitest";

const migrationPath = path.join(
  process.cwd(),
  "prisma/migrations/20240901000000_init/migration.sql"
);

async function applyMigration(prisma: { $executeRawUnsafe: (sql: string) => Promise<unknown> }) {
  const sql = fs.readFileSync(migrationPath, "utf8");
  const sanitized = sql
    .split("\n")
    .filter((line) => !line.trim().startsWith("--"))
    .join("\n");
  const statements = sanitized
    .split(";")
    .map((statement) => statement.trim())
    .filter((statement) => statement.length > 0);

  for (const statement of statements) {
    await prisma.$executeRawUnsafe(statement);
  }
}

describe("write access requests route", () => {
  const dbPath = path.join(os.tmpdir(), "codex-jira-test.db");

  beforeAll(async () => {
    process.env.DATABASE_URL = `file:${dbPath}`;
    process.env.NODE_ENV = "test";
    vi.resetModules();
    const { prisma } = await import("../lib/prisma");
    await applyMigration(prisma);
    await prisma.user.create({
      data: {
        id: "user_1",
        email: "user@example.com",
        name: "Test User"
      }
    });
    await prisma.ticket.create({
      data: {
        key: "ECOM-101",
        title: "Add shipping estimator",
        description: "Mock",
        status: "To Do",
        priority: "High"
      }
    });
  });

  afterAll(async () => {
    const { prisma } = await import("../lib/prisma");
    await prisma.$disconnect();
    if (fs.existsSync(dbPath)) {
      fs.unlinkSync(dbPath);
    }
  });

  it("persists a pending request", async () => {
    const { POST } = await import("../app/api/write-access-requests/route");
    const request = new Request("http://localhost/api/write-access-requests", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-test-user-id": "user_1"
      },
      body: JSON.stringify({
        ticketKey: "ECOM-101",
        reason: "Need to update fields",
        scope: "Update ticket status",
        approvalPolicy: "Lead approval",
        notes: "" 
      })
    });

    const response = await POST(request);
    expect(response.status).toBe(200);

    const data = (await response.json()) as { id: string; status: string };
    expect(data.status).toBe("pending");

    const { prisma } = await import("../lib/prisma");
    const record = await prisma.writeAccessRequest.findUnique({
      where: { id: data.id }
    });

    expect(record?.status).toBe("pending");
  });
});
