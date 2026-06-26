"use client";

import { ChevronDown } from "lucide-react";
import { useId, useState } from "react";
import { cn } from "@/lib/utils";

type FAQItemProps = {
  question: string;
  answer: string;
};

export default function FAQItem({ question, answer }: FAQItemProps) {
  const [open, setOpen] = useState(false);
  const answerId = useId();

  return (
    <div className="rounded-lg border border-slate-200 bg-white shadow-sm">
      <button
        aria-controls={answerId}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-black text-ink"
        onClick={() => setOpen((current) => !current)}
        type="button"
      >
        <span>{question}</span>
        <ChevronDown
          aria-hidden="true"
          className={cn("h-5 w-5 shrink-0 transition", open && "rotate-180")}
        />
      </button>
      <div className={cn("grid transition-all duration-200", open ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
        <div className="overflow-hidden">
          <p className="px-5 pb-5 text-sm leading-6 text-graphite" id={answerId}>
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}
