import { Clock, Facebook, Heart, Instagram, MapPin, PawPrint, Phone } from "lucide-react";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";
import { WhatsButton } from "./WhatsButton";

export function Footer() {
  return (
    <footer id="contato" className="bg-primary-dark text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 lg:grid-cols-2">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="relative inline-flex size-10 items-center justify-center rounded-2xl bg-gradient-green">
              <Heart className="size-6 text-primary-foreground" aria-hidden="true" />
              <PawPrint className="absolute size-3.5 text-secondary-foreground" aria-hidden="true" />
            </span>
            <span className="font-display text-xl font-extrabold">Agropet Recanto</span>
          </div>
          <p className="mt-4 max-w-md text-sm text-primary-foreground/80">
            Pet shop e casa agropecuária no Recanto das Emas: rações, farmácia veterinária,
            acessórios e banho &amp; tosa.
          </p>

          <ul className="mt-6 space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-secondary" aria-hidden="true" />
              <span>Recanto das Emas, Brasília - DF</span>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-secondary" aria-hidden="true" />
              <a href={`tel:${PHONE_TEL}`} className="hover:underline">
                {PHONE_DISPLAY}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Clock className="mt-0.5 size-4 shrink-0 text-secondary" aria-hidden="true" />
              <span>
                Seg a Sex: 8h às 19h
                <br />
                Sáb: 8h às 18h · Dom: 8h às 12h
              </span>
            </li>
          </ul>

          <div className="mt-6 flex items-center gap-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="inline-flex size-10 items-center justify-center rounded-full bg-primary-foreground/10 transition-colors hover:bg-primary-foreground/20"
            >
              <Instagram className="size-5" aria-hidden="true" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="inline-flex size-10 items-center justify-center rounded-full bg-primary-foreground/10 transition-colors hover:bg-primary-foreground/20"
            >
              <Facebook className="size-5" aria-hidden="true" />
            </a>
            <WhatsButton message="Olá! Gostaria de mais informações da Agropet Recanto.">
              Chamar no WhatsApp
            </WhatsButton>
          </div>
        </div>

        <div>
          <h2 className="text-xl">Como chegar</h2>
          <div className="mt-4 overflow-hidden rounded-3xl border border-primary-foreground/15">
            <iframe
              title="Mapa da Agropet Recanto no Recanto das Emas"
              src="https://www.google.com/maps?q=Recanto+das+Emas,+Bras%C3%ADlia+-+DF&output=embed"
              loading="lazy"
              className="h-72 w-full border-0"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15 px-4 py-5 text-center text-xs text-primary-foreground/70">
        © {new Date().getFullYear()} Agropet Recanto · Recanto das Emas - DF
      </div>
    </footer>
  );
}
