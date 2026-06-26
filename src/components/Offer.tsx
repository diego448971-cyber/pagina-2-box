"use client";

import { CheckCircle2, CreditCard, LockKeyhole, PackageCheck, ShieldCheck } from "lucide-react";
import { useEffect, useRef } from "react";
import CTAButton from "@/components/CTAButton";
import ResponsiveImage from "@/components/ResponsiveImage";
import SectionTitle from "@/components/SectionTitle";
import { bonuses, books, siteConfig } from "@/data/siteConfig";
import { trackEvent } from "@/lib/tracking";

export default function Offer() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const tracked = useRef(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !tracked.current) {
          tracked.current = true;
          trackEvent("ViewOffer", { product_name: siteConfig.productName });
        }
      },
      { threshold: 0.36 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section-spacing bg-white" id="oferta" ref={sectionRef}>
      <div className="container-shell">
        <SectionTitle
          eyebrow="Oferta"
          title="Receba os dois livros digitais em uma única oferta"
          description="Uma compra simples para acessar o Box Renda Extra com Estratégia e estudar no seu ritmo."
        />

        <div className="mx-auto mt-10 grid max-w-5xl gap-8 rounded-lg border border-slate-200 bg-cloud p-5 shadow-premium lg:grid-cols-[0.9fr_1.1fr] lg:p-8">
          <div>
            <ResponsiveImage
              alt="Box com os dois livros digitais sobre renda extra"
              className="aspect-[4/3] bg-gradient-to-br from-ink via-navy to-amber-950"
              imageClassName="p-4"
              objectFit="contain"
              sizes="(max-width: 1024px) 100vw, 420px"
              src="/images/box-books.png"
            />
            <div className="mt-4 grid gap-3 text-sm text-slate-700">
              <p className="flex items-center gap-2">
                <ShieldCheck aria-hidden="true" className="h-5 w-5 text-emeraldSoft" />
                Você será direcionado para o ambiente seguro de pagamento.
              </p>
              <p className="flex items-center gap-2">
                <PackageCheck aria-hidden="true" className="h-5 w-5 text-emeraldSoft" />
                Produto digital com acesso após confirmação do pagamento.
              </p>
            </div>
          </div>

          <div className="rounded-lg bg-white p-5 shadow-sm">
            <p className="text-sm font-black uppercase tracking-[0.14em] text-amber-700">Incluído no box</p>
            <ul className="mt-5 grid gap-3">
              {books.map((book) => (
                <li className="flex gap-3 text-sm leading-6 text-slate-700" key={book.title}>
                  <CheckCircle2 aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-emeraldSoft" />
                  <span>
                    <strong className="text-ink">{book.title}</strong>
                    <span className="block">Livro digital em PDF ou formato definido no checkout.</span>
                  </span>
                </li>
              ))}
              {siteConfig.sections.bonuses
                ? bonuses.map((bonus) => (
                    <li className="flex gap-3 text-sm leading-6 text-slate-700" key={bonus.title}>
                      <CheckCircle2 aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-emeraldSoft" />
                      <span>
                        <strong className="text-ink">{bonus.title}</strong>
                        <span className="block">Material complementar.</span>
                      </span>
                    </li>
                  ))
                : null}
            </ul>

            <div className="my-6 h-px bg-slate-200" />

            <p className="text-sm text-graphite">De <span className="line-through">{siteConfig.originalPrice}</span> por</p>
            <p className="mt-1 text-5xl font-black tracking-normal text-ink">{siteConfig.promotionalPrice}</p>
            <p className="mt-2 text-sm font-semibold text-graphite">{siteConfig.paymentInfo}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {siteConfig.paymentMethods.map((method) => (
                <span
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-bold text-slate-700"
                  key={method}
                >
                  <CreditCard aria-hidden="true" className="h-4 w-4 text-amber-700" />
                  {method}
                </span>
              ))}
            </div>

            <CTAButton className="mt-6" fullWidth icon="cart">
              Quero receber os 2 livros
            </CTAButton>

            <p className="mt-4 flex items-start gap-2 text-xs leading-5 text-graphite">
              <LockKeyhole aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-emeraldSoft" />
              Acesso enviado após confirmação do pagamento. Produto digital. Não há promessa de resultado financeiro.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
