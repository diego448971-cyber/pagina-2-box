import type { TrackingEvent } from "@/types";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
  }
}

const gaEventNames: Record<TrackingEvent, string> = {
  ViewContent: "view_item",
  InitiateCheckout: "begin_checkout",
  Contact: "contact",
  PlayVideo: "video_start",
  ViewOffer: "view_promotion"
};

export function trackEvent(eventName: TrackingEvent, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") {
    return;
  }

  window.fbq?.("track", eventName, params);
  window.gtag?.("event", gaEventNames[eventName], params);
}
