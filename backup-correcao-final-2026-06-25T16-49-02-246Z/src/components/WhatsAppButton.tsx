"use client";

import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { getWhatsAppUrl } from "@/lib/utils";
import { trackEvent } from "@/lib/tracking";

export default function WhatsAppButton() {
  const whatsappUrl = getWhatsAppUrl(siteConfig.whatsappNumber, siteConfig.whatsappMessage);

  return (
    <a
      aria-label="Precisa de ajuda? Abrir conversa no WhatsApp"
      className="group fixed bottom-24 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-lg bg-emeraldSoft text-white shadow-premium transition hover:scale-105 md:bottom-6"
      href={whatsappUrl}
      onClick={() => trackEvent("Contact", { channel: "whatsapp" })}
      rel="noopener noreferrer"
      target="_blank"
    >
      <MessageCircle aria-hidden="true" className="h-7 w-7" />
      <span className="pointer-events-none absolute bottom-full right-0 mb-2 whitespace-nowrap rounded-lg bg-ink px-3 py-2 text-xs font-bold text-white opacity-0 shadow-sm transition group-hover:opacity-100">
        Precisa de ajuda?
      </span>
    </a>
  );
}
