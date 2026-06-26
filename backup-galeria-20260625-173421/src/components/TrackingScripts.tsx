"use client";

import { useEffect } from "react";
import { siteConfig } from "@/data/siteConfig";
import { isConfigured } from "@/lib/utils";

const STORAGE_KEY = "box-renda-extra-cookie-consent";

type TrackingWindow = Window & {
  dataLayer?: unknown[];
  fbq?: (...args: unknown[]) => void;
  _fbq?: (...args: unknown[]) => void;
  gtag?: (...args: unknown[]) => void;
};

function hasConsent() {
  return localStorage.getItem(STORAGE_KEY) === "accepted";
}

function appendScript(id: string, src: string) {
  if (document.getElementById(id)) {
    return;
  }

  const script = document.createElement("script");
  script.async = true;
  script.id = id;
  script.src = src;
  document.head.appendChild(script);
}

function initGoogleAnalytics() {
  if (!isConfigured(siteConfig.googleAnalyticsId)) {
    return;
  }

  const win = window as TrackingWindow;
  appendScript(
    "google-analytics-script",
    `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(siteConfig.googleAnalyticsId)}`
  );
  win.dataLayer = win.dataLayer ?? [];
  win.gtag =
    win.gtag ??
    function gtag(...args: unknown[]) {
      win.dataLayer?.push(args);
    };
  win.gtag("js", new Date());
  win.gtag("config", siteConfig.googleAnalyticsId, { anonymize_ip: true });
}

function initMetaPixel() {
  if (!isConfigured(siteConfig.metaPixelId)) {
    return;
  }

  const win = window as TrackingWindow;
  if (!win.fbq) {
    const fbq = function fbq(...args: unknown[]) {
      (fbq as typeof fbq & { queue?: unknown[][] }).queue?.push(args);
    } as TrackingWindow["fbq"] & { queue?: unknown[][]; loaded?: boolean; version?: string };
    fbq.queue = [];
    fbq.loaded = true;
    fbq.version = "2.0";
    win.fbq = fbq;
    win._fbq = fbq;
  }

  appendScript("meta-pixel-script", "https://connect.facebook.net/pt_BR/fbevents.js");
  win.fbq?.("init", siteConfig.metaPixelId);
  win.fbq?.("track", "PageView");
}

export default function TrackingScripts() {
  useEffect(() => {
    function initIfAllowed() {
      if (hasConsent()) {
        initGoogleAnalytics();
        initMetaPixel();
      }
    }

    initIfAllowed();
    window.addEventListener("cookie-consent-changed", initIfAllowed);
    return () => window.removeEventListener("cookie-consent-changed", initIfAllowed);
  }, []);

  return null;
}
