import { Facebook, Instagram } from "lucide-react";
import ResponsiveImage from "@/components/ResponsiveImage";
import MotionSection from "@/components/MotionSection";
import SectionTitle from "@/components/SectionTitle";
import { siteConfig } from "@/data/siteConfig";
import { getSocialUrl } from "@/lib/utils";

export default function AuthorSection() {
  return (
    <MotionSection className="bg-white">
      <div className="container-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <ResponsiveImage
          alt="Foto de Diego dos Santos Lima"
          className="aspect-[4/5] bg-gradient-to-br from-slate-100 to-slate-300"
          sizes="(max-width: 1024px) 100vw, 420px"
          src="/images/author.jpg"
        />
        <div>
          <SectionTitle
            align="left"
            eyebrow="Sobre o autor"
            title={siteConfig.authorName}
            description="Diego dos Santos Lima é o autor dos materiais deste Box, desenvolvido com o objetivo de organizar informações e apresentar caminhos práticos para pessoas que desejam conhecer possibilidades de renda extra e prestação de serviços."
          />
          <p className="mt-5 text-base leading-7 text-graphite">
            A proposta do conteúdo é reunir orientações iniciais em uma leitura simples, para que a pessoa consiga
            refletir sobre sua rotina, suas habilidades e possíveis formas de começar com mais responsabilidade.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-slate-200 px-4 text-sm font-black text-ink hover:bg-slate-100"
              href={getSocialUrl(siteConfig.instagramUrl)}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Instagram aria-hidden="true" className="h-4 w-4" />
              Instagram
            </a>
            <a
              className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-slate-200 px-4 text-sm font-black text-ink hover:bg-slate-100"
              href={getSocialUrl(siteConfig.facebookUrl)}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Facebook aria-hidden="true" className="h-4 w-4" />
              Facebook
            </a>
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
