import { motion } from "motion/react";
import { CalendarCheck, Check, Sparkles } from "lucide-react";
import groomingImg from "@/assets/banho-tosa.jpg";
import { GROOMING } from "@/lib/site";
import { WhatsButton } from "./WhatsButton";
import { cn } from "@/lib/utils";

export function Grooming() {
  return (
    <section id="banho-tosa" className="bg-muted/60 py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <img
            src={groomingImg}
            alt="Cachorro sendo escovado em salão de banho e tosa profissional"
            width={1280}
            height={960}
            loading="lazy"
            className="w-full rounded-4xl shadow-card"
          />
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-gradient-green px-4 py-1.5 text-xs font-extrabold text-primary-foreground">
              <Sparkles className="size-3.5" aria-hidden="true" />
              Promoção de Segunda a Quarta
            </span>
            <h2 className="mt-4 text-2xl sm:text-3xl">Banho e Tosa com carinho de verdade</h2>
            <p className="mt-3 text-muted-foreground">
              Banho e tosa em promoção de segunda a quarta! Profissionais experientes, produtos
              suaves e muito paciência com o seu pet. Agende o horário pelo WhatsApp e evite fila.
            </p>
            <WhatsButton
              message="Olá! Gostaria de agendar um horário de banho e tosa na Agropet Recanto."
              size="lg"
              className="mt-6"
              glow
            >
              <CalendarCheck className="size-5" aria-hidden="true" />
              Agendar Horário
            </WhatsButton>
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {GROOMING.map((g, i) => (
            <motion.article
              key={g.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: i * 0.08 }}
              className={cn(
                "flex flex-col rounded-3xl border bg-card p-6 shadow-soft transition-all duration-200 hover:-translate-y-1 hover:shadow-card",
                g.highlight ? "border-secondary ring-2 ring-secondary/30" : "border-border",
              )}
            >
              {g.highlight && (
                <span className="mb-3 self-start rounded-full bg-gradient-gold px-3 py-1 text-xs font-extrabold text-accent-foreground">
                  Mais pedido
                </span>
              )}
              <h3 className="text-xl">{g.title}</h3>
              <p className="text-sm text-muted-foreground">{g.note}</p>
              <p className="mt-4 font-display text-3xl font-extrabold text-primary">{g.price}</p>
              <ul className="mt-4 space-y-2 text-sm">
                {g.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Check className="mt-0.5 size-4 shrink-0 text-secondary" aria-hidden="true" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <WhatsButton
                message={`Olá! Gostaria de agendar o serviço "${g.title}" (${g.price}) para o meu pet.`}
                variant={g.highlight ? "green" : "outline"}
                className="mt-6 w-full"
              >
                <CalendarCheck className="size-4" aria-hidden="true" />
                Agendar Horário
              </WhatsButton>
            </motion.article>
          ))}
        </div>
        <p className="mt-5 text-center text-xs text-muted-foreground">
          Valores de referência por porte e tipo de pelagem. Confirme o preço do seu pet pelo
          WhatsApp.
        </p>
      </div>
    </section>
  );
}
