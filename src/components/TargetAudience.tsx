import { CircleAlert, UserRoundCheck } from "lucide-react";
import MotionSection from "@/components/MotionSection";
import SectionTitle from "@/components/SectionTitle";
import { targetAudience } from "@/data/siteConfig";

export default function TargetAudience() {
  return (
    <MotionSection className="bg-cloud">
      <div className="container-shell">
        <SectionTitle
          eyebrow="Para quem é"
          title="Criado para pessoas que querem começar com mais organização"
          description="O Box foi pensado para iniciantes e pessoas ocupadas que desejam estudar possibilidades de renda extra e prestação de serviços com mais clareza."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {targetAudience.map((item) => (
            <div className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-4 shadow-sm" key={item}>
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emeraldSoft">
                <UserRoundCheck aria-hidden="true" className="h-5 w-5" />
              </span>
              <span className="text-sm font-black text-ink">{item}</span>
            </div>
          ))}
        </div>
        <div className="mt-8 flex gap-4 rounded-lg border border-amber-200 bg-white p-5 shadow-sm">
          <CircleAlert aria-hidden="true" className="mt-1 h-6 w-6 shrink-0 text-amber-700" />
          <p className="text-sm leading-6 text-slate-700">
            Este material pode não ser para você caso esteja procurando dinheiro fácil, fórmulas milagrosas ou
            resultados sem dedicação.
          </p>
        </div>
      </div>
    </MotionSection>
  );
}
