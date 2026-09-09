import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Offers } from "@/components/site/Offers";
import { Grooming } from "@/components/site/Grooming";
import { Differentials } from "@/components/site/Differentials";
import { Footer } from "@/components/site/Footer";
import { WhatsButton } from "@/components/site/WhatsButton";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Agropet Recanto | Rações, Farmácia Vet e Banho e Tosa no Recanto" },
      {
        name: "description",
        content:
          "Pet shop e agropecuária no Recanto das Emas: rações premium a partir de R$ 99,99, farmácia veterinária, acessórios e banho e tosa. Peça pelo WhatsApp.",
      },
      { property: "og:title", content: "Agropet Recanto | Pet Shop no Recanto das Emas" },
      {
        property: "og:description",
        content:
          "Rações premium, farmácia veterinária e banho & tosa com carinho. Entrega rápida no Recanto das Emas.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Offers />
        <Grooming />
        <Differentials />
      </main>
      <Footer />

      <WhatsButton
        message="Olá! Vim pelo site da Agropet Recanto e gostaria de atendimento."
        size="lg"
        glow
        className="fixed right-4 bottom-4 z-50 shadow-card md:hidden"
      >
        <MessageCircle className="size-5" aria-hidden="true" />
        WhatsApp
      </WhatsButton>
    </div>
  );
}
