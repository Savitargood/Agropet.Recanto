import { motion } from "motion/react";
import { MessageCircle, Scissors, Star, Truck } from "lucide-react";
import heroImg from "@/assets/hero-pets.jpg";
import { WhatsButton } from "./WhatsButton";

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-gradient-hero">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 lg:grid-cols-2 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-primary-foreground"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-4 py-1.5 text-xs font-extrabold text-accent-foreground">
            <Star className="size-3.5" aria-hidden="true" />
            Menor preço em rações do Recanto
          </span>
          <h1 className="mt-5 text-3xl leading-tight sm:text-4xl lg:text-5xl">
            Tudo o que seu pet precisa com os melhores preços do Recanto!
          </h1>
          <p className="mt-4 max-w-xl text-base/relaxed opacity-90 sm:text-lg">
            Rações premium, farmácia veterinária e banho &amp; tosa com carinho e cuidado que seu
            melhor amigo merece.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <WhatsButton
              message="Olá! Gostaria de fazer um pedido na Agropet Recanto."
              size="lg"
              glow
            >
              <MessageCircle className="size-5" aria-hidden="true" />
              Pedir pelo WhatsApp
            </WhatsButton>
            <a
              href="#banho-tosa"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary-foreground/40 px-7 py-4 text-base font-bold text-primary-foreground transition-all hover:-translate-y-0.5 hover:bg-primary-foreground/10"
            >
              <Scissors className="size-5" aria-hidden="true" />
              Ver Tabela de Banho e Tosa
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold opacity-90">
            <span className="inline-flex items-center gap-2">
              <Truck className="size-4" aria-hidden="true" /> Entrega rápida no Recanto das Emas
            </span>
            <span className="inline-flex items-center gap-2">
              <Star className="size-4" aria-hidden="true" /> Atendimento que ama pets
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative"
        >
          <img
            src={heroImg}
            alt="Cão e gato felizes ao lado de sacos de ração premium em pet shop"
            width={1536}
            height={1024}
            className="w-full rounded-4xl shadow-card"
          />
          <div className="absolute -bottom-4 left-4 rounded-2xl bg-card px-4 py-3 shadow-card">
            <p className="text-xs font-bold text-muted-foreground">Rações a partir de</p>
            <p className="font-display text-2xl font-extrabold text-secondary">R$ 99,99</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
