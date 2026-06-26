export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function isConfigured(value?: string | null) {
  if (!value) {
    return false;
  }

  const normalized = value.trim();
  return normalized.length > 0 && !normalized.includes("_AQUI") && !normalized.includes("SEU_DOMINIO_AQUI");
}

export function safeExternalUrl(url: string, fallback = "#oferta") {
  if (!isConfigured(url)) {
    return fallback;
  }

  try {
    const parsed = new URL(url);
    return parsed.protocol === "http:" || parsed.protocol === "https:" ? parsed.toString() : fallback;
  } catch {
    return fallback;
  }
}

export function getCheckoutUrl(url: string) {
  return safeExternalUrl(url, "#oferta");
}

export function getSocialUrl(url: string) {
  return safeExternalUrl(url, "#rodape");
}

export function getSiteUrl(url: string) {
  return safeExternalUrl(url, "https://example.com");
}

export function getWhatsAppUrl(phone: string, message: string) {
  if (!isConfigured(phone)) {
    return "#rodape";
  }

  const digits = phone.replace(/\D/g, "");
  const phoneWithCountry = digits.startsWith("55") ? digits : `55${digits}`;
  return `https://wa.me/${phoneWithCountry}?text=${encodeURIComponent(message)}`;
}

export function getYoutubeEmbedUrl(videoId: string) {
  if (!isConfigured(videoId)) {
    return "";
  }

  return `https://www.youtube-nocookie.com/embed/${encodeURIComponent(
    videoId
  )}?rel=0&modestbranding=1&playsinline=1`;
}

export function currencyToNumber(value: string) {
  const numeric = value.replace(/[^\d,]/g, "").replace(",", ".");
  return Number(numeric || 0);
}
