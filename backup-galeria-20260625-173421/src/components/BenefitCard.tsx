import type { LucideIcon } from "lucide-react";
import { CheckCircle2 } from "lucide-react";

type BenefitCardProps = {
  title: string;
  description: string;
  icon?: LucideIcon;
};

export default function BenefitCard({ title, description, icon: Icon = CheckCircle2 }: BenefitCardProps) {
  return (
    <article className="h-full rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-gold/70 hover:shadow-premium">
      <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-amber-100 text-amber-800">
        <Icon aria-hidden="true" className="h-5 w-5" />
      </span>
      <h3 className="text-lg font-black text-ink">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-graphite">{description}</p>
    </article>
  );
}
