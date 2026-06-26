"use client";

import { ChevronLeft, ChevronRight, Expand } from "lucide-react";
import { useState } from "react";
import Modal from "@/components/Modal";
import ResponsiveImage from "@/components/ResponsiveImage";
import type { GalleryImage } from "@/types";

type ImageGalleryProps = {
  images: GalleryImage[];
};

export default function ImageGallery({ images }: ImageGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activeImage = activeIndex === null ? null : images[activeIndex];

  function goToNext() {
    setActiveIndex((current) => (current === null ? 0 : (current + 1) % images.length));
  }

  function goToPrevious() {
    setActiveIndex((current) => (current === null ? 0 : (current - 1 + images.length) % images.length));
  }

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {images.map((image, index) => (
          <button
            aria-label={`Ampliar imagem: ${image.caption}`}
            className="group relative overflow-hidden rounded-lg border border-slate-200 bg-white text-left shadow-sm transition hover:-translate-y-1 hover:shadow-premium"
            key={image.src}
            onClick={() => setActiveIndex(index)}
            type="button"
          >
            <ResponsiveImage
              alt={image.alt}
              className="aspect-[4/3] rounded-none"
              sizes="(max-width: 768px) 100vw, 25vw"
              src={image.src}
            />
            <span className="flex items-center justify-between gap-3 p-4 text-sm font-bold text-ink">
              {image.caption}
              <Expand aria-hidden="true" className="h-4 w-4 text-amber-700" />
            </span>
          </button>
        ))}
      </div>

      <Modal
        onClose={() => setActiveIndex(null)}
        open={activeIndex !== null}
        title={activeImage?.caption ?? "Feedback ampliado"}
      >
        {activeImage ? (
          <div>
            <ResponsiveImage
              alt={activeImage.alt}
              className="aspect-video bg-slate-100"
              imageClassName="object-contain"
              objectFit="contain"
              sizes="90vw"
              src={activeImage.src}
            />
            <div className="mt-4 flex items-center justify-between gap-3">
              <button
                className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-slate-200 px-4 text-sm font-black text-ink hover:bg-slate-100"
                onClick={goToPrevious}
                type="button"
              >
                <ChevronLeft aria-hidden="true" className="h-4 w-4" />
                Anterior
              </button>
              <button
                className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-slate-200 px-4 text-sm font-black text-ink hover:bg-slate-100"
                onClick={goToNext}
                type="button"
              >
                Próxima
                <ChevronRight aria-hidden="true" className="h-4 w-4" />
              </button>
            </div>
          </div>
        ) : null}
      </Modal>
    </>
  );
}
