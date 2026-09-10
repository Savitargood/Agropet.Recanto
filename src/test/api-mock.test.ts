import { beforeEach, describe, expect, it, vi } from "vitest";

// Exemplo de teste de integração com chamada de API mockada (fetch),
// garantindo que respostas de erro e sucesso são tratadas sem quebrar o site.
type Offer = { name: string; price: string };

async function fetchOffers(): Promise<Offer[]> {
  const response = await fetch("/api/public/offers");
  if (!response.ok) return [];
  return (await response.json()) as Offer[];
}

describe("chamadas de API (mock)", () => {
  beforeEach(() => {
    vi.unstubAllGlobals();
  });

  it("retorna as ofertas quando a API responde com sucesso", async () => {
    const offers: Offer[] = [{ name: "Ração Adulto Carne", price: "R$ 99,99" }];
    const fetchMock = vi.fn().mockResolvedValue(
      new Response(JSON.stringify(offers), {
        status: 200,
        headers: { "content-type": "application/json" },
      }),
    );
    vi.stubGlobal("fetch", fetchMock);

    await expect(fetchOffers()).resolves.toEqual(offers);
    expect(fetchMock).toHaveBeenCalledWith("/api/public/offers");
  });

  it("devolve lista vazia quando a API falha", async () => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue(new Response("erro", { status: 500 })));
    await expect(fetchOffers()).resolves.toEqual([]);
  });
});
