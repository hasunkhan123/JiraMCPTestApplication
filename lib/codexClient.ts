import type { Ticket } from "@prisma/client";

export type CodexArtifact = {
  summary: string;
  prTitle: string;
  checklist: string[];
  rationale: string;
};

const mockChecklist = (ticket: Ticket) => [
  `Confirm expected behavior for ${ticket.key}`,
  `Update UI for ${ticket.title.toLowerCase()}`,
  "Add/adjust tests for new behavior",
  "Notify QA with rollout notes"
];

const mockRationale = (ticket: Ticket) =>
  `Codex inferred this from the ticket title and description to keep changes scoped to ${ticket.key}.`;

export async function generateCodexArtifact(ticket: Ticket): Promise<CodexArtifact> {
  const mode = process.env.CODEX_MODE ?? "mock";

  if (mode === "mock") {
    return {
      summary: `Focused update for ${ticket.key}: ${ticket.description}`,
      prTitle: `${ticket.key} — ${ticket.title}`,
      checklist: mockChecklist(ticket),
      rationale: mockRationale(ticket)
    };
  }

  if (!process.env.CODEX_API_KEY) {
    throw new Error("CODEX_API_KEY is required for live mode.");
  }

  const response = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.CODEX_API_KEY}`
    },
    body: JSON.stringify({
      model: "gpt-4.1-mini",
      input: `Summarize ticket ${ticket.key}: ${ticket.title}. ${ticket.description}`
    })
  });

  if (!response.ok) {
    throw new Error("Codex request failed.");
  }

  const data = (await response.json()) as {
    output_text?: string;
  };

  const text = data.output_text ?? "";

  return {
    summary: text || `Summary for ${ticket.key}`,
    prTitle: `${ticket.key} — ${ticket.title}`,
    checklist: mockChecklist(ticket),
    rationale: "Generated from live Codex response."
  };
}
