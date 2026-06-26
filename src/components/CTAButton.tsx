"use client";

import { ArrowRight, PlayCircle, ShoppingCart } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { cn, getCheckoutUrl } from "@/lib/utils";
import { trackEvent } from "@/lib/tracking";
import type { TrackingEvent } from "@/types";

type CTAButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "dark" | "ghost";
  className?: string;
  fullWidth?: boolean;
  eventName?: TrackingEvent;
  ariaLabel?: string;
  icon?: "cart" | "arrow" | "play" | "none";
  target?: "_blank" | "_self";
};

export default function CTAButton({
  children,
  href,
  variant = "primary",
  className,
  fullWidth = false,
  eventName = "InitiateCheckout",
  ariaLabel,
  icon = "arrow",
  target = "_self"
}: CTAButtonProps) {
  const resolvedHref = href ?? getCheckoutUrl(siteConfig.checkoutUrl);
  const Icon = icon === "cart" ? ShoppingCart : icon === "play" ? PlayCircle : ArrowRight;

  function handleClick() {
    if (eventName) {
      trackEvent(eventName, {
        product_name: siteConfig.productName,
        value: siteConfig.promotionalPrice
      });
    }
  }

  return (
    <a
      aria-label={ariaLabel}
      className={cn(
        "inline-flex min-h-12 items-center justify-center gap-2 rounded-lg px-5 py-3 text-center text-sm font-black transition duration-200 focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-4 active:translate-y-px",
        variant === "primary" &&
          "gold-shine bg-gold text-ink shadow-button hover:bg-amberSoft hover:shadow-premium",
        variant === "secondary" &&
          "border border-white/20 bg-white/10 text-white backdrop-blur hover:bg-white/20",
        variant === "dark" && "bg-ink text-white hover:bg-navy",
        variant === "ghost" && "border border-mist bg-white text-ink hover:border-gold hover:bg-amber-50",
        fullWidth && "w-full",
        className
      )}
      href={resolvedHref}
      onClick={handleClick}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      target={target}
    >
      {icon !== "none" ? <Icon aria-hidden="true" className="h-5 w-5 shrink-0" /> : null}
      <span>{children}</span>
    </a>
  );
}
