import {
  BookOpenCheck,
  CheckCircle2,
  GraduationCap,
  MonitorSmartphone,
  Route,
  ShieldCheck,
  Smartphone,
  Timer,
  WalletCards
} from "lucide-react";
import BenefitCard from "@/components/BenefitCard";
import MotionSection from "@/components/MotionSection";
import SectionTitle from "@/components/SectionTitle";
import TrustBadge from "@/components/TrustBadge";
import { benefits, trustItems } from "@/data/siteConfig";

const trustIcons = [MonitorSmartphone, ShieldCheck, Smartphone, CheckCircle2, BookOpenCheck];
const benefitIcons = [
  Route,
  GraduationCap,
  BookOpenCheck,
  Smartphone,
  CheckCircle2,
  Timer,
  ShieldCheck,
  WalletCards
];

export default function Benefits() {
  return (
    <MotionSection className="bg-ink py-0" id="beneficios">
      <div className="container-shell -mt-8 grid gap-4 pb-16 sm:grid-cols-2 lg:grid-cols-5">
        {trustItems.map((item, index) => (
          <TrustBadge description={item.description} icon={trustIcons[index]} key={item.title} title={item.title} />
        ))}
      </div>

      <div className="bg-cloud py-16 sm:py-24">
        <div className="container-shell">
          <SectionTitle
            eyebrow="Benefícios"
            title="Um material para estudar com clareza, ritmo e foco nos primeiros passos"
            description="A proposta é ajudar você a organizar ideias e entender caminhos possíveis, sem prometer ganhos fáceis ou resultados automáticos."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => (
              <BenefitCard
                description={benefit.description}
                icon={benefitIcons[index]}
                key={benefit.title}
                title={benefit.title}
              />
            ))}
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
