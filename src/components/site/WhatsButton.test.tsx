import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { WhatsButton } from "@/components/site/WhatsButton";

describe("WhatsButton", () => {
  it("abre o WhatsApp em nova aba com a mensagem pronta", () => {
    render(<WhatsButton message="Quero agendar banho e tosa">Falar no WhatsApp</WhatsButton>);

    const link = screen.getByRole("link", { name: /falar no whatsapp/i });
    expect(link).toHaveAttribute(
      "href",
      "https://wa.me/556135754411?text=Quero%20agendar%20banho%20e%20tosa",
    );
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });
});
