import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { WriteAccessModal } from "../components/WriteAccessModal";

describe("WriteAccessModal", () => {
  it("submits a write access request", async () => {
    const user = userEvent.setup();
    const onSubmitted = vi.fn();

    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({
        id: "req_1",
        ticketKey: "ECOM-101",
        reason: "Need to update ticket fields",
        scope: "Update summary",
        approvalPolicy: "Lead approval",
        notes: "",
        status: "pending",
        createdAt: new Date().toISOString()
      })
    });

    vi.stubGlobal("fetch", fetchMock);

    render(<WriteAccessModal ticketKey="ECOM-101" onSubmitted={onSubmitted} />);

    await user.click(screen.getByRole("button", { name: /request write access/i }));
    await user.type(screen.getByLabelText(/reason/i), "Need to update ticket fields");
    await user.type(screen.getByLabelText(/scope/i), "Update summary");
    await user.type(screen.getByLabelText(/approval policy/i), "Lead approval");
    await user.click(screen.getByRole("checkbox"));
    await user.click(screen.getByRole("button", { name: /submit request/i }));

    expect(fetchMock).toHaveBeenCalledWith(
      "/api/write-access-requests",
      expect.objectContaining({
        method: "POST"
      })
    );

    expect(onSubmitted).toHaveBeenCalledWith(
      expect.objectContaining({ status: "pending" })
    );

    vi.unstubAllGlobals();
  });
});
