"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "box-renda-extra-cookie-consent";

export default function CookieNotice() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(!localStorage.getItem(STORAGE_KEY));
  }, []);

  function saveChoice(choice: "accepted" | "declined") {
    localStorage.setItem(STORAGE_KEY, choice);
    window.dispatchEvent(new CustomEvent("cookie-consent-changed", { detail: choice }));
    setVisible(false);
  }

  if (!visible) {
    return null;
  }

  return (
    <div className="fixed inset-x-4 bottom-24 z-[70] mx-auto max-w-3xl rounded-lg border border-slate-200 bg-white p-4 shadow-premium md:bottom-6">
      <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
        <p className="text-sm leading-6 text-slate-700">
          Usamos cookies essenciais e, somente com consentimento, cookies opcionais de análise quando os IDs forem
          configurados.
        </p>
        <div className="flex flex-wrap gap-2">
          <button
            className="min-h-11 rounded-lg bg-ink px-4 text-sm font-black text-white hover:bg-navy"
            onClick={() => saveChoice("accepted")}
            type="button"
          >
            Aceitar
          </button>
          <button
            className="min-h-11 rounded-lg border border-slate-200 px-4 text-sm font-black text-ink hover:bg-slate-100"
            onClick={() => saveChoice("declined")}
            type="button"
          >
            Recusar opcionais
          </button>
          <a
            className="inline-flex min-h-11 items-center rounded-lg border border-slate-200 px-4 text-sm font-black text-ink hover:bg-slate-100"
            href="/politica-de-privacidade"
          >
            Ver política
          </a>
        </div>
      </div>
    </div>
  );
}
