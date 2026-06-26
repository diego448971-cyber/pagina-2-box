"use client";

import Image from "next/image";
import { ImageOff } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

type ResponsiveImageProps = {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  sizes?: string;
  priority?: boolean;
  objectFit?: "cover" | "contain";
};

export default function ResponsiveImage({
  src,
  alt,
  className,
  imageClassName,
  sizes = "(max-width: 768px) 100vw, 50vw",
  priority = false,
  objectFit = "cover"
}: ResponsiveImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div
        className={cn(
          "flex min-h-48 items-center justify-center rounded-lg border border-dashed border-slate-300 bg-slate-100 p-6 text-center text-sm text-slate-500",
          className
        )}
      >
        <div>
          <ImageOff aria-hidden="true" className="mx-auto mb-3 h-8 w-8 text-slate-400" />
          <p className="font-semibold text-slate-700">Imagem temporária</p>
          <p className="mt-1">Substitua o arquivo indicado em public/images.</p>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("relative overflow-hidden rounded-lg bg-slate-100", className)}>
      <Image
        alt={alt}
        className={cn(objectFit === "cover" ? "object-cover" : "object-contain", imageClassName)}
        fill
        onError={() => setHasError(true)}
        priority={priority}
        sizes={sizes}
        src={src}
      />
    </div>
  );
}
