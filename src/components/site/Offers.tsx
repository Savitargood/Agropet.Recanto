import { useState } from "react";
import { motion } from "motion/react";
import { MessageCircle, Tag } from "lucide-react";
import { CATEGORIES, PRODUCTS } from "@/lib/site";
import { WhatsButton } from "./WhatsButton";
import { cn } from "@/lib/utils";

export function Offers() {
  const [active, setActive] = useState<string>("caes");
  const list = PRODUCTS.filter((p) => p.category === active);

  return (
    <section id="ofertas" className="py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="rounded-4xl bg-gradient-gold px-6 py-6 text-center shadow-soft sm:px-10">
          <p className="font-display text-xl font-extrabold text-accent-foreground sm:text-2xl">
            Ofertas da semana: rações premium a partir de R$ 99,99
          </p>
          <p className="mt-1 text-sm font-semibold text-accent-foreground/80">
            Peça pelo WhatsApp e receba em casa no Recanto das Emas.
          </p>
        </div>

        <h2 className="mt-12 text-center text-2xl sm:text-3xl">Produtos em oferta</h2>
        <p className="mx-auto mt-2 max-w-xl text-center text-sm text-muted-foreground">
          Escolha a categoria e peça direto pelo WhatsApp com a mensagem já preenchida.
        </p>

        <div className="mt-7 flex flex-wrap justify-center gap-2">
          {CATEGORIES.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setActive(c.id)}
              className={cn(
                "rounded-full px-5 py-2.5 text-sm font-bold transition-all",
                active === c.id
                  ? "bg-primary text-primary-foreground shadow-soft"
                  : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary",
              )}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              className="group flex flex-col rounded-3xl border border-border bg-card p-5 shadow-soft transition-all duration-200 hover:-translate-y-1 hover:shadow-card"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-bold tracking-wide text-secondary uppercase">
                    {p.brand}
                  </p>
                  <h3 className="mt-1 text-lg leading-snug">{p.name}</h3>
                  <p className="text-sm text-muted-foreground">{p.size}</p>
                </div>
                {p.badge && (
                  <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-gradient-gold px-3 py-1 text-xs font-extrabold text-accent-foreground">
                    <Tag className="size-3" aria-hidden="true" />
                    {p.badge}
                  </span>
                )}
              </div>

              <div className="mt-5 flex items-end gap-2">
                <span className="font-display text-2xl font-extrabold text-primary">{p.price}</span>
                {p.from && (
                  <span className="pb-1 text-sm text-muted-foreground line-through">{p.from}</span>
                )}
              </div>

              <WhatsButton
                message={`Olá! Vi no site a ${p.name} (${p.brand}, ${p.size}) por ${p.price} e gostaria de pedir.`}
                className="mt-5 w-full"
              >
                <MessageCircle className="size-4" aria-hidden="true" />
                Comprar via WhatsApp
              </WhatsButton>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
