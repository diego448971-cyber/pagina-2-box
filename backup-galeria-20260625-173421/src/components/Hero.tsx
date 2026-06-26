import { CheckCircle2, LockKeyhole, MonitorSmartphone, ShieldCheck } from "lucide-react";
import CTAButton from "@/components/CTAButton";
import ResponsiveImage from "@/components/ResponsiveImage";
import { heroHighlights, siteConfig } from "@/data/siteConfig";

export default function Hero() {
  return (
    <section
      className="overflow-hidden bg-[linear-gradient(135deg,#07111f_0%,#0b1830_56%,#f6f8fb_56%,#f6f8fb_100%)] pb-16 pt-10 text-white sm:pt-16"
      id="topo"
    >
      <div className="container-shell grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="mb-5 inline-flex items-center gap-2 rounded-lg border border-gold/30 bg-gold/10 px-3 py-2 text-xs font-black uppercase tracking-[0.14em] text-gold">
            <CheckCircle2 aria-hidden="true" className="h-4 w-4" />
            Box com 2 livros digitais
          </p>
          <h1 className="text-balance text-4xl font-black leading-[1.05] sm:text-5xl lg:text-6xl">
            {siteConfig.heroTitle}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/75">{siteConfig.heroSubtitle}</p>

          <ul className="mt-7 grid gap-3">
            {heroHighlights.map((item) => (
              <li className="flex items-start gap-3 text-sm leading-6 text-white/80" key={item}>
                <CheckCircle2 aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 grid gap-3 sm:flex">
            <CTAButton fullWidth icon="cart" className="sm:w-auto !border-yellow-400/60 !bg-slate-950 !text-white shadow-lg hover:!bg-slate-800 [&_svg]:!text-yellow-400">
              Quero acessar os 2 livros
            </CTAButton>
            <CTAButton
              className="sm:w-auto !border-yellow-400/60 !bg-slate-950 !text-white shadow-lg hover:!bg-slate-800 [&_svg]:!text-yellow-400"
              eventName="ViewContent"
              fullWidth
              href="#vsl"
              icon="play"
              variant="secondary"
            >
              Assistir à apresentação
            </CTAButton>
          </div>

          <div className="mt-8 grid gap-3 text-sm sm:grid-cols-3">
            {[
              { icon: MonitorSmartphone, text: "Acesso digital" },
              { icon: CheckCircle2, text: "Leia em qualquer dispositivo" },
              { icon: ShieldCheck, text: "Compra segura" }
            ].map((item) => (
              <span className="flex items-center gap-2 rounded-lg border border-white/10 bg-slate-950/95 px-3 py-3 font-medium text-white shadow-md" key={item.text}>
                <item.icon aria-hidden="true" className="h-5 w-5 text-gold" />
                {item.text}
              </span>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -right-10 top-6 h-40 w-40 rounded-full bg-gold/20 blur-3xl" />
          <div className="relative rounded-lg border border-white/10 bg-white/10 p-4 shadow-premium backdrop-blur">
            <ResponsiveImage
              alt="Mockup do Box Renda Extra com Estratégia com dois livros digitais"
              className="aspect-[4/3] bg-gradient-to-br from-slate-950 via-navy to-amber-950"
              imageClassName="p-4"
              objectFit="contain"
              priority
              sizes="(max-width: 1024px) 100vw, 520px"
              src="/images/box-books.png"
            />
            <div className="mt-4 grid gap-3 rounded-lg bg-white p-4 text-ink shadow-sm sm:grid-cols-3">
              <span className="text-sm font-black">{siteConfig.promotionalPrice}</span>
              <span className="text-sm text-graphite line-through">{siteConfig.originalPrice}</span>
              <span className="flex items-center gap-2 text-sm font-bold text-emeraldSoft">
                <LockKeyhole aria-hidden="true" className="h-4 w-4" />
                Pagamento seguro
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
