import { CheckCircle2, ShieldCheck, Smartphone } from "lucide-react";
import CTAButton from "@/components/CTAButton";
import MotionSection from "@/components/MotionSection";
import ResponsiveImage from "@/components/ResponsiveImage";

export default function FinalCTA() {
  return (
    <MotionSection className="bg-ink text-white">
      <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <ResponsiveImage
          alt="Dois livros digitais do Box Renda Extra com Estratégia"
          className="aspect-[4/3] bg-gradient-to-br from-slate-950 via-navy to-amber-950"
          imageClassName="p-4"
          objectFit="contain"
          sizes="(max-width: 1024px) 100vw, 430px"
          src="/images/box-books.png"
        />
        <div>
          <p className="mb-3 text-sm font-black uppercase tracking-[0.14em] text-gold">Chamada final</p>
          <h2 className="text-balance text-3xl font-black leading-tight sm:text-4xl">
            Comece a organizar seus próximos passos com um conteúdo preparado para iniciantes
          </h2>
          <p className="mt-4 text-base leading-7 text-white/75">
            Receba os dois livros digitais, estude no seu ritmo e use as orientações como apoio para planejar suas
            próximas ações com mais clareza.
          </p>
          <div className="mt-6 grid gap-3 text-sm text-white/80 sm:grid-cols-3">
            {[
              { icon: Smartphone, text: "Acesso digital" },
              { icon: ShieldCheck, text: "Compra segura" },
              { icon: CheckCircle2, text: "Suporte configurável" }
            ].map((item) => (
              <span className="flex items-center gap-2" key={item.text}>
                <item.icon aria-hidden="true" className="h-5 w-5 text-gold" />
                {item.text}
              </span>
            ))}
          </div>
          <div className="mt-8">
            <CTAButton icon="cart">Quero acessar o Box agora</CTAButton>
          </div>
          <p className="mt-5 text-sm leading-6 text-white/60">
            Produto educacional. Não há garantia de resultados financeiros; os resultados variam de acordo com cada
            pessoa.
          </p>
        </div>
      </div>
    </MotionSection>
  );
}
