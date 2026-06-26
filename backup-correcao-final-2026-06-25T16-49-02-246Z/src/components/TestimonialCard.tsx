import { Star } from "lucide-react";
import ResponsiveImage from "@/components/ResponsiveImage";
import type { Testimonial } from "@/types";

type TestimonialCardProps = {
  testimonial: Testimonial;
};

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <article className="h-full rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center gap-4">
        <ResponsiveImage
          alt={`Foto de ${testimonial.name}`}
          className="h-14 w-14 shrink-0 rounded-lg"
          sizes="56px"
          src={testimonial.image}
        />
        <div>
          <h3 className="font-black text-ink">{testimonial.name}</h3>
          <p className="text-sm text-graphite">{testimonial.location}</p>
        </div>
      </div>
      <div className="mt-4 flex gap-1 text-amber-500" aria-label={`${testimonial.rating} de 5 estrelas`}>
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            aria-hidden="true"
            className="h-4 w-4"
            fill={index < testimonial.rating ? "currentColor" : "none"}
            key={index}
          />
        ))}
      </div>
      <p className="mt-4 text-sm leading-6 text-slate-700">{testimonial.text}</p>
      {testimonial.demo ? (
        <p className="mt-4 rounded-lg bg-amber-50 px-3 py-2 text-xs font-bold text-amber-900">
          Exemplo temporário. Substitua por depoimento real autorizado.
        </p>
      ) : null}
      {testimonial.verified ? (
        <p className="mt-3 text-xs font-bold uppercase tracking-[0.12em] text-emeraldSoft">
          Leitor verificado
        </p>
      ) : null}
    </article>
  );
}
