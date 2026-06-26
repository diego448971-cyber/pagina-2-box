import { cn } from "@/lib/utils";

type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
};

export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "dark",
  className
}: SectionTitleProps) {
  const isLight = tone === "light";

  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "mb-3 text-sm font-bold uppercase tracking-[0.14em]",
            isLight ? "text-gold" : "text-amber-700"
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "text-balance text-3xl font-black leading-tight sm:text-4xl",
          isLight ? "text-white" : "text-ink"
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-4 text-base leading-7 sm:text-lg",
            isLight ? "text-white/75" : "text-graphite"
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
