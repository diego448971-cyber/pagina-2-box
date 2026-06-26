import { BadgeCheck } from "lucide-react";
import MotionSection from "@/components/MotionSection";
import SectionTitle from "@/components/SectionTitle";
import { siteConfig } from "@/data/siteConfig";

export default function Guarantee() {
  return (
    <MotionSection className="bg-cloud">
      <div className="container-shell grid gap-8 lg:grid-cols-[0.6fr_1fr] lg:items-center">
        <div className="flex h-40 w-40 items-center justify-center rounded-lg border border-amber-200 bg-white text-amber-700 shadow-sm">
          <BadgeCheck aria-hidden="true" className="h-16 w-16" />
        </div>
        <SectionTitle
          align="left"
          eyebrow="Garantia e cancelamento"
          title={siteConfig.guaranteeTime}
          description="Você poderá solicitar o cancelamento dentro do prazo informado na página de pagamento, conforme as condições aplicáveis à compra. Edite o prazo real no arquivo de configuração antes de publicar."
        />
      </div>
    </MotionSection>
  );
}
