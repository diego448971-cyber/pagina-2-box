"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import CTAButton from "@/components/CTAButton";
import { navLinks, siteConfig } from "@/data/siteConfig";
import { cn } from "@/lib/utils";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/95 text-white shadow-sm backdrop-blur">
      <div className="bg-gold px-4 py-2 text-center text-xs font-black uppercase tracking-[0.12em] text-ink">
        {siteConfig.topBarText}
      </div>
      <div className="container-shell flex min-h-[76px] items-center justify-between gap-4">
        <a className="flex items-center gap-3" href="#topo" aria-label="Ir para o início">
          <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-white text-lg font-black text-ink">
            RE
          </span>
          <span>
            <strong className="block text-sm font-black leading-tight sm:text-base">{siteConfig.brandName}</strong>
            <span className="block text-xs text-white/60">Box digital com 2 livros</span>
          </span>
        </a>

        <nav className="hidden items-center gap-5 lg:flex" aria-label="Navegação principal">
          {navLinks.map((link) => (
            <a className="text-sm font-bold text-white/75 transition hover:text-gold" href={link.href} key={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <CTAButton href="#oferta" eventName="ViewOffer" icon="arrow" variant="primary">
            Quero conhecer o Box
          </CTAButton>
        </div>

        <button
          aria-expanded={open}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/20 text-white lg:hidden"
          onClick={() => setOpen((current) => !current)}
          type="button"
        >
          {open ? <X aria-hidden="true" className="h-5 w-5" /> : <Menu aria-hidden="true" className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={cn(
          "grid border-t border-white/10 bg-ink transition-all duration-200 lg:hidden",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <nav className="overflow-hidden" aria-label="Menu móvel">
          <div className="container-shell grid gap-2 py-4">
            {navLinks.map((link) => (
              <a
                className="rounded-lg px-3 py-3 text-sm font-bold text-white/80 hover:bg-white/10 hover:text-gold"
                href={link.href}
                key={link.href}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <CTAButton className="mt-2" fullWidth href="#oferta" eventName="ViewOffer" icon="arrow">
              Quero conhecer o Box
            </CTAButton>
          </div>
        </nav>
      </div>
    </header>
  );
}
