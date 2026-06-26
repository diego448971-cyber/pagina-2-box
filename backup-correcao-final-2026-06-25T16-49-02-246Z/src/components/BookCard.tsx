import { BookOpenCheck, CheckCircle2 } from "lucide-react";
import CTAButton from "@/components/CTAButton";
import ResponsiveImage from "@/components/ResponsiveImage";
import type { Book } from "@/types";

type BookCardProps = {
  book: Book;
};

export default function BookCard({ book }: BookCardProps) {
  return (
    <article className="grid h-full gap-6 rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-gold/70 hover:shadow-premium md:grid-cols-[0.7fr_1fr]">
      <ResponsiveImage
        alt={book.imageAlt}
        className="aspect-[3/4] bg-gradient-to-br from-ink via-navy to-slate-900"
        imageClassName="p-2"
        objectFit="contain"
        sizes="(max-width: 768px) 80vw, 260px"
        src={book.image}
      />
      <div className="flex flex-col">
        <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-amber-100 text-amber-800">
          <BookOpenCheck aria-hidden="true" className="h-5 w-5" />
        </div>
        <h3 className="text-2xl font-black leading-tight text-ink">{book.title}</h3>
        <p className="mt-3 text-sm leading-6 text-graphite">{book.description}</p>
        <ul className="mt-5 space-y-3">
          {book.lessons.map((lesson) => (
            <li className="flex gap-3 text-sm leading-6 text-slate-700" key={lesson}>
              <CheckCircle2 aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-emeraldSoft" />
              <span>{lesson}</span>
            </li>
          ))}
        </ul>
        <CTAButton className="mt-6" href="#oferta" icon="arrow" variant="ghost">
          Ver oferta do box
        </CTAButton>
      </div>
    </article>
  );
}
