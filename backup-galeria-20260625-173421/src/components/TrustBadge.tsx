import type { LucideIcon } from "lucide-react";

type TrustBadgeProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export default function TrustBadge({ icon: Icon, title, description }: TrustBadgeProps) {
  return (
    <div className="flex h-full items-start gap-3 rounded-lg border border-white/10 bg-white/10 p-4 text-left shadow-sm backdrop-blur">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold/20 text-gold">
        <Icon aria-hidden="true" className="h-5 w-5" />
      </span>
      <span>
        <strong className="block text-sm font-black text-white">{title}</strong>
        <span className="mt-1 block text-sm leading-6 text-white/70">{description}</span>
      </span>
    </div>
  );
}
