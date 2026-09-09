import { motion } from "motion/react";
import { Pill, Scissors, Tags, Truck, MessageCircle } from "lucide-react";
import { WhatsButton } from "./WhatsButton";

const items = [
  {
    icon: Truck,
    title: "Entrega Rápida no Recanto",
    text: "Seu pedido chega no mesmo dia em toda Recanto das Emas.",
  },
  {
    icon: Pill,
    title: "Farmácia Veterinária Completa",
    text: "Antipulgas, vermífugos, antibióticos e suplementos com orientação.",
  },
  {
    icon: Scissors,
    title: "Estética Pet Profissional",
    text: "Banho, tosa, hidratação e cuidados feitos com paciência.",
  },
  {
    icon: Tags,
    title: "Garantia de Menor Preço em Rações",
    text: "Achou mais barato na região? A gente cobre a oferta.",
  },
];

export function Differentials() {
  return (
    <section id="medicamentos" className="py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-center text-2xl sm:text-3xl">Por que comprar na Agropet Recanto</h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: i * 0.07 }}
              className="rounded-3xl border border-border bg-card p-6 text-center shadow-soft transition-all duration-200 hover:-translate-y-1 hover:shadow-card"
            >
              <span className="inline-flex size-14 items-center justify-center rounded-2xl bg-gradient-hero">
                <it.icon className="size-7 text-primary-foreground" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-lg leading-snug">{it.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{it.text}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 rounded-4xl bg-gradient-hero px-6 py-10 text-center shadow-card sm:px-12">
          <h3 className="text-2xl text-primary-foreground sm:text-3xl">
            Precisa de um medicamento veterinário?
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-primary-foreground/85">
            Nossa farmácia vet tem antipulgas, vermífugos, dermatológicos e suplementos. Mande a foto
            da receita ou o nome do produto no WhatsApp e conferimos na hora.
          </p>
          <WhatsButton
            message="Olá! Preciso de um medicamento veterinário. Pode verificar a disponibilidade?"
            size="lg"
            variant="gold"
            className="mt-6"
          >
            <MessageCircle className="size-5" aria-hidden="true" />
            Consultar no WhatsApp
          </WhatsButton>
        </div>
      </div>
    </section>
  );
}
