"use client";

import { X } from "lucide-react";
import { useEffect } from "react";

type ModalProps = {
  open: boolean;
  title: string;
  children: React.ReactNode;
  onClose: () => void;
};

export default function Modal({ open, title, children, onClose }: ModalProps) {
  useEffect(() => {
    if (!open) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose, open]);

  if (!open) {
    return null;
  }

  return (
    <div
      aria-labelledby="gallery-modal-title"
      aria-modal="true"
      className="fixed inset-0 z-[80] flex items-center justify-center bg-ink/80 p-4 backdrop-blur-sm"
      role="dialog"
    >
      <div className="relative w-full max-w-4xl rounded-lg bg-white p-4 shadow-premium">
        <div className="mb-3 flex items-center justify-between gap-4">
          <h3 className="text-base font-black text-ink" id="gallery-modal-title">
            {title}
          </h3>
          <button
            aria-label="Fechar imagem ampliada"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-ink hover:bg-slate-100"
            onClick={onClose}
            type="button"
          >
            <X aria-hidden="true" className="h-5 w-5" />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
