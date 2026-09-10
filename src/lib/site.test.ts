import { describe, expect, it } from "vitest";
import { CATEGORIES, PHONE_DISPLAY, PRODUCTS, WHATSAPP_NUMBER, waLink } from "@/lib/site";

describe("dados da loja", () => {
  it("usa o telefone oficial da Agropet Recanto", () => {
    expect(PHONE_DISPLAY).toBe("(61) 3575-4411");
    expect(WHATSAPP_NUMBER).toBe("556135754411");
  });

  it("monta o link do WhatsApp com a mensagem codificada", () => {
    expect(waLink("Olá, quero uma ração")).toBe(
      "https://wa.me/556135754411?text=Ol%C3%A1%2C%20quero%20uma%20ra%C3%A7%C3%A3o",
    );
  });

  it("tem produtos em todas as categorias exibidas", () => {
    for (const category of CATEGORIES) {
      expect(PRODUCTS.some((p) => p.category === category.id)).toBe(true);
    }
  });

  it("mostra preço em reais em todos os produtos", () => {
    for (const product of PRODUCTS) {
      expect(product.price).toMatch(/^R\$\s\d/);
    }
  });
});
