import { PrismaClient } from "@prisma/client";
import { jiraMockTickets } from "../lib/jiraMock";

const prisma = new PrismaClient();

async function main() {
  for (const ticket of jiraMockTickets) {
    await prisma.ticket.upsert({
      where: { key: ticket.key },
      update: {
        title: ticket.title,
        description: ticket.description,
        status: ticket.status,
        priority: ticket.priority
      },
      create: ticket
    });
  }
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
