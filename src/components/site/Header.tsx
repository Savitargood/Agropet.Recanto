import { useState } from "react";
import { Heart, PawPrint, Menu, X } from "lucide-react";

const links = [
  { href: "#inicio", label: "Início" },
  { href: "#ofertas", label: "Rações em Oferta" },
  { href: "#banho-tosa", label: "Banho e Tosa" },
  { href: "#medicamentos", label: "Medicamentos" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <div className="border-b border-border bg-card/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
          <a href="#inicio" className="flex items-center gap-2.5">
            <span className="relative inline-flex size-10 items-center justify-center rounded-2xl bg-gradient-green">
              <Heart className="size-6 text-primary-foreground" aria-hidden="true" />
              <PawPrint
                className="absolute size-3.5 text-secondary-foreground"
                aria-hidden="true"
              />
            </span>
            <span className="font-display text-lg leading-tight font-extrabold text-primary sm:text-xl">
              Agropet <span className="text-secondary">Recanto</span>
            </span>
          </a>

          <nav className="hidden items-center gap-6 lg:flex" aria-label="Navegação principal">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-bold text-muted-foreground transition-colors hover:text-primary"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Abrir menu"
            aria-expanded={open}
            className="inline-flex size-10 items-center justify-center rounded-full border border-border text-primary lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        {open && (
          <nav className="border-t border-border bg-card px-4 py-3 lg:hidden" aria-label="Menu">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-3 py-3 text-sm font-bold text-foreground hover:bg-muted"
              >
                {l.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
