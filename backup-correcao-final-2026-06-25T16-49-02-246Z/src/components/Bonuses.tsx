import { Gift } from "lucide-react";
import BenefitCard from "@/components/BenefitCard";
import MotionSection from "@/components/MotionSection";
import SectionTitle from "@/components/SectionTitle";
import { bonuses } from "@/data/siteConfig";

export default function Bonuses() {
  return (
    <MotionSection className="bg-ink text-white">
      <div className="container-shell">
        <SectionTitle
          eyebrow="Bônus"
          title="Materiais complementares para apoiar seus primeiros passos"
          description="Os bônus são guias auxiliares e podem ser ativados ou desativados no arquivo central de configuração."
          tone="light"
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {bonuses.map((bonus) => (
            <BenefitCard description={bonus.description} icon={Gift} key={bonus.title} title={bonus.title} />
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
