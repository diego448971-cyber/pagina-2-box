"use client";

import { ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";
import { siteConfig } from "@/data/siteConfig";
import { cn, getCheckoutUrl } from "@/lib/utils";
import { trackEvent } from "@/lib/tracking";

export default function MobilePurchaseBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setVisible(window.scrollY > Math.max(window.innerHeight * 0.72, 420));
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 px-4 py-3 shadow-premium backdrop-blur transition md:hidden",
        visible ? "translate-y-0" : "translate-y-full"
      )}
    >
      <div className="mx-auto flex max-w-md items-center gap-3">
        <div className="min-w-0 flex-1">
          <p className="text-xs font-bold text-graphite">Box com 2 livros</p>
          <p className="text-xl font-black leading-tight text-ink">{siteConfig.promotionalPrice}</p>
        </div>
        <a
          className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-lg bg-gold px-4 text-sm font-black text-ink shadow-button active:translate-y-px"
          href={getCheckoutUrl(siteConfig.checkoutUrl)}
          onClick={() => trackEvent("InitiateCheckout", { source: "mobile_bar" })}
        >
          <ShoppingCart aria-hidden="true" className="h-4 w-4" />
          Comprar agora
        </a>
      </div>
    </div>
  );
}
