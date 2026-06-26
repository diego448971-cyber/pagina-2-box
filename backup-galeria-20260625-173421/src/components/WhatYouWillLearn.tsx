import {
  BadgeDollarSign,
  Clock,
  Compass,
  Handshake,
  ListChecks,
  Megaphone,
  MessagesSquare,
  PackageCheck,
  Share2,
  WalletCards
} from "lucide-react";
import BenefitCard from "@/components/BenefitCard";
import MotionSection from "@/components/MotionSection";
import SectionTitle from "@/components/SectionTitle";
import { learningTopics } from "@/data/siteConfig";

const icons = {
  BadgeDollarSign,
  Clock,
  Compass,
  Handshake,
  ListChecks,
  Megaphone,
  MessagesSquare,
  PackageCheck,
  Share2,
  WalletCards
};

export default function WhatYouWillLearn() {
  return (
    <MotionSection className="bg-white">
      <div className="container-shell">
        <SectionTitle
          eyebrow="Conteúdo"
          title="O que você vai encontrar dentro do Box"
          description="Temas práticos para estruturar decisões iniciais, sempre com finalidade educativa e sem garantia de ganhos financeiros."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {learningTopics.map((topic) => {
            const Icon = icons[topic.iconName as keyof typeof icons] ?? ListChecks;
            return <BenefitCard description={topic.description} icon={Icon} key={topic.title} title={topic.title} />;
          })}
        </div>
        <p className="mx-auto mt-8 max-w-3xl rounded-lg border border-amber-200 bg-amber-50 p-4 text-center text-sm leading-6 text-amber-950">
          Este é um material educativo. Resultados dependem de dedicação, decisões, habilidades, contexto de mercado
          e outros fatores individuais.
        </p>
      </div>
    </MotionSection>
  );
}
